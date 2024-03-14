const html = require("express").Router();

// Import our files containing our routes
const htmlrouter = require("../public/index.html");

router.use("/", htmlrouter);

module.exports = html;