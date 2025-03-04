const http = require('http');
const fs = require('fs');
const events = require('events');
const eventEmitter = new events.EventEmitter();
const formidable = require('formidable');
const express = require ('express');
const app =  express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongoose = require('mongoose');



// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));