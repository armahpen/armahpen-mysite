const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Handle client-side routing - serve index.html for any non-API routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Static server running on port ${port}`);
    console.log(`Access your site at: http://localhost:${port}`);
});