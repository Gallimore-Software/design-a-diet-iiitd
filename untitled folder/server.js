const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const port = 8000;
app.listen(port, () => {  console.log('We are live on ' + port);});

const noteRoutes = require('./note_routes');
module.exports = function(app, db) {  noteRoutes(app, db);  // Other route groups could go here, in the future};