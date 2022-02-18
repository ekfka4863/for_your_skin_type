const { memberService } = require('../services');

const signUp = async (req, res) => {
	try {
		const { email, password, full_name, birthday, phone_number, gender } = req.body;
		const REQUIRED_KEYS = {
			email,
			password,
			full_name,
			birthday,
			phone_number,
			gender,
		};

		for (key in REQUIRED_KEYS) {
			if (!REQUIRED_KEYS[key]) {
				res.status(400).json({ message: 'INVALID REQUEST: incomplete fields' });
			}
		}

		await memberService.signUp(REQUIRED_KEYS);
		return res.status(200).json({ message: 'GOOD JOB: signup successful' });
	} catch (error) {
		return res.status(error.statusCode || 500).json({ message: error.message });
	}
};

module.exports = { signUp };
