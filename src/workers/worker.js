/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * worker.js - worker thread/process for wmcc_core.
 */

'use strict';

const Master = require('./master');
const util = require('../utils/util');
const server = new Master();

util.log = server.log.bind(server);
util.error = util.log;

server.listen();
