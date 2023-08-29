const errorHandlerMiddleWare = (err, req, res, next) => {
    // console.log(err)
    res.status(505).json({ msg: err })
}

export default errorHandlerMiddleWare;