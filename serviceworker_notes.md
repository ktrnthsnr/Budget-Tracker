# service worker notes

Description: Service worker allows for offline functionality.

Note: no webpack is required to add a service worker.

1. installed dev-server, an HTTPS-enabled development server 
`npm i webpack-dev-server -D`

2. updated package.json scripts
  "start:dev": "webpack-dev-server"

3. added script to index.html

		<script>
(function() {
  if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js")
      .then(() => console.log("Service Worker registered successfully."))
      .catch(error => console.log("Service Worker registration failed:", error));
  }
})();
</script>

4. create a service-worker.js file on root

5. 


