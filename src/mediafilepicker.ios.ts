import { Observable } from 'tns-core-modules/data/observable';
import { MediaPickerInterface, ImagePickerOptions, VideoPickerOptions, AudioPickerOptions, FilePickerOptions } from "./mediafilepicker.common";
import * as utils from "tns-core-modules/utils/utils";
import * as fs from "tns-core-modules/file-system/file-system";
import { View } from 'tns-core-modules/ui/core/view';

declare const PHAssetMediaTypeImage, PHAssetMediaTypeVideo, PHAssetMediaTypeAudio;
const main_queue = dispatch_get_current_queue();

export class Mediafilepicker extends Observable implements MediaPickerInterface {

    private _mediaPickerIQDeligate: MediafilepickerIQMediaPickerControllerDelegate;
    private _mediaPickerDocumentDeligate: MediafilepickerDocumentPickerDelegate;

    public results;
    public msg;

    constructor() {

        super();

        this._mediaPickerIQDeligate = MediafilepickerIQMediaPickerControllerDelegate.initWithOwner(new WeakRef(this));
        this._mediaPickerDocumentDeligate = MediafilepickerDocumentPickerDelegate.initWithOwner(new WeakRef(this));

        let docuPath = fs.knownFolders.documents();
        docuPath.getFolder("filepicker");
    }

    /**
     * openImagePicker
     */
    public openImagePicker(params: ImagePickerOptions) {

        let options = params.ios, t = this;

        let controller = IQMediaPickerController.alloc().init();
        controller.delegate = this._mediaPickerIQDeligate;

        controller.sourceType = IQMediaPickerControllerSourceType.Library;
        controller.mediaTypes = utils.ios.collections.jsArrayToNSArray([PHAssetMediaTypeImage]);

        if (options.isCaptureMood) {
            controller.sourceType = IQMediaPickerControllerSourceType.CameraMicrophone;
        }

        if (options.maxNumberFiles > 0) {
            controller.allowsPickingMultipleItems = true;
            controller.maximumItemCount = options.maxNumberFiles;
        }

        if (!options.isCaptureMood) {

            let picker = DKImagePickerController.new();
            picker.assetType = DKImagePickerControllerAssetType.AllPhotos;
            picker.singleSelect = true;
            picker.showsCancelButton = true;
            picker.sourceType = DKImagePickerControllerSourceType.Photo;
            picker.exportsWhenCompleted = true;
            picker.exportStatusChanged = function (p: DKImagePickerControllerExportStatus) {

                if (p == DKImagePickerControllerExportStatus.None) {
                    t.msg = DKImagePickerControllerExportStatus.None;
                    t.notify({
                        eventName: 'exportStatus',
                        object: t
                    });
                } else {
                    t.msg = DKImagePickerControllerExportStatus.Exporting;
                    t.notify({
                        eventName: 'exportStatus',
                        object: t
                    });
                }
            }

            if (options.maxNumberFiles > 0) {
                picker.singleSelect = false;
                picker.maxSelectableCount = options.maxNumberFiles;
            }

            if (options.isNeedCamera) {
                picker.sourceType = DKImagePickerControllerSourceType.Both;
            }

            picker.didSelectAssets = ((res) => {

                let output = [];

                let items: any = utils.ios.collections.nsArrayToJSArray(res);

                for (let i = 0; i < items.length; i++) {
                    let item: DKAsset = items[i];
                    let file = {
                        type: 'image',
                        file: item.localTemporaryPath.path,
                        fileName: item.fileName,
                        rawData: item.originalAsset.toString()
                    };
                    output.push(file);
                }

                t.results = output;

                t.notify({
                    eventName: 'getFiles',
                    object: t
                });

            });

            picker.didCancel = (() => {
                t.msg = 'Picker cancel';
                t.notify({
                    eventName: 'cancel',
                    object: t
                });
            });

            this.presentViewController(picker, options.hostView);

        } else {
            this.presentViewController(controller, options.hostView);
        }
    }

    /**
     * openVideoPicker
     */
    public openVideoPicker(params: VideoPickerOptions) {

        let options = params.ios, t = this;

        let controller = IQMediaPickerController.alloc().init();
        controller.delegate = this._mediaPickerIQDeligate;
        controller.mediaTypes = utils.ios.collections.jsArrayToNSArray([PHAssetMediaTypeVideo]);
        controller.sourceType = IQMediaPickerControllerSourceType.Library;

        if (options.isCaptureMood) {
            controller.sourceType = IQMediaPickerControllerSourceType.CameraMicrophone;
        }

        if (options.maxNumberFiles > 0) {
            controller.allowsPickingMultipleItems = true;
            controller.maximumItemCount = options.maxNumberFiles;
        }

        if (options.videoMaximumDuration > 0) {
            controller.videoMaximumDuration = options.videoMaximumDuration;
        }

        if (options.allowedVideoQualities) {

            if (options.allowedVideoQualities.length > 0) {
                controller.allowedVideoQualities = utils.ios.collections.jsArrayToNSArray(options.allowedVideoQualities);
            }

        }

        if (!options.isCaptureMood) {

            let picker = DKImagePickerController.new();
            picker.assetType = DKImagePickerControllerAssetType.AllVideos;
            picker.singleSelect = true;
            picker.showsCancelButton = true;
            picker.sourceType = DKImagePickerControllerSourceType.Photo;
            picker.exportsWhenCompleted = true;
            picker.exportStatusChanged = function (p: DKImagePickerControllerExportStatus) {

                if (p == DKImagePickerControllerExportStatus.None) {
                    t.msg = DKImagePickerControllerExportStatus.None;
                    t.notify({
                        eventName: 'exportStatus',
                        object: t
                    });
                } else {
                    t.msg = DKImagePickerControllerExportStatus.Exporting;
                    t.notify({
                        eventName: 'exportStatus',
                        object: t
                    });
                }
            }

            if (options.maxNumberFiles > 0) {
                picker.singleSelect = false;
                picker.maxSelectableCount = options.maxNumberFiles;
            }

            picker.didSelectAssets = ((res) => {

                let output = [];

                let items: any = utils.ios.collections.nsArrayToJSArray(res);

                for (let i = 0; i < items.length; i++) {
                    let item: DKAsset = items[i];
                    let file = {
                        type: 'video',
                        file: item.localTemporaryPath.path,
                        fileName: item.fileName,
                        rawData: item.originalAsset
                    };
                    output.push(file);
                }

                t.results = output;

                t.notify({
                    eventName: 'getFiles',
                    object: t
                });

            });

            picker.didCancel = (() => {
                t.msg = 'Picker cancel';
                t.notify({
                    eventName: 'cancel',
                    object: t
                });
            });

            this.presentViewController(picker, options.hostView);

        } else {
            this.presentViewController(controller, options.hostView);
        }
    }

    /**
     * openAudioPicker
     */
    public openAudioPicker(params: AudioPickerOptions) {

        let options = params.ios, t = this;
        let controller = IQMediaPickerController.alloc().init();
        controller.delegate = this._mediaPickerIQDeligate;
        controller.mediaTypes = utils.ios.collections.jsArrayToNSArray([PHAssetMediaTypeAudio]);
        controller.sourceType = IQMediaPickerControllerSourceType.Library;

        if (options.isCaptureMood) {
            controller.sourceType = IQMediaPickerControllerSourceType.CameraMicrophone;
        }

        if (options.maxNumberFiles > 0) {
            controller.allowsPickingMultipleItems = true;
            controller.maximumItemCount = options.maxNumberFiles;
        }

        if (options.audioMaximumDuration > 0) {
            controller.audioMaximumDuration = options.audioMaximumDuration;
        }

        if (!options.isCaptureMood) {
            MPMediaLibrary.requestAuthorization(function (status) {

                if (status === MPMediaLibraryAuthorizationStatus.Authorized) {
                    dispatch_async(main_queue, () => {
                        t.presentViewController(controller, options.hostView);
                    });
                } else {
                    t.msg = "Permission Error!";
                    t.notify({
                        eventName: 'error',
                        object: t
                    });
                }
            });
        } else {
            this.presentViewController(controller, options.hostView);
        }
    }

    /**
     * openFilePicker
     */
    public openFilePicker(params: FilePickerOptions) {

        let options = params.ios;
        let documentTypes;

        if (options.extensions) {
            if (options.extensions.length > 0) {
                documentTypes = utils.ios.collections.jsArrayToNSArray(options.extensions);
            }
        }

        let controller = UIDocumentPickerViewController.alloc().initWithDocumentTypesInMode(documentTypes, UIDocumentPickerMode.Import);
        controller.delegate = this._mediaPickerDocumentDeligate;

        if (options.multipleSelection) {
            controller.allowsMultipleSelection = true;
        }

        this.presentViewController(controller, options.hostView);
    }

    /**
     * copyPHImageToAppDirectory
     * This will create a new directory name "filepicker". So, after your work you can delete it for reducing memory use.
     */
    public copyPHImageToAppDirectory(rawData: PHAsset, fileName: string) {

        return new Promise(function (resolve, reject) {

            let docuPath = fs.knownFolders.documents();
            let targetImgeURL = docuPath.path + "/filepicker/" + fileName;

            let output = {
                status: false,
                msg: 'error',
                file: ''
            };

            let options = PHImageRequestOptions.alloc().init();
            options.synchronous = true;

            PHImageManager.defaultManager().requestImageDataForAssetOptionsResultHandler(rawData, options, function (imageData, dataUTI, orientation, info) {

                let newData: NSData = imageData;

                if (newData) {

                    try {
                        newData.writeToFileAtomically(targetImgeURL, true);

                        output = {
                            status: true,
                            msg: 'success',
                            file: targetImgeURL.toString()
                        };
                        resolve(output);

                    } catch (e) {
                        output.msg = e;
                        reject(output);
                    }

                }
            });
        });
    }

    /**
     * copyPHVideoToAppDirectory
     * This will create a new directory name "filepicker". So, after your work you can delete it for reducing memory use.
     */
    public copyPHVideoToAppDirectory(urlAsset: AVURLAsset, fileName) {

        return new Promise(function (resolve, reject) {

            let docuPath = fs.knownFolders.documents();

            let output = {
                status: false,
                msg: 'error',
                file: ''
            };

            if (fs.File.exists(docuPath.path + "/filepicker/" + fileName)) {
                docuPath.getFile("filepicker/" + fileName).remove();
            }

            let targetURL = NSURL.fileURLWithPath(docuPath.path + "/filepicker/" + fileName);

            try {
                let write = NSFileManager.defaultManager.copyItemAtURLToURLError(urlAsset.URL, targetURL);

                if (write) {

                    output = {
                        status: true,
                        msg: 'success',
                        file: targetURL.toString()
                    };

                    resolve(output);
                } else {
                    output.msg = "Not copied";
                    reject(output);
                }
            } catch (e) {
                output.msg = e;
                reject(output);
            }

        });

    }

    /**
     * convertPHImageToUIImage
     */
    public convertPHImageToUIImage(rawData: PHAsset) {

        return new Promise(function (resolve, reject) {

            let options = PHImageRequestOptions.new();
            options.resizeMode = PHImageRequestOptionsResizeMode.Fast;
            options.synchronous = true;

            PHImageManager.defaultManager().requestImageForAssetTargetSizeContentModeOptionsResultHandler(rawData, PHImageManagerMaximumSize, PHImageContentMode.AspectFill, options, function (result, info) {
                if (result) {
                    resolve(result);
                } else {
                    reject("something went wrong!");
                }
            });
        });
    }

    /**
     * copyUIImageToAppDirectory
     * This will create a new directory name "filepicker". So, after your work you can delete it for reducing memory use.
     */
    public copyUIImageToAppDirectory(image: UIImage, fileName: any) {

        return new Promise(function (resolve, reject) {

            let data = UIImageJPEGRepresentation(image, 1);

            let docuPath = fs.knownFolders.documents();
            let targetImgeURL = docuPath.path + "/filepicker/" + fileName;

            if (fs.File.exists(docuPath.path + "/filepicker/" + fileName)) {
                docuPath.getFile("filepicker/" + fileName).remove();
            }

            let output = {
                status: false,
                msg: 'error',
                file: ''
            };

            try {
                data.writeToFileAtomically(targetImgeURL, true);
                output = {
                    status: true,
                    msg: 'success',
                    file: targetImgeURL.toString()
                };
                resolve(output);

            } catch (e) {
                output.msg = e;
                reject(output);
            }
        });
    }

    /**
     * copyMPMediaFileToAPPDirectory
     * This will create a new directory name "filepicker". So, after your work you can delete it for reducing memory use.
     * This require some extra time to copy file. So, you will need to wait until you will get any output.
     */
    public copyMPMediaFileToAPPDirectory(mediaItem: MPMediaItem, filename: any) {

        return new Promise(function (resolve, reject) {

            let docuPath = fs.knownFolders.documents();
            let targetImgeURL = docuPath.path + "/filepicker/" + filename;

            let output = {
                status: false,
                msg: 'error',
                file: ''
            };

            if (fs.File.exists(docuPath.path + "/filepicker/" + filename)) {
                docuPath.getFile("filepicker/" + filename).remove();
            }

            let assetURL: NSURL = mediaItem.valueForProperty(MPMediaItemPropertyAssetURL);

            let songAsset: AVURLAsset = AVURLAsset.URLAssetWithURLOptions(assetURL, null);

            let exporter: AVAssetExportSession = AVAssetExportSession.alloc().initWithAssetPresetName(songAsset, AVAssetExportPresetAppleM4A);
            exporter.outputFileType = "com.apple.m4a-audio";

            let exportURL = NSURL.fileURLWithPath(targetImgeURL);

            exporter.outputURL = exportURL;

            exporter.exportAsynchronouslyWithCompletionHandler(function () {
                let exportStatus = exporter.status, exportError;

                switch (exportStatus) {

                    case AVAssetExportSessionStatus.Failed:
                        exportError = exporter.error;
                        output.msg = exportError;
                        reject(output);
                        break;

                    case AVAssetExportSessionStatus.Completed:
                        output = {
                            status: true,
                            msg: 'success',
                            file: targetImgeURL.toString()
                        };
                        resolve(output);
                        break;

                    default:
                        exportError = exporter.error;
                        output.msg = exportError;
                        reject(output);
                        break;
                }
            });
        });

    }

    private presentViewController(controller, hostView?: View) {

        let viewController = hostView ? hostView.viewController : UIApplication.sharedApplication.keyWindow.rootViewController;

        while (
            viewController.presentedViewController
            && viewController.presentedViewController.viewLoaded
            && viewController.presentedViewController.view.window
        ) {
            viewController = viewController.presentedViewController;
        }

        viewController.presentViewControllerAnimatedCompletion(controller, true, null);
    }

    public greet() {
        return "Hello, NS";
    }

}

export class MediafilepickerIQMediaPickerControllerDelegate extends NSObject implements IQMediaPickerControllerDelegate {

    public static ObjCProtocols = [IQMediaPickerControllerDelegate];

    private _owner: WeakRef<Mediafilepicker>;

    public static initWithOwner(owner: WeakRef<Mediafilepicker>): MediafilepickerIQMediaPickerControllerDelegate {

        let deligate = <MediafilepickerIQMediaPickerControllerDelegate>super.new();
        deligate._owner = owner;

        return deligate;
    }

    public mediaPickerControllerDidFinishMedias(controller: IQMediaPickerController, selectedMedias: IQMediaPickerSelection) {

        let t = this._owner.get(), output = [];

        // either video or image
        if (selectedMedias.selectedAssets.count > 0) {

            let results = selectedMedias.selectedAssets;

            for (let i = 0; i < results.count; i++) {

                let result: PHAsset = results[i];

                if (result.mediaType === PHAssetMediaTypeImage) {

                    let _uriRequestOptions = PHImageRequestOptions.alloc().init();
                    _uriRequestOptions.synchronous = true;

                    PHImageManager.defaultManager().requestImageDataForAssetOptionsResultHandler(result, _uriRequestOptions, (data, uti, orientation, info) => {

                        let uri = info.objectForKey("PHImageFileURLKey");
                        let fileUrl;

                        if (uri) {
                            fileUrl = uri.toString();
                        }

                        let file = {
                            type: 'image',
                            file: fileUrl,
                            rawData: result
                        };
                        output.push(file);

                    });
                } else if (result.mediaType === PHAssetMediaTypeVideo) {


                    let options = PHVideoRequestOptions.new();
                    options.deliveryMode = PHVideoRequestOptionsDeliveryMode.HighQualityFormat;

                    PHImageManager.defaultManager().requestAVAssetForVideoOptionsResultHandler(result, options, function (asset, audioMix, info) {

                        let urlAsset = asset as AVURLAsset;
                        let url: NSURL;

                        if (urlAsset.URL) {
                            url = urlAsset.URL;
                        }

                        let file = {
                            type: 'video',
                            file: url.absoluteString,
                            rawData: result,
                            urlAsset: urlAsset
                        };
                        output.push(file);
                    });
                }

            }
        }
        // let's check if audio ;)
        else if (selectedMedias.selectedAudios.count > 0) {

            let results = selectedMedias.selectedAudios;

            for (let i = 0; i < results.count; i++) {

                let result = results[i];

                let file = {
                    type: 'audio',
                    file: result.assetURL.toString(),
                    rawData: result
                };

                output.push(file);

            }
        }
        // should be something recoded :D

        else if (selectedMedias.selectedAssetsURL.count > 0) {

            let results = selectedMedias.selectedAssetsURL;

            for (let i = 0; i < results.count; i++) {

                let result = results[i];

                let file = {
                    type: 'recorded',
                    file: result.relativePath,
                    rawData: result
                };

                output.push(file);

            }
        }
        // this should be image captured :D

        else if (selectedMedias.selectedImages.count) {

            let results = selectedMedias.selectedImages;

            for (let i = 0; i < results.count; i++) {

                let result = results[i];

                let file = {
                    type: 'capturedImage',
                    file: result,
                    rawData: result
                };

                output.push(file);
            }
        }

        setTimeout(() => {
            t.results = output;

            if (output.length > 0) {

                t.notify({
                    eventName: 'getFiles',
                    object: t
                });

            } else {
                t.msg = "No file!";

                t.notify({
                    eventName: 'error',
                    object: t
                });
            }

        }, 300);

    }

    public mediaPickerControllerDidCancel(controller: IQMediaPickerController) {

        this._owner.get().msg = 'Picker cancel';

        this._owner.get().notify({
            eventName: 'cancel',
            object: this._owner.get()
        });
    }

}

class MediafilepickerDocumentPickerDelegate extends NSObject implements UIDocumentPickerDelegate {

    private _owner: WeakRef<Mediafilepicker>;
    public static ObjCProtocols = [UIDocumentPickerDelegate];

    static initWithOwner(owner: WeakRef<Mediafilepicker>): MediafilepickerDocumentPickerDelegate {
        const delegate = <MediafilepickerDocumentPickerDelegate>MediafilepickerDocumentPickerDelegate.new();
        delegate._owner = owner;

        return delegate;
    }

    public documentPickerDidPickDocumentAtURL(controller: UIDocumentPickerViewController, url: NSURL) {

        let t = this._owner.get();

        setTimeout(() => {

            if (url) {
                let file = {
                    type: 'normalFile',
                    file: url.absoluteString,
                    rawData: url
                };

                t.results = [file];

                t.notify({
                    eventName: 'getFiles',
                    object: t
                });

            } else {
                t.msg = "No file!";

                t.notify({
                    eventName: 'error',
                    object: t
                });
            }

        }, 300);

    }

    public documentPickerDidPickDocumentsAtURLs(controller: UIDocumentPickerViewController, urls: NSArray<NSURL>) {

        let output = [];
        let t = this._owner.get();

        if (urls.count > 0) {

            for (let i = 0; i < urls.count; i++) {
                let url = urls[i];

                let file = {
                    type: 'normalFile',
                    file: url.absoluteString,
                    rawData: url
                };

                output.push(file);

            }
        }

        setTimeout(() => {

            t.results = output;

            if (output.length > 0) {

                t.notify({
                    eventName: 'getFiles',
                    object: t
                });

            } else {
                t.msg = "No file!";

                t.notify({
                    eventName: 'error',
                    object: t
                });
            }

        }, 300);

    }

    public documentPickerWasCancelled(controller: UIDocumentPickerViewController) {

        this._owner.get().msg = 'Picker cancel';

        this._owner.get().notify({
            eventName: 'cancel',
            object: this._owner.get()
        });
    }
}
