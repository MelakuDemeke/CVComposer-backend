import express from "express";
import Job from "../models/Job.js";
import { createJob, deleteJob, getJob, getJobs, updateJob } from "../controllers/jobs.js";

const router = express.Router();

//CREATE JOB
router.post("/", createJob);

//UPDATE JOB
router.put("/:id", updateJob);
//DELETE JOB
router.delete("/:id",deleteJob);
//GET JOB
router.get("/:id", getJob);
//GETALL JOB
router.get("/", getJobs);

export default router;
