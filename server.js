const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/budget";

const app = express();

app.use(logger("dev"));
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// routes
app.use(require("./routes/apiRoutes.js"));
// require('./routes/apiRoutes')(app);
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/imageperformance',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});