import path from 'path';
import express from 'express';

import React from 'react';
import ReactServer from 'react-dom/server';
import HelloWorld from './HelloWorld';
import fs from 'fs';

const app = express();

app.use('/static', express.static(path.resolve(__dirname, '../dist')))

app.get('*', (req, res) => {
  const html = fs.readFileSync(path.resolve(__dirname, './index.html')).toString();
  const markUp = ReactServer.renderToString(<HelloWorld />);
  res.send(html.replace('$react', markUp));
});

app.listen(3000, () => {
  console.log('React app is listening on port 3000')
});
