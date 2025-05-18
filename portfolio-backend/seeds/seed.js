// portfolio-backend/seeds/seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('../config/db');
const Project = require('../models/Project');
const Education = require('../models/Education');
const Skill = require('../models/Skill');
const Experience = require('../models/Experience');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Sample data
const projectsData = [
  {
    title: 'Chess',
    description: 'PvP chess with console display and mouse controls.',
    technologies: ['C++', 'OpenGL', 'Game Development'],
    githubUrl: 'https://github.com/yourusername/chess'
  },
  {
    title: 'BudgetRep',
    description: 'An android app that manages finances on monthly basis.',
    technologies: ['Java', 'Android', 'SQLite'],
    githubUrl: 'https://github.com/yourusername/budgetrep'
  },
  {
    title: 'Distributed Dictionary',
    description: 'Merge all nodes holding partial dictionary of key-value pairs.',
    technologies: ['Python', 'Distributed Systems', 'Algorithms'],
    githubUrl: 'https://github.com/yourusername/distributed-dictionary'
  },
  {
    title: 'Paint App',
    description: 'MS Paint inspired editor using C++ OpenCV library.',
    technologies: ['C++', 'OpenCV', 'GUI'],
    githubUrl: 'https://github.com/yourusername/paint-app'
  },
  {
    title: 'Weather App',
    description: 'A weather forecasting app using OpenWeather API.',
    technologies: ['JavaScript', 'React', 'API Integration'],
    githubUrl: 'https://github.com/yourusername/weather-app',
    liveUrl: 'https://weather-app-demo.netlify.app'
  },
  {
    title: 'Chest X-Ray Analyzer',
    description: 'Classifies an x-ray image to one of the labeled diseases.',
    technologies: ['Python', 'TensorFlow', 'Deep Learning', 'CNN'],
    githubUrl: 'https://github.com/yourusername/xray-analyzer'
  },
  {
    title: 'Text Editor',
    description: 'A Vim-inspired text editor for fast text manipulation.',
    technologies: ['C', 'Terminal', 'Data Structures'],
    githubUrl: 'https://github.com/yourusername/text-editor'
  },
  {
    title: 'Library/Bookstore DBMS',
    description: 'A database management system for libraries/bookstores.',
    technologies: ['SQL', 'Database Design', 'Node.js', 'Express'],
    githubUrl: 'https://github.com/yourusername/library-dbms'
  }
];

const educationData = [
  {
    institution: 'University of Computer Science',
    degree: 'Bachelor of Science in Computer Science',
    fieldOfStudy: 'Computer Science',
    startDate: new Date('2018-09-01'),
    endDate: new Date('2022-05-31'),
    grade: '3.85 GPA',
    description: 'Specialized in Artificial Intelligence and Machine Learning.'
  },
  {
    institution: 'Tech Institute',
    degree: 'Master of Science',
    fieldOfStudy: 'Software Engineering',
    startDate: new Date('2022-09-01'),
    endDate: new Date('2024-05-31'),
    grade: '3.9 GPA',
    description: 'Focused on Cloud Computing and Distributed Systems.'
  }
];

const skillsData = [
  {
    name: 'JavaScript',
    category: 'Programming Languages',
    proficiency: 90,
    yearsOfExperience: 4
  },
  {
    name: 'React',
    category: 'Frontend',
    proficiency: 85,
    yearsOfExperience: 3
  },
  {
    name: 'Node.js',
    category: 'Backend',
    proficiency: 80,
    yearsOfExperience: 3
  },
  {
    name: 'Python',
    category: 'Programming Languages',
    proficiency: 85,
    yearsOfExperience: 5
  },
  {
    name: 'MongoDB',
    category: 'Database',
    proficiency: 75,
    yearsOfExperience: 3
  },
  {
    name: 'Express.js',
    category: 'Backend',
    proficiency: 80,
    yearsOfExperience: 3
  },
  {
    name: 'C++',
    category: 'Programming Languages',
    proficiency: 70,
    yearsOfExperience: 4
  },
  {
    name: 'SQL',
    category: 'Database',
    proficiency: 75,
    yearsOfExperience: 4
  },
  {
    name: 'Git',
    category: 'Tools',
    proficiency: 85,
    yearsOfExperience: 5
  },
  {
    name: 'Docker',
    category: 'DevOps',
    proficiency: 70,
    yearsOfExperience: 2
  }
];

const experienceData = [
  {
    company: 'Tech Solutions Inc.',
    position: 'Software Developer',
    location: 'San Francisco, CA',
    startDate: new Date('2022-06-01'),
    endDate: null, // Current job
    current: true,
    description: 'Developing and maintaining web applications using React, Node.js, and MongoDB. Implementing new features and fixing bugs. Collaborating with the design team to implement UI/UX improvements.',
    responsibilities: [
      'Developed RESTful APIs using Node.js and Express',
      'Created responsive frontend components with React',
      'Implemented CI/CD pipelines with GitHub Actions',
      'Participated in code reviews and pair programming sessions'
    ]
  },
  {
    company: 'CodeCraft Ltd.',
    position: 'Junior Web Developer',
    location: 'Boston, MA',
    startDate: new Date('2020-07-01'),
    endDate: new Date('2022-05-30'),
    current: false,
    description: 'Worked on various client projects, primarily focused on frontend development with React and Angular.',
    responsibilities: [
      'Built responsive websites using modern CSS frameworks',
      'Collaborated with designers to implement pixel-perfect interfaces',
      'Optimized applications for maximum speed and scalability',
      'Maintained and improved existing codebases'
    ]
  },
  {
    company: 'DataTech Systems',
    position: 'Software Engineering Intern',
    location: 'Remote',
    startDate: new Date('2019-05-01'),
    endDate: new Date('2019-08-30'),
    current: false,
    description: 'Assisted the development team in creating data visualization tools using Python and JavaScript.',
    responsibilities: [
      'Implemented data processing algorithms in Python',
      'Created interactive charts using D3.js',
      'Wrote documentation for internal tools',
      'Participated in daily stand-up meetings and sprint planning'
    ]
  }
];

// Import data to database
const importData = async () => {
  try {
    // Clear all existing data
    await Project.deleteMany();
    await Education.deleteMany();
    await Skill.deleteMany();
    await Experience.deleteMany();

    console.log('Data cleaned...');

    // Import new data
    await Project.insertMany(projectsData);
    await Education.insertMany(educationData);
    await Skill.insertMany(skillsData);
    await Experience.insertMany(experienceData);

    console.log('Data imported successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Run the import function
importData();