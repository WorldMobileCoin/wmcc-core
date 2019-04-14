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

const words = require('./words');

exports.get = function get(name) {
  switch (name) {
    case 'simplified chinese':
      return words.chinese.simplified;
    case 'traditional chinese':
      return words.chinese.traditional;
    case 'english':
      return words.english;
    case 'french':
      return words.french;
    case 'italian':
      return words.italian;
    case 'japanese':
      return words.japanese;
    case 'spanish':
      return words.spanish;
    default:
      throw new Error(`Unknown language: ${name}.`);
  }
};
