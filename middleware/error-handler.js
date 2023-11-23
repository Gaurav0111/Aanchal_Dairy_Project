import { StatusCodes } from "http-status-codes";
const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
const errorHandlerMiddleWare = (err, req, res, next) => {
    console.log(err)

    const defaultError = {
        statusCode : err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong, tyr again later',
    }
    
    if (err.name==='ValidationError'){
        defaultError.statusCode = StatusCodes.BAD_REQUEST
        // defaultError.msg=err.message
        defaultError.msg = Object.values(err.errors).map((item)=> item.message).join(',')
    }
    if (err.code && err.code === 11000 ){
        defaultError.statusCode = StatusCodes.BAD_REQUEST
        // defaultError.msg = `${capitalizeFirstLetter(Object.keys(err.keyValue))} field has to be unique`
        defaultError.msg = `${Object.keys(err.keyValue)} field has to be unique`
    }
    res.status(defaultError.statusCode).json({ msg: defaultError.msg })
}

export default errorHandlerMiddleWare;