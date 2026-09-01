import mongoose, { isValidObjectId } from "mongoose"
import {Tweet} from "../models/tweet.model.js"
import {User} from "../models/user.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const createTweet = asyncHandler( async (req, res) => {
    const {content} = req.body
    const user = req.user?._id
    
    if(!user) {
        throw new ApiError(400, "User not found")
    }

    if (!content || content === "") {
        throw new ApiError(400, "Enter content to create tweet")
    }

    const tweet = await Tweet.create({
        owner: user,
        content
    })

    const createdTweet = await Tweet.findById(tweet._id)
    if (!createdTweet) {
        throw new ApiError(500, "Soemthing went Wrong")
    }

    return res
    .status(200)
    .json(new ApiResponse(200, createdTweet, "Tweet created Successfully."))
})

const getUserTweets = asyncHandler( async (req, res) => {
    // TODO: get user tweets
    return res
    .status(200)
    .json(new ApiResponse(200, [req.tweet], "Tweets found successfully"))
})

const updateTweet = asyncHandler( async (req, res) => {
    //TODO: update tweet
    
})

const deleteTweet = asyncHandler( async (req, res) => {
    //TODO: delete tweet
})

export {
    createTweet,
    getUserTweets,
    updateTweet,
    deleteTweet
}