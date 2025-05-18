// portfolio-backend/routes/skillRoutes.js
const express = require('express');
const router = express.Router();
const {
  getSkills,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill
} = require('../controllers/skillController');

router.route('/')
  .get(getSkills)
  .post(createSkill);

router.route('/:id')
  .get(getSkillById)
  .put(updateSkill)
  .delete(deleteSkill);

module.exports = router;