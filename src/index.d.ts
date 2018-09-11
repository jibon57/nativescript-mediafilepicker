import { Observable } from 'tns-core-modules/data/observable';
import { MediaPickerInterface } from "./mediafilepicker.common";
export declare class Mediafilepicker extends Observable implements MediaPickerInterface {
    constructor();
    openImagePicker(params: ImagePickerOptions): void;
    openVideoPicker(params: VideoPickerOptions): void;
    openAudioPicker(params: AudioPickerOptions): void;
    openFilePicker(params: FilePickerOptions): void;
    copyPHImageToAppDirectory(rawData: any, fileName: any): Promise<{}>;
    copyPHVideoToAppDirectory(urlAsset: any, fileName: any): Promise<{}>;
    convertPHImageToUIImage(rawData: any): Promise<{}>;
    copyUIImageToAppDirectory(image: any, fileName: any): Promise<{}>;
    greet(): string;
}

export interface ImagePickerOptions {
    android?: {
        isNeedCamera?: boolean;
        maxNumberFiles?: number;
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
        allowedVideoQualities?: Array<string>; // https://developer.apple.com/documentation/avfoundation/avcapturesessionpreset?language=objc
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
        extensions: Array<string>; // https://developer.apple.com/documentation/mobilecoreservices/uttype
        multipleSelection?: boolean;
    };
}
