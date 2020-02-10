const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res, next) {
    res.sendfile(path.join(__dirname, '/build/index.html'));
})


app.listen(process.env.PORT || 8080);