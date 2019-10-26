const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api.js');
const app = express();
const PORT = 8080;

const MongoClient = require('mongodb').MongoClient;
const URL = process.env.DB;
const dbName = 'fcc_jtodd';
const client = new MongoClient(URL, { useUnifiedTopology: true, useNewUrlParser: true });

//app.use(helmet.noCache());
//app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }))
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

client.connect(err => {
  if (err) console.log('Db connection error');
  
  //fccTestingRoutes(app); //for fcc testing purposes
  apiRoutes(app, client.db(dbName));
  
  app.listen(PORT, () => {
    console.log('Server up @ port: ', PORT);
    /*
    if (process.env.NODE_ENV === 'test') {
      console.log('Running Tests...');
      setTimeout(() => {
        try {
          runner.run();
        } catch(err) {
            console.log('Tests are not valid:');
            console.log(err);
        }
      }, 1500);
    }*/
  });
});

//module.exports = app; //for unit/functional testing