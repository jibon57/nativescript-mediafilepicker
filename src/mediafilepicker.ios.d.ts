import { Common, CommonFilePicker, MediaFilepickerOptions } from './mediafilepicker.common';
export declare class MediafilepickerDeligate extends NSObject {
    static ObjCProtocols: any[];
    private _owner;
    static initWithOwner(owner: WeakRef<Mediafilepicker>): MediafilepickerDeligate;
    assetsPickerControllerDidFinishPickingAssets(picker: any, assetArray: NSArray<any>): void;
}
export declare class Mediafilepicker extends Common implements CommonFilePicker {
    output: string;
    startFilePicker(params: MediaFilepickerOptions): void;
    getFiles(assetArray: NSArray<any>): void;
    handleJob(assetArray: NSArray<any>): Promise<{}>;
    copyImageFiles(rawData: PHAsset, fileName: string): Promise<{}>;
    copyVideoFiles(url: NSURL, fileName: any): Promise<{}>;
}
