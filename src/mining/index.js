/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * mining/index.js - mining infrastructure for wmcc_core.
 */

'use strict';

/**
 * @module mining
 */

exports.common = require('./common');
exports.CPUMiner = require('./cpuminer');
exports.mine = require('./mine');
exports.Miner = require('./miner');
exports.BlockTemplate = require('./template');
