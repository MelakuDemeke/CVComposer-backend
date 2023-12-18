import express from "express";
import { createJob, deleteJob, getJob, getJobs, getJobsByTitle, updateJob } from "../controllers/jobs.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE JOB
router.post("/",verifyAdmin, createJob);

//UPDATE JOB
router.put("/find/:id",verifyAdmin, updateJob);
//DELETE JOB
router.delete("/find/:id",verifyAdmin, deleteJob);
//GET JOB
router.get("/find/:id", getJob);
//GETALL JOB
router.get("/", getJobs);
//GETALL Jobs by category
router.get("/bytitle", getJobsByTitle);

export default router;
