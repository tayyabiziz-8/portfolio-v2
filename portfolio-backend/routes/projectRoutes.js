const express = require('express');
const router = express.Router();
const {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
} = require('../controllers/projectController');

// GET all projects and POST new project
router.route('/').get(getProjects).post(createProject);

// GET, PUT, DELETE single project
router.route('/:id').get(getProjectById).put(updateProject).delete(deleteProject);

module.exports = router;