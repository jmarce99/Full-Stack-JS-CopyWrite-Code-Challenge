const router = require("express").Router();
const express = require("express");
router.use(express.json());

// Import all routes
// Example: const authRouter = require("./authRouter.js");
const iecho = require("./iecho.js");

// Configure the routers
// Example: router.use("/auth", authRouter);
router.use("/iecho", iecho);

module.exports = router;