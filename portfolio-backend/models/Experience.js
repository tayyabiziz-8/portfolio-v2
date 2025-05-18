const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, 'Company name is required']
  },
  position: {
    type: String,
    required: [true, 'Position title is required']
  },
  location: {
    type: String
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required']
  },
  endDate: {
    type: Date,
    default: null // null means currently working
  },
  description: {
    type: String
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