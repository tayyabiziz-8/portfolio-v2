const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required']
  },
  description: {
    type: String,
    required: [true, 'Project description is required']
  },
  imageUrl: {
    type: String
  },
  technologies: [{
    type: String
  }],
  githubUrl: {
    type: String
  },
  liveUrl: {
    type: String
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);