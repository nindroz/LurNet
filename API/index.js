const express = require("express");

const app = express();

app.get("/", (req, res) => {
	return res.send("Received a GET HTTP method");
});

app.listen(3000, () => console.log(`Example app listening on port 3000!`));
