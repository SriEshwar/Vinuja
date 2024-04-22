const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    const { username, password, mobile, email } = req.body;
    console.log("Received data:");
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Mobile Number:", mobile);
    console.log("Email:", email);
    res.send('Data received successfully!');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



