import { Observable } from 'tns-core-modules/data/observable';
import { MediaPickerInterface } from "./mediafilepicker.common";
export declare class Mediafilepicker extends Observable implements MediaPickerInterface {
    constructor();
    openImagePicker(params: ImagePickerOptions): void;
    openVideoPicker(params: VideoPickerOptions): void;
    openAudioPicker(params: AudioPickerOptions): void;
    openFilePicker(params: FilePickerOptions): void;
    private callIntent(intent, pickerType);
    private handleResults(requestCode, resultCode, data);
}

export interface ImagePickerOptions {
    android: {
        isNeedCamera?: boolean;
        maxNumberFiles?: Number;
        isNeedFolderList?: boolean;
    };
}
export interface VideoPickerOptions {
    android: {
        isNeedCamera?: boolean;
        maxNumberFiles?: Number;
        isNeedFolderList?: boolean;
        maxDuration?: Number;
    };
}
export interface AudioPickerOptions {
    android: {
        isNeedRecorder?: boolean;
        maxNumberFiles?: Number;
        isNeedFolderList?: boolean;
        maxSize?: Number;
    };
}
export interface FilePickerOptions {
    android: {
        extensions: Array<String>;
        maxNumberFiles?: Number;
    };
}
