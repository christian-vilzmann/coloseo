require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const http = require('http');
const morgan = require('morgan');
const cors = require('cors');


// MongoDB Connection Config
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log('Connection successful!'))
    .catch((err) => console.error(`There was an error: ${err}`));


// Declare Application
const app = express();
const port = process.env.PORT || 5000;

// Apply Middleware to Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use(cors());

// Routes //
const projectsRouter = require('./routes/projects');
const usersRouter = require('./routes/users');

app.use('/projects', projectsRouter);
app.use('/users', usersRouter);

// Create HTTP Server
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});