const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'Text/plain'
    });
    res.write('Anuj Kumar');
    res.end();
})
server.listen(4000, '127.0.0.1', () => {
    console.log("port 4000 is running");
});

server.listen(4000);
