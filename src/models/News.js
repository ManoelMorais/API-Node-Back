import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    banner: {
        type: String,
        required: true,
    },
    createdAT: {
        type: Date,
        default: Date.now(),
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModels",
        required: true,
    },
    likes: {
        type: Array,
        required: true,
    },
    comments: {
        type: Array,
        required: true,
    },
})

const NewsModel = mongoose.model("NewsModel", NewsSchema);

export default NewsModel