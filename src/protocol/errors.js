/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * errors.js - error objects for wmcc_core.
 */

'use strict';

/**
 * @module protocol/errors
 */

const assert = require('assert');

/**
 * An error thrown during verification. Can be either
 * a mempool transaction validation error or a blockchain
 * block verification error. Ultimately used to send
 * `reject` packets to peers.
 * @constructor
 * @extends Error
 * @param {Block|TX} msg
 * @param {String} code - Reject packet code.
 * @param {String} reason - Reject packet reason.
 * @param {Number} score - Ban score increase
 * (can be -1 for no reject packet).
 * @param {Boolean} malleated
 * @property {String} code
 * @property {Buffer} hash
 * @property {Number} height (will be the coinbase height if not present).
 * @property {Number} score
 * @property {String} message
 * @property {Boolean} malleated
 */

function VerifyError(msg, code, reason, score, malleated) {
  Error.call(this);

  assert(typeof code === 'string');
  assert(typeof reason === 'string');
  assert(score >= 0);

  this.type = 'VerifyError';
  this.message = '';
  this.code = code;
  this.reason = reason;
  this.score = score;
  this.hash = msg.hash('hex');
  this.malleated = malleated || false;

  this.message = `Verification failure: ${reason}`
    + ` (code=${code} score=${score} hash=${msg.rhash()})`;

  if (Error.captureStackTrace)
    Error.captureStackTrace(this, VerifyError);
}

Object.setPrototypeOf(VerifyError.prototype, Error.prototype);

/*
 * Expose
 */

exports.VerifyError = VerifyError;
