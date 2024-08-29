import mongoose from "mongoose";

const connectTomongodb = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("\x1b[32m%s\x1b[0m","Connected to MongoDB successfully! ⭐");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
        process.exit(1);
    }
}

export default connectTomongodb;