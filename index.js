const express = require('express');


const app = express();
require('./db');
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) =>{

    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('servidor rodando');
});