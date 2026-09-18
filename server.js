import express from 'express';

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

const events = [
        { title: 'Event 1', body: 'go have dinner' },
        { title: 'Event 2', body: 'go have lunch' },
        { title: 'Event 3', body: 'go have breakfast' },
    ];

// app.get('/', (req, res) => {
//   res.send('Hello, web!');
// });

// app.get('/about-me', (req, res) => {
//     res.send('this is about me page');
// });

// app.get('/contact', (req, res) => {
//     res.send('this is contact page');
// });

// app.get('/experiences', (req, res) => {
//     res.send('this is experiences page');
// });

// const projects = [
//   { name: 'Weather app', tag: 'javascript' },
//   { name: 'Portfolio site', tag: 'express' },
//   { name: 'Budget tracker', tag: 'python' },
// ];

// app.get('/projects', (req, res) => {
//     const tag = req.query.tag;

//     if (tag !== undefined) {
//         const filteredProjects = projects.filter(
//             project => project.tag === tag
//         );
//         res.json(filteredProjects);
//     } else {
//         res.json([]);
//     }
// });



app.get('/', (req, res) => {
    res.render('events', { events });
});
app.get('/:id', (req, res) => {
  const id = req.params.id;
  const event = events[id];
  if (event) {
    res.render('events', { events: [event] });
  } else {
    res.status(404).send('Event not found');
  }
});

app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});