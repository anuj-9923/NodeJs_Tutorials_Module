// const http = require('http');

const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('In the middleware');
    next();
});
app.use((req, res, next) => {
    console.log('In the another middleware');
    res.send('<h1>Hello Express Js</h1>');

    // res.type({ key: value1 });
});


// const server = http.createServer(app);
// server.listen(4000);
app.listen(4000);