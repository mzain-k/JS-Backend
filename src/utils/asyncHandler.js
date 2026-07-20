// Day 8 notes:

const asyncHandler = (fn) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandler}


// E.g. This is a syntax to use functions as Parameters
// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


// try/catch approach
// const asyncHandler = (fn) => (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         req.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }