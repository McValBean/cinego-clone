const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/cinegoDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

// Define a simple schema and model
const thumbnailSchema = new mongoose.Schema({
    picture: String, // Use 'String' for image URLs or file paths
    type: String,    // Use 'String' for text
    year: Number,    // Use 'Number' for numeric values
});

const contentThumbnail = mongoose.model('contentThumbnail', thumbnailSchema);

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the MongoDB Node.js Server!');
});

// Create a new content thumbnail
app.post('/contentThumbnails', async (req, res) => {
    try {
        const newContentThumbnail = new contentThumbnail(req.body); // Renamed variable
        await newContentThumbnail.save();
        res.status(201).send(newContentThumbnail);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Get all content thumbnails
app.get('/contentThumbnails', async (req, res) => {
    try {
        const contentThumbnails = await contentThumbnail.find(); // Use the model
        res.send(contentThumbnails);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});