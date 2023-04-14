import * as http from 'http';

http.createServer((req, res) => {
  res.end('Hello world');
}).listen(3000, () => {
  console.log('Server is running.');
});
