const express = require('express');
const todoRouter = require('./routes/todoRoutes');
const router = express.Router()

router.use('/todos', todoRouter)

module.exports =  router;

// Design
// MVC
// Model ------> Data layer -----> It helps us interact with the data
// View --------> Presentation layer ------> It presents user with the UI
// Controller -------> Business layer -------> It binds view with Model

// Structural Pattern

// Token based Authentication
// What is authentication ? 
// Authentication -> Verification if the personall is really who they says is not.
// Login system
// we check for username and password
// HTTP protocol is stateless remember, 
// each request is their own
// Session based Authentication
// Server creates a session
// Session GLOBAL variable -> id
// When server sends the HTML response to the client 
// They set a http only cookie with that id.

// Token Based Authentication (Stateless)
// Instead of creating a global session we send client a token in response
// The client needs to send this token in every request
// The token is signed by the server with a secret key
// The token has a time limit and must be exchanged with the server when the
// Time limit is over

//JWT 

