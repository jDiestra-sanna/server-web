const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.get('/index.html', (req, res) => {
    res.redirect('/')
})
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

const port = 8200;

app.listen(port, () => {
    console.log('server listen on port 8200');
})