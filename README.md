[![npm](https://img.shields.io/npm/v/nativescript-mediafilepicker.svg)](https://www.npmjs.com/package/nativescript-mediafilepicker)
[![npm](https://img.shields.io/npm/dt/nativescript-mediafilepicker.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-mediafilepicker)
[![npm](https://img.shields.io/npm/dm/nativescript-mediafilepicker.svg)](https://www.npmjs.com/package/nativescript-mediafilepicker)

# nativescript-mediafilepicker
A complete file picker solution for NativeScript. You will be able to pickup any types of file. Capturing image, video & audio are supported. It's a combination features of [nativescript-imagepicker](https://github.com/NativeScript/nativescript-imagepicker) and [nativescript-camera](https://github.com/NativeScript/nativescript-camera/) plugin with some extended features using following native libaries:

* Android: [MultiType-FilePicker](https://github.com/fishwjy/MultiType-FilePicker)
* iOS: [IQMediaPickerController](https://github.com/hackiftekhar/IQMediaPickerController) & [DKImagePickerController](https://github.com/zhangao0086/DKImagePickerController)

Old version (v1.X) can be found from [this branch](https://github.com/jibon57/nativescript-mediafilepicker/tree/v1)

**Features:**

* Image, Video, Audio & custom file picker.
* Capturing Image, Video and Audio from APP directly.
* Custom files like pdf, text etc support. For iOS I have used `UIDocumentPickerViewController`
* Single or Multiple selections.
* More...

**Limitations**
* Anything those exists in Native Library. You can check the native libaries.
* ~~In iOS after selecting file you may not be able to use it directly. In this case you will need to copy that file in your app directory. After using it you can delete it for reducing storage memory usage. Please check the demo for more details.~~ Only for iOS Audio picker.
* ~~At present selecting iCloud file isn't supported for iOS because of Native Library limitation.~~

**Note:** I am not an expert of neigher iOS nor Android. So, please contribute if you think something you can do better :)

## Installation

```javascript
tns plugin add nativescript-mediafilepicker
```

## Usage (Please check demo project for details)

**Import**

JavaScript:
```javascript
var mPicker = require("nativescript-mediafilepicker");
var mediafilepicker = new mPicker.Mediafilepicker();
```

TS:
```javascript
import { Mediafilepicker, ImagePickerOptions, VideoPickerOptions, AudioPickerOptions, FilePickerOptions } from 'nativescript-mediafilepicker';
```

**Image File Picker**
```javascript
let options: ImagePickerOptions = {
    android: {
        isCaptureMood: false, // if true then camera will open directly.
        isNeedCamera: true,
        maxNumberFiles: 10,
        isNeedFolderList: true
    }, ios: {
        isCaptureMood: false, // if true then camera will open directly.
        isNeedCamera: true,
        maxNumberFiles: 10
    }
};

let mediafilepicker = new Mediafilepicker();
mediafilepicker.openImagePicker(options);

mediafilepicker.on("getFiles", function (res) {
    let results = res.object.get('results');
    console.dir(results);
});

// for iOS iCloud downloading status
mediafilepicker.on("exportStatus", function (res) {
    let msg = res.object.get('msg');
    console.log(msg);
});

mediafilepicker.on("error", function (res) {
    let msg = res.object.get('msg');
    console.log(msg);
});

mediafilepicker.on("cancel", function (res) {
    let msg = res.object.get('msg');
    console.log(msg);
});
```

**Video File Picker**
```javascript
let allowedVideoQualities = [];

if (app.ios) {
    allowedVideoQualities = [AVCaptureSessionPreset1920x1080, AVCaptureSessionPresetHigh];  // get more from here: https://developer.apple.com/documentation/avfoundation/avcapturesessionpreset?language=objc
}

let options: VideoPickerOptions = {
    android: {
        isCaptureMood: false, // if true then camera will open directly.
        isNeedCamera: true,
        maxNumberFiles: 2,
        isNeedFolderList: true,
        maxDuration: 20,

    },
    ios: {
        isCaptureMood: false, // if true then camera will open directly.
        videoMaximumDuration: 10,
        allowedVideoQualities: allowedVideoQualities
    }
};

let mediafilepicker = new Mediafilepicker(); 
mediafilepicker.openVideoPicker(options);

mediafilepicker.on("getFiles", function (res) {
    let results = res.object.get('results');
    console.dir(results);
});

// for iOS iCloud downloading status
mediafilepicker.on("exportStatus", function (res) {
    let msg = res.object.get('msg');
    console.log(msg);
});

mediafilepicker.on("error", function (res) {
    let msg = res.object.get('msg');
    console.log(msg);
});

mediafilepicker.on("cancel", function (res) {
    let msg = res.object.get('msg');
    console.log(msg);
});
```

**Audio File Picker**
```javascript
let options: AudioPickerOptions = {
    android: {
        isCaptureMood: false, // if true then voice recorder will open directly.
        isNeedRecorder: true,
        maxNumberFiles: 2,
        isNeedFolderList: true,
        maxSize: 102400 // Maximum size of recorded file in bytes. 5900 = ~ 1 second
    },
    ios: {
        isCaptureMood: false, // if true then voice recorder will open directly.
        maxNumberFiles: 5,
        audioMaximumDuration: 10,
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
```

**Custom File Picker**
```javascript
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
        multipleSelection: true
    }
};

let mediafilepicker = new Mediafilepicker(); 
mediafilepicker.openFilePicker(options);

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
```

## All Methods

```javascript
openImagePicker(params: ImagePickerOptions): void;
openVideoPicker(params: VideoPickerOptions): void;
openAudioPicker(params: AudioPickerOptions): void;
openFilePicker(params: FilePickerOptions): void;

// iOS only
copyPHImageToAppDirectory(rawData: PHAsset, fileName: any): Promise<{}>;
copyPHVideoToAppDirectory(asset: AVURLAsset, fileName: any): Promise<{}>;
convertPHImageToUIImage(rawData: PHAsset): Promise<{}>;
copyUIImageToAppDirectory(image: UIImage, fileName: any): Promise<{}>;
copyMPMediaFileToAPPDirectory(mediaItem: MPMediaItem, filename: any): Promise<{}>;    
```

## All options
```javascript
export interface ImagePickerOptions {
    android?: {
        isCaptureMood?: boolean;
        isNeedCamera?: boolean;
        maxNumberFiles?: number;
        isNeedFolderList?: boolean;
    };
    ios?: {
        isCaptureMood?: boolean;
        isNeedCamera?: boolean;
        maxNumberFiles?: number;
        hostView?: View;
    };
}
export interface VideoPickerOptions {
    android?: {
        isCaptureMood?: boolean;
        isNeedCamera?: boolean;
        maxNumberFiles?: number;
        isNeedFolderList?: boolean;
        maxDuration?: number;
        videoQuality?: number;
    };
    ios?: {
        isCaptureMood?: boolean;
        maxNumberFiles?: number;
        videoMaximumDuration?: number;
        allowedVideoQualities?: Array<string>; // https://developer.apple.com/documentation/avfoundation/avcapturesessionpreset?language=objc
        hostView?: View;
    };
}
export interface AudioPickerOptions {
    android?: {
        isCaptureMood?: boolean;
        isNeedRecorder?: boolean;
        maxNumberFiles?: number;
        isNeedFolderList?: boolean;
        maxSize?: number;
    };
    ios?: {
        isCaptureMood?: boolean;
        maxNumberFiles?: number;
        audioMaximumDuration?: number;
        hostView?: View;
    };
}
export interface FilePickerOptions {
    android?: {
        extensions: Array<string>;
        maxNumberFiles?: number;
    };
    ios?: {
        extensions: Array<string>; // https://developer.apple.com/documentation/mobilecoreservices/uttype
        multipleSelection?: boolean;
        hostView?: View;
    };
}
```

## Screenshots

**Android**

![Android](/screenshots/android/picker.jpg)
![Android](/screenshots/android/pick_img1.gif)
![Android](/screenshots/android/pick_vid.png)
![Android](/screenshots/android/pick_aud.png)
![Android](/screenshots/android/pick_file.png)
![Android](/screenshots/android/pick_photo_folder.png)



**iOS**

![ios](/screenshots/ios/VideoCapture.png)
![ios](/screenshots/ios/PhotoCapture.png)
![ios](/screenshots/ios/AudioCapture.png)
![ios](/screenshots/ios/PhotoVideoPicker.png)
![ios](/screenshots/ios/AudioPicker.png)


## License

Apache License Version 2.0, January 2004
