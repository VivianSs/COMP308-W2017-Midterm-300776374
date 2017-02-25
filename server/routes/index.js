// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// define the game model
let book = require('../models/books');

// define the user model
let UserModel = require('../models/users');
let User = UserModel.User;// alias for User

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});



module.exports = router;
