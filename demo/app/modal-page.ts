import { Page, View } from '@nativescript/core';
import { HelloWorldModel } from "./main-view-model";
let closeCallback;

export function onShownModally(args) {
    const context = args.context;
    closeCallback = args.closeCallback;
    args.object.bindingContext = new HelloWorldModel(args.object as View);
}

export function onCloseButtonTap(args) {
    const page: Page = <Page>args.object.page;
    closeCallback();
}
