const books = require('./db.json');
let globalId = 11;




module.exports = {
  
  
    // getBooks 
  getBooks: (req, res) => {
    res.status(200).send(books);
  },




  // deleteBook
  deleteBook: (req, res) => {
    let bookIndex = books.findIndex((book) => book.id === parseInt(req.params.id));
    books.splice(bookIndex, 1);
    res.status(200).send(books);
  },
  
  
  
  //  createBook 
  createBook: (req, res) => {
    let { title, rating, imageURL } = req.body;
    
    let newBook = {
      id: globalId,
      title: title,
      rating: rating,
      imageURL: imageURL
    };

    books.push(newBook);
    res.status(200).send(books)
    globalId++
  },
  



  

  //  updateBook  
  updateBook: (req, res) => {
    let requestId = req.params.id;
    let bookIndex = books.findIndex((book) => book.id === parseInt(req.params.id))
    
    if (req.body.type === "plus") {
        books[bookIndex].rating++
    } else if (req.body.type === "minus") {
        books[bookIndex].rating--
    }
    res.status(200).send(books);
  }
};
