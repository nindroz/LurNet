require("dotenv").config();
const express = require("express");
console.log("hey:" + process.env.AIRTABLE_ID);
const base = require("airtable").base(process.env.AIRTABLE_ID);
const app = express();

app.get("/", (req, res) => {
	return res.send("Received a GET HTTP method");
});

app.listen(3000, () => console.log(`Example app listening on port 3000!`));
