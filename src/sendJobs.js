const Airtable = require('airtable');
const base = new Airtable({ apiKey: 'key6tZIQa1Dih72xX' }).base('app5fCgRbl0Uk9ToJ');

// NOTE: Método muchísimo más veloz para añadir empleos a Airtable

let jobs = [];

const deleteDuplicate = (jobs) => {
  let filteredJobs = [];

  let stringObjects = jobs.map((job) => JSON.stringify(job));

  stringObjects.forEach((value) => {
    if (filteredJobs.indexOf(value) === -1) {
      filteredJobs.push(value);
    }
  });

  return filteredJobs.map((job) => JSON.parse(job));
};

deleteDuplicate(jobs).forEach((job, index) => {
  base('Hoja 1').create(job, function (err, record) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(record.getId(), index);
  });
});
