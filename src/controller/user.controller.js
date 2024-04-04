import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (req, res) => {
    res.status(200).json({
        message:"Ha Rohit postman pr msg aa gya."
    })
})

export { registerUser }