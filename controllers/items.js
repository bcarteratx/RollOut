var Item = require('../models/item');

module.exports = {
  index,
  create
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
