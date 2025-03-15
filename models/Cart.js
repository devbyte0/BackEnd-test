const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Cart Item Schema
const cartItemSchema = new Schema({
  variantId: {
    type: Schema.Types.ObjectId,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
  discountApplied: {
    type: Number,
    default: 0, // Store the discount amount applied to this item
  },
  name: {
    type: String,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  price: {
    type: Number,
  },
  mainImage: {
    type: String,
  },
  size: {
    type: String,
  },
  color: {
    type: String,
  },
});

// Cart Schema
const cartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  items: [cartItemSchema],
  totalAmount: {
    type: Number,
    default: 0,
  },
  discountAmount: {
    type: Number,
    default: 0,
  },
  couponId: {
    type: Schema.Types.ObjectId,
    ref: 'Coupon',
    default: null,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;