/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * parent.js - worker processes for wmcc_core.
 */

'use strict';

const EventEmitter = require('events');

/**
 * Represents the parent process.
 * @alias module:workers.Parent
 * @constructor
 */

function Parent() {
  if (!(this instanceof Parent))
    return new Parent();

  EventEmitter.call(this);

  this.init();
}

Object.setPrototypeOf(Parent.prototype, EventEmitter.prototype);

/**
 * Initialize master (node.js).
 * @private
 */

Parent.prototype.init = function init() {
  process.stdin.on('data', (data) => {
    this.emit('data', data);
  });

  // Nowhere to send these errors:
  process.stdin.on('error', () => {});
  process.stdout.on('error', () => {});
  process.stderr.on('error', () => {});

  process.on('uncaughtException', (err) => {
    this.emit('exception', err);
  });
};

/**
 * Send data to parent process.
 * @param {Buffer} data
 * @returns {Boolean}
 */

Parent.prototype.write = function write(data) {
  return process.stdout.write(data);
};

/**
 * Destroy the parent process.
 */

Parent.prototype.destroy = function destroy() {
  return process.exit(0);
};

/*
 * Expose
 */

module.exports = Parent;
