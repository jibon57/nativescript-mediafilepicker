import { Observable } from 'tns-core-modules/data/observable';
import { MediaPickerInterface, ImagePickerOptions, VideoPickerOptions, AudioPickerOptions, FilePickerOptions } from "./mediafilepicker.common";
export declare class Mediafilepicker extends Observable implements MediaPickerInterface {
    results: any;
    msg: any;
    constructor();
    openImagePicker(params: ImagePickerOptions): void;
    openVideoPicker(params: VideoPickerOptions): void;
    openAudioPicker(params: AudioPickerOptions): void;
    openFilePicker(params: FilePickerOptions): void;
    private callIntent(intent, pickerType);
    private handleResults(requestCode, resultCode, data);
}
