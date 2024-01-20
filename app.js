const express = require("express");
const app = express();
const port = 3000;
const { mockMonths: months } = require("./mocks");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (_, res) => {
	res.render(__dirname + "/views/pages/home", {
		head: { title: "home page" },
	});
});

app.get("/schedule", (req, res) => {
	res.render(__dirname + "/views/pages/schedule", {
		months,
		currentDay: req.query.currentDay,
		head: { title: "schedule page" },
	});
});

// Start the server
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
