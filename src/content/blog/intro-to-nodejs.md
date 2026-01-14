---
title: 'Introduction to Node.js'
description: 'Build server-side applications with Node.js and understand its event-driven architecture.'
slug: 'intro-to-nodejs'
pubDate: 'Jan 10 2025'
heroImage: '../../assets/blog-placeholder-1.jpg'
collection: 'developing-backend-services'
---

Node.js allows you to run JavaScript on the server side. Let's explore how to get started.

## What is Node.js?

Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows developers to use JavaScript for server-side development.

## Installation

Download and install Node.js from nodejs.org. This will also install npm, the Node.js package manager.

## Your First Node Application

Create a simple server:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

## NPM Packages

NPM provides access to millions of reusable packages. Install packages using:

```bash
npm install express
npm install --save-dev nodemon
```

## Express Framework

Express is a popular web framework for Node.js that simplifies server creation:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(3000);
```

## Event-Driven Architecture

Node.js uses an event-driven, non-blocking I/O model, making it efficient for I/O-heavy operations.

Node.js opens up a world of possibilities for backend development with JavaScript.
