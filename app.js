const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

// routes
const user_routes = require("./routes/user");
const artist_routes = require("./routes/artist");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// htpp config

// base routes
app.use("/", user_routes);
app.use("/", artist_routes);

module.exports = app;
