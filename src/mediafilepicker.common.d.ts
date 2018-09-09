export declare class MediaPickerInterface {
    openImagePicker(params: ImagePickerOptions): void;
    openVideoPicker(params: VideoPickerOptions): void;
    openAudioPicker(params: AudioPickerOptions): void;
    openFilePicker(params: FilePickerOptions): void;
    greet(): void;
}
export interface ImagePickerOptions {
    android?: {
        isNeedCamera?: boolean;
        maxNumberFiles?: Number;
        isNeedFolderList?: boolean;
    };
    ios?: {
        isCaptureMood?: boolean;
        maxNumberFiles?: number;
    };
}
export interface VideoPickerOptions {
    android?: {
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
    };
}
export interface AudioPickerOptions {
    android?: {
        isNeedRecorder?: boolean;
        maxNumberFiles?: number;
        isNeedFolderList?: boolean;
        maxSize?: number;
    };
    ios?: {
        isCaptureMood?: boolean;
        maxNumberFiles?: number;
        audioMaximumDuration?: number;
    };
}
export interface FilePickerOptions {
    android?: {
        extensions: Array<string>;
        maxNumberFiles?: number;
    };
    ios?: {
        extensions: Array<string>;
    };
}
