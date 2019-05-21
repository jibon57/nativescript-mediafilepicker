export declare class MediaPickerInterface {
    openImagePicker(params: ImagePickerOptions): void;
    openVideoPicker(params: VideoPickerOptions): void;
    openAudioPicker(params: AudioPickerOptions): void;
    openFilePicker(params: FilePickerOptions): void;
    greet(): void;
}
export interface ImagePickerOptions {
    android?: {
        isCaptureMode?: boolean;
        isNeedCamera?: boolean;
        maxNumberFiles?: number;
        isNeedFolderList?: boolean;
    };
    ios?: {
        isCaptureMode?: boolean;
        maxNumberFiles?: number;
    };
}
export interface VideoPickerOptions {
    android?: {
        isCaptureMode?: boolean;
        isNeedCamera?: boolean;
        maxNumberFiles?: number;
        isNeedFolderList?: boolean;
        maxDuration?: number;
        videoQuality?: number;
    };
    ios?: {
        isCaptureMode?: boolean;
        maxNumberFiles?: number;
        videoMaximumDuration?: number;
        allowedVideoQualities?: Array<string>;
    };
}
export interface AudioPickerOptions {
    android?: {
        isCaptureMode?: boolean;
        isNeedRecorder?: boolean;
        maxNumberFiles?: number;
        isNeedFolderList?: boolean;
        maxSize?: number;
    };
    ios?: {
        isCaptureMode?: boolean;
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
        multipleSelection?: boolean;
    };
}
