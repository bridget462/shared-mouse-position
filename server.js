console.log("my server is running baby!");
const express = require("express");

const app = express();
const server = app.listen(3000);

// host every file in public folder
app.use(express.static("./public"));
