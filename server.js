import express from "express";
const app = express();
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'

import connectDB from "./db/connect.js";

import authRouter from './routes/authRoutes.js'
import jobRouter from './routes/jobRoutes.js'


import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleWare from "./middleware/error-handler.js";

app.use(express.json()) // will make all the json data avaible in controllers

app.get('/', (req, res) => {
    // throw new Error('sd')
    res.send('Welcome.. !')
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/job', jobRouter)

app.use(notFoundMiddleware) // if none of the app.get() request will be matched, this one will be executed
app.use(errorHandlerMiddleWare) // while executing any app. if an error occures, this will be executed

const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Server is running...${port}`)
})

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
    }
    catch (error) {
        console.log(error)
    }
}

start()