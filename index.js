import express from 'express';

const app = new express();
const port = 3000;

app.get('/ping/:name', function (req, res) {
    res.send('Hello ' + req.params.name);
  })

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});

