const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require('helmet');

const app = express();

app.use(cors());
app.use(helmet());

app.use(bodyParser.json());

app.use("/", require("./src/routes"));


app.listen(3000, () => {
  console.log("Listening...");
});


//create 404 page
//add helmet (security)
//add compression
//add morgan (logging) 
//