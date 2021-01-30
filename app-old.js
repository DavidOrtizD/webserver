const http = require('http');

http.createServer((req, res)=> {
    res.writeHead(200, {'Content-Type': 'application/json'});
    const response = {
        name: 'David Alejandro',
        lastName: 'Ortiz',
        profession: 'web developer',
        url: req.url
    };
    res.write(JSON.stringify(response));
    res.end();
})
.listen(8080);

console.log('Listening to port 8080');