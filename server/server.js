const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path');
const mongoose = require('mongoose');

const userapi = require('./routes/userapi');
const port = 5000;

const app = express();
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json()); 

app.use('/api', userapi);

const db = 'mongodb+srv://amit230:Ajay230@database-rglvf.mongodb.net/test?retryWrites=true&w=majority';  //Amit

// const db = "mongodb://localhost:27017/pizza-ordering-app";
mongoose.Promise = global.Promise;

//Connect to DB
mongoose.connect(
    db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    },
    () => {
      console.log("Database is connected");
    }
  );

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});