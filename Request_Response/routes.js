
const fs = require('fs');
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        //res.write('<body>' + data + '</body>');
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
            fs.writeFile('message.txt', message, err => { // this callback function execute only when message.txt file get update each time.
                res.statusCode = 302;          // otherwise this code will not execute. because of node.js asynchronus nature.
                res.setHeader('Location', '/');
                return res.end();
            });


        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Default Page</title><head>');
    res.write('<body><p> Welcome to my Text</p> </body>');
    res.write('</html>');
    res.end();
}

//module.exports = requestHandler;   // First way to export

// module.exports={                // Second way to export , here can exports multiple things.
//     handler: requestHandler;
//     someText:"Some text added";
// };

// module.exports.handler=requestHandler;     //simple form of second export type
// module.exports.someText="Some text added";   

exports.handler = requestHandler;    // sort form of second export type
exports.someText = "Some text added";