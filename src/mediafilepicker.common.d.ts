import { Observable } from 'tns-core-modules/data/observable/observable';
export declare class Common extends Observable {
    constructor();
}
export interface CommonFilePicker {
    output: any;
    startFilePicker(params: MediaFilepickerOptions): any;
}
export interface MediaFilepickerOptions {
    android?: {
        mxcount?: number;
        setSelectedFiles?: string;
        setActivityTheme?: string;
        enableImagePicker?: boolean;
        enableVideoPicker?: boolean;
        enableDocSupport?: boolean;
        enableCameraSupport?: boolean;
        showGifs?: boolean;
        pickFile?: boolean;
        addFileSupport?: {
            title?: string;
            type?: any;
            icon?: string;
        };
    };
    ios?: {
        displaySelectionInfoToolbar?: boolean;
        displayAlbumsNumberOfAssets?: boolean;
        title?: string;
        mediaTypes?: string;
        customNavigationBarPrompt?: string;
        colsInPortrait?: number;
        colsInLandscape?: number;
        minimumInteritemSpacing?: number;
        allowsMultipleSelection?: boolean;
        confirmSingleSelection?: boolean;
        confirmSingleSelectionPrompt?: string;
        showCameraButton?: boolean;
        autoSelectCameraImages?: boolean;
    };
}
