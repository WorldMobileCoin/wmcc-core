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
  ;
};

/*
 * Expose
 */

// Horrible BIP
wmcc_core.bip70 = require('./bip70');

// Blockchain
wmcc_core.blockchain = require('./blockchain');
wmcc_core.chain = require('./blockchain/chain');
wmcc_core.chaindb = require('./blockchain/chaindb');
wmcc_core.chainentry = require('./blockchain/chainentry');

// WMCC
wmcc_core.wmcc = require('./wmcc');
wmcc_core.amount = require('./wmcc/amount');
wmcc_core.uri = require('./wmcc/uri');

// Coins
wmcc_core.coins = require('./coins');
wmcc_core.coinview = require('./coins/coinview');

// Crypto
wmcc_core.crypto = require('./crypto');
wmcc_core.bn = require('./crypto/bn');
wmcc_core.secp256k1 = require('./crypto/secp256k1');
wmcc_core.schnorr = require('./crypto/schnorr');

// DB
wmcc_core.db = require('./db');
wmcc_core.ldb = require('./db/ldb');

// HD
wmcc_core.hd = require('./hd');

// HTTP
wmcc_core.http = require('./http');
wmcc_core.rpc = require('./http/rpc');

// Mempool
wmcc_core.txmempool = require('./mempool');
wmcc_core.fees = require('./mempool/fees');
wmcc_core.mempool = require('./mempool/mempool');
wmcc_core.mempoolentry = require('./mempool/mempoolentry');

// Miner
wmcc_core.mining = require('./mining');
wmcc_core.miner = require('./mining/miner');
wmcc_core.template = require('./mining/template');

// Net
wmcc_core.net = require('./net');
wmcc_core.bip150 = require('./net/bip150');
wmcc_core.bip151 = require('./net/bip151');
wmcc_core.bip152 = require('./net/bip152');
wmcc_core.dns = require('./net/dns');
wmcc_core.packets = require('./net/packets');
wmcc_core.peer = require('./net/peer');
wmcc_core.pool = require('./net/pool');
wmcc_core.tcp = require('./net/tcp');

// Node
wmcc_core.node = require('./node');
wmcc_core.config = require('./node/config');
wmcc_core.fullnode = require('./node/fullnode');
wmcc_core.logger = require('./node/logger');
wmcc_core.spvnode = require('./node/spvnode');

// Primitives
wmcc_core.primitives = require('./primitives');
wmcc_core.address = require('./primitives/address');
wmcc_core.block = require('./primitives/block');
wmcc_core.coin = require('./primitives/coin');
wmcc_core.headers = require('./primitives/headers');
wmcc_core.input = require('./primitives/input');
wmcc_core.invitem = require('./primitives/invitem');
wmcc_core.keyring = require('./primitives/keyring');
wmcc_core.merkleblock = require('./primitives/merkleblock');
wmcc_core.mtx = require('./primitives/mtx');
wmcc_core.netaddress = require('./primitives/netaddress');
wmcc_core.outpoint = require('./primitives/outpoint');
wmcc_core.output = require('./primitives/output');
wmcc_core.tx = require('./primitives/tx');

// Protocol
wmcc_core.protocol = require('./protocol');
wmcc_core.consensus = require('./protocol/consensus');
wmcc_core.errors = require('./protocol/errors');
wmcc_core.network = require('./protocol/network');
wmcc_core.networks = require('./protocol/networks');
wmcc_core.policy = require('./protocol/policy');
wmcc_core.timedata = require('./protocol/timedata');

// Script
wmcc_core.txscript = require('./script');
wmcc_core.opcode = require('./script/opcode');
wmcc_core.program = require('./script/program');
wmcc_core.script = require('./script/script');
wmcc_core.scriptnum = require('./script/scriptnum');
wmcc_core.sigcache = require('./script/sigcache');
wmcc_core.stack = require('./script/stack');
wmcc_core.witness = require('./script/witness');

//Stratum
wmcc_core.stratum = require('./stratum');
wmcc_core.stratumserver = require('./stratum/stratum');

// Utils
wmcc_core.utils = require('./utils');
wmcc_core.base32 = require('./utils/base32');
wmcc_core.base58 = require('./utils/base58');
wmcc_core.bloom = require('./utils/bloom');
wmcc_core.co = require('./utils/co');
wmcc_core.encoding = require('./utils/encoding');
wmcc_core.int64 = require('./utils/int64');
wmcc_core.lock = require('./utils/lock');
wmcc_core.reader = require('./utils/reader');
wmcc_core.staticwriter = require('./utils/staticwriter');
wmcc_core.util = require('./utils/util');
wmcc_core.writer = require('./utils/writer');

// Wallet
wmcc_core.wallet = require('./wallet');
wmcc_core.common = require('./wallet/common');
wmcc_core.path = require('./wallet/path');
wmcc_core.walletkey = require('./wallet/walletkey');
wmcc_core.walletdb = require('./wallet/walletdb');

// Workers
wmcc_core.workers = require('./workers');
wmcc_core.workerpool = require('./workers/workerpool');

// Package Info
wmcc_core.pkg = require('./pkg');

// Native
wmcc_core.native = require('./native');

/*
 * Expose Globally
 */

global.wmcc_core = wmcc_core;
