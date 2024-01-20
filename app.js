const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.render(__dirname + "/views/pages/home");
});

// Start the server
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
