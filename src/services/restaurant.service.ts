import api from './api';

export interface RestaurantFilters {
  category?: string;
  search?: string;
  priceRange?: number;
  rating?: number;
  near?: string;
}

export const restaurantService = {
  getAll: async (filters: RestaurantFilters = {}) => {
    const response = await api.get('/restaurants', { params: filters });
    return response.data;
  },

  getById: async (id: string) => {
    const response = await api.get(`/restaurants/${id}`);
    return response.data;
  },

  create: async (data: any) => {
    const response = await api.post('/restaurants', data);
    return response.data;
  },

  update: async (id: string, data: any) => {
    const response = await api.put(`/restaurants/${id}`, data);
    return response.data;
  },

  delete: async (id: string) => {
    const response = await api.delete(`/restaurants/${id}`);
    return response.data;
  }
};