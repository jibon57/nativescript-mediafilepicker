var Mediafilepicker = require("nativescript-mediafilepicker").Mediafilepicker;
var mediafilepicker = new Mediafilepicker();

describe("greet function", function() {
    it("exists", function() {
        expect(mediafilepicker.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(mediafilepicker.greet()).toEqual("Hello, NS");
    });
});