/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * db/index.js - data management for wmcc_core.
 */

'use strict';

/**
 * @module db
 */

exports.backends = require('./backends');
exports.LDB = require('./ldb');
exports.LowlevelUp = require('./lowlevelup');
exports.MemDB = require('./memdb');
