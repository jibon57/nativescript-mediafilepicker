import { MediaPickerInterface, ImagePickerOptions, VideoPickerOptions, AudioPickerOptions, FilePickerOptions } from "./mediafilepicker.common";
import { Observable } from "@nativescript/core";
export declare class Mediafilepicker extends Observable implements MediaPickerInterface {
    results: any;
    msg: any;
    private captureFilePath;
    private captureContentUrl;
    constructor();
    openImagePicker(params: ImagePickerOptions): void;
    openVideoPicker(params: VideoPickerOptions): void;
    openAudioPicker(params: AudioPickerOptions): void;
    openFilePicker(params: FilePickerOptions): void;
    private performCapturing;
    private handleOnlyCaptureMode;
    private validatePermissionsResult;
    private callIntent;
    private handleResults;
    greet(): string;
}
