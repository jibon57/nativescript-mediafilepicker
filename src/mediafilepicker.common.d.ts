import { View } from "@nativescript/core";
export declare class MediaPickerInterface {
    openImagePicker(params: ImagePickerOptions): void;
    openVideoPicker(params: VideoPickerOptions): void;
    openAudioPicker(params: AudioPickerOptions): void;
    openFilePicker(params: FilePickerOptions): void;
    greet(): void;
}
export interface ImagePickerOptions {
    android?: {
        isCaptureMood?: boolean;
        isNeedCamera?: boolean;
        maxNumberFiles?: Number;
        isNeedFolderList?: boolean;
    };
    ios?: {
        isCaptureMood?: boolean;
        isNeedCamera?: boolean;
        maxNumberFiles?: number;
        hostView?: View;
    };
}
export interface VideoPickerOptions {
    android?: {
        isCaptureMood?: boolean;
        isNeedCamera?: boolean;
        maxNumberFiles?: number;
        isNeedFolderList?: boolean;
        maxDuration?: number;
        videoQuality?: number;
    };
    ios?: {
        isCaptureMood?: boolean;
        maxNumberFiles?: number;
        videoMaximumDuration?: number;
        allowedVideoQualities?: Array<string>;
        hostView?: View;
    };
}
export interface AudioPickerOptions {
    android?: {
        isCaptureMood?: boolean;
        isNeedRecorder?: boolean;
        maxNumberFiles?: number;
        isNeedFolderList?: boolean;
        maxSize?: number;
    };
    ios?: {
        isCaptureMood?: boolean;
        maxNumberFiles?: number;
        audioMaximumDuration?: number;
        hostView?: View;
    };
}
export interface FilePickerOptions {
    android?: {
        extensions: Array<string>;
        maxNumberFiles?: number;
    };
    ios?: {
        extensions: Array<string>;
        multipleSelection?: boolean;
        hostView?: View;
    };
}
