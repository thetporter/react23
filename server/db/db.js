import mongoose from "mongoose";

export const mongodbUrl = "mongodb://127.0.0.1:27017"
export const dbName = "main"

export const dbConnect = async () => {
    try {
        await mongoose.connect(`${mongodbUrl}/${dbName}`)
        console.log(`Database ${dbName} connection established`);
    } catch (error) {
        console.log(`Database connection failed: ${mongodbUrl}/${dbName} is unavailable with ${error}`);
    }
}