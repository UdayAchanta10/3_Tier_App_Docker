const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'example',
  database: 'testdb'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

app.get('/', (req, res) => {
  db.query('SELECT * FROM test_table', (err, result) => {
    if (err) {
      res.status(500).send('Error querying the database');
      return;
    }
    res.send(`Data: ${JSON.stringify(result)}`);
  });
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
