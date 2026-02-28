const mongoose = require('mongoose');

const applicationSchema = mongoose.Schema(
    {
        jobId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Job',
        },
        name: {
            type: String,
            required: [true, 'Please add your name'],
        },
        email: {
            type: String,
            required: [true, 'Please add an email'],
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Please add a valid email',
            ],
        },
        resumeUrl: {
            type: String,
            required: [true, 'Please add a resume link'],
            match: [
                /^(http|https):\/\/[^ "]+$/,
                'Please add a valid URL',
            ],
        },
        coverNote: {
            type: String,
            required: [true, 'Please add a cover note'],
        },
        appliedAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

applicationSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
