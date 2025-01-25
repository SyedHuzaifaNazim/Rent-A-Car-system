// const express = require('express');
// const app = express();
// const http = require('http').createServer(app);
// const io = require('socket.io')(http);

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket) => {
//     console.log('a new client connected');
//     socket.on('disconnect', () => {
//         console.log('client disconnected');
//     });
//     socket.on('chat message', (msg) => {
//         console.log('message: ' + msg);
//         io.emit('chat message', msg);
//     });
// });

// http.listen(3000, (err) => {
//     if (err) {
//         console.error('Error starting server:', err);
//     } else {
//         console.log('listening on *:3000');
//     }
// });


const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const routes = require('./src/routes/index');

// import express from "express";
// import "dotenv/config";
// import mongoose from "mongoose";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import helmet from "helmet";

// import routes from "./src/routes/index.js";

const PORT = process.env.PORT || 9999;
const app = express();

// Middleware Setup
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));

// CORS Configuration
const corsOptions = {
  origin: 'https://rent-a-car-system.vercel.app/', // Replace with your frontend URL
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

app.use(cors(corsOptions));

// Cookie parser middleware
app.use(cookieParser());

// Database connection
mongoose.connect(process.env.DB_URL);

mongoose.connection.on("connected", () => {
  console.log("DB connected.");
});

// Test route to check if app is working
app.get("/", (req, res) => {
  try {
    res.send("App Working");
  } catch (err) {
    console.log(err);
  }
});

// API Routes
app.use("/api", routes);

// Start the server
app.listen(PORT, () => {
  console.log(`App running at PORT:${PORT}.`);
});
