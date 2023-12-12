import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Database connected");
    } catch (error) {
        throw error;
    }
};

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(8800, () => {
    connect();
    console.log("Server is running");
});
