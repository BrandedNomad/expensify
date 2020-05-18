const express = require('express')
const path = require('path')

const server = express()

const publicDirectoryPath = path.join(__dirname,'../public')

server.use(express.static(publicDirectoryPath))

server.get('*',(req,res)=>{
    res.send(path.join(publicDirectoryPath,'index.html'))
})

const port = process.env.PORT || 3000

server.listen(port, ()=>{
    console.log("Server is up and running on port " + port)
})