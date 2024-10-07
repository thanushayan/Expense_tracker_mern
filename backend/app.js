const express = require('express');
const cors = require('cors');
const db = require('./db/db');
const { readdirSync } = require('fs'); // Destructure 'readdirSync'
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000; // Default to 5000 if PORT is not defined

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
readdirSync('./routes').map((route) => {
    app.use('/api/v1', require('./routes/' + route)); // Use 'route' here
});

// Server
const server = () => {
    db();
    app.listen(PORT, () => {
        console.log('Listening to port:', PORT);
    });
}

server();
