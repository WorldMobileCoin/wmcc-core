/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * amount.js - amount object for wmcc_core.
 */

'use strict';

const assert = require('assert');
const util = require('../utils/util');

/**
 * Represents a wmcc amount (wmcoins internally).
 * @alias module:wmcc.Amount
 * @constructor
 * @param {(String|Number)?} value
 * @param {String?} unit
 * @property {Amount} value
 */

function Amount(value, unit) {
  if (!(this instanceof Amount))
    return new Amount(value, unit);

  this.value = 0;
  this.unit = null;

  if (value != null)
    this.fromOptions(value, unit);
}

/**
 * Inject properties from options.
 * @private
 * @param {(String|Number)?} value
 * @param {String?} unit
 * @returns {Amount}
 */

Amount.prototype.fromOptions = function fromOptions(value, unit) {
  if (typeof unit === 'string')
    return this.from(unit, value);

  if (typeof value === 'number')
    return this.fromValue(value);

  return this.fromWMCC(value);
};

/**
 * Get wmcoin value.
 * @returns {Amount}
 */

Amount.prototype.toValue = function toValue() {
  return this.value;
};

/**
 * Get wmcoin string or value.
 * @param {Boolean?} num
 * @returns {String|Amount}
 */

Amount.prototype.toWMCoin = function toWMCoin(num) {
  if (num)
    return this.value;

  return this.value.toString(10);
};

/**
 * Get bits string or value.
 * @param {Boolean?} num
 * @returns {String|Amount}
 */

Amount.prototype.toBits = function toBits(num) {
  return Amount.encode(this.value, 2, num);
};

/**
 * Get mwmcc string or value.
 * @param {Boolean?} num
 * @returns {String|Amount}
 */

Amount.prototype.toMWMCC = function toMWMCC(num) {
  return Amount.encode(this.value, 5, num);
};

/**
 * Get wmcc string or value.
 * @param {Boolean?} num
 * @returns {String|Amount}
 */

Amount.prototype.toWMCC = function toWMCC(num) {
  return Amount.encode(this.value, 8, num);
};

/**
 * Get unit string or value.
 * @param {String} unit - Can be `sat`,
 * `uwmcc`, `bits`, `mwmcc`, or `wmcc`.
 * @param {Boolean?} num
 * @returns {String|Amount}
 */

Amount.prototype.to = function to(unit, num) {
  switch (unit) {
    case 'wmcoin':
      return this.toWMCoin(num);
    case 'uwmcc':
    case 'bits':
      return this.toBits(num);
    case 'mwmcc':
      return this.toMWMCC(num);
    case 'wmcc':
      return this.toWMCC(num);
  }
  throw new Error(`Unknown unit "${unit}".`);
};

/**
 * Convert amount to wmcc string.
 * @returns {String}
 */

Amount.prototype.toString = function toString() {
  return this.toWMCC();
};

/**
 * Convert amount to wmcc string with unit.
 * @param {String} unit
 * @returns {String}
 */

Amount.prototype.toText = function toText(unit, num) {
  return `${this.to(unit, num)} ${unit}`;
};

/**
 * Inject properties from value.
 * @private
 * @param {Amount} value
 * @returns {Amount}
 */

Amount.prototype.fromValue = function fromValue(value) {
  assert(util.isI64(value), 'Value must be an int64.');
  this.unit = 'wmcc';
  this.value = value;
  return this;
};

/**
 * Inject properties from wmcoins.
 * @private
 * @param {Number|String} value
 * @returns {Amount}
 */

Amount.prototype.fromWMCoin = function fromWMCoin(value) {
  this.unit = 'wmcoin';
  this.value = Amount.decode(value, 0);
  return this;
};

/**
 * Inject properties from bits.
 * @private
 * @param {Number|String} value
 * @returns {Amount}
 */

Amount.prototype.fromBits = function fromBits(value) {
  this.unit = 'bits';
  this.value = Amount.decode(value, 2);
  return this;
};

/**
 * Inject properties from mwmcc.
 * @private
 * @param {Number|String} value
 * @returns {Amount}
 */

Amount.prototype.fromMWMCC = function fromMWMCC(value) {
  this.unit = 'mwmcc';
  this.value = Amount.decode(value, 5);
  return this;
};

/**
 * Inject properties from wmcc.
 * @private
 * @param {Number|String} value
 * @returns {Amount}
 */

Amount.prototype.fromWMCC = function fromWMCC(value) {
  this.unit = 'wmcc';
  this.value = Amount.decode(value, 8);
  return this;
};

/**
 * Inject properties from unit.
 * @private
 * @param {String} unit
 * @param {Number|String} value
 * @returns {Amount}
 */

Amount.prototype.from = function from(unit, value) {
  switch (unit) {
    case 'wmcoin':
      return this.fromWMCoin(value);
    case 'uwmcc':
    case 'bits':
      return this.fromBits(value);
    case 'mwmcc':
      return this.fromMWMCC(value);
    case 'wmcc':
      return this.fromWMCC(value);
  }
  throw new Error(`Unknown unit "${unit}".`);
};

/**
 * Instantiate amount from options.
 * @param {(String|Number)?} value
 * @param {String?} unit
 * @returns {Amount}
 */

Amount.fromOptions = function fromOptions(value, unit) {
  return new Amount().fromOptions(value, unit);
};

/**
 * Instantiate amount from value.
 * @private
 * @param {Amount} value
 * @returns {Amount}
 */

Amount.fromValue = function fromValue(value) {
  return new Amount().fromValue(value);
};

/**
 * Instantiate amount from wmcoins.
 * @param {Number|String} value
 * @returns {Amount}
 */

Amount.fromWMCoin = function fromWMCoin(value) {
  return new Amount().fromWMCoin(value);
};

/**
 * Instantiate amount from bits.
 * @param {Number|String} value
 * @returns {Amount}
 */

Amount.fromBits = function fromBits(value) {
  return new Amount().fromBits(value);
};

/**
 * Instantiate amount from mwmcc.
 * @param {Number|String} value
 * @returns {Amount}
 */

Amount.fromMWMCC = function fromMWMCC(value) {
  return new Amount().fromMWMCC(value);
};

/**
 * Instantiate amount from wmcc.
 * @param {Number|String} value
 * @returns {Amount}
 */

Amount.fromWMCC = function fromWMCC(value) {
  return new Amount().fromWMCC(value);
};

/**
 * Instantiate amount from unit.
 * @param {String} unit
 * @param {Number|String} value
 * @returns {Amount}
 */

Amount.from = function from(unit, value) {
  return new Amount().from(unit, value);
};

/**
 * Inspect amount.
 * @returns {String}
 */

Amount.prototype.inspect = function inspect() {
  return `<Amount: ${this.toString()}>`;
};

/**
 * Convert WMCC string to a WMCoin.
 * @param {String} value - WMCC.
 * @returns {Amount} WMCoin.
 */

Amount.wmcoin = function wmcoin(value) {
  return Amount.fromWMCC(value).toWMCoin(true);
};

/**
 * Safely convert wmcoins to a WMCC string.
 * This function explicitly avoids any
 * floating point arithmetic.
 * @param {Amount} value - WMCoin.
 * @returns {String} WMCC string.
 */

Amount.wmcc = function wmcc(value, num) {
  if (typeof value === 'string')
    return value;

  return Amount.encode(value, 8, num);
};

/**
 * Safely convert wmcoins to a WMCC string with unit.
 * This function explicitly avoids any
 * floating point arithmetic.
 * @param {Amount} value - WMCoin.
 * @returns {String} WMCC string.
 */

Amount.text = function text(value, num) {
  return `${Amount.wmcc(value, num)} wmcc`;
};

/**
 * Safely convert a WMCC string to wmcoins.
 * @param {String} str - WMCC
 * @returns {Amount} WMCoin.
 * @throws on parse error
 */

Amount.value = function value(str) {
  if (typeof str === 'number')
    return str;

  return Amount.decode(str, 8);
};

/**
 * Safely convert wmcoins to a WMCC string.
 * @param {Amount} value
 * @param {Number} exp - Exponent.
 * @param {Boolean} num - Return a number.
 * @returns {String|Number}
 */

Amount.encode = function encode(value, exp, num) {
  if (num)
    return util.toFloat(value, exp);
  return util.toFixed(value, exp);
};

/**
 * Safely convert a WMCC string to wmcoins.
 * @param {String|Number} value - WMCC
 * @param {Number} exp - Exponent.
 * @returns {Amount} WMCoin.
 * @throws on parse error
 */

Amount.decode = function decode(value, exp) {
  if (typeof value === 'number')
    return util.fromFloat(value, exp);
  return util.fromFixed(value, exp);
};

/*
 * Expose
 */

module.exports = Amount;
