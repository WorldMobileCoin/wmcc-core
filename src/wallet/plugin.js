/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * plugin.js - wallet plugin for wmcc_core.
 */

'use strict';

const WalletDB = require('./walletdb');
const NodeClient = require('./nodeclient');

/**
 * @exports wallet/plugin
 */

const plugin = exports;

/**
 * Plugin name.
 * @const {String}
 */

plugin.id = 'walletdb';

/**
 * Plugin initialization.
 * @param {Node} node
 * @returns {WalletDB}
 */

plugin.init = function init(node) {
  const config = node.config;
  const client = new NodeClient(node);

  const wdb = new WalletDB({
    network: node.network,
    logger: node.logger,
    workers: node.workers,
    client: client,
    prefix: config.prefix,
    db: config.str(['wallet-db', 'db']),
    maxFiles: config.uint('wallet-max-files'),
    cacheSize: config.mb('wallet-cache-size'),
    witness: config.bool('wallet-witness'),
    checkpoints: config.bool('wallet-checkpoints'),
    startHeight: config.uint('wallet-start-height'),
    wipeNoReally: config.bool('wallet-wipe-no-really'),
    apiKey: config.str(['wallet-api-key', 'api-key']),
    walletAuth: config.bool('wallet-auth'),
    noAuth: config.bool(['wallet-no-auth', 'no-auth']),
    ssl: config.str('wallet-ssl'),
    host: config.str('wallet-host'),
    port: config.uint('wallet-port'),
    spv: node.spv,
    verify: node.spv,
    listen: false
  });

  if (node.http && wdb.http)
    wdb.http.attach(node.http);

  wdb.rpc.attach(node.rpc);

  return wdb;
};
