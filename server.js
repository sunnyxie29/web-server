import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, web!');
});

app.get('/about-me', (req, res) => {
    res.send('this is about me page');
});

app.get('/contact', (req, res) => {
    res.send('this is contact page');
});

app.get('/experiences', (req, res) => {
    res.send('this is experiences page');
});

const projects = [
  { name: 'Weather app', tag: 'javascript' },
  { name: 'Portfolio site', tag: 'express' },
  { name: 'Budget tracker', tag: 'python' },
];

app.get('/projects', (req, res) => {
    const tag = req.query.tag;
    //filter then
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});