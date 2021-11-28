const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

//const controller = require('./controller');
const {
  getBooks,
  deleteBook,
  createBook,
  updateBook,
} = require("./controller");




app.get(`/api/books`, getBooks);
app.delete(`/api/books/:id`, deleteBook);
app.post(`/api/books`, createBook);
app.put(`/api/books/:id`, updateBook)

const port = 5000;
app.listen(port, () => console.log(`We are up on PORT ${port}`));