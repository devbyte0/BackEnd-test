const mongoose = require('mongoose');
const { Schema } = mongoose;

const relatedProductsSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: { type: String, required: true },
    mainPrice: { type: Number },
    discountPrice: { type: Number },
    mainBadgeName: { type: String },
    mainBadgeColor: { type: String },
    mainImage: { type: String, required: true }
}, { timestamps: true });

const relatedProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    relatedProducts: [relatedProductsSchema]
}, { timestamps: true });

module.exports = mongoose.model("RelatedProduct", relatedProductSchema);
