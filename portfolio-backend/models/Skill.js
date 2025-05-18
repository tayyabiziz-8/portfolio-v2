// portfolio-backend/models/Skill.js
const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Skill name is required']
  },
  category: {
    type: String,
    required: [true, 'Category is required']
  },
  proficiency: {
    type: Number,
    min: 0,
    max: 100,
    default: 50
  },
  yearsOfExperience: {
    type: Number,
    default: 0
  },
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Skill', skillSchema);