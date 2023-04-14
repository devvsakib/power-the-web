const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const newPet = async (req, res) => {
	const { src, name, age, type, breed, description, owner } = req.body;

	const height = Math.floor(Math.random() * 2) + 1;
	const width = height === 1 ? 3 : 4;

	if (src === "" || src === undefined || src === null) {
		if (
			src !== ".jpg" ||
			src !== ".png" ||
			src !== ".jpeg" ||
			src !== ".gif" ||
			src !== ".svg"
		) {
			return res.status(400).json({
				message: "Image must be a valid image",
			});
		}
		return res.status(400).json({
			message: "Image is required",
		});
	}

	if (!src || !height || !width || !name || !age || !type || !breed || !description) {
		return res.status(400).json({
			message: "Please fill all fields",
		});
	}

	try {
		const newPet = await prisma.Pet.create({
			data: {
				src,
				height: height,
				width: width,
				name,
				age,
				type,
				breed,
				description,
				owner: {
					connect: {
						id: owner,
					},
				},
			},
		});
		res.status(200).json(newPet);
	} catch (error) {
		res.status(500).json({
			message: "Something went wrong",
			error: error.message,
		});
	}
};

const getPets = async (_req, res) => {
	try {
		const pets = await prisma.Pet.findMany({
			orderBy: {
				createdAt: "desc",
			},
		});
		res.status(200).json(pets);
	} catch (error) {
		res.status(500).json({
			message: "Something went wrong",
			error: error.message,
		});
	}
};

const getPetByUserId = async (req, res) => {
	const { id } = req.params;

	if (!id) {
		return res.status(400).json({
			message: "User not found",
		});
	}

	try {
		const pets = await prisma.Pet.findMany({
			where: {
				ownerId: id,
			},
			orderBy: {
				createdAt: "desc",
			},
		});
		res.status(200).json(pets);
	} catch (error) {
		res.status(500).json({
			message: "Something went wrong",
			error: error.message,
		});
	}
};

const deletePetById = async (req, res) => {
	const { id } = req.params;

	if (!id) {
		return res.status(400).json({
			message: "Pet not found",
		});
	}

	try {
		const pet = await prisma.Pet.delete({
			where: {
				id,
			},
		});
		res.status(200).json(pet);
	} catch (error) {
		res.status(500).json({
			message: "Something went wrong",
			error: error.message,
		});
	}
};

const getPetById = async (req, res) => {
	const { id } = req.params;

	if (!id) {
		return res.status(400).json({
			message: "Pet not found",
		});
	}

	try {
		const pet = await prisma.Pet.findUnique({
			where: {
				id,
			},
		});
		res.status(200).json(pet);
	} catch (error) {
		res.status(500).json({
			message: "Something went wrong",
			error: error.message,
		});
	}
};

const updatePetById = async (req, res) => {
	const { id } = req.params;
	const { src, name, age, type, breed, description } = req.body;

	if (!id) {
		return res.status(400).json({
			message: "Pet not found",
		});
	}

	try {
		const pet = await prisma.Pet.update({
			where: {
				id: id,
			},
			data: {
				src,
				name,
				age,
				type,
				breed,
				description,
			},
		});
		res.status(200).json(pet);
	} catch (error) {
		res.status(500).json({
			message: "Something went wrong",
			error: error.message,
		});
	}
};

module.exports = { newPet, getPets, deletePetById, getPetById, updatePetById, getPetByUserId };
