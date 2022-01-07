const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

//any endpoint will serve the index file
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../client/index.html')))
app.use(express.static('client'));

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

const PORT = 5000;
app.listen(PORT, () => console.log(`We are up on PORT ${PORT}`));