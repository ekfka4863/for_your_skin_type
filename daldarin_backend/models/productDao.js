const prisma = require('./index');

const getProducts = async sortMethod => {
	return await prisma.$queryRaw`
  SELECT
    id,
    name,
    details,
    image_url,
    original_price,
    discount_rate,
    stock_quantity,
    created_at
  FROM
    products
  ORDER BY
    case WHEN ${sortMethod} = 0 then created_at end ASC,
    case WHEN ${sortMethod} = 1 then original_price end ASC,
    case WHEN ${sortMethod} = 2 then original_price end DESC;
  `;
};

module.exports = { getProducts };
