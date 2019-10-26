/*
const getBooks = require('../controllers/getBooks');
const getBook = require('../controllers/getBook');
const postBook = require('../controllers/postBook');
const postComment = require('../controllers/postComment');
const deleteBook = require('../controllers/deleteBook');
const deleteLibrary = require('../controllers/deleteLibrary');
const updateComment = require('../controllers/updateComment');
*/

module.exports = (app, db) => {
  const Books = db.collection('books');  
  
  app.get("/", (req, res) => res.sendFile(__dirname + '/public/index.html'));
  /*
  app.route('/api/books')
    .get((req, res) => getBooks(res, Books))
    .post((req, res) => postBook(req.body.title, res, Books))
    .delete((req, res) => deleteLibrary(res, Books));
  
  app.route('/api/books/:_id')
    .get((req, res) => getBook(req.params._id, res, Books))
    .post((req, res) => postComment(req.params._id, req.body.comment, res, Books))
    .put((req, res) => updateComment(req.params._id, req.body.comments, res, Books))
    .delete((req, res) => deleteBook(req.params._id, res, Books));
  */ 
  app.use((req, res) => res.status(404).send('Not Found'));
};