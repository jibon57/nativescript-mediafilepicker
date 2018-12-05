import { Observable } from 'tns-core-modules/data/observable';
import { MediaPickerInterface, ImagePickerOptions, VideoPickerOptions, AudioPickerOptions, FilePickerOptions } from "./mediafilepicker.common";
import * as app from 'tns-core-modules/application';
import * as utils from "tns-core-modules/utils/utils";
const permissions = require('nativescript-permissions');

const AudioPickActivity = com.vincent.filepicker.activity.AudioPickActivity;
const ImagePickActivity = com.vincent.filepicker.activity.ImagePickActivity;
const NormalFilePickActivity = com.vincent.filepicker.activity.NormalFilePickActivity;
const VideoPickActivity = com.vincent.filepicker.activity.VideoPickActivity;
const Constant = com.vincent.filepicker.Constant;
const Util = com.vincent.filepicker.Util;

const Intent = android.content.Intent;
const MediaStore = android.provider.MediaStore;
const Environment = android.os.Environment;
const File = java.io.File;
const ContentValues = android.content.ContentValues;
const Uri = android.net.Uri;

declare const java, android;

export class Mediafilepicker extends Observable implements MediaPickerInterface {

    public results;
    public msg;
    private captureFilePath;
    private captureContentUrl;

    constructor() {
        super();
    }

    /**
     * openImagePicker
     */
    public openImagePicker(params: ImagePickerOptions) {

        let intent, pickerType, options = params.android;

        if (options.isCaptureMood) {
            this.performCapturing("image", options);
            return;
        }

        intent = new Intent(app.android.foregroundActivity, ImagePickActivity.class);

        options.isNeedCamera ? intent.putExtra(ImagePickActivity.IS_NEED_CAMERA, true) : intent.putExtra(ImagePickActivity.IS_NEED_CAMERA, false);

        options.maxNumberFiles ? intent.putExtra(Constant.MAX_NUMBER, options.maxNumberFiles) : intent.putExtra(Constant.MAX_NUMBER, 99);

        options.isNeedFolderList ? intent.putExtra(ImagePickActivity.IS_NEED_FOLDER_LIST, true) : intent.putExtra(ImagePickActivity.IS_NEED_FOLDER_LIST, false);

        pickerType = Constant.REQUEST_CODE_PICK_IMAGE;

        this.callIntent(intent, pickerType);
    }

    /**
     * openVideoPicker
     */
    public openVideoPicker(params: VideoPickerOptions) {

        let intent, pickerType, options = params.android;

        if (options.isCaptureMood) {
            this.performCapturing("video", options);
            return;
        }

        intent = new Intent(app.android.foregroundActivity, VideoPickActivity.class);

        options.isNeedCamera ? intent.putExtra(VideoPickActivity.IS_NEED_CAMERA, true) : intent.putExtra(VideoPickActivity.IS_NEED_CAMERA, false);

        options.maxNumberFiles ? intent.putExtra(Constant.MAX_NUMBER, options.maxNumberFiles) : intent.putExtra(Constant.MAX_NUMBER, 99);

        options.isNeedFolderList ? intent.putExtra(VideoPickActivity.IS_NEED_FOLDER_LIST, true) : intent.putExtra(VideoPickActivity.IS_NEED_FOLDER_LIST, false);

        if (options.maxDuration > 0) {
            intent.putExtra(Constant.MAX_VIDEO_DURATION, options.maxDuration);
        }

        intent.putExtra(Constant.VIDEO_QUALITY, 1);

        if (options.videoQuality === 0) {
            intent.putExtra(Constant.VIDEO_QUALITY, 0);
        }

        pickerType = Constant.REQUEST_CODE_PICK_VIDEO;

        this.callIntent(intent, pickerType);
    }

    /**
     * openAudioPicker
     */
    public openAudioPicker(params: AudioPickerOptions) {

        let intent, pickerType, options = params.android;

        if (options.isCaptureMood) {
            this.performCapturing("audio", options);
            return;
        }

        intent = new Intent(app.android.foregroundActivity, AudioPickActivity.class);

        options.isNeedRecorder ? intent.putExtra(AudioPickActivity.IS_NEED_RECORDER, true) : intent.putExtra(AudioPickActivity.IS_NEED_RECORDER, false);

        options.maxNumberFiles ? intent.putExtra(Constant.MAX_NUMBER, options.maxNumberFiles) : intent.putExtra(Constant.MAX_NUMBER, 99);

        options.isNeedFolderList ? intent.putExtra(AudioPickActivity.IS_NEED_FOLDER_LIST, true) : intent.putExtra(AudioPickActivity.IS_NEED_FOLDER_LIST, false);

        if (options.maxSize > 0) {
            intent.putExtra(Constant.MAX_AUDIO_SIZE, options.maxSize);
        }

        intent.putExtra(AudioPickActivity.IS_TAKEN_AUTO_SELECTED, true);

        pickerType = Constant.REQUEST_CODE_PICK_AUDIO;

        this.callIntent(intent, pickerType);
    }

    /**
     * openFilePicker
     */
    public openFilePicker(params: FilePickerOptions) {

        let intent, pickerType, options = params.android, extensions;

        if (options.extensions.length > 0) {

            extensions = Array.create(java.lang.String, options.extensions.length);

            for (let i = 0; i < options.extensions.length; i++) {
                extensions[i] = options.extensions[i];
            }
        }

        intent = new Intent(app.android.foregroundActivity, NormalFilePickActivity.class);

        options.maxNumberFiles ? intent.putExtra(Constant.MAX_NUMBER, options.maxNumberFiles) : intent.putExtra(Constant.MAX_NUMBER, 99);

        intent.putExtra(NormalFilePickActivity.SUFFIX, extensions);
        pickerType = Constant.REQUEST_CODE_PICK_FILE;

        this.callIntent(intent, pickerType);

    }

    private performCapturing(type: string, options: any) {

        let t = this;

        const requestPermissions = [android.Manifest.permission.WRITE_EXTERNAL_STORAGE];
        if (type === "image" || type === "video") {
            requestPermissions.push(android.Manifest.permission.CAMERA);
        } else if (type === "audio") {
            requestPermissions.push(android.Manifest.permission.RECORD_AUDIO);
        }

        permissions.requestPermission(requestPermissions, "Need these permissions to access files")
            .then(function () {
                t.handleOnlyCaptureMode(type, options);
            })
            .catch(function () {
                t.msg = "Permission Error!";
                t.notify({
                    eventName: 'error',
                    object: t
                });
            });

    }

    private handleOnlyCaptureMode(type: string, options: any) {

        let context = app.android.context, t = this, intent, date, timeStamp, contentValues, file, uri;

        switch (type) {

            case 'image':

                intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
                date = new Date();
                timeStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "_" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();

                file = new File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DCIM).getAbsolutePath() + "/IMG_" + timeStamp + ".jpg");
                let mImagePath = file.getAbsolutePath();
                this.captureFilePath = mImagePath;

                contentValues = new ContentValues(1);
                contentValues.put(MediaStore.Images.Media.DATA, mImagePath);
                let mImageUri = context.getContentResolver().insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, contentValues);
                this.captureContentUrl = mImageUri;

                intent.putExtra(MediaStore.EXTRA_OUTPUT, mImageUri);
                if (Util.detectIntent(context, intent)) {
                    this.callIntent(intent, Constant.REQUEST_CODE_TAKE_IMAGE);
                } else {
                    this.msg = "No photo capture app installed!";
                    this.notify({
                        eventName: 'error',
                        object: this
                    });
                }
                break;

            case 'video':

                intent = new Intent(MediaStore.ACTION_VIDEO_CAPTURE);
                date = new Date();
                timeStamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "_" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();

                file = new File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DCIM).getAbsolutePath() + "/VID_" + timeStamp + ".mp4");
                let mVideoPath = file.getAbsolutePath();
                this.captureFilePath = mVideoPath;

                contentValues = new ContentValues(1);
                contentValues.put(MediaStore.Images.Media.DATA, mVideoPath);
                uri = context.getContentResolver().insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, contentValues);
                this.captureContentUrl = uri;

                intent.putExtra(MediaStore.EXTRA_OUTPUT, uri);
                intent.putExtra(MediaStore.EXTRA_VIDEO_QUALITY, 1);

                if (options.maxDuration > 0) {
                    intent.putExtra(MediaStore.EXTRA_DURATION_LIMIT, options.maxDuration);
                }

                if (options.videoQuality === 0) {
                    intent.putExtra(MediaStore.EXTRA_VIDEO_QUALITY, 0);
                }

                if (Util.detectIntent(context, intent)) {
                    this.callIntent(intent, Constant.REQUEST_CODE_TAKE_VIDEO);
                } else {
                    this.msg = "No video recorder app installed!";
                    this.notify({
                        eventName: 'error',
                        object: this
                    });
                }

                break;
            case 'audio':

                intent = new Intent(MediaStore.Audio.Media.RECORD_SOUND_ACTION);

                if (options.maxSize > 0) {
                    let MAX_SIZE = android.provider.MediaStore.Audio.Media.EXTRA_MAX_BYTES;
                    intent.putExtra(MAX_SIZE, options.maxSize);
                }

                if (Util.detectIntent(context, intent)) {
                    this.callIntent(intent, Constant.REQUEST_CODE_TAKE_AUDIO);
                } else {
                    this.msg = "No audio recorder app installed!";
                    this.notify({
                        eventName: 'error',
                        object: this
                    });
                }

                break;
        }
    }

    private callIntent(intent, pickerType) {

        let t = this;

        const requestPermissions = [android.Manifest.permission.WRITE_EXTERNAL_STORAGE];
        if (pickerType === Constant.REQUEST_CODE_TAKE_IMAGE || pickerType === Constant.REQUEST_CODE_PICK_IMAGE || pickerType === Constant.REQUEST_CODE_TAKE_VIDEO || pickerType === Constant.REQUEST_CODE_PICK_VIDEO) {
            requestPermissions.push(android.Manifest.permission.CAMERA);
        } else if (pickerType === Constant.REQUEST_CODE_TAKE_AUDIO || pickerType === Constant.REQUEST_CODE_PICK_AUDIO) {
            requestPermissions.push(android.Manifest.permission.RECORD_AUDIO);
        }

        permissions.requestPermission(requestPermissions, "Need these permissions to access files")
            .then(function () {
                app.android.foregroundActivity.startActivityForResult(intent, pickerType);
            })
            .catch(function () {
                t.msg = "Permission Error!";
                t.notify({
                    eventName: 'error',
                    object: t
                });
            });

        app.android.on(app.AndroidApplication.activityResultEvent, onResult);

        function onResult(args) {
            app.android.off(app.AndroidApplication.activityResultEvent, onResult);
            t.handleResults(args.requestCode, args.resultCode, args.intent);
        }

    }

    /**
     * handleResults
     */
    private handleResults(requestCode, resultCode, data) {

        let androidAcivity = android.app.Activity;
        let context = app.android.context;
        let output = [];
        let t = this;

        switch (requestCode) {

            case Constant.REQUEST_CODE_PICK_IMAGE:
                if (resultCode === androidAcivity.RESULT_OK) {

                    let list = data.getParcelableArrayListExtra(Constant.RESULT_PICK_IMAGE);

                    list = list.toArray();

                    for (let index = 0; index < list.length; index++) {

                        let item = list[index];

                        let file = {
                            type: 'image',
                            file: item.getPath(),
                            rawData: item
                        };

                        output.push(file);
                    }

                }
                break;

            case Constant.REQUEST_CODE_PICK_VIDEO:
                if (resultCode === androidAcivity.RESULT_OK) {

                    let list = data.getParcelableArrayListExtra(Constant.RESULT_PICK_VIDEO);

                    list = list.toArray();

                    for (let index = 0; index < list.length; index++) {

                        let item = list[index];

                        let file = {
                            type: 'video',
                            file: item.getPath(),
                            rawData: item
                        };

                        output.push(file);
                    }
                }
                break;

            case Constant.REQUEST_CODE_PICK_AUDIO:
                if (resultCode === androidAcivity.RESULT_OK) {

                    let list = data.getParcelableArrayListExtra(Constant.RESULT_PICK_AUDIO);

                    list = list.toArray();

                    for (let index = 0; index < list.length; index++) {

                        let item = list[index];

                        let file = {
                            type: 'audio',
                            file: item.getPath(),
                            rawData: item
                        };

                        output.push(file);
                    }

                }
                break;

            case Constant.REQUEST_CODE_PICK_FILE:
                if (resultCode === androidAcivity.RESULT_OK) {

                    let list = data.getParcelableArrayListExtra(Constant.RESULT_PICK_FILE);

                    list = list.toArray();

                    for (let index = 0; index < list.length; index++) {

                        let item = list[index];

                        let file = {
                            type: 'normalFile',
                            file: item.getPath(),
                            rawData: item
                        };

                        output.push(file);
                    }
                }
                break;

            case Constant.REQUEST_CODE_TAKE_IMAGE:
                if (resultCode === androidAcivity.RESULT_OK) {

                    let rawData = new File(this.captureFilePath);
                    let file = {
                        type: 'capturedImage',
                        file: this.captureFilePath,
                        rawData: rawData
                    };

                    output.push(file);
                } else {
                    utils.ad.getApplicationContext().getContentResolver().delete(this.captureContentUrl, null, null);
                }
                break;

            case Constant.REQUEST_CODE_TAKE_VIDEO:
                if (resultCode === androidAcivity.RESULT_OK) {

                    let rawData = new File(this.captureFilePath);
                    let file = {
                        type: 'capturedVideo',
                        file: this.captureFilePath,
                        rawData: rawData
                    };

                    output.push(file);
                } else {
                    utils.ad.getApplicationContext().getContentResolver().delete(this.captureContentUrl, null, null);
                }
                break;

            case Constant.REQUEST_CODE_TAKE_AUDIO:
                if (resultCode === androidAcivity.RESULT_OK) {

                    let rawData = Uri.parse(data.getData().toString());
                    let cursor = context.getContentResolver().query(rawData, null, null, null, null);
                    let column_index = cursor.getColumnIndex(MediaStore.Audio.Media.DATA);
                    cursor.moveToFirst();

                    let file = {
                        type: 'capturedAudio',
                        file: cursor.getString(column_index),
                        rawData: rawData
                    };

                    output.push(file);
                    cursor.close();
                }
                break;
        }

        setTimeout(() => {

            this.results = output;

            if (output.length > 0) {

                t.notify({
                    eventName: 'getFiles',
                    object: t
                });

            } else {

                t.msg = 'Picker cancel or no file has been selected.';
                t.notify({
                    eventName: 'cancel',
                    object: t
                });
            }

        }, 1000);
    }

    public greet() {
        return "Hello, NS";
    }

}
