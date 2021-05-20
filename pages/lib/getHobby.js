const Airtable = require('airtable');

const base = new Airtable({
  apiKey:process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base("appT0DFynWPgDDDxd");

const table = base("main");

// maps over the records, calling minifyRecord, giving us required data
const getMinifiedRecords = records => {
  return records.map(record => minifyRecord(record));
};

// gets the data we want and puts it into variables
const minifyRecord = record => {
  return {
    id: record.id,
    fields: record.fields,
  };
};


export default async function getHobby(name) {
  const records = await table.select({
    maxRecords: 1, 
    filterByFormula: `Name = "${name}"`
  }).all()
  const minifiedRecords = getMinifiedRecords(records);

  return minifiedRecords;
}


