const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let milestones = [];

app.get('/milestones', (req, res) => res.json(milestones));

app.post('/milestones', (req, res) => {
  const { title, category } = req.body;
  if (!title || title.length < 3) {
    return res.status(400).json({ message: 'Title must be at least 3 characters' });
  }
  const newMilestone = { id: Date.now(), title, category };
  milestones.push(newMilestone);
  res.status(201).json(newMilestone);
});

app.listen(5000, () => console.log('Backend running on http://localhost:5000'));
