/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * network.js - WMCC networks for wmcc_core.
 */

'use strict';

/**
 * @module protocol/networks
 */

const BN = require('../crypto/bn');

const network = exports;

/**
 * Network type list.
 * @memberof module:protocol/networks
 * @const {String[]}
 * @default
 */

network.types = ['mainnet', 'testnet', 'regtest', 'simnet'];

/**
 * Mainnet
 * @static
 * @lends module:protocol/networks
 * @type {Object}
 */

const mainnet = {};

/**
 * Symbolic network type.
 * @const {String}
 * @default
 */

mainnet.type = 'mainnet';

/**
 * Default DNS seeds.
 * @const {String[]}
 * @default
 */

mainnet.seeds = [
  'mainnet.wmcc.network'
];

/**
 * Packet magic number.
 * @const {Number}
 * @default
 */

mainnet.magic = 0xc848e559;

/**
 * Default network port.
 * @const {Number}
 * @default
 */

mainnet.port = 8880;

/**
 * Checkpoint block list.
 * @const {Object}
 */

mainnet.checkpointMap = {
  /*block height: block hash*/
};

/**
 * Last checkpoint height.
 * @const {Number}
 * @default
 */

mainnet.lastCheckpoint = 0;

/**
 * @const {Number}
 * @default
 */

mainnet.halvingInterval = 42000000; //210000; ~400 years

/**
 * Genesis block header.
 * @const {NakedBlock}
 */

mainnet.genesis = {
  version: 1,
  hash: '7212511001f38a7b3b8ac819cc49024d1a2206b1b0f23fdeb485277b850f0000', /* here */
  prevBlock: '0000000000000000000000000000000000000000000000000000000000000000',
  merkleRoot: '49337a633ec2a4e8333243d82742c153a1772c9ac0646d444a330379500b75fe',
  time: 1513728000, /* here */
  bits: 504365040,
  nonce: 812349, /* here */
  height: 0
};

/**
 * Genesis block header.
 * @const {NakedBlock}

main.genesis = {
  version: 1,
  hash: '6fe28c0ab6f1b372c1a6a246ae63f74f931e8365e15a089c68d6190000000000',
  prevBlock: '0000000000000000000000000000000000000000000000000000000000000000',
  merkleRoot:
    '3ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a',
  time: 1231006505,
  bits: 486604799,
  nonce: 2083236893,
  height: 0
};
 */

/**
 * The network's genesis block in a hex string.
 * @const {String}
 */

  mainnet.genesisBlock =
  //abstrack block
  '01000000' // version
  + '0000000000000000000000000000000000000000000000000000000000000000' // prevBlock
  + '49337a633ec2a4e8333243d82742c153a1772c9ac0646d444a330379500b75fe' // merkleRoot
  + '00a8395a' // time /* here */
  + 'f0ff0f1e' // bits // 1e0ffff0 le
  + '3d650c00' // /* here */
  // transaction
  + '01' // tx count
  + '01000000' // tx version
  + '00' // OR witness marker
  + '01' // OR witness flag
  // tx_in
  + '01' // tx_in count
  // tx_in outpoint arrays (prev_out)
  + '0000000000000000000000000000000000000000000000000000000000000000' // ref hash
  + 'ffffffff' // index
  + '30' // script length 48
  + '512067656e6573697320626c6f636b206d696e656420627920776d63635f636f' // signature script +32
  + '7265044f3aac96080000000000000000' // signature script +16
  + 'ffffffff' // sequence
  // tx_out
  + '03' // tx_out count
  // tx_out arrays
  // intial coin
  + '0080c6a47e8d0300' // tx value wmcoins 10M wmcc - initial
  + '19' // pk_script length 25
  + '76a9148efc12b15df7ae341786bb2cdeb6f5a59ed2497688ac'
  // reserve coin
  + '0080c6a47e8d0300' // tx value wmcoins 10M wmcc - reserve
  + '19' // pk_script length 25
  + '76a914456c9dc895ca8bc6e6bae8ca8f2a8a29018ca57d88ac'
  // witness 0x51 81
  + '0000000000000000266a24aa21a9ede2f61c3f71d1defd3fa999dfa36953755c' // +32
  + '690689799962b48bebd836974e8cf90120000000000000000000000000000000' // +32
  + '0000000000000000000000000000000000' // +17
  // lock_time
  + '00000000';

/**
 * The network's genesis block in a hex string.
 * @const {String}

mainnet.genesisBlock =
  '0100000000000000000000000000000000000000000000000000000000000000000000'
  + '003ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a29ab'
  + '5f49ffff001d1dac2b7c01010000000100000000000000000000000000000000000000'
  + '00000000000000000000000000ffffffff4d04ffff001d0104455468652054696d6573'
  + '2030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66'
  + '207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01'
  + '000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f'
  + '61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f'
  + 'ac00000000';
 */

/**
 * POW-related constants.
 * @enum {Number}
 * @default
 */

mainnet.pow = {
  /**
   * Default target.
   * @const {BN}
   */

  limit: new BN(
    '00000fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
    'hex'
  ),

  /**
   * Compact pow limit.
   * @const {Number}
   * @default
   */

  bits: 504365040,

  /**
   * Minimum chainwork for best chain.
   * @const {BN}
   */

  chainwork: new BN(
    '0000000000000000000000000000000000000000000000000000000000100010',
    'hex'
  ),

  /**
   * Desired retarget period in seconds.
   * @const {Number}
   * @default
   */

  targetTimespan: 7 * 24 * 60 * 60,

  /**
   * Average block time.
   * @const {Number}
   * @default
   */

  targetSpacing: 5 * 60,

  /**
   * Retarget interval in blocks.
   * @const {Number}
   * @default
   */

  retargetInterval: 2016,

  /**
   * Whether to reset target if a block
   * has not been mined recently.
   * @const {Boolean}
   * @default
   */

  targetReset: false,

  /**
   * Do not allow retargetting.
   * @const {Boolean}
   * @default
   */

  noRetargeting: false
};

/**
 * Block constants.
 * @enum {Number}
 * @default
 */

mainnet.block = {
  /**
   * Height at which bip34 was activated.
   * Used for avoiding bip30 checks.
   */

  bip34height: 0,

  /**
   * Hash of the block that activated bip34.
   */

  bip34hash: '7212511001f38a7b3b8ac819cc49024d1a2206b1b0f23fdeb485277b850f0000', /* here */

  /**
   * Height at which bip65 was activated.
   */

  bip65height: 0,

  /**
   * Hash of the block that activated bip65.
   */

  bip65hash: '7212511001f38a7b3b8ac819cc49024d1a2206b1b0f23fdeb485277b850f0000', /* here */

  /**
   * Height at which bip66 was activated.
   */

  bip66height: 0,

  /**
   * Hash of the block that activated bip66.
   */

  bip66hash: '7212511001f38a7b3b8ac819cc49024d1a2206b1b0f23fdeb485277b850f0000', /* here */

  /**
   * Safe height to start pruning.
   */

  pruneAfterHeight: 1000,

  /**
   * Safe number of blocks to keep.
   */

  keepBlocks: 288,

  /**
   * Age used for the time delta to
   * determine whether the chain is synced.
   */

  maxTipAge: 24 * 60 * 60,

  /**
   * Height at which block processing is
   * slow enough that we can output
   * logs without spamming.
   */

  slowHeight: 650000
};

/**
 * Map of historical blocks which create duplicate transactions hashes.
 * @see https://github.com/bitcoin/bips/blob/master/bip-0030.mediawiki
 * @const {Object}
 * @default
 */

mainnet.bip30 = {
};

/**
 * For versionbits.
 * @const {Number}
 * @default
 */

mainnet.activationThreshold = 3831; // ~95% of 4032

/**
 * Confirmation window for versionbits.
 * @const {Number}
 * @default
 */

mainnet.minerWindow = 4032; // nPowTargetTimespan / nPowTargetSpacing

/**
 * Deployments for versionbits.
 * @const {Object}
 * @default
 */

mainnet.deployments = {
  csv: {
    name: 'csv',
    bit: 0,
    startTime: 1509494400, // November 1st, 2017.
    timeout: 1541030400, // November 1st, 2018.
    threshold: -1,
    window: -1,
    required: false,
    force: true
  },
  segwit: {
    name: 'segwit',
    bit: 1,
    startTime: 1509494400, // November 1st, 2017.
    timeout: 1541030400, // November 1st, 2018.
    threshold: -1,
    window: -1,
    required: true,
    force: false
  },
  segsignal: {
    name: 'segsignal',
    bit: 4,
    startTime: 1509494400, // November 1st, 2017.
    timeout: 1541030400, // November 1st, 2018.
    threshold: 269, // 80%
    window: 336, // ~2.33 days
    required: false,
    force: false
  },
  testdummy: {
    name: 'testdummy',
    bit: 28,
    startTime: 1509494400, // November 1st, 2017.
    timeout: 1541030400, // November 1st, 2018.
    threshold: -1,
    window: -1,
    required: false,
    force: true
  }
};

/**
 * Deployments for versionbits (array form, sorted).
 * @const {Array}
 * @default
 */

mainnet.deploys = [
  mainnet.deployments.csv,
  mainnet.deployments.segwit,
  mainnet.deployments.segsignal,
  mainnet.deployments.testdummy
];

/**
 * Key prefixes.
 * @enum {Number}
 * @default
 */

mainnet.keyPrefix = {
  privkey: 0x42,
  xpubkey: 0x0488b21e,
  xprivkey: 0x0488ade4,
  xpubkey58: 'xpub',
  xprivkey58: 'xprv',
  coinType: 0
};

/**
 * {@link Address} prefixes.
 * @enum {Number}
 */

mainnet.addressPrefix = {
  pubkeyhash: 0x49,
  scripthash: 0x4b,
  witnesspubkeyhash: 0x06,
  witnessscripthash: 0x0a,
  bech32: 'wc'
};

/**
 * Default value for whether the mempool
 * accepts non-standard transactions.
 * @const {Boolean}
 * @default
 */

mainnet.requireStandard = true;

/**
 * Default http port.
 * @const {Number}
 * @default
 */

mainnet.rpcPort = 7880;

/**
 * Default min relay rate.
 * @const {Rate}
 * @default
 */

mainnet.minRelay = 1000;

/**
 * Default normal relay rate.
 * @const {Rate}
 * @default
 */

mainnet.feeRate = 100000;

/**
 * Maximum normal relay rate.
 * @const {Rate}
 * @default
 */

mainnet.maxFeeRate = 400000;

/**
 * Whether to allow self-connection.
 * @const {Boolean}
 */

mainnet.selfConnect = false;

/**
 * Whether to request mempool on sync.
 * @const {Boolean}
 */

mainnet.requestMempool = false;

/*
 * Testnet (v3)
 * https://en.bitcoin.it/wiki/Testnet
 */

const testnet = {};

testnet.type = 'testnet';

testnet.seeds = [
  'testnet.wmcc.network',
  'testnet.worldmobilecoin.net'
];

testnet.magic = 0x5c6915a7;

testnet.port = 18880;

testnet.checkpointMap = {
};

testnet.lastCheckpoint = 0;

testnet.halvingInterval = 42000000;

testnet.genesis = {
  version: 1,
  hash: '43497fd7f826957108f4a30fd9cec3aeba79972084e90ead01ea330900000000',
  prevBlock: '0000000000000000000000000000000000000000000000000000000000000000',
  merkleRoot:
    '3ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a',
  time: 1296688602,
  bits: 486604799,
  nonce: 414098458,
  height: 0
};

testnet.genesisBlock =
  '0100000000000000000000000000000000000000000000000000000000000000000000'
  + '003ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4adae5'
  + '494dffff001d1aa4ae1801010000000100000000000000000000000000000000000000'
  + '00000000000000000000000000ffffffff4d04ffff001d0104455468652054696d6573'
  + '2030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66'
  + '207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01'
  + '000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f'
  + '61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f'
  + 'ac00000000';

testnet.pow = {
  limit: new BN(
    '00000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
    'hex'
  ),
  bits: 486604799,
  chainwork: new BN(
    '0000000000000000000000000000000000000000000000286d17360c5492b2c4',
    'hex'
  ),
  targetTimespan: 7 * 24 * 60 * 60,
  targetSpacing: 5 * 60,
  retargetInterval: 2016,
  targetReset: true,
  noRetargeting: false
};

testnet.block = {
  bip34height: 1,
  bip34hash: 'f88ecd9912d00d3f5c2a8e0f50417d3e415c75b3abe584346da9b32300000000',
  bip65height: 1,
  bip65hash: 'b61e864fbec41dfaf09da05d1d76dc068b0dd82ee7982ff255667f0000000000',
  bip66height: 1,
  bip66hash: '82a14b9e5ea81d4832b8e2cd3c2a6092b5a3853285a8995ec4c8042100000000',
  pruneAfterHeight: 1000,
  keepBlocks: 10000,
  maxTipAge: 24 * 60 * 60,
  slowHeight: 950000
};

testnet.bip30 = {};

testnet.activationThreshold = 1512; // 75% for testchains

testnet.minerWindow = 2016; // nPowTargetTimespan / nPowTargetSpacing

testnet.deployments = {
  csv: {
    name: 'csv',
    bit: 0,
    startTime: 1456790400, // March 1st, 2016
    timeout: 1493596800, // May 1st, 2017
    threshold: -1,
    window: -1,
    required: false,
    force: true
  },
  segwit: {
    name: 'segwit',
    bit: 1,
    startTime: 1462060800, // May 1st 2016
    timeout: 1493596800, // May 1st 2017
    threshold: -1,
    window: -1,
    required: true,
    force: false
  },
  segsignal: {
    name: 'segsignal',
    bit: 4,
    startTime: 0xffffffff,
    timeout: 0xffffffff,
    threshold: 269,
    window: 336,
    required: false,
    force: false
  },
  testdummy: {
    name: 'testdummy',
    bit: 28,
    startTime: 1199145601, // January 1, 2008
    timeout: 1230767999, // December 31, 2008
    threshold: -1,
    window: -1,
    required: false,
    force: true
  }
};

testnet.deploys = [
  testnet.deployments.csv,
  testnet.deployments.segwit,
  testnet.deployments.segsignal,
  testnet.deployments.testdummy
];

testnet.keyPrefix = {
  privkey: 0x47, //? WIF 0xef
  xpubkey: 0x043587cf,
  xprivkey: 0x04358394,
  xpubkey58: 'tpub',
  xprivkey58: 'tprv',
  coinType: 1
};

testnet.addressPrefix = {
  pubkeyhash: 0x4e,
  scripthash: 0x50,
  witnesspubkeyhash: 0x03,
  witnessscripthash: 0x28,
  bech32: 'tb'
};

testnet.requireStandard = false;

testnet.rpcPort = 17880;

testnet.minRelay = 1000;

testnet.feeRate = 20000;

testnet.maxFeeRate = 60000;

testnet.selfConnect = false;

testnet.requestMempool = false;

/*
 * Regtest
 */

const regtest = {};

regtest.type = 'regtest';

regtest.seeds = [
  '127.0.0.1'
];

regtest.magic = 0x24e09353;

regtest.port = 28880;

regtest.checkpointMap = {};
regtest.lastCheckpoint = 0;

regtest.halvingInterval = 150;

regtest.genesis = {
  version: 1,
  hash: '06226e46111a0b59caaf126043eb5bbf28c34f3a5e332a1fc7b2b73cf188910f',
  prevBlock: '0000000000000000000000000000000000000000000000000000000000000000',
  merkleRoot:
    '3ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a',
  time: 1296688602,
  bits: 545259519,
  nonce: 2,
  height: 0
};

regtest.genesisBlock =
  '0100000000000000000000000000000000000000000000000000000000000000000000'
  + '003ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4adae5'
  + '494dffff7f200200000001010000000100000000000000000000000000000000000000'
  + '00000000000000000000000000ffffffff4d04ffff001d0104455468652054696d6573'
  + '2030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66'
  + '207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01'
  + '000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f'
  + '61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f'
  + 'ac00000000';

regtest.pow = {
  limit: new BN(
    '7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
    'hex'
  ),
  bits: 545259519,
  chainwork: new BN(
    '0000000000000000000000000000000000000000000000000000000000000002',
    'hex'
  ),
  targetTimespan: 7 * 24 * 60 * 60,
  targetSpacing: 5 * 60,
  retargetInterval: 2016,
  targetReset: true,
  noRetargeting: true
};

regtest.block = {
  bip34height: 0xffffffff,
  bip34hash: null,
  bip65height: 1351,
  bip65hash: null,
  bip66height: 1251,
  bip66hash: null,
  pruneAfterHeight: 1000,
  keepBlocks: 10000,
  maxTipAge: 0xffffffff,
  slowHeight: 0
};

regtest.bip30 = {};

regtest.activationThreshold = 108; // 75% for testchains

regtest.minerWindow = 144; // Faster than normal for regtest

regtest.deployments = {
  csv: {
    name: 'csv',
    bit: 0,
    startTime: 0,
    timeout: 0xffffffff,
    threshold: -1,
    window: -1,
    required: false,
    force: true
  },
  segwit: {
    name: 'segwit',
    bit: 1,
    startTime: 0,
    timeout: 0xffffffff,
    threshold: -1,
    window: -1,
    required: true,
    force: false
  },
  segsignal: {
    name: 'segsignal',
    bit: 4,
    startTime: 0xffffffff,
    timeout: 0xffffffff,
    threshold: 269,
    window: 336,
    required: false,
    force: false
  },
  testdummy: {
    name: 'testdummy',
    bit: 28,
    startTime: 0,
    timeout: 0xffffffff,
    threshold: -1,
    window: -1,
    required: false,
    force: true
  }
};

regtest.deploys = [
  regtest.deployments.csv,
  regtest.deployments.segwit,
  regtest.deployments.segsignal,
  regtest.deployments.testdummy
];

regtest.keyPrefix = {
  privkey: 0x5a,
  xpubkey: 0xeab4fa05,
  xprivkey: 0xeab404c7,
  xpubkey58: 'rpub',
  xprivkey58: 'rprv',
  coinType: 1
};

regtest.addressPrefix = {
  pubkeyhash: 0x3c,
  scripthash: 0x26,
  witnesspubkeyhash: 0x7a,
  witnessscripthash: 0x14,
  bech32: 'rb'
};

regtest.requireStandard = false;

regtest.rpcPort = 27880;

regtest.minRelay = 1000;

regtest.feeRate = 20000;

regtest.maxFeeRate = 60000;

regtest.selfConnect = true;

regtest.requestMempool = true;

/*
 * Simnet (btcd)
 */

const simnet = {};

simnet.type = 'simnet';

simnet.seeds = [
  '127.0.0.1'
];

simnet.magic = 0xcd326176;

simnet.port = 38880;

simnet.checkpointMap = {};

simnet.lastCheckpoint = 0;

simnet.halvingInterval = 210000;

simnet.genesis = {
  version: 1,
  hash: 'f67ad7695d9b662a72ff3d8edbbb2de0bfa67b13974bb9910d116d5cbd863e68',
  prevBlock: '0000000000000000000000000000000000000000000000000000000000000000',
  merkleRoot:
    '3ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a',
  time: 1401292357,
  bits: 545259519,
  nonce: 2,
  height: 0
};

simnet.genesisBlock =
  '0100000000000000000000000000000000000000000000000000000000000000000000'
  + '003ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a4506'
  + '8653ffff7f200200000001010000000100000000000000000000000000000000000000'
  + '00000000000000000000000000ffffffff4d04ffff001d0104455468652054696d6573'
  + '2030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66'
  + '207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01'
  + '000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f'
  + '61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f'
  + 'ac00000000';

simnet.pow = {
  limit: new BN(
    // High target of 0x207fffff (545259519)
    '7fffff0000000000000000000000000000000000000000000000000000000000',
    'hex'
  ),
  bits: 545259519,
  chainwork: new BN(
    '0000000000000000000000000000000000000000000000000000000000000002',
    'hex'
  ),
  targetTimespan: 7 * 24 * 60 * 60,
  targetSpacing: 5 * 60,
  retargetInterval: 2016,
  targetReset: true,
  noRetargeting: false
};

simnet.block = {
  bip34height: 0,
  bip34hash: 'f67ad7695d9b662a72ff3d8edbbb2de0bfa67b13974bb9910d116d5cbd863e68',
  bip65height: 0,
  bip65hash: 'f67ad7695d9b662a72ff3d8edbbb2de0bfa67b13974bb9910d116d5cbd863e68',
  bip66height: 0,
  bip66hash: 'f67ad7695d9b662a72ff3d8edbbb2de0bfa67b13974bb9910d116d5cbd863e68',
  pruneAfterHeight: 1000,
  keepBlocks: 10000,
  maxTipAge: 0xffffffff,
  slowHeight: 0
};

simnet.bip30 = {};

simnet.activationThreshold = 75; // 75% for testchains

simnet.minerWindow = 100; // nPowTargetTimespan / nPowTargetSpacing

simnet.deployments = {
  csv: {
    name: 'csv',
    bit: 0,
    startTime: 0, // March 1st, 2016
    timeout: 0xffffffff, // May 1st, 2017
    threshold: -1,
    window: -1,
    required: false,
    force: true
  },
  segwit: {
    name: 'segwit',
    bit: 1,
    startTime: 0, // May 1st 2016
    timeout: 0xffffffff, // May 1st 2017
    threshold: -1,
    window: -1,
    required: true,
    force: false
  },
  segsignal: {
    name: 'segsignal',
    bit: 4,
    startTime: 0xffffffff,
    timeout: 0xffffffff,
    threshold: 269,
    window: 336,
    required: false,
    force: false
  },
  testdummy: {
    name: 'testdummy',
    bit: 28,
    startTime: 1199145601, // January 1, 2008
    timeout: 1230767999, // December 31, 2008
    threshold: -1,
    window: -1,
    required: false,
    force: true
  }
};

simnet.deploys = [
  simnet.deployments.csv,
  simnet.deployments.segwit,
  simnet.deployments.segsignal,
  simnet.deployments.testdummy
];

simnet.keyPrefix = {
  privkey: 0x64,
  xpubkey: 0x0420bd3a,
  xprivkey: 0x0420b900,
  xpubkey58: 'spub',
  xprivkey58: 'sprv',
  coinType: 115
};

simnet.addressPrefix = {
  pubkeyhash: 0x3f,
  scripthash: 0x7b,
  witnesspubkeyhash: 0x19,
  witnessscripthash: 0x28,
  bech32: 'sc'
};

simnet.requireStandard = false;

simnet.rpcPort = 37880;

simnet.minRelay = 1000;

simnet.feeRate = 20000;

simnet.maxFeeRate = 60000;

simnet.selfConnect = false;

simnet.requestMempool = false;

/*
 * Expose
 */

network.mainnet = mainnet;
network.testnet = testnet;
network.regtest = regtest;
network.simnet = simnet;
