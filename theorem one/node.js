'use strict';

const express = require('express');
const app = express();
app.use(express.json());

// In-memory data store for candidates
const candidates = [];

app.post('/candidates', function(req, res) {
  const candidate = req.body;
  if (!candidate || !candidate.name || !candidate.id) {
    return res.status(400).json({ error: 'Invalid candidate data' });
  }

  candidates.push(candidate);
  res.status(200).send();
});


// Search for candidates
app.get('/candidates/search', function (req, res) {
  const requestedSkills = req.query.skills; // Comma-separated list of requested skills
  if (!requestedSkills) {
    return res.status(400).json({ error: 'Skills parameter is missing' });
  }

  // Split the requested skills into an array
  const requestedSkillsArray = requestedSkills.split(',').map(skill => skill.trim());

  if (requestedSkillsArray.length === 0) {
    return res.status(400).json({ error: 'No skills provided' });
  }

  let bestCandidate = null;
  let bestMatchCount = 0;

  candidates.forEach(candidate => {
    const candidateSkills = candidate.skills;
    const matchingSkills = requestedSkillsArray.filter(skill =>
      candidateSkills.includes(skill)
    );

    if (matchingSkills.length > bestMatchCount) {
      bestCandidate = candidate;
      bestMatchCount = matchingSkills.length;
    }
  });

  if (bestCandidate) {
    res.status(200).json(bestCandidate);
  } else {
    res.status(404).send();
  }
});

app.listen(process.env.HTTP_PORT || 3000);
