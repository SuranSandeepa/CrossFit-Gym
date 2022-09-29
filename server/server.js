const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
require("dotenv").config(); //read .env file


const members = require("./routes/members"); //members routes added
const user = require("./routes/user"); //login
const store = require("./routes/store"); //store

const app = express(); //invoke express

const PORT = process.env.PORT || 8070; //PORT, that use connect to the serever

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json()); //use body-parser to convert jason to javascript object


app.use("/members", members); //member path added
app.use("/user", user); //login
app.use("/store", store); //store

app.listen(PORT, () => {
  //Listen to the PORT
  console.log(`Server is up & running on port : ${PORT}`);
});
