const express = require('express');
const path = require('path');
const portfinder = require('portfinder');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

if (require.main === module) {
    portfinder.getPort((err, port) => {
        if (err) {
            console.error('Could not get a free port', err);
            process.exit(1);
        }

        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    });
}

module.exports = app;