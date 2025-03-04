const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const users = [];
app.use(express.json());
app.set('view engine', 'ejs');

app.post('/users', (req, res) => {
    console.log(req.body)
    const user = req.body;
    users.push(user);
    res.status(201).send(user);
});

app.get('/users', async (req, res) => {
    try {
        res.render('users', { users });
    } catch (error) {
        res.status(500).send('Error fetching users');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});