[![npm](https://img.shields.io/npm/v/nativescript-mediafilepicker.svg)](https://www.npmjs.com/package/nativescript-mediafilepicker)
[![npm](https://img.shields.io/npm/dt/nativescript-mediafilepicker.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-mediafilepicker)

# nativescript-mediafilepicker
This plugin will allow user to pick video & image files from their device. User can also use their camera to take picture from this plugin directly. It's a combination features of [nativescript-imagepicker](https://github.com/NativeScript/nativescript-imagepicker) and [nativescript-camera](https://github.com/NativeScript/nativescript-camera/) plugin with some extended features using following libaries:

* Android: [MultiType-FilePicker](https://github.com/fishwjy/MultiType-FilePicker)
* iOS: [IQMediaPickerController](https://github.com/hackiftekhar/IQMediaPickerController)



**Features:**

* Image, Video and Audio file picker.
* Capturing Image, Video and Audio from APP directly.
* Single or Multiple selections.
* More...

## Installation

```javascript
tns plugin add nativescript-mediafilepicker
```

## Usage (Please check demo project for details)

```javascript
import { Mediafilepicker, ImagePickerOptions, VideoPickerOptions, AudioPickerOptions, FilePickerOptions } from 'nativescript-mediafilepicker';

private mediafilepicker: Mediafilepicker;

let options: ImagePickerOptions = {
    android: {
        isNeedCamera: true,
        maxNumberFiles: 10,
        isNeedFolderList: true
    }
}
this.mediafilepicker.openImagePicker(options);

this.mediafilepicker.on("getFiles", function (res) {
    let results = res.object.get('results');

    if (results) {

        for (let i = 0; i < results.length; i++) {

            let result = results[i];
            console.log(result.file);

        }
    }
})

this.mediafilepicker.on("error", function (res) {
    let msg = res.object.get('msg');
    console.log(msg);
})
```

## All options

```javascript
openImagePicker(params: ImagePickerOptions): void;
openVideoPicker(params: VideoPickerOptions): void;
openAudioPicker(params: AudioPickerOptions): void;
openFilePicker(params: FilePickerOptions): void;
```


## Screenshots


## License

Apache License Version 2.0, January 2004
