const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {type: String, required: true},
  size: {type: String, required: true},
  quantity: {type: Number, required: true},
  householdSize: {type: Number, default: 2.6},
  inStock: {type: Boolean, default: true}
}, {
  timestamps: true
});

module.exports = mongoose.model('Item', itemSchema);
