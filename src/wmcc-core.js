/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * wmcc-core.js - a javascript WorldMobileCoin (WMCC) Core library.
 */

/* eslint prefer-arrow-callback: "off" */

'use strict';

/**
 * A wmcc_core "environment" which exposes all
 * constructors for primitives, the blockchain,
 * mempool, wallet, etc. It also exposes a
 * global worker pool.
 *
 * @exports wmcc_core
 * @type {Object}
 *
 * @property {Function} bn - See {@url https://github.com/indutny/bn.js}.
 * @property {Object} elliptic - See {@url https://github.com/indutny/elliptic}.
 *
 * @property {Object} bip70 - See {@link module:bip70}.
 *
 * @property {Object} blockchain - See {@link module:blockchain}.
 * @property {Function} chain - See {@link module:blockchain.Chain}.
 * @property {Function} chaindb - See {@link module:blockchain.ChainDB}.
 * @property {Function} chainentry - See {@link module:blockchain.ChainEntry}.
 *
 * @property {Object} wmcc
 * @property {Function} amount
 * @property {Function} uri
 *
 * @property {Object} coins
 * @property {Function} coinview
 *
 * @property {Object} crypto
 * @property {Object} secp256k1
 * @property {Object} schnorr
 *
 * @property {Object} db
 * @property {Object} ldb
 *
 * @property {Object} hd
 *
 * @property {Object} http
 * @property {Object} rpc
 *
 * @property {Object} txmempool
 * @property {Object} fees
 * @property {Object} mempool
 * @property {Object} mempoolentry
 *
 * @property {Object} mining
 * @property {Object} miner
 * @property {Object} minerblock
 *
 * @property {Object} net
 * @property {Object} bip150
 * @property {Object} bip151
 * @property {Object} bip152
 * @property {Object} dns
 * @property {Object} packets
 * @property {Object} peer
 * @property {Object} pool
 * @property {Object} tcp
 *
 * @property {Object} node
 * @property {Object} config
 * @property {Object} fullnode
 * @property {Object} logger
 * @property {Object} spvnode
 *
 * @property {Object} primitives
 * @property {Object} address
 * @property {Object} block
 * @property {Object} coin
 * @property {Object} headers
 * @property {Object} input
 * @property {Object} invitem
 * @property {Object} keyring
 * @property {Object} merkleblock
 * @property {Object} mtx
 * @property {Object} netaddress
 * @property {Object} outpoint
 * @property {Object} output
 * @property {Object} tx
 *
 * @property {Object} protocol
 * @property {Object} consensus
 * @property {Object} errors
 * @property {Object} network
 * @property {Object} networks
 * @property {Object} policy
 * @property {Object} timedata
 *
 * @property {Object} txscript
 * @property {Object} opcodes
 * @property {Object} program
 * @property {Object} script
 * @property {Object} sigcache
 * @property {Object} stack
 * @property {Object} witness
 *
 * @property {Object} utils
 * @property {Object} base32
 * @property {Object} base58
 * @property {Object} bloom
 * @property {Object} co
 * @property {Object} encoding
 * @property {Object} lock
 * @property {Object} reader
 * @property {Object} staticwriter
 * @property {Object} util
 * @property {Object} writer
 *
 * @property {Object} wallet
 * @property {Object} path
 * @property {Object} walletkey
 * @property {Object} walletdb
 *
 * @property {Object} workers
 * @property {Object} workerpool
 */

const wmcc_core = exports;

/**
 * Define a module for lazy loading.
 * @param {String} name
 * @param {String} path
 */

wmcc_core.define = function define(name, path) {
  let cache;
  Object.defineProperty(wmcc_core, name, {
    get() {
      if (!cache)
        cache = require(path);
      return cache;
    }
  });
};

/**
 * Set the default network.
 * @param {String} network
 */

wmcc_core.set = function set(network) {
  wmcc_core.network.set(network);
  return wmcc_core;
};

/**
 * Cache all necessary modules.
 */

wmcc_core.cache = function cache() {
  wmcc_core.bip70;
  wmcc_core.blockchain;
  wmcc_core.wmcc;
  wmcc_core.coins;
  wmcc_core.crypto;
  wmcc_core.db;
  wmcc_core.hd;
  wmcc_core.http;
  wmcc_core.txmempool;
  wmcc_core.mining;
  wmcc_core.net;
  wmcc_core.node;
  wmcc_core.primitives;
  wmcc_core.protocol;
  wmcc_core.txscript;
  wmcc_core.utils;
  wmcc_core.wallet;
  wmcc_core.workers;
  wmcc_core.pkg;
};

/*
 * Expose
 */

// Horrible BIP
wmcc_core.define('bip70', './bip70');

// Blockchain
wmcc_core.define('blockchain', './blockchain');
wmcc_core.define('chain', './blockchain/chain');
wmcc_core.define('chaindb', './blockchain/chaindb');
wmcc_core.define('chainentry', './blockchain/chainentry');

// WMCC
wmcc_core.define('wmcc', './wmcc');
wmcc_core.define('amount', './wmcc/amount');
wmcc_core.define('uri', './wmcc/uri');

// Coins
wmcc_core.define('coins', './coins');
wmcc_core.define('coinview', './coins/coinview');

// Crypto
wmcc_core.define('crypto', './crypto');
wmcc_core.define('bn', './crypto/bn');
wmcc_core.define('secp256k1', './crypto/secp256k1');
wmcc_core.define('schnorr', './crypto/schnorr');

// DB
wmcc_core.define('db', './db');
wmcc_core.define('ldb', './db/ldb');

// HD
wmcc_core.define('hd', './hd');

// HTTP
wmcc_core.define('http', './http');
wmcc_core.define('rpc', './http/rpc');

// Mempool
wmcc_core.define('txmempool', './mempool');
wmcc_core.define('fees', './mempool/fees');
wmcc_core.define('mempool', './mempool/mempool');
wmcc_core.define('mempoolentry', './mempool/mempoolentry');

// Miner
wmcc_core.define('mining', './mining');
wmcc_core.define('miner', './mining/miner');
wmcc_core.define('template', './mining/template');

// Net
wmcc_core.define('net', './net');
wmcc_core.define('bip150', './net/bip150');
wmcc_core.define('bip151', './net/bip151');
wmcc_core.define('bip152', './net/bip152');
wmcc_core.define('dns', './net/dns');
wmcc_core.define('packets', './net/packets');
wmcc_core.define('peer', './net/peer');
wmcc_core.define('pool', './net/pool');
wmcc_core.define('tcp', './net/tcp');

// Node
wmcc_core.define('node', './node');
wmcc_core.define('config', './node/config');
wmcc_core.define('fullnode', './node/fullnode');
wmcc_core.define('logger', './node/logger');
wmcc_core.define('spvnode', './node/spvnode');

// Primitives
wmcc_core.define('primitives', './primitives');
wmcc_core.define('address', './primitives/address');
wmcc_core.define('block', './primitives/block');
wmcc_core.define('coin', './primitives/coin');
wmcc_core.define('headers', './primitives/headers');
wmcc_core.define('input', './primitives/input');
wmcc_core.define('invitem', './primitives/invitem');
wmcc_core.define('keyring', './primitives/keyring');
wmcc_core.define('merkleblock', './primitives/merkleblock');
wmcc_core.define('mtx', './primitives/mtx');
wmcc_core.define('netaddress', './primitives/netaddress');
wmcc_core.define('outpoint', './primitives/outpoint');
wmcc_core.define('output', './primitives/output');
wmcc_core.define('tx', './primitives/tx');

// Protocol
wmcc_core.define('protocol', './protocol');
wmcc_core.define('consensus', './protocol/consensus');
wmcc_core.define('errors', './protocol/errors');
wmcc_core.define('network', './protocol/network');
wmcc_core.define('networks', './protocol/networks');
wmcc_core.define('policy', './protocol/policy');
wmcc_core.define('timedata', './protocol/timedata');

// Script
wmcc_core.define('txscript', './script');
wmcc_core.define('opcode', './script/opcode');
wmcc_core.define('program', './script/program');
wmcc_core.define('script', './script/script');
wmcc_core.define('scriptnum', './script/scriptnum');
wmcc_core.define('sigcache', './script/sigcache');
wmcc_core.define('stack', './script/stack');
wmcc_core.define('witness', './script/witness');

//Stratum
wmcc_core.define('stratum', './stratum');
wmcc_core.define('stratumserver', './stratum/stratum');

// Utils
wmcc_core.define('utils', './utils');
wmcc_core.define('base32', './utils/base32');
wmcc_core.define('base58', './utils/base58');
wmcc_core.define('bloom', './utils/bloom');
wmcc_core.define('co', './utils/co');
wmcc_core.define('encoding', './utils/encoding');
wmcc_core.define('int64', './utils/int64');
wmcc_core.define('lock', './utils/lock');
wmcc_core.define('reader', './utils/reader');
wmcc_core.define('staticwriter', './utils/staticwriter');
wmcc_core.define('util', './utils/util');
wmcc_core.define('writer', './utils/writer');

// Wallet
wmcc_core.define('wallet', './wallet');
wmcc_core.define('common', './wallet/common');
wmcc_core.define('hsm', './wallet/hsm');
wmcc_core.define('path', './wallet/path');
wmcc_core.define('walletkey', './wallet/walletkey');
wmcc_core.define('walletdb', './wallet/walletdb');

// Workers
wmcc_core.define('workers', './workers');
wmcc_core.define('workerpool', './workers/workerpool');

// Package Info
wmcc_core.define('pkg', './pkg');

// Native
wmcc_core.define('native', './native');