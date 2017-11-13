import { Common } from './mediafilepicker.common';
export declare class Mediafilepicker extends Common implements CommonFilePicker {
  output: any;
  startFilePicker(params: MediaFilepickerOptions): void;
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
