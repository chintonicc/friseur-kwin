/**
 * Express server for handling appointments.
 */

const express = require('express');
const db = require('./db.js');

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

/**
 * Endpoint for creating a new appointment.
 * @name POST /appointments
 * @param {Object} req - The request object.
 * @param {Object} req.body - The request body containing appointment details.
 * @param {string} req.body.date - The date of the appointment.
 * @param {string} req.body.time - The time of the appointment.
 * @param {string} req.body.name - The name of the person making the appointment.
 * @param {string} req.body.email - The email of the person making the appointment.
 * @param {string} req.body.phone - The phone number of the person making the appointment.
 * @param {string} req.body.message - Additional message for the appointment.
 * @param {Object} res - The response object.
 * @returns {Object} The response object indicating the success of the operation.
 */
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

/**
 * Endpoint for retrieving appointments for a specific date.
 * @name GET /appointments/:date
 * @param {Object} req - The request object.
 * @param {string} req.params.date - The date for which to retrieve appointments.
 * @param {Object} res - The response object.
 * @returns {Object} The response object containing the success status and the retrieved appointments.
 */
app.get('/appointments/:date', (req, res) => {
  const date = req.params.date;

  db.all('SELECT time FROM appointments WHERE date = ? ORDER BY time ASC', [date], (err, rows) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({ success: false, error: err.message });
    } else {
      res.status(200).json({ success: true, data: rows });
    }
  });
});

/**
 * Start the server on port 5000.
 */
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
