const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

const requireAuth = async (req, res, next) => {
	const { authorization } = req.headers;

	if (!authorization) {
		return res.status(401).json({
			message: "Authorization is required.",
		});
	}
	const token = authorization.split(" ")[1];

	try {
		const { _id } = jwt.verify(token, process.env.SECRET);
		req.user = await prisma.User.findFirst({ where: { _id } });
		next();
	} catch (error) {
		return res.status(401).json({
			message: "Request is not authorization.",
		});
	}
};

module.exports = requireAuth;
