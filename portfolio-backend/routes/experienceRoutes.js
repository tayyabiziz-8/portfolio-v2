const express = require('express');
const router = express.Router();
const {
  getExperiences,
  getExperienceById,
  createExperience,
  updateExperience,
  deleteExperience
} = require('../controllers/experienceController');

// GET all experiences and POST new experience
router.route('/').get(getExperiences).post(createExperience);

// GET, PUT, DELETE single experience
router.route('/:id').get(getExperienceById).put(updateExperience).delete(deleteExperience);

module.exports = router;