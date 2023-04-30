import cluster from 'cluster';
import * as os from 'os';
import server from './worker';

const { pid } = process;

if (cluster.isPrimary) {
  const cpusCount = os.cpus().length;
  console.log(`CPUS count: ${cpusCount}`);
  console.log(`Master started. Pid: ${pid}`);

  for (let i = 0; i < cpusCount; i += 1) {
    cluster.fork();
  }
  cluster.on('exit', (worker) => {
    console.log(`Worker died: Pid: ${worker.process.pid}`);
    cluster.fork();
  });
}

if (cluster.isWorker) {
  const PORT = process.env.PORT || 5000;

  server.listen(PORT, () => {
    console.log(`Worker Pid: ${pid}`);
  });
}
