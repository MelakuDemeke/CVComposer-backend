import Job from "../models/Job.js";

export const createJob = async (req, res, next) => {
    const newJob = new Job(req.body);
    try {
        const savedJob = await newJob.save();
        res.status(200).json(savedJob);
    } catch (error) {
        next(error)
    }
};

export const updateJob = async (req, res, next) => {
    try {
        const updatedJob = await Job.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedJob);
    } catch (error) {
        next(error)
    }
};

export const deleteJob = async (req, res, next) => {
    try {
        await Job.findByIdAndDelete(
            req.params.id,
        );
        res.status(200).json("Job has been deleted");
    } catch (error) {
        next(error)
    }
};

export const getJob = async (req, res, next) => {
    try {
        const job = await Job.findById(
            req.params.id,
        );
        res.status(200).json(job);
    } catch (error) {
        next(error)
    }
};

export const getJobs = async (req, res, next) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        next(error)
    }
};