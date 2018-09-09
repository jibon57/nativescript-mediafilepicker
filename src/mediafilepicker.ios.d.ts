import { Observable } from 'tns-core-modules/data/observable';
import { MediaPickerInterface, ImagePickerOptions, VideoPickerOptions, AudioPickerOptions, FilePickerOptions } from "./mediafilepicker.common";
import * as utils from "tns-core-modules/utils/utils";
export declare class Mediafilepicker extends Observable implements MediaPickerInterface {
    private _mediaPickerIQDeligate;
    private _mediaPickerDocumentDeligate;
    collections: typeof utils.ios.collections;
    results: any;
    msg: any;
    constructor();
    openImagePicker(params: ImagePickerOptions): void;
    openVideoPicker(params: VideoPickerOptions): void;
    openAudioPicker(params: AudioPickerOptions): void;
    openFilePicker(params: FilePickerOptions): void;
    copyPHImageToAppDirectory(rawData: PHAsset, fileName: string): Promise<{}>;
    copyPHVideoToAppDirectory(urlAsset: AVURLAsset, fileName: any): Promise<{}>;
    convertPHImageToUIImage(rawData: PHAsset): Promise<{}>;
    copyUIImageToAppDirectory(image: UIImage, fileName: any): Promise<{}>;
    private presentViewController(controller);
    greet(): string;
}
export declare class MediafilepickerIQMediaPickerControllerDelegate extends NSObject implements IQMediaPickerControllerDelegate {
    static ObjCProtocols: {
        prototype: IQMediaPickerControllerDelegate;
    }[];
    private _owner;
    static initWithOwner(owner: WeakRef<Mediafilepicker>): MediafilepickerIQMediaPickerControllerDelegate;
    mediaPickerControllerDidFinishMedias(controller: IQMediaPickerController, selectedMedias: IQMediaPickerSelection): void;
    mediaPickerControllerDidCancel(controller: IQMediaPickerController): void;
}
