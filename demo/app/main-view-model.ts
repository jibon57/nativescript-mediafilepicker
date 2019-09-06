import { Observable } from 'tns-core-modules/data/observable';
import { Mediafilepicker, ImagePickerOptions, VideoPickerOptions, AudioPickerOptions, FilePickerOptions } from 'nativescript-mediafilepicker';
import * as app from 'tns-core-modules/application';
import { Button } from 'tns-core-modules/ui/button/button';
import { ShowModalOptions, View } from 'tns-core-modules/ui/core/view';
declare const AVCaptureSessionPreset1920x1080, AVCaptureSessionPresetHigh, AVCaptureSessionPresetLow, kUTTypePDF, kUTTypeText;

export class HelloWorldModel extends Observable {

    private _hostView: View;

    constructor(hostView?: View) {
        super();
        this._hostView = hostView;
    }

    public openModal(args) {
        const mainView: Button = <Button>args.object;
        const option: ShowModalOptions = {
            context: {},
            closeCallback: () => { },
            fullscreen: true
        };
        mainView.showModal("modal-page", option);
    }

    /**
     * openImagePicker
     */
    public openImagePicker() {
        let t = this;
        let options: ImagePickerOptions = {
            android: {
                isCaptureMood: false,
                isNeedCamera: true,
                maxNumberFiles: 10,
                isNeedFolderList: true
            }, ios: {
                isCaptureMood: false,
                maxNumberFiles: 10,
                hostView: this._hostView
            }
        };

        let mediafilepicker = new Mediafilepicker();
        mediafilepicker.openImagePicker(options);

        mediafilepicker.on("getFiles", function (res) {
            let results = res.object.get('results');
            console.dir(results);

            if (results) {

                for (let i = 0; i < results.length; i++) {

                    let result = results[i];

                    let file = result.file;

                    console.log(file);

                    if (result.file && app.ios && !options.ios.isCaptureMood) {

                        // We can copy the image to app directory for futher proccess. This will create a new directory name "filepicker". So, after your work you can delete it for reducing memory use.
                        /* let fileName = file.replace(/^.*[\/]/, '');
                        mediafilepicker.copyPHImageToAppDirectory(result.rawData, fileName).then((res: any) => {
                            console.dir(res);
                        }).catch((e) => {
                            console.dir(e);
                        })*/

                        // or can get UIImage to display
                        mediafilepicker.convertPHImageToUIImage(result.rawData).then(res => {
                            console.log(res);
                        });
                    } else if (result.file && app.ios) {
                        // So we have taken image & will get UIImage

                        // We can copy it to app directory, if need
                        let fileName = "myTmpImage.jpg";
                        mediafilepicker.copyUIImageToAppDirectory(result.rawData, fileName).then((res: any) => {
                            console.dir(res);
                        }).catch(e => {
                            console.dir(e);
                        });
                    }

                }
            }
        });

        mediafilepicker.on("error", function (res) {
            let msg = res.object.get('msg');
            console.log(msg);
        });

        mediafilepicker.on("cancel", function (res) {
            let msg = res.object.get('msg');
            console.log(msg);
        });

    }

    /**
     * openVideoPicker
     */
    public openVideoPicker() {

        let allowedVideoQualities = [];

        if (app.ios) {
            allowedVideoQualities = [AVCaptureSessionPreset1920x1080, AVCaptureSessionPresetHigh];  // get more from here: https://developer.apple.com/documentation/avfoundation/avcapturesessionpreset?language=objc
        }

        let options: VideoPickerOptions = {
            android: {
                isCaptureMood: false,
                isNeedCamera: true,
                maxNumberFiles: 2,
                isNeedFolderList: true,
                maxDuration: 20,

            },
            ios: {
                isCaptureMood: false,
                hostView: this._hostView
            }
        };

        let mediafilepicker = new Mediafilepicker();
        mediafilepicker.openVideoPicker(options);

        mediafilepicker.on("getFiles", function (res) {

            let results = res.object.get('results');
            console.dir(results);

            if (results) {

                for (let i = 0; i < results.length; i++) {

                    let result = results[i];
                    console.dir(result);

                    let file = result.file;

                    console.log(file);

                    if (result.file && app.ios && !options.ios.isCaptureMood) {

                        let fileName = file.replace(/^.*[\/]/, '');

                        setTimeout(() => {
                            mediafilepicker.copyPHVideoToAppDirectory(result.urlAsset, fileName).then(res => {
                                console.dir(res);
                            }).catch(e => {
                                console.dir(e);
                            });
                        }, 1000);

                    } else if (result.file && app.ios) {
                        // or we will get our own recorded video :)

                        console.log(file);
                    }

                }
            }

        });

        mediafilepicker.on("error", function (res) {
            let msg = res.object.get('msg');
            console.log(msg);
        });

        mediafilepicker.on("cancel", function (res) {
            let msg = res.object.get('msg');
            console.log(msg);
        });
    }

    /**
     * audio
     */
    public openAudioPicker() {

        let options: AudioPickerOptions = {
            android: {
                isCaptureMood: false,
                isNeedRecorder: true,
                maxNumberFiles: 2,
                isNeedFolderList: true,
                maxSize: 102400 // Maximum size in bytes
            },
            ios: {
                isCaptureMood: false,
                maxNumberFiles: 5,
                audioMaximumDuration: 10,
                hostView: this._hostView
            }
        };

        let mediafilepicker = new Mediafilepicker();
        mediafilepicker.openAudioPicker(options);

        mediafilepicker.on("getFiles", function (res) {

            let results = res.object.get('results');
            console.dir(results);

            if (results) {

                for (let i = 0; i < results.length; i++) {

                    let result = results[i];
                    console.log(result);

                    if (result.file && app.ios && !options.ios.isCaptureMood) {
                        // We can copy the audio to app directory for futher proccess. This will create a new directory name "filepicker". So, after your work you can delete it for reducing memory use.

                        let fileName = "tmpFile.m4a"; // use .m4a

                        // copying file will require some time

                        mediafilepicker.copyMPMediaFileToAPPDirectory(result.rawData, fileName).then((res) => {
                            console.dir(res);
                        }).catch((err) => {
                            console.dir(err);
                        });

                    } else if (result.file && app.ios && options.ios.isCaptureMood) {
                        // So we have recorded file in APP directory

                        console.log(result.file);
                    }

                }
            }

        });

        mediafilepicker.on("error", function (res) {
            let msg = res.object.get('msg');
            console.log(msg);
        });

        mediafilepicker.on("cancel", function (res) {
            let msg = res.object.get('msg');
            console.log(msg);
        });
    }

    /**
     * openCustomFiles
     */
    public openCustomFilesPicker() {
        let extensions = [];

        if (app.ios) {
            extensions = [kUTTypePDF, kUTTypeText]; // you can get more types from here: https://developer.apple.com/documentation/mobilecoreservices/uttype
        } else {
            extensions = ['txt', 'pdf'];
        }

        let options: FilePickerOptions = {
            android: {
                extensions: extensions,
                maxNumberFiles: 2
            },
            ios: {
                extensions: extensions,
                multipleSelection: true,
                hostView: this._hostView
            }
        };

        let mediafilepicker = new Mediafilepicker();
        mediafilepicker.openFilePicker(options);

        mediafilepicker.on("getFiles", function (res) {

            let results = res.object.get('results');
            console.dir(results);

            if (results) {

                for (let i = 0; i < results.length; i++) {

                    let result = results[i];
                    console.log(result.file);

                }
            }

        });

        mediafilepicker.on("error", function (res) {
            let msg = res.object.get('msg');
            console.log(msg);
        });

        mediafilepicker.on("cancel", function (res) {
            let msg = res.object.get('msg');
            console.log(msg);
        });
    }

    /**
     * imageCapture
     */
    public imageCapture() {
        let options: ImagePickerOptions = {
            android: {
                isCaptureMood: true,
            }, ios: {
                isCaptureMood: true,
                hostView: this._hostView
            }
        };

        let mediafilepicker = new Mediafilepicker();
        mediafilepicker.openImagePicker(options);

        mediafilepicker.on("getFiles", function (res) {
            let results = res.object.get('results');
            console.dir(results);
        });

        mediafilepicker.on("error", function (res) {
            let msg = res.object.get('msg');
            console.log(msg);
        });

        mediafilepicker.on("cancel", function (res) {
            let msg = res.object.get('msg');
            console.log(msg);
        });
    }

    /**
     * videoCapture
     */
    public videoCapture() {
        let allowedVideoQualities = [];

        if (app.ios) {
            allowedVideoQualities = [AVCaptureSessionPreset1920x1080, AVCaptureSessionPresetHigh];  // get more from here: https://developer.apple.com/documentation/avfoundation/avcapturesessionpreset?language=objc
        }

        let options: VideoPickerOptions = {
            android: {
                isCaptureMood: true,
                maxDuration: 20,
                videoQuality: 1,
            },
            ios: {
                isCaptureMood: true,
                videoMaximumDuration: 10,
                allowedVideoQualities: allowedVideoQualities,
                hostView: this._hostView
            }
        };

        let mediafilepicker = new Mediafilepicker();
        mediafilepicker.openVideoPicker(options);

        mediafilepicker.on("getFiles", function (res) {
            let results = res.object.get('results');
            console.dir(results);
        });

        mediafilepicker.on("error", function (res) {
            let msg = res.object.get('msg');
            console.log(msg);
        });

        mediafilepicker.on("cancel", function (res) {
            let msg = res.object.get('msg');
            console.log(msg);
        });
    }

    /**
     * audioCapture
     */
    public audioCapture() {
        let options: AudioPickerOptions = {
            android: {
                isCaptureMood: true,
                maxSize: 102400 // Maximum size of recorded file in bytes. 5900 = ~ 1 second
            },
            ios: {
                isCaptureMood: true,
                maxNumberFiles: 5,
                audioMaximumDuration: 10,
                hostView: this._hostView
            }
        };

        let mediafilepicker = new Mediafilepicker();
        mediafilepicker.openAudioPicker(options);

        mediafilepicker.on("getFiles", function (res) {
            let results = res.object.get('results');
            console.dir(results);
        });

        mediafilepicker.on("error", function (res) {
            let msg = res.object.get('msg');
            console.log(msg);
        });

        mediafilepicker.on("cancel", function (res) {
            let msg = res.object.get('msg');
            console.log(msg);
        });
    }
}
