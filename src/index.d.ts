import { Observable } from 'tns-core-modules/data/observable';
import { MediaPickerInterface } from "./mediafilepicker.common";
export declare class Mediafilepicker extends Observable implements MediaPickerInterface {
    constructor();
    openImagePicker(params: ImagePickerOptions): void;
    openVideoPicker(params: VideoPickerOptions): void;
    openAudioPicker(params: AudioPickerOptions): void;
    openFilePicker(params: FilePickerOptions): void;
    copyPHImageToAppDirectory(rawData: PHAsset, fileName: string): Promise<{}>;
    copyPHVideoToAppDirectory(url: NSURL, fileName: any): Promise<{}>;
    convertPHImageToUIImage(rawData: PHAsset): Promise<{}>;
    copyUIImageToAppDirectory(image: UIImage, fileName: any): Promise<{}>;
    private callIntent(intent, pickerType);
    private handleResults(requestCode, resultCode, data);
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
        maxNumberFiles?: Number;
        isNeedFolderList?: boolean;
        maxDuration?: Number;
    };
    ios?: {
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
    };
    ios?: {
        isCaptureMood?: boolean;
        maxNumberFiles?: number;
        audioMaximumDuration?: number;
    };
}
export interface FilePickerOptions {
    android?: {
        extensions: Array<String>;
        maxNumberFiles?: Number;
    };
}
