import mongoose, { InferSchemaType, Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    img: {
        type: String,
    },
    idAdmin: {
        type: Boolean,
        default: false,
    },

}, {timestamps: true})

export type PostType = InferSchemaType<typeof userSchema>;

export default mongoose.models.User || mongoose.model<PostType>("User", userSchema)