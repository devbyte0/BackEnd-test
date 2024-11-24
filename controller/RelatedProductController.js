const RelatedProduct = require('../models/RelatedProduct'); // Adjust the path if necessary

// Create a new related product entry
exports.createRelatedProduct = async (req, res) => {
    try {
        const relatedProduct = new RelatedProduct(req.body);
        await relatedProduct.save();
        res.status(201).json(relatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all related products
exports.getAllRelatedProducts = async (req, res) => {
    try {
        const relatedProducts = await RelatedProduct.find().populate('relatedProducts.productId');
        res.status(200).json(relatedProducts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific related product by ID
exports.getRelatedProductById = async (req, res) => {
    try {
        const relatedProduct = await RelatedProduct.findById(req.params.id).populate('relatedProducts.productId');
        if (!relatedProduct) return res.status(404).json({ message: 'Related Product not found' });
        res.status(200).json(relatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getRelatedProductsByProductId = async (req, res) => {
    try {
        // Find all related products that contain the specified productId in their relatedProducts array
        const relatedProducts = await RelatedProduct.find({
            'relatedProducts.productId': req.params.id
        }).populate('relatedProducts.productId');

        // Check if related products were found
        if (!relatedProducts.length) {
            return res.status(404).json({ message: 'No related products found for this product ID' });
        }

        // Respond with the array of related products
        res.status(200).json(relatedProducts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// Update a related product entry
exports.updateRelatedProduct = async (req, res) => {
    try {
        const updatedRelatedProduct = await RelatedProduct.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRelatedProduct) return res.status(404).json({ message: 'Related Product not found' });
        res.status(200).json(updatedRelatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a related product entry
exports.deleteRelatedProduct = async (req, res) => {
    try {
        const deletedRelatedProduct = await RelatedProduct.findByIdAndDelete(req.params.id);
        if (!deletedRelatedProduct) return res.status(404).json({ message: 'Related Product not found' });
        res.status(200).json({ message: 'Related Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
