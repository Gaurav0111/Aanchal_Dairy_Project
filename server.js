import express from "express";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleWare from "./middleware/error-handler.js";
const app = express();


app.get('/',(req, res)=>{
    // throw new Error('sd')
    res.send('Welcome.. !')
})

app.use(notFoundMiddleware) // if none of teh app.get() request will be matched, this one will be executed
app.use(errorHandlerMiddleWare) // if none of teh app.get() request will be matched, this one will be executed

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server is running...${port}`)
})