/*!
 * Copyright (c) 2015-2016, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * index.js - wordlists for wmcc_core.
 */

'use strict';

exports.chinese = {
  simplified: require('./chinese-simplified.js'),
  traditional: require('./chinese-traditional.js')
};

exports.english = require('./english.js');
exports.french = require('./french.js');
exports.italian = require('./italian.js');
exports.japanese = require('./japanese.js');
exports.spanish = require('./spanish.js');
