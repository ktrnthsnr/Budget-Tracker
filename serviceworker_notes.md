# service worker notes 

Steps completed to add the service worker

1. To test locally, I installed dev-server, an already HTTPS-enabled development server, (so the app can be viewed before deploying to prod, without instantiating a server such as Express.js or w/o adding HTTPS to the application).
`npm i webpack-dev-server -D`

2. updated package.json scripts
  "start:dev": "webpack-dev-server"

3. added script to the index.html

    <script>
        (function() {if("serviceWorker" in navigator) {
            navigator.serviceWorker.register("./service-worker.js")
            .then(() => console.log("Service Worker registered successfully."))
            .catch(error => console.log("Service Worker registration failed:", error));
        }})();
    </script>

4. created service-worker.js on the root. Added the code to install the service worker, including adding files to precache, and install\activate\fetch event listeners.

5. started the dev server with this command `npm run start:dev` 

6. browsed on localhost:8080 

7. checked if the files added in service-worker.js were cached: under browser Chrome DevTools > Application tab > Cache Storage


