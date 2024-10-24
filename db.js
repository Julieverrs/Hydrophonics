const mysql = require('mysql2');

// Create a connection pool with your MySQL database credentials
const pool = mysql.createPool({
  host: 'localhost',         // Database host (usually 'localhost' for local development)
  user: 'root',              // Your MySQL username (default is usually 'root')
  password: '', // Your MySQL password (replace with your actual password)
  database: 'mydb',          // Your database name (replace 'mydb' with your actual database name)
  waitForConnections: true,  // Ensures that the pool waits for a connection if none are available
  connectionLimit: 10,       // Limits the number of simultaneous connections to the database
  queueLimit: 0              // Unlimited requests will be queued if no connection is available
});

// Export the connection pool as a promise-based object
module.exports = pool.promise();
