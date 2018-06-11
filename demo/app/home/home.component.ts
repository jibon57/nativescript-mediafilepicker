import { Component, OnInit } from "@angular/core";
import { Mediafilepicker, MediaFilepickerOptions } from 'nativescript-mediafilepicker';
import * as fs from "file-system"
import * as app from 'application';
declare var android;

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    private mediafilepicker: Mediafilepicker;

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
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
                allowsMultipleSelection: false,
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
            } else {
                console.log("There was some problem to select the file. Looks like user has cancel it.")
            }

        })
        this.mediafilepicker.startFilePicker(options);
    }
}
