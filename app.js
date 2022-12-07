const http = require('http');

const server = http.createServer((req, res) => {
    //res.write('Hello World');
    res.end('<h1>Home</h1>')


});

server.listen(5000);
