var Item = require('../models/item');

module.exports = {
  index,
  create,
  show,
  update,
  delete: deleteOne,
};

async function index(req, res) {
  try{
      const items = await Item.find({});
      res.status(200).json(items);
  }
  catch(err){
      res.status(500).json(err);
  }
}

async function create(req, res) {
  console.log('user: ', req.user)
  try {
    const item = await Item.create(req.body);
    res.status(201).json(item);
  }
  catch(err){
    res.status(500).json(err);
  }
}

async function show(req, res) {
  try {
    const item = await Item.findById(req.params.id);
    res.status(200).json(item)
  }
  catch(err){
    res.status(500).json(err);
  }
}

async function update(req, res) {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(201).json(item)
  }
  catch(err){
    res.status(500).json(err);
  }
}

async function deleteOne(req, res) {
  try {
    const item = await Item.findOneAndDelete(req.params.id);
    res.status(201).json(item)
  }
  catch(err){
    res.status(500).json(err);
  }
}