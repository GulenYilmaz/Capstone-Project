require('dotenv').config();

const express = require("express");
const app = express();


app.use(express.static("client"));


const shoppingListItems = [
        "rugs",
		"towels",
		"basket",
        "curtains",
        "dinner table and chairs",
  ];



//GET comliment 
app.get("/api/shoppingListItems", (req, res) => {

// choose random compliment
let randomIndex = Math.floor(Math.random() * shoppingListItems.length);
let randomShoppingListItems = shoppingListItems[randomIndex];

  res.status(200).send(randomShoppingListItems);
})






const port =process.env.PORT || process.env.SERVER_PORT;


app.listen(port, ()=> console.log(`your server running on port : ${port}`));