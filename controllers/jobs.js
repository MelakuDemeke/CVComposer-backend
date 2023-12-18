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

export const getJobsByTitle = async (req, res, next) => {
    try {
        const { title } = req.query;

        const filter = title ? { title } : {};

        const jobs = await Job.find(filter);
        res.status(200).json(jobs);
    } catch (error) {
        next(error);
    }
};
export const getJobs = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const resultsPerPage = parseInt(req.query.resultsPerPage) || 10;

        const skip = (page - 1) * resultsPerPage;

        const jobs = await Job.find().skip(skip).limit(resultsPerPage);

        const totalJobs = await Job.countDocuments();

        const totalPages = Math.ceil(totalJobs / resultsPerPage);

        const nextPage = page < totalPages ? `/api/v1/jobs?page=${page + 1}&resultsPerPage=${resultsPerPage}` : null;
        const prevPage = page > 1 ? `/api/v1/jobs?page=${page - 1}&resultsPerPage=${resultsPerPage}` : null;

        res.status(200).json({
            jobs,
            nextPage,
            prevPage,
            totalPages,
            currentPage: page
        });
    } catch (error) {
        next(error);
    }
};
