/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * mine.js - mining function for wmcc_core.
 */

'use strict';

const assert = require('assert');
// const digest = require('../crypto/digest'); // cfc
const scrypt = require('../crypto/scrypt'); // ctl
const X15 = require('../crypto/x15');

/**
 * Hash until the nonce overflows.
 * @alias module:mining.mine
 * @param {Buffer} data
 * @param {Buffer} target - Big endian.
 * @param {Number} min
 * @param {Number} max
 * @returns {Number} Nonce or -1.
 */

function mine(data, target, min, max) {
  let nonce = min;

  data.writeUInt32LE(nonce, 76, true);

  // The heart and soul of the miner: match the target.
  while (nonce <= max) {
    // Hash and test against the next target.
    // if (rcmp(digest.hash256(data), target) <= 0) // cfc
    // if (rcmp(powHash(data), target) <= 0) // ctl
    if (rcmp(calHash(data), target) <= 0)
      return nonce;

    // Increment the nonce to get a different hash.
    nonce++;

    // Update the raw buffer.
    data.writeUInt32LE(nonce, 76, true);
  }

  return -1;
}

/**
 * Proof of work function.
 * @param {Buffer} data
 * @returns {Buffer}
 */
// ctl
function powHash(data) {
  return scrypt.derive(data, data, 1024, 1, 1, 32);
}

/**
 * Proof of work function.
 * @param {Buffer} data
 * @returns {Buffer}
 */

function calHash(data) {
  return X15.digest(data);
}

/**
 * "Reverse" comparison so we don't have
 * to waste time reversing the block hash.
 * @ignore
 * @param {Buffer} a
 * @param {Buffer} b
 * @returns {Number}
 */

function rcmp(a, b) {
  assert(a.length === b.length);

  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] < b[i])
      return -1;
    if (a[i] > b[i])
      return 1;
  }

  return 0;
}

/*
 * Expose
 */

module.exports = mine;
