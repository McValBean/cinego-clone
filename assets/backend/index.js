const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

app.get("/", (req, res) => {
    res.send("this is the root route, welcome to th root of the server");
    
})
// connect to mongoDb database


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
console.log("hi there you stupid motherfuckers");

