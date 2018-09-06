import { Observable } from 'tns-core-modules/data/observable';
import { Mediafilepicker, ImagePickerOptions, VideoPickerOptions, AudioPickerOptions, FilePickerOptions } from 'nativescript-mediafilepicker';

export class HelloWorldModel extends Observable {
  private mediafilepicker: Mediafilepicker;

  constructor() {
    super();
    this.mediafilepicker = new Mediafilepicker();
  }

  /**
   * openImagePicker
   */
  public openImagePicker() {

    let options: ImagePickerOptions = {
      android: {
        isNeedCamera: true,
        maxNumberFiles: 10,
        isNeedFolderList: true
      }
    };
    this.mediafilepicker.openImagePicker(options);

    this.mediafilepicker.on("getFiles", function (res) {
      let results = res.object.get('results');

      if (results) {

        for (let i = 0; i < results.length; i++) {

          let result = results[i];
          console.log(result.file);

        }
      }
    });

    this.mediafilepicker.on("error", function (res) {
      let msg = res.object.get('msg');
      console.log(msg);
    });
  }

  /**
   * openVideoPicker
   */
  public openVideoPicker() {

    let options: VideoPickerOptions = {
      android: {
        isNeedCamera: true,
        maxNumberFiles: 2,
        isNeedFolderList: true
      }
    };
    this.mediafilepicker.openVideoPicker(options);

    this.mediafilepicker.on("getFiles", function (res) {

      let results = res.object.get('results');

      if (results) {

        for (let i = 0; i < results.length; i++) {

          let result = results[i];
          console.log(result.file);

        }
      }

    });
  }

  /**
   * audio
   */
  public openAudioPicker() {

    let options: AudioPickerOptions = {
      android: {
        isNeedRecorder: true,
        maxNumberFiles: 2,
        isNeedFolderList: true
      }
    };
    this.mediafilepicker.openAudioPicker(options);

    this.mediafilepicker.on("getFiles", function (res) {

      let results = res.object.get('results');

      if (results) {

        for (let i = 0; i < results.length; i++) {

          let result = results[i];
          console.log(result.file);

        }
      }

    });
  }

  /**
   * openCustomFiles
   */
  public openCustomFilesPicker() {
    let options: FilePickerOptions = {
      android: {
        extensions: ['txt', 'pdf'],
        maxNumberFiles: 2
      }
    };

    this.mediafilepicker.openFilePicker(options);

    this.mediafilepicker.on("getFiles", function (res) {

      let results = res.object.get('results');

      if (results) {

        for (let i = 0; i < results.length; i++) {

          let result = results[i];
          console.log(result.file);

        }
      }

    });
  }
}
