import express from 'express';
import Bookmark from '../models/Bookmark.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Get user's bookmarks
router.get('/', auth, async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({ user: req.user.userId })
      .populate('restaurant')
      .sort('-createdAt');
    res.json(bookmarks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookmarks' });
  }
});

// Add bookmark
router.post('/', auth, async (req, res) => {
  try {
    const { restaurantId } = req.body;
    
    const bookmark = new Bookmark({
      user: req.user.userId,
      restaurant: restaurantId
    });
    
    await bookmark.save();
    res.status(201).json(bookmark);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Restaurant already bookmarked' });
    }
    res.status(500).json({ message: 'Error creating bookmark' });
  }
});

// Remove bookmark
router.delete('/:restaurantId', auth, async (req, res) => {
  try {
    const bookmark = await Bookmark.findOneAndDelete({
      user: req.user.userId,
      restaurant: req.params.restaurantId
    });
    
    if (!bookmark) {
      return res.status(404).json({ message: 'Bookmark not found' });
    }
    
    res.json({ message: 'Bookmark removed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error removing bookmark' });
  }
});

export default router;