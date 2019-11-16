const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Place = require('../../models/Place');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  Place.find()
    .sort({ date: -1 })
    .then(places => res.json(places));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Private
router.post('/', auth, (req, res) => {
  const newPlace = new Place({
    name: req.body.name,
    number: req.body.number,
    address: req.body.address,
    comment: req.body.comment
  });

  newPlace.save().then(place => res.json(place));
});
 
// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Private
router.delete('/:id', auth, (req, res) => {
  Place.findById(req.params.id)
    .then(place => place.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
