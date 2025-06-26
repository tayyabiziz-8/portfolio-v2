# Portfolio Project

A full-stack portfolio application with React frontend and Node.js/Express backend.

## Project Structure

This project consists of two main parts:
- **Frontend**: React application with Material-UI components
- **Backend**: Node.js/Express API with MongoDB integration

## Prerequisites

- Node.js (v16 or newer)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas account)

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/yourusername/portfolio-project.git
cd portfolio-project
```

### Backend Setup

1. Navigate to the backend directory:

```bash
cd portfolio-backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root of the backend directory with the following content:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
```

4. Seed the database with initial data:

```bash
npm run seed
```

5. Start the backend server:

```bash
npm run start
```

For development with hot-reload:

```bash
npm run dev
```

The backend should now be running on http://localhost:5000

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:

```bash
cd src
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root of the frontend directory:

```
REACT_APP_API_URL=http://localhost:5000/api
```

4. Start the frontend development server:

```bash
npm start
```

The application should now be running on http://localhost:3000

## API Endpoints

### Education

- `GET /api/education` - Get all education entries
- `GET /api/education/:id` - Get a specific education entry
- `POST /api/education` - Create a new education entry
- `PUT /api/education/:id` - Update an education entry
- `DELETE /api/education/:id` - Delete an education entry

### Skills

- `GET /api/skills` - Get all skills
- `GET /api/skills/:id` - Get a specific skill
- `POST /api/skills` - Create a new skill
- `PUT /api/skills/:id` - Update a skill
- `DELETE /api/skills/:id` - Delete a skill

### Projects

- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get a specific project
- `POST /api/projects` - Create a new project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

### Experience

- `GET /api/experience` - Get all experience entries
- `GET /api/experience/:id` - Get a specific experience entry
- `POST /api/experience` - Create a new experience entry
- `PUT /api/experience/:id` - Update an experience entry
- `DELETE /api/experience/:id` - Delete an experience entry

## Frontend Routes

- `/` - Home page
- `/education` - Education history
- `/projects` - Portfolio projects
- `/contact` - Contact form

## Project Components

### Frontend

- **Layout Components**:
  - `Header.jsx` - AppBar with profile avatar
  - `SideNav.jsx` - Sidebar with skills and interests
  - `MainSection.jsx` - Main content area
  - `Footer.jsx` - Static footer

- **UI Components**:
  - `ProjectCard.jsx` - Reusable project card component
  - `ProgressBar.jsx` - Custom progress bar for skills
  - `ContactForm.jsx` - Form with validation

- **Pages**:
  - `Home.jsx` - Landing page with summary
  - `Education.jsx` - Education history
  - `Projects.jsx` - Portfolio projects showcase
  - `Contact.jsx` - Contact page with form

### Backend

- **Models**:
  - `Education.js` - Schema for education entries
  - `Skill.js` - Schema for skills
  - `Project.js` - Schema for projects
  - `Experience.js` - Schema for work experience

- **Controllers**:
  - Handle business logic for each entity

- **Routes**:
  - Define API endpoints for each entity

## Development

### Running Tests

```bash
# Backend tests
cd portfolio-backend
npm test

# Frontend tests
cd src
npm test
```

### Building for Production

#### Backend

```bash
cd portfolio-backend
npm run build
```

#### Frontend

```bash
cd src
npm run build
```

The build output will be in the `build` directory, ready for deployment.

## Deployment

### Frontend

The React application can be deployed to services like:
- Netlify
- Vercel
- GitHub Pages
- AWS S3

### Backend

The Node.js backend can be deployed to:
- Heroku
- DigitalOcean
- AWS EC2
- Railway.app

Remember to set the appropriate environment variables in your production environment.

## Customization

- **Theme**: Modify `src/theme/theme.js` to customize the Material-UI theme
- **Content**: Update the seed data in `portfolio-backend/seeds/seed.js`
- **Styling**: Modify the CSS modules in `src/styles/`

## Technologies Used

### Frontend
- React
- Material-UI
- React Router
- CSS Modules
- Context API

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## License

MIT