
declare class DKAsset extends NSObject {

	static alloc(): DKAsset; // inherited from NSObject

	static new(): DKAsset; // inherited from NSObject

	readonly duration: number;

	error: NSError;

	fileName: string;

	fileSize: number;

	localIdentifier: string;

	localTemporaryPath: NSURL;

	readonly location: CLLocation;

	readonly originalAsset: PHAsset;

	readonly pixelHeight: number;

	readonly pixelWidth: number;

	progress: number;

	readonly type: DKAssetType;

	cancelRequests(): void;

	fetchAVAssetWithOptionsCompleteBlock(options: PHVideoRequestOptions, completeBlock: (p1: AVAsset, p2: NSDictionary<any, any>) => void): void;

	fetchFullScreenImageWithCompleteBlock(completeBlock: (p1: UIImage, p2: NSDictionary<any, any>) => void): void;

	fetchImageDataWithOptionsCompleteBlock(options: PHImageRequestOptions, completeBlock: (p1: NSData, p2: NSDictionary<any, any>) => void): void;

	fetchImageWithOptionsContentModeCompleteBlock(size: CGSize, options: PHImageRequestOptions, contentMode: PHImageContentMode, completeBlock: (p1: UIImage, p2: NSDictionary<any, any>) => void): void;

	fetchOriginalImageWithOptionsCompleteBlock(options: PHImageRequestOptions, completeBlock: (p1: UIImage, p2: NSDictionary<any, any>) => void): void;
}

declare class DKAssetGroup extends NSObject {

	static alloc(): DKAssetGroup; // inherited from NSObject

	static new(): DKAssetGroup; // inherited from NSObject
}

interface DKAssetGroupCellItemProtocol {

	asset: DKAsset;

	selectedIndex: number;

	thumbnailImage: UIImage;

	thumbnailImageView: UIImageView;
}
declare var DKAssetGroupCellItemProtocol: {

	prototype: DKAssetGroupCellItemProtocol;
};

interface DKAssetGroupCellType {

	configureWithTagDataManagerImageRequestOptions(assetGroup: DKAssetGroup, tag: number, dataManager: DKImageGroupDataManager, imageRequestOptions: PHImageRequestOptions): void;
}
declare var DKAssetGroupCellType: {

	prototype: DKAssetGroupCellType;

	preferredHeight(): number;
};

declare class DKAssetGroupDetailBaseCell extends UICollectionViewCell implements DKAssetGroupCellItemProtocol {

	static alloc(): DKAssetGroupDetailBaseCell; // inherited from NSObject

	static appearance(): DKAssetGroupDetailBaseCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): DKAssetGroupDetailBaseCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): DKAssetGroupDetailBaseCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): DKAssetGroupDetailBaseCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): DKAssetGroupDetailBaseCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): DKAssetGroupDetailBaseCell; // inherited from UIAppearance

	static new(): DKAssetGroupDetailBaseCell; // inherited from NSObject

	asset: DKAsset; // inherited from DKAssetGroupCellItemProtocol

	selectedIndex: number; // inherited from DKAssetGroupCellItemProtocol

	thumbnailImage: UIImage; // inherited from DKAssetGroupCellItemProtocol

	readonly thumbnailImageView: UIImageView; // inherited from DKAssetGroupCellItemProtocol
}

declare class DKAssetGroupDetailCameraCell extends DKAssetGroupDetailBaseCell {

	static alloc(): DKAssetGroupDetailCameraCell; // inherited from NSObject

	static appearance(): DKAssetGroupDetailCameraCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): DKAssetGroupDetailCameraCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): DKAssetGroupDetailCameraCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): DKAssetGroupDetailCameraCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): DKAssetGroupDetailCameraCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): DKAssetGroupDetailCameraCell; // inherited from UIAppearance

	static cellReuseIdentifier(): string;

	static new(): DKAssetGroupDetailCameraCell; // inherited from NSObject
}

declare class DKAssetGroupDetailImageCell extends DKAssetGroupDetailBaseCell {

	static alloc(): DKAssetGroupDetailImageCell; // inherited from NSObject

	static appearance(): DKAssetGroupDetailImageCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): DKAssetGroupDetailImageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): DKAssetGroupDetailImageCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): DKAssetGroupDetailImageCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): DKAssetGroupDetailImageCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): DKAssetGroupDetailImageCell; // inherited from UIAppearance

	static cellReuseIdentifier(): string;

	static new(): DKAssetGroupDetailImageCell; // inherited from NSObject
}

declare class DKAssetGroupDetailVC extends UIViewController implements DKImagePickerControllerAware, UICollectionViewDataSource, UICollectionViewDelegate, UIGestureRecognizerDelegate {

	static alloc(): DKAssetGroupDetailVC; // inherited from NSObject

	static new(): DKAssetGroupDetailVC; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	imagePickerController: DKImagePickerController; // inherited from DKImagePickerControllerAware

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	collectionViewCanFocusItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanMoveItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell;

	collectionViewContextMenuConfigurationForItemAtIndexPathPoint(collectionView: UICollectionView, indexPath: NSIndexPath, point: CGPoint): UIContextMenuConfiguration;

	collectionViewDidBeginMultipleSelectionInteractionAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewDidEndMultipleSelectionInteraction(collectionView: UICollectionView): void;

	collectionViewDidHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUnhighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUpdateFocusInContextWithAnimationCoordinator(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	collectionViewIndexPathForIndexTitleAtIndex(collectionView: UICollectionView, title: string, index: number): NSIndexPath;

	collectionViewMoveItemAtIndexPathToIndexPath(collectionView: UICollectionView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number;

	collectionViewPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): void;

	collectionViewPreviewForDismissingContextMenuWithConfiguration(collectionView: UICollectionView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	collectionViewPreviewForHighlightingContextMenuWithConfiguration(collectionView: UICollectionView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	collectionViewShouldBeginMultipleSelectionInteractionAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldShowMenuForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSpringLoadItemAtIndexPathWithContext(collectionView: UICollectionView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	collectionViewShouldUpdateFocusInContext(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext): boolean;

	collectionViewTargetContentOffsetForProposedContentOffset(collectionView: UICollectionView, proposedContentOffset: CGPoint): CGPoint;

	collectionViewTargetIndexPathForMoveFromItemAtIndexPathToProposedIndexPath(collectionView: UICollectionView, originalIndexPath: NSIndexPath, proposedIndexPath: NSIndexPath): NSIndexPath;

	collectionViewTransitionLayoutForOldLayoutNewLayout(collectionView: UICollectionView, fromLayout: UICollectionViewLayout, toLayout: UICollectionViewLayout): UICollectionViewTransitionLayout;

	collectionViewViewForSupplementaryElementOfKindAtIndexPath(collectionView: UICollectionView, kind: string, indexPath: NSIndexPath): UICollectionReusableView;

	collectionViewWillCommitMenuWithAnimator(collectionView: UICollectionView, animator: UIContextMenuInteractionCommitAnimating): void;

	collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewWillPerformPreviewActionForMenuWithConfigurationAnimator(collectionView: UICollectionView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionCommitAnimating): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	indexPathForPreferredFocusedViewInCollectionView(collectionView: UICollectionView): NSIndexPath;

	indexTitlesForCollectionView(collectionView: UICollectionView): NSArray<string>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInCollectionView(collectionView: UICollectionView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	reload(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class DKAssetGroupDetailVideoCell extends DKAssetGroupDetailImageCell {

	static alloc(): DKAssetGroupDetailVideoCell; // inherited from NSObject

	static appearance(): DKAssetGroupDetailVideoCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): DKAssetGroupDetailVideoCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): DKAssetGroupDetailVideoCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): DKAssetGroupDetailVideoCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): DKAssetGroupDetailVideoCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): DKAssetGroupDetailVideoCell; // inherited from UIAppearance

	static new(): DKAssetGroupDetailVideoCell; // inherited from NSObject
}

declare class DKAssetGroupGridLayout extends UICollectionViewFlowLayout {

	static alloc(): DKAssetGroupGridLayout; // inherited from NSObject

	static new(): DKAssetGroupGridLayout; // inherited from NSObject
}

declare const enum DKAssetType {

	Photo = 0,

	Video = 1
}

declare class DKImageAssetExporter extends DKImageBaseManager {

	static alloc(): DKImageAssetExporter; // inherited from NSObject

	static new(): DKImageAssetExporter; // inherited from NSObject

	static readonly sharedInstance: DKImageAssetExporter;

	constructor(o: { configuration: DKImageAssetExporterConfiguration; });

	cancelAll(): void;

	cancelWithRequestID(requestID: number): void;

	exportAssetsAsynchronouslyWithAssetsCompletion(assets: NSArray<DKAsset> | DKAsset[], completion: (p1: NSDictionary<any, any>) => void): number;

	initWithConfiguration(configuration: DKImageAssetExporterConfiguration): this;
}

declare class DKImageAssetExporterConfiguration extends NSObject implements NSCopying {

	static alloc(): DKImageAssetExporterConfiguration; // inherited from NSObject

	static new(): DKImageAssetExporterConfiguration; // inherited from NSObject

	avOutputFileType: string;

	exportDirectory: NSURL;

	imageExportPreset: DKImageExportPresent;

	videoExportPreset: string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare const enum DKImageAssetExporterError {

	Cancelled = 0,

	ExportFailed = 1
}

interface DKImageAssetExporterObserver {

	exporterDidEndExportingWithExporterAsset?(exporter: DKImageAssetExporter, asset: DKAsset): void;

	exporterDidUpdateProgressWithExporterAsset?(exporter: DKImageAssetExporter, asset: DKAsset): void;

	exporterWillBeginExportingWithExporterAsset?(exporter: DKImageAssetExporter, asset: DKAsset): void;
}
declare var DKImageAssetExporterObserver: {

	prototype: DKImageAssetExporterObserver;
};

declare class DKImageBaseExtension extends NSObject {

	static alloc(): DKImageBaseExtension; // inherited from NSObject

	static new(): DKImageBaseExtension; // inherited from NSObject
}

declare class DKImageBaseManager extends NSObject {

	static alloc(): DKImageBaseManager; // inherited from NSObject

	static new(): DKImageBaseManager; // inherited from NSObject

	addWithObserver(object: any): void;

	removeWithObserver(object: any): void;
}

declare const enum DKImageExportPresent {

	Compatible = 0,

	Current = 1
}

declare class DKImageExtensionCamera extends DKImageBaseExtension {

	static alloc(): DKImageExtensionCamera; // inherited from NSObject

	static new(): DKImageExtensionCamera; // inherited from NSObject
}

declare class DKImageExtensionController extends NSObject {

	static alloc(): DKImageExtensionController; // inherited from NSObject

	static new(): DKImageExtensionController; // inherited from NSObject

	static registerExtensionWithExtensionClassFor(extensionClass: typeof NSObject, type: DKImageExtensionType): void;

	static unregisterExtensionFor(type: DKImageExtensionType): void;
}

declare class DKImageExtensionGallery extends DKImageBaseExtension implements DKPhotoGalleryDelegate {

	static alloc(): DKImageExtensionGallery; // inherited from NSObject

	static new(): DKImageExtensionGallery; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dismissGallery(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	photoGalleryDidShow(gallery: DKPhotoGallery, index: number): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	selectAssetFromGalleryWithButton(button: UIButton): void;

	self(): this;
}

declare class DKImageExtensionInlineCamera extends DKImageBaseExtension {

	static alloc(): DKImageExtensionInlineCamera; // inherited from NSObject

	static new(): DKImageExtensionInlineCamera; // inherited from NSObject
}

declare class DKImageExtensionNone extends DKImageBaseExtension {

	static alloc(): DKImageExtensionNone; // inherited from NSObject

	static new(): DKImageExtensionNone; // inherited from NSObject
}

declare class DKImageExtensionPhotoCropper extends DKImageBaseExtension {

	static alloc(): DKImageExtensionPhotoCropper; // inherited from NSObject

	static new(): DKImageExtensionPhotoCropper; // inherited from NSObject
}

declare const enum DKImageExtensionType {

	Gallery = 0,

	Camera = 1,

	InlineCamera = 2,

	PhotoEditor = 3
}

declare class DKImageGroupDataManager extends DKImageBaseManager implements PHPhotoLibraryChangeObserver {

	static alloc(): DKImageGroupDataManager; // inherited from NSObject

	static new(): DKImageGroupDataManager; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	photoLibraryDidChange(changeInstance: PHChange): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class DKImageGroupDataManagerConfiguration extends NSObject implements NSCopying {

	static alloc(): DKImageGroupDataManagerConfiguration; // inherited from NSObject

	static new(): DKImageGroupDataManagerConfiguration; // inherited from NSObject

	assetFetchOptions: PHFetchOptions;

	fetchLimit: number;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class DKImagePickerController extends DKUINavigationController implements UIAdaptivePresentationControllerDelegate {

	static alloc(): DKImagePickerController; // inherited from NSObject

	static new(): DKImagePickerController; // inherited from NSObject

	UIDelegate: DKImagePickerControllerBaseUIDelegate;

	allowMultipleTypes: boolean;

	allowSelectAll: boolean;

	allowSwipeToSelect: boolean;

	allowsLandscape: boolean;

	assetType: DKImagePickerControllerAssetType;

	autoCloseOnSingleSelect: boolean;

	didCancel: () => void;

	didSelectAssets: (p1: NSArray<DKAsset>) => void;

	readonly exportStatus: DKImagePickerControllerExportStatus;

	exportStatusChanged: (p1: DKImagePickerControllerExportStatus) => void;

	exporter: DKImageAssetExporter;

	exportsWhenCompleted: boolean;

	fetchLimit: number;

	readonly groupDataManager: DKImageGroupDataManager;

	inline_: boolean;

	maxSelectableCount: number;

	permissionViewColors: DKPermissionViewColors;

	readonly selectedAssets: NSArray<DKAsset>;

	selectedChanged: () => void;

	shouldDismissViaUserAction: boolean;

	showsCancelButton: boolean;

	showsEmptyAlbums: boolean;

	singleSelect: boolean;

	sourceType: DKImagePickerControllerSourceType;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	adaptivePresentationStyleForPresentationController(controller: UIPresentationController): UIModalPresentationStyle;

	adaptivePresentationStyleForPresentationControllerTraitCollection(controller: UIPresentationController, traitCollection: UITraitCollection): UIModalPresentationStyle;

	canSelectWithAssetShowAlert(asset: DKAsset, showAlert: boolean): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	containsWithAsset(asset: DKAsset): boolean;

	deselectAll(): void;

	deselectWithAsset(asset: DKAsset): void;

	dismiss(): void;

	dismissCamera(): void;

	done(): void;

	handleSelectAll(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	makeRootVC(): UIViewController;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	presentCamera(): void;

	presentationControllerDidAttemptToDismiss(presentationController: UIPresentationController): void;

	presentationControllerDidDismiss(presentationController: UIPresentationController): void;

	presentationControllerShouldDismiss(presentationController: UIPresentationController): boolean;

	presentationControllerViewControllerForAdaptivePresentationStyle(controller: UIPresentationController, style: UIModalPresentationStyle): UIViewController;

	presentationControllerWillDismiss(presentationController: UIPresentationController): void;

	presentationControllerWillPresentWithAdaptiveStyleTransitionCoordinator(presentationController: UIPresentationController, style: UIModalPresentationStyle, transitionCoordinator: UIViewControllerTransitionCoordinator): void;

	reloadWith(dataManager: DKImageGroupDataManager): void;

	removeSelectionWithAsset(asset: DKAsset): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	saveImage(image: UIImage, metadata: NSDictionary<any, any>, completeBlock: (p1: DKAsset) => void): void;

	saveImageDataToAlbumForiOS8(imageData: NSData, metadata: NSDictionary<any, any>, completeBlock: (p1: DKAsset) => void): void;

	saveImageDataToAlbumForiOS9(imageDataWithMetadata: NSData, completeBlock: (p1: DKAsset) => void): void;

	saveImageToAlbum(image: UIImage, completeBlock: (p1: DKAsset) => void): void;

	scrollToAnimated(indexPath: NSIndexPath, animated: boolean): void;

	scrollToLastTappedIndexPathWithAnimated(animated: boolean): void;

	selectWithAsset(asset: DKAsset): void;

	selectWithAssets(assets: NSArray<DKAsset> | DKAsset[]): void;

	self(): this;

	setSelectedAssetsWithAssets(assets: NSArray<DKAsset> | DKAsset[]): void;

	writeMetadataInto(metadata: NSDictionary<any, any>, imageData: NSData): NSData;
}

declare const enum DKImagePickerControllerAssetType {

	AllPhotos = 0,

	AllVideos = 1,

	AllAssets = 2
}

interface DKImagePickerControllerAware {

	imagePickerController: DKImagePickerController;

	reload(): void;
}
declare var DKImagePickerControllerAware: {

	prototype: DKImagePickerControllerAware;
};

declare class DKImagePickerControllerBaseUIDelegate extends NSObject implements DKImagePickerControllerUIDelegate {

	static alloc(): DKImagePickerControllerBaseUIDelegate; // inherited from NSObject

	static new(): DKImagePickerControllerBaseUIDelegate; // inherited from NSObject

	imagePickerControllerCollectionCameraCell(): typeof NSObject;

	imagePickerControllerCollectionImageCell(): typeof NSObject;

	imagePickerControllerCollectionVideoCell(): typeof NSObject;

	imagePickerControllerCollectionViewBackgroundColor(): UIColor;

	imagePickerControllerDidDeselectAssets(imagePickerController: DKImagePickerController, didDeselectAssets: NSArray<DKAsset> | DKAsset[]): void;

	imagePickerControllerDidReachMaxLimit(imagePickerController: DKImagePickerController): void;

	imagePickerControllerDidSelectAssets(imagePickerController: DKImagePickerController, didSelectAssets: NSArray<DKAsset> | DKAsset[]): void;

	imagePickerControllerFooterView(imagePickerController: DKImagePickerController): UIView;

	imagePickerControllerGroupCell(): typeof NSObject;

	imagePickerControllerGroupListPresentationStyle(): DKImagePickerGroupListPresentationStyle;

	imagePickerControllerHeaderView(imagePickerController: DKImagePickerController): UIView;

	imagePickerControllerHidesCancelButtonForVC(imagePickerController: DKImagePickerController, vc: UIViewController): void;

	imagePickerControllerPrepareGroupListViewController(listViewController: UITableViewController): void;

	imagePickerControllerSelectGroupButtonSelectedGroup(imagePickerController: DKImagePickerController, selectedGroup: DKAssetGroup): UIButton;

	imagePickerControllerShowsCancelButtonForVC(imagePickerController: DKImagePickerController, vc: UIViewController): void;

	layoutForImagePickerController(imagePickerController: DKImagePickerController): typeof NSObject;

	prepareLayoutVc(imagePickerController: DKImagePickerController, vc: UIViewController): void;
}

declare const enum DKImagePickerControllerExportStatus {

	None = 0,

	Exporting = 1
}

declare class DKImagePickerControllerResource extends NSObject {

	static alloc(): DKImagePickerControllerResource; // inherited from NSObject

	static new(): DKImagePickerControllerResource; // inherited from NSObject

	static setCustomImageBlock(value: (p1: string) => UIImage): void;

	static setCustomLocalizationBlock(value: (p1: string) => string): void;

	static customImageBlock: (p1: string) => UIImage;

	static customLocalizationBlock: (p1: string) => string;
}

declare const enum DKImagePickerControllerSourceType {

	Camera = 0,

	Photo = 1,

	Both = 2
}

interface DKImagePickerControllerUIDelegate {

	imagePickerControllerCollectionCameraCell(): typeof NSObject;

	imagePickerControllerCollectionImageCell(): typeof NSObject;

	imagePickerControllerCollectionVideoCell(): typeof NSObject;

	imagePickerControllerCollectionViewBackgroundColor(): UIColor;

	imagePickerControllerDidDeselectAssets(imagePickerController: DKImagePickerController, didDeselectAssets: NSArray<DKAsset> | DKAsset[]): void;

	imagePickerControllerDidReachMaxLimit(imagePickerController: DKImagePickerController): void;

	imagePickerControllerDidSelectAssets(imagePickerController: DKImagePickerController, didSelectAssets: NSArray<DKAsset> | DKAsset[]): void;

	imagePickerControllerFooterView(imagePickerController: DKImagePickerController): UIView;

	imagePickerControllerGroupCell(): typeof NSObject;

	imagePickerControllerGroupListPresentationStyle(): DKImagePickerGroupListPresentationStyle;

	imagePickerControllerHeaderView(imagePickerController: DKImagePickerController): UIView;

	imagePickerControllerHidesCancelButtonForVC(imagePickerController: DKImagePickerController, vc: UIViewController): void;

	imagePickerControllerPrepareGroupListViewController(listViewController: UITableViewController): void;

	imagePickerControllerSelectGroupButtonSelectedGroup(imagePickerController: DKImagePickerController, selectedGroup: DKAssetGroup): UIButton;

	imagePickerControllerShowsCancelButtonForVC(imagePickerController: DKImagePickerController, vc: UIViewController): void;

	layoutForImagePickerController(imagePickerController: DKImagePickerController): typeof NSObject;

	prepareLayoutVc(imagePickerController: DKImagePickerController, vc: UIViewController): void;
}
declare var DKImagePickerControllerUIDelegate: {

	prototype: DKImagePickerControllerUIDelegate;
};

declare var DKImagePickerControllerVersionNumber: number;

declare var DKImagePickerControllerVersionString: interop.Reference<number>;

declare const enum DKImagePickerGroupListPresentationStyle {

	Popover = 0,

	Presented = 1
}

declare class DKPermissionView extends UIView {

	static alloc(): DKPermissionView; // inherited from NSObject

	static appearance(): DKPermissionView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): DKPermissionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): DKPermissionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): DKPermissionView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): DKPermissionView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): DKPermissionView; // inherited from UIAppearance

	static new(): DKPermissionView; // inherited from NSObject

	gotoSettings(): void;
}

declare class DKPermissionViewColors extends NSObject {

	static alloc(): DKPermissionViewColors; // inherited from NSObject

	static new(): DKPermissionViewColors; // inherited from NSObject
}

declare class DKPopoverViewController extends UIViewController {

	static alloc(): DKPopoverViewController; // inherited from NSObject

	static dismissPopoverViewController(): void;

	static new(): DKPopoverViewController; // inherited from NSObject

	static popoverViewControllerFromViewArrowColor(viewController: UIViewController, fromView: UIView, arrowColor: UIColor): void;

	arrowColor: UIColor;
}

declare class DKUINavigationController extends UINavigationController {

	static alloc(): DKUINavigationController; // inherited from NSObject

	static new(): DKUINavigationController; // inherited from NSObject
}
