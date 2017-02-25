// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  book.find((err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Books',
        books: books
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {
  res.render('books/details', {
    title: 'Add a new Book',
    books: ''
  })


});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {

  /*****************
   * ADD CODE HERE *
   *****************/

});

// GET the Book Details page in order to edit an existing Book
router.get('/:id', (req, res, next) => {
  //get a reference to the id of the book to edit
  let id = req.params.id;

  // find the book to edit by it's id  in the books collection
  book.findById(id, (err, books) => {

    if (err) {
      console.error(err);
      res.end(error);
    }
    else {
      //show the edit view
      res.render('books/details', {
        title: 'Books Details',
        books:books
      });
    }
  });

});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

  /*****************
   * ADD CODE HERE *
   *****************/

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

  // get a reference to the id of the book to edit
    let id = req.params.id;

    book.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/books');
        }
    });

});


module.exports = router;
