/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * timedata.js - time management for wmcc_core.
 */

'use strict';

const EventEmitter = require('events');
const util = require('../utils/util');

/**
 * An object which handles "adjusted time". This may not
 * look it, but this is actually a semi-consensus-critical
 * piece of code. It handles version packets from peers
 * and calculates what to offset our system clock's time by.
 * @alias module:protocol.TimeData
 * @constructor
 * @param {Number} [limit=200]
 * @property {Array} samples
 * @property {Object} known
 * @property {Number} limit
 * @property {Number} offset
 */

function TimeData(limit) {
  if (!(this instanceof TimeData))
    return new TimeData(limit);

  EventEmitter.call(this);

  if (limit == null)
    limit = 200;

  this.samples = [];
  this.known = new Map();
  this.limit = limit;
  this.offset = 0;
  this.checked = false;
  this.ntp = new NTP();
}

Object.setPrototypeOf(TimeData.prototype, EventEmitter.prototype);

/**
 * Initiate ntp time.
 * return {Promise}
 */

TimeData.prototype.current = function current(options) {
  options = options || {};
  return this.ntp.getTime(options);
};

/**
 * Add time data.
 * @param {String} id
 * @param {Number} time
 */

TimeData.prototype.add = function add(id, time) {
  if (this.samples.length >= this.limit)
    return;

  if (this.known.has(id))
    return;

  const sample = time - util.now();

  this.known.set(id, sample);

  util.binaryInsert(this.samples, sample, compare);

  this.emit('sample', sample, this.samples.length);

  if (this.samples.length >= 5 && this.samples.length % 2 === 1) {
    let median = this.samples[this.samples.length >>> 1];

    if (Math.abs(median) >= 70 * 60) {
      if (!this.checked) {
        let match = false;

        for (const offset of this.samples) {
          if (offset !== 0 && Math.abs(offset) < 5 * 60) {
            match = true;
            break;
          }
        }

        if (!match) {
          this.checked = true;
          this.emit('mismatch');
        }
      }

      median = 0;
    }

    this.offset = median;
    this.emit('offset', this.offset);
  }
};

/**
 * Get the current adjusted time.
 * @returns {Number} Adjusted Time.
 */

TimeData.prototype.now = function now() {
  return util.now() + this.offset;
};

/**
 * Adjust a timestamp.
 * @param {Number} time
 * @returns {Number} Adjusted Time.
 */

TimeData.prototype.adjust = function adjust(time) {
  return time + this.offset;
};

/**
 * Unadjust a timestamp.
 * @param {Number} time
 * @returns {Number} Local Time.
 */

TimeData.prototype.local = function local(time) {
  return time - this.offset;
};

/**
 * Get the current adjusted time in milliseconds.
 * @returns {Number} Adjusted Time.
 */

TimeData.prototype.ms = function ms() {
  return util.ms() + this.offset * 1000;
};

/**
 * NTP private function to sync network time
 */

const dgram = require('dgram');

function NTP() {
  this.defaultServer = "pool.ntp.org";
  this.defaultPort = 123;
  this.replyTimeout = 10000;

  this.server = null;
  this.port = null;
};

NTP.prototype.getTime = function getTime(options) {
  return new Promise((resolve, reject) => {
    this.server = options.server || this.defaultServer;
    this.port = options.port || this.defaultPort;

    const client = dgram.createSocket("udp4");
    const data = Buffer.allocUnsafe(48);

    data[0] = 0x1B;

    const timeout = setTimeout(() => {
      client.close();
      reject('NTP Server timeout');
    }, this.replyTimeout);

    let errorFired = false;

    client.on('error', (err) => {
      if (errorFired)
        return;

      errorFired = true;
      clearTimeout(timeout);
      reject(err);
    });

    client.send(data, 0, data.length, this.port, this.server, (err) => {
      if (err) {
        if (errorFired)
          return;

        clearTimeout(timeout);
        errorFired = true;
        client.close();
        reject(err);
        return;
      }
    });

    client.once('message', (msg) => {
      clearTimeout(timeout);
      client.close();

      const offsetTransmitTime = 40;
      let intpart = 0;
      let fractpart = 0;

      for (let i = 0; i <= 3; i++)
        intpart = 256 * intpart + msg[offsetTransmitTime + i];

      for (let j = 4; j <= 7; j++)
        fractpart = 256 * fractpart + msg[offsetTransmitTime + j];

      const milliseconds = (intpart * 1000 + (fractpart * 1000) / 0x100000000);

      const date = new Date("Jan 01 1900 GMT");
      date.setUTCMilliseconds(date.getUTCMilliseconds() + milliseconds);

      resolve(Math.floor(date.getTime()/1000));
    });

  });
};

/*
 * Helpers
 */

function compare(a, b) {
  return a - b;
}

/*
 * Expose
 */

module.exports = TimeData;
