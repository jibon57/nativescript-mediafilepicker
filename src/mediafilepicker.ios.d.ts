import { Observable } from 'tns-core-modules/data/observable';
import { MediaPickerInterface, ImagePickerOptions, VideoPickerOptions, AudioPickerOptions, FilePickerOptions } from "./mediafilepicker.common";
import { View } from 'tns-core-modules/ui/core/view';
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
    copyPHImageToAppDirectory(rawData: PHAsset, fileName: string): Promise<{}>;
    copyPHVideoToAppDirectory(urlAsset: AVURLAsset, fileName: any): Promise<{}>;
    convertPHImageToUIImage(rawData: PHAsset): Promise<{}>;
    copyUIImageToAppDirectory(image: UIImage, fileName: any): Promise<{}>;
    copyMPMediaFileToAPPDirectory(mediaItem: MPMediaItem, filename: any): Promise<{}>;
    private presentViewController(controller, hostView?: View);
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
