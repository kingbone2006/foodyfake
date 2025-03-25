import api from './api';

export interface ReviewData {
  restaurantId: string;
  rating: number;
  comment: string;
  images?: string[];
}

export const reviewService = {
  getByRestaurant: async (restaurantId: string) => {
    const response = await api.get(`/reviews/restaurant/${restaurantId}`);
    return response.data;
  },

  create: async (data: ReviewData) => {
    const response = await api.post('/reviews', data);
    return response.data;
  },

  update: async (id: string, data: Partial<ReviewData>) => {
    const response = await api.put(`/reviews/${id}`, data);
    return response.data;
  },

  delete: async (id: string) => {
    const response = await api.delete(`/reviews/${id}`);
    return response.data;
  },

  toggleLike: async (id: string) => {
    const response = await api.post(`/reviews/${id}/like`);
    return response.data;
  }
};