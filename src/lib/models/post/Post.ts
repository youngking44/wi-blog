import mongoose, { InferSchemaType, Schema } from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    userId: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },

}, {timestamps: true})

export type PostType = InferSchemaType<typeof postSchema>;

export default mongoose.models.Post || mongoose.model<PostType>("Post", postSchema)