const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index.js");

// Express app
const server = express();
server.name = "API";

// Middleware's
server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/", routes);

// Error handling endware
server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.log("ERROR : ", err);
    res.status(status.send(message));
});

module.exports = server;