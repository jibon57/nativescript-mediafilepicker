import { Observable } from 'tns-core-modules/data/observable';
import { MediaPickerInterface, ImagePickerOptions, VideoPickerOptions, AudioPickerOptions, FilePickerOptions } from "./mediafilepicker.common";
import * as app from 'tns-core-modules/application';
const permissions = require('nativescript-permissions');

declare const java;

const AudioPickActivity = com.vincent.filepicker.activity.AudioPickActivity;
const ImagePickActivity = com.vincent.filepicker.activity.ImagePickActivity;
const NormalFilePickActivity = com.vincent.filepicker.activity.NormalFilePickActivity;
const VideoPickActivity = com.vincent.filepicker.activity.VideoPickActivity;

const Constant = com.vincent.filepicker.Constant;
const Intent = android.content.Intent;

export class Mediafilepicker extends Observable implements MediaPickerInterface {

    public results;
    public msg;

    constructor() {
        super();
    }

    /**
     * openImagePicker
     */
    public openImagePicker(params: ImagePickerOptions) {

        let intent, pickerType, options = params.android;

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

    private callIntent(intent, pickerType) {

        let t = this;

        permissions.requestPermission([android.Manifest.permission.CAMERA, android.Manifest.permission.RECORD_AUDIO, android.Manifest.permission.WRITE_EXTERNAL_STORAGE], "Need these permissions to access files")
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

}
