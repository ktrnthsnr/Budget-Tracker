# Budget Tracker

Progressive Web Application (PWA) related challenge focusing on improving page load performance and offline access for a budget tracker website.

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

* Task focuses on allowing for mobile application offline functionality. A user will be able to add expenses and deposits to their budget with or without an internet connection. If a user were to start a transaction offline, the transaction would complete once back online.
* This application utilizes progressive web application (PWA) technology, allowing for offline functionality, to include 
    * Webpack and manifest which are bundles and JSON files that can installed on a mobile phone's homescreen without requiring an app store
    * IndexedDB and a service worker used to manage offline functionality and persistence
* The web application is deployed to and hosted on Heroku, serving the backend Moongoose\MongoDB through mLab add-on.

## Technology

MongoDB, Express.js, Mongoose JS, Node.js, JavaScript, ES6, npm, Heroku, mLab, Compression,  Morgan

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

- If this applicatin is cloned from github, and after completing the installation `npm i`, then start up at the bash commandline, by typing
- $ `npm start`

## Testing

- To run the webpack, type and run in the bash terminal `npm run build`
- In this project exercise, the mode under the webpack.config.js is set to Development mode not Production mode. (Production mode would Uglify and minimize files.)
- Clone the repo to your local drive, install per above, then run within the bash terminal to  instantiate the Express server `npm start`, and create the model.  You can reset the PORT under server.js and the database name under server.js and idb.js.

## Userstory

AS AN avid traveler
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling 

## Contribution

ktrnthsnr

### ©️2020 ktrnthsnr
