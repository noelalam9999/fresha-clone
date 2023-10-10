"use strict";
const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("Hello ji World!");
});
app.listen(3000, () => {
    console.log(`Server is running at http://localhost:3000`);
});
