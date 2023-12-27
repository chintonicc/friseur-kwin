const express = require('express');
const db = require('./db.js');

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

app.post('/appointments', (req, res) => {
  const { date, time, name, email, phone, message } = req.body;
  db.run(`INSERT INTO appointments(date, time, name, email, phone, message) VALUES(?, ?, ?, ?, ?, ?)`, [date, time, name, email, phone, message], function(err) {
    if (err) {
      console.log(err.message);
      res.status(500).json({ success: false, error: err.message });
    } else {
        // get the last insert id
        console.log(`A row has been inserted with row id ${this.lastID}`);
        res.status(200).json({ success: true });
    }
  });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });