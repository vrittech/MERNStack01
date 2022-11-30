const express = require('express');

const app = express()

let TODOS = []


app.use(express.json({
    urlencoded : true
}))
//Get request sends the data from server to the client
app.get('/todos', (req,res) => {
    return res.status(200).json({todos : TODOS})
})

//Post request saves the data from client to server
// data hiding
app.post('/todos', (req,res) => {
    
    const todo = req.body
    TODOS.push(todo)

    return res.status(200).json({
        message : "Todo created successfully"
    })
})

app.listen(8000,() => {
    console.log("App running at port 8000")
})

// Event loop 
// How it works


