const express = require('express');
const { getAllJobs, getJobBySlug, createJob } = require('../controllers/jobsController');
const { authMiddleware, authorize } = require('../middlewares/auth');

const router = express.Router();

router.get('/', getAllJobs);
router.get('/:slug', getJobBySlug);
router.post('/', authMiddleware, authorize(['hr', 'admin']), createJob);

module.exports = router;
