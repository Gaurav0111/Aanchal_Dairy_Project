const errorHandlerMiddleWare = (err, req, res, next) => {
    console.log(err)
    res.status(505).json({msg:'Their was an error while loading this page'})
}

export default errorHandlerMiddleWare;