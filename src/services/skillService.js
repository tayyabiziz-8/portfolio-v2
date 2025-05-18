// src/services/skillService.js
import api from '../config/api';

const skillService = {
  /**
   * Get all skills
   * @returns {Promise} Promise object with skills data
   */
  getAllSkills: async () => {
    try {
      const response = await api.get('/skills');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Get a single skill by ID
   * @param {string} id - Skill ID
   * @returns {Promise} Promise object with skill data
   */
  getSkillById: async (id) => {
    try {
      const response = await api.get(`/skills/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Create a new skill
   * @param {Object} skillData - Skill data
   * @returns {Promise} Promise object with created skill
   */
  createSkill: async (skillData) => {
    try {
      const response = await api.post('/skills', skillData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Update a skill
   * @param {string} id - Skill ID
   * @param {Object} skillData - Updated skill data
   * @returns {Promise} Promise object with updated skill
   */
  updateSkill: async (id, skillData) => {
    try {
      const response = await api.put(`/skills/${id}`, skillData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Delete a skill
   * @param {string} id - Skill ID
   * @returns {Promise} Promise object with deletion confirmation
   */
  deleteSkill: async (id) => {
    try {
      const response = await api.delete(`/skills/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default skillService;