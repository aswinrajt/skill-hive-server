require('dotenv').config()
const express =require('express')
const cors = require('cors')
const server=express()
const router=require('./routes/routes')
require('./connection/db')

server.use(cors())
server.use(express.json())
server.use(router)

const PORT=3000 || process.env.PORT
server.listen(PORT,()=>{
    console.log(`Server running at:${PORT}`)
})