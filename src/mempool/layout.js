/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * layout.js - mempool data layout for wmcc_core.
 */

'use strict';

const assert = require('assert');

/*
 * Database Layout:
 *   R -> tip hash
 *   V -> db version
 *   e[id][hash] -> entry
 */

const layout = {
  binary: true,
  R: Buffer.from([0x52]),
  V: Buffer.from([0x76]),
  F: Buffer.from([0x46]),
  e: function e(hash) {
    const key = Buffer.allocUnsafe(33);
    key[0] = 0x65;
    write(key, hash, 1);
    return key;
  },
  ee: function ee(key) {
    assert(Buffer.isBuffer(key));
    assert(key.length === 33);
    return key.toString('hex', 1, 33);
  }
};

/*
 * Helpers
 */

function write(data, str, off) {
  if (Buffer.isBuffer(str))
    return str.copy(data, off);
  assert(typeof str === 'string');
  return data.write(str, off, 'hex');
}

/*
 * Expose
 */

module.exports = layout;
