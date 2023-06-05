import mongoose, { mongo } from "mongoose";

const mongodbUrl = "mongodb://localhost:2000"
const dbName = "Main"

export const dbConnect = async () => {
    try {
        await mongoose.connect(`${mongodbUrl}/${dbName}`)
        console.log(`Database ${dbName} connection established`);
    } catch (error) {
        console.log(`Database connection failed: ${mongodbUrl}/${dbName} is unavailable`);
    }
}