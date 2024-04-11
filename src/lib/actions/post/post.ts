import { connectDB } from "@/lib/db/connectDB"
import Post from "@/lib/models/post/Post"

export const getPosts = async () => {
    try {
        connectDB()
        const posts = await Post.find()
        return posts
    } catch(err: any) {
        console.log("Get posts error...", err)
        throw new Error("Couldn't find post")
    }
}

export const getSinglePost = async (id: string) => {
    try {
        connectDB()
        const post =  await Post.findById(id)
        return post
    } catch(err: any) {
        console.log("Get single post error...", err)
        throw new Error(err.message)
    }
}

export const updatePost = async (id: string, post: any) => {
    try {
        connectDB()
        const newPost =  await Post.findOneAndUpdate({id}, post, {new: true})
        if (!newPost) {
            throw new Error("Post not updated")
        }
        return newPost
    } catch(err: any) {
        console.log("Update post error...", err)
        throw new Error(err.message)
    }
}

export const deletePost = async (id: string) => {
    try {
        connectDB()
        await Post.findByIdAndDelete(id)
    } catch(err: any) {
        console.log("Delete post error...", err)
        throw new Error(err.message)
    }
}