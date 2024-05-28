const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const routes = require("./routers/main");

// Define the path to your static files
const static_path = path.join(__dirname, "../public");

// Serve static files from the public directory
app.use(express.static(static_path));

// Use the router
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is connected ${PORT}`);
});