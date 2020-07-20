// IndexedDB related  (note: add this script file reference to index.html)

// variable will store the db object when connected
let db;
// request variable as the event listener, will connect to the IndexedDB db 'budget', to version 1
const request = indexedDB.open('budget', 1);

// ------ event listeners

// event only starts if db ver changes (from no db to version 1, v1, v2 etc)
request.onupgradeneeded = function(event) {
    // ref to the db
    const db = event.target.result;
    // creates IndexedDB Object Store (or table) named `new_budget`, will auto-increment on primary key
    db.createObjectStore('new_budget', { autoIncrement: true });
  };

request.onsuccess = function(event) {
    // when db is created with its Object Store (from onupgradedneeded event above)
        // or established a connection, save ref to database in global var
    db = event.target.result;
  
    // check if app is online, 
        //if yes, run uploadBudget() to send all local database data to the API
    if (navigator.onLine) {
      
      uploadBudget();
    }
  };
  
  request.onerror = function(event) {
    // log error here
    console.log(event.target.errorCode);
  };

  // ------ functions, when offline

  // function executed when submitting new budget with no persistent internet 
function saveRecord(record) {
    // open a new transaction within db with read and write perms 
    const transaction = db.transaction(['new_budget'], 'readwrite');
  
    // accesses the object store for new_budget
    const budgetObjectStore = transaction.objectStore('new_budget');
  
    // adds a record to the store with an add method
    budgetObjectStore.add(record);
  }

  function uploadBudget() {
    // open a transaction on your db
    const transaction = db.transaction(['new_budget'], 'readwrite');
  
    // access your object store
    const budgetObjectStore = transaction.objectStore('new_budget');
  
    // get all records from store and set to a variable
    const getAll = budgetObjectStore.getAll();

    // upon a successful .getAll() execution, run this function
getAll.onsuccess = function() {
    // if there was data in indexedDb's store, let's send it to the api server
    if (getAll.result.length > 0) {
      // fetch('/api/budgets', {
        fetch('/api/transaction', {
        method: 'POST',
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(serverResponse => {
          if (serverResponse.message) {
            throw new Error(serverResponse);
          }
          // open one more transaction
          const transaction = db.transaction(['new_budget'], 'readwrite');
          // access the new_budget object store
          const budgetObjectStore = transaction.objectStore('new_budget');
          // clear all items in your store
          budgetObjectStore.clear();

          alert('Transaction data has been submitted!');
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

}

  // event listener for when app coming back online
window.addEventListener('online', uploadBudget);