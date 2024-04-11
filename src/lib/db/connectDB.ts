import mongoose, { ConnectionStates } from "mongoose";

type MongoDb = {
    isConnected: null | ConnectionStates
}

const connection: MongoDb = {
    isConnected: null
}

export const connectDB = async () => {
   try {
    if (connection.isConnected) {
        console.log("Using existing connection")
        return
    }
    
    const db = await  mongoose.connect(process.env.MONGO_URI as string)
    connection.isConnected = db.connections[0].readyState
   } catch(err: any) {
    console.log("DB Connection Error...", err)
    throw new Error(err)
   }
}