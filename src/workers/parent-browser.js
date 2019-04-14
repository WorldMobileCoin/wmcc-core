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

const assert = require('assert');
const EventEmitter = require('events');

/**
 * Represents the parent process.
 * @alias module:workers.Parent
 * @constructor
 * @ignore
 */

function Parent() {
  if (!(this instanceof Parent))
    return new Parent();

  EventEmitter.call(this);

  this.init();
}

Object.setPrototypeOf(Parent.prototype, EventEmitter.prototype);

/**
 * Initialize master (web workers).
 * @private
 */

Parent.prototype.init = function init() {
  global.onerror = (event) => {
    this.emit('error', new Error('Worker error.'));
  };

  global.onmessage = (event) => {
    let data;
    if (typeof event.data === 'string') {
      data = Buffer.from(event.data, 'hex');
      assert(data.length === event.data.length / 2);
    } else {
      assert(event.data && typeof event.data === 'object');
      assert(event.data.data && typeof event.data.data.length === 'number');
      data = event.data.data;
      data.__proto__ = Buffer.prototype;
    }
    this.emit('data', data);
  };
};

/**
 * Send data to parent process.
 * @param {Buffer} data
 * @returns {Boolean}
 */

Parent.prototype.write = function write(data) {
  if (global.postMessage.length === 2) {
    data.__proto__ = Uint8Array.prototype;
    global.postMessage({ data }, [data]);
  } else {
    global.postMessage(data.toString('hex'));
  }
  return true;
};

/**
 * Destroy the parent process.
 */

Parent.prototype.destroy = function destroy() {
  global.close();
};

/*
 * Expose
 */

module.exports = Parent;
