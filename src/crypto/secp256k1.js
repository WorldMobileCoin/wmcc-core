/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * secp256k1.js - ecdsa wrapper for secp256k1 and elliptic.
 */

'use strict';

let native;

if (Number(process.env.WMCC_NO_SECP256K1) !== 1) {
  try {
    native = require('secp256k1/bindings');
  } catch (e) {
    ;
  }
}

module.exports = native
  ? require('./secp256k1-native')
  : require('./secp256k1-browser');
