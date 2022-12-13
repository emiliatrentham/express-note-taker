// server app
const express = require('express');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// Start server
const PORT = 8000;

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
