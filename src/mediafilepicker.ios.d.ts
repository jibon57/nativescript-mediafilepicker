import { MediaPickerInterface, ImagePickerOptions, VideoPickerOptions, AudioPickerOptions, FilePickerOptions } from "./mediafilepicker.common";
import { Observable } from "@nativescript/core";
export declare class Mediafilepicker extends Observable implements MediaPickerInterface {
    private _mediaPickerIQDeligate;
    private _mediaPickerDocumentDeligate;
    results: any;
    msg: any;
    constructor();
    openImagePicker(params: ImagePickerOptions): void;
    openVideoPicker(params: VideoPickerOptions): void;
    openAudioPicker(params: AudioPickerOptions): void;
    openFilePicker(params: FilePickerOptions): void;
    copyPHImageToAppDirectory(rawData: PHAsset, fileName: string): Promise<unknown>;
    copyPHVideoToAppDirectory(urlAsset: AVURLAsset, fileName: any): Promise<unknown>;
    convertPHImageToUIImage(rawData: PHAsset): Promise<unknown>;
    copyUIImageToAppDirectory(image: UIImage, fileName: any): Promise<unknown>;
    copyMPMediaFileToAPPDirectory(mediaItem: MPMediaItem, filename: any): Promise<unknown>;
    private presentViewController;
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
