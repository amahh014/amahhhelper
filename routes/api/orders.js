const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Order = require('../../models/Order');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  Order.find()
    .sort({ date: -1 })
    .then(orders => res.json(orders));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Private
router.post('/', auth, (req, res) => {
  const newOrder = new Order({
    name: req.body.name,
    number: req.body.number,
    address: req.body.address,
    model: req.body.model
  });

  newOrder.save().then(order => res.json(order));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Private
router.delete('/:id', auth, (req, res) => {
  Order.findById(req.params.id)
    .then(order => order.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
