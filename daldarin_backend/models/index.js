const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = prisma;

const memberDao = require('./memberDao');
const productDao = require('./productDao');

module.exports = { memberDao, productDao };
