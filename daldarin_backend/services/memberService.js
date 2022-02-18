const { hashPassword } = require('../middlewares/auth');
const { memberDao } = require('../models');

const signUp = async REQUIRED_KEYS => {
	const { email, password } = REQUIRED_KEYS;
	const user = await memberDao.getUserByEmail(email);

	if (user) {
		const error = new Error('INVALID REQUEST: email already registered');
		error.statusCode = 400;
		throw error;
	} else {
		const hashedPassword = await hashPassword(password);
		memberDao.createUser({ ...REQUIRED_KEYS, password: hashedPassword });
	}
};

module.exports = { signUp };
