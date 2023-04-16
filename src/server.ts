import * as http from 'http';
import usersControler from './controlers/usersControler';

const server = http.createServer((req, res) => {
  if (req.url !== '/favicon.ico') {
    if (req.url === '/api/users' && req.method === 'GET') {
      usersControler.getUsers(req, res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' }).end('<h1>Page not found!</h1>');
    }
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
