const express = require('express');
const router = express.Router();

// Define admin credentials
const ADMIN_USERNAME = 'ADMINPOGI';
const ADMIN_PASSWORD = 'JuliusCastillo';

// Show the login form
router.get('/login', (req, res) => {
    res.render('login', { error: null }); // Pass error as null by default
});

// Handle the login form submission
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    const ADMIN_USERNAME = 'admin'; 
    const ADMIN_PASSWORD = 'password';

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        req.session.isAuthenticated = true;  // Set session if credentials are correct
        res.redirect('/admin/welcome');      // Redirect to the welcome page
    } else {
        res.render('login', { error: 'Invalid credentials, please try again.' });
    }
});



// Show the welcome page
router.get('/welcome', (req, res) => {
    if (req.session.isAuthenticated) { // Check if the user is authenticated
        res.render('welcome'); // Render the welcome page
    } else {
        res.redirect('/admin/login'); // Redirect to login if not authenticated
    }
});

// Show the dashboard page
router.get('/dashboard', (req, res) => {
    if (req.session.isAuthenticated) {
        res.render('dashboard'); // Render the dashboard page
    } else {
        res.redirect('/admin/login'); // Redirect to login if not authenticated
    }
});

// Show the controls page
router.get('/controls', (req, res) => {
    if (req.session.isAuthenticated) {
        res.render('controls'); // Render the controls page
    } else {
        res.redirect('/admin/login'); // Redirect to login if not authenticated
    }
});

// Handle logout
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.redirect('/admin/welcome'); // Redirect to welcome if error during logout
        }
        res.redirect('/admin/login'); // Redirect to login after logout
    });
});

module.exports = router;
