# Node.js API Cheatsheet

A quick reference guide for building APIs with Node.js using Express.

## Table of Contents
1. [Setting Up a Basic Node.js Server](#1-setting-up-a-basic-nodejs-server)
2. [Basic Routing](#2-basic-routing)
3. [Handling JSON and URL-Encoded Data](#3-handling-json-and-url-encoded-data)
4. [Query Parameters and Route Parameters](#4-query-parameters-and-route-parameters)
5. [Handling Errors](#5-handling-errors)
6. [Middleware](#6-middleware)
7. [Connecting to a Database (MongoDB)](#7-connecting-to-a-database-mongodb)
8. [Environment Variables](#8-environment-variables)
9. [CORS Setup](#9-cors-setup)
10. [Authentication with JWT](#10-authentication-with-jwt)

## 1. Setting Up a Basic Node.js Server

```javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```


## 2. Basic Routing

```javascript
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/api/data', (req, res) => {
  res.send('Data received');
});

```

## 3. Handling JSON and URL-Encoded Data

```javascript
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies
```

## 4. Query Parameters and Route Parameters

**Query Parameters**
```javascript
app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(`Search query: ${query}`);
});
```

**Route Parameters**
```javascript
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});
```

## 5. Handling Errors

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
```

## 6. Middleware

```javascript
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger);
```

## 7. Connecting to a Database (MongoDB)

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://Your MongoDB URI', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});
```

## 8. Environment Variables

```javascript
require('dotenv').config();

const dbUri = process.env.DB_URI;
```

## 9. CORS Setup

```javascript
const cors = require('cors');

app.use(cors({
  origin: 'http://example.com', // Replace with your client's URL
  methods: ['GET', 'POST'],
}));
```

## 10. Authentication with JWT

```javascript
const jwt = require('jsonwebtoken');

// Generate Token
const token = jwt.sign({ userId: 123 }, 'secretKey', { expiresIn: '1h' });

// Middleware to Verify Token
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  jwt.verify(token, 'secretKey', (err, decoded) => {
    if (err) return res.status(401).send('Access Denied');
    req.user = decoded;
    next();
  });
};

app.get('/protected', verifyToken, (req, res) => {
  res.send('This is a protected route');
});
```