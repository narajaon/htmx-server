const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
	console.log("/GET /");
	res.render(__dirname + "/views/pages/home", { body: "EJS" });
});

app.get("/test", (req, res) => {
	console.log("/GET /test");
	res.render(__dirname + "/views/body", { body: "Clicked" });
});

// Start the server
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
