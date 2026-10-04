const http = require('http');

function handleRequest(req, res) {
    if (req.url === '/health') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('OK');
        return;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: "success", message: "Amazon Clone API" }));
}

const server = http.createServer(handleRequest);
server.listen(3000, () => {
    console.log("Server listening on port 3000");
});
