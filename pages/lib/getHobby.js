const Airtable = require('airtable');

const base = new Airtable({
  apiKey:process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base("appT0DFynWPgDDDxd");

const table = base("main");

export default async function getHobby() {
  const records = await table.select({}).all();

  console.log(records);

  return records;
}


