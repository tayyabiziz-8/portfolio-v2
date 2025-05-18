// src/services/experienceService.js
import api from '../config/api';

const experienceService = {
  /**
   * Get all experience entries
   * @returns {Promise} Promise object with experience data
   */
  getAllExperience: async () => {
    try {
      const response = await api.get('/experience');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Get a single experience entry by ID
   * @param {string} id - Experience ID
   * @returns {Promise} Promise object with experience data
   */
  getExperienceById: async (id) => {
    try {
      const response = await api.get(`/experience/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Create a new experience entry
   * @param {Object} experienceData - Experience data
   * @returns {Promise} Promise object with created experience entry
   */
  createExperience: async (experienceData) => {
    try {
      const response = await api.post('/experience', experienceData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Update an experience entry
   * @param {string} id - Experience ID
   * @param {Object} experienceData - Updated experience data
   * @returns {Promise} Promise object with updated experience entry
   */
  updateExperience: async (id, experienceData) => {
    try {
      const response = await api.put(`/experience/${id}`, experienceData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Delete an experience entry
   * @param {string} id - Experience ID
   * @returns {Promise} Promise object with deletion confirmation
   */
  deleteExperience: async (id) => {
    try {
      const response = await api.delete(`/experience/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default experienceService;