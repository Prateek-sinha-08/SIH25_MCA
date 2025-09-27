const express = require('express');
const router = express.Router();

// @route   GET /api/users
// @desc    Get all users
// @access  Private
router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Get all users endpoint',
    status: 'Not implemented yet'
  });
});

// @route   GET /api/users/:id
// @desc    Get user by ID
// @access  Private
router.get('/:id', (req, res) => {
  res.status(200).json({
    message: 'Get user by ID endpoint',
    status: 'Not implemented yet',
    userId: req.params.id
  });
});

module.exports = router;