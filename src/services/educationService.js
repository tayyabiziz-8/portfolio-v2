// src/services/educationService.js
import api from '../config/api';

const educationService = {
  /**
   * Get all education entries
   * @returns {Promise} Promise object with education data
   */
  getAllEducation: async () => {
    try {
      const response = await api.get('/education');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Get a single education entry by ID
   * @param {string} id - Education ID
   * @returns {Promise} Promise object with education data
   */
  getEducationById: async (id) => {
    try {
      const response = await api.get(`/education/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Create a new education entry
   * @param {Object} educationData - Education data
   * @returns {Promise} Promise object with created education entry
   */
  createEducation: async (educationData) => {
    try {
      const response = await api.post('/education', educationData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Update an education entry
   * @param {string} id - Education ID
   * @param {Object} educationData - Updated education data
   * @returns {Promise} Promise object with updated education entry
   */
  updateEducation: async (id, educationData) => {
    try {
      const response = await api.put(`/education/${id}`, educationData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Delete an education entry
   * @param {string} id - Education ID
   * @returns {Promise} Promise object with deletion confirmation
   */
  deleteEducation: async (id) => {
    try {
      const response = await api.delete(`/education/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default educationService;