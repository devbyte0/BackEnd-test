// models/Color.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colorSchema = new Schema({
  name: { type: String, required: true, unique: true },
  hexCode: { type: String, required: true, unique: true }
}, { timestamps: true });

const Color = mongoose.model('Color', colorSchema);

module.exports = Color;
