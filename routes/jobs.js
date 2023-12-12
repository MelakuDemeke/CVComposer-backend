import express from "express";
import Job from "../models/Job.js";

const router = express.Router();

// TODO: CREATE JOB
router.post("/", async (req, res) => {
    const newJob = new Job(req.body);
    try {
        const savedJob = await newJob.save();
        res.status(200).json(savedJob);
    } catch (error) {
        res.status(500).json(error);
    }
});
// TODO: UPDATE JOB
router.put("/:id", async (req, res) => {
    try {
        const updatedJob = await Job.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedJob);
    } catch (error) {
        res.status(500).json(error);
    }
});
// TODO: DELETE JOB
// TODO: GET JOB
// TODO: GETALL JOB

export default router;
