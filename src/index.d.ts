import { Observable, View } from "@nativescript/core";
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
    copyMPMediaFileToAPPDirectory(mediaItem: any, filename: any): Promise<{}>;
    greet(): string;
}

export interface ImagePickerOptions {
    android?: {
        isCaptureMood?: boolean;
        isNeedCamera?: boolean;
        maxNumberFiles?: number;
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
        allowedVideoQualities?: Array<string>; // https://developer.apple.com/documentation/avfoundation/avcapturesessionpreset?language=objc
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
        extensions: Array<string>; // https://developer.apple.com/documentation/mobilecoreservices/uttype
        multipleSelection?: boolean;
        hostView?: View;
    };
}
