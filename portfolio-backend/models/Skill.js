const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Skill name is required']
  },
  proficiency: {
    type: Number,
    required: [true, 'Proficiency level is required'],
    min: 0,
    max: 100
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['Programming Languages', 'Frameworks', 'Tools', 'Soft Skills', 'Other']
  },
  icon: {
    type: String // URL or name of icon
  },
  yearsOfExperience: {
    type: Number
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Skill', skillSchema);