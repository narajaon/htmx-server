const express = require("express");
const app = express();
const port = 3000;
const { mockMonths: months } = require("./mocks");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (_, res) => {
	res.render(__dirname + "/views/pages/home");
});

app.get("/schedule", (_, res) => {
	res.render(__dirname + "/views/pages/schedule", {
		months,
		currentDay: undefined,
	});
});

app.post("/currentDay", (_, res) => {
	res.render(__dirname + "/views/partials/scheduleHeader", {
		months,
		currentDay: req.query.value,
	});
});

// Start the server
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
