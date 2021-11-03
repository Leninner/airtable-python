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

deleteDuplicate(jobs.flat()).forEach((job, index) => {
  base('Hoja 1').create(job, function (err, record) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(record.getId(), index);
  });
});
