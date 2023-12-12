import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
});

mongoose.connection.on("connected", () => {
    console.log("Database connected");
});

// middlewares
app.use("/api/v1/auth", authRoute);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(8800, () => {
    connect();
    console.log("Server is running");
});
