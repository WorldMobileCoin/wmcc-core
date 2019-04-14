/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * native.js - Native bindings for wmcc_core.
 */
 
'use strict';

exports.binding = null;

if (Number(process.env.WMCC_NO_NATIVE) !== 1) {
  try {
    exports.binding = require('wmcc-native');
  } catch (e) {
    ;
  }
}
