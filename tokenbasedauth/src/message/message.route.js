const Clients = require('../config/clients')

const messagesRouter = require('express').Router()


messagesRouter.post('/', (req,res)=>{
   const {message, user_id} = req.body
   //Save the message to the database
   const ws = Clients.getClient(user_id)
   if(ws){
    ws.send(message)
   }
//    const ws = CLIENTS[user_id];
  
    return res.status(200).json({
        message
    })
})


module.exports = messagesRouter;