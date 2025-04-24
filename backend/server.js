const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',                  // Or your database host
  user: 'root',                       // Your MySQL username
  password: 'Could*Wrong*48',         // Your MySQL password
  database: 'peer_observation'         // Name of the database
});

// Test the connection
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

//#region GET

//#endregion

//#region ADD

//#endregion

//#region UPDATE

//#endregion

//#region DELETE

//#endregion

const PORT = process.env.PORT || 6500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));