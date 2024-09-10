// Import necessary modules here
const express = require("express");
const router = express.Router();

// Import controllers
const { getAPI, getParameterAPI, postAPI } = require("../controllers/message");

// Define routers
router.get("/get", getAPI);
router.get("/get/:parameter", getParameterAPI);
router.post("/post", postAPI);

// Export the router to use it in index.js
module.exports = router;