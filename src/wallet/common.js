/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * common.js - commonly required functions for wallet
 */

'use strict';

/**
 * @exports wallet/common
 */

const common = exports;

/**
 * Test whether a string is eligible
 * to be used as a name or ID.
 * @param {String} key
 * @returns {Boolean}
 */

common.isName = function isName(key) {
  if (typeof key !== 'string')
    return false;

  if (key.length === 0)
    return false;

  if (!/^[\-\._0-9A-Za-z ]+$/.test(key))
    return false;

  if (/[ ]{2,}/.test(key))
    return false;

  // Prevents __proto__
  // from being used.
  switch (key[0]) {
    case '_':
    case '-':
    case '.':
      return false;
  }

  switch (key[key.length - 1]) {
    case '_':
    case '-':
    case '.':
      return false;
  }

  return key.length >= 1 && key.length <= 40;
};

/**
 * Sort an array of transactions by time.
 * @param {TX[]} txs
 * @returns {TX[]}
 */

common.sortTX = function sortTX(txs) {
  return txs.sort((a, b) => {
    return a.mtime - b.mtime;
  });
};

/**
 * Sort an array of coins by height.
 * @param {Coin[]} txs
 * @returns {Coin[]}
 */

common.sortCoins = function sortCoins(coins) {
  return coins.sort((a, b) => {
    a = a.height === -1 ? 0x7fffffff : a.height;
    b = b.height === -1 ? 0x7fffffff : b.height;
    return a - b;
  });
};

/**
 * Sort an array of transactions in dependency order.
 * @param {TX[]} txs
 * @returns {TX[]}
 */

common.sortDeps = function sortDeps(txs) {
  const map = new Map();

  for (const tx of txs) {
    const hash = tx.hash('hex');
    map.set(hash, tx);
  }

  const depMap = new Map();
  const depCount = new Map();
  const top = [];

  for (const [hash, tx] of map) {
    depCount.set(hash, 0);

    let hasDeps = false;

    for (const input of tx.inputs) {
      const prev = input.prevout.hash;

      if (!map.has(prev))
        continue;

      const count = depCount.get(hash);
      depCount.set(hash, count + 1);
      hasDeps = true;

      if (!depMap.has(prev))
        depMap.set(prev, []);

      depMap.get(prev).push(tx);
    }

    if (hasDeps)
      continue;

    top.push(tx);
  }

  const result = [];

  for (const tx of top) {
    const hash = tx.hash('hex');
    const deps = depMap.get(hash);

    result.push(tx);

    if (!deps)
      continue;

    for (const tx of deps) {
      const hash = tx.hash('hex');
      let count = depCount.get(hash);

      if (--count === 0)
        top.push(tx);

      depCount.set(hash, count);
    }
  }

  return result;
};
