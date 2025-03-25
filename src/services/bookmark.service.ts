import api from './api';

export const bookmarkService = {
  getAll: async () => {
    const response = await api.get('/bookmarks');
    return response.data;
  },

  add: async (restaurantId: string) => {
    const response = await api.post('/bookmarks', { restaurantId });
    return response.data;
  },

  remove: async (restaurantId: string) => {
    const response = await api.delete(`/bookmarks/${restaurantId}`);
    return response.data;
  }
};