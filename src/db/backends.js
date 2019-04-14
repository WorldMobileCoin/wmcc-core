/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * backends.js - database backends for wmcc_core.
 */

'use strict';

exports.get = function get(name) {
  try {
    switch (name) {
      case 'leveldown':
        return require('leveldown');
      case 'rocksdown':
        return require('rocksdown');
      case 'lmdb':
        return require('lmdb');
      case 'memory':
        return require('./memdb');
      default:
        throw new Error(`Database backend "${name}" not found.`);
    }
  } catch (e) {
    if (e.code === 'MODULE_NOT_FOUND')
      throw new Error(`Database backend "${name}" not found.`);
    throw e;
  }
};
