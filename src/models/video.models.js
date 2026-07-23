import mongoose, { Schema } from "mongoose";
import mongooseAggregatePagiante from "mongoose-aggregate-paginate-v2"

const videoSchema = new Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        isPublished: {
            type: Boolean,
            required: true,
            default: true,
        },
        duration: {
            type: Number, // from cloudinary (it send information about media that it sends)
            reqiured: true,
        },
        views: {
            type: String,
            reqiured: true,
            default: 0,
        },
        videoFile: {
            type: String, // cloudinary url
            required: true,
        },
        thumbnail: {
            type: String, // cloudinary url
            required: true,
        }
    },
    { timestamps: true }
)

videoSchema.plugin(mongooseAggregatePagiante)

export const Video = mongoose.model("Video", videoSchema)