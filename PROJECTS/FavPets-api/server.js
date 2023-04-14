const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");

const usersRoutes = require("./users/usersRoute");
const petsRoutes = require("./pets/petsRoute");

dotenv.config("./.env");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/pets", petsRoutes);

app.route("/").get((_req, res) => {
	res.sendFile(`${process.cwd()}/index.html`);
});

const listener = app.listen(process.envPORT || 3000, (error) => {
	if (error) {
		return console.log("something bad happened", error);
	}
	console.log(`server is listening on ${listener.address().port}`);
});
