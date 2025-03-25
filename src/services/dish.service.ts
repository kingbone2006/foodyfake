import api from './api';

export interface DishData {
  restaurant: string;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  category?: string;
  isAvailable?: boolean;
}

export const dishService = {
  getByRestaurant: async (restaurantId: string) => {
    const response = await api.get(`/dishes/restaurant/${restaurantId}`);
    return response.data;
  },

  create: async (data: DishData) => {
    const response = await api.post('/dishes', data);
    return response.data;
  },

  update: async (id: string, data: Partial<DishData>) => {
    const response = await api.put(`/dishes/${id}`, data);
    return response.data;
  },

  delete: async (id: string) => {
    const response = await api.delete(`/dishes/${id}`);
    return response.data;
  }
};