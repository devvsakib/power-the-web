const express = require("express");
const router = express.Router();
const usersControllerPrisma = require("./usersControllerPrisma");
const requireAuth = require("../middleware/requireAuth");

router.get("/", requireAuth, usersControllerPrisma.getUsers);
router.post("/signup", usersControllerPrisma.newUsers);
router.post("/signin", usersControllerPrisma.signinUsers);
router.all("/", (_req, res, _next) => {
	res.status(405).json({
		message: "Method not allowed",
	});
});

module.exports = router;
