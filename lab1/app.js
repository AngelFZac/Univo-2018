'use strict';

// [START app]
const express = require ('express');
const app = express ();

app.get('/', function(req, res) {
  res.sendFile('index.html', {root: __dirname});
});

// START the server 
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log('App listening on port ${PORT}');
  console.log('Press Ctrl+C to quit.');
});
// [END app]
