require("dotenv").config();
const express = require("express");
console.log("hey:" + process.env.AIRTABLE_ID);
const base = require("airtable").base(process.env.AIRTABLE_ID);
const app = express();

app.get("/", (req, res) => {
	return res.send("Received a GET HTTP method");
});

app.get("/records", (req, res) => {
	base("Table 1")
		.select({
			// Selecting the first 3 records in Grid view:
			maxRecords: 3,
			view: "Grid view",
		})
		.eachPage(function page(records, fetchNextPage) {
			// This function (`page`) will get called for each page of records.

			records.forEach(function (record) {
				console.log("Retrieved", record.get("Content"));
			});

			// To fetch the next page of records, call `fetchNextPage`.
			// If there are more records, `page` will get called again.
			// If there are no more records, `done` will get called.
			fetchNextPage();
		});
});

app.listen(3000, () => console.log(`Example app listening on port 3000!`));
