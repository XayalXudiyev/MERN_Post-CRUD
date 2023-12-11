import mongoose from "mongoose";

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo DB Connected");
    } catch (error) {
        console.error("Mongo DB Connection Error:", error);
    }
}

export default db