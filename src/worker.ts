import * as http from 'http';
import * as url from 'url';
import * as dotenv from 'dotenv';
import usersControler from './controlers/usersControler';

dotenv.config();

const server = http.createServer((req, res) => {
  const baseURL = url.parse(req.url, true);
  if (req.url !== '/favicon.ico') {
    if (req.url === '/api/users' && req.method === 'GET') {
      usersControler.getUsers(req, res);
    } else if (req.url === '/api/users' && req.method === 'POST') {
      usersControler.createUser(req, res);
    } else if (req.url.match(/\/api\/users\/\?id=(.{36})$/) && req.method === 'PUT') {
      usersControler.updateUser(req, res, baseURL.query.id);
    } else if (req.url.match(/\/api\/users\/\?id=(.{36})$/) && req.method === 'GET') {
      usersControler.getUser(req, res, baseURL.query.id);
    } else if (req.url.match(/\/api\/users\/\?id=(.{36})$/) && req.method === 'DELETE') {
      usersControler.deleteUser(req, res, baseURL.query.id);
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' }).end(JSON.stringify("Resource doesn't exist"));
    }
  }
});

export default server;
