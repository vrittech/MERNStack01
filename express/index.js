const express = require('express');
const router = require('./src/routes');

const app = express()

app.use(express.json({
    urlencoded : true
}))

//
/*
req
res
next
*/
//Middleware
app.use('/', router)

app.listen(8000,() => {
    console.log("App running at port 8000")
})

// Event loop 
// How it works


