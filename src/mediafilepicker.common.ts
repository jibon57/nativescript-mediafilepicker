export class MediaPickerInterface {
    openImagePicker(params: ImagePickerOptions) { }
    openVideoPicker(params: VideoPickerOptions) { }
    openAudioPicker(params: AudioPickerOptions) { }
    openFilePicker(params: FilePickerOptions) { }
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
        extensions: Array<String>,
        maxNumberFiles?: Number;
    };
}