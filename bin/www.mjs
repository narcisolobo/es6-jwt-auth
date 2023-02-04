#!/usr/bin/env node

/* create http server */
import http from 'http';
import app from "../app.js";
const server = http.createServer(app);

/* set debug namespace */
import debug from "debug";
debug('es6-jwt-auth:server');

/* get port from env and store in express */
const PORT = normalizePort(process.env.PORT || '8000');
app.set('port', PORT);

/* listen on port */
server.listen(PORT);
server.on('error', onError);
server.on('listening', onListening);

/** Normalize port into number, string, or false. */
function normalizePort(val) {
  const port = parseInt(val, 10);
  
  if (isNaN(port)) return val;
  if (port > 0) return port;
  
  return false;
}

/** Event listener for HTTP server "error" event. */
function onError(error) {
  if (error.syscall !== 'listen') throw error

  const bind = typeof PORT === 'string'
    ? 'Pipe ' + PORT
    : 'Port ' + PORT;

  // handle specific listen errors
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
}

/** Event listener for HTTP server "listening" event. */
import { brightBlue } from '../config/chalk-config.js';
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  brightBlue(`Listening on ${bind}.`);
}
