const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise
        .resolve(requestHandler(req, res, next))
        .catch((err) => next(err))
    }
}



export {asyncHandler}

// ! the below is the second method

// const asyncHandler = (fn) => async(req, res, next) => {
//     try {
//         await fn(req, req, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }