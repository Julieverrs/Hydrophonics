const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session'); // Include express-session
const adminRoutes = require('./routes/admin'); // Import admin routes
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from 'public' folder
app.use(session({
    secret: 'your_secret_key', // Replace with your own secret
    resave: false,
    saveUninitialized: true
})); // Set up session middleware

app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', path.join(__dirname, 'views')); // Set the views directory

// Routes
app.use('/admin', adminRoutes); // Use the admin routes

// Redirect to login page at root
app.get('/', (req, res) => {
    res.redirect('/admin/login'); // Redirect to the login page
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
