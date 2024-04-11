import { connectDB } from "@/lib/db/connectDB"
import User from "@/lib/models/user/User"

export const getUsers = async () => {
    try {
        connectDB()
        const users = await User.find()
        return users
    } catch(err: any) {
        console.log("Get users error...", err)
        throw new Error(err.message)
    }
}

export const getUser = async (id: string) => {
    try {
        connectDB()
        const user =  await User.findById(id)
        return user
    } catch(err: any) {
        console.log("Get user error...", err)
        throw new Error(err.message)
    }
}

export const updateUser = async (id: string, user: any) => {
    try {
        connectDB()
        const newUser =  await User.findOneAndUpdate({id}, user, {new: true})
        if (!newUser) {
            throw new Error("User not updated")
        }
        return newUser
    } catch(err: any) {
        console.log("Update user error...", err)
        throw new Error(err.message)
    }
}

export const deleteUser = async (id: string) => {
    try {
        connectDB()
        await User.findByIdAndDelete(id)
    } catch(err: any) {
        console.log("Delete user error...", err)
        throw new Error(err.message)
    }
}