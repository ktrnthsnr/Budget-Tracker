# IndexedDB setup

Adding offline persistance with NoSQL MongoDB\Mongoose JS, browser-based storage.

* Steps for adding an IndexedDB Object Store in the browser to cache files if a user loses internet connection:

1. create IndexedDB connection in the public/js add a idb.js, add event listeners

2. add the script src link to the public/index.html

3. Test by viewing locally, localhost:3001 and setting the site offline, in Chrome DevTools > Network, and view the IndexedDB within the Application tab. You should be able to update the budget app with deposits and withdrawals without issue. When back online, the app will update.

4. If you refresh the browser, the IndexedDB will clear.  To resolve this, add service worker and PWA.

