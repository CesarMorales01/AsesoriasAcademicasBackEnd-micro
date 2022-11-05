const express = require("express");
const {  mongoConn } = require('./db/MongoConection');
const cors = require('cors');
require("dotenv").config()

const proyectoRoute = require("./routes/Proyecto");

// settings
const app = express();
app.use(cors());
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());

app.use('/api/proyecto', proyectoRoute);

// mongodb connection
const conn = mongoConn();

  // server listening
app.listen(port, () => console.log("Server listening to!!!", port));