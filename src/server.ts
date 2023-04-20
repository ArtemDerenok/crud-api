import * as http from 'http';
import * as url from 'url';
import usersControler from './controlers/usersControler';

const server = http.createServer((req, res) => {
  const baseURL = url.parse(req.url, true);
  if (req.url !== '/favicon.ico') {
    if (req.url === '/api/users' && req.method === 'GET') {
      usersControler.getUsers(req, res);
    } else if (req.url === '/api/users' && req.method === 'POST') {
      usersControler.createUser(req, res);
    } else if (req.url.match(/\/api\/users\/\?id=(.{36})/) && req.method === 'PUT') {
      usersControler.updateUser(req, res);
    } else if (req.url.match(/\/api\/users\/\?id=(.{36})/)) {
      usersControler.getUser(req, res, baseURL.query.id);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' }).end('<h1>Page not found!</h1>');
    }
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
