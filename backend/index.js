const express = require('express');
const path = require('path');
const port = 5000;
const app = express();
const iRoutes = require('./routes/internalRoutes');
const uRoutes = require('./routes/userRoutes');


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send("<h1>Go to HomePage</h1>")
});
app.use('/', iRoutes);
app.use('/user', uRoutes);


app.listen(port, () => console.log(`Open http://localhost:${port}/home`));
