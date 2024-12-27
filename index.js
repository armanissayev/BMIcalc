const express = require('express');
const path = require('path');
const bmiRoutes = require('./routes/bmiRoutes');

const app = express();
const port = 3000;

app.use(express.json());

// Route for serving the index.html page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html')); // Send the HTML file when visiting the root URL
});

// Use the BMI routes for calculation
app.use('/bmicalculator', bmiRoutes);

// Listen on the defined port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
