//import json-server dependency/package
const jsonServer=require('json-server')

//create Server
const server=jsonServer.create()

//create middleware
const middleware=jsonServer.defaults()

//initializing router with resourse
const router=jsonServer.router('db.json')

//implementing middleware to server
server.use(middleware)

//implementing router to server
server.use(router)

//defining PORT number
const PORT=process.env.PORT || 4000

//activating server in to listening for request
server.listen(PORT,()=>{
    console.log("Server is running in PORT:",PORT)
})