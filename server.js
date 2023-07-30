import express from "express";
const app = express();
import dotenv from 'dotenv'
dotenv.config()
import connectDB from "./db/connect.js";

import authRouter from './routes/authRoutes.js'


import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleWare from "./middleware/error-handler.js";

app.use(express.json()) // will make all the json data avaible to all controllers

app.get('/',(req, res)=>{
    // throw new Error('sd')
    res.send('Welcome.. !')
})

app.use('api/v1/auth', authRouter)

app.use(notFoundMiddleware) // if none of the app.get() request will be matched, this one will be executed
app.use(errorHandlerMiddleWare) // if none of teh app.get() request will be matched, this one will be executed

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server is running...${port}`)
})

const start = async ()=> {
    try{
        await connectDB(process.env.MONGO_URL)
    }
    catch(error){
        console.log(error)
    }
}

start()