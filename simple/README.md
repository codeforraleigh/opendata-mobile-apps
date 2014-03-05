# Simple Open Data Mobile App
Sample App for educationall purposes 

- Uses [JQuery](http://jquery.com)
- Fetch data and insert results into dom as unorder list

## Installing

### Clone Project

    git clone git-url
    cd opendata-mobile-apps/simple
    
### Install [Apache Cordova](http://cordova.apache.org)

    sudo npm install -g cordova
    
## Running App

### Run App on Browser

    open index.html with your Browser

### Run App on Mobile Emulator or Device

Use [Cordova CLI](https://www.npmjs.org/package/cordova):

Use Mobile Platforms:

    cordova platform add ios
    cordova platform add android
    
Use Emulator:

    cordova emulate ios
    cordova emulate android

Use Device:

    cordova run ios
    cordova run android

## About the code

### www/index.html
Basic html elements
### www/opendata.js
Do ajax against SODA API and injects result items into <ul>

