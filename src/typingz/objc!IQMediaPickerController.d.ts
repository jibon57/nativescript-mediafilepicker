
declare class IQMediaPickerController extends UINavigationController {

	static alloc(): IQMediaPickerController; // inherited from NSObject

	static availableMediaTypesForSourceType(sourceType: IQMediaPickerControllerSourceType): NSArray<number>;

	static isCameraDeviceAvailable(cameraDevice: AVCaptureDevicePosition): boolean;

	static isFlashAvailableForCameraDevice(cameraDevice: AVCaptureDevicePosition): boolean;

	static isSourceTypeAvailable(sourceType: IQMediaPickerControllerSourceType): boolean;

	static new(): IQMediaPickerController; // inherited from NSObject

	allowedVideoQualities: NSArray<string>;

	allowsPickingMultipleItems: boolean;

	audioMaximumDuration: number;

	captureDevice: AVCaptureDevicePosition;

	delegate: any;

	maximumItemCount: number;

	mediaTypes: NSArray<number>;

	sourceType: IQMediaPickerControllerSourceType;

	videoMaximumDuration: number;

	startAudioCapture(): boolean;

	startVideoCapture(): boolean;

	stopAudioCapture(): void;

	stopVideoCapture(): void;

	takePicture(): void;
}

interface IQMediaPickerControllerDelegate extends NSObjectProtocol {

	mediaPickerControllerDidCancel(controller: IQMediaPickerController): void;

	mediaPickerControllerDidFinishMedias(controller: IQMediaPickerController, selection: IQMediaPickerSelection): void;
}
declare var IQMediaPickerControllerDelegate: {

	prototype: IQMediaPickerControllerDelegate;
};

declare const enum IQMediaPickerControllerSourceType {

	Library = 0,

	CameraMicrophone = 1
}

declare var IQMediaPickerControllerVersionNumber: number;

declare var IQMediaPickerControllerVersionNumberVar: number;

declare var IQMediaPickerControllerVersionString: interop.Reference<number>;

declare var IQMediaPickerControllerVersionStringVar: interop.Reference<number>;

declare class IQMediaPickerSelection extends NSObject {

	static alloc(): IQMediaPickerSelection; // inherited from NSObject

	static new(): IQMediaPickerSelection; // inherited from NSObject

	readonly selectedAssets: NSArray<PHAsset>;

	readonly selectedAssetsURL: NSArray<NSURL>;

	readonly selectedAudios: NSArray<MPMediaItem>;

	readonly selectedImages: NSArray<UIImage>;

	addAssets(assets: NSArray<PHAsset>): void;

	addAssetsURL(urls: NSArray<NSURL>): void;

	addAudios(audios: NSArray<MPMediaItem>): void;

	addImages(images: NSArray<UIImage>): void;
}
