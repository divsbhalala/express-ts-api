
// import * as http from 'http';
import * as debug from 'debug';
import app from './app';

const logger = debug('app:src/index.ts');

const port = normalizePort(process.env.PORT || 4000);

// const server = http.createServer(app);

const server = app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
// server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


function normalizePort(val: number | string): number {
  const DEFAULT_PORT = 3000;
  const portNumber: number = typeof val === 'string' ? parseInt(val, 10) : val;
  if (isNaN(portNumber)) return DEFAULT_PORT;
  return portNumber;
}

// Server error handling
function onError(error: NodeJS.ErrnoException): void {
  if (error.syscall !== 'listen') throw error;
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  switch (error.code) {
    case 'EACCES':
      logger(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// On server listening handler
function onListening(): void {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr && addr.port}`;
  logger(`App started and listening on ${bind}`);
}

process.on('SIGTERM', () => {
  logger('Received SIGTERM, app closing...');
  process.exit(0);
});

process.on('SIGINT', () => {
  logger('Received SIGINT, app closing...');
  process.exit(0);
});

process.on('unhandledRejection', reason => {
  logger(`Unhandled promise rejection thrown: `);
  logger(reason);
  process.exit(1);
});
export default server;
