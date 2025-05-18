# Portfolio Backend

Backend API for personal portfolio website built with Node.js, Express, and MongoDB.

## Features

- CRUD operations for education, skills, projects, and work experience
- MongoDB database integration with Mongoose
- RESTful API design
- CORS enabled for frontend integration

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- CORS

## Project Structure

```
portfolio-backend/
│
├── controllers/
│   ├── educationController.js
│   ├── skillController.js
│   ├── projectController.js
│   └── experienceController.js
│
├── models/
│   ├── Education.js
│   ├── Skill.js
│   ├── Project.js
│   └── Experience.js
│
├── routes/
│   ├── educationRoutes.js
│   ├── skillRoutes.js
│   ├── projectRoutes.js
│   └── experienceRoutes.js
│
├── config/
│   └── db.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js installed on your local machine
- MongoDB installed locally or a MongoDB Atlas account

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio-backend
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory and add the following:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/portfolio
FRONTEND_URL=http://localhost:3000
```

### Running the server

```bash
# Run in development mode
npm run dev

# Run in production mode
npm start
```

The server will start on http://localhost:5000

## API Endpoints

### Education

- GET `/api/education` - Get all education entries
- GET `/api/education/:id` - Get a specific education entry
- POST `/api/education` - Create a new education entry
- PUT `/api/education/:id` - Update an education entry
- DELETE `/api/education/:id` - Delete an education entry

### Skills

- GET `/api/skills` - Get all skills
- GET `/api/skills/:id` - Get a specific skill
- POST `/api/skills` - Create a new skill
- PUT `/api/skills/:id` - Update a skill
- DELETE `/api/skills/:id` - Delete a skill

### Projects

- GET `/api/projects` - Get all projects
- GET `/api/projects/:id` - Get a specific project
- POST `/api/projects` - Create a new project
- PUT `/api/projects/:id` - Update a project
- DELETE `/api/projects/:id` - Delete a project

### Work Experience

- GET `/api/experience` - Get all work experiences
- GET `/api/experience/:id` - Get a specific work experience
- POST `/api/experience` - Create a new work experience
- PUT `/api/experience/:id` - Update a work experience
- DELETE `/api/experience/:id` - Delete a work experience

## Frontend Integration

The backend is configured to work with a React frontend running on http://localhost:3000. To connect your frontend to this backend, you can use Axios to make HTTP requests to the API endpoints.