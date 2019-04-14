/*!
 * Copyright (c) 2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * external.js - external ip address discovery for wmcc_core.
 */

'use strict';

const external = exports;

/**
 * Attempt to retrieve external IP from icanhazip.com.
 * @method
 * @returns {Promise}
 */

external.getIPv4 = async function getIPv4() {
  throw new Error('Could not find IP.');
};

/**
 * Attempt to retrieve external IP from icanhazip.com.
 * @method
 * @returns {Promise}
 */

external.getIPv6 = async function getIPv6() {
  throw new Error('Could not find IP.');
};
