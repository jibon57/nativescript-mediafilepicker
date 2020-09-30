import { HelloWorldModel } from './main-view-model';
import { View, EventData, Page } from '@nativescript/core';

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: EventData) {
    // Get the event sender
    let page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
}
