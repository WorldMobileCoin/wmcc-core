/*!
 * Copyright (c) 2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * seeds.js - seeds for wmcc_core.
 */

'use strict';

const mainnet = require('./mainnet');
const testnet = require('./testnet');

exports.get = function get(type) {
  switch (type) {
    case 'mainnet':
      return mainnet;
    case 'testnet':
      return testnet;
    default:
      return [];
  }
};
