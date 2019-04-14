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
 * @module net/dns
 */

const dns = require('dns');
const socks = require('./socks');

const options = {
  family: 4,
  hints: dns.ADDRCONFIG | dns.V4MAPPED,
  all: true
};

/**
 * Resolve host (async w/ libcares).
 * @param {String} host
 * @param {String?} proxy - Tor socks proxy.
 * @returns {Promise}
 */

exports.resolve = function resolve(host, proxy) {
  if (proxy)
    return socks.resolve(proxy, host);

  return new Promise((resolve, reject) => {
    dns.resolve(host, 'A', to((err, result) => {
      if (err) {
        reject(err);
        return;
      }

      if (result.length === 0) {
        reject(new Error('No DNS results.'));
        return;
      }

      resolve(result);
    }));
  });
};

/**
 * Resolve host (getaddrinfo).
 * @param {String} host
 * @param {String?} proxy - Tor socks proxy.
 * @returns {Promise}
 */

exports.lookup = function lookup(host, proxy) {
  if (proxy)
    return socks.resolve(proxy, host);

  return new Promise((resolve, reject) => {
    dns.lookup(host, options, to((err, result) => {
      if (err) {
        reject(err);
        return;
      }

      if (result.length === 0) {
        reject(new Error('No DNS results.'));
        return;
      }

      const addrs = [];

      for (const addr of result)
        addrs.push(addr.address);

      resolve(addrs);
    }));
  });
};

/*
 * Helpers
 */

function to(callback) {
  const timeout = setTimeout(() => {
    callback(new Error('DNS request timed out.'));
    callback = null;
  }, 5000);

  return function(err, result) {
    if (callback) {
      clearTimeout(timeout);
      callback(err, result);
    }
  };
}
