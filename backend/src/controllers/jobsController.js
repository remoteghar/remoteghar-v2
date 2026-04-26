const pool = require('../config/db');

const getAllJobs = async (req, res) => {
  try {
    const [jobs] = await pool.execute(
      'SELECT j.*, u.name as hr_name FROM jobs j JOIN users u ON j.hr_id = u.id WHERE j.status = "published" ORDER BY j.created_at DESC'
    );
    res.json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error fetching jobs' });
  }
};

const getJobBySlug = async (req, res) => {
  const { slug } = req.params;
  try {
    const [jobs] = await pool.execute(
      'SELECT j.*, u.name as hr_name FROM jobs j JOIN users u ON j.hr_id = u.id WHERE j.slug = ?',
      [slug]
    );
    
    if (jobs.length === 0) {
      return res.status(404).json({ message: 'Job not found' });
    }
    
    res.json(jobs[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error fetching job details' });
  }
};

const createJob = async (req, res) => {
  const { title, slug, description, modality, compensation_type, min_inr, max_inr, application_method } = req.body;
  const hr_id = req.user.id;

  try {
    const [result] = await pool.execute(
      `INSERT INTO jobs (hr_id, title, slug, description, modality, compensation_type, min_inr, max_inr, application_method, status, created_at, updated_at) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'published', NOW(), NOW())`,
      [hr_id, title, slug, description, modality, compensation_type, min_inr, max_inr, application_method]
    );

    res.status(201).json({ id: result.insertId, message: 'Job created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error creating job' });
  }
};

module.exports = { getAllJobs, getJobBySlug, createJob };
