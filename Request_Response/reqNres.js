const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    const url = req.url;
    const method = req.method;
    const data = fs.readFileSync('message.txt');

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body>' + data + '</body>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit" ss>Send </button></form></body>');
        res.write('</html>');
        return res.end();
    } else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);

        });
        return req.on('end', () => { // here is a callback function. so it will execute later and before it line no. 33-37 will execute first.
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            res.statusCode = 302;          // I written code here at place of below so it will not return the response. and because of callback .
            res.setHeader('Location', '/');// so avoid the this problem return the req.on. then it will work fine.
            return res.end();

        });
        // res.statusCode = 302;
        // res.setHeader('Location', '/');
        // return res.end();
    }
    res.write('<html>');
    res.write('<head><title>Default Page</title><head>');
    res.write('<body><p> Welcome to my Text</p> </body>');
    res.write('</html>');
    res.end();





});
server.listen(4000);