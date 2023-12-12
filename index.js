import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import jobRoute from "./routes/jobs.js";

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

// Express middleware
app.use(express.json());

//Personal middlewares
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/jobs", jobRoute);

//Error handling middleware
app.use((err, req, res, next) => {
    return res.status(500).json("error from handler");
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(8800, () => {
    connect();
    console.log("Server is running");
});
