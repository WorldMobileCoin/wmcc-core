/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * backends-browser.js - database backends for wmcc_core.
 */

'use strict';

const level = require('./level');
const MemDB = require('./memdb');

exports.get = function get(name) {
  if (name === 'memory')
    return MemDB;
  return level;
};
