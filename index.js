const express = require('express');
const path = require('path');
const port = 5000;
const app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});


app.listen(port, () => console.log(`Open http://localhost:${port}`));

