import { Common, CommonFilePicker, MediaFilepickerOptions } from './mediafilepicker.common';
import * as app from 'tns-core-modules/application/application';
import * as utils from "tns-core-modules/utils/utils";
import * as fs from "tns-core-modules/file-system/file-system"

declare var GMImagePickerController, GMImagePickerControllerDelegate, NSDocumentDirectory, NSUserDomainMask, PHAssetMediaTypeImage, PHAssetMediaTypeVideo;

export class MediafilepickerDeligate extends NSObject {

        public static ObjCProtocols = [GMImagePickerControllerDelegate];

        private _owner: WeakRef<Mediafilepicker>;

        public static initWithOwner(owner: WeakRef<Mediafilepicker>): MediafilepickerDeligate {

                let deligate = <MediafilepickerDeligate>MediafilepickerDeligate.new();
                deligate._owner = owner;

                return deligate;
        }

        public assetsPickerControllerDidFinishPickingAssets(picker, assetArray: NSArray<any>) {

                picker.dismissViewControllerAnimatedCompletion(true, null);
                this._owner.get().getFiles(assetArray);
        }
}

export class Mediafilepicker extends Common implements CommonFilePicker {

        public output = "";

        public startFilePicker(params: MediaFilepickerOptions) {

                let folder = fs.knownFolders.documents();
                folder.getFolder("filepicker");
                let options = params.ios;

                let picker = GMImagePickerController.alloc().init();
                picker.delegate = MediafilepickerDeligate.initWithOwner(new WeakRef(this));

                //options

                options.allowsMultipleSelection ? picker.allowsMultipleSelection = true : picker.allowsMultipleSelection = false;
                options.displaySelectionInfoToolbar ? picker.displaySelectionInfoToolbar = true : picker.displaySelectionInfoToolbar = false;
                options.displayAlbumsNumberOfAssets ? picker.displayAlbumsNumberOfAssets = true : picker.displayAlbumsNumberOfAssets = false;
                options.confirmSingleSelection ? picker.confirmSingleSelection = true : picker.confirmSingleSelection = false;
                options.showCameraButton ? picker.showCameraButton = true : picker.showCameraButton = false;
                options.autoSelectCameraImages ? picker.autoSelectCameraImages = true : picker.autoSelectCameraImages = false;

                if (options.title) {
                        picker.title = options.title;
                }

                if (options.mediaTypes == "image") {
                        picker.mediaTypes = [(PHAssetMediaTypeImage)];
                } else if (options.mediaTypes == "video") {
                        picker.mediaTypes = [(PHAssetMediaTypeVideo)];
                }

                if (picker.customNavigationBarPrompt) {
                        picker.customNavigationBarPrompt = picker.customNavigationBarPrompt;
                }
                if (options.confirmSingleSelectionPrompt) {
                        picker.confirmSingleSelectionPrompt = options.confirmSingleSelectionPrompt;
                }
                if (options.colsInPortrait) {
                        picker.colsInPortrait = options.colsInPortrait;
                }
                if (options.colsInLandscape) {
                        picker.colsInLandscape = options.colsInLandscape;
                }
                if (options.minimumInteritemSpacing) {
                        picker.minimumInteritemSpacing = options.minimumInteritemSpacing;
                }

                let app = utils.ios.getter(UIApplication, UIApplication.sharedApplication);
                app.keyWindow.rootViewController.presentViewControllerAnimatedCompletion(picker, true, null)
        }

        public getFiles(assetArray: NSArray<any>) {

                let t = this;

                t.handleJob(assetArray).then(res => {

                        setTimeout(() => {

                                t.output = t.output.replace(/,+$/, '')
                                t.notify({
                                        eventName: "getFiles",
                                        object: t,
                                        files: t.output
                                })
                        }, 200)

                }).catch(er => {

                        t.notify({
                                eventName: "error",
                                object: t,
                                msg: er
                        })
                })
        }

        public handleJob(assetArray: NSArray<any>) {

                let t = this;
                let edit = PHContentEditingInputRequestOptions.alloc().init();

                return new Promise(function (resolve, reject) {

                        for (let i = 0; i < assetArray.count; i++) {

                                let data: PHAsset = assetArray[i];
                                let rawData: PHAsset = assetArray[i];
                                if (data.mediaType == PHAssetMediaType.Image) {

                                        let _uriRequestOptions = PHImageRequestOptions.alloc().init();
                                        _uriRequestOptions.synchronous = true;

                                        PHImageManager.defaultManager().requestImageDataForAssetOptionsResultHandler(data, _uriRequestOptions, (data, uti, orientation, info) => {

                                                let uri = info.objectForKey("PHImageFileURLKey");
                                                let newUri = uri.toString();
                                                let fileName = newUri.replace(/^.*[\\\/]/, '');

                                                t.copyImageFiles(rawData, fileName);

                                        });

                                } else if (data.mediaType == PHAssetMediaType.Video) {

                                        let uriVideoRequestOptions = PHVideoRequestOptions.alloc().init()
                                        PHImageManager.defaultManager().requestAVAssetForVideoOptionsResultHandler(data, uriVideoRequestOptions, (data, audioMix, info) => {

                                                let urlAsset = data as AVURLAsset;
                                                let uri: any = urlAsset.URL;

                                                let newUri = uri.toString();
                                                let fileName = newUri.replace(/^.*[\\\/]/, '');

                                                t.copyVideoFiles(urlAsset.URL, fileName);

                                        });
                                }

                        }
                        resolve(t.output);

                })

        }

        public copyImageFiles(rawData: PHAsset, fileName: string) {

                let t = this;

                return new Promise(function (resolve, reject) {

                        let docuPath = fs.knownFolders.documents();
                        let targetImgeURL = docuPath.path + "/filepicker/" + fileName;

                        let phManager = PHImageManager.defaultManager()
                        let options = PHImageRequestOptions.alloc().init();
                        options.synchronous = true; // do it if you want things running in background thread

                        phManager.requestImageDataForAssetOptionsResultHandler(rawData, options, function (imageData, dataUTI, orientation, info) {

                                let newData: NSData = imageData

                                if (newData) {

                                        try {
                                                newData.writeToFileAtomically(targetImgeURL, true);
                                                t.output = targetImgeURL.toString() + "," + t.output;
                                                resolve(targetImgeURL);

                                        } catch (e) {

                                                reject(e);
                                        }

                                }
                        })
                })
        }

        public copyVideoFiles(url: NSURL, fileName) {

                let t = this;

                return new Promise(function (resolve, reject) {

                        let docuPath = fs.knownFolders.documents();

                        let targetURL = NSURL.fileURLWithPath(docuPath.path + "/filepicker/" + fileName);

                        if (fs.File.exists(docuPath.path + "/filepicker/" + fileName)) {
                                docuPath.getFile("filepicker/" + fileName).remove()
                        }

                        try {
                                let write = NSFileManager.defaultManager.copyItemAtURLToURLError(url, targetURL);

                                if (write) {
                                        t.output = targetURL.toString() + "," + t.output;
                                        resolve(t.output)
                                } else {
                                        reject("Not copied")
                                }
                        } catch (e) {
                                reject(e)
                        }

                })

        }

}
