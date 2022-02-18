const { productService } = require('../services');

const getProducts = async (req, res) => {
	try {
		let { sortMethod } = req.query;
		const products = await productService.getProducts(+sortMethod);
		res.status(200).send(products);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

module.exports = { getProducts };
