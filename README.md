# Budget Tracker

Progressive Web Application (PWA) related challenge focusing mainly on improving page load performance and offline access for a budget tracker website.

## GitHub URL

https://github.com/ktrnthsnr/Budget-Tracker
https://ktrnthsnr.github.io/Budget-Tracker

## Heroku website



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
* Application is deployed to Heroku, serving the backend Moongoose\MongoDB through mLab add-on

## Technology

MongoDB, Express.js, Mongoose JS, Node.js, JavaScript, ES6, npm, Heroku, mLab, Compression,  Morgan

## Installations

- Prereq: install VSCode, Node.js, and MongoDB (see below for more info)
- After cloning the GitHub repo to your local drive, run the following in the VSCode command-line terminal
- Install all components listed within the package.json file for npm
- $ `npm i`
- For custom installations, start with initializing npm
- $ `npm init -y` or $ `npm install`
- Install npm express, more info https://www.npmjs.com/package/express
- $ `npm install express`
- Manaully update the package.json to  `"main": "server.js",` instead of index.js
- Create a .gitignore file in the root and add `node_modules` to this file
- If you need to re-add the dependencies, run $ `npm install`
- Install MongoDB, first create a `c:/data/db` directory on your root, then install the Community Server from https://www.mongodb.com/try/download/community, excluding the compass from the installation, and adding the /bin folder to the environment variable PATH.
- Install the MoongooseJS library
- $ `npm install mongoose`

## Usage

- If this applicatin is cloned from github, completed the installation `npm i`, then start up at the bash commandline, by typing
- $ `npm start`

## Testing

- Clone the repo to your local drive, install per above, then run within the bash terminal to  instantiate the Express server `npm start`, and create the models.  You can reset the PORT under server.js and the database name under server.js and idb.js.

## Userstory

AS AN avid traveler
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling 

## Contribution

ktrnthsnr

### ©️2020 ktrnthsnr
