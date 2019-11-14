const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Call Model - ელოდება ზარს
const Call = require('../../models/Call');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  Call.find()
    .sort({ date: -1 })
    .then(calls => res.json(calls));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Private
router.post('/', auth, (req, res) => {
  const newCall = new Call({
    name: req.body.name,
    comment: req.body.comment
  });

  newCall.save().then(call => res.json(call));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Private
router.delete('/:id', auth, (req, res) => {
  Call.findById(req.params.id)
    .then(call => call.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
