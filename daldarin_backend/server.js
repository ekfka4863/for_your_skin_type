const express = require('express');
const routes = require('./routes');
// const cors = require('./cors');
const cors = require('cors');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(routes);

const start = async () => {
	try {
		app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
	} catch (err) {
		console.error(err);
		await prisma.$disconnect();
	}
};

start();
