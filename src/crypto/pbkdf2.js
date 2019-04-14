/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * pbkdf2.js - pbkdf2 for wmcc_core.
 */

'use strict';

/**
 * @module crypto.pbkdf2
 */

const crypto = require('crypto');
const co = require('../utils/co');

/**
 * Perform key derivation using PBKDF2.
 * @param {Buffer} key
 * @param {Buffer} salt
 * @param {Number} iter
 * @param {Number} len
 * @param {String} alg
 * @returns {Buffer}
 */

exports.derive = function derive(key, salt, iter, len, alg) {
  return crypto.pbkdf2Sync(key, salt, iter, len, alg);
};

/**
 * Execute pbkdf2 asynchronously.
 * @param {Buffer} key
 * @param {Buffer} salt
 * @param {Number} iter
 * @param {Number} len
 * @param {String} alg
 * @returns {Promise}
 */

exports.deriveAsync = function deriveAsync(key, salt, iter, len, alg) {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(key, salt, iter, len, alg, co.wrap(resolve, reject));
  });
};
