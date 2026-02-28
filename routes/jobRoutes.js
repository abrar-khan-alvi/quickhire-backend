const express = require('express');
const router = express.Router();
const {
    getJobs,
    getJobById,
    createJob,
    deleteJob,
} = require('../controllers/jobController');

router.route('/').get(getJobs).post(createJob);
router.route('/:id').get(getJobById).delete(deleteJob);

module.exports = router;
