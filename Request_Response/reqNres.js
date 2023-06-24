const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    const url = req.url;
    if (url === '/home') {
        res.write('<html>');
        res.write('<head><title>home</title><head>');
        res.write('<body><form action="/home" method="POST"><p> Welcome home</p> </body>');
        res.write('</html>');
        res.end();
    } else if (url === '/about') {
        res.write('<html>');
        res.write('<head><title>about</title><head>');
        res.write('<body><form action="/about" method="POST"><p> Welcome to my about us page</p> </body>');
        res.write('</html>');
        res.end();
    } else if (url === '/node') {
        res.write('<html>');
        res.write('<head><title>node</title><head>');
        res.write('<body><form action="/node" method="POST"><p> Welcome to my node.js Project</p> </body>');
        res.write('</html>');
        res.end();
    } else {
        res.write('<html>');
        res.write('<head><title>Default Page</title><head>');
        res.write('<body><p> Welcome to my Text</p> </body>');
        res.write('</html>');
        res.end();
    }


});
server.listen(4000);