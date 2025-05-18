// src/services/projectService.js
import api from '../config/api';

const projectService = {
  /**
   * Get all projects
   * @returns {Promise} Promise object with projects data
   */
  getAllProjects: async () => {
    try {
      const response = await api.get('/projects');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Get a single project by ID
   * @param {string} id - Project ID
   * @returns {Promise} Promise object with project data
   */
  getProjectById: async (id) => {
    try {
      const response = await api.get(`/projects/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Create a new project
   * @param {Object} projectData - Project data
   * @returns {Promise} Promise object with created project
   */
  createProject: async (projectData) => {
    try {
      const response = await api.post('/projects', projectData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Update a project
   * @param {string} id - Project ID
   * @param {Object} projectData - Updated project data
   * @returns {Promise} Promise object with updated project
   */
  updateProject: async (id, projectData) => {
    try {
      const response = await api.put(`/projects/${id}`, projectData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Delete a project
   * @param {string} id - Project ID
   * @returns {Promise} Promise object with deletion confirmation
   */
  deleteProject: async (id) => {
    try {
      const response = await api.delete(`/projects/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default projectService;