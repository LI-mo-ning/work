const fs = require('fs');
const http = require('http');
const path = require('path');


const server = http.createServer((request, response) => {
  let { pathname } = new URL(request.url, 'http://localhost:3000');
  if (pathname === '/') {
    let html = fs.readFileSync(__dirname + '/工艺.html');
    response.end(html);
  } else if (pathname === '/index.js') {
    let js = fs.readFileSync(__dirname + '/index.js');
    response.end(js);
  } else if (pathname === '/index.css') {
    let css = fs.readFileSync(__dirname + '/index.css');
    response.end(css);
  } else {
    response.statusCode = 404;
    response.end('<h1>404 Not Found</h1>');
  }
});

server.listen(3000, () => {
  console.log('服务已经启动....');
});

