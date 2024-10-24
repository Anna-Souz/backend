const asyncHandler = (requestHandler) => {
    return (res, req, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch(next)
    }
}

export {asyncHandler}



// const asyncHandler = () => {}
// const asyncHandler = (func) => async() => {}

// const asyncHandler = (fn) => async(req, res, next) => {
//     try{
//         await fn(req, res, next)
//     }catch(error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
//}