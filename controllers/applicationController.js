const Application = require('../models/Application');
const Job = require('../models/Job');

// @desc    Submit a job application
// @route   POST /api/applications
// @access  Public
const submitApplication = async (req, res, next) => {
    try {
        const { jobId, name, email, resumeUrl, coverNote } = req.body;

        // Verify job exists
        const job = await Job.findById(jobId);
        if (!job) {
            res.status(404);
            throw new Error('Job not found');
        }

        const application = new Application({
            jobId,
            name,
            email,
            resumeUrl,
            coverNote,
        });

        const savedApplication = await application.save();
        res.status(201).json(savedApplication);
    } catch (error) {
        // Determine if it is a Mongoose validation error
        if (error.name === 'ValidationError') {
            res.status(400);
            // format validation errors
            const messages = Object.values(error.errors).map(val => val.message);
            return next(new Error(messages.join(', ')));
        }
        next(error);
    }
};

// @desc    Get all applications
// @route   GET /api/applications
// @access  Public (Admin)
const getApplications = async (req, res, next) => {
    try {
        const applications = await Application.find().populate('jobId', 'title company').sort('-appliedAt');
        res.status(200).json(applications);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    submitApplication,
    getApplications,
};
