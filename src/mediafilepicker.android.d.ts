import { Common, CommonFilePicker, MediaFilepickerOptions } from './mediafilepicker.common';
export declare class Mediafilepicker extends Common implements CommonFilePicker {
    output: string;
    startFilePicker(params: MediaFilepickerOptions): void;
    handleResult(requestCode: any, resultCode: any, data: any): void;
}
