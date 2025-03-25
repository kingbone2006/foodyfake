import express from 'express';
import Review from '../models/Review.js';
import Restaurant from '../models/Restaurant.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Get reviews for a restaurant
router.get('/restaurant/:restaurantId', async (req, res) => {
  try {
    const reviews = await Review.find({ restaurant: req.params.restaurantId })
      .populate('user', 'username avatarUrl')
      .sort('-createdAt');
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews' });
  }
});

// Create review
router.post('/', auth, async (req, res) => {
  try {
    const { restaurantId, rating, comment, images } = req.body;
    
    const review = new Review({
      restaurant: restaurantId,
      user: req.user.userId,
      rating,
      comment,
      images
    });
    
    await review.save();

    // Update restaurant rating
    const reviews = await Review.find({ restaurant: restaurantId });
    const avgRating = reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length;
    
    await Restaurant.findByIdAndUpdate(restaurantId, {
      rating: avgRating,
      reviewCount: reviews.length
    });

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: 'Error creating review' });
  }
});

// Update review
router.put('/:id', auth, async (req, res) => {
  try {
    const review = await Review.findOneAndUpdate(
      { _id: req.params.id, user: req.user.userId },
      req.body,
      { new: true }
    );
    
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    
    res.json(review);
  } catch (error) {
    res.status(500).json({ message: 'Error updating review' });
  }
});

// Delete review
router.delete('/:id', auth, async (req, res) => {
  try {
    const review = await Review.findOneAndDelete({
      _id: req.params.id,
      user: req.user.userId
    });
    
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    
    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting review' });
  }
});

// Like/unlike review
router.post('/:id/like', auth, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    
    const likeIndex = review.likes.indexOf(req.user.userId);
    
    if (likeIndex === -1) {
      review.likes.push(req.user.userId);
    } else {
      review.likes.splice(likeIndex, 1);
    }
    
    await review.save();
    res.json(review);
  } catch (error) {
    res.status(500).json({ message: 'Error updating review likes' });
  }
});

export default router;