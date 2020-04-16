var User = require('../models/user');

module.exports = {
  index,
  create,
  update,
  delete: deleteOne,
};

async function index(req, res) {
  const user = await User.findById(req.user._id);
  res.status(200).json(user.inventory);
}

async function create(req, res) {
  const user = await User.findById(req.user._id);
  req.body.owner = req.user.name;
  user.inventory.push(req.body);
  user.save(function(err) {
      res.status(201).json(user.inventory);
  })
}

async function update(req, res) {
  const user = await User.findById(req.user._id);
  let itemToUpdate = user.inventory.splice(req.params.idx, 1, req.body);
  user.save(function(err) {
      res.status(200).json(user.inventory[req.params.idx])
  })
}

async function deleteOne(req, res) {
  const user = await User.findById(req.user._id);
  let deletedItem = user.inventory.splice(req.params.idx, 1);
  user.save(function(err) {
      res.status(200).json(deletedItem);
  })
}
