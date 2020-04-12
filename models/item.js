const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {type: String, required: true},
  quantity: {type: Number, required: true},
  perWeek: {type: Number, required: true},
  inStock: {type: Boolean, default: false}
}, {
  timestamps: true
});

module.exports = mongoose.model('Item', itemSchema);
