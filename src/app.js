const express = require("express");
const morgan = require("morgan");
const indexRoutes = require("./routes/index.routes");
const cors = require("cors");


const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(indexRoutes);

module.exports = app;