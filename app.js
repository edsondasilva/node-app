const express = require('express');
 
const app = express();

app.get('/', function (req, res) {
    res.send("************ Hello Wolrd Jenkins 2019 ***************");
});

app.listen(3000, function () {
    console.log('Server running...');
});

