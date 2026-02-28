const mongoose = require('mongoose');

const jobSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please add a job title'],
        },
        company: {
            type: String,
            required: [true, 'Please add a company name'],
        },
        location: {
            type: String,
            required: [true, 'Please add a location'],
        },
        type: {
            type: String,
            required: true,
            enum: ['Full Time', 'Part Time', 'Contract', 'Internship'],
        },
        category: {
            type: String,
            required: true,
            enum: ['Engineering', 'Design', 'Marketing', 'Business', 'Sales', 'Finance', 'HR', 'Technology'],
        },
        salary: {
            type: String,
        },
        description: {
            type: String,
            required: [true, 'Please add a job description'],
        },
        logo: {
            type: String,
        },
        postedDate: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

// Ensure virtuals are included in toJSON/toObject output
jobSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
