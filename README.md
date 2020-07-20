# Budget Tracker

Mobile web application for tracking budget deposits and expenses both online and offline, with focus on config to manage NoSQL storage for transactional information if temporarily offline, and improving page load performance through auditing and bundling.

## GitHub URL

* https://github.com/ktrnthsnr/Budget-Tracker

## Heroku website

* https://ktrnthsnr-budget-tracker.herokuapp.com/

## Table of Contents

* [Description](#description)
* [Technology](#technology)
* [Installations](#installations)
* [Usage](#usage)
* [Testing](#testing)
* [Userstory](#Userstory)
* [Contribution](#contribution)

## Description

* This project focuses on allowing for mobile application offline functionality. In this application, a user will be able to add expenses and deposits to their budget with or without an internet connection. If a user were to start a transaction offline, the transaction would complete once back online.

* This application utilizes progressive web application (PWA) technology, allowing for mobile offline functionality, to include 
    * Included webpack modules to bundle js files for quicker page load response
    * Used Web API IndexedDB, a NoSQL client-side storage API based in the browser, and
    * Added a service worker to leverage browser-based storage and manage offline access and functionality by caching assets
    * Added a manifest JSON file so that the application can installed on a user's mobile phone's homescreen without requiring download from an app store
* The web application is deployed to and hosted on Heroku, serving the backend Moongoose\MongoDB through an mLab add-on.

## Technology

MongoDB, Express.js, Mongoose JS, Node.js, JavaScript, ES6, npm, Heroku, mLab, Compression,  Morgan, Webpack, Webpack CLI, Compression, Morgan

## Installations

- Prereq: install VSCode, Node.js, and MongoDB (see below for more info)

- After cloning the GitHub repo to your local drive, run the following in the VSCode command-line terminal
- Install all components listed within the package.json file for npm
    - $ `npm i`

- Otherwise, for custom individual component installations, start by initializing npm and creating a new package.json
    - $ `npm init --y` or $ `npm install`
    - Create a .gitignore file in the root and add `node_modules` to this file
    - If you need to re-add any of the dependencies, run $ `npm install`

- For backend server, database and middleware installations:
    - Install npm express, more info https://www.npmjs.com/package/express
    - $ `npm install express`
    - Manaully update the package.json to  `"main": "server.js",` instead of index.js
    - Install `MongoDB`, by first creating a `c:/data/db` directory on your root, then install the Community Server from https://www.mongodb.com/try/download/community, excluding the compass from the installation, and adding the /bin folder to the environment variable PATH.
    - Install the MongooseJS library
    - $ `npm install mongoose`

- For webpack, jQuery, and bootstrap installations:
    - Install webpack and webpack CLI
    - $ `npm i -D webpack webpack-cli`
    - Check webpack is installed, checking for the version
    - $ `webpack -v`
    - If you received this error, `webpack: command not found` resolve by running this
    - $ `npm run webpack -v`
    - Install the jQuery package
    - $ `npm i jQuery`
    - Install bootstrap
    - $ `npm i bootstrap`
    - Install popper.js
    - $ `npm i popper.js`
    - Install the webpack-bundle-analyzer
    - $ `npm install -D webpack-bundle-analyzer`

## Usage

- The website for the Budget Tracker application has been deployed as a Heroku website app,
https://ktrnthsnr-budget-tracker.herokuapp.com/
- To view the site locally, right click on the `index.html` and view the site on your browser.

## Testing

- To create a `bundle.js` file with webpack
    - First run `npm i -D webpack webpack-cli` in your command line to install the webpack modules.
    - Then run in the bash terminal `npm run build`
    - Note, in this project exercise, the mode under the webpack.config.js is set to Development mode not Production mode. (Production mode would Uglify and minimize files.)
- To register a Service Worker, run the following
    - $ `npm run seed`
    - $ `npm start`
    - Open a browser http://localhost:3001 in Chrome and open DevTools or F12.  Within the Application tab, click Service Workers on the left menu to search for your service worker file.

## Userstory

AS AN avid traveler
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling 

## Contribution

ktrnthsnr

### ©️2020 ktrnthsnr
