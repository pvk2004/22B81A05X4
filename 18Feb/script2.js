const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    
    if (req.url === '/home') {
        res.statusCode = 200;
        res.end('Welcome to Home');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('About Us');
    } else if (req.url === '/contact') {
        res.statusCode = 200;
        res.end('Contact Us');
    } else {
        res.statusCode = 404;
        res.end('Page Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});