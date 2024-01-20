const express = require("express");
const app = express();
const port = 3000;
const { mockMonths: months } = require("./mocks");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.render(__dirname + "/views/pages/home");
});

app.get("/schedule", (req, res) => {
	res.render(__dirname + "/views/pages/schedule", {
		months,
	});
});

// Start the server
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
