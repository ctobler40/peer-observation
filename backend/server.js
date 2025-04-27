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
  database: 'peer_evaluation'         // Name of the database
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
// Getting all people
app.get('/api/data/person', (req, res) => {
  const query = 'SELECT * FROM person'; 
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

// Getting all observations
app.get('/api/data/observation', (req, res) => {
  const query = 'SELECT * FROM observation'; 
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

// Getting all messages
app.get('/api/data/message', (req, res) => {
  const query = 'SELECT * FROM message'; 
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

// Getting all connects
app.get('/api/data/connect', (req, res) => {
  const query = 'SELECT * FROM connect'; 
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

// Getting all feedbacks
app.get('/api/data/feedback', (req, res) => {
  const query = 'SELECT * FROM feedback'; 
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

// Getting all observations for that specific person
app.get('/api/data/observation/:id', (req, res) => {
  const { id } = req.params;
  const query = 
  `
    select * from observation o
    inner join person p on o.person_id = p.id
    where p.id = ?;
  ` 
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

// Getting all messages between person1 and person2
app.get('/api/data/observation/:p1_id/:p2_id', (req, res) => {
  const { p1_id, p2_id } = req.params;
  const query = 
  `
    select * from message m
    inner join person p1 on m.sender_id = p1.id
    inner join person p2 on m.reciever_id = p2.id
    where p1.id = ? and p2.id = ?
    order by m.message_date desc;
  ` 
  db.query(query, [p1_id, p2_id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});
//#endregion

//#region ADD
// Adding person
app.post('/api/addPerson', (req, res) => {
  const { first_name, last_name, email, role_id } = req.body;
  const query = 'insert into person (first_name, last_name, email, role_id) VALUES (?, ?, ?, ?)';
  
  db.query(query, [first_name, last_name, email, role_id], (err, result) => {
    if (err) {
      console.error('Error executing query:', err); 
      return res.status(500).json({ error: err });
    }
    res.status(200).json({ message: 'Person added successfully', result });
  });
});

// Adding observation
app.post('/api/addObservation', (req, res) => {
  const { obs_date, person_id } = req.body;
  const query = 'insert into observation (obs_date, person_id) VALUES (?, ?)';
  
  db.query(query, [obs_date, person_id], (err, result) => {
    if (err) {
      console.error('Error executing query:', err); 
      return res.status(500).json({ error: err });
    }
    res.status(200).json({ message: 'Observation added successfully', result });
  });
});

// Adding message
app.post('/api/addMessage', (req, res) => {
  const { text_message, message_date, sender_id, reciever_id } = req.body;
  const query = 'insert into message (text_message, message_date, sender_id, reciever_id) VALUES (?, ?, ?, ?)';
  
  db.query(query, [text_message, message_date, sender_id, reciever_id], (err, result) => {
    if (err) {
      console.error('Error executing query:', err); 
      return res.status(500).json({ error: err });
    }
    res.status(200).json({ message: 'Message added successfully', result });
  });
});

// Adding connect
app.post('/api/addConnect', (req, res) => {
  const { connect_status, time_requested, person_id } = req.body;
  const query = 'insert into connect (connect_status, time_requested, person_id) VALUES (?, ?, ?)';
  
  db.query(query, [connect_status, time_requested, person_id], (err, result) => {
    if (err) {
      console.error('Error executing query:', err); 
      return res.status(500).json({ error: err });
    }
    res.status(200).json({ message: 'Connect added successfully', result });
  });
});

// Adding feedback
app.post('/api/addFeedback', (req, res) => {
  const { feedback, time_sent, person_id } = req.body;
  const query = 'insert into feedback (feedback, time_sent, person_id) VALUES (?, ?, ?)';
  
  db.query(query, [feedback, time_sent, person_id], (err, result) => {
    if (err) {
      console.error('Error executing query:', err); 
      return res.status(500).json({ error: err });
    }
    res.status(200).json({ message: 'Feedback added successfully', result });
  });
});
//#endregion

//#region UPDATE
// Updating person
app.put('/api/updatePerson/:id', (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, role_id } = req.body;
  const query = 'UPDATE person SET first_name = ?, last_name = ?, email = ?, role_id = ? WHERE id = ?';
  db.query(query, [first_name, last_name, email, role_id, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json({ message: 'Person updated successfully', result });
  });
});

// Updating observation
app.put('/api/updateObservation/:id', (req, res) => {
  const { id } = req.params;
  const { obs_date, person_id } = req.body;
  const query = 'UPDATE observation SET obs_date = ?, person_id = ? WHERE id = ?';
  db.query(query, [obs_date, person_id, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json({ message: 'Observation updated successfully', result });
  });
});

// Updating message
app.put('/api/updateMessage/:id', (req, res) => {
  const { id } = req.params;
  const { text_message, message_date, sender_id, reciever_id } = req.body;
  const query = 'UPDATE message SET text_message = ?, message_date = ?, sender_id = ?, reciever_id = ? WHERE id = ?';
  db.query(query, [text_message, message_date, sender_id, reciever_id, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json({ message: 'Message updated successfully', result });
  });
});

// Updating connect
app.put('/api/updateConnect/:id', (req, res) => {
  const { id } = req.params;
  const { connect_status, time_requested, person_id } = req.body;
  const query = 'UPDATE connect SET connect_status = ?, time_requested = ?, person_id = ? WHERE id = ?';
  db.query(query, [connect_status, time_requested, person_id, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json({ message: 'Connect updated successfully', result });
  });
});

// Updating feedback
app.put('/api/updateFeedback/:id', (req, res) => {
  const { id } = req.params;
  const { feedback, time_sent, person_id } = req.body;
  const query = 'UPDATE feedback SET feedback = ?, time_sent = ?, person_id = ? WHERE id = ?';
  db.query(query, [feedback, time_sent, person_id, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json({ message: 'Feedback updated successfully', result });
  });
});
//#endregion
// Deleting Person
app.delete('/api/deletePerson/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM person WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json({ message: 'Person deleted successfully', result });
  });
});

// Deleting Observation
app.delete('/api/deleteObservation/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM observation WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json({ message: 'Observation deleted successfully', result });
  });
});

// Deleting Message
app.delete('/api/deleteMessage/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM message WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json({ message: 'Message deleted successfully', result });
  });
});

// Deleting Connect
app.delete('/api/deleteConnect/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM connect WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json({ message: 'Connect deleted successfully', result });
  });
});

// Deleting Feedback
app.delete('/api/deleteFeedback/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM feedback WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json({ message: 'Feedback deleted successfully', result });
  });
});
//#region DELETE

//#endregion

const PORT = process.env.PORT || 6500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));