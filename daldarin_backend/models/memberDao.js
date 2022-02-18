const prisma = require('./index');

const getUserByEmail = async email => {
	const [user] = await prisma.$queryRaw`SELECT id FROM users WHERE email = ${email};`;
	return user;
};

const createUser = async REQUIRED_KEYS => {
	const { email, password, full_name, birthday, phone_number, gender } = REQUIRED_KEYS;

	const createUserData = await prisma.$queryRaw`
    INSERT INTO users( email, password, full_name, birthday, phone_number, gender ) 
    VALUES( ${email}, ${password}, ${full_name}, ${birthday}, ${phone_number}, ${gender} )
  `;
	return createUserData;
};

module.exports = { getUserByEmail, createUser };
