import express from 'express';
import Dish from '../models/Dish.js';
import { auth, checkRole } from '../middleware/auth.js';

const router = express.Router();

// Get dishes for a restaurant
router.get('/restaurant/:restaurantId', async (req, res) => {
  try {
    const dishes = await Dish.find({ restaurant: req.params.restaurantId })
      .populate('category')
      .sort('name');
    res.json(dishes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dishes' });
  }
});

// Create dish (owner only)
router.post('/', auth, checkRole(['owner']), async (req, res) => {
  try {
    const dish = new Dish(req.body);
    await dish.save();
    res.status(201).json(dish);
  } catch (error) {
    res.status(500).json({ message: 'Error creating dish' });
  }
});

// Update dish (owner only)
router.put('/:id', auth, checkRole(['owner']), async (req, res) => {
  try {
    const dish = await Dish.findByIdAndUpdate(req.params.id, req.body, { new: true });
    
    if (!dish) {
      return res.status(404).json({ message: 'Dish not found' });
    }
    
    res.json(dish);
  } catch (error) {
    res.status(500).json({ message: 'Error updating dish' });
  }
});

// Delete dish (owner only)
router.delete('/:id', auth, checkRole(['owner']), async (req, res) => {
  try {
    const dish = await Dish.findByIdAndDelete(req.params.id);
    
    if (!dish) {
      return res.status(404).json({ message: 'Dish not found' });
    }
    
    res.json({ message: 'Dish deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting dish' });
  }
});

export default router;