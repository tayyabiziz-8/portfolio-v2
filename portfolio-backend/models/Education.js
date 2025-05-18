// portfolio-backend/models/Education.js
const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  institution: {
    type: String,
    required: [true, 'Institution name is required']
  },
  degree: {
    type: String,
    required: [true, 'Degree is required']
  },
  fieldOfStudy: {
    type: String,
    required: [true, 'Field of study is required']
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required']
  },
  endDate: {
    type: Date
  },
  grade: {
    type: String
  },
  description: {
    type: String
  },
  achievements: [{
    type: String
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Education', educationSchema);