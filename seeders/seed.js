// import Mongoose JS middleware to work with MongoDB
const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/imageperformance',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const imageSeed = [
  {
    description: 'Monetary Icons 1',
    image: '/icons/images/icon-72x72.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Monetary Icons2',
    image: '/icons/images/icon-96x96.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Monetary Icons3',
    image: '/icons/images/icon-128x128.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Monetary Icons4',
    image: '/icons/images/icon-144x144.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Monetary Icons5',
    image: '/icons/images/icon-152x152.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Monetary Icons6',
    image: '/icons/images/icon-192x192.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Monetary Icons7',
    image: '/icons/images/icon-384x384.jpg',
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: 'Monetary Icons8',
    image: '/icons/images/icon-512x512.jpg',
    rating: 0,
    date: new Date(Date.now())
  }  
];

db.Image.deleteMany({})
  .then(() => db.Image.collection.insertMany(imageSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
