import express from 'express';
import Restaurant from '../models/Restaurant.js';
import { auth, checkRole } from '../middleware/auth.js';

const router = express.Router();

// Get all restaurants with filters
router.get('/', async (req, res) => {
  try {
    const { category, search, priceRange, rating, near } = req.query;
    let query = {};

    if (category) {
      query.categories = category;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    if (priceRange) {
      query.priceRange = priceRange;
    }

    if (rating) {
      query.rating = { $gte: parseFloat(rating) };
    }

    if (near) {
      const [lng, lat] = near.split(',').map(Number);
      query.location = {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [lng, lat]
          },
          $maxDistance: 5000 // 5km
        }
      };
    }

    const restaurants = await Restaurant.find(query)
      .populate('categories')
      .populate('owner', 'username');

    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching restaurants' });
  }
});

// Create restaurant (owner only)
router.post('/', auth, checkRole(['owner']), async (req, res) => {
  try {
    const restaurant = new Restaurant({
      ...req.body,
      owner: req.user.userId
    });
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: 'Error creating restaurant' });
  }
});

// Get restaurant by ID
router.get('/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id)
      .populate('categories')
      .populate('owner', 'username');
    
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching restaurant' });
  }
});

// Update restaurant (owner only)
router.put('/:id', auth, checkRole(['owner']), async (req, res) => {
  try {
    const restaurant = await Restaurant.findOneAndUpdate(
      { _id: req.params.id, owner: req.user.userId },
      req.body,
      { new: true }
    );
    
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ message: 'Error updating restaurant' });
  }
});

// Delete restaurant (owner only)
router.delete('/:id', auth, checkRole(['owner']), async (req, res) => {
  try {
    const restaurant = await Restaurant.findOneAndDelete({
      _id: req.params.id,
      owner: req.user.userId
    });
    
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    
    res.json({ message: 'Restaurant deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting restaurant' });
  }
});

export default router;