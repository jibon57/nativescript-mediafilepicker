import { Common, CommonFilePicker, MediaFilepickerOptions } from './mediafilepicker.common';
import * as app from 'tns-core-modules/application/application';
import { android as Android, AndroidApplication, AndroidActivityResultEventData } from "tns-core-modules/application/application";
var permissions = require('nativescript-permissions');
declare var android, droidninja;

const FilePickerBuilder = droidninja.filepicker.FilePickerBuilder;
const FilePickerConst = droidninja.filepicker.FilePickerConst;

export class Mediafilepicker extends Common implements CommonFilePicker {

    public output = "";

    public startFilePicker(params: MediaFilepickerOptions) {

        let activity = app.android.foregroundActivity || app.android.startActivity;
        let t = this;
        let builder = FilePickerBuilder.getInstance();

        let options = params.android;

        options.enableImagePicker ? builder.enableImagePicker(true) : builder.enableImagePicker(false);
        options.enableVideoPicker ? builder.enableVideoPicker(true) : builder.enableVideoPicker(false);
        options.enableDocSupport ? builder.enableDocSupport(true) : builder.enableDocSupport(false);
        options.enableCameraSupport ? builder.enableCameraSupport(true) : builder.enableCameraSupport(false);
        options.showGifs ? builder.showGifs(true) : builder.showGifs(false);

        if (options.mxcount) {
            builder.setMaxCount(options.mxcount);
        }
        if (options.setSelectedFiles) {
            builder.setSelectedFiles(options.setSelectedFiles)
        }
        if (options.setActivityTheme) {
            builder.setActivityTheme(options.setActivityTheme);
        }
        if (options.addFileSupport) {
            builder.addFileSupport(options.addFileSupport.title, options.addFileSupport.type, options.addFileSupport.icon);
        }

        permissions.requestPermission([android.Manifest.permission.CAMERA, android.Manifest.permission.WRITE_EXTERNAL_STORAGE], "Need these permissions to access files")
            .then(function () {
                if (options.pickFile) {
                    builder.pickFile(activity);
                } else {
                    builder.pickPhoto(activity);
                }
            })
            .catch(function () {
                alert("Need permission to access files!");

                t.notify({
                    eventName: "error",
                    object: t,
                    data: "Need permission to access files!"
                })
            });

        Android.on(AndroidApplication.activityResultEvent, function (args: AndroidActivityResultEventData) {

            t.handleResult(args.requestCode, args.resultCode, args.intent);
        });


    }

    /**
     * handleResult
     */
    public handleResult(requestCode, resultCode, data) {

        let t = this;

        let androidAcivity = android.app.Activity;
        
        switch (requestCode) {

            case FilePickerConst.REQUEST_CODE_PHOTO:

                if (resultCode == androidAcivity.RESULT_OK && data != null) {

                    let photoPaths = data.getStringArrayListExtra(FilePickerConst.KEY_SELECTED_MEDIA);
                    photoPaths = photoPaths.toString();
                    photoPaths = photoPaths.replace(/[\[\]']+/g, "");
                    photoPaths = photoPaths.split(",");

                    photoPaths.forEach(val => {
                        let newVal = val.replace(/^\s+/g, '');
                        t.output = newVal + "," + t.output;
                    });

                    t.notify({
                        eventName: "getFiles",
                        object: t,
                        files: t.output.replace(/\,+$/, "")
                    })
                }
                break;

            case FilePickerConst.REQUEST_CODE_DOC:

                if (resultCode == androidAcivity.RESULT_OK && data != null) {

                    let docPaths = data.getStringArrayListExtra(FilePickerConst.KEY_SELECTED_DOCS);
                    docPaths = docPaths.toString();
                    docPaths = docPaths.replace(/[\[\]']+/g, "");
                    docPaths = docPaths.split(",");

                    docPaths.forEach(val => {
                        let newVal = val.replace(/^\s+/g, '');
                        t.output = newVal + "," + t.output;
                    });

                    t.notify({
                        eventName: "getFiles",
                        object: t,
                        files: t.output.replace(/\,+$/, "")
                    })
                }
                break;
        }
    }
}
