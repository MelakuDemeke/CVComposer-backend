import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import jobRoute from "./routes/jobs.js";
import cookieParser from "cookie-parser";
import usersRoute from "./routes/users.js";
import tipsRoute from "./routes/tips.js"

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect();
    } catch (error) {
        throw error;
    }
};
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});
mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
});

mongoose.connection.on("connected", () => {
    console.log("Database connected");
});

// Express and cookie middleware
app.use(cookieParser());
app.use(express.json());

//Personal middlewares
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/jobs", jobRoute);
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/tips", tipsRoute);


//Error handling middleware
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "someting went wrong"
    return res.status(errorStatus).json({
        sucess: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    });
});

app.get("/", async (req, res) => {
    try {
        await mongoose.connection.db.admin().ping();
        res.send('Database connected!');
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
        res.status(500).send(`Error: Unable to connect to the database. ${error.message}`);
    }
});
app.listen(8800, () => {
    connect();
    console.log("Server is running in port 8800");
});
