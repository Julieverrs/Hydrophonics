const express = require('express');
const router = express.Router();
const db = require('../db');

// Render the homepage
router.get('/', (req, res) => {
  res.render('index');
});

// View all registered users
router.get('/users', async (req, res) => {
  try {
    const [users] = await db.execute('SELECT * FROM users');  // Fetch users from the database
    res.render('users', { users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Error retrieving users');
  }
});

module.exports = router;
