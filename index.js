const express = require('express');
const app = express();
const port = 3000;

// Routes
app.get('/', (req, res) => {
    res.send('This is our first endpoint!')
});

app.get('/bmicalculator', (req, res) => {
    res.sendFile('src/index.html', { root: __dirname }, function(err) {
        if (err) {
            console.error('Error sending file:', err);
        } else {
            console.log('Sent: index.html');
        }
    });
});

app.post('/bmicalculator', (req, res) => {

});



// Listen
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
