/*
File Name: books.js
Author Name: Sisi Li
Student ID: 300776374
Web App Name: COMP308-W2017-Midterm-300776374
*/

let mongoose = require('mongoose');

// create a model class
let gamesSchema = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('books', gamesSchema);
