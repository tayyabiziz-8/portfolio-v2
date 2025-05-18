const express = require('express');
const router = express.Router();
const {
  getEducation,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducation
} = require('../controllers/educationController');

// GET all education entries and POST new education entry
router.route('/').get(getEducation).post(createEducation);

// GET, PUT, DELETE single education entry
router.route('/:id').get(getEducationById).put(updateEducation).delete(deleteEducation);

module.exports = router;