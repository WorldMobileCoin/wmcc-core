/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * tcp.js - tcp backend for wmcc_core.
 */

'use strict';

const ProxySocket = require('./proxysocket');
const EventEmitter = require('events');
const tcp = exports;

tcp.createSocket = function createSocket(port, host, proxy) {
  return ProxySocket.connect(proxy, port, host);
};

tcp.createServer = function createServer() {
  const server = new EventEmitter();

  server.listen = async function listen(port, host) {
    server.emit('listening');
    return;
  };

  server.close = async function close() {
    return;
  };

  server.address = function address() {
    return {
      address: '127.0.0.1',
      port: 0
    };
  };

  server.maxConnections = undefined;

  return server;
};
