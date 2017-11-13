import { Observable } from 'tns-core-modules/data/observable';
import { Mediafilepicker, MediaFilepickerOptions } from 'nativescript-mediafilepicker';
import * as fs from "tns-core-modules/file-system/file-system"
import * as app from 'tns-core-modules/application/application';
declare var android;

export class HelloWorldModel extends Observable {
  public message: string;
  private mediafilepicker: Mediafilepicker;

  constructor() {
    super();

  }

  public openFile() {
    let options: MediaFilepickerOptions = {
      android: {
        mxcount: 2,
        enableImagePicker: true,
        enableVideoPicker: true,
        enableCameraSupport: true,
      },
      ios: {
        allowsMultipleSelection: true,
        title: "Album",
        showCameraButton: true,
      }
    };
    this.mediafilepicker = new Mediafilepicker();
    this.mediafilepicker.on("getFiles", function (res: any) {
 
      let files = res.files;

      if (files.length > 0) {

        files = files.split(",");

        files.forEach(file => {

          let fileName = file.replace(/^.*[\/]/, '');

          console.log(file);
          console.log(fileName);

          // you can do anything here


          if (app.ios) {

            let folder = fs.knownFolders.documents();
            let file = folder.getFolder("filepicker").getFile(fileName);

            if (fs.File.exists(file.path)) {
              folder.getFile("filepicker/" + fileName).remove()
            } else {
              console.log("not found")
            }
          }
        });
      }else{
        console.log("There was some problem to select the file. Looks like user has cancel it.")
      }

    })
    this.mediafilepicker.startFilePicker(options);
  }
}
