const { productDao } = require('../models');

const getProducts = async sortMethod => {
	if (!sortMethod) {
		sortMethod = 0;
	}
	const products = await productDao.getProducts(sortMethod);
	return products;
};

module.exports = { getProducts };
