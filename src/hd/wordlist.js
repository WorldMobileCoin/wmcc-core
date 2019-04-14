/*!
 * Copyright (c) 2015-2016, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * wordlist.js - wordlists for wmcc_core.
 */

'use strict';

exports.get = function get(name) {
  switch (name) {
    case 'simplified chinese':
      return require('./words/chinese-simplified.js');
    case 'traditional chinese':
      return require('./words/chinese-traditional.js');
    case 'english':
      return require('./words/english.js');
    case 'french':
      return require('./words/french.js');
    case 'italian':
      return require('./words/italian.js');
    case 'japanese':
      return require('./words/japanese.js');
    case 'spanish':
      return require('./words/spanish.js');
    default:
      throw new Error(`Unknown language: ${name}.`);
  }
};
