const express = require('express');
const router = express.Router();
const memberRouter = require('./memberRouter');
const productRouter = require('./productRouter');

router.use('/member', memberRouter);
router.use('/products', productRouter);

module.exports = router;
