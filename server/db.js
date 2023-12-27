/**
 * @fileoverview This file contains the database configuration and table creation for appointments.
 * @module db
 */

const sqlite3 = require('sqlite3').verbose();

/**
 * Represents the SQLite database connection.
 * @type {sqlite3.Database}
 */
let db = new sqlite3.Database('./appointments.sqlite', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
});

/**
 * Creates the appointments table if it does not exist.
 * @param {Error} err - The error object, if any.
 */
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