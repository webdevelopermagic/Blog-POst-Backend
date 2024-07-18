import mongoose from "mongoose";

const Connection = async (email, password) => {
    const URL = `mongodb+srv://system:system@cluster0.4sl5ce8.mongodb.net/system-db`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting to the database ", error);
    }
};

export default Connection;    