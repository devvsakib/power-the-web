const bcryptjs = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

const createToken = (_id) => {
	return jwt.sign({ _id }, process.env.SECRET, {
		expiresIn: "3d",
	});
};

const getUsers = async (_req, res) => {
	try {
		const users = await prisma.User.findMany({
			select: {
				id: true,
				name: true,
				email: true,
				password: false,
				pets: true,
			},
		});
		return res.status(200).json(users);
	} catch (error) {
		return res.status(500).json({
			message: "Something went wrong",
			error: error.message,
		});
	}
};

const newUsers = async (req, res) => {
	const { name, email, password, confirmPassword } = req.body;
	if (!name || !email || !password || !confirmPassword) {
		return res.status(400).json({
			message: "Please fill all fields",
		});
	}
	if (!validator.isEmail(email)) {
		return res.status(400).json({
			message: "Please enter a valid email",
		});
	}
	if (!validator.isStrongPassword(password)) {
		return res.status(400).json({
			message:
				"Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character",
		});
	}
	if (password !== confirmPassword) {
		return res.status(400).json({
			message: "Passwords do not match",
		});
	}
	const user = await prisma.User.findUnique({
		where: {
			email,
		},
	});
	if (user) {
		return res.status(400).json({
			message: "Email already used",
		});
	}
	const hashedPassword = bcryptjs.hashSync(password, 10);
	try {
		const newUser = await prisma.User.create({
			data: {
				name,
				email,
				password: hashedPassword,
			},
		});
		const token = createToken(newUser._id);
		return res.status(201).json({ name, email, token });
	} catch (error) {
		return res.status(500).json({
			message: "Something went wrong",
			error: error.message,
		});
	}
};

const signinUsers = async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.status(400).json({
			message: "Please fill all fields",
		});
	}
	if (!validator.isEmail(email)) {
		return res.status(400).json({
			message: "Please enter a valid email",
		});
	}
	const user = await prisma.User.findUnique({
		where: {
			email,
		},
	});
	if (!user) {
		return res.status(400).json({
			message: "Invalid credentials",
		});
	}
	const passwordMatch = bcryptjs.compareSync(password, user.password);
	if (!passwordMatch) {
		return res.status(400).json({
			message: "Invalid credentials",
		});
	}
	try {
		const token = createToken(user._id);
		const { id, name } = user;
		return res.status(200).json({ id, name, email, token });
	} catch (error) {
		return res.status(500).json({
			message: "Something went wrong",
			error: error.message,
		});
	}
};

module.exports = { getUsers, newUsers, signinUsers };
