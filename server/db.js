const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./appointments.sqlite', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
});

db.run(`CREATE TABLE IF NOT EXISTS appointments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date text NOT NULL,
    time text NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    message text
    
)`, (err) => {
  if (err) {
    console.error(err.message);
  }
});

module.exports = db;