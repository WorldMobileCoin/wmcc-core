/*!
 * Copyright (c) 2016-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * cleanse.js - memzero for wmcc_core.
 */

'use strict';

/**
 * @module crypto.cleanse
 */

const native = require('../native').binding;

let counter = 0;

/**
 * A maybe-secure memzero.
 * @param {Buffer} data
 */

module.exports = function cleanse(data) {
  let ctr = counter;

  for (let i = 0; i < data.length; i++) {
    data[i] = ctr & 0xff;
    ctr += i;
  }

  counter = ctr >>> 0;
};

if (native)
  exports.cleanse = native.cleanse;
