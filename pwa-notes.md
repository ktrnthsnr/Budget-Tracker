Added to convert the app to a mobile PWA:

1. Installed within the bash terminal,  
    $ `npm i -D webpack-pwa-manifest`

2. Updated the webpack.config.js with plugin property info, and import the webpack manifest module
    `const WebpackPwaManifest = require("webpack-pwa-manifest");`
    
    (see the webpack.config.js for the property script)

3. Run the webpack to create the manifest.json
    $ `npm run build`

4. To link the manifest, added to the index.html the following:
    <link rel="manifest" href="<webpack.config output location>/manifest.json">

5. View the website through the webpack-dev-server
    - To view the application on the development server, run on your bash terminal 
    - $ `npm run start:dev`
    - Then open your browser at `http://localhost:8080`

6. Install the mobile app on your device screen (simulate this on your desktop)
    - On your Chrome browser, select the + plus sign on the top right of the address bar, follow instructions to install the PWA.