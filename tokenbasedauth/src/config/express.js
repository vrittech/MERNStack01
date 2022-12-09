const express = require('express');
const router = require('./routes');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors({
    credentials : true,
    origin: "http://localhost:3000"
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/v1', router)


module.exports = app;