import express from "express";
import { createJob, deleteJob, getJob, getJobs, updateJob } from "../controllers/jobs.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE JOB
router.post("/",verifyAdmin, createJob);

//UPDATE JOB
router.put("/find/:id",verifyAdmin, updateJob);
//DELETE JOB
router.delete("/:id",verifyAdmin, deleteJob);
//GET JOB
router.get("/:id", getJob);
//GETALL JOB
router.get("/", getJobs);

export default router;
