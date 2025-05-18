const express = require('express');
const router = express.Router();
const {
  getSkills,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill
} = require('../controllers/skillController');

// GET all skills and POST new skill
router.route('/').get(getSkills).post(createSkill);

// GET, PUT, DELETE single skill
router.route('/:id').get(getSkillById).put(updateSkill).delete(deleteSkill);

module.exports = router;