/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * dns.js - dns backend for wmcc_core.
 */

'use strict';

/**
 * Resolve host (no getaddrinfo).
 * @ignore
 * @param {String} host
 * @param {String?} proxy - Tor socks proxy.
 * @returns {Promise}
 */

exports.resolve = function resolve(host, proxy) {
  return new Promise((resolve, reject) => {
    reject(new Error('DNS not supported.'));
  });
};

/**
 * Resolve host (getaddrinfo).
 * @ignore
 * @param {String} host
 * @param {String?} proxy - Tor socks proxy.
 * @returns {Promise}
 */

exports.lookup = function lookup(host, proxy) {
  return new Promise((resolve, reject) => {
    reject(new Error('DNS not supported.'));
  });
};
