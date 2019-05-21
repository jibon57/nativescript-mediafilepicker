export class MediaPickerInterface {
    openImagePicker(params: ImagePickerOptions) { }
    openVideoPicker(params: VideoPickerOptions) { }
    openAudioPicker(params: AudioPickerOptions) { }
    openFilePicker(params: FilePickerOptions) { }
    greet() { }
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
        allowedVideoQualities?: Array<string>; // https://developer.apple.com/documentation/avfoundation/avcapturesessionpreset?language=objc
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
        extensions: Array<string>; // https://developer.apple.com/documentation/mobilecoreservices/uttype
        multipleSelection?: boolean;
    };
}