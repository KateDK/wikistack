//libraries
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const { db } = require('./models');

//local files
const routes = require('./routes/index.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

// db.authenticate().then(() => {
//   console.log('connected to the database');
// });

app.use('/', routes.router); //need to specify routes.router because in /views/index.js we are exporting an objectr and need to specify which key in the object to call

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App listening in port: ${PORT}`);
});

module.exports = app;
