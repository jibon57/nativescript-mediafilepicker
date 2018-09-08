/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module vincent {
		export module filepicker {
			export class BuildConfig {
				public static class: java.lang.Class<com.vincent.filepicker.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export class Constant {
				public static class: java.lang.Class<com.vincent.filepicker.Constant>;
				public static MAX_NUMBER: string;
				public static MAX_VIDEO_DURATION: string;
				public static VIDEO_QUALITY: string;
				public static MAX_AUDIO_SIZE: string;
				public static REQUEST_CODE_PICK_IMAGE: number;
				public static RESULT_PICK_IMAGE: string;
				public static REQUEST_CODE_TAKE_IMAGE: number;
				public static REQUEST_CODE_BROWSER_IMAGE: number;
				public static RESULT_BROWSER_IMAGE: string;
				public static REQUEST_CODE_PICK_VIDEO: number;
				public static RESULT_PICK_VIDEO: string;
				public static REQUEST_CODE_TAKE_VIDEO: number;
				public static REQUEST_CODE_PICK_AUDIO: number;
				public static RESULT_PICK_AUDIO: string;
				public static REQUEST_CODE_TAKE_AUDIO: number;
				public static REQUEST_CODE_PICK_FILE: number;
				public static RESULT_PICK_FILE: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export class DividerGridItemDecoration {
				public static class: java.lang.Class<com.vincent.filepicker.DividerGridItemDecoration>;
				public drawVertical(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.support.v7.widget.RecyclerView): void;
				public constructor(param0: globalAndroid.content.Context);
				public onDraw(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.support.v7.widget.RecyclerView, param2: globalAndroid.support.v7.widget.RecyclerView.State): void;
				public getItemOffsets(param0: globalAndroid.graphics.Rect, param1: number, param2: globalAndroid.support.v7.widget.RecyclerView): void;
				public drawHorizontal(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.support.v7.widget.RecyclerView): void;
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export class DividerListItemDecoration {
				public static class: java.lang.Class<com.vincent.filepicker.DividerListItemDecoration>;
				public getItemOffsets(param0: globalAndroid.graphics.Rect, param1: globalAndroid.view.View, param2: globalAndroid.support.v7.widget.RecyclerView, param3: globalAndroid.support.v7.widget.RecyclerView.State): void;
				public onDraw(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.support.v7.widget.RecyclerView, param2: globalAndroid.support.v7.widget.RecyclerView.State): void;
				public constructor(param0: globalAndroid.content.Context, param1: number);
				public constructor(param0: globalAndroid.content.Context, param1: number, param2: number);
				public onDrawOver(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.support.v7.widget.RecyclerView, param2: globalAndroid.support.v7.widget.RecyclerView.State): void;
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export class FolderListHelper {
				public static class: java.lang.Class<com.vincent.filepicker.FolderListHelper>;
				public setFolderListListener(param0: com.vincent.filepicker.adapter.FolderListAdapter.FolderListListener): void;
				public toggle(param0: globalAndroid.view.View): void;
				public initFolderListView(param0: globalAndroid.content.Context): void;
				public fillData(param0: java.util.List<com.vincent.filepicker.filter.entity.Directory<any>>): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export class MaxHeightLayout {
				public static class: java.lang.Class<com.vincent.filepicker.MaxHeightLayout>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onMeasure(param0: number, param1: number): void;
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export class ToastUtil {
				public static class: java.lang.Class<com.vincent.filepicker.ToastUtil>;
				public showToast(param0: string): void;
				public cancelToast(): void;
				public showToast(param0: number): void;
				public static getInstance(param0: globalAndroid.content.Context): com.vincent.filepicker.ToastUtil;
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export class Util {
				public static class: java.lang.Class<com.vincent.filepicker.Util>;
				public static dip2px(param0: globalAndroid.content.Context, param1: number): number;
				public static extractFileNameWithoutSuffix(param0: string): string;
				public static getScreenWidth(param0: globalAndroid.content.Context): number;
				public static getDurationString(param0: number): string;
				public static extractPathWithSeparator(param0: string): string;
				public static extractPathWithoutSeparator(param0: string): string;
				public static extractFileSuffix(param0: string): string;
				public static extractFileNameWithSuffix(param0: string): string;
				public static getScreenHeight(param0: globalAndroid.content.Context): number;
				public static px2dip(param0: globalAndroid.content.Context, param1: number): number;
				public static detectIntent(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export module activity {
				export class AudioPickActivity extends com.vincent.filepicker.activity.BaseActivity {
					public static class: java.lang.Class<com.vincent.filepicker.activity.AudioPickActivity>;
					public static IS_NEED_RECORDER: string;
					public static IS_TAKEN_AUTO_SELECTED: string;
					public static DEFAULT_MAX_NUMBER: number;
					public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export module activity {
				export abstract class BaseActivity {
					public static class: java.lang.Class<com.vincent.filepicker.activity.BaseActivity>;
					public mFolderHelper: com.vincent.filepicker.FolderListHelper;
					public isNeedFolderList: boolean;
					public static IS_NEED_FOLDER_LIST: string;
					public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public onPermissionsDenied(param0: number, param1: java.util.List<string>): void;
					public constructor();
					public onPostCreate(param0: globalAndroid.os.Bundle): void;
					public onBackClick(param0: globalAndroid.view.View): void;
					public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
					public onPermissionsGranted(param0: number, param1: java.util.List<string>): void;
				}
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export module activity {
				export class ImageBrowserActivity extends com.vincent.filepicker.activity.BaseActivity {
					public static class: java.lang.Class<com.vincent.filepicker.activity.ImageBrowserActivity>;
					public static IMAGE_BROWSER_INIT_INDEX: string;
					public static IMAGE_BROWSER_SELECTED_LIST: string;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
					public constructor();
					public onBackPressed(): void;
					public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
				}
				export module ImageBrowserActivity {
					export class ImageBrowserAdapter {
						public static class: java.lang.Class<com.vincent.filepicker.activity.ImageBrowserActivity.ImageBrowserAdapter>;
						public isViewFromObject(param0: globalAndroid.view.View, param1: any): boolean;
						public destroyItem(param0: globalAndroid.view.ViewGroup, param1: number, param2: any): void;
						public getCount(): number;
						public instantiateItem(param0: globalAndroid.view.ViewGroup, param1: number): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export module activity {
				export class ImagePickActivity extends com.vincent.filepicker.activity.BaseActivity {
					public static class: java.lang.Class<com.vincent.filepicker.activity.ImagePickActivity>;
					public static IS_NEED_CAMERA: string;
					public static IS_NEED_IMAGE_PAGER: string;
					public static IS_TAKEN_AUTO_SELECTED: string;
					public static DEFAULT_MAX_NUMBER: number;
					public static COLUMN_NUMBER: number;
					public mSelectedList: java.util.ArrayList<com.vincent.filepicker.filter.entity.ImageFile>;
					public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export module activity {
				export class NormalFilePickActivity extends com.vincent.filepicker.activity.BaseActivity {
					public static class: java.lang.Class<com.vincent.filepicker.activity.NormalFilePickActivity>;
					public static DEFAULT_MAX_NUMBER: number;
					public static SUFFIX: string;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export module activity {
				export class VideoPickActivity extends com.vincent.filepicker.activity.BaseActivity {
					public static class: java.lang.Class<com.vincent.filepicker.activity.VideoPickActivity>;
					public static THUMBNAIL_PATH: string;
					public static IS_NEED_CAMERA: string;
					public static IS_TAKEN_AUTO_SELECTED: string;
					public static DEFAULT_MAX_NUMBER: number;
					public static DEFAULT_MAX_VIDEO_DURATION: number;
					public static COLUMN_NUMBER: number;
					public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export module adapter {
				export class AudioPickAdapter extends com.vincent.filepicker.adapter.BaseAdapter<com.vincent.filepicker.filter.entity.AudioFile,com.vincent.filepicker.adapter.AudioPickAdapter.AudioPickViewHolder> {
					public static class: java.lang.Class<com.vincent.filepicker.adapter.AudioPickAdapter>;
					public onBindViewHolder(param0: com.vincent.filepicker.adapter.AudioPickAdapter.AudioPickViewHolder, param1: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: number);
					public getItemCount(): number;
					public constructor(param0: globalAndroid.content.Context, param1: java.util.ArrayList<com.vincent.filepicker.filter.entity.AudioFile>, param2: number);
					public setCurrentNumber(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: java.util.ArrayList<any>);
					public isUpToMax(): boolean;
					public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.vincent.filepicker.adapter.AudioPickAdapter.AudioPickViewHolder;
				}
				export module AudioPickAdapter {
					export class AudioPickViewHolder {
						public static class: java.lang.Class<com.vincent.filepicker.adapter.AudioPickAdapter.AudioPickViewHolder>;
						public constructor(param0: com.vincent.filepicker.adapter.AudioPickAdapter, param1: globalAndroid.view.View);
					}
				}
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export module adapter {
				export abstract class BaseAdapter<T, VH>  extends globalAndroid.support.v7.widget.RecyclerView.Adapter<any> {
					public static class: java.lang.Class<com.vincent.filepicker.adapter.BaseAdapter<any,any>>;
					public mContext: globalAndroid.content.Context;
					public mList: java.util.ArrayList<any>;
					public mListener: com.vincent.filepicker.adapter.OnSelectStateListener<any>;
					public add(param0: any): void;
					public add(param0: number, param1: any): void;
					public refresh(param0: any): void;
					public setOnSelectStateListener(param0: com.vincent.filepicker.adapter.OnSelectStateListener<any>): void;
					public add(param0: java.util.List<any>): void;
					public refresh(param0: java.util.List<any>): void;
					public getDataSet(): java.util.List<any>;
					public constructor(param0: globalAndroid.content.Context, param1: java.util.ArrayList<any>);
				}
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export module adapter {
				export class FolderListAdapter extends com.vincent.filepicker.adapter.BaseAdapter<com.vincent.filepicker.filter.entity.Directory<any>,com.vincent.filepicker.adapter.FolderListAdapter.FolderListViewHolder> {
					public static class: java.lang.Class<com.vincent.filepicker.adapter.FolderListAdapter>;
					public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.vincent.filepicker.adapter.FolderListAdapter.FolderListViewHolder;
					public onBindViewHolder(param0: com.vincent.filepicker.adapter.FolderListAdapter.FolderListViewHolder, param1: number): void;
					public setListener(param0: com.vincent.filepicker.adapter.FolderListAdapter.FolderListListener): void;
					public getItemCount(): number;
					public constructor(param0: globalAndroid.content.Context, param1: java.util.ArrayList<any>);
					public constructor(param0: globalAndroid.content.Context, param1: java.util.ArrayList<com.vincent.filepicker.filter.entity.Directory<any>>);
				}
				export module FolderListAdapter {
					export class FolderListListener {
						public static class: java.lang.Class<com.vincent.filepicker.adapter.FolderListAdapter.FolderListListener>;
						/**
						 * Constructs a new instance of the com.vincent.filepicker.adapter.FolderListAdapter$FolderListListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onFolderListClick(param0: com.vincent.filepicker.filter.entity.Directory<any>): void;
						});
						public constructor();
						public onFolderListClick(param0: com.vincent.filepicker.filter.entity.Directory<any>): void;
					}
					export class FolderListViewHolder {
						public static class: java.lang.Class<com.vincent.filepicker.adapter.FolderListAdapter.FolderListViewHolder>;
						public constructor(param0: com.vincent.filepicker.adapter.FolderListAdapter, param1: globalAndroid.view.View);
					}
				}
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export module adapter {
				export class ImagePickAdapter extends com.vincent.filepicker.adapter.BaseAdapter<com.vincent.filepicker.filter.entity.ImageFile,com.vincent.filepicker.adapter.ImagePickAdapter.ImagePickViewHolder> {
					public static class: java.lang.Class<com.vincent.filepicker.adapter.ImagePickAdapter>;
					public mImagePath: string;
					public mImageUri: globalAndroid.net.Uri;
					public constructor(param0: globalAndroid.content.Context, param1: java.util.ArrayList<com.vincent.filepicker.filter.entity.ImageFile>, param2: boolean, param3: boolean, param4: number);
					public onBindViewHolder(param0: com.vincent.filepicker.adapter.ImagePickAdapter.ImagePickViewHolder, param1: number): void;
					public getItemCount(): number;
					public constructor(param0: globalAndroid.content.Context, param1: boolean, param2: boolean, param3: number);
					public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.vincent.filepicker.adapter.ImagePickAdapter.ImagePickViewHolder;
					public setCurrentNumber(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: java.util.ArrayList<any>);
					public isUpToMax(): boolean;
				}
				export module ImagePickAdapter {
					export class ImagePickViewHolder {
						public static class: java.lang.Class<com.vincent.filepicker.adapter.ImagePickAdapter.ImagePickViewHolder>;
						public constructor(param0: com.vincent.filepicker.adapter.ImagePickAdapter, param1: globalAndroid.view.View);
					}
				}
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export module adapter {
				export class NormalFilePickAdapter extends com.vincent.filepicker.adapter.BaseAdapter<com.vincent.filepicker.filter.entity.NormalFile,com.vincent.filepicker.adapter.NormalFilePickAdapter.NormalFilePickViewHolder> {
					public static class: java.lang.Class<com.vincent.filepicker.adapter.NormalFilePickAdapter>;
					public constructor(param0: globalAndroid.content.Context, param1: java.util.ArrayList<com.vincent.filepicker.filter.entity.NormalFile>, param2: number);
					public constructor(param0: globalAndroid.content.Context, param1: number);
					public getItemCount(): number;
					public onBindViewHolder(param0: com.vincent.filepicker.adapter.NormalFilePickAdapter.NormalFilePickViewHolder, param1: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: java.util.ArrayList<any>);
					public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.vincent.filepicker.adapter.NormalFilePickAdapter.NormalFilePickViewHolder;
				}
				export module NormalFilePickAdapter {
					export class NormalFilePickViewHolder {
						public static class: java.lang.Class<com.vincent.filepicker.adapter.NormalFilePickAdapter.NormalFilePickViewHolder>;
						public constructor(param0: com.vincent.filepicker.adapter.NormalFilePickAdapter, param1: globalAndroid.view.View);
					}
				}
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export module adapter {
				export class OnSelectStateListener<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.vincent.filepicker.adapter.OnSelectStateListener<any>>;
					/**
					 * Constructs a new instance of the com.vincent.filepicker.adapter.OnSelectStateListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						OnSelectStateChanged(param0: boolean, param1: T): void;
					});
					public constructor();
					public OnSelectStateChanged(param0: boolean, param1: T): void;
				}
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export module adapter {
				export class VideoPickAdapter extends com.vincent.filepicker.adapter.BaseAdapter<com.vincent.filepicker.filter.entity.VideoFile,com.vincent.filepicker.adapter.VideoPickAdapter.VideoPickViewHolder> {
					public static class: java.lang.Class<com.vincent.filepicker.adapter.VideoPickAdapter>;
					public mVideoPath: string;
					public constructor(param0: globalAndroid.content.Context, param1: boolean, param2: number, param3: number, param4: number);
					public onBindViewHolder(param0: com.vincent.filepicker.adapter.VideoPickAdapter.VideoPickViewHolder, param1: number): void;
					public getItemCount(): number;
					public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.vincent.filepicker.adapter.VideoPickAdapter.VideoPickViewHolder;
					public setCurrentNumber(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: java.util.ArrayList<any>);
					public isUpToMax(): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: java.util.ArrayList<com.vincent.filepicker.filter.entity.VideoFile>, param2: boolean, param3: number, param4: number, param5: number);
				}
				export module VideoPickAdapter {
					export class VideoPickViewHolder {
						public static class: java.lang.Class<com.vincent.filepicker.adapter.VideoPickAdapter.VideoPickViewHolder>;
						public constructor(param0: com.vincent.filepicker.adapter.VideoPickAdapter, param1: globalAndroid.view.View);
					}
				}
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export module filter {
				export class FileFilter {
					public static class: java.lang.Class<com.vincent.filepicker.filter.FileFilter>;
					public static getAudios(param0: globalAndroid.support.v4.app.FragmentActivity, param1: com.vincent.filepicker.filter.callback.FilterResultCallback<com.vincent.filepicker.filter.entity.AudioFile>): void;
					public constructor();
					public static getImages(param0: globalAndroid.support.v4.app.FragmentActivity, param1: com.vincent.filepicker.filter.callback.FilterResultCallback<com.vincent.filepicker.filter.entity.ImageFile>): void;
					public static getFiles(param0: globalAndroid.support.v4.app.FragmentActivity, param1: com.vincent.filepicker.filter.callback.FilterResultCallback<com.vincent.filepicker.filter.entity.NormalFile>, param2: native.Array<string>): void;
					public static getVideos(param0: globalAndroid.support.v4.app.FragmentActivity, param1: com.vincent.filepicker.filter.callback.FilterResultCallback<com.vincent.filepicker.filter.entity.VideoFile>): void;
				}
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export module filter {
				export module callback {
					export class FileLoaderCallbacks extends globalAndroid.support.v4.app.LoaderManager.LoaderCallbacks<globalAndroid.database.Cursor> {
						public static class: java.lang.Class<com.vincent.filepicker.filter.callback.FileLoaderCallbacks>;
						public static TYPE_IMAGE: number;
						public static TYPE_VIDEO: number;
						public static TYPE_AUDIO: number;
						public static TYPE_FILE: number;
						public constructor(param0: globalAndroid.content.Context, param1: com.vincent.filepicker.filter.callback.FilterResultCallback<any>, param2: number, param3: native.Array<string>);
						public constructor(param0: globalAndroid.content.Context, param1: com.vincent.filepicker.filter.callback.FilterResultCallback<any>, param2: number);
						public onCreateLoader(param0: number, param1: globalAndroid.os.Bundle): globalAndroid.support.v4.content.Loader<globalAndroid.database.Cursor>;
						public onLoaderReset(param0: globalAndroid.support.v4.content.Loader<globalAndroid.database.Cursor>): void;
						public onLoadFinished(param0: globalAndroid.support.v4.content.Loader<globalAndroid.database.Cursor>, param1: globalAndroid.database.Cursor): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export module filter {
				export module callback {
					export class FilterResultCallback<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.vincent.filepicker.filter.callback.FilterResultCallback<any>>;
						/**
						 * Constructs a new instance of the com.vincent.filepicker.filter.callback.FilterResultCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onResult(param0: java.util.List<com.vincent.filepicker.filter.entity.Directory<T>>): void;
						});
						public constructor();
						public onResult(param0: java.util.List<com.vincent.filepicker.filter.entity.Directory<T>>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export module filter {
				export module entity {
					export class AudioFile extends com.vincent.filepicker.filter.entity.BaseFile {
						public static class: java.lang.Class<com.vincent.filepicker.filter.entity.AudioFile>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.vincent.filepicker.filter.entity.AudioFile>;
						public constructor();
						public describeContents(): number;
						public getDuration(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public setDuration(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export module filter {
				export module entity {
					export class BaseFile {
						public static class: java.lang.Class<com.vincent.filepicker.filter.entity.BaseFile>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.vincent.filepicker.filter.entity.BaseFile>;
						public setSize(param0: number): void;
						public setDate(param0: number): void;
						public constructor();
						public describeContents(): number;
						public setName(param0: string): void;
						public getBucketName(): string;
						public isSelected(): boolean;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getPath(): string;
						public getName(): string;
						public setBucketId(param0: string): void;
						public getId(): number;
						public setId(param0: number): void;
						public setPath(param0: string): void;
						public getSize(): number;
						public setSelected(param0: boolean): void;
						public getBucketId(): string;
						public getDate(): number;
						public setBucketName(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export module filter {
				export module entity {
					export class Directory<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.vincent.filepicker.filter.entity.Directory<any>>;
						public setPath(param0: string): void;
						public constructor();
						public getFiles(): java.util.List<T>;
						public setName(param0: string): void;
						public setId(param0: string): void;
						public setFiles(param0: java.util.List<T>): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getId(): string;
						public getPath(): string;
						public getName(): string;
						public addFile(param0: T): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export module filter {
				export module entity {
					export class ImageFile extends com.vincent.filepicker.filter.entity.BaseFile {
						public static class: java.lang.Class<com.vincent.filepicker.filter.entity.ImageFile>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.vincent.filepicker.filter.entity.ImageFile>;
						public constructor();
						public describeContents(): number;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public setOrientation(param0: number): void;
						public getOrientation(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export module filter {
				export module entity {
					export class NormalFile extends com.vincent.filepicker.filter.entity.BaseFile {
						public static class: java.lang.Class<com.vincent.filepicker.filter.entity.NormalFile>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.vincent.filepicker.filter.entity.NormalFile>;
						public constructor();
						public describeContents(): number;
						public getMimeType(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public setMimeType(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export module filter {
				export module entity {
					export class VideoFile extends com.vincent.filepicker.filter.entity.BaseFile {
						public static class: java.lang.Class<com.vincent.filepicker.filter.entity.VideoFile>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.vincent.filepicker.filter.entity.VideoFile>;
						public constructor();
						public describeContents(): number;
						public getDuration(): number;
						public getThumbnail(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public setThumbnail(param0: string): void;
						public setDuration(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export module filter {
				export module loader {
					export class AudioLoader {
						public static class: java.lang.Class<com.vincent.filepicker.filter.loader.AudioLoader>;
						public constructor(param0: globalAndroid.content.Context);
					}
				}
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export module filter {
				export module loader {
					export class FileLoader {
						public static class: java.lang.Class<com.vincent.filepicker.filter.loader.FileLoader>;
						public constructor(param0: globalAndroid.content.Context);
					}
				}
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export module filter {
				export module loader {
					export class ImageLoader {
						public static class: java.lang.Class<com.vincent.filepicker.filter.loader.ImageLoader>;
						public constructor(param0: globalAndroid.content.Context);
					}
				}
			}
		}
	}
}

declare module com {
	export module vincent {
		export module filepicker {
			export module filter {
				export module loader {
					export class VideoLoader {
						public static class: java.lang.Class<com.vincent.filepicker.filter.loader.VideoLoader>;
						public constructor(param0: globalAndroid.content.Context);
					}
				}
			}
		}
	}
}

//Generics information:
//com.vincent.filepicker.adapter.BaseAdapter:2
//com.vincent.filepicker.adapter.OnSelectStateListener:1
//com.vincent.filepicker.filter.callback.FilterResultCallback:1
//com.vincent.filepicker.filter.entity.Directory:1

