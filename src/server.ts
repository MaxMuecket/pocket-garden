import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import path from 'path';

const { PORT = 3000 } = process.env;

const app = express();

// Serve storybook production bundle
app.use('/storybook', express.static('dist/storybook'));

// Serve app production bundle
app.use(express.static('dist/app'));

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

// Handle client routing, return all requests to the app
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
