const Job = require('../models/Job');

// @desc    Get all jobs
// @route   GET /api/jobs
// @access  Public
const getJobs = async (req, res, next) => {
    try {
        const jobs = await Job.find({}).sort({ createdAt: -1 });
        res.json(jobs);
    } catch (error) {
        next(error);
    }
};

// @desc    Get single job
// @route   GET /api/jobs/:id
// @access  Public
const getJobById = async (req, res, next) => {
    try {
        const job = await Job.findById(req.params.id);

        if (job) {
            res.json(job);
        } else {
            res.status(404);
            throw new Error('Job not found');
        }
    } catch (error) {
        next(error);
    }
};

// @desc    Create a job
// @route   POST /api/jobs
// @access  Admin (Public for this assessment scope)
const createJob = async (req, res, next) => {
    try {
        const { title, company, location, type, category, salary, description, logo } = req.body;

        const job = new Job({
            title,
            company,
            location,
            type,
            category,
            salary,
            description,
            logo,
        });

        const createdJob = await job.save();
        res.status(201).json(createdJob);
    } catch (error) {
        next(error);
    }
};

// @desc    Delete a job
// @route   DELETE /api/jobs/:id
// @access  Admin (Public for this assessment scope)
const deleteJob = async (req, res, next) => {
    try {
        const job = await Job.findById(req.params.id);

        if (job) {
            await job.deleteOne();
            res.json({ message: 'Job removed successfully' });
        } else {
            res.status(404);
            throw new Error('Job not found');
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getJobs,
    getJobById,
    createJob,
    deleteJob,
};
