// portfolio-backend/models/Experience.js
const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, 'Company name is required']
  },
  position: {
    type: String,
    required: [true, 'Position is required']
  },
  location: {
    type: String
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required']
  },
  endDate: {
    type: Date
  },
  current: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  responsibilities: [{
    type: String
  }],
  technologies: [{
    type: String
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Experience', experienceSchema);