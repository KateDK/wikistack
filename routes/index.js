const express = require('express');
const router = express.Router();
const views = require('../views/index.js');

router.get('/', (req, res, next) => {
  // try {
  //res.send(layout(' '));
  res.send(views.main());
  // } catch (error) {
  //next(error);
  // }
});

module.exports = { router }; //exported object that has a property router which is the key and the value, so when call routes.router we are accessing the value at the router key which is the intance of the express router
