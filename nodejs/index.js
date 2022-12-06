// console.log("Hello from node")

// const myArray = [1,2,3,4]

// myArray.map((a) => console.log(a) )

// console.log(this)

// console.log(process)

// Node js 
// Why are we studying node js ?

// Node js helps run javascript outside of browser environment
// We don't need Browser to execute js code
// With node run time we can run js code in a secure server environment 
// Server Programming

// Server
// Protocol
// http || https
// port room no localhost:3000 localhost:8000
// Node js Single Threaded, Async, Non blocking
// Node js realtime
// Realtime -> req -> response // server close  // php
// listen 
// cronjob 
// Request, Response
// Request, response cycle 
// client sends in a request to server
// type of request is generally http 
// http request verb 
// get, post 
// server takes the request process it and sends back the response

const http = require('http');

const requestListner = (req,res) => {
    
    const url = req.url
    const path = url.split('/')[1]
    console.log(path)
    if(path === 'todos'){
        res.write(
            `[
                {title : "Todo 1"},
                {title : 'Todo 2'}
            ]`
        )
        res.end()
        return;
    }

    if (path === 'user'){
        
    }

     res.write("Hello world")
     res.end()
}

http.createServer(requestListner).listen(8000)


 // Database
 // What is database MongoDb -> Mongo Database
 // Database : store
 // data store
 // 2 major databases
 // SQL vs NoSQL
 // SQL are usually Relational Databases
 // The database which have relations between the data
 // NoSQL 1) We cannot use SQL queries
 // 2) they are not usually relational in nature
 // Each data is by their own
 // MongoDB is a NoSQL database.
 // It doesn't follow traditional relational architecure
 // Table, relations
 // Table -> Collections
 // Data -> Documents
 // Each documents are JSON structured
 // The storage module creates a BSON file
 // It uses js interfaces to query the data
 // CRUD operations
 // Mongo DB is completely written in C++  


 // user is a collection -> {username, password, firstname, lastname, email}
 // todo is collection -> {title, completed}
 // Products -> {productName, price, category, type}
 // category


 //Authentication
 /*
    1) Verification of identity
    2) Client Server
    3) The client sends a auth request to server
    4) The server responds with a token or initiate a session
 */

// Authorization
/*
    1) Does the authenticated user has permission to do certain action.
    2) Permissions can be dynamic or they are static based on role
*/

// OAUTH
