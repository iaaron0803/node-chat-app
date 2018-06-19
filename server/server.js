const path = require('path');
const express = require('express');

const port = process.env.PORT || 8080;
const ip = process.env.IP;
const publicPath = path.join(__dirname, '../public');
var app = express();
app.use(express.static(publicPath));

app.get('/', (req, res)=>{
    res.render('index');
});

app.listen(port, ip, ()=>{
    console.log(`Started on port ${process.env.PORT} `);
})
