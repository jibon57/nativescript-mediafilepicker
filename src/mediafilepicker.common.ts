export class MediaPickerInterface {
    openImagePicker(params: ImagePickerOptions) { }
    openVideoPicker(params: VideoPickerOptions) { }
    openAudioPicker(params: AudioPickerOptions) { }
    openFilePicker(params: FilePickerOptions) { }
}
export interface ImagePickerOptions {

    android?: {
        isNeedCamera?: boolean;
        maxNumberFiles?: Number;
        isNeedFolderList?: boolean;
    }, ios?: {
        isCaptureMood?: boolean;
        maxNumberFiles?: number;
    };
}

export interface VideoPickerOptions {

    android?: {
        isNeedCamera?: boolean;
        maxNumberFiles?: Number;
        isNeedFolderList?: boolean;
        maxDuration?: Number;
    }, ios?: {
        isCaptureMood?: boolean;
        maxNumberFiles?: number;
        videoMaximumDuration?: number;
        allowedVideoQualities?: Array<string>;//https://developer.apple.com/documentation/avfoundation/avcapturesessionpreset?language=objc
    };
}

export interface AudioPickerOptions {
    android?: {
        isNeedRecorder?: boolean;
        maxNumberFiles?: Number;
        isNeedFolderList?: boolean;
        maxSize?: Number;
    }, ios?: {
        isCaptureMood?: boolean;
        maxNumberFiles?: number;
        audioMaximumDuration?: number;
    };
}

export interface FilePickerOptions {
    android?: {
        extensions: Array<String>,
        maxNumberFiles?: Number;
    }, ios?: {
        extensions: Array<string> //https://developer.apple.com/documentation/mobilecoreservices/uttype
    };
}