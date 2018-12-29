module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 328);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * util.js - utils for wmcc_core.
 */



const assert = __webpack_require__(0);
const nodeUtil = __webpack_require__(54);

/**
 * @exports utils/util
 */

const util = exports;

/*
 * Constants
 */

const inspectOptions = {
  showHidden: false,
  depth: 20,
  colors: false,
  customInspect: true,
  showProxy: false,
  maxArrayLength: Infinity,
  breakLength: 60
};

/**
 * Test whether a number is Number,
 * finite, and below MAX_SAFE_INTEGER.
 * @param {Number?} value
 * @returns {Boolean}
 */

util.isNumber = function isNumber(value) {
  return typeof value === 'number'
    && isFinite(value)
    && value >= -Number.MAX_SAFE_INTEGER
    && value <= Number.MAX_SAFE_INTEGER;
};

/**
 * Test whether an object is an int.
 * @param {Number?} value
 * @returns {Boolean}
 */

util.isInt = function isInt(value) {
  return Number.isSafeInteger(value);
};

/**
 * Test whether an object is a uint.
 * @param {Number?} value
 * @returns {Boolean}
 */

util.isUint = function isUint(value) {
  return util.isInt(value) && value >= 0;
};

/**
 * Test whether a number is a float.
 * @param {Number?} value
 * @returns {Boolean}
 */

util.isFloat = function isFloat(value) {
  return typeof value === 'number' && isFinite(value);
};

/**
 * Test whether a number is a positive float.
 * @param {Number?} value
 * @returns {Boolean}
 */

util.isUfloat = function isUfloat(value) {
  return util.isFloat(value) && value >= 0;
};

/**
 * Test whether an object is an int8.
 * @param {Number?} value
 * @returns {Boolean}
 */

util.isI8 = function isI8(value) {
  return (value | 0) === value && value >= -0x80 && value <= 0x7f;
};

/**
 * Test whether an object is an int16.
 * @param {Number?} value
 * @returns {Boolean}
 */

util.isI16 = function isI16(value) {
  return (value | 0) === value && value >= -0x8000 && value <= 0x7fff;
};

/**
 * Test whether an object is an int32.
 * @param {Number?} value
 * @returns {Boolean}
 */

util.isI32 = function isI32(value) {
  return (value | 0) === value;
};

/**
 * Test whether an object is a int53.
 * @param {Number?} value
 * @returns {Boolean}
 */

util.isI64 = function isI64(value) {
  return util.isInt(value);
};

/**
 * Test whether an object is a uint8.
 * @param {Number?} value
 * @returns {Boolean}
 */

util.isU8 = function isU8(value) {
  return (value & 0xff) === value;
};

/**
 * Test whether an object is a uint16.
 * @param {Number?} value
 * @returns {Boolean}
 */

util.isU16 = function isU16(value) {
  return (value & 0xffff) === value;
};

/**
 * Test whether an object is a uint32.
 * @param {Number?} value
 * @returns {Boolean}
 */

util.isU32 = function isU32(value) {
  return (value >>> 0) === value;
};

/**
 * Test whether an object is a uint53.
 * @param {Number?} value
 * @returns {Boolean}
 */

util.isU64 = function isU64(value) {
  return util.isUint(value);
};

/**
 * Test whether a string is a plain
 * ascii string (no control characters).
 * @param {String} str
 * @returns {Boolean}
 */

util.isAscii = function isAscii(str) {
  return typeof str === 'string' && /^[\t\n\r -~]*$/.test(str);
};

/**
 * Test whether a string is base58 (note that you
 * may get a false positive on a hex string).
 * @param {String?} str
 * @returns {Boolean}
 */

util.isBase58 = function isBase58(str) {
  return typeof str === 'string' && /^[1-9A-Za-z]+$/.test(str);
};

/**
 * Test whether a string is bech32 (note that
 * this doesn't guarantee address is bech32).
 * @param {String?} str
 * @returns {Boolean}
 */

util.isBech32 = function isBech32(str) {
  if (typeof str !== 'string')
    return false;

  if (str.toUpperCase() !== str && str.toLowerCase() !== str)
    return false;

  if (str.length < 8 || str.length > 90)
    return false;

  // it's unlikely any network will have hrp other than a-z symbols.
  return /^[a-z]{2}1[qpzry9x8gf2tvdw0s3jn54khce6mua7l]+$/i.test(str);
};

/**
 * Test whether a string is hex (length must be even).
 * Note that this _could_ await a false positive on
 * base58 strings.
 * @param {String?} str
 * @returns {Boolean}
 */

util.isHex = function isHex(str) {
  if (typeof str !== 'string')
    return false;
  return str.length % 2 === 0 && /^[0-9A-Fa-f]+$/.test(str);
};

/**
 * Test whether an object is a 160 bit hash (hex string).
 * @param {String?} hash
 * @returns {Boolean}
 */

util.isHex160 = function isHex160(hash) {
  if (typeof hash !== 'string')
    return false;
  return hash.length === 40 && util.isHex(hash);
};

/**
 * Test whether an object is a 256 bit hash (hex string).
 * @param {String?} hash
 * @returns {Boolean}
 */

util.isHex256 = function isHex256(hash) {
  if (typeof hash !== 'string')
    return false;
  return hash.length === 64 && util.isHex(hash);
};

/**
 * Test whether the result of a positive
 * addition would be below MAX_SAFE_INTEGER.
 * @param {Number} value
 * @returns {Boolean}
 */

util.isSafeAddition = function isSafeAddition(a, b) {
  // We only work on positive numbers.
  assert(a >= 0);
  assert(b >= 0);

  // Fast case.
  if (a <= 0xfffffffffffff && b <= 0xfffffffffffff)
    return true;

  // Do a 64 bit addition and check the top 11 bits.
  let ahi = (a * (1 / 0x100000000)) | 0;
  const alo = a | 0;

  let bhi = (b * (1 / 0x100000000)) | 0;
  const blo = b | 0;

  // Credit to @indutny for this method.
  const lo = (alo + blo) | 0;

  const s = lo >> 31;
  const as = alo >> 31;
  const bs = blo >> 31;

  const c = ((as & bs) | (~s & (as ^ bs))) & 1;

  let hi = (((ahi + bhi) | 0) + c) | 0;

  hi >>>= 0;
  ahi >>>= 0;
  bhi >>>= 0;

  // Overflow?
  if (hi < ahi || hi < bhi)
    return false;

  return (hi & 0xffe00000) === 0;
};

/**
 * util.inspect() with 20 levels of depth.
 * @param {Object|String} obj
 * @param {Boolean?} color
 * @return {String}
 */

util.inspectify = function inspectify(obj, color) {
  if (typeof obj === 'string')
    return obj;

  inspectOptions.colors = color !== false;

  return nodeUtil.inspect(obj, inspectOptions);
};

/**
 * Format a string.
 * @function
 * @param {...String} args
 * @returns {String}
 */

util.fmt = nodeUtil.format;

/**
 * Format a string.
 * @param {Array} args
 * @param {Boolean?} color
 * @return {String}
 */

util.format = function format(args, color) {
  if (args.length > 0 && args[0] && typeof args[0] === 'object') {
    if (color == null)
      color = Boolean(process.stdout && process.stdout.isTTY);
    return util.inspectify(args[0], color);
  }
  return util.fmt(...args);
};

/**
 * Write a message to stdout (console in browser).
 * @param {Object|String} obj
 * @param {...String} args
 */

util.log = function log(...args) {
  if (!process.stdout) {
    let msg;
    if (args.length > 0) {
      msg = typeof args[0] !== 'object'
        ? util.fmt(...args)
        : args[0];
    }
    console.log(msg);
    return;
  }

  const msg = util.format(args);

  process.stdout.write(msg + '\n');
};

/**
 * Write a message to stderr (console in browser).
 * @param {Object|String} obj
 * @param {...String} args
 */

util.error = function error(...args) {
  if (!process.stderr) {
    let msg;
    if (args.length > 0) {
      msg = typeof args[0] !== 'object'
        ? util.fmt(...args)
        : args[0];
    }
    console.error(msg);
    return;
  }

  const msg = util.format(args);

  process.stderr.write(msg + '\n');
};

/**
 * Return hrtime (shim for browser).
 * @param {Array} time
 * @returns {Array} [seconds, nanoseconds]
 */

util.hrtime = function hrtime(time) {
  if (!process.hrtime) {
    const now = util.ms();

    if (time) {
      const [hi, lo] = time;
      const start = hi * 1000 + lo / 1e6;
      return now - start;
    }

    const ms = now % 1000;

    // Seconds
    const hi = (now - ms) / 1000;

    // Nanoseconds
    const lo = ms * 1e6;

    return [hi, lo];
  }

  if (time) {
    const [hi, lo] = process.hrtime(time);
    return hi * 1000 + lo / 1e6;
  }

  return process.hrtime();
};

/**
 * Get current time in unix time (seconds).
 * @returns {Number}
 */

util.now = function now() {
  return Math.floor(util.ms() / 1000);
};

/**
 * Get current time in unix time (milliseconds).
 * @returns {Number}
 */

util.ms = function ms() {
  return Date.now();
};

/**
 * Create a Date ISO string from time in unix time (seconds).
 * @param {Number?} time - Seconds in unix time.
 * @returns {String}
 */

util.date = function date(time) {
  if (time == null)
    time = util.now();

  return new Date(time * 1000).toISOString().slice(0, -5) + 'Z';
};

/**
 * Get unix seconds from a Date string.
 * @param {String?} date - Date ISO String.
 * @returns {Number}
 */

util.time = function time(date) {
  if (date == null)
    return util.now();

  return new Date(date) / 1000 | 0;
};

/**
 * Get random range.
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */

util.random = function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Create a 32 or 64 bit nonce.
 * @param {Number} size
 * @returns {Buffer}
 */

util.nonce = function nonce(size) {
  let n, data;

  if (!size)
    size = 8;

  switch (size) {
    case 8:
      data = Buffer.allocUnsafe(8);
      n = util.random(0, 0x100000000);
      data.writeUInt32LE(n, 0, true);
      n = util.random(0, 0x100000000);
      data.writeUInt32LE(n, 4, true);
      break;
    case 4:
      data = Buffer.allocUnsafe(4);
      n = util.random(0, 0x100000000);
      data.writeUInt32LE(n, 0, true);
      break;
    default:
      assert(false, 'Bad nonce size.');
      break;
  }

  return data;
};

/**
 * String comparator (memcmp + length comparison).
 * @param {Buffer} a
 * @param {Buffer} b
 * @returns {Number} -1, 1, or 0.
 */

util.strcmp = function strcmp(a, b) {
  const len = Math.min(a.length, b.length);

  for (let i = 0; i < len; i++) {
    if (a[i] < b[i])
      return -1;
    if (a[i] > b[i])
      return 1;
  }

  if (a.length < b.length)
    return -1;

  if (a.length > b.length)
    return 1;

  return 0;
};

/**
 * Convert bytes to mb.
 * @param {Number} size
 * @returns {Number} mb
 */

util.mb = function mb(size) {
  return Math.floor(size / 1024 / 1024);
};

/**
 * Find index of a buffer in an array of buffers.
 * @param {Buffer[]} items
 * @param {Buffer} data - Target buffer to find.
 * @returns {Number} Index (-1 if not found).
 */

util.indexOf = function indexOf(items, data) {
  assert(Array.isArray(items));
  assert(Buffer.isBuffer(data));

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    assert(Buffer.isBuffer(item));

    if (item.equals(data))
      return i;
  }

  return -1;
};

/**
 * Convert a number to a padded uint8
 * string (3 digits in decimal).
 * @param {Number} num
 * @returns {String} Padded number.
 */

util.pad8 = function pad8(num) {
  assert(typeof num === 'number');
  assert(num >= 0);

  num = num.toString(10);

  switch (num.length) {
    case 1:
      return '00' + num;
    case 2:
      return '0' + num;
    case 3:
      return num;
  }

  throw new Error('Number too big.');
};

/**
 * Convert a number to a padded uint32
 * string (10 digits in decimal).
 * @param {Number} num
 * @returns {String} Padded number.
 */

util.pad32 = function pad32(num) {
  assert(typeof num === 'number');
  assert(num >= 0);

  num = num.toString(10);

  switch (num.length) {
    case 1:
      return '000000000' + num;
    case 2:
      return '00000000' + num;
    case 3:
      return '0000000' + num;
    case 4:
      return '000000' + num;
    case 5:
      return '00000' + num;
    case 6:
      return '0000' + num;
    case 7:
      return '000' + num;
    case 8:
      return '00' + num;
    case 9:
      return '0' + num;
    case 10:
      return num;
  }

  throw new Error('Number too big.');
};

/**
 * Convert a number to a padded uint8
 * string (2 digits in hex).
 * @param {Number} num
 * @returns {String} Padded number.
 */

util.hex8 = function hex8(num) {
  assert(typeof num === 'number');
  assert(num >= 0);

  num = num.toString(16);

  switch (num.length) {
    case 1:
      return '0' + num;
    case 2:
      return num;
  }

  throw new Error('Number too big.');
};

/**
 * Convert a number to a padded uint32
 * string (8 digits in hex).
 * @param {Number} num
 * @returns {String} Padded number.
 */

util.hex32 = function hex32(num) {
  assert(typeof num === 'number');
  assert(num >= 0);

  num = num.toString(16);

  switch (num.length) {
    case 1:
      return '0000000' + num;
    case 2:
      return '000000' + num;
    case 3:
      return '00000' + num;
    case 4:
      return '0000' + num;
    case 5:
      return '000' + num;
    case 6:
      return '00' + num;
    case 7:
      return '0' + num;
    case 8:
      return num;
  }

  throw new Error('Number too big.');
};

/**
 * Reverse a hex-string (used because of
 * wmccd's affinity for uint256le).
 * @param {String} data - Hex string.
 * @returns {String} Reversed hex string.
 */

util.revHex = function revHex(data) {
  assert(typeof data === 'string');
  assert(data.length > 0);
  assert(data.length % 2 === 0);

  let out = '';

  for (let i = 0; i < data.length; i += 2)
    out = data.slice(i, i + 2) + out;

  return out;
};

/**
 * Reverse an object's keys and values.
 * @param {Object} obj
 * @returns {Object} Reversed object.
 */

util.reverse = function reverse(obj) {
  const reversed = {};

  for (const key of Object.keys(obj))
    reversed[obj[key]] = key;

  return reversed;
};

/**
 * Perform a binary search on a sorted array.
 * @param {Array} items
 * @param {Object} key
 * @param {Function} compare
 * @param {Boolean?} insert
 * @returns {Number} Index.
 */

util.binarySearch = function binarySearch(items, key, compare, insert) {
  let start = 0;
  let end = items.length - 1;

  while (start <= end) {
    const pos = (start + end) >>> 1;
    const cmp = compare(items[pos], key);

    if (cmp === 0)
      return pos;

    if (cmp < 0)
      start = pos + 1;
    else
      end = pos - 1;
  }

  if (!insert)
    return -1;

  return start;
};

/**
 * Perform a binary insert on a sorted array.
 * @param {Array} items
 * @param {Object} item
 * @param {Function} compare
 * @returns {Number} index
 */

util.binaryInsert = function binaryInsert(items, item, compare, uniq) {
  const i = util.binarySearch(items, item, compare, true);

  if (uniq && i < items.length) {
    if (compare(items[i], item) === 0)
      return -1;
  }

  if (i === 0)
    items.unshift(item);
  else if (i === items.length)
    items.push(item);
  else
    items.splice(i, 0, item);

  return i;
};

/**
 * Perform a binary removal on a sorted array.
 * @param {Array} items
 * @param {Object} item
 * @param {Function} compare
 * @returns {Boolean}
 */

util.binaryRemove = function binaryRemove(items, item, compare) {
  const i = util.binarySearch(items, item, compare, false);

  if (i === -1)
    return false;

  items.splice(i, 1);

  return true;
};

/**
 * Quick test to see if a string is uppercase.
 * @param {String} str
 * @returns {Boolean}
 */

util.isUpperCase = function isUpperCase(str) {
  assert(typeof str === 'string');

  if (str.length === 0)
    return false;

  return (str.charCodeAt(0) & 32) === 0;
};

/**
 * Test to see if a string starts with a prefix.
 * @param {String} str
 * @param {String} prefix
 * @returns {Boolean}
 */

util.startsWith = function startsWith(str, prefix) {
  assert(typeof str === 'string');

  if (!str.startsWith)
    return str.indexOf(prefix) === 0;

  return str.startsWith(prefix);
};

/**
 * Get memory usage info.
 * @returns {Object}
 */

util.memoryUsage = function memoryUsage() {
  if (!process.memoryUsage) {
    return {
      total: 0,
      jsHeap: 0,
      jsHeapTotal: 0,
      nativeHeap: 0,
      external: 0
    };
  }

  const mem = process.memoryUsage();

  return {
    total: util.mb(mem.rss),
    jsHeap: util.mb(mem.heapUsed),
    jsHeapTotal: util.mb(mem.heapTotal),
    nativeHeap: util.mb(mem.rss - mem.heapTotal),
    external: util.mb(mem.external)
  };
};

/**
 * Convert int to fixed number string and reduce by a
 * power of ten (uses no floating point arithmetic).
 * @param {Number} num
 * @param {Number} exp - Number of decimal places.
 * @returns {String} Fixed number string.
 */

util.toFixed = function toFixed(num, exp) {
  assert(typeof num === 'number');
  assert(Number.isSafeInteger(num), 'Invalid integer value.');

  let sign = '';

  if (num < 0) {
    num = -num;
    sign = '-';
  }

  const mult = pow10(exp);
  let lo = num % mult;
  //const hi = (num - lo) / mult;
  let hi = (num - lo) / mult;

  lo = lo.toString(10);
  hi = hi.toString(10);

  while (lo.length < exp)
    lo = '0' + lo;

  lo = lo.replace(/0+$/, '');

  assert(lo.length <= exp, 'Invalid integer value.');

  if (lo.length === 0)
    lo = '0';

  if (exp === 0)
    return `${sign}${hi}`;

  return `${sign}${hi}.${lo}`;
};

/**
 * Parse a fixed number string and multiply by a
 * power of ten (uses no floating point arithmetic).
 * @param {String} str
 * @param {Number} exp - Number of decimal places.
 * @returns {Number} Integer.
 */

util.fromFixed = function fromFixed(str, exp) {
  assert(typeof str === 'string');
  assert(str.length <= 32, 'Fixed number string too large.');

  let sign = 1;

  if (str.length > 0 && str[0] === '-') {
    str = str.substring(1);
    sign = -1;
  }

  let hi = str;
  let lo = '0';

  const index = str.indexOf('.');

  if (index !== -1) {
    hi = str.substring(0, index);
    lo = str.substring(index + 1);
  }

  hi = hi.replace(/^0+/, '');
  lo = lo.replace(/0+$/, '');

  assert(hi.length <= 16 - exp,
    'Fixed number string exceeds 2^53-1.');

  assert(lo.length <= exp,
    'Too many decimal places in fixed number string.');

  if (hi.length === 0)
    hi = '0';

  while (lo.length < exp)
    lo += '0';

  if (lo.length === 0)
    lo = '0';

  assert(/^\d+$/.test(hi) && /^\d+$/.test(lo),
    'Non-numeric characters in fixed number string.');

  hi = parseInt(hi, 10);
  lo = parseInt(lo, 10);

  const mult = pow10(exp);
  const maxLo = modSafe(mult);
  const maxHi = divSafe(mult);

  assert(hi < maxHi || (hi === maxHi && lo <= maxLo),
    'Fixed number string exceeds 2^53-1.');

  return sign * (hi * mult + lo);
};

/**
 * Convert int to float and reduce by a power
 * of ten (uses no floating point arithmetic).
 * @param {Number} num
 * @param {Number} exp - Number of decimal places.
 * @returns {Number} Double float.
 */

util.toFloat = function toFloat(num, exp) {
  return Number(util.toFixed(num, exp));
};

/**
 * Parse a double float number and multiply by a
 * power of ten (uses no floating point arithmetic).
 * @param {Number} num
 * @param {Number} exp - Number of decimal places.
 * @returns {Number} Integer.
 */

util.fromFloat = function fromFloat(num, exp) {
  assert(typeof num === 'number' && isFinite(num));
  assert(Number.isSafeInteger(exp));
  return util.fromFixed(num.toFixed(exp), exp);
};

/**
 * Concat array of buffer
 * @param {Array} array of buffer
 * @returns {Buffer} buff.
 */

util.concatArrBuf = function concatArrBuf (arr) {
  assert(Array.isArray(arr));
  let buf = Buffer.alloc(0);
  for (let i = 0; i < arr.length; i++) {
    assert(Buffer.isBuffer(arr[i]));
    buf = Buffer.concat([buf, arr[i]]);
  }
  return buf;
};

/*
 * Helpers
 */

function pow10(exp) {
  switch (exp) {
    case 0:
      return 1;
    case 1:
      return 10;
    case 2:
      return 100;
    case 3:
      return 1000;
    case 4:
      return 10000;
    case 5:
      return 100000;
    case 6:
      return 1000000;
    case 7:
      return 10000000;
    case 8:
      return 100000000;
  }
  throw new Error('Exponent is too large.');
}

function modSafe(mod) {
  switch (mod) {
    case 1:
      return 0;
    case 10:
      return 1;
    case 100:
      return 91;
    case 1000:
      return 991;
    case 10000:
      return 991;
    case 100000:
      return 40991;
    case 1000000:
      return 740991;
    case 10000000:
      return 4740991;
    case 100000000:
      return 54740991;
  }
  throw new Error('Exponent is too large.');
}

function divSafe(div) {
  switch (div) {
    case 1:
      return 9007199254740991;
    case 10:
      return 900719925474099;
    case 100:
      return 90071992547409;
    case 1000:
      return 9007199254740;
    case 10000:
      return 900719925474;
    case 100000:
      return 90071992547;
    case 1000000:
      return 9007199254;
    case 10000000:
      return 900719925;
    case 100000000:
      return 90071992;
  }
  throw new Error('Exponent is too large.');
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * reader.js - buffer reader for wmcc_core.
 */



const assert = __webpack_require__(0);
const encoding = __webpack_require__(3);
const digest = __webpack_require__(5);

const EMPTY = Buffer.alloc(0);

/**
 * An object that allows reading of buffers in a sane manner.
 * @alias module:utils.BufferReader
 * @constructor
 * @param {Buffer} data
 * @param {Boolean?} zeroCopy - Do not reallocate buffers when
 * slicing. Note that this can lead to memory leaks if not used
 * carefully.
 */

function BufferReader(data, zeroCopy) {
  if (!(this instanceof BufferReader))
    return new BufferReader(data, zeroCopy);

  assert(Buffer.isBuffer(data), 'Must pass a Buffer.');

  this.data = data;
  this.offset = 0;
  this.zeroCopy = zeroCopy || false;
  this.stack = [];
}

/**
 * Assertion.
 * @param {Boolean} value
 */

BufferReader.prototype.assert = function assert(value) {
  if (!value)
    throw new encoding.EncodingError(this.offset, 'Out of bounds read', assert);
};

/**
 * Assertion.
 * @param {Boolean} value
 * @param {String} reason
 */

BufferReader.prototype.enforce = function enforce(value, reason) {
  if (!value)
    throw new encoding.EncodingError(this.offset, reason, enforce);
};

/**
 * Get total size of passed-in Buffer.
 * @returns {Buffer}
 */

BufferReader.prototype.getSize = function getSize() {
  return this.data.length;
};

/**
 * Calculate number of bytes left to read.
 * @returns {Number}
 */

BufferReader.prototype.left = function left() {
  this.assert(this.offset <= this.data.length);
  return this.data.length - this.offset;
};

/**
 * Seek to a position to read from by offset.
 * @param {Number} off - Offset (positive or negative).
 */

BufferReader.prototype.seek = function seek(off) {
  this.assert(this.offset + off >= 0);
  this.assert(this.offset + off <= this.data.length);
  this.offset += off;
  return off;
};

/**
 * Mark the current starting position.
 */

BufferReader.prototype.start = function start() {
  this.stack.push(this.offset);
  return this.offset;
};

/**
 * Stop reading. Pop the start position off the stack
 * and calculate the size of the data read.
 * @returns {Number} Size.
 * @throws on empty stack.
 */

BufferReader.prototype.end = function end() {
  assert(this.stack.length > 0);

  const start = this.stack.pop();

  return this.offset - start;
};

/**
 * Stop reading. Pop the start position off the stack
 * and return the data read.
 * @param {Bolean?} zeroCopy - Do a fast buffer
 * slice instead of allocating a new buffer (warning:
 * may cause memory leaks if not used with care).
 * @returns {Buffer} Data read.
 * @throws on empty stack.
 */

BufferReader.prototype.endData = function endData(zeroCopy) {
  assert(this.stack.length > 0);

  const start = this.stack.pop();
  const end = this.offset;
  const size = end - start;
  const data = this.data;

  if (size === data.length)
    return data;

  if (this.zeroCopy || zeroCopy)
    return data.slice(start, end);

  const ret = Buffer.allocUnsafe(size);
  data.copy(ret, 0, start, end);

  return ret;
};

/**
 * Destroy the reader. Remove references to the data.
 */

BufferReader.prototype.destroy = function destroy() {
  this.data = EMPTY;
  this.offset = 0;
  this.stack.length = 0;
};

/**
 * Read uint8.
 * @returns {Number}
 */

BufferReader.prototype.readU8 = function readU8() {
  this.assert(this.offset + 1 <= this.data.length);
  const ret = this.data[this.offset];
  this.offset += 1;
  return ret;
};

/**
 * Read uint16le.
 * @returns {Number}
 */

BufferReader.prototype.readU16 = function readU16() {
  this.assert(this.offset + 2 <= this.data.length);
  const ret = this.data.readUInt16LE(this.offset, true);
  this.offset += 2;
  return ret;
};

/**
 * Read uint16be.
 * @returns {Number}
 */

BufferReader.prototype.readU16BE = function readU16BE() {
  this.assert(this.offset + 2 <= this.data.length);
  const ret = this.data.readUInt16BE(this.offset, true);
  this.offset += 2;
  return ret;
};

/**
 * Read uint32le.
 * @returns {Number}
 */

BufferReader.prototype.readU32 = function readU32() {
  this.assert(this.offset + 4 <= this.data.length);
  const ret = this.data.readUInt32LE(this.offset, true);
  this.offset += 4;
  return ret;
};

/**
 * Read uint32be.
 * @returns {Number}
 */

BufferReader.prototype.readU32BE = function readU32BE() {
  this.assert(this.offset + 4 <= this.data.length);
  const ret = this.data.readUInt32BE(this.offset, true);
  this.offset += 4;
  return ret;
};

/**
 * Read uint64le as a js number.
 * @returns {Number}
 * @throws on num > MAX_SAFE_INTEGER
 */

BufferReader.prototype.readU64 = function readU64() {
  this.assert(this.offset + 8 <= this.data.length);
  const ret = encoding.readU64(this.data, this.offset);
  this.offset += 8;
  return ret;
};

/**
 * Read uint64be as a js number.
 * @returns {Number}
 * @throws on num > MAX_SAFE_INTEGER
 */

BufferReader.prototype.readU64BE = function readU64BE() {
  this.assert(this.offset + 8 <= this.data.length);
  const ret = encoding.readU64BE(this.data, this.offset);
  this.offset += 8;
  return ret;
};

/**
 * Read int8.
 * @returns {Number}
 */

BufferReader.prototype.readI8 = function readI8() {
  this.assert(this.offset + 1 <= this.data.length);
  const ret = this.data.readInt8(this.offset, true);
  this.offset += 1;
  return ret;
};

/**
 * Read int16le.
 * @returns {Number}
 */

BufferReader.prototype.readI16 = function readI16() {
  this.assert(this.offset + 2 <= this.data.length);
  const ret = this.data.readInt16LE(this.offset, true);
  this.offset += 2;
  return ret;
};

/**
 * Read int16be.
 * @returns {Number}
 */

BufferReader.prototype.readI16BE = function readI16BE() {
  this.assert(this.offset + 2 <= this.data.length);
  const ret = this.data.readInt16BE(this.offset, true);
  this.offset += 2;
  return ret;
};

/**
 * Read int32le.
 * @returns {Number}
 */

BufferReader.prototype.readI32 = function readI32() {
  this.assert(this.offset + 4 <= this.data.length);
  const ret = this.data.readInt32LE(this.offset, true);
  this.offset += 4;
  return ret;
};

/**
 * Read int32be.
 * @returns {Number}
 */

BufferReader.prototype.readI32BE = function readI32BE() {
  this.assert(this.offset + 4 <= this.data.length);
  const ret = this.data.readInt32BE(this.offset, true);
  this.offset += 4;
  return ret;
};

/**
 * Read int64le as a js number.
 * @returns {Number}
 * @throws on num > MAX_SAFE_INTEGER
 */

BufferReader.prototype.readI64 = function readI64() {
  this.assert(this.offset + 8 <= this.data.length);
  const ret = encoding.readI64(this.data, this.offset);
  this.offset += 8;
  return ret;
};

/**
 * Read int64be as a js number.
 * @returns {Number}
 * @throws on num > MAX_SAFE_INTEGER
 */

BufferReader.prototype.readI64BE = function readI64BE() {
  this.assert(this.offset + 8 <= this.data.length);
  const ret = encoding.readI64BE(this.data, this.offset);
  this.offset += 8;
  return ret;
};

/**
 * Read uint64le.
 * @returns {U64}
 */

BufferReader.prototype.readU64N = function readU64N() {
  this.assert(this.offset + 8 <= this.data.length);
  const ret = encoding.readU64N(this.data, this.offset);
  this.offset += 8;
  return ret;
};

/**
 * Read uint64be.
 * @returns {U64}
 */

BufferReader.prototype.readU64BEN = function readU64BEN() {
  this.assert(this.offset + 8 <= this.data.length);
  const ret = encoding.readU64BEN(this.data, this.offset);
  this.offset += 8;
  return ret;
};

/**
 * Read int64le.
 * @returns {I64}
 */

BufferReader.prototype.readI64N = function readI64N() {
  this.assert(this.offset + 8 <= this.data.length);
  const ret = encoding.readI64N(this.data, this.offset);
  this.offset += 8;
  return ret;
};

/**
 * Read int64be.
 * @returns {I64}
 */

BufferReader.prototype.readI64BEN = function readI64BEN() {
  this.assert(this.offset + 8 <= this.data.length);
  const ret = encoding.readI64BEN(this.data, this.offset);
  this.offset += 8;
  return ret;
};

/**
 * Read float le.
 * @returns {Number}
 */

BufferReader.prototype.readFloat = function readFloat() {
  this.assert(this.offset + 4 <= this.data.length);
  const ret = this.data.readFloatLE(this.offset, true);
  this.offset += 4;
  return ret;
};

/**
 * Read float be.
 * @returns {Number}
 */

BufferReader.prototype.readFloatBE = function readFloatBE() {
  this.assert(this.offset + 4 <= this.data.length);
  const ret = this.data.readFloatBE(this.offset, true);
  this.offset += 4;
  return ret;
};

/**
 * Read double float le.
 * @returns {Number}
 */

BufferReader.prototype.readDouble = function readDouble() {
  this.assert(this.offset + 8 <= this.data.length);
  const ret = this.data.readDoubleLE(this.offset, true);
  this.offset += 8;
  return ret;
};

/**
 * Read double float be.
 * @returns {Number}
 */

BufferReader.prototype.readDoubleBE = function readDoubleBE() {
  this.assert(this.offset + 8 <= this.data.length);
  const ret = this.data.readDoubleBE(this.offset, true);
  this.offset += 8;
  return ret;
};

/**
 * Read a varint.
 * @returns {Number}
 */

BufferReader.prototype.readVarint = function readVarint() {
  const {size, value} = encoding.readVarint(this.data, this.offset);
  this.offset += size;
  return value;
};

/**
 * Read a varint.
 * @returns {U64}
 */

BufferReader.prototype.readVarintN = function readVarintN() {
  const {size, value} = encoding.readVarintN(this.data, this.offset);
  this.offset += size;
  return value;
};

/**
 * Read a varint (type 2).
 * @returns {Number}
 */

BufferReader.prototype.readVarint2 = function readVarint2() {
  const {size, value} = encoding.readVarint2(this.data, this.offset);
  this.offset += size;
  return value;
};

/**
 * Read a varint (type 2).
 * @returns {U64}
 */

BufferReader.prototype.readVarint2N = function readVarint2N() {
  const {size, value} = encoding.readVarint2N(this.data, this.offset);
  this.offset += size;
  return value;
};

/**
 * Read N bytes (will do a fast slice if zero copy).
 * @param {Number} size
 * @param {Bolean?} zeroCopy - Do a fast buffer
 * slice instead of allocating a new buffer (warning:
 * may cause memory leaks if not used with care).
 * @returns {Buffer}
 */

BufferReader.prototype.readBytes = function readBytes(size, zeroCopy) {
  assert(size >= 0);
  this.assert(this.offset + size <= this.data.length);

  let ret;
  if (this.zeroCopy || zeroCopy) {
    ret = this.data.slice(this.offset, this.offset + size);
  } else {
    ret = Buffer.allocUnsafe(size);
    this.data.copy(ret, 0, this.offset, this.offset + size);
  }

  this.offset += size;

  return ret;
};

/**
 * Read a varint number of bytes (will do a fast slice if zero copy).
 * @param {Bolean?} zeroCopy - Do a fast buffer
 * slice instead of allocating a new buffer (warning:
 * may cause memory leaks if not used with care).
 * @returns {Buffer}
 */

BufferReader.prototype.readVarBytes = function readVarBytes(zeroCopy) {
  return this.readBytes(this.readVarint(), zeroCopy);
};

/**
 * Read a string.
 * @param {String} enc - Any buffer-supported encoding.
 * @param {Number} size
 * @returns {String}
 */

BufferReader.prototype.readString = function readString(enc, size) {
  assert(size >= 0);
  this.assert(this.offset + size <= this.data.length);
  const ret = this.data.toString(enc, this.offset, this.offset + size);
  this.offset += size;
  return ret;
};

/**
 * Read a 32-byte hash.
 * @param {String} enc - `"hex"` or `null`.
 * @returns {Hash|Buffer}
 */

BufferReader.prototype.readHash = function readHash(enc) {
  if (enc)
    return this.readString(enc, 32);
  return this.readBytes(32);
};

/**
 * Read string of a varint length.
 * @param {String} enc - Any buffer-supported encoding.
 * @param {Number?} limit - Size limit.
 * @returns {String}
 */

BufferReader.prototype.readVarString = function readVarString(enc, limit) {
  const size = this.readVarint();
  this.enforce(!limit || size <= limit, 'String exceeds limit.');
  return this.readString(enc, size);
};

/**
 * Read a null-terminated string.
 * @param {String} enc - Any buffer-supported encoding.
 * @returns {String}
 */

BufferReader.prototype.readNullString = function readNullString(enc) {
  this.assert(this.offset + 1 <= this.data.length);

  let i = this.offset;
  for (; i < this.data.length; i++) {
    if (this.data[i] === 0)
      break;
  }

  this.assert(i !== this.data.length);

  const ret = this.readString(enc, i - this.offset);

  this.offset = i + 1;

  return ret;
};

/**
 * Create a checksum from the last start position.
 * @returns {Number} Checksum.
 */

BufferReader.prototype.createChecksum = function createChecksum() {
  let start = 0;

  if (this.stack.length > 0)
    start = this.stack[this.stack.length - 1];

  const data = this.data.slice(start, this.offset);

  return digest.hash256(data).readUInt32LE(0, true);
};

/**
 * Verify a 4-byte checksum against a calculated checksum.
 * @returns {Number} checksum
 * @throws on bad checksum
 */

BufferReader.prototype.verifyChecksum = function verifyChecksum() {
  const chk = this.createChecksum();
  const checksum = this.readU32();
  this.enforce(chk === checksum, 'Checksum mismatch.');
  return checksum;
};

/*
 * Expose
 */

module.exports = BufferReader;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * encoding.js - encoding utils for wmcc_core.
 */



/**
 * @module utils/encoding
 */

const {U64, I64} = __webpack_require__(49);
const UINT128_MAX = U64.UINT64_MAX.shrn(7);
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
const encoding = exports;

/**
 * An empty buffer.
 * @const {Buffer}
 * @default
 */

encoding.DUMMY = Buffer.from([0]);

/**
 * A hash of all zeroes with a `1` at the
 * end (used for the SIGHASH_SINGLE bug).
 * @const {Buffer}
 * @default
 */

encoding.ONE_HASH = Buffer.from(
  '0100000000000000000000000000000000000000000000000000000000000000',
  'hex'
);

/**
 * A hash of all zeroes.
 * @const {Buffer}
 * @default
 */

encoding.ZERO_HASH = Buffer.from(
  '0000000000000000000000000000000000000000000000000000000000000000',
  'hex'
);

/**
 * A hash of all 0xff.
 * @const {Buffer}
 * @default
 */

encoding.MAX_HASH = Buffer.from(
  'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
  'hex'
);

/**
 * A hash of all zeroes.
 * @const {String}
 * @default
 */

encoding.NULL_HASH =
  '0000000000000000000000000000000000000000000000000000000000000000';

/**
 * A hash of all 0xff.
 * @const {String}
 * @default
 */

encoding.HIGH_HASH =
  'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';

/**
 * A hash of all zeroes.
 * @const {Buffer}
 * @default
 */

encoding.ZERO_HASH160 = Buffer.from(
  '0000000000000000000000000000000000000000',
  'hex'
);

/**
 * A hash of all 0xff.
 * @const {String}
 * @default
 */

encoding.MAX_HASH160 = Buffer.from(
  'ffffffffffffffffffffffffffffffffffffffff',
  'hex'
);

/**
 * A hash of all zeroes.
 * @const {String}
 * @default
 */

encoding.NULL_HASH160 = '0000000000000000000000000000000000000000';

/**
 * A hash of all 0xff.
 * @const {String}
 * @default
 */

encoding.HIGH_HASH160 = 'ffffffffffffffffffffffffffffffffffffffff';

/**
 * A compressed pubkey of all zeroes.
 * @const {Buffer}
 * @default
 */

encoding.ZERO_KEY = Buffer.from(
  '000000000000000000000000000000000000000000000000000000000000000000',
  'hex'
);

/**
 * A 73 byte signature of all zeroes.
 * @const {Buffer}
 * @default
 */

encoding.ZERO_SIG = Buffer.from(''
  + '0000000000000000000000000000000000000000000000000000000000000000'
  + '0000000000000000000000000000000000000000000000000000000000000000'
  + '000000000000000000',
  'hex'
);

/**
 * A 64 byte signature of all zeroes.
 * @const {Buffer}
 * @default
 */

encoding.ZERO_SIG64 = Buffer.from(''
  + '0000000000000000000000000000000000000000000000000000000000000000'
  + '0000000000000000000000000000000000000000000000000000000000000000',
  'hex'
);

/**
 * 4 zero bytes.
 * @const {Buffer}
 * @default
 */

encoding.ZERO_U32 = Buffer.from('00000000', 'hex');

/**
 * 8 zero bytes.
 * @const {Buffer}
 * @default
 */

encoding.ZERO_U64 = Buffer.from('0000000000000000', 'hex');

/**
 * Read uint64le as a js number.
 * @param {Buffer} data
 * @param {Number} off
 * @returns {Number}
 * @throws on num > MAX_SAFE_INTEGER
 */

encoding.readU64 = function readU64(data, off) {
  const hi = data.readUInt32LE(off + 4, true);
  const lo = data.readUInt32LE(off, true);
  enforce((hi & 0xffe00000) === 0, off, 'Number exceeds 2^53-1');
  return hi * 0x100000000 + lo;
};

/**
 * Read uint64be as a js number.
 * @param {Buffer} data
 * @param {Number} off
 * @returns {Number}
 * @throws on num > MAX_SAFE_INTEGER
 */

encoding.readU64BE = function readU64BE(data, off) {
  const hi = data.readUInt32BE(off, true);
  const lo = data.readUInt32BE(off + 4, true);
  enforce((hi & 0xffe00000) === 0, off, 'Number exceeds 2^53-1');
  return hi * 0x100000000 + lo;
};

/**
 * Read int64be as a js number.
 * @param {Buffer} data
 * @param {Number} off
 * @returns {Number}
 * @throws on num > MAX_SAFE_INTEGER
 */

encoding.readI64 = function readI64(data, off) {
  const hi = data.readInt32LE(off + 4, true);
  const lo = data.readUInt32LE(off, true);
  enforce(isSafe(hi, lo), 'Number exceeds 2^53-1');
  return hi * 0x100000000 + lo;
};

/**
 * Read int64be as a js number.
 * @param {Buffer} data
 * @param {Number} off
 * @returns {Number}
 * @throws on num > MAX_SAFE_INTEGER
 */

encoding.readI64BE = function readI64BE(data, off) {
  const hi = data.readInt32BE(off, true);
  const lo = data.readUInt32BE(off + 4, true);
  enforce(isSafe(hi, lo), 'Number exceeds 2^53-1');
  return hi * 0x100000000 + lo;
};

/**
 * Write a javascript number as a uint64le.
 * @param {Buffer} dst
 * @param {Number} num
 * @param {Number} off
 * @returns {Number} Buffer offset.
 * @throws on num > MAX_SAFE_INTEGER
 */

encoding.writeU64 = function writeU64(dst, num, off) {
  return write64(dst, num, off, false);
};

/**
 * Write a javascript number as a uint64be.
 * @param {Buffer} dst
 * @param {Number} num
 * @param {Number} off
 * @returns {Number} Buffer offset.
 * @throws on num > MAX_SAFE_INTEGER
 */

encoding.writeU64BE = function writeU64BE(dst, num, off) {
  return write64(dst, num, off, true);
};

/**
 * Write a javascript number as an int64le.
 * @param {Buffer} dst
 * @param {Number} num
 * @param {Number} off
 * @returns {Number} Buffer offset.
 * @throws on num > MAX_SAFE_INTEGER
 */

encoding.writeI64 = function writeI64(dst, num, off) {
  return write64(dst, num, off, false);
};

/**
 * Write a javascript number as an int64be.
 * @param {Buffer} dst
 * @param {Number} num
 * @param {Number} off
 * @returns {Number} Buffer offset.
 * @throws on num > MAX_SAFE_INTEGER
 */

encoding.writeI64BE = function writeI64BE(dst, num, off) {
  return write64(dst, num, off, true);
};

/**
 * Read uint64le.
 * @param {Buffer} data
 * @param {Number} off
 * @returns {U64}
 */

encoding.readU64N = function readU64N(data, off) {
  return U64.readLE(data, off);
};

/**
 * Read uint64be.
 * @param {Buffer} data
 * @param {Number} off
 * @returns {U64}
 */

encoding.readU64BEN = function readU64BEN(data, off) {
  return U64.readBE(data, off);
};

/**
 * Read int64le.
 * @param {Buffer} data
 * @param {Number} off
 * @returns {I64}
 */

encoding.readI64N = function readI64N(data, off) {
  return I64.readLE(data, off);
};
/**
 * Read int64be.
 * @param {Buffer} data
 * @param {Number} off
 * @returns {I64}
 */

encoding.readI64BEN = function readI64BEN(data, off) {
  return I64.readBE(data, off);
};

/**
 * Write uint64le.
 * @param {Buffer} dst
 * @param {U64} num
 * @param {Number} off
 * @returns {Number} Buffer offset.
 */

encoding.writeU64N = function writeU64N(dst, num, off) {
  enforce(!num.sign, off, 'Signed');
  return num.writeLE(dst, off);
};

/**
 * Write uint64be.
 * @param {Buffer} dst
 * @param {U64} num
 * @param {Number} off
 * @returns {Number} Buffer offset.
 */

encoding.writeU64BEN = function writeU64BEN(dst, num, off) {
  enforce(!num.sign, off, 'Signed');
  return num.writeBE(dst, off);
};

/**
 * Write int64le.
 * @param {Buffer} dst
 * @param {U64} num
 * @param {Number} off
 * @returns {Number} Buffer offset.
 */

encoding.writeI64N = function writeI64N(dst, num, off) {
  enforce(num.sign, off, 'Not signed');
  return num.writeLE(dst, off);
};

/**
 * Write int64be.
 * @param {Buffer} dst
 * @param {I64} num
 * @param {Number} off
 * @returns {Number} Buffer offset.
 */

encoding.writeI64BEN = function writeI64BEN(dst, num, off) {
  enforce(num.sign, off, 'Not signed');
  return num.writeBE(dst, off);
};

/**
 * Read a varint.
 * @param {Buffer} data
 * @param {Number} off
 * @returns {Object}
 */

encoding.readVarint = function readVarint(data, off) {
  let value, size;

  assert(off < data.length, off);

  switch (data[off]) {
    case 0xff:
      size = 9;
      assert(off + size <= data.length, off);
      value = encoding.readU64(data, off + 1);
      enforce(value > 0xffffffff, off, 'Non-canonical varint');
      break;
    case 0xfe:
      size = 5;
      assert(off + size <= data.length, off);
      value = data.readUInt32LE(off + 1, true);
      enforce(value > 0xffff, off, 'Non-canonical varint');
      break;
    case 0xfd:
      size = 3;
      assert(off + size <= data.length, off);
      value = data[off + 1] | (data[off + 2] << 8);
      enforce(value >= 0xfd, off, 'Non-canonical varint');
      break;
    default:
      size = 1;
      value = data[off];
      break;
  }

  return new Varint(size, value);
};

/**
 * Write a varint.
 * @param {Buffer} dst
 * @param {Number} num
 * @param {Number} off
 * @returns {Number} Buffer offset.
 */

encoding.writeVarint = function writeVarint(dst, num, off) {
  if (num < 0xfd) {
    dst[off++] = num & 0xff;
    return off;
  }

  if (num <= 0xffff) {
    dst[off++] = 0xfd;
    dst[off++] = num & 0xff;
    dst[off++] = (num >> 8) & 0xff;
    return off;
  }

  if (num <= 0xffffffff) {
    dst[off++] = 0xfe;
    dst[off++] = num & 0xff;
    dst[off++] = (num >> 8) & 0xff;
    dst[off++] = (num >> 16) & 0xff;
    dst[off++] = num >>> 24;
    return off;
  }

  dst[off++] = 0xff;
  off = encoding.writeU64(dst, num, off);
  return off;
};

/**
 * Calculate size of varint.
 * @param {Number} num
 * @returns {Number} size
 */

encoding.sizeVarint = function sizeVarint(num) {
  if (num < 0xfd)
    return 1;

  if (num <= 0xffff)
    return 3;

  if (num <= 0xffffffff)
    return 5;

  return 9;
};

/**
 * Read a varint.
 * @param {Buffer} data
 * @param {Number} off
 * @returns {Object}
 */

encoding.readVarintN = function readVarintN(data, off) {
  assert(off < data.length, off);

  if (data[off] === 0xff) {
    const size = 9;
    assert(off + size <= data.length, off);
    const value = encoding.readU64N(data, off + 1);
    enforce(value.hi !== 0, off, 'Non-canonical varint');
    return new Varint(size, value);
  }

  const {size, value} = encoding.readVarint(data, off);

  return new Varint(size, U64.fromInt(value));
};

/**
 * Write a varint.
 * @param {Buffer} dst
 * @param {U64} num
 * @param {Number} off
 * @returns {Number} Buffer offset.
 */

encoding.writeVarintN = function writeVarintN(dst, num, off) {
  enforce(!num.sign, off, 'Signed');

  if (num.hi !== 0) {
    dst[off++] = 0xff;
    return encoding.writeU64N(dst, num, off);
  }

  return encoding.writeVarint(dst, num.toInt(), off);
};

/**
 * Calculate size of varint.
 * @param {U64} num
 * @returns {Number} size
 */

encoding.sizeVarintN = function sizeVarintN(num) {
  enforce(!num.sign, 0, 'Signed');

  if (num.hi !== 0)
    return 9;

  return encoding.sizeVarint(num.toInt());
};

/**
 * Read a varint (type 2).
 * @param {Buffer} data
 * @param {Number} off
 * @returns {Object}
 */

encoding.readVarint2 = function readVarint2(data, off) {
  let num = 0;
  let size = 0;

  for (;;) {
    assert(off < data.length, off);

    const ch = data[off++];
    size++;

    // Number.MAX_SAFE_INTEGER >>> 7
    enforce(num <= 0x3fffffffffff - (ch & 0x7f), off, 'Number exceeds 2^53-1');

    // num = (num << 7) | (ch & 0x7f);
    num = (num * 0x80) + (ch & 0x7f);

    if ((ch & 0x80) === 0)
      break;

    enforce(num !== MAX_SAFE_INTEGER, off, 'Number exceeds 2^53-1');
    num++;
  }

  return new Varint(size, num);
};

/**
 * Write a varint (type 2).
 * @param {Buffer} dst
 * @param {Number} num
 * @param {Number} off
 * @returns {Number} Buffer offset.
 */

encoding.writeVarint2 = function writeVarint2(dst, num, off) {
  const tmp = [];

  let len = 0;

  for (;;) {
    tmp[len] = (num & 0x7f) | (len ? 0x80 : 0x00);
    if (num <= 0x7f)
      break;
    // num = (num >>> 7) - 1;
    num = ((num - (num % 0x80)) / 0x80) - 1;
    len++;
  }

  assert(off + len + 1 <= dst.length, off);

  do {
    dst[off++] = tmp[len];
  } while (len--);

  return off;
};

/**
 * Calculate size of varint (type 2).
 * @param {Number} num
 * @returns {Number} size
 */

encoding.sizeVarint2 = function sizeVarint2(num) {
  let size = 0;

  for (;;) {
    size++;
    if (num <= 0x7f)
      break;
    // num = (num >>> 7) - 1;
    num = ((num - (num % 0x80)) / 0x80) - 1;
  }

  return size;
};

/**
 * Read a varint (type 2).
 * @param {Buffer} data
 * @param {Number} off
 * @returns {Object}
 */

encoding.readVarint2N = function readVarint2N(data, off) {
  const num = new U64();

  let size = 0;

  for (;;) {
    assert(off < data.length, off);

    const ch = data[off++];
    size++;

    enforce(num.lte(UINT128_MAX), off, 'Number exceeds 2^64-1');

    num.ishln(7).iorn(ch & 0x7f);

    if ((ch & 0x80) === 0)
      break;

    enforce(!num.eq(U64.UINT64_MAX), off, 'Number exceeds 2^64-1');
    num.iaddn(1);
  }

  return new Varint(size, num);
};

/**
 * Write a varint (type 2).
 * @param {Buffer} dst
 * @param {U64} num
 * @param {Number} off
 * @returns {Number} Buffer offset.
 */

encoding.writeVarint2N = function writeVarint2N(dst, num, off) {
  enforce(!num.sign, off, 'Signed');

  if (num.hi === 0)
    return encoding.writeVarint2(dst, num.toInt(), off);

  num = num.clone();

  const tmp = [];

  let len = 0;

  for (;;) {
    tmp[len] = num.andln(0x7f) | (len ? 0x80 : 0x00);
    if (num.lten(0x7f))
      break;
    num.ishrn(7).isubn(1);
    len++;
  }

  enforce(off + len + 1 <= dst.length, off, 'Out of bounds write');

  do {
    dst[off++] = tmp[len];
  } while (len--);

  return off;
};

/**
 * Calculate size of varint (type 2).
 * @param {U64} num
 * @returns {Number} size
 */

encoding.sizeVarint2N = function sizeVarint2N(num) {
  enforce(!num.sign, 0, 'Signed');

  if (num.hi === 0)
    return encoding.sizeVarint2(num.toInt());

  num = num.clone();

  let size = 0;

  for (;;) {
    size++;
    if (num.lten(0x7f))
      break;
    num.ishrn(7).isubn(1);
  }

  return size;
};

/**
 * Serialize number as a u8.
 * @param {Number} num
 * @returns {Buffer}
 */

encoding.U8 = function U8(num) {
  const data = Buffer.allocUnsafe(1);
  data[0] = num >>> 0;
  return data;
};

/**
 * Serialize number as a u16.
 * @param {Number} num
 * @returns {Buffer}
 */

encoding.U16 = function U16(num) {
  const data = Buffer.allocUnsafe(2);
  data.writeUInt16LE(num, 0, true);
  return data;
};

/**
 * Serialize number as a u32le.
 * @param {Number} num
 * @returns {Buffer}
 */

encoding.U32 = function U32(num) {
  const data = Buffer.allocUnsafe(4);
  data.writeUInt32LE(num, 0, true);
  return data;
};

/**
 * Serialize number as a u32be.
 * @param {Number} num
 * @returns {Buffer}
 */

encoding.U32BE = function U32BE(num) {
  const data = Buffer.allocUnsafe(4);
  data.writeUInt32BE(num, 0, true);
  return data;
};

/**
 * Get size of varint-prefixed bytes.
 * @param {Buffer} data
 * @returns {Number}
 */

encoding.sizeVarBytes = function sizeVarBytes(data) {
  return encoding.sizeVarint(data.length) + data.length;
};

/**
 * Get size of varint-prefixed length.
 * @param {Number} len
 * @returns {Number}
 */

encoding.sizeVarlen = function sizeVarlen(len) {
  return encoding.sizeVarint(len) + len;
};

/**
 * Get size of varint-prefixed string.
 * @param {String} str
 * @returns {Number}
 */

encoding.sizeVarString = function sizeVarString(str, enc) {
  if (typeof str !== 'string')
    return encoding.sizeVarBytes(str);

  const len = Buffer.byteLength(str, enc);

  return encoding.sizeVarint(len) + len;
};

/**
 * EncodingError
 * @constructor
 * @param {Number} offset
 * @param {String} reason
 */

encoding.EncodingError = function EncodingError(offset, reason, start) {
  if (!(this instanceof EncodingError))
    return new EncodingError(offset, reason, start);

  Error.call(this);

  this.type = 'EncodingError';
  this.message = `${reason} (offset=${offset}).`;

  if (Error.captureStackTrace)
    Error.captureStackTrace(this, start || EncodingError);
};

Object.setPrototypeOf(encoding.EncodingError.prototype, Error.prototype);

/*
 * Helpers
 */

function isSafe(hi, lo) {
  if (hi < 0) {
    hi = ~hi;
    if (lo === 0)
      hi += 1;
  }

  return (hi & 0xffe00000) === 0;
}

function write64(dst, num, off, be) {
  let neg = false;

  if (num < 0) {
    num = -num;
    neg = true;
  }

  let hi = (num * (1 / 0x100000000)) | 0;
  let lo = num | 0;

  if (neg) {
    if (lo === 0) {
      hi = (~hi + 1) | 0;
    } else {
      hi = ~hi;
      lo = ~lo + 1;
    }
  }

  if (be) {
    off = dst.writeInt32BE(hi, off, true);
    off = dst.writeInt32BE(lo, off, true);
  } else {
    off = dst.writeInt32LE(lo, off, true);
    off = dst.writeInt32LE(hi, off, true);
  }

  return off;
}

function Varint(size, value) {
  this.size = size;
  this.value = value;
}

function assert(value, offset) {
  if (!value)
    throw new encoding.EncodingError(offset, 'Out of bounds read', assert);
}

function enforce(value, offset, reason) {
  if (!value)
    throw new encoding.EncodingError(offset, reason, enforce);
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * staticwriter.js - buffer writer for wmcc_core.
 */



const assert = __webpack_require__(0);
const encoding = __webpack_require__(3);
const digest = __webpack_require__(5);

const EMPTY = Buffer.alloc(0);
const POOLSIZE = 100 << 10;

let POOL = null;

/**
 * Statically allocated buffer writer.
 * @alias module:utils.StaticWriter
 * @constructor
 * @param {Number} size
 */

function StaticWriter(size) {
  if (!(this instanceof StaticWriter))
    return new StaticWriter(size);

  this.data = size ? Buffer.allocUnsafe(size) : EMPTY;
  this.offset = 0;
}

/**
 * Allocate writer from preallocated 100kb pool.
 * @param {Number} size
 * @returns {StaticWriter}
 */

StaticWriter.pool = function pool(size) {
  if (size <= POOLSIZE) {
    if (!POOL)
      POOL = Buffer.allocUnsafeSlow(POOLSIZE);

    const bw = new StaticWriter(0);
    bw.data = POOL.slice(0, size);
    return bw;
  }

  return new StaticWriter(size);
};

/**
 * Allocate and render the final buffer.
 * @returns {Buffer} Rendered buffer.
 */

StaticWriter.prototype.render = function render() {
  const data = this.data;
  assert(this.offset === data.length);
  this.destroy();
  return data;
};

/**
 * Get size of data written so far.
 * @returns {Number}
 */

StaticWriter.prototype.getSize = function getSize() {
  return this.offset;
};

/**
 * Seek to relative offset.
 * @param {Number} offset
 */

StaticWriter.prototype.seek = function seek(offset) {
  this.offset += offset;
};

/**
 * Destroy the buffer writer.
 */

StaticWriter.prototype.destroy = function destroy() {
  this.data = EMPTY;
  this.offset = 0;
};

/**
 * Write uint8.
 * @param {Number} value
 */

StaticWriter.prototype.writeU8 = function writeU8(value) {
  this.offset = this.data.writeUInt8(value, this.offset, true);
};

/**
 * Write uint16le.
 * @param {Number} value
 */

StaticWriter.prototype.writeU16 = function writeU16(value) {
  this.offset = this.data.writeUInt16LE(value, this.offset, true);
};

/**
 * Write uint16be.
 * @param {Number} value
 */

StaticWriter.prototype.writeU16BE = function writeU16BE(value) {
  this.offset = this.data.writeUInt16BE(value, this.offset, true);
};

/**
 * Write uint32le.
 * @param {Number} value
 */

StaticWriter.prototype.writeU32 = function writeU32(value) {
  this.offset = this.data.writeUInt32LE(value, this.offset, true);
};

/**
 * Write uint32be.
 * @param {Number} value
 */

StaticWriter.prototype.writeU32BE = function writeU32BE(value) {
  this.offset = this.data.writeUInt32BE(value, this.offset, true);
};

/**
 * Write uint64le.
 * @param {Number} value
 */

StaticWriter.prototype.writeU64 = function writeU64(value) {
  this.offset = encoding.writeU64(this.data, value, this.offset);
};

/**
 * Write uint64be.
 * @param {Number} value
 */

StaticWriter.prototype.writeU64BE = function writeU64BE(value) {
  this.offset = encoding.writeU64BE(this.data, value, this.offset);
};

/**
 * Write uint64le.
 * @param {U64} value
 */

StaticWriter.prototype.writeU64N = function writeU64N(value) {
  this.offset = encoding.writeU64N(this.data, value, this.offset);
};

/**
 * Write uint64be.
 * @param {U64} value
 */

StaticWriter.prototype.writeU64BEN = function writeU64BEN(value) {
  this.offset = encoding.writeU64BEN(this.data, value, this.offset);
};

/**
 * Write int8.
 * @param {Number} value
 */

StaticWriter.prototype.writeI8 = function writeI8(value) {
  this.offset = this.data.writeInt8(value, this.offset, true);
};

/**
 * Write int16le.
 * @param {Number} value
 */

StaticWriter.prototype.writeI16 = function writeI16(value) {
  this.offset = this.data.writeInt16LE(value, this.offset, true);
};

/**
 * Write int16be.
 * @param {Number} value
 */

StaticWriter.prototype.writeI16BE = function writeI16BE(value) {
  this.offset = this.data.writeInt16BE(value, this.offset, true);
};

/**
 * Write int32le.
 * @param {Number} value
 */

StaticWriter.prototype.writeI32 = function writeI32(value) {
  this.offset = this.data.writeInt32LE(value, this.offset, true);
};

/**
 * Write int32be.
 * @param {Number} value
 */

StaticWriter.prototype.writeI32BE = function writeI32BE(value) {
  this.offset = this.data.writeInt32BE(value, this.offset, true);
};

/**
 * Write int64le.
 * @param {Number} value
 */

StaticWriter.prototype.writeI64 = function writeI64(value) {
  this.offset = encoding.writeI64(this.data, value, this.offset);
};

/**
 * Write int64be.
 * @param {Number} value
 */

StaticWriter.prototype.writeI64BE = function writeI64BE(value) {
  this.offset = encoding.writeI64BE(this.data, value, this.offset);
};

/**
 * Write int64le.
 * @param {I64} value
 */

StaticWriter.prototype.writeI64N = function writeI64N(value) {
  this.offset = encoding.writeI64N(this.data, value, this.offset);
};

/**
 * Write int64be.
 * @param {I64} value
 */

StaticWriter.prototype.writeI64BEN = function writeI64BEN(value) {
  this.offset = encoding.writeI64BEN(this.data, value, this.offset);
};

/**
 * Write float le.
 * @param {Number} value
 */

StaticWriter.prototype.writeFloat = function writeFloat(value) {
  this.offset = this.data.writeFloatLE(value, this.offset, true);
};

/**
 * Write float be.
 * @param {Number} value
 */

StaticWriter.prototype.writeFloatBE = function writeFloatBE(value) {
  this.offset = this.data.writeFloatBE(value, this.offset, true);
};

/**
 * Write double le.
 * @param {Number} value
 */

StaticWriter.prototype.writeDouble = function writeDouble(value) {
  this.offset = this.data.writeDoubleLE(value, this.offset, true);
};

/**
 * Write double be.
 * @param {Number} value
 */

StaticWriter.prototype.writeDoubleBE = function writeDoubleBE(value) {
  this.offset = this.data.writeDoubleBE(value, this.offset, true);
};

/**
 * Write a varint.
 * @param {Number} value
 */

StaticWriter.prototype.writeVarint = function writeVarint(value) {
  this.offset = encoding.writeVarint(this.data, value, this.offset);
};

/**
 * Write a varint.
 * @param {U64} value
 */

StaticWriter.prototype.writeVarintN = function writeVarintN(value) {
  this.offset = encoding.writeVarintN(this.data, value, this.offset);
};

/**
 * Write a varint (type 2).
 * @param {Number} value
 */

StaticWriter.prototype.writeVarint2 = function writeVarint2(value) {
  this.offset = encoding.writeVarint2(this.data, value, this.offset);
};

/**
 * Write a varint (type 2).
 * @param {U64} value
 */

StaticWriter.prototype.writeVarint2N = function writeVarint2N(value) {
  this.offset = encoding.writeVarint2N(this.data, value, this.offset);
};

/**
 * Write bytes.
 * @param {Buffer} value
 */

StaticWriter.prototype.writeBytes = function writeBytes(value) {
  if (value.length === 0)
    return;

  value.copy(this.data, this.offset);

  this.offset += value.length;
};

/**
 * Write bytes with a varint length before them.
 * @param {Buffer} value
 */

StaticWriter.prototype.writeVarBytes = function writeVarBytes(value) {
  this.writeVarint(value.length);
  this.writeBytes(value);
};

/**
 * Copy bytes.
 * @param {Buffer} value
 * @param {Number} start
 * @param {Number} end
 */

StaticWriter.prototype.copy = function copy(value, start, end) {
  const len = end - start;

  if (len === 0)
    return;

  value.copy(this.data, this.offset, start, end);
  this.offset += len;
};

/**
 * Write string to buffer.
 * @param {String} value
 * @param {String?} enc - Any buffer-supported encoding.
 */

StaticWriter.prototype.writeString = function writeString(value, enc) {
  if (value.length === 0)
    return;

  const size = Buffer.byteLength(value, enc);

  this.data.write(value, this.offset, enc);

  this.offset += size;
};

/**
 * Write a 32 byte hash.
 * @param {Hash} value
 */

StaticWriter.prototype.writeHash = function writeHash(value) {
  if (typeof value !== 'string') {
    assert(value.length === 32);
    this.writeBytes(value);
    return;
  }
  assert(value.length === 64);
  this.data.write(value, this.offset, 'hex');
  this.offset += 32;
};

/**
 * Write a string with a varint length before it.
 * @param {String}
 * @param {String?} enc - Any buffer-supported encoding.
 */

StaticWriter.prototype.writeVarString = function writeVarString(value, enc) {
  if (value.length === 0) {
    this.writeVarint(0);
    return;
  }

  const size = Buffer.byteLength(value, enc);

  this.writeVarint(size);
  this.data.write(value, this.offset, enc);

  this.offset += size;
};

/**
 * Write a null-terminated string.
 * @param {String|Buffer}
 * @param {String?} enc - Any buffer-supported encoding.
 */

StaticWriter.prototype.writeNullString = function writeNullString(value, enc) {
  this.writeString(value, enc);
  this.writeU8(0);
};

/**
 * Calculate and write a checksum for the data written so far.
 */

StaticWriter.prototype.writeChecksum = function writeChecksum() {
  const data = this.data.slice(0, this.offset);
  const hash = digest.hash256(data);
  hash.copy(this.data, this.offset, 0, 4);
  this.offset += 4;
};

/**
 * Fill N bytes with value.
 * @param {Number} value
 * @param {Number} size
 */

StaticWriter.prototype.fill = function fill(value, size) {
  assert(size >= 0);

  if (size === 0)
    return;

  this.data.fill(value, this.offset, this.offset + size);
  this.offset += size;
};

/*
 * Expose
 */

module.exports = StaticWriter;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * digest.js - hash functions for wmcc_core.
 */



/**
 * @module crypto.digest
 */

const assert = __webpack_require__(0);
const crypto = __webpack_require__(24);
const native = __webpack_require__(18).binding;
const POOL64 = Buffer.allocUnsafe(64);

/**
 * Hash with chosen algorithm.
 * @param {String} alg
 * @param {Buffer} data
 * @returns {Buffer}
 */

exports.hash = function hash(alg, data) {
  return crypto.createHash(alg).update(data).digest();
};

/**
 * Hash with ripemd160.
 * @param {Buffer} data
 * @returns {Buffer}
 */

exports.ripemd160 = function ripemd160(data) {
  return exports.hash('ripemd160', data);
};

/**
 * Hash with sha1.
 * @param {Buffer} data
 * @returns {Buffer}
 */

exports.sha1 = function sha1(data) {
  return exports.hash('sha1', data);
};

/**
 * Hash with sha256.
 * @param {Buffer} data
 * @returns {Buffer}
 */

exports.sha256 = function sha256(data) {
  return exports.hash('sha256', data);
};

/**
 * Hash with sha256 and ripemd160 (OP_HASH160).
 * @param {Buffer} data
 * @returns {Buffer}
 */

exports.hash160 = function hash160(data) {
  return exports.ripemd160(exports.sha256(data));
};

/**
 * Hash with sha256 twice (OP_HASH256).
 * @param {Buffer} data
 * @returns {Buffer}
 */

exports.hash256 = function hash256(data) {
  return exports.sha256(exports.sha256(data));
};

/**
 * Hash left and right hashes with hash256.
 * @param {Buffer} left
 * @param {Buffer} right
 * @returns {Buffer}
 */

exports.root256 = function root256(left, right) {
  const data = POOL64;

  assert(left.length === 32);
  assert(right.length === 32);

  left.copy(data, 0);
  right.copy(data, 32);

  return exports.hash256(data);
};

/**
 * Create an HMAC.
 * @param {String} alg
 * @param {Buffer} data
 * @param {Buffer} key
 * @returns {Buffer} HMAC
 */

exports.hmac = function hmac(alg, data, key) {
  const ctx = crypto.createHmac(alg, key);
  return ctx.update(data).digest();
};

if (native) {
  exports.hash = native.hash;
  exports.hmac = native.hmac;
  exports.ripemd160 = native.ripemd160;
  exports.sha1 = native.sha1;
  exports.sha256 = native.sha256;
  exports.hash160 = native.hash160;
  exports.hash256 = native.hash256;
  exports.root256 = native.root256;
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * network.js - network object for wmcc_core.
 */



const assert = __webpack_require__(0);
const util = __webpack_require__(1);
const networks = __webpack_require__(83);
const consensus = __webpack_require__(7);
const TimeData = __webpack_require__(84);

/**
 * Represents a network.
 * @alias module:protocol.Network
 * @constructor
 * @param {Object|NetworkType} options - See {@link module:network}.
 */

function Network(options) {
  if (!(this instanceof Network))
    return new Network(options);

  assert(!Network[options.type], 'Cannot create two networks.');

  this.type = options.type;
  this.seeds = options.seeds;
  this.magic = options.magic;
  this.port = options.port;
  this.checkpointMap = options.checkpointMap;
  this.lastCheckpoint = options.lastCheckpoint;
  this.checkpoints = [];
  this.halvingInterval = options.halvingInterval;
  this.genesis = options.genesis;
  this.genesisBlock = options.genesisBlock;
  this.pow = options.pow;
  this.block = options.block;
  this.bip30 = options.bip30;
  this.activationThreshold = options.activationThreshold;
  this.minerWindow = options.minerWindow;
  this.deployments = options.deployments;
  this.deploys = options.deploys;
  this.unknownBits = ~consensus.VERSION_TOP_MASK;
  this.keyPrefix = options.keyPrefix;
  this.addressPrefix = options.addressPrefix;
  this.requireStandard = options.requireStandard;
  this.rpcPort = options.rpcPort;
  this.minRelay = options.minRelay;
  this.feeRate = options.feeRate;
  this.maxFeeRate = options.maxFeeRate;
  this.selfConnect = options.selfConnect;
  this.requestMempool = options.requestMempool;
  this.time = new TimeData();

  this._init();
}

/**
 * Default network.
 * @type {Network}
 */

Network.primary = null;

/**
 * Default network type.
 * @type {String}
 */

Network.type = null;

/*
 * Networks (to avoid hash table mode).
 */

Network.mainnet = null;
Network.testnet = null;
Network.regtest = null;
//Network.segnet4 = null;
Network.simnet = null;

/**
 * Get a deployment by bit index.
 * @param {Number} bit
 * @returns {Object}
 */

Network.prototype._init = function _init() {
  let bits = 0;

  for (const deployment of this.deploys)
    bits |= 1 << deployment.bit;

  bits |= consensus.VERSION_TOP_MASK;

  this.unknownBits = ~bits;

  for (const key of Object.keys(this.checkpointMap)) {
    const hash = this.checkpointMap[key];
    const height = Number(key);

    this.checkpoints.push({ hash: hash, height: height });
  }

  this.checkpoints.sort(cmpNode);
};

/**
 * Get a deployment by bit index.
 * @param {Number} bit
 * @returns {Object}
 */

Network.prototype.byBit = function byBit(bit) {
  const index = util.binarySearch(this.deploys, bit, cmpBit);

  if (index === -1)
    return null;

  return this.deploys[index];
};

/**
 * Get network adjusted time.
 * @returns {Number}
 */

Network.prototype.now = function now() {
  return this.time.now();
};

/**
 * Get network ntp time.
 * @returns {Number}
 */

Network.prototype.current = function current() {
  return this.time.current();
};


/**
 * Get network adjusted time in milliseconds.
 * @returns {Number}
 */

Network.prototype.ms = function ms() {
  return this.time.ms();
};

/**
 * Create a network. Get existing network if possible.
 * @param {NetworkType|Object} options
 * @returns {Network}
 */

Network.create = function create(options) {
  if (typeof options === 'string')
    options = networks[options];

  assert(options, 'Unknown network.');

  if (Network[options.type])
    return Network[options.type];

  const network = new Network(options);

  Network[network.type] = network;

  if (!Network.primary)
    Network.primary = network;

  return network;
};

/**
 * Set the default network. This network will be used
 * if nothing is passed as the `network` option for
 * certain objects.
 * @param {NetworkType} type - Network type.
 * @returns {Network}
 */

Network.set = function set(type) {
  assert(typeof type === 'string', 'Bad network.');
  Network.primary = Network.get(type);
  Network.type = type;
  return Network.primary;
};

/**
 * Get a network with a string or a Network object.
 * @param {NetworkType|Network} type - Network type.
 * @returns {Network}
 */

Network.get = function get(type) {
  if (!type) {
    assert(Network.primary, 'No default network.');
    return Network.primary;
  }

  if (type instanceof Network)
    return type;

  if (typeof type === 'string')
    return Network.create(type);

  throw new Error('Unknown network.');
};

/**
 * Get a network with a string or a Network object.
 * @param {NetworkType|Network} type - Network type.
 * @returns {Network}
 */

Network.ensure = function ensure(type) {
  if (!type) {
    assert(Network.primary, 'No default network.');
    return Network.primary;
  }

  if (type instanceof Network)
    return type;

  if (typeof type === 'string') {
    if (networks[type])
      return Network.create(type);
  }

  assert(Network.primary, 'No default network.');

  return Network.primary;
};

/**
 * Get a network by an associated comparator.
 * @private
 * @param {Object} value
 * @param {Function} compare
 * @param {Network|null} network
 * @param {String} name
 * @returns {Network}
 */

Network.by = function by(value, compare, network, name) {
  if (network) {
    network = Network.get(network);
    if (compare(network, value))
      return network;
    throw new Error(`Network mismatch for ${name}.`);
  }

  for (const type of networks.types) {
    network = networks[type];
    if (compare(network, value))
      return Network.get(type);
  }

  throw new Error(`Network not found for ${name}.`);
};

/**
 * Get a network by its magic number.
 * @param {Number} value
 * @param {Network?} network
 * @returns {Network}
 */

Network.fromMagic = function fromMagic(value, network) {
  return Network.by(value, cmpMagic, network, 'magic number');
};

/**
 * Get a network by its WIF prefix.
 * @param {Number} value
 * @param {Network?} network
 * @returns {Network}
 */

Network.fromWIF = function fromWIF(prefix, network) {
  return Network.by(prefix, cmpWIF, network, 'WIF');
};

/**
 * Get a network by its xpubkey prefix.
 * @param {Number} value
 * @param {Network?} network
 * @returns {Network}
 */

Network.fromPublic = function fromPublic(prefix, network) {
  return Network.by(prefix, cmpPub, network, 'xpubkey');
};

/**
 * Get a network by its xprivkey prefix.
 * @param {Number} value
 * @param {Network?} network
 * @returns {Network}
 */

Network.fromPrivate = function fromPrivate(prefix, network) {
  return Network.by(prefix, cmpPriv, network, 'xprivkey');
};

/**
 * Get a network by its xpubkey base58 prefix.
 * @param {String} prefix
 * @param {Network?} network
 * @returns {Network}
 */

Network.fromPublic58 = function fromPublic58(prefix, network) {
  return Network.by(prefix, cmpPub58, network, 'xpubkey');
};

/**
 * Get a network by its xprivkey base58 prefix.
 * @param {String} prefix
 * @param {Network?} network
 * @returns {Network}
 */

Network.fromPrivate58 = function fromPrivate58(prefix, network) {
  return Network.by(prefix, cmpPriv58, network, 'xprivkey');
};

/**
 * Get a network by its base58 address prefix.
 * @param {Number} value
 * @param {Network?} network
 * @returns {Network}
 */

Network.fromAddress = function fromAddress(prefix, network) {
  return Network.by(prefix, cmpAddress, network, 'base58 address');
};

/**
 * Get a network by its bech32 address prefix.
 * @param {String} hrp
 * @param {Network?} network
 * @returns {Network}
 */

Network.fromBech32 = function fromBech32(hrp, network) {
  return Network.by(hrp, cmpBech32, network, 'bech32 address');
};

/**
 * Convert the network to a string.
 * @returns {String}
 */

Network.prototype.toString = function toString() {
  return this.type;
};

/**
 * Inspect the network.
 * @returns {String}
 */

Network.prototype.inspect = function inspect() {
  return `<Network: ${this.type}>`;
};

/**
 * Test an object to see if it is a Network.
 * @param {Object} obj
 * @returns {Boolean}
 */

Network.isNetwork = function isNetwork(obj) {
  return obj instanceof Network;
};

/*
 * Set initial network.
 */

Network.set(process.env.WMCC_NETWORK || 'mainnet');

/*
 * Helpers
 */

function cmpBit(a, b) {
  return a.bit - b;
}

function cmpNode(a, b) {
  return a.height - b.height;
}

function cmpMagic(network, magic) {
  return network.magic === magic;
}

function cmpWIF(network, prefix) {
  return network.keyPrefix.privkey === prefix;
}

function cmpPub(network, prefix) {
  return network.keyPrefix.xpubkey === prefix;
}

function cmpPriv(network, prefix) {
  return network.keyPrefix.xprivkey === prefix;
}

function cmpPub58(network, prefix) {
  return network.keyPrefix.xpubkey58 === prefix;
}

function cmpPriv58(network, prefix) {
  return network.keyPrefix.xprivkey58 === prefix;
}

function cmpAddress(network, prefix) {
  const prefixes = network.addressPrefix;

  switch (prefix) {
    case prefixes.pubkeyhash:
    case prefixes.scripthash:
    case prefixes.witnesspubkeyhash:
    case prefixes.witnessscripthash:
      return true;
  }

  return false;
}

function cmpBech32(network, hrp) {
  return network.addressPrefix.bech32 === hrp;
}

/*
 * Expose
 */

module.exports = Network;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * consensus.js - consensus constants and helpers for wmcc_core.
 */



/**
 * @module protocol/consensus
 */

const assert = __webpack_require__(0);
const BN = __webpack_require__(26);

/**
 * One wmcc in wmcoin.
 * @const {Amount}
 * @default
 */

exports.COIN = 100000000;

/**
 * Initial wmcc coin
 * `10million wmcc*wmcoin` (consensus).
 * @const {Amount}
 * @default
 */

exports.INITIAL_COIN = 10000000 * exports.COIN;

/**
 * Initial wmcc coin reserve
 * `10million wmcc*wmcoin` (consensus).
 * @const {Amount}
 * @default
 */

exports.INITIAL_COINRESERVE = 10000000 * exports.COIN;

/**
 * Maximum amount of money in satoshis:
 * `21million * 1btc` (consensus).
 * @const {Amount}
 * @default
 */

// exports.MAX_MONEY = 84000000 * exports.COIN; // ctl //

/**
 * Base block subsidy (consensus).
 * Note to shitcoin implementors: if you
 * increase this to anything greater than
 * 33 bits, getReward will have to be
 * modified to handle the shifts.
 * @const {Amount}
 * @default
 */

// exports.BASE_REWARD = 50 * exports.COIN;
exports.BASE_REWARD = 50 * exports.COIN;

/**
 * Base block reserve (consensus).
 * @const {Amount}
 * @default
 */

exports.BASE_RESERVE = 5 * exports.COIN;

/**
 * No halving
 * Half base block subsidy. Required to
 * calculate the reward properly (with
 * only 32 bit shifts available).
 * @const {Amount}
 * @default
 */

exports.HALF_REWARD = exports.BASE_REWARD; // Math.floor(exports.BASE_REWARD / 2);

/**
 * Maximum block base size (consensus).
 * @const {Number}
 * @default
 */

exports.MAX_BLOCK_SIZE = 1000000;

/**
 * Maximum block serialization size (protocol).
 * @const {Number}
 * @default
 */

exports.MAX_RAW_BLOCK_SIZE = 4000000;

/**
 * Maximum block weight (consensus).
 * @const {Number}
 * @default
 */

exports.MAX_BLOCK_WEIGHT = 4000000;

/**
 * Maximum block sigops (consensus).
 * @const {Number}
 * @default
 */

exports.MAX_BLOCK_SIGOPS = 1000000 / 50;

/**
 * Maximum block sigops cost (consensus).
 * @const {Number}
 * @default
 */

exports.MAX_BLOCK_SIGOPS_COST = 80000;

/**
 * What bits to set in version
 * for versionbits blocks.
 * @const {Number}
 * @default
 */

exports.VERSION_TOP_BITS = 0x20000000;

/**
 * What bitmask determines whether
 * versionbits is in use.
 * @const {Number}
 * @default
 */

exports.VERSION_TOP_MASK = 0xe0000000;

/**
 * Number of blocks before a coinbase
 * spend can occur (consensus).
 * @const {Number}
 * @default
 */

exports.COINBASE_MATURITY = 100;

/**
 * Amount to multiply base/non-witness sizes by.
 * @const {Number}
 * @default
 */

exports.WITNESS_SCALE_FACTOR = 4;

/**
 * nLockTime threshold for differentiating
 * between height and time (consensus).
 * Tue Nov 5 00:53:20 1985 UTC
 * @const {Number}
 * @default
 */

exports.LOCKTIME_THRESHOLD = 500000000;

/**
 * Highest nSequence bit -- disables
 * sequence locktimes (consensus).
 * @const {Number}
 */

exports.SEQUENCE_DISABLE_FLAG = (1 << 31) >>> 0;

/**
 * Sequence time: height or time (consensus).
 * @const {Number}
 * @default
 */

exports.SEQUENCE_TYPE_FLAG = 1 << 22;

/**
 * Sequence granularity for time (consensus).
 * @const {Number}
 * @default
 */

exports.SEQUENCE_GRANULARITY = 9;

/**
 * Sequence mask (consensus).
 * @const {Number}
 * @default
 */

exports.SEQUENCE_MASK = 0x0000ffff;

/**
 * Max serialized script size (consensus).
 * @const {Number}
 * @default
 */

exports.MAX_SCRIPT_SIZE = 10000;

/**
 * Max stack size during execution (consensus).
 * @const {Number}
 * @default
 */

exports.MAX_SCRIPT_STACK = 1000;

/**
 * Max script element size (consensus).
 * @const {Number}
 * @default
 */

exports.MAX_SCRIPT_PUSH = 520;

/**
 * Max opcodes executed (consensus).
 * @const {Number}
 * @default
 */

exports.MAX_SCRIPT_OPS = 201;

/**
 * Max `n` value for multisig (consensus).
 * @const {Number}
 * @default
 */

exports.MAX_MULTISIG_PUBKEYS = 20;

/**
 * The date bip16 (p2sh) was activated (consensus).
 * @const {Number}
 * @default
 */

exports.BIP16_TIME = 1512086400; // cto // Friday, December 1, 2017 12:00:00 AM

/**
 * Maximum amount of money in wmcoin
 * by block height (consensus).
 * @param {Number} block height
 * @returns {Number}
 */

exports.getMaxMoney = function getMaxMoney(height) {
  if (!height) return 0xffffffffffffffff;
  const initial = exports.INITIAL_COIN + exports.INITIAL_COINRESERVE;
  const genCoins = (exports.BASE_REWARD + exports.BASE_RESERVE)*height;
  return initial + genCoins;
};

/**
 * Convert a compact number to a big number.
 * Used for `block.bits` -> `target` conversion.
 * @param {Number} compact
 * @returns {BN}
 */

exports.fromCompact = function fromCompact(compact) {
  const exponent = compact >>> 24;
  const negative = (compact >>> 23) & 1;
  let mantissa = compact & 0x7fffff;
  let num;

  if (compact === 0)
    return new BN(0);

  if (exponent <= 3) {
    mantissa >>>= 8 * (3 - exponent);
    num = new BN(mantissa);
  } else {
    num = new BN(mantissa);
    num.iushln(8 * (exponent - 3));
  }

  if (negative)
    num.ineg();

  return num;
};

/**
 * Convert a big number to a compact number.
 * Used for `target` -> `block.bits` conversion.
 * @param {BN} num
 * @returns {Number}
 */

exports.toCompact = function toCompact(num) {
  let mantissa, exponent, compact;

  if (num.cmpn(0) === 0)
    return 0;

  exponent = num.byteLength();

  if (exponent <= 3) {
    mantissa = num.toNumber();
    mantissa <<= 8 * (3 - exponent);
  } else {
    mantissa = num.ushrn(8 * (exponent - 3)).toNumber();
  }

  if (mantissa & 0x800000) {
    mantissa >>= 8;
    exponent++;
  }

  compact = (exponent << 24) | mantissa;

  if (num.isNeg())
    compact |= 0x800000;

  compact >>>= 0;

  return compact;
};

/**
 * Verify proof-of-work.
 * @param {Hash} hash
 * @param {Number} bits
 * @returns {Boolean}
 */

exports.verifyPOW = function verifyPOW(hash, bits) {
  const target = exports.fromCompact(bits);

  if (target.isNeg() || target.cmpn(0) === 0)
    return false;

  hash = new BN(hash, 'le');

  if (hash.cmp(target) > 0)
    return false;

  return true;
};

/**
 * Calculate block subsidy.
 * @param {Number} height - Reward era by height.
 * @returns {Amount}
 */

exports.getReward = function getReward(height, interval) {
  /*const halvings = Math.floor(height / interval);

  assert(height >= 0, 'Bad height for reward.');

  // BIP 42 (well, our own version of it,
  // since we can only handle 32 bit shifts).
  // https://github.com/bitcoin/bips/blob/master/bip-0042.mediawiki
  if (halvings >= 33)
    return 0;

  // We need to shift right by `halvings`,
  // but 50 btc is a 33 bit number, so we
  // cheat. We only start halving once the
  // halvings are at least 1.
  if (halvings === 0)
    return exports.BASE_REWARD;

  return exports.HALF_REWARD >>> (halvings - 1);*/
  return exports.BASE_REWARD;
};

exports.getTotalReward = function getTotalReward(height, interval) {

  return exports.BASE_REWARD + exports.BASE_RESERVE;
};
/**
 * Test version bit.
 * @param {Number} version
 * @param {Number} bit
 * @returns {Boolean}
 */

exports.hasBit = function hasBit(version, bit) {
  const bits = version & exports.VERSION_TOP_MASK;
  const topBits = exports.VERSION_TOP_BITS;
  const mask = 1 << bit;
  return (bits >>> 0) === topBits && (version & mask) !== 0;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * script.js - script interpreter for wmcc_core.
 */



const assert = __webpack_require__(0);
const consensus = __webpack_require__(7);
const policy = __webpack_require__(19);
const util = __webpack_require__(1);
const digest = __webpack_require__(5);
const merkle = __webpack_require__(66);
const BufferWriter = __webpack_require__(63);
const BufferReader = __webpack_require__(2);
const StaticWriter = __webpack_require__(4);
const Program = __webpack_require__(85);
const Opcode = __webpack_require__(90);
const Stack = __webpack_require__(40);
const ScriptError = __webpack_require__(35);
const ScriptNum = __webpack_require__(32);
const common = __webpack_require__(27);
const encoding = __webpack_require__(3);
const secp256k1 = __webpack_require__(12);
const Address = __webpack_require__(11);
const opcodes = common.opcodes;
const scriptTypes = common.types;
const scriptTypesByVal = common.typesByVal;
const EMPTY_BUFFER = Buffer.alloc(0);

/**
 * Represents a input or output script.
 * @alias module:script.Script
 * @constructor
 * @param {Buffer|Array|Object|NakedScript} code - Array
 * of script code or a serialized script Buffer.
 * @property {Array} code - Parsed script code.
 * @property {Buffer?} raw - Serialized script.
 * @property {Number} length - Number of parsed opcodes.
 */

function Script(options) {
  if (!(this instanceof Script))
    return new Script(options);

  this.raw = EMPTY_BUFFER;
  this.code = [];

  if (options)
    this.fromOptions(options);
}

/**
 * Script opcodes.
 * @enum {Number}
 * @default
 */

Script.opcodes = common.opcodes;

/**
 * Opcodes by value.
 * @const {RevMap}
 */

Script.opcodesByVal = common.opcodesByVal;

/**
 * Script and locktime flags. See {@link VerifyFlags}.
 * @enum {Number}
 */

Script.flags = common.flags;

/**
 * Sighash Types.
 * @enum {SighashType}
 * @default
 */

Script.hashType = common.hashType;

/**
 * Sighash types by value.
 * @const {RevMap}
 */

Script.hashTypeByVal = common.hashTypeByVal;

/**
 * Output script types.
 * @enum {Number}
 */

Script.types = common.types;

/**
 * Output script types by value.
 * @const {RevMap}
 */

Script.typesByVal = common.typesByVal;

/*
 * Expose length setter and getter.
 */

Object.defineProperty(Script.prototype, 'length', {
  get() {
    return this.code.length;
  },
  set(length) {
    this.code.length = length;
    return this.code.length;
  }
});

/**
 * Inject properties from options object.
 * @private
 * @param {Object} options
 */

Script.prototype.fromOptions = function fromOptions(options) {
  assert(options, 'Script data is required.');

  if (Buffer.isBuffer(options))
    return this.fromRaw(options);

  if (Array.isArray(options))
    return this.fromArray(options);

  if (options.raw) {
    if (!options.code)
      return this.fromRaw(options.raw);
    assert(Buffer.isBuffer(options.raw), 'Raw must be a Buffer.');
    this.raw = options.raw;
  }

  if (options.code) {
    if (!options.raw)
      return this.fromArray(options.code);
    assert(Array.isArray(options.code), 'Code must be an array.');
    this.code = options.code;
  }

  return this;
};

/**
 * Insantiate script from options object.
 * @param {Object} options
 * @returns {Script}
 */

Script.fromOptions = function fromOptions(options) {
  return new Script().fromOptions(options);
};

/**
 * Instantiate a value-only iterator.
 * @returns {ScriptIterator}
 */

Script.prototype.values = function values() {
  return this.code.values();
};

/**
 * Instantiate a key and value iterator.
 * @returns {ScriptIterator}
 */

Script.prototype.entries = function entries() {
  return this.code.entries();
};

/**
 * Instantiate a value-only iterator.
 * @returns {ScriptIterator}
 */

Script.prototype[Symbol.iterator] = function() {
  return this.code[Symbol.iterator]();
};

/**
 * Convert the script to an array of
 * Buffers (pushdatas) and Numbers
 * (opcodes).
 * @returns {Array}
 */

Script.prototype.toArray = function toArray() {
  return this.code.slice();
};

/**
 * Inject properties from an array of
 * of buffers and numbers.
 * @private
 * @param {Array} code
 * @returns {Script}
 */

Script.prototype.fromArray = function fromArray(code) {
  assert(Array.isArray(code));

  this.clear();

  for (const op of code)
    this.push(op);

  return this.compile();
};

/**
 * Instantiate script from an array
 * of buffers and numbers.
 * @param {Array} code
 * @returns {Script}
 */

Script.fromArray = function fromArray(code) {
  return new Script().fromArray(code);
};

/**
 * Convert script to stack items.
 * @returns {Buffer[]}
 */

Script.prototype.toItems = function toItems() {
  const items = [];

  for (const op of this.code) {
    const data = op.toPush();

    if (!data)
      throw new Error('Non-push opcode in script.');

    items.push(data);
  }

  return items;
};

/**
 * Inject data from stack items.
 * @private
 * @param {Buffer[]} items
 * @returns {Script}
 */

Script.prototype.fromItems = function fromItems(items) {
  assert(Array.isArray(items));

  this.clear();

  for (const item of items)
    this.pushData(item);

  return this.compile();
};

/**
 * Instantiate script from stack items.
 * @param {Buffer[]} items
 * @returns {Script}
 */

Script.fromItems = function fromItems(items) {
  return new Script().fromItems(items);
};

/**
 * Convert script to stack.
 * @returns {Stack}
 */

Script.prototype.toStack = function toStack() {
  return new Stack(this.toItems());
};

/**
 * Inject data from stack.
 * @private
 * @param {Stack} stack
 * @returns {Script}
 */

Script.prototype.fromStack = function fromStack(stack) {
  return this.fromItems(stack.items);
};

/**
 * Instantiate script from stack.
 * @param {Stack} stack
 * @returns {Script}
 */

Script.fromStack = function fromStack(stack) {
  return new Script().fromStack(stack);
};

/**
 * Clone the script.
 * @returns {Script} Cloned script.
 */

Script.prototype.clone = function clone() {
  return new Script().inject(this);
};

/**
 * Inject properties from script.
 * Used for cloning.
 * @private
 * @param {Script} script
 * @returns {Script}
 */

Script.prototype.inject = function inject(script) {
  this.raw = script.raw;
  this.code = script.code.slice();
  return this;
};

/**
 * Test equality against script.
 * @param {Script} script
 * @returns {Boolean}
 */

Script.prototype.equals = function equals(script) {
  assert(Script.isScript(script));
  return this.raw.equals(script.raw);
};

/**
 * Compare against another script.
 * @param {Script} script
 * @returns {Number}
 */

Script.prototype.compare = function compare(script) {
  assert(Script.isScript(script));
  return this.raw.compare(script.raw);
};

/**
 * Clear the script.
 * @returns {Script}
 */

Script.prototype.clear = function clear() {
  this.raw = EMPTY_BUFFER;
  this.code.length = 0;
  return this;
};

/**
 * Inspect the script.
 * @returns {String} Human-readable script code.
 */

Script.prototype.inspect = function inspect() {
  return `<Script: ${this.toString()}>`;
};

/**
 * Convert the script to a wmccd test string.
 * @returns {String} Human-readable script code.
 */

Script.prototype.toString = function toString() {
  const out = [];

  for (const op of this.code)
    out.push(op.toFormat());

  return out.join(' ');
};

/**
 * Format the script as wmccd asm.
 * @param {Boolean?} decode - Attempt to decode hash types.
 * @returns {String} Human-readable script.
 */

Script.prototype.toASM = function toASM(decode) {
  if (this.isNulldata())
    decode = false;

  const out = [];

  for (const op of this.code)
    out.push(op.toASM(decode));

  return out.join(' ');
};

/**
 * Re-encode the script internally. Useful if you
 * changed something manually in the `code` array.
 * @returns {Script}
 */

Script.prototype.compile = function compile() {
  if (this.code.length === 0)
    return this.clear();

  let size = 0;

  for (const op of this.code)
    size += op.getSize();

  const bw = new StaticWriter(size);

  for (const op of this.code)
    op.toWriter(bw);

  this.raw = bw.render();

  return this;
};

/**
 * Write the script to a buffer writer.
 * @param {BufferWriter} bw
 */

Script.prototype.toWriter = function toWriter(bw) {
  bw.writeVarBytes(this.raw);
  return bw;
};

/**
 * Encode the script to a Buffer. See {@link Script#encode}.
 * @param {String} enc - Encoding, either `'hex'` or `null`.
 * @returns {Buffer|String} Serialized script.
 */

Script.prototype.toRaw = function toRaw() {
  return this.raw;
};

/**
 * Convert script to a hex string.
 * @returns {String}
 */

Script.prototype.toJSON = function toJSON() {
  return this.toRaw().toString('hex');
};

/**
 * Inject properties from json object.
 * @private
 * @param {String} json
 */

Script.prototype.fromJSON = function fromJSON(json) {
  assert(typeof json === 'string', 'Code must be a string.');
  return this.fromRaw(Buffer.from(json, 'hex'));
};

/**
 * Instantiate script from a hex string.
 * @params {String} json
 * @returns {Script}
 */

Script.fromJSON = function fromJSON(json) {
  return new Script().fromJSON(json);
};

/**
 * Get the script's "subscript" starting at a separator.
 * @param {Number} index - The last separator to sign/verify beyond.
 * @returns {Script} Subscript.
 */

Script.prototype.getSubscript = function getSubscript(index) {
  if (index === 0)
    return this.clone();

  const script = new Script();

  for (let i = index; i < this.code.length; i++) {
    const op = this.code[i];

    if (op.value === -1)
      break;

    script.code.push(op);
  }

  return script.compile();
};

/**
 * Get the script's "subscript" starting at a separator.
 * Remove all OP_CODESEPARATORs if present. This bizarre
 * behavior is necessary for signing and verification when
 * code separators are present.
 * @returns {Script} Subscript.
 */

Script.prototype.removeSeparators = function removeSeparators() {
  let found = false;

  // Optimizing for the common case:
  // Check for any separators first.
  for (const op of this.code) {
    if (op.value === -1)
      break;

    if (op.value === opcodes.OP_CODESEPARATOR) {
      found = true;
      break;
    }
  }

  if (!found)
    return this;

  // Uncommon case: someone actually
  // has a code separator. Go through
  // and remove them all.
  const script = new Script();

  for (const op of this.code) {
    if (op.value === -1)
      break;

    if (op.value !== opcodes.OP_CODESEPARATOR)
      script.code.push(op);
  }

  return script.compile();
};

/**
 * Execute and interpret the script.
 * @param {Stack} stack - Script execution stack.
 * @param {Number?} flags - Script standard flags.
 * @param {TX?} tx - Transaction being verified.
 * @param {Number?} index - Index of input being verified.
 * @param {Amount?} value - Previous output value.
 * @param {Number?} version - Signature hash version (0=legacy, 1=segwit).
 * @throws {ScriptError} Will be thrown on VERIFY failures, among other things.
 */

Script.prototype.execute = function execute(stack, flags, tx, index, value, version) {
  if (flags == null)
    flags = Script.flags.STANDARD_VERIFY_FLAGS;

  if (version == null)
    version = 0;

  if (this.raw.length > consensus.MAX_SCRIPT_SIZE)
    throw new ScriptError('SCRIPT_SIZE');

  const state = [];
  const alt = [];

  let lastSep = 0;
  let opCount = 0;
  let negate = 0;
  let minimal = false;

  if (flags & Script.flags.VERIFY_MINIMALDATA)
    minimal = true;

  for (let ip = 0; ip < this.code.length; ip++) {
    const op = this.code[ip];

    if (op.value === -1)
      throw new ScriptError('BAD_OPCODE', op, ip);

    if (op.data && op.data.length > consensus.MAX_SCRIPT_PUSH)
      throw new ScriptError('PUSH_SIZE', op, ip);

    if (op.value > opcodes.OP_16 && ++opCount > consensus.MAX_SCRIPT_OPS)
      throw new ScriptError('OP_COUNT', op, ip);

    if (op.isDisabled())
      throw new ScriptError('DISABLED_OPCODE', op, ip);

    if (negate && !op.isBranch()) {
      if (stack.length + alt.length > consensus.MAX_SCRIPT_STACK)
        throw new ScriptError('STACK_SIZE', op, ip);
      continue;
    }

    if (op.data) {
      if (minimal && !op.isMinimal())
        throw new ScriptError('MINIMALDATA', op, ip);

      stack.push(op.data);

      if (stack.length + alt.length > consensus.MAX_SCRIPT_STACK)
        throw new ScriptError('STACK_SIZE', op, ip);

      continue;
    }

    switch (op.value) {
      case opcodes.OP_0: {
        stack.pushInt(0);
        break;
      }
      case opcodes.OP_1NEGATE: {
        stack.pushInt(-1);
        break;
      }
      case opcodes.OP_1:
      case opcodes.OP_2:
      case opcodes.OP_3:
      case opcodes.OP_4:
      case opcodes.OP_5:
      case opcodes.OP_6:
      case opcodes.OP_7:
      case opcodes.OP_8:
      case opcodes.OP_9:
      case opcodes.OP_10:
      case opcodes.OP_11:
      case opcodes.OP_12:
      case opcodes.OP_13:
      case opcodes.OP_14:
      case opcodes.OP_15:
      case opcodes.OP_16: {
        stack.pushInt(op.value - 0x50);
        break;
      }
      case opcodes.OP_NOP: {
        break;
      }
      case opcodes.OP_CHECKLOCKTIMEVERIFY: {
        // OP_CHECKLOCKTIMEVERIFY = OP_NOP2
        if (!(flags & Script.flags.VERIFY_CHECKLOCKTIMEVERIFY)) {
          if (flags & Script.flags.VERIFY_DISCOURAGE_UPGRADABLE_NOPS)
            throw new ScriptError('DISCOURAGE_UPGRADABLE_NOPS', op, ip);
          break;
        }

        if (!tx)
          throw new ScriptError('UNKNOWN_ERROR', 'No TX passed in.');

        if (stack.length === 0)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        const num = stack.getNum(-1, minimal, 5);

        if (num.isNeg())
          throw new ScriptError('NEGATIVE_LOCKTIME', op, ip);

        const locktime = num.toDouble();

        if (!tx.verifyLocktime(index, locktime))
          throw new ScriptError('UNSATISFIED_LOCKTIME', op, ip);

        break;
      }
      case opcodes.OP_CHECKSEQUENCEVERIFY: {
        // OP_CHECKSEQUENCEVERIFY = OP_NOP3
        if (!(flags & Script.flags.VERIFY_CHECKSEQUENCEVERIFY)) {
          if (flags & Script.flags.VERIFY_DISCOURAGE_UPGRADABLE_NOPS)
            throw new ScriptError('DISCOURAGE_UPGRADABLE_NOPS', op, ip);
          break;
        }

        if (!tx)
          throw new ScriptError('UNKNOWN_ERROR', 'No TX passed in.');

        if (stack.length === 0)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        const num = stack.getNum(-1, minimal, 5);

        if (num.isNeg())
          throw new ScriptError('NEGATIVE_LOCKTIME', op, ip);

        const locktime = num.toDouble();

        if (!tx.verifySequence(index, locktime))
          throw new ScriptError('UNSATISFIED_LOCKTIME', op, ip);

        break;
      }
      case opcodes.OP_NOP1:
      case opcodes.OP_NOP4:
      case opcodes.OP_NOP5:
      case opcodes.OP_NOP6:
      case opcodes.OP_NOP7:
      case opcodes.OP_NOP8:
      case opcodes.OP_NOP9:
      case opcodes.OP_NOP10: {
        if (flags & Script.flags.VERIFY_DISCOURAGE_UPGRADABLE_NOPS)
          throw new ScriptError('DISCOURAGE_UPGRADABLE_NOPS', op, ip);
        break;
      }
      case opcodes.OP_IF:
      case opcodes.OP_NOTIF: {
        let val = false;

        if (!negate) {
          if (stack.length < 1)
            throw new ScriptError('UNBALANCED_CONDITIONAL', op, ip);

          if (version === 1 && (flags & Script.flags.VERIFY_MINIMALIF)) {
            const item = stack.get(-1);

            if (item.length > 1)
              throw new ScriptError('MINIMALIF');

            if (item.length === 1 && item[0] !== 1)
              throw new ScriptError('MINIMALIF');
          }

          val = stack.getBool(-1);

          if (op.value === opcodes.OP_NOTIF)
            val = !val;

          stack.pop();
        }

        state.push(val);

        if (!val)
          negate += 1;

        break;
      }
      case opcodes.OP_ELSE: {
        if (state.length === 0)
          throw new ScriptError('UNBALANCED_CONDITIONAL', op, ip);

        state[state.length - 1] = !state[state.length - 1];

        if (!state[state.length - 1])
          negate += 1;
        else
          negate -= 1;

        break;
      }
      case opcodes.OP_ENDIF: {
        if (state.length === 0)
          throw new ScriptError('UNBALANCED_CONDITIONAL', op, ip);

        if (!state.pop())
          negate -= 1;

        break;
      }
      case opcodes.OP_VERIFY: {
        if (stack.length === 0)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        if (!stack.getBool(-1))
          throw new ScriptError('VERIFY', op, ip);

        stack.pop();

        break;
      }
      case opcodes.OP_RETURN: {
        throw new ScriptError('OP_RETURN', op, ip);
      }
      case opcodes.OP_TOALTSTACK: {
        if (stack.length === 0)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        alt.push(stack.pop());
        break;
      }
      case opcodes.OP_FROMALTSTACK: {
        if (alt.length === 0)
          throw new ScriptError('INVALID_ALTSTACK_OPERATION', op, ip);

        stack.push(alt.pop());
        break;
      }
      case opcodes.OP_2DROP: {
        if (stack.length < 2)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        stack.pop();
        stack.pop();
        break;
      }
      case opcodes.OP_2DUP: {
        if (stack.length < 2)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        const v1 = stack.get(-2);
        const v2 = stack.get(-1);

        stack.push(v1);
        stack.push(v2);
        break;
      }
      case opcodes.OP_3DUP: {
        if (stack.length < 3)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        const v1 = stack.get(-3);
        const v2 = stack.get(-2);
        const v3 = stack.get(-1);

        stack.push(v1);
        stack.push(v2);
        stack.push(v3);
        break;
      }
      case opcodes.OP_2OVER: {
        if (stack.length < 4)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        const v1 = stack.get(-4);
        const v2 = stack.get(-3);

        stack.push(v1);
        stack.push(v2);
        break;
      }
      case opcodes.OP_2ROT: {
        if (stack.length < 6)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        const v1 = stack.get(-6);
        const v2 = stack.get(-5);

        stack.erase(-6, -4);
        stack.push(v1);
        stack.push(v2);
        break;
      }
      case opcodes.OP_2SWAP: {
        if (stack.length < 4)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        stack.swap(-4, -2);
        stack.swap(-3, -1);
        break;
      }
      case opcodes.OP_IFDUP: {
        if (stack.length === 0)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        if (stack.getBool(-1)) {
          const val = stack.get(-1);
          stack.push(val);
        }

        break;
      }
      case opcodes.OP_DEPTH: {
        stack.pushInt(stack.length);
        break;
      }
      case opcodes.OP_DROP: {
        if (stack.length === 0)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        stack.pop();
        break;
      }
      case opcodes.OP_DUP: {
        if (stack.length === 0)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        stack.push(stack.get(-1));
        break;
      }
      case opcodes.OP_NIP: {
        if (stack.length < 2)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        stack.remove(-2);
        break;
      }
      case opcodes.OP_OVER: {
        if (stack.length < 2)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        stack.push(stack.get(-2));
        break;
      }
      case opcodes.OP_PICK:
      case opcodes.OP_ROLL: {
        if (stack.length < 2)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        const num = stack.getInt(-1, minimal, 4);
        stack.pop();

        if (num < 0 || num >= stack.length)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        const val = stack.get(-num - 1);

        if (op.value === opcodes.OP_ROLL)
          stack.remove(-num - 1);

        stack.push(val);
        break;
      }
      case opcodes.OP_ROT: {
        if (stack.length < 3)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        stack.swap(-3, -2);
        stack.swap(-2, -1);
        break;
      }
      case opcodes.OP_SWAP: {
        if (stack.length < 2)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        stack.swap(-2, -1);
        break;
      }
      case opcodes.OP_TUCK: {
        if (stack.length < 2)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        stack.insert(-2, stack.get(-1));
        break;
      }
      case opcodes.OP_SIZE: {
        if (stack.length < 1)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        stack.pushInt(stack.get(-1).length);
        break;
      }
      case opcodes.OP_EQUAL:
      case opcodes.OP_EQUALVERIFY: {
        if (stack.length < 2)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        const v1 = stack.get(-2);
        const v2 = stack.get(-1);

        const res = v1.equals(v2);

        stack.pop();
        stack.pop();

        stack.pushBool(res);

        if (op.value === opcodes.OP_EQUALVERIFY) {
          if (!res)
            throw new ScriptError('EQUALVERIFY', op, ip);
          stack.pop();
        }

        break;
      }
      case opcodes.OP_1ADD:
      case opcodes.OP_1SUB:
      case opcodes.OP_NEGATE:
      case opcodes.OP_ABS:
      case opcodes.OP_NOT:
      case opcodes.OP_0NOTEQUAL: {
        if (stack.length < 1)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        let num = stack.getNum(-1, minimal, 4);
        let cmp;

        switch (op.value) {
          case opcodes.OP_1ADD:
            num.iaddn(1);
            break;
          case opcodes.OP_1SUB:
            num.isubn(1);
            break;
          case opcodes.OP_NEGATE:
            num.ineg();
            break;
          case opcodes.OP_ABS:
            num.iabs();
            break;
          case opcodes.OP_NOT:
            cmp = num.isZero();
            num = ScriptNum.fromBool(cmp);
            break;
          case opcodes.OP_0NOTEQUAL:
            cmp = !num.isZero();
            num = ScriptNum.fromBool(cmp);
            break;
          default:
            assert(false, 'Fatal script error.');
            break;
        }

        stack.pop();
        stack.pushNum(num);

        break;
      }
      case opcodes.OP_ADD:
      case opcodes.OP_SUB:
      case opcodes.OP_BOOLAND:
      case opcodes.OP_BOOLOR:
      case opcodes.OP_NUMEQUAL:
      case opcodes.OP_NUMEQUALVERIFY:
      case opcodes.OP_NUMNOTEQUAL:
      case opcodes.OP_LESSTHAN:
      case opcodes.OP_GREATERTHAN:
      case opcodes.OP_LESSTHANOREQUAL:
      case opcodes.OP_GREATERTHANOREQUAL:
      case opcodes.OP_MIN:
      case opcodes.OP_MAX: {
        if (stack.length < 2)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        const n1 = stack.getNum(-2, minimal, 4);
        const n2 = stack.getNum(-1, minimal, 4);
        let num, cmp;

        switch (op.value) {
          case opcodes.OP_ADD:
            num = n1.iadd(n2);
            break;
          case opcodes.OP_SUB:
            num = n1.isub(n2);
            break;
          case opcodes.OP_BOOLAND:
            cmp = n1.toBool() && n2.toBool();
            num = ScriptNum.fromBool(cmp);
            break;
          case opcodes.OP_BOOLOR:
            cmp = n1.toBool() || n2.toBool();
            num = ScriptNum.fromBool(cmp);
            break;
          case opcodes.OP_NUMEQUAL:
            cmp = n1.eq(n2);
            num = ScriptNum.fromBool(cmp);
            break;
          case opcodes.OP_NUMEQUALVERIFY:
            cmp = n1.eq(n2);
            num = ScriptNum.fromBool(cmp);
            break;
          case opcodes.OP_NUMNOTEQUAL:
            cmp = !n1.eq(n2);
            num = ScriptNum.fromBool(cmp);
            break;
          case opcodes.OP_LESSTHAN:
            cmp = n1.lt(n2);
            num = ScriptNum.fromBool(cmp);
            break;
          case opcodes.OP_GREATERTHAN:
            cmp = n1.gt(n2);
            num = ScriptNum.fromBool(cmp);
            break;
          case opcodes.OP_LESSTHANOREQUAL:
            cmp = n1.lte(n2);
            num = ScriptNum.fromBool(cmp);
            break;
          case opcodes.OP_GREATERTHANOREQUAL:
            cmp = n1.gte(n2);
            num = ScriptNum.fromBool(cmp);
            break;
          case opcodes.OP_MIN:
            num = ScriptNum.min(n1, n2);
            break;
          case opcodes.OP_MAX:
            num = ScriptNum.max(n1, n2);
            break;
          default:
            assert(false, 'Fatal script error.');
            break;
        }

        stack.pop();
        stack.pop();
        stack.pushNum(num);

        if (op.value === opcodes.OP_NUMEQUALVERIFY) {
          if (!stack.getBool(-1))
            throw new ScriptError('NUMEQUALVERIFY', op, ip);
          stack.pop();
        }

        break;
      }
      case opcodes.OP_WITHIN: {
        if (stack.length < 3)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        const n1 = stack.getNum(-3, minimal, 4);
        const n2 = stack.getNum(-2, minimal, 4);
        const n3 = stack.getNum(-1, minimal, 4);

        const val = n2.lte(n1) && n1.lt(n3);

        stack.pop();
        stack.pop();
        stack.pop();

        stack.pushBool(val);
        break;
      }
      case opcodes.OP_RIPEMD160: {
        if (stack.length === 0)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        stack.push(digest.ripemd160(stack.pop()));
        break;
      }
      case opcodes.OP_SHA1: {
        if (stack.length === 0)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        stack.push(digest.sha1(stack.pop()));
        break;
      }
      case opcodes.OP_SHA256: {
        if (stack.length === 0)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        stack.push(digest.sha256(stack.pop()));
        break;
      }
      case opcodes.OP_HASH160: {
        if (stack.length === 0)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        stack.push(digest.hash160(stack.pop()));
        break;
      }
      case opcodes.OP_HASH256: {
        if (stack.length === 0)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        stack.push(digest.hash256(stack.pop()));
        break;
      }
      case opcodes.OP_CODESEPARATOR: {
        lastSep = ip + 1;
        break;
      }
      case opcodes.OP_CHECKSIG:
      case opcodes.OP_CHECKSIGVERIFY: {
        if (!tx)
          throw new ScriptError('UNKNOWN_ERROR', 'No TX passed in.');

        if (stack.length < 2)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        const sig = stack.get(-2);
        const key = stack.get(-1);

        const subscript = this.getSubscript(lastSep);

        if (version === 0)
          subscript.findAndDelete(sig);

        validateSignature(sig, flags);
        validateKey(key, flags, version);

        let res = false;

        if (sig.length > 0) {
          const type = sig[sig.length - 1];
          const hash = tx.signatureHash(index, subscript, value, type, version);
          res = checksig(hash, sig, key);
        }

        if (!res && (flags & Script.flags.VERIFY_NULLFAIL)) {
          if (sig.length !== 0)
            throw new ScriptError('NULLFAIL', op, ip);
        }

        stack.pop();
        stack.pop();

        stack.pushBool(res);

        if (op.value === opcodes.OP_CHECKSIGVERIFY) {
          if (!res)
            throw new ScriptError('CHECKSIGVERIFY', op, ip);
          stack.pop();
        }

        break;
      }
      case opcodes.OP_CHECKMULTISIG:
      case opcodes.OP_CHECKMULTISIGVERIFY: {
        if (!tx)
          throw new ScriptError('UNKNOWN_ERROR', 'No TX passed in.');

        let i = 1;
        if (stack.length < i)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        let n = stack.getInt(-i, minimal, 4);
        let okey = n + 2;
        let ikey, isig;

        if (n < 0 || n > consensus.MAX_MULTISIG_PUBKEYS)
          throw new ScriptError('PUBKEY_COUNT', op, ip);

        opCount += n;

        if (opCount > consensus.MAX_SCRIPT_OPS)
          throw new ScriptError('OP_COUNT', op, ip);

        i += 1;
        ikey = i;
        i += n;

        if (stack.length < i)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        let m = stack.getInt(-i, minimal, 4);

        if (m < 0 || m > n)
          throw new ScriptError('SIG_COUNT', op, ip);

        i += 1;
        isig = i;
        i += m;

        if (stack.length < i)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        const subscript = this.getSubscript(lastSep);

        for (let j = 0; j < m; j++) {
          const sig = stack.get(-isig - j);
          if (version === 0)
            subscript.findAndDelete(sig);
        }

        let res = true;
        while (res && m > 0) {
          const sig = stack.get(-isig);
          const key = stack.get(-ikey);

          validateSignature(sig, flags);
          validateKey(key, flags, version);

          if (sig.length > 0) {
            const type = sig[sig.length - 1];
            const hash = tx.signatureHash(
              index,
              subscript,
              value,
              type,
              version
            );

            if (checksig(hash, sig, key)) {
              isig += 1;
              m -= 1;
            }
          }

          ikey += 1;
          n -= 1;

          if (m > n)
            res = false;
        }

        while (i > 1) {
          if (!res && (flags & Script.flags.VERIFY_NULLFAIL)) {
            if (okey === 0 && stack.get(-1).length !== 0)
              throw new ScriptError('NULLFAIL', op, ip);
          }

          if (okey > 0)
            okey -= 1;

          stack.pop();

          i -= 1;
        }

        if (stack.length < 1)
          throw new ScriptError('INVALID_STACK_OPERATION', op, ip);

        if (flags & Script.flags.VERIFY_NULLDUMMY) {
          if (stack.get(-1).length !== 0)
            throw new ScriptError('SIG_NULLDUMMY', op, ip);
        }

        stack.pop();

        stack.pushBool(res);

        if (op.value === opcodes.OP_CHECKMULTISIGVERIFY) {
          if (!res)
            throw new ScriptError('CHECKMULTISIGVERIFY', op, ip);
          stack.pop();
        }

        break;
      }
      default: {
        throw new ScriptError('BAD_OPCODE', op, ip);
      }
    }

    if (stack.length + alt.length > consensus.MAX_SCRIPT_STACK)
      throw new ScriptError('STACK_SIZE', op, ip);
  }

  if (state.length !== 0)
    throw new ScriptError('UNBALANCED_CONDITIONAL');
};

/**
 * Remove all matched data elements from
 * a script's code (used to remove signatures
 * before verification). Note that this
 * compares and removes data on the _byte level_.
 * It also reserializes the data to a single
 * script with minimaldata encoding beforehand.
 * A signature will _not_ be removed if it is
 * not minimaldata.
 * @see https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2014-November/006878.html
 * @see https://test.webbtc.com/tx/19aa42fee0fa57c45d3b16488198b27caaacc4ff5794510d0c17f173f05587ff
 * @param {Buffer} data - Data element to match against.
 * @returns {Number} Total.
 */

Script.prototype.findAndDelete = function findAndDelete(data) {
  const target = Opcode.fromPush(data);

  if (this.raw.length < target.getSize())
    return 0;

  let found = false;

  for (const op of this.code) {
    if (op.value === -1)
      break;

    if (op.equals(target)) {
      found = true;
      break;
    }
  }

  if (!found)
    return 0;

  const code = [];

  let total = 0;

  for (const op of this.code) {
    if (op.value === -1)
      break;

    if (op.equals(target)) {
      total += 1;
      continue;
    }

    code.push(op);
  }

  this.code = code;
  this.compile();

  return total;
};

/**
 * Find a data element in a script.
 * @param {Buffer} data - Data element to match against.
 * @returns {Number} Index (`-1` if not present).
 */

Script.prototype.indexOf = function indexOf(data) {
  for (let i = 0; i < this.code.length; i++) {
    const op = this.code[i];

    if (op.value === -1)
      break;

    if (!op.data)
      continue;

    if (op.data.equals(data))
      return i;
  }

  return -1;
};

/**
 * Test a script to see if it is likely
 * to be script code (no weird opcodes).
 * @returns {Boolean}
 */

Script.prototype.isCode = function isCode() {
  for (const op of this.code) {
    if (op.value === -1)
      return false;

    if (op.isDisabled())
      return false;

    switch (op.value) {
      case opcodes.OP_RESERVED:
      case opcodes.OP_NOP:
      case opcodes.OP_VER:
      case opcodes.OP_VERIF:
      case opcodes.OP_VERNOTIF:
      case opcodes.OP_RESERVED1:
      case opcodes.OP_RESERVED2:
      case opcodes.OP_NOP1:
        return false;
    }

    if (op.value > opcodes.OP_CHECKSEQUENCEVERIFY)
      return false;
  }

  return true;
};

/**
 * Inject properties from a pay-to-pubkey script.
 * @private
 * @param {Buffer} key
 */

Script.prototype.fromPubkey = function fromPubkey(key) {
  assert(Buffer.isBuffer(key) && (key.length === 33 || key.length === 65));

  this.raw = Buffer.allocUnsafe(1 + key.length + 1);
  this.raw[0] = key.length;
  key.copy(this.raw, 1);
  this.raw[1 + key.length] = opcodes.OP_CHECKSIG;

  key = this.raw.slice(1, 1 + key.length);

  this.code.length = 0;
  this.code.push(Opcode.fromPush(key));
  this.code.push(Opcode.fromOp(opcodes.OP_CHECKSIG));

  return this;
};

/**
 * Create a pay-to-pubkey script.
 * @param {Buffer} key
 * @returns {Script}
 */

Script.fromPubkey = function fromPubkey(key) {
  return new Script().fromPubkey(key);
};

/**
 * Inject properties from a pay-to-pubkeyhash script.
 * @private
 * @param {Buffer} hash
 */

Script.prototype.fromPubkeyhash = function fromPubkeyhash(hash) {
  assert(Buffer.isBuffer(hash) && hash.length === 20);

  this.raw = Buffer.allocUnsafe(25);
  this.raw[0] = opcodes.OP_DUP;
  this.raw[1] = opcodes.OP_HASH160;
  this.raw[2] = 0x14;
  hash.copy(this.raw, 3);
  this.raw[23] = opcodes.OP_EQUALVERIFY;
  this.raw[24] = opcodes.OP_CHECKSIG;

  hash = this.raw.slice(3, 23);

  this.code.length = 0;
  this.code.push(Opcode.fromOp(opcodes.OP_DUP));
  this.code.push(Opcode.fromOp(opcodes.OP_HASH160));
  this.code.push(Opcode.fromPush(hash));
  this.code.push(Opcode.fromOp(opcodes.OP_EQUALVERIFY));
  this.code.push(Opcode.fromOp(opcodes.OP_CHECKSIG));

  return this;
};

/**
 * Create a pay-to-pubkeyhash script.
 * @param {Buffer} hash
 * @returns {Script}
 */

Script.fromPubkeyhash = function fromPubkeyhash(hash) {
  return new Script().fromPubkeyhash(hash);
};

/**
 * Inject properties from pay-to-multisig script.
 * @private
 * @param {Number} m
 * @param {Number} n
 * @param {Buffer[]} keys
 */

Script.prototype.fromMultisig = function fromMultisig(m, n, keys) {
  assert(util.isU8(m) && util.isU8(n));
  assert(Array.isArray(keys));
  assert(keys.length === n, '`n` keys are required for multisig.');
  assert(m >= 1 && m <= n);
  assert(n >= 1 && n <= 15);

  this.clear();

  this.pushSmall(m);

  for (const key of sortKeys(keys))
    this.pushData(key);

  this.pushSmall(n);
  this.pushOp(opcodes.OP_CHECKMULTISIG);

  return this.compile();
};

/**
 * Create a pay-to-multisig script.
 * @param {Number} m
 * @param {Number} n
 * @param {Buffer[]} keys
 * @returns {Script}
 */

Script.fromMultisig = function fromMultisig(m, n, keys) {
  return new Script().fromMultisig(m, n, keys);
};

/**
 * Inject properties from a pay-to-scripthash script.
 * @private
 * @param {Buffer} hash
 */

Script.prototype.fromScripthash = function fromScripthash(hash) {
  assert(Buffer.isBuffer(hash) && hash.length === 20);

  this.raw = Buffer.allocUnsafe(23);
  this.raw[0] = opcodes.OP_HASH160;
  this.raw[1] = 0x14;
  hash.copy(this.raw, 2);
  this.raw[22] = opcodes.OP_EQUAL;

  hash = this.raw.slice(2, 22);

  this.code.length = 0;
  this.code.push(Opcode.fromOp(opcodes.OP_HASH160));
  this.code.push(Opcode.fromPush(hash));
  this.code.push(Opcode.fromOp(opcodes.OP_EQUAL));

  return this;
};

/**
 * Create a pay-to-scripthash script.
 * @param {Buffer} hash
 * @returns {Script}
 */

Script.fromScripthash = function fromScripthash(hash) {
  return new Script().fromScripthash(hash);
};

/**
 * Inject properties from a nulldata/opreturn script.
 * @private
 * @param {Buffer} flags
 */

Script.prototype.fromNulldata = function fromNulldata(flags) {
  assert(Buffer.isBuffer(flags));
  assert(flags.length <= policy.MAX_OP_RETURN, 'Nulldata too large.');

  this.clear();
  this.pushOp(opcodes.OP_RETURN);
  this.pushData(flags);

  return this.compile();
};

/**
 * Create a nulldata/opreturn script.
 * @param {Buffer} flags
 * @returns {Script}
 */

Script.fromNulldata = function fromNulldata(flags) {
  return new Script().fromNulldata(flags);
};

/**
 * Inject properties from a witness program.
 * @private
 * @param {Number} version
 * @param {Buffer} data
 */

Script.prototype.fromProgram = function fromProgram(version, data) {
  assert(util.isU8(version) && version >= 0 && version <= 16);
  assert(Buffer.isBuffer(data) && data.length >= 2 && data.length <= 40);

  this.raw = Buffer.allocUnsafe(2 + data.length);
  this.raw[0] = version === 0 ? 0 : version + 0x50;
  this.raw[1] = data.length;
  data.copy(this.raw, 2);

  data = this.raw.slice(2, 2 + data.length);

  this.code.length = 0;
  this.code.push(Opcode.fromSmall(version));
  this.code.push(Opcode.fromPush(data));

  return this;
};

/**
 * Create a witness program.
 * @param {Number} version
 * @param {Buffer} data
 * @returns {Script}
 */

Script.fromProgram = function fromProgram(version, data) {
  return new Script().fromProgram(version, data);
};

/**
 * Inject properties from an address.
 * @private
 * @param {Address|Base58Address} address
 */

Script.prototype.fromAddress = function fromAddress(address) {
  if (typeof address === 'string')
    address = Address.fromString(address);

  assert(address instanceof Address, 'Not an address.');

  if (address.isPubkeyhash())
    return this.fromPubkeyhash(address.hash);

  if (address.isScripthash())
    return this.fromScripthash(address.hash);

  if (address.isProgram())
    return this.fromProgram(address.version, address.hash);

  throw new Error('Unknown address type.');
};

/**
 * Create an output script from an address.
 * @param {Address|Base58Address} address
 * @returns {Script}
 */

Script.fromAddress = function fromAddress(address) {
  return new Script().fromAddress(address);
};

/**
 * Inject properties from a witness block commitment.
 * @private
 * @param {Buffer} hash
 * @param {String|Buffer} flags
 */

Script.prototype.fromCommitment = function fromCommitment(hash, flags) {
  const bw = new StaticWriter(36);

  bw.writeU32BE(0xaa21a9ed);
  bw.writeHash(hash);

  this.clear();
  this.pushOp(opcodes.OP_RETURN);
  this.pushData(bw.render());

  if (flags)
    this.pushData(flags);

  return this.compile();
};

/**
 * Create a witness block commitment.
 * @param {Buffer} hash
 * @param {String|Buffer} flags
 * @returns {Script}
 */

Script.fromCommitment = function fromCommitment(hash, flags) {
  return new Script().fromCommitment(hash, flags);
};

/**
 * Grab and deserialize the redeem script.
 * @returns {Script|null} Redeem script.
 */

Script.prototype.getRedeem = function getRedeem() {
  let data = null;

  for (const op of this.code) {
    if (op.value === -1)
      return null;

    if (op.value > opcodes.OP_16)
      return null;

    data = op.data;
  }

  if (!data)
    return null;

  return Script.fromRaw(data);
};

/**
 * Get the standard script type.
 * @returns {ScriptType}
 */

Script.prototype.getType = function getType() {
  if (this.isPubkey())
    return scriptTypes.PUBKEY;

  if (this.isPubkeyhash())
    return scriptTypes.PUBKEYHASH;

  if (this.isScripthash())
    return scriptTypes.SCRIPTHASH;

  if (this.isWitnessPubkeyhash())
    return scriptTypes.WITNESSPUBKEYHASH;

  if (this.isWitnessScripthash())
    return scriptTypes.WITNESSSCRIPTHASH;

  if (this.isWitnessMasthash())
    return scriptTypes.WITNESSMASTHASH;

  if (this.isMultisig())
    return scriptTypes.MULTISIG;

  if (this.isNulldata())
    return scriptTypes.NULLDATA;

  return scriptTypes.NONSTANDARD;
};

/**
 * Test whether a script is of an unknown/non-standard type.
 * @returns {Boolean}
 */

Script.prototype.isUnknown = function isUnknown() {
  return this.getType() === scriptTypes.NONSTANDARD;
};

/**
 * Test whether the script is standard by policy standards.
 * @returns {Boolean}
 */

Script.prototype.isStandard = function isStandard() {
  const [m, n] = this.getMultisig();

  if (m !== -1) {
    if (n < 1 || n > 3)
      return false;

    if (m < 1 || m > n)
      return false;

    return true;
  }

  if (this.isNulldata())
    return this.raw.length <= policy.MAX_OP_RETURN_BYTES;

  return this.getType() !== scriptTypes.NONSTANDARD;
};

/**
 * Calculate the size of the script
 * excluding the varint size bytes.
 * @returns {Number}
 */

Script.prototype.getSize = function getSize() {
  return this.raw.length;
};

/**
 * Calculate the size of the script
 * including the varint size bytes.
 * @returns {Number}
 */

Script.prototype.getVarSize = function getVarSize() {
  return encoding.sizeVarBytes(this.raw);
};

/**
 * "Guess" the address of the input script.
 * This method is not 100% reliable.
 * @returns {Address|null}
 */

Script.prototype.getInputAddress = function getInputAddress() {
  return Address.fromInputScript(this);
};

/**
 * Get the address of the script if present. Note that
 * pubkey and multisig scripts will be treated as though
 * they are pubkeyhash and scripthashes respectively.
 * @returns {Address|null}
 */

Script.prototype.getAddress = function getAddress() {
  return Address.fromScript(this);
};

/**
 * Get the hash160 of the raw script.
 * @param {String?} enc
 * @returns {Hash}
 */

Script.prototype.hash160 = function hash160(enc) {
  let hash = digest.hash160(this.toRaw());
  if (enc === 'hex')
    hash = hash.toString('hex');
  return hash;
};

/**
 * Get the sha256 of the raw script.
 * @param {String?} enc
 * @returns {Hash}
 */

Script.prototype.sha256 = function sha256(enc) {
  let hash = digest.sha256(this.toRaw());
  if (enc === 'hex')
    hash = hash.toString('hex');
  return hash;
};

/**
 * Test whether the output script is pay-to-pubkey.
 * @param {Boolean} [minimal=false] - Minimaldata only.
 * @returns {Boolean}
 */

Script.prototype.isPubkey = function isPubkey(minimal) {
  if (minimal) {
    return this.raw.length >= 35
      && (this.raw[0] === 33 || this.raw[0] === 65)
      && this.raw[0] + 2 === this.raw.length
      && this.raw[this.raw.length - 1] === opcodes.OP_CHECKSIG;
  }

  if (this.code.length !== 2)
    return false;

  const size = this.getLength(0);

  return (size === 33 || size === 65)
    && this.getOp(1) === opcodes.OP_CHECKSIG;
};

/**
 * Get P2PK key if present.
 * @param {Boolean} [minimal=false] - Minimaldata only.
 * @returns {Buffer|null}
 */

Script.prototype.getPubkey = function getPubkey(minimal) {
  if (!this.isPubkey(minimal))
    return null;

  if (minimal)
    return this.raw.slice(1, 1 + this.raw[0]);

  return this.getData(0);
};

/**
 * Test whether the output script is pay-to-pubkeyhash.
 * @param {Boolean} [minimal=false] - Minimaldata only.
 * @returns {Boolean}
 */

Script.prototype.isPubkeyhash = function isPubkeyhash(minimal) {
  if (minimal || this.raw.length === 25) {
    return this.raw.length === 25
      && this.raw[0] === opcodes.OP_DUP
      && this.raw[1] === opcodes.OP_HASH160
      && this.raw[2] === 0x14
      && this.raw[23] === opcodes.OP_EQUALVERIFY
      && this.raw[24] === opcodes.OP_CHECKSIG;
  }

  if (this.code.length !== 5)
    return false;

  return this.getOp(0) === opcodes.OP_DUP
    && this.getOp(1) === opcodes.OP_HASH160
    && this.getLength(2) === 20
    && this.getOp(3) === opcodes.OP_EQUALVERIFY
    && this.getOp(4) === opcodes.OP_CHECKSIG;
};

/**
 * Get P2PKH hash if present.
 * @param {Boolean} [minimal=false] - Minimaldata only.
 * @returns {Buffer|null}
 */

Script.prototype.getPubkeyhash = function getPubkeyhash(minimal) {
  if (!this.isPubkeyhash(minimal))
    return null;

  if (minimal)
    return this.raw.slice(3, 23);

  return this.getData(2);
};

/**
 * Test whether the output script is pay-to-multisig.
 * @param {Boolean} [minimal=false] - Minimaldata only.
 * @returns {Boolean}
 */

Script.prototype.isMultisig = function isMultisig(minimal) {
  if (this.code.length < 4 || this.code.length > 19)
    return false;

  if (this.getOp(-1) !== opcodes.OP_CHECKMULTISIG)
    return false;

  const m = this.getSmall(0);

  if (m < 1)
    return false;

  const n = this.getSmall(-2);

  if (n < 1 || m > n)
    return false;

  if (this.code.length !== n + 3)
    return false;

  for (let i = 1; i < n + 1; i++) {
    const op = this.code[i];
    const size = op.toLength();

    if (size !== 33 && size !== 65)
      return false;

    if (minimal && !op.isMinimal())
      return false;
  }

  return true;
};

/**
 * Get multisig m and n values if present.
 * @param {Boolean} [minimal=false] - Minimaldata only.
 * @returns {Array} [m, n]
 */

Script.prototype.getMultisig = function getMultisig(minimal) {
  if (!this.isMultisig(minimal))
    return [-1, -1];

  return [this.getSmall(0), this.getSmall(-2)];
};

/**
 * Test whether the output script is pay-to-scripthash. Note that
 * bitcoin itself requires scripthashes to be in strict minimaldata
 * encoding. Using `OP_HASH160 OP_PUSHDATA1 [hash] OP_EQUAL` will
 * _not_ be recognized as a scripthash.
 * @returns {Boolean}
 */

Script.prototype.isScripthash = function isScripthash() {
  return this.raw.length === 23
    && this.raw[0] === opcodes.OP_HASH160
    && this.raw[1] === 0x14
    && this.raw[22] === opcodes.OP_EQUAL;
};

/**
 * Get P2SH hash if present.
 * @returns {Buffer|null}
 */

Script.prototype.getScripthash = function getScripthash() {
  if (!this.isScripthash())
    return null;

  return this.getData(1);
};

/**
 * Test whether the output script is nulldata/opreturn.
 * @param {Boolean} [minimal=false] - Minimaldata only.
 * @returns {Boolean}
 */

Script.prototype.isNulldata = function isNulldata(minimal) {
  if (this.code.length === 0)
    return false;

  if (this.getOp(0) !== opcodes.OP_RETURN)
    return false;

  if (this.code.length === 1)
    return true;

  if (minimal) {
    if (this.raw.length > policy.MAX_OP_RETURN_BYTES)
      return false;
  }

  for (let i = 1; i < this.code.length; i++) {
    const op = this.code[i];

    if (op.value === -1)
      return false;

    if (op.value > opcodes.OP_16)
      return false;

    if (minimal && !op.isMinimal())
      return false;
  }

  return true;
};

/**
 * Get OP_RETURN data if present.
 * @param {Boolean} [minimal=false] - Minimaldata only.
 * @returns {Buffer|null}
 */

Script.prototype.getNulldata = function getNulldata(minimal) {
  if (!this.isNulldata(minimal))
    return null;

  for (let i = 1; i < this.code.length; i++) {
    const op = this.code[i];
    const data = op.toPush();
    if (data)
      return data;
  }

  return EMPTY_BUFFER;
};

/**
 * Test whether the output script is a segregated witness
 * commitment.
 * @returns {Boolean}
 */

Script.prototype.isCommitment = function isCommitment() {
  return this.raw.length >= 38
    && this.raw[0] === opcodes.OP_RETURN
    && this.raw[1] === 0x24
    && this.raw.readUInt32BE(2, true) === 0xaa21a9ed;
};

/**
 * Get the commitment hash if present.
 * @returns {Buffer|null}
 */

Script.prototype.getCommitment = function getCommitment() {
  if (!this.isCommitment())
    return null;

  return this.raw.slice(6, 38);
};

/**
 * Test whether the output script is a witness program.
 * Note that this will return true even for malformed
 * witness v0 programs.
 * @return {Boolean}
 */

Script.prototype.isProgram = function isProgram() {
  if (this.raw.length < 4 || this.raw.length > 42)
    return false;

  if (this.raw[0] !== opcodes.OP_0
      && (this.raw[0] < opcodes.OP_1 || this.raw[0] > opcodes.OP_16)) {
    return false;
  }

  if (this.raw[1] + 2 !== this.raw.length)
    return false;

  return true;
};

/**
 * Get the witness program if present.
 * @returns {Program|null}
 */

Script.prototype.getProgram = function getProgram() {
  if (!this.isProgram())
    return null;

  const version = this.getSmall(0);
  const data = this.getData(1);

  return new Program(version, data);
};

/**
 * Get the script to the equivalent witness
 * program (mimics wmccd's scriptForWitness).
 * @returns {Script|null}
 */

Script.prototype.forWitness = function forWitness() {
  if (this.isProgram())
    return this.clone();

  const pk = this.getPubkey();
  if (pk) {
    const hash = digest.hash160(pk);
    return Script.fromProgram(0, hash);
  }

  const pkh = this.getPubkeyhash();
  if (pkh)
    return Script.fromProgram(0, pkh);

  return Script.fromProgram(0, this.sha256());
};

/**
 * Test whether the output script is
 * a pay-to-witness-pubkeyhash program.
 * @returns {Boolean}
 */

Script.prototype.isWitnessPubkeyhash = function isWitnessPubkeyhash() {
  return this.raw.length === 22
    && this.raw[0] === opcodes.OP_0
    && this.raw[1] === 0x14;
};

/**
 * Get P2WPKH hash if present.
 * @returns {Buffer|null}
 */

Script.prototype.getWitnessPubkeyhash = function getWitnessPubkeyhash() {
  if (!this.isWitnessPubkeyhash())
    return null;

  return this.getData(1);
};

/**
 * Test whether the output script is
 * a pay-to-witness-scripthash program.
 * @returns {Boolean}
 */

Script.prototype.isWitnessScripthash = function isWitnessScripthash() {
  return this.raw.length === 34
    && this.raw[0] === opcodes.OP_0
    && this.raw[1] === 0x20;
};

/**
 * Get P2WSH hash if present.
 * @returns {Buffer|null}
 */

Script.prototype.getWitnessScripthash = function getWitnessScripthash() {
  if (!this.isWitnessScripthash())
    return null;

  return this.getData(1);
};

/**
 * Test whether the output script
 * is a pay-to-mast program.
 * @returns {Boolean}
 */

Script.prototype.isWitnessMasthash = function isWitnessMasthash() {
  return this.raw.length === 34
    && this.raw[0] === opcodes.OP_1
    && this.raw[1] === 0x20;
};

/**
 * Get P2WMH hash if present.
 * @returns {Buffer|null}
 */

Script.prototype.getWitnessMasthash = function getWitnessMasthash() {
  if (!this.isWitnessMasthash())
    return null;

  return this.getData(1);
};

/**
 * Test whether the output script is unspendable.
 * @returns {Boolean}
 */

Script.prototype.isUnspendable = function isUnspendable() {
  if (this.raw.length > consensus.MAX_SCRIPT_SIZE)
    return true;

  return this.raw.length > 0 && this.raw[0] === opcodes.OP_RETURN;
};

/**
 * "Guess" the type of the input script.
 * This method is not 100% reliable.
 * @returns {ScriptType}
 */

Script.prototype.getInputType = function getInputType() {
  if (this.isPubkeyInput())
    return scriptTypes.PUBKEY;

  if (this.isPubkeyhashInput())
    return scriptTypes.PUBKEYHASH;

  if (this.isScripthashInput())
    return scriptTypes.SCRIPTHASH;

  if (this.isMultisigInput())
    return scriptTypes.MULTISIG;

  return scriptTypes.NONSTANDARD;
};

/**
 * "Guess" the type of the input script.
 * This method is not 100% reliable.
 * @returns {ScriptType}
 */

Script.prototype.getInputTypeVal = function getInputTypeVal() {
  if (this.isPubkeyInput())
    return scriptTypesByVal[scriptTypes.PUBKEY];

  if (this.isPubkeyhashInput())
    return scriptTypesByVal[scriptTypes.PUBKEYHASH];

  if (this.isScripthashInput())
    return scriptTypesByVal[scriptTypes.SCRIPTHASH];

  if (this.isMultisigInput())
    return scriptTypesByVal[scriptTypes.MULTISIG];

  return scriptTypesByVal[scriptTypes.NONSTANDARD];
};

/**
 * "Guess" whether the input script is an unknown/non-standard type.
 * This method is not 100% reliable.
 * @returns {Boolean}
 */

Script.prototype.isUnknownInput = function isUnknownInput() {
  return this.getInputType() === scriptTypes.NONSTANDARD;
};

/**
 * "Guess" whether the input script is pay-to-pubkey.
 * This method is not 100% reliable.
 * @returns {Boolean}
 */

Script.prototype.isPubkeyInput = function isPubkeyInput() {
  if (this.code.length !== 1)
    return false;

  const size = this.getLength(0);

  return size >= 9 && size <= 73;
};

/**
 * Get P2PK signature if present.
 * @returns {Buffer|null}
 */

Script.prototype.getPubkeyInput = function getPubkeyInput() {
  if (!this.isPubkeyInput())
    return null;

  return this.getData(0);
};

/**
 * "Guess" whether the input script is pay-to-pubkeyhash.
 * This method is not 100% reliable.
 * @returns {Boolean}
 */

Script.prototype.isPubkeyhashInput = function isPubkeyhashInput() {
  if (this.code.length !== 2)
    return false;

  const sig = this.getLength(0);
  const key = this.getLength(1);

  return sig >= 9 && sig <= 73
    && (key === 33 || key === 65);
};

/**
 * Get P2PKH signature and key if present.
 * @returns {Array} [sig, key]
 */

Script.prototype.getPubkeyhashInput = function getPubkeyhashInput() {
  if (!this.isPubkeyhashInput())
    return [null, null];

  return [this.getData(0), this.getData(1)];
};

/**
 * "Guess" whether the input script is pay-to-multisig.
 * This method is not 100% reliable.
 * @returns {Boolean}
 */

Script.prototype.isMultisigInput = function isMultisigInput() {
  if (this.code.length < 2)
    return false;

  if (this.getOp(0) !== opcodes.OP_0)
    return false;

  if (this.getOp(1) > opcodes.OP_PUSHDATA4)
    return false;

  // We need to rule out scripthash
  // because it may look like multisig.
  if (this.isScripthashInput())
    return false;

  for (let i = 1; i < this.code.length; i++) {
    const size = this.getLength(i);
    if (size < 9 || size > 73)
      return false;
  }

  return true;
};

/**
 * Get multisig signatures if present.
 * @returns {Buffer[]|null}
 */

Script.prototype.getMultisigInput = function getMultisigInput() {
  if (!this.isMultisigInput())
    return null;

  const sigs = [];

  for (let i = 1; i < this.code.length; i++)
    sigs.push(this.getData(i));

  return sigs;
};

/**
 * "Guess" whether the input script is pay-to-scripthash.
 * This method is not 100% reliable.
 * @returns {Boolean}
 */

Script.prototype.isScripthashInput = function isScripthashInput() {
  if (this.code.length < 2)
    return false;

  // Grab the raw redeem script.
  const raw = this.getData(-1);

  // Last data element should be an array
  // for the redeem script.
  if (!raw)
    return false;

  // Testing for scripthash inputs requires
  // some evil magic to work. We do it by
  // ruling things _out_. This test will not
  // be correct 100% of the time. We rule
  // out that the last data element is: a
  // null dummy, a valid signature, a valid
  // key, and we ensure that it is at least
  // a script that does not use undefined
  // opcodes.
  if (raw.length === 0)
    return false;

  if (common.isSignatureEncoding(raw))
    return false;

  if (common.isKeyEncoding(raw))
    return false;

  const redeem = Script.fromRaw(raw);

  if (!redeem.isCode())
    return false;

  if (redeem.isUnspendable())
    return false;

  if (!this.isPushOnly())
    return false;

  return true;
};

/**
 * Get P2SH redeem script if present.
 * @returns {Buffer|null}
 */

Script.prototype.getScripthashInput = function getScripthashInput() {
  if (!this.isScripthashInput())
    return null;

  return this.getData(-1);
};

/**
 * Get coinbase height.
 * @returns {Number} `-1` if not present.
 */

Script.prototype.getCoinbaseHeight = function getCoinbaseHeight() {
  return Script.getCoinbaseHeight(this.raw);
};

/**
 * Get coinbase height.
 * @param {Buffer} raw - Raw script.
 * @returns {Number} `-1` if not present.
 */

Script.getCoinbaseHeight = function getCoinbaseHeight(raw) {
  if (raw.length === 0)
    return -1;

  if (raw[0] >= opcodes.OP_1 && raw[0] <= opcodes.OP_16)
    return raw[0] - 0x50;

  if (raw[0] > 0x06)
    return -1;

  const op = Opcode.fromRaw(raw);
  const num = op.toNum();

  if (!num)
    return 1;

  if (num.isNeg())
    return -1;

  if (!op.equals(Opcode.fromNum(num)))
    return -1;

  return num.toDouble();
};

/**
 * Test the script against a bloom filter.
 * @param {Bloom} filter
 * @returns {Boolean}
 */

Script.prototype.test = function test(filter) {
  for (const op of this.code) {
    if (op.value === -1)
      break;

    if (!op.data || op.data.length === 0)
      continue;

    if (filter.test(op.data))
      return true;
  }

  return false;
};

/**
 * Test the script to see if it contains only push ops.
 * Push ops are: OP_1NEGATE, OP_0-OP_16 and all PUSHDATAs.
 * @returns {Boolean}
 */

Script.prototype.isPushOnly = function isPushOnly() {
  for (const op of this.code) {
    if (op.value === -1)
      return false;

    if (op.value > opcodes.OP_16)
      return false;
  }

  return true;
};

/**
 * Count the sigops in the script.
 * @param {Boolean} accurate - Whether to enable accurate counting. This will
 * take into account the `n` value for OP_CHECKMULTISIG(VERIFY).
 * @returns {Number} sigop count
 */

Script.prototype.getSigops = function getSigops(accurate) {
  let total = 0;
  let lastOp = -1;

  for (const op of this.code) {
    if (op.value === -1)
      break;

    switch (op.value) {
      case opcodes.OP_CHECKSIG:
      case opcodes.OP_CHECKSIGVERIFY:
        total += 1;
        break;
      case opcodes.OP_CHECKMULTISIG:
      case opcodes.OP_CHECKMULTISIGVERIFY:
        if (accurate && lastOp >= opcodes.OP_1 && lastOp <= opcodes.OP_16)
          total += lastOp - 0x50;
        else
          total += consensus.MAX_MULTISIG_PUBKEYS;
        break;
    }

    lastOp = op.value;
  }

  return total;
};

/**
 * Count the sigops in the script, taking into account redeem scripts.
 * @param {Script} input - Input script, needed for access to redeem script.
 * @returns {Number} sigop count
 */

Script.prototype.getScripthashSigops = function getScripthashSigops(input) {
  if (!this.isScripthash())
    return this.getSigops(true);

  const redeem = input.getRedeem();

  if (!redeem)
    return 0;

  return redeem.getSigops(true);
};

/**
 * Count the sigops in a script, taking into account witness programs.
 * @param {Script} input
 * @param {Witness} witness
 * @returns {Number} sigop count
 */

Script.prototype.getWitnessSigops = function getWitnessSigops(input, witness) {
  let program = this.getProgram();

  if (!program) {
    if (this.isScripthash()) {
      const redeem = input.getRedeem();
      if (redeem)
        program = redeem.getProgram();
    }
  }

  if (!program)
    return 0;

  if (program.version === 0) {
    if (program.data.length === 20)
      return 1;

    if (program.data.length === 32 && witness.items.length > 0) {
      const redeem = witness.getRedeem();
      return redeem.getSigops(true);
    }
  }

  return 0;
};

/*
 * Mutation
 */

Script.prototype.get = function get(index) {
  if (index < 0)
    index += this.code.length;

  if (index < 0 || index >= this.code.length)
    return null;

  return this.code[index];
};

Script.prototype.pop = function pop() {
  const op = this.code.pop();
  return op || null;
};

Script.prototype.shift = function shift() {
  const op = this.code.shift();
  return op || null;
};

Script.prototype.remove = function remove(index) {
  if (index < 0)
    index += this.code.length;

  if (index < 0 || index >= this.code.length)
    return null;

  const items = this.code.splice(index, 1);

  if (items.length === 0)
    return null;

  return items[0];
};

Script.prototype.set = function set(index, op) {
  if (index < 0)
    index += this.code.length;

  assert(Opcode.isOpcode(op));
  assert(index >= 0 && index <= this.code.length);

  this.code[index] = op;

  return this;
};

Script.prototype.push = function push(op) {
  assert(Opcode.isOpcode(op));
  this.code.push(op);
  return this;
};

Script.prototype.unshift = function unshift(op) {
  assert(Opcode.isOpcode(op));
  this.code.unshift(op);
  return this;
};

Script.prototype.insert = function insert(index, op) {
  if (index < 0)
    index += this.code.length;

  assert(Opcode.isOpcode(op));
  assert(index >= 0 && index <= this.code.length);

  this.code.splice(index, 0, op);

  return this;
};

/*
 * Op
 */

Script.prototype.getOp = function getOp(index) {
  const op = this.get(index);
  return op ? op.value : -1;
};

Script.prototype.popOp = function popOp() {
  const op = this.pop();
  return op ? op.value : -1;
};

Script.prototype.shiftOp = function shiftOp() {
  const op = this.shift();
  return op ? op.value : -1;
};

Script.prototype.removeOp = function removeOp(index) {
  const op = this.remove(index);
  return op ? op.value : -1;
};

Script.prototype.setOp = function setOp(index, value) {
  return this.set(index, Opcode.fromOp(value));
};

Script.prototype.pushOp = function pushOp(value) {
  return this.push(Opcode.fromOp(value));
};

Script.prototype.unshiftOp = function unshiftOp(value) {
  return this.unshift(Opcode.fromOp(value));
};

Script.prototype.insertOp = function insertOp(index, value) {
  return this.insert(index, Opcode.fromOp(value));
};

/*
 * Data
 */

Script.prototype.getData = function getData(index) {
  const op = this.get(index);
  return op ? op.data : null;
};

Script.prototype.popData = function popData() {
  const op = this.pop();
  return op ? op.data : null;
};

Script.prototype.shiftData = function shiftData() {
  const op = this.shift();
  return op ? op.data : null;
};

Script.prototype.removeData = function removeData(index) {
  const op = this.remove(index);
  return op ? op.data : null;
};

Script.prototype.setData = function setData(index, data) {
  return this.set(index, Opcode.fromData(data));
};

Script.prototype.pushData = function pushData(data) {
  return this.push(Opcode.fromData(data));
};

Script.prototype.unshiftData = function unshiftData(data) {
  return this.unshift(Opcode.fromData(data));
};

Script.prototype.insertData = function insertData(index, data) {
  return this.insert(index, Opcode.fromData(data));
};

/*
 * Length
 */

Script.prototype.getLength = function getLength(index) {
  const op = this.get(index);
  return op ? op.toLength() : -1;
};

/*
 * Push
 */

Script.prototype.getPush = function getPush(index) {
  const op = this.get(index);
  return op ? op.toPush() : null;
};

Script.prototype.popPush = function popPush() {
  const op = this.pop();
  return op ? op.toPush() : null;
};

Script.prototype.shiftPush = function shiftPush() {
  const op = this.shift();
  return op ? op.toPush() : null;
};

Script.prototype.removePush = function removePush(index) {
  const op = this.remove(index);
  return op ? op.toPush() : null;
};

Script.prototype.setPush = function setPush(index, data) {
  return this.set(index, Opcode.fromPush(data));
};

Script.prototype.pushPush = function pushPush(data) {
  return this.push(Opcode.fromPush(data));
};

Script.prototype.unshiftPush = function unshiftPush(data) {
  return this.unshift(Opcode.fromPush(data));
};

Script.prototype.insertPush = function insertPush(index, data) {
  return this.insert(index, Opcode.fromPush(data));
};

/*
 * String
 */

Script.prototype.getString = function getString(index, enc) {
  const op = this.get(index);
  return op ? op.toString(enc) : null;
};

Script.prototype.popString = function popString(enc) {
  const op = this.pop();
  return op ? op.toString(enc) : null;
};

Script.prototype.shiftString = function shiftString(enc) {
  const op = this.shift();
  return op ? op.toString(enc) : null;
};

Script.prototype.removeString = function removeString(index, enc) {
  const op = this.remove(index);
  return op ? op.toString(enc) : null;
};

Script.prototype.setString = function setString(index, str, enc) {
  return this.set(index, Opcode.fromString(str, enc));
};

Script.prototype.pushString = function pushString(str, enc) {
  return this.push(Opcode.fromString(str, enc));
};

Script.prototype.unshiftString = function unshiftString(str, enc) {
  return this.unshift(Opcode.fromString(str, enc));
};

Script.prototype.insertString = function insertString(index, str, enc) {
  return this.insert(index, Opcode.fromString(str, enc));
};

/*
 * Small
 */

Script.prototype.getSmall = function getSmall(index) {
  const op = this.get(index);
  return op ? op.toSmall() : -1;
};

Script.prototype.popSmall = function popSmall() {
  const op = this.pop();
  return op ? op.toSmall() : -1;
};

Script.prototype.shiftSmall = function shiftSmall() {
  const op = this.shift();
  return op ? op.toSmall() : -1;
};

Script.prototype.removeSmall = function removeSmall(index) {
  const op = this.remove(index);
  return op ? op.toSmall() : -1;
};

Script.prototype.setSmall = function setSmall(index, num) {
  return this.set(index, Opcode.fromSmall(num));
};

Script.prototype.pushSmall = function pushSmall(num) {
  return this.push(Opcode.fromSmall(num));
};

Script.prototype.unshiftSmall = function unshiftSmall(num) {
  return this.unshift(Opcode.fromSmall(num));
};

Script.prototype.insertSmall = function insertSmall(index, num) {
  return this.insert(index, Opcode.fromSmall(num));
};

/*
 * Num
 */

Script.prototype.getNum = function getNum(index, minimal, limit) {
  const op = this.get(index);
  return op ? op.toNum(minimal, limit) : null;
};

Script.prototype.popNum = function popNum(minimal, limit) {
  const op = this.pop();
  return op ? op.toNum(minimal, limit) : null;
};

Script.prototype.shiftNum = function shiftNum(minimal, limit) {
  const op = this.shift();
  return op ? op.toNum(minimal, limit) : null;
};

Script.prototype.removeNum = function removeNum(index, minimal, limit) {
  const op = this.remove(index);
  return op ? op.toNum(minimal, limit) : null;
};

Script.prototype.setNum = function setNum(index, num) {
  return this.set(index, Opcode.fromNum(num));
};

Script.prototype.pushNum = function pushNum(num) {
  return this.push(Opcode.fromNum(num));
};

Script.prototype.unshiftNum = function unshiftNum(num) {
  return this.unshift(Opcode.fromNum(num));
};

Script.prototype.insertNum = function insertNum(index, num) {
  return this.insert(index, Opcode.fromNum(num));
};

/*
 * Int
 */

Script.prototype.getInt = function getInt(index, minimal, limit) {
  const op = this.get(index);
  return op ? op.toInt(minimal, limit) : -1;
};

Script.prototype.popInt = function popInt(minimal, limit) {
  const op = this.pop();
  return op ? op.toInt(minimal, limit) : -1;
};

Script.prototype.shiftInt = function shiftInt(minimal, limit) {
  const op = this.shift();
  return op ? op.toInt(minimal, limit) : -1;
};

Script.prototype.removeInt = function removeInt(index, minimal, limit) {
  const op = this.remove(index);
  return op ? op.toInt(minimal, limit) : -1;
};

Script.prototype.setInt = function setInt(index, num) {
  return this.set(index, Opcode.fromInt(num));
};

Script.prototype.pushInt = function pushInt(num) {
  return this.push(Opcode.fromInt(num));
};

Script.prototype.unshiftInt = function unshiftInt(num) {
  return this.unshift(Opcode.fromInt(num));
};

Script.prototype.insertInt = function insertInt(index, num) {
  return this.insert(index, Opcode.fromInt(num));
};

/*
 * Bool
 */

Script.prototype.getBool = function getBool(index) {
  const op = this.get(index);
  return op ? op.toBool() : false;
};

Script.prototype.popBool = function popBool() {
  const op = this.pop();
  return op ? op.toBool() : false;
};

Script.prototype.shiftBool = function shiftBool() {
  const op = this.shift();
  return op ? op.toBool() : false;
};

Script.prototype.removeBool = function removeBool(index) {
  const op = this.remove(index);
  return op ? op.toBool() : false;
};

Script.prototype.setBool = function setBool(index, value) {
  return this.set(index, Opcode.fromBool(value));
};

Script.prototype.pushBool = function pushBool(value) {
  return this.push(Opcode.fromBool(value));
};

Script.prototype.unshiftBool = function unshiftBool(value) {
  return this.unshift(Opcode.fromBool(value));
};

Script.prototype.insertBool = function insertBool(index, value) {
  return this.insert(index, Opcode.fromBool(value));
};

/*
 * Symbol
 */

Script.prototype.getSym = function getSym(index) {
  const op = this.get(index);
  return op ? op.toSymbol() : null;
};

Script.prototype.popSym = function popSym() {
  const op = this.pop();
  return op ? op.toSymbol() : null;
};

Script.prototype.shiftSym = function shiftSym() {
  const op = this.shift();
  return op ? op.toSymbol() : null;
};

Script.prototype.removeSym = function removeSym(index) {
  const op = this.remove(index);
  return op ? op.toSymbol() : null;
};

Script.prototype.setSym = function setSym(index, symbol) {
  return this.set(index, Opcode.fromSymbol(symbol));
};

Script.prototype.pushSym = function pushSym(symbol) {
  return this.push(Opcode.fromSymbol(symbol));
};

Script.prototype.unshiftSym = function unshiftSym(symbol) {
  return this.unshift(Opcode.fromSymbol(symbol));
};

Script.prototype.insertSym = function insertSym(index, symbol) {
  return this.insert(index, Opcode.fromSymbol(symbol));
};

/**
 * Inject properties from wmccd test string.
 * @private
 * @param {String} items - Script string.
 * @throws Parse error.
 */

Script.prototype.fromString = function fromString(code) {
  assert(typeof code === 'string');

  code = code.trim();

  if (code.length === 0)
    return this;

  const items = code.split(/\s+/);
  const bw = new BufferWriter();

  for (const item of items) {
    let symbol = item;

    if (!util.isUpperCase(symbol))
      symbol = symbol.toUpperCase();

    if (!util.startsWith(symbol, 'OP_'))
      symbol = `OP_${symbol}`;

    const value = opcodes[symbol];

    if (value == null) {
      if (item[0] === '\'') {
        assert(item[item.length - 1] === '\'', 'Invalid string.');
        const str = item.slice(1, -1);
        const op = Opcode.fromString(str);
        bw.writeBytes(op.toRaw());
        continue;
      }

      if (/^-?\d+$/.test(item)) {
        const num = ScriptNum.fromString(item, 10);
        const op = Opcode.fromNum(num);
        bw.writeBytes(op.toRaw());
        continue;
      }

      assert(item.indexOf('0x') === 0, 'Unknown opcode.');

      const hex = item.substring(2);
      const data = Buffer.from(hex, 'hex');

      assert(data.length === hex.length / 2, 'Invalid hex string.');

      bw.writeBytes(data);

      continue;
    }

    bw.writeU8(value);
  }

  return this.fromRaw(bw.render());
};

/**
 * Parse a wmccd test script
 * string into a script object.
 * @param {String} items - Script string.
 * @returns {Script}
 * @throws Parse error.
 */

Script.fromString = function fromString(code) {
  return new Script().fromString(code);
};

/**
 * Verify an input and output script, and a witness if present.
 * @param {Script} input
 * @param {Witness} witness
 * @param {Script} output
 * @param {TX} tx
 * @param {Number} index
 * @param {Amount} value
 * @param {VerifyFlags} flags
 * @throws {ScriptError}
 */

Script.verify = function verify(input, witness, output, tx, index, value, flags) {
  if (flags == null)
    flags = Script.flags.STANDARD_VERIFY_FLAGS;

  if (flags & Script.flags.VERIFY_SIGPUSHONLY) {
    if (!input.isPushOnly())
      throw new ScriptError('SIG_PUSHONLY');
  }

  // Setup a stack.
  let stack = new Stack();

  // Execute the input script
  input.execute(stack, flags, tx, index, value, 0);

  // Copy the stack for P2SH
  let copy;
  if (flags & Script.flags.VERIFY_P2SH)
    copy = stack.clone();

  // Execute the previous output script.
  output.execute(stack, flags, tx, index, value, 0);

  // Verify the stack values.
  if (stack.length === 0 || !stack.getBool(-1))
    throw new ScriptError('EVAL_FALSE');

  let hadWitness = false;

  if ((flags & Script.flags.VERIFY_WITNESS) && output.isProgram()) {
    hadWitness = true;

    // Input script must be empty.
    if (input.raw.length !== 0)
      throw new ScriptError('WITNESS_MALLEATED');

    // Verify the program in the output script.
    Script.verifyProgram(witness, output, flags, tx, index, value);

    // Force a cleanstack
    stack.length = 1;
  }

  // If the script is P2SH, execute the real output script
  if ((flags & Script.flags.VERIFY_P2SH) && output.isScripthash()) {
    // P2SH can only have push ops in the scriptSig
    if (!input.isPushOnly())
      throw new ScriptError('SIG_PUSHONLY');

    // Reset the stack
    stack = copy;

    // Stack should not be empty at this point
    if (stack.length === 0)
      throw new ScriptError('EVAL_FALSE');

    // Grab the real redeem script
    const raw = stack.pop();
    const redeem = Script.fromRaw(raw);

    // Execute the redeem script.
    redeem.execute(stack, flags, tx, index, value, 0);

    // Verify the the stack values.
    if (stack.length === 0 || !stack.getBool(-1))
      throw new ScriptError('EVAL_FALSE');

    if ((flags & Script.flags.VERIFY_WITNESS) && redeem.isProgram()) {
      hadWitness = true;

      // Input script must be exactly one push of the redeem script.
      if (!input.raw.equals(Opcode.fromPush(raw).toRaw()))
        throw new ScriptError('WITNESS_MALLEATED_P2SH');

      // Verify the program in the redeem script.
      Script.verifyProgram(witness, redeem, flags, tx, index, value);

      // Force a cleanstack.
      stack.length = 1;
    }
  }

  // Ensure there is nothing left on the stack.
  if (flags & Script.flags.VERIFY_CLEANSTACK) {
    assert((flags & Script.flags.VERIFY_P2SH) !== 0);
    if (stack.length !== 1)
      throw new ScriptError('CLEANSTACK');
  }

  // If we had a witness but no witness program, fail.
  if (flags & Script.flags.VERIFY_WITNESS) {
    assert((flags & Script.flags.VERIFY_P2SH) !== 0);
    if (!hadWitness && witness.items.length > 0)
      throw new ScriptError('WITNESS_UNEXPECTED');
  }
};

/**
 * Verify a witness program. This runs after regular script
 * execution if a witness program is present. It will convert
 * the witness to a stack and execute the program.
 * @param {Witness} witness
 * @param {Script} output
 * @param {VerifyFlags} flags
 * @param {TX} tx
 * @param {Number} index
 * @param {Amount} value
 * @throws {ScriptError}
 */

Script.verifyProgram = function verifyProgram(witness, output, flags, tx, index, value) {
  const program = output.getProgram();

  assert(program, 'verifyProgram called on non-witness-program.');
  assert((flags & Script.flags.VERIFY_WITNESS) !== 0);

  const stack = witness.toStack();
  let redeem;

  if (program.version === 0) {
    if (program.data.length === 32) {
      if (stack.length === 0)
        throw new ScriptError('WITNESS_PROGRAM_WITNESS_EMPTY');

      const witnessScript = stack.pop();

      if (!digest.sha256(witnessScript).equals(program.data))
        throw new ScriptError('WITNESS_PROGRAM_MISMATCH');

      redeem = Script.fromRaw(witnessScript);
    } else if (program.data.length === 20) {
      if (stack.length !== 2)
        throw new ScriptError('WITNESS_PROGRAM_MISMATCH');

      redeem = Script.fromPubkeyhash(program.data);
    } else {
      // Failure on version=0 (bad program data length).
      throw new ScriptError('WITNESS_PROGRAM_WRONG_LENGTH');
    }
  } else if ((flags & Script.flags.VERIFY_MAST) && program.version === 1) {
    Script.verifyMast(program, stack, output, flags, tx, index);
    return;
  } else {
    // Anyone can spend (we can return true here
    // if we want to always relay these transactions).
    // Otherwise, if we want to act like an "old"
    // implementation and only accept them in blocks,
    // we can use the regular output script which will
    // succeed in a block, but fail in the mempool
    // due to VERIFY_CLEANSTACK.
    if (flags & Script.flags.VERIFY_DISCOURAGE_UPGRADABLE_WITNESS_PROGRAM)
      throw new ScriptError('DISCOURAGE_UPGRADABLE_WITNESS_PROGRAM');
    return;
  }

  // Witnesses still have push limits.
  for (let j = 0; j < stack.length; j++) {
    if (stack.get(j).length > consensus.MAX_SCRIPT_PUSH)
      throw new ScriptError('PUSH_SIZE');
  }

  // Verify the redeem script.
  redeem.execute(stack, flags, tx, index, value, 1);

  // Verify the stack values.
  if (stack.length !== 1 || !stack.getBool(-1))
    throw new ScriptError('EVAL_FALSE');
};

/**
 * Verify a MAST witness program.
 * @param {Program} program
 * @param {Stack} stack
 * @param {Script} output
 * @param {VerifyFlags} flags
 * @param {TX} tx
 * @param {Number} index
 * @param {Amount} value
 * @throws {ScriptError}
 */

Script.verifyMast = function verifyMast(program, stack, output, flags, tx, index, value) {
  assert(program.version === 1);
  assert((flags & Script.flags.VERIFY_MAST) !== 0);

  if (stack.length < 4)
    throw new ScriptError('INVALID_MAST_STACK');

  const metadata = stack.get(-1);
  if (metadata.length < 1 || metadata.length > 5)
    throw new ScriptError('INVALID_MAST_STACK');

  const subscripts = metadata[0];
  if (subscripts === 0 || stack.length < subscripts + 3)
    throw new ScriptError('INVALID_MAST_STACK');

  let ops = subscripts;
  let scriptRoot = new BufferWriter();
  scriptRoot.writeU8(subscripts);

  if (metadata[metadata.length - 1] === 0x00)
    throw new ScriptError('INVALID_MAST_STACK');

  let version = 0;

  for (let j = 1; j < metadata.length; j++)
    version |= metadata[j] << 8 * (j - 1);

  if (version < 0)
    version += 0x100000000;

  if (version > 0) {
    if (flags & Script.flags.DISCOURAGE_UPGRADABLE_WITNESS_PROGRAM)
      throw new ScriptError('DISCOURAGE_UPGRADABLE_WITNESS_PROGRAM');
  }

  let mastRoot = new BufferWriter();
  mastRoot.writeU32(version);

  const pathdata = stack.get(-2);

  if (pathdata.length & 0x1f)
    throw new ScriptError('INVALID_MAST_STACK');

  const depth = pathdata.length >>> 5;

  if (depth > 32)
    throw new ScriptError('INVALID_MAST_STACK');

  ops += depth;
  if (version === 0) {
    if (ops > consensus.MAX_SCRIPT_OPS)
      throw new ScriptError('OP_COUNT');
  }

  const path = [];

  for (let j = 0; j < depth; j++)
    path.push(pathdata.slice(j * 32, j * 32 + 32));

  const posdata = stack.get(-3);

  if (posdata.length > 4)
    throw new ScriptError('INVALID_MAST_STACK');

  let pos = 0;
  if (posdata.length > 0) {
    if (posdata[posdata.length - 1] === 0x00)
      throw new ScriptError('INVALID_MAST_STACK');

    for (let j = 0; j < posdata.length; j++)
      pos |= posdata[j] << 8 * j;

    if (pos < 0)
      pos += 0x100000000;
  }

  if (depth < 32) {
    if (pos >= ((1 << depth) >>> 0))
      throw new ScriptError('INVALID_MAST_STACK');
  }

  let scripts = new BufferWriter();
  scripts.writeBytes(output.raw);

  for (let j = 0; j < subscripts; j++) {
    const script = stack.get(-(4 + j));
    if (version === 0) {
      if ((scripts.offset + script.length) > consensus.MAX_SCRIPT_SIZE)
        throw new ScriptError('SCRIPT_SIZE');
    }
    scriptRoot.writeBytes(digest.hash256(script));
    scripts.writeBytes(script);
  }

  scriptRoot = digest.hash256(scriptRoot.render());
  scriptRoot = merkle.verifyBranch(scriptRoot, path, pos);

  mastRoot.writeBytes(scriptRoot);
  mastRoot = digest.hash256(mastRoot.render());

  if (!mastRoot.equals(program.data))
    throw new ScriptError('WITNESS_PROGRAM_MISMATCH');

  if (version === 0) {
    stack.length -= 3 + subscripts;

    for (let j = 0; j < stack.length; j++) {
      if (stack.get(j).length > consensus.MAX_SCRIPT_PUSH)
        throw new ScriptError('PUSH_SIZE');
    }

    scripts = scripts.render();
    output = Script.fromRaw(scripts);
    output.execute(stack, flags, tx, index, value, 1);

    if (stack.length !== 0)
      throw new ScriptError('EVAL_FALSE');
  }
};

/**
 * Inject properties from buffer reader.
 * @private
 * @param {BufferReader} br
 */

Script.prototype.fromReader = function fromReader(br) {
  return this.fromRaw(br.readVarBytes());
};

/**
 * Inject properties from serialized data.
 * @private
 * @param {Buffer}
 */

Script.prototype.fromRaw = function fromRaw(data) {
  const br = new BufferReader(data, true);

  this.raw = data;

  while (br.left())
    this.code.push(Opcode.fromReader(br));

  return this;
};

/**
 * Create a script from buffer reader.
 * @param {BufferReader} br
 * @param {String?} enc - Either `"hex"` or `null`.
 * @returns {Script}
 */

Script.fromReader = function fromReader(br) {
  return new Script().fromReader(br);
};

/**
 * Create a script from a serialized buffer.
 * @param {Buffer|String} data - Serialized script.
 * @param {String?} enc - Either `"hex"` or `null`.
 * @returns {Script}
 */

Script.fromRaw = function fromRaw(data, enc) {
  if (typeof data === 'string')
    data = Buffer.from(data, enc);
  return new Script().fromRaw(data);
};

/**
 * Test whether an object a Script.
 * @param {Object} obj
 * @returns {Boolean}
 */

Script.isScript = function isScript(obj) {
  return obj instanceof Script;
};

/*
 * Helpers
 */

function sortKeys(keys) {
  return keys.slice().sort((a, b) => {
    return a.compare(b);
  });
}

/**
 * Test whether the data element is a valid key if VERIFY_STRICTENC is enabled.
 * @param {Buffer} key
 * @param {VerifyFlags?} flags
 * @returns {Boolean}
 * @throws {ScriptError}
 */

function validateKey(key, flags, version) {
  assert(Buffer.isBuffer(key));
  assert(typeof flags === 'number');
  assert(typeof version === 'number');

  if (flags & Script.flags.VERIFY_STRICTENC) {
    if (!common.isKeyEncoding(key))
      throw new ScriptError('PUBKEYTYPE');
  }

  if (version === 1) {
    if (flags & Script.flags.VERIFY_WITNESS_PUBKEYTYPE) {
      if (!common.isCompressedEncoding(key))
        throw new ScriptError('WITNESS_PUBKEYTYPE');
    }
  }

  return true;
}

/**
 * Test whether the data element is a valid signature based
 * on the encoding, S value, and sighash type. Requires
 * VERIFY_DERSIG|VERIFY_LOW_S|VERIFY_STRICTENC, VERIFY_LOW_S
 * and VERIFY_STRING_ENC to be enabled respectively. Note that
 * this will allow zero-length signatures.
 * @param {Buffer} sig
 * @param {VerifyFlags?} flags
 * @returns {Boolean}
 * @throws {ScriptError}
 */

function validateSignature(sig, flags) {
  assert(Buffer.isBuffer(sig));
  assert(typeof flags === 'number');

  // Allow empty sigs
  if (sig.length === 0)
    return true;

  if ((flags & Script.flags.VERIFY_DERSIG)
      || (flags & Script.flags.VERIFY_LOW_S)
      || (flags & Script.flags.VERIFY_STRICTENC)) {
    if (!common.isSignatureEncoding(sig))
      throw new ScriptError('SIG_DER');
  }

  if (flags & Script.flags.VERIFY_LOW_S) {
    if (!common.isLowDER(sig))
      throw new ScriptError('SIG_HIGH_S');
  }

  if (flags & Script.flags.VERIFY_STRICTENC) {
    if (!common.isHashType(sig))
      throw new ScriptError('SIG_HASHTYPE');
  }

  return true;
}

/**
 * Verify a signature, taking into account sighash type.
 * @param {Buffer} msg - Signature hash.
 * @param {Buffer} sig
 * @param {Buffer} key
 * @returns {Boolean}
 */

function checksig(msg, sig, key) {
  return secp256k1.verify(msg, sig.slice(0, -1), key);
}

/*
 * Expose
 */

module.exports = Script;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var elliptic = exports;

elliptic.version = __webpack_require__(138).version;
elliptic.utils = __webpack_require__(139);
elliptic.rand = __webpack_require__(140);
elliptic.curve = __webpack_require__(38);
elliptic.curves = __webpack_require__(146);

// Protocols
elliptic.ec = __webpack_require__(154);
elliptic.eddsa = __webpack_require__(157);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * address.js - address object for wmcc_core.
 */



const assert = __webpack_require__(0);
const Network = __webpack_require__(6);
const encoding = __webpack_require__(3);
const util = __webpack_require__(1);
const digest = __webpack_require__(5);
const BufferReader = __webpack_require__(2);
const StaticWriter = __webpack_require__(4);
const base58 = __webpack_require__(25);
const bech32 = __webpack_require__(101);

/**
 * Represents an address.
 * @alias module:primitives.Address
 * @constructor
 * @param {Object?} options
 * @property {Buffer} hash
 * @property {AddressPrefix} type
 * @property {Number} version
 * @property {Network} network
 */

function Address(options) {
  if (!(this instanceof Address))
    return new Address(options);

  this.hash = encoding.ZERO_HASH160;
  this.type = Address.types.PUBKEYHASH;
  this.version = -1;
  this.network = Network.primary;

  if (options)
    this.fromOptions(options);
}

/**
 * Address types.
 * @enum {Number}
 */

Address.types = {
  PUBKEYHASH: 2,
  SCRIPTHASH: 3,
  WITNESS: 4
};

/**
 * Address types by value.
 * @const {RevMap}
 */

Address.typesByVal = util.reverse(Address.types);

/**
 * Address scriptTypes.
 * @enum {Number}
 */

Address.scriptTypes = {
  NONSTANDARD: 0,
  //PUBKEY: 1,
  PUBKEYHASH: 2,
  SCRIPTHASH: 3,
  //MULTISIG: 4,
  //NULLDATA: 5,
  //WITNESSMALFORMED: 0x80 | 0,
  WITNESSSCRIPTHASH: 0x80 | 1,
  WITNESSPUBKEYHASH: 0x80 | 2,
  WITNESSMASTHASH: 0x80 | 3
};

/**
 * Address scriptTypes by value.
 * @const {RevMap}
 */

Address.scriptTypesByVal = util.reverse(Address.scriptTypes);

/**
 * Inject properties from options object.
 * @private
 * @param {Object} options
 */

Address.prototype.fromOptions = function fromOptions(options) {
  if (typeof options === 'string')
    return this.fromString(options);

  return this.fromHash(
    options.hash,
    options.type,
    options.version,
    options.network
  );
};

/**
 * Insantiate address from options.
 * @param {Object} options
 * @returns {Address}
 */

Address.fromOptions = function fromOptions(options) {
  return new Address().fromOptions(options);
};

/**
 * Get the address hash.
 * @param {String?} enc - Can be `"hex"` or `null`.
 * @returns {Hash|Buffer}
 */

Address.prototype.getHash = function getHash(enc) {
  if (enc === 'hex')
    return this.hash.toString(enc);
  return this.hash;
};

/**
 * Test whether the address is null.
 * @returns {Boolean}
 */

Address.prototype.isNull = function isNull() {
  if (this.hash.length === 20)
    return this.hash.equals(encoding.ZERO_HASH160);

  if (this.hash.length === 32)
    return this.hash.equals(encoding.ZERO_HASH);

  for (let i = 0; i < this.hash.length; i++) {
    if (this.hash[i] !== 0)
      return false;
  }

  return true;
};

/**
 * Test equality against another address.
 * @param {Address} addr
 * @returns {Boolean}
 */

Address.prototype.equals = function equals(addr) {
  assert(addr instanceof Address);

  return this.network === addr.network
    && this.type === addr.type
    && this.version === addr.version
    && this.hash.equals(addr.hash);
};

/**
 * Get the address type as a string.
 * @returns {String}
 */

Address.prototype.getType = function getType() {
  return Address.typesByVal[this.type].toLowerCase();
};

/**
 * Get the standard script type.
 * @returns {ScriptType}
 */

Address.prototype.getScriptType = function getScriptType() {
  //if (this.isPubkey())
  //  return scriptTypes.PUBKEY;

  if (this.isPubkeyhash())
    return Address.scriptTypes.PUBKEYHASH;

  if (this.isScripthash())
    return Address.scriptTypes.SCRIPTHASH;

  if (this.isWitnessPubkeyhash())
    return Address.scriptTypes.WITNESSPUBKEYHASH;

  if (this.isWitnessScripthash())
    return Address.scriptTypes.WITNESSSCRIPTHASH;

  if (this.isWitnessMasthash())
    return Address.scriptTypes.WITNESSMASTHASH;

  //if (this.isMultisig())
  //  return scriptTypes.MULTISIG;

  //if (this.isNulldata())
  //  return scriptTypes.NULLDATA;

  return Address.scriptTypes.NONSTANDARD;
};

/**
 * Get a network address prefix for the address.
 * @param {Network?} network
 * @returns {Number}
 */

Address.prototype.getPrefix = function getPrefix(network) {
  if (!network)
    network = this.network;

  network = Network.get(network);

  const prefixes = network.addressPrefix;

  switch (this.type) {
    case Address.types.PUBKEYHASH:
      return prefixes.pubkeyhash;
    case Address.types.SCRIPTHASH:
      return prefixes.scripthash;
    case Address.types.WITNESS:
      if (this.hash.length === 20)
        return prefixes.witnesspubkeyhash;

      if (this.hash.length === 32)
        return prefixes.witnessscripthash;

      break;
  }

  return -1;
};

/**
 * Calculate size of serialized address.
 * @returns {Number}
 */

Address.prototype.getSize = function getSize() {
  let size = 5 + this.hash.length;

  if (this.version !== -1)
    size += 2;

  return size;
};

/**
 * Compile the address object to its raw serialization.
 * @param {{NetworkType|Network)?} network
 * @returns {Buffer}
 * @throws Error on bad hash/prefix.
 */

Address.prototype.toRaw = function toRaw(network) {
  const size = this.getSize();
  const bw = new StaticWriter(size);
  const prefix = this.getPrefix(network);

  assert(prefix !== -1, 'Not a valid address prefix.');

  bw.writeU8(prefix);

  if (this.version !== -1) {
    bw.writeU8(this.version);
    bw.writeU8(0);
  }

  bw.writeBytes(this.hash);
  bw.writeChecksum();

  return bw.render();
};

/**
 * Compile the address object to a base58 address.
 * @param {{NetworkType|Network)?} network
 * @returns {Base58Address}
 * @throws Error on bad hash/prefix.
 */

Address.prototype.toBase58 = function toBase58(network) {
  return base58.encode(this.toRaw(network));
};

/**
 * Compile the address object to a bech32 address.
 * @param {{NetworkType|Network)?} network
 * @returns {String}
 * @throws Error on bad hash/prefix.
 */

Address.prototype.toBech32 = function toBech32(network) {
  const version = this.version;
  const hash = this.hash;

  assert(version !== -1,
    'Cannot convert non-program address to bech32.');

  if (!network)
    network = this.network;

  network = Network.get(network);

  const hrp = network.addressPrefix.bech32;

  return bech32.encode(hrp, version, hash);
};

/**
 * Inject properties from string.
 * @private
 * @param {String} addr
 * @param {(Network|NetworkType)?} network
 * @returns {Address}
 */

Address.prototype.fromString = function fromString(addr, network) {
  assert(typeof addr === 'string');
  assert(addr.length > 0);
  assert(addr.length <= 100);

  // If the address is mixed case,
  // it can only ever be base58.
  if (isMixedCase(addr))
    return this.fromBase58(addr, network);

  // Otherwise, it's most likely bech32.
  try {
    return this.fromBech32(addr, network);
  } catch (e) {
    return this.fromBase58(addr, network);
  }
};

/**
 * Instantiate address from string.
 * @param {String} addr
 * @param {(Network|NetworkType)?} network
 * @returns {Address}
 */

Address.fromString = function fromString(addr, network) {
  return new Address().fromString(addr, network);
};

/**
 * Convert the Address to a string.
 * @param {(Network|NetworkType)?} network
 * @returns {Base58Address}
 */

Address.prototype.toString = function toString(network) {
  if (this.version !== -1)
    return this.toBech32(network);
  return this.toBase58(network);
};

/**
 * Inspect the Address.
 * @returns {Object}
 */

Address.prototype.inspect = function inspect() {
  return '<Address:'
    + ` type=${this.getType()}`
    + ` version=${this.version}`
    + ` str=${this.toString()}`
    + '>';
};

/**
 * Inject properties from serialized data.
 * @private
 * @param {Buffer} data
 * @throws Parse error
 */

Address.prototype.fromRaw = function fromRaw(data, network) {
  const br = new BufferReader(data, true);

  if (data.length > 40)
    throw new Error('Address is too long.');

  const prefix = br.readU8();

  network = Network.fromAddress(prefix, network);

  const type = Address.getType(prefix, network);

  let version = -1;
  if (data.length > 25) {
    version = br.readU8();

    if (br.readU8() !== 0)
      throw new Error('Address version padding is non-zero.');
  }

  const hash = br.readBytes(br.left() - 4);

  br.verifyChecksum();

  return this.fromHash(hash, type, version, network);
};

/**
 * Create an address object from a serialized address.
 * @param {Buffer} data
 * @returns {Address}
 * @throws Parse error.
 */

Address.fromRaw = function fromRaw(data, network) {
  return new Address().fromRaw(data, network);
};

/**
 * Inject properties from base58 address.
 * @private
 * @param {Base58Address} data
 * @param {Network?} network
 * @throws Parse error
 */

Address.prototype.fromBase58 = function fromBase58(data, network) {
  assert(typeof data === 'string');

  if (data.length > 55)
    throw new Error('Address is too long.');

  return this.fromRaw(base58.decode(data), network);
};

/**
 * Create an address object from a base58 address.
 * @param {Base58Address} data
 * @param {Network?} network
 * @returns {Address}
 * @throws Parse error.
 */

Address.fromBase58 = function fromBase58(data, network) {
  return new Address().fromBase58(data, network);
};

/**
 * Inject properties from bech32 address.
 * @private
 * @param {String} data
 * @param {Network?} network
 * @throws Parse error
 */

Address.prototype.fromBech32 = function fromBech32(data, network) {
  const type = Address.types.WITNESS;

  assert(typeof data === 'string');

  const addr = bech32.decode(data);

  network = Network.fromBech32(addr.hrp, network);

  return this.fromHash(addr.hash, type, addr.version, network);
};

/**
 * Create an address object from a bech32 address.
 * @param {String} data
 * @param {Network?} network
 * @returns {Address}
 * @throws Parse error.
 */

Address.fromBech32 = function fromBech32(data, network) {
  return new Address().fromBech32(data, network);
};

/**
 * Inject properties from output script.
 * @private
 * @param {Script} script
 */

Address.prototype.fromScript = function fromScript(script) {
  const pk = script.getPubkey();

  if (pk) {
    this.hash = digest.hash160(pk);
    this.type = Address.types.PUBKEYHASH;
    this.version = -1;
    return this;
  }

  const pkh = script.getPubkeyhash();

  if (pkh) {
    this.hash = pkh;
    this.type = Address.types.PUBKEYHASH;
    this.version = -1;
    return this;
  }

  const sh = script.getScripthash();

  if (sh) {
    this.hash = sh;
    this.type = Address.types.SCRIPTHASH;
    this.version = -1;
    return this;
  }

  const program = script.getProgram();

  if (program && !program.isMalformed()) {
    this.hash = program.data;
    this.type = Address.types.WITNESS;
    this.version = program.version;
    return this;
  }

  // Put this last: it's the slowest to check.
  if (script.isMultisig()) {
    this.hash = script.hash160();
    this.type = Address.types.SCRIPTHASH;
    this.version = -1;
    return this;
  }

  return null;
};

/**
 * Inject properties from witness.
 * @private
 * @param {Witness} witness
 */

Address.prototype.fromWitness = function fromWitness(witness) {
  const [, pk] = witness.getPubkeyhashInput();

  // We're pretty much screwed here
  // since we can't get the version.
  if (pk) {
    this.hash = digest.hash160(pk);
    this.type = Address.types.WITNESS;
    this.version = 0;
    return this;
  }

  const redeem = witness.getScripthashInput();

  if (redeem) {
    this.hash = digest.sha256(redeem);
    this.type = Address.types.WITNESS;
    this.version = 0;
    return this;
  }

  return null;
};

/**
 * Inject properties from input script.
 * @private
 * @param {Script} script
 */

Address.prototype.fromInputScript = function fromInputScript(script) {
  const [, pk] = script.getPubkeyhashInput();

  if (pk) {
    this.hash = digest.hash160(pk);
    this.type = Address.types.PUBKEYHASH;
    this.version = -1;
    return this;
  }

  const redeem = script.getScripthashInput();

  if (redeem) {
    this.hash = digest.hash160(redeem);
    this.type = Address.types.SCRIPTHASH;
    this.version = -1;
    return this;
  }

  return null;
};

/**
 * Create an Address from a witness.
 * Attempt to extract address
 * properties from a witness.
 * @param {Witness}
 * @returns {Address|null}
 */

Address.fromWitness = function fromWitness(witness) {
  return new Address().fromWitness(witness);
};

/**
 * Create an Address from an input script.
 * Attempt to extract address
 * properties from an input script.
 * @param {Script}
 * @returns {Address|null}
 */

Address.fromInputScript = function fromInputScript(script) {
  return new Address().fromInputScript(script);
};

/**
 * Create an Address from an output script.
 * Parse an output script and extract address
 * properties. Converts pubkey and multisig
 * scripts to pubkeyhash and scripthash addresses.
 * @param {Script}
 * @returns {Address|null}
 */

Address.fromScript = function fromScript(script) {
  return new Address().fromScript(script);
};

/**
 * Inject properties from a hash.
 * @private
 * @param {Buffer|Hash} hash
 * @param {AddressPrefix} type
 * @param {Number} [version=-1]
 * @param {(Network|NetworkType)?} network
 * @throws on bad hash size
 */

Address.prototype.fromHash = function fromHash(hash, type, version, network) {
  if (typeof hash === 'string')
    hash = Buffer.from(hash, 'hex');

  if (typeof type === 'string') {
    type = Address.types[type.toUpperCase()];
    assert(type != null, 'Not a valid address type.');
  }

  if (type == null)
    type = Address.types.PUBKEYHASH;

  if (version == null)
    version = -1;

  network = Network.get(network);

  assert(Buffer.isBuffer(hash));
  assert(util.isU8(type));
  assert(util.isI8(version));

  assert(type >= Address.types.PUBKEYHASH && type <= Address.types.WITNESS,
    'Not a valid address type.');

  if (version === -1) {
    assert(type !== Address.types.WITNESS, 'Wrong version (witness)');
    assert(hash.length === 20, 'Hash is the wrong size.');
  } else {
    assert(type === Address.types.WITNESS, 'Wrong version (non-witness).');
    assert(version >= 0 && version <= 16, 'Bad program version.');
    if (version === 0 && type === Address.types.WITNESS) {
      assert(hash.length === 20 || hash.length === 32,
        'Witness program hash is the wrong size.');
    }
    assert(hash.length >= 2 && hash.length <= 40, 'Hash is the wrong size.');
  }

  this.hash = hash;
  this.type = type;
  this.version = version;
  this.network = network;

  return this;
};

/**
 * Create a naked address from hash/type/version.
 * @param {Hash} hash
 * @param {AddressPrefix} type
 * @param {Number} [version=-1]
 * @param {(Network|NetworkType)?} network
 * @returns {Address}
 * @throws on bad hash size
 */

Address.fromHash = function fromHash(hash, type, version, network) {
  return new Address().fromHash(hash, type, version, network);
};

/**
 * Inject properties from pubkeyhash.
 * @private
 * @param {Buffer} hash
 * @param {Network?} network
 * @returns {Address}
 */

Address.prototype.fromPubkeyhash = function fromPubkeyhash(hash, network) {
  const type = Address.types.PUBKEYHASH;
  assert(hash.length === 20, 'P2PKH must be 20 bytes.');
  return this.fromHash(hash, type, -1, network);
};

/**
 * Instantiate address from pubkeyhash.
 * @param {Buffer} hash
 * @param {Network?} network
 * @returns {Address}
 */

Address.fromPubkeyhash = function fromPubkeyhash(hash, network) {
  return new Address().fromPubkeyhash(hash, network);
};

/**
 * Inject properties from scripthash.
 * @private
 * @param {Buffer} hash
 * @param {Network?} network
 * @returns {Address}
 */

Address.prototype.fromScripthash = function fromScripthash(hash, network) {
  const type = Address.types.SCRIPTHASH;
  assert(hash && hash.length === 20, 'P2SH must be 20 bytes.');
  return this.fromHash(hash, type, -1, network);
};

/**
 * Instantiate address from scripthash.
 * @param {Buffer} hash
 * @param {Network?} network
 * @returns {Address}
 */

Address.fromScripthash = function fromScripthash(hash, network) {
  return new Address().fromScripthash(hash, network);
};

/**
 * Inject properties from witness pubkeyhash.
 * @private
 * @param {Buffer} hash
 * @param {Network?} network
 * @returns {Address}
 */

Address.prototype.fromWitnessPubkeyhash = function fromWitnessPubkeyhash(hash, network) {
  const type = Address.types.WITNESS;
  assert(hash && hash.length === 20, 'P2WPKH must be 20 bytes.');
  return this.fromHash(hash, type, 0, network);
};

/**
 * Instantiate address from witness pubkeyhash.
 * @param {Buffer} hash
 * @param {Network?} network
 * @returns {Address}
 */

Address.fromWitnessPubkeyhash = function fromWitnessPubkeyhash(hash, network) {
  return new Address().fromWitnessPubkeyhash(hash, network);
};

/**
 * Inject properties from witness scripthash.
 * @private
 * @param {Buffer} hash
 * @param {Network?} network
 * @returns {Address}
 */

Address.prototype.fromWitnessScripthash = function fromWitnessScripthash(hash, network) {
  const type = Address.types.WITNESS;
  assert(hash && hash.length === 32, 'P2WPKH must be 32 bytes.');
  return this.fromHash(hash, type, 0, network);
};

/**
 * Instantiate address from witness scripthash.
 * @param {Buffer} hash
 * @param {Network?} network
 * @returns {Address}
 */

Address.fromWitnessScripthash = function fromWitnessScripthash(hash, network) {
  return new Address().fromWitnessScripthash(hash, network);
};

/**
 * Inject properties from witness program.
 * @private
 * @param {Number} version
 * @param {Buffer} hash
 * @param {Network?} network
 * @returns {Address}
 */

Address.prototype.fromProgram = function fromProgram(version, hash, network) {
  const type = Address.types.WITNESS;

  assert(version >= 0, 'Bad version for witness program.');

  if (typeof hash === 'string')
    hash = Buffer.from(hash, 'hex');

  return this.fromHash(hash, type, version, network);
};

/**
 * Instantiate address from witness program.
 * @param {Number} version
 * @param {Buffer} hash
 * @param {Network?} network
 * @returns {Address}
 */

Address.fromProgram = function fromProgram(version, hash, network) {
  return new Address().fromProgram(version, hash, network);
};

/**
 * Test whether the address is pubkeyhash.
 * @returns {Boolean}
 */

Address.prototype.isPubkeyhash = function isPubkeyhash() {
  return this.type === Address.types.PUBKEYHASH;
};

/**
 * Test whether the address is scripthash.
 * @returns {Boolean}
 */

Address.prototype.isScripthash = function isScripthash() {
  return this.type === Address.types.SCRIPTHASH;
};

/**
 * Test whether the address is witness pubkeyhash.
 * @returns {Boolean}
 */

Address.prototype.isWitnessPubkeyhash = function isWitnessPubkeyhash() {
  return this.version === 0 && this.hash.length === 20;
};

/**
 * Test whether the address is witness scripthash.
 * @returns {Boolean}
 */

Address.prototype.isWitnessScripthash = function isWitnessScripthash() {
  return this.version === 0 && this.hash.length === 32;
};

/**
 * Test whether the address is witness masthash.
 * @returns {Boolean}
 */

Address.prototype.isWitnessMasthash = function isWitnessMasthash() {
  return this.version === 1 && this.hash.length === 32;
};

/**
 * Test whether the address is a witness program.
 * @returns {Boolean}
 */

Address.prototype.isProgram = function isProgram() {
  return this.version !== -1;
};

/**
 * Test whether the address is an unknown witness program.
 * @returns {Boolean}
 */

Address.prototype.isUnknown = function isUnknown() {
  if (this.version === -1)
    return false;

  if (this.version > 0)
    return true;

  return this.hash.length !== 20 && this.hash.length !== 32;
};

/**
 * Get the hash of a base58 address or address-related object.
 * @param {String|Address|Hash} data
 * @param {String?} enc
 * @param {Network?} network
 * @returns {Hash}
 */

Address.getHash = function getHash(data, enc, network) {
  if (!data)
    throw new Error('Object is not an address.');

  let hash;

  if (typeof data === 'string') {
    if (data.length === 40 || data.length === 64)
      return enc === 'hex' ? data : Buffer.from(data, 'hex');

    hash = Address.fromString(data, network).hash;
  } else if (Buffer.isBuffer(data)) {
    if (data.length !== 20 && data.length !== 32)
      throw new Error('Object is not an address.');
    hash = data;
  } else if (data instanceof Address) {
    hash = data.hash;
    if (network) {
      network = Network.get(network);
      if (data.network !== network)
        throw new Error('Network mismatch for address.');
    }
  } else {
    throw new Error('Object is not an address.');
  }

  return enc === 'hex'
    ? hash.toString('hex')
    : hash;
};

/**
 * Get an address type for a specified network address prefix.
 * @param {Number} prefix
 * @param {Network} network
 * @returns {AddressType}
 */

Address.getType = function getType(prefix, network) {
  const prefixes = network.addressPrefix;
  switch (prefix) {
    case prefixes.pubkeyhash:
      return Address.types.PUBKEYHASH;
    case prefixes.scripthash:
      return Address.types.SCRIPTHASH;
    case prefixes.witnesspubkeyhash:
    case prefixes.witnessscripthash:
      return Address.types.WITNESS;
    default:
      throw new Error('Unknown address prefix.');
  }
};

/*
 * Helpers
 */

function isMixedCase(str) {
  let lower = false;
  let upper = false;

  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);

    if (ch >= 0x30 && ch <= 0x39)
      continue;

    if (ch & 32) {
      assert(ch >= 0x61 && ch <= 0x7a);
      lower = true;
    } else {
      assert(ch >= 0x41 && ch <= 0x5a);
      upper = true;
    }

    if (lower && upper)
      return true;
  }

  return false;
}

/*
 * Expose
 */

module.exports = Address;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * secp256k1.js - ecdsa wrapper for secp256k1 and elliptic.
 */



let native;

if (Number(process.env.WMCC_NO_SECP256K1) !== 1) {
  try {
    native = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"secp256k1/bindings\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
  } catch (e) {
    ;
  }
}

module.exports = native
  ? __webpack_require__(135)
  : __webpack_require__(137);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * output.js - output object for wmcc_core.
 */



const assert = __webpack_require__(0);
const util = __webpack_require__(1);
const Amount = __webpack_require__(20);
const Network = __webpack_require__(6);
const Address = __webpack_require__(11);
const Script = __webpack_require__(8);
const StaticWriter = __webpack_require__(4);
const BufferReader = __webpack_require__(2);
const consensus = __webpack_require__(7);
const policy = __webpack_require__(19);

/**
 * Represents a transaction output.
 * @alias module:primitives.Output
 * @constructor
 * @param {NakedOutput} options
 * @property {Amount} value - Value in wmcoins.
 * @property {Script} script
 */

function Output(options) {
  if (!(this instanceof Output))
    return new Output(options);

  this.value = 0;
  this.script = new Script();

  if (options)
    this.fromOptions(options);
}

/**
 * Inject properties from options object.
 * @private
 * @param {NakedOutput} options
 */

Output.prototype.fromOptions = function fromOptions(options) {
  assert(options, 'Output data is required.');

  if (options.value) {
    assert(util.isU64(options.value), 'Value must be a uint64.');
    this.value = options.value;
  }

  if (options.script)
    this.script.fromOptions(options.script);

  if (options.address)
    this.script.fromAddress(options.address);

  return this;
};

/**
 * Instantiate output from options object.
 * @param {NakedOutput} options
 * @returns {Output}
 */

Output.fromOptions = function fromOptions(options) {
  return new Output().fromOptions(options);
};

/**
 * Inject properties from script/value pair.
 * @private
 * @param {Script|Address} script
 * @param {Amount} value
 * @returns {Output}
 */

Output.prototype.fromScript = function fromScript(script, value) {
  if (typeof script === 'string')
    script = Address.fromString(script);

  if (script instanceof Address)
    script = Script.fromAddress(script);

  assert(script instanceof Script, 'Script must be a Script.');
  assert(util.isU64(value), 'Value must be a uint64.');

  this.script = script;
  this.value = value;

  return this;
};

/**
 * Instantiate output from script/value pair.
 * @param {Script|Address} script
 * @param {Amount} value
 * @returns {Output}
 */

Output.fromScript = function fromScript(script, value) {
  return new Output().fromScript(script, value);
};

/**
 * Clone the output.
 * @returns {Output}
 */

Output.prototype.clone = function clone() {
  const output = new Output();
  output.value = this.value;
  output.script.inject(this.script);
  return output;
};

/**
 * Test equality against another output.
 * @param {Output} output
 * @returns {Boolean}
 */

Output.prototype.equals = function equals(output) {
  assert(Output.isOutput(output));
  return this.value === output.value
    && this.script.equals(output.script);
};

/**
 * Compare against another output (BIP69).
 * @param {Output} output
 * @returns {Number}
 */

Output.prototype.compare = function compare(output) {
  assert(Output.isOutput(output));

  const cmp = this.value - output.value;

  if (cmp !== 0)
    return cmp;

  return this.script.compare(output.script);
};

/**
 * Get the script type as a string.
 * @returns {ScriptType} type
 */

Output.prototype.getType = function getType() {
  return Script.typesByVal[this.script.getType()].toLowerCase();
};

/**
 * Get the address.
 * @returns {Address} address
 */

Output.prototype.getAddress = function getAddress() {
  return this.script.getAddress();
};

/**
 * Get the address hash.
 * @param {String?} enc
 * @returns {Hash} hash
 */

Output.prototype.getHash = function getHash(enc) {
  const addr = this.getAddress();

  if (!addr)
    return null;

  return addr.getHash(enc);
};

/**
 * Convert the input to a more user-friendly object.
 * @returns {Object}
 */

Output.prototype.inspect = function inspect() {
  return {
    type: this.getType(),
    value: Amount.wmcc(this.value),
    script: this.script,
    address: this.getAddress()
  };
};

/**
 * Convert the output to an object suitable
 * for JSON serialization.
 * @returns {Object}
 */

Output.prototype.toJSON = function toJSON() {
  return this.getJSON();
};

/**
 * Convert the output to an object suitable
 * for JSON serialization.
 * @param {Network} network
 * @returns {Object}
 */

Output.prototype.getJSON = function getJSON(network) {
  let addr = this.getAddress();

  network = Network.get(network);

  if (addr)
    addr = addr.toString(network);

  return {
    value: this.value,
    script: this.script.toJSON(),
    address: addr
  };
};

/**
 * Calculate the dust threshold for this
 * output, based on serialize size and rate.
 * @param {Rate?} rate
 * @returns {Amount}
 */

Output.prototype.getDustThreshold = function getDustThreshold(rate) {
  const scale = consensus.WITNESS_SCALE_FACTOR;

  if (this.script.isUnspendable())
    return 0;

  let size = this.getSize();

  if (this.script.isProgram()) {
    // 75% segwit discount applied to script size.
    size += 32 + 4 + 1 + (107 / scale | 0) + 4;
  } else {
    size += 32 + 4 + 1 + 107 + 4;
  }

  return 3 * policy.getMinFee(size, rate);
};

/**
 * Calculate size of serialized output.
 * @returns {Number}
 */

Output.prototype.getSize = function getSize() {
  return 8 + this.script.getVarSize();
};

/**
 * Test whether the output should be considered dust.
 * @param {Rate?} rate
 * @returns {Boolean}
 */

Output.prototype.isDust = function isDust(rate) {
  return this.value < this.getDustThreshold(rate);
};

/**
 * Inject properties from a JSON object.
 * @private
 * @param {Object} json
 */

Output.prototype.fromJSON = function fromJSON(json) {
  assert(json, 'Output data is required.');
  assert(util.isU64(json.value), 'Value must be a uint64.');
  this.value = json.value;
  this.script.fromJSON(json.script);
  return this;
};

/**
 * Instantiate an Output from a jsonified output object.
 * @param {Object} json - The jsonified output object.
 * @returns {Output}
 */

Output.fromJSON = function fromJSON(json) {
  return new Output().fromJSON(json);
};

/**
 * Write the output to a buffer writer.
 * @param {BufferWriter} bw
 */

Output.prototype.toWriter = function toWriter(bw) {
  bw.writeI64(this.value);
  bw.writeVarBytes(this.script.toRaw());
  return bw;
};

/**
 * Serialize the output.
 * @param {String?} enc - Encoding, can be `'hex'` or null.
 * @returns {Buffer|String}
 */

Output.prototype.toRaw = function toRaw() {
  const size = this.getSize();
  return this.toWriter(new StaticWriter(size)).render();
};

/**
 * Inject properties from buffer reader.
 * @private
 * @param {BufferReader} br
 */

Output.prototype.fromReader = function fromReader(br) {
  this.value = br.readI64();
  this.script.fromRaw(br.readVarBytes());
  return this;
};

/**
 * Inject properties from serialized data.
 * @private
 * @param {Buffer} data
 */

Output.prototype.fromRaw = function fromRaw(data) {
  return this.fromReader(new BufferReader(data));
};

/**
 * Instantiate an output from a buffer reader.
 * @param {BufferReader} br
 * @returns {Output}
 */

Output.fromReader = function fromReader(br) {
  return new Output().fromReader(br);
};

/**
 * Instantiate an output from a serialized Buffer.
 * @param {Buffer} data
 * @param {String?} enc - Encoding, can be `'hex'` or null.
 * @returns {Output}
 */

Output.fromRaw = function fromRaw(data, enc) {
  if (typeof data === 'string')
    data = Buffer.from(data, enc);
  return new Output().fromRaw(data);
};

/**
 * Test an object to see if it is an Output.
 * @param {Object} obj
 * @returns {Boolean}
 */

Output.isOutput = function isOutput(obj) {
  return obj instanceof Output;
};

/*
 * Expose
 */

module.exports = Output;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assert = __webpack_require__(22);
var inherits = __webpack_require__(39);

exports.inherits = inherits;

function toArray(msg, enc) {
  if (Array.isArray(msg))
    return msg.slice();
  if (!msg)
    return [];
  var res = [];
  if (typeof msg === 'string') {
    if (!enc) {
      for (var i = 0; i < msg.length; i++) {
        var c = msg.charCodeAt(i);
        var hi = c >> 8;
        var lo = c & 0xff;
        if (hi)
          res.push(hi, lo);
        else
          res.push(lo);
      }
    } else if (enc === 'hex') {
      msg = msg.replace(/[^a-z0-9]+/ig, '');
      if (msg.length % 2 !== 0)
        msg = '0' + msg;
      for (i = 0; i < msg.length; i += 2)
        res.push(parseInt(msg[i] + msg[i + 1], 16));
    }
  } else {
    for (i = 0; i < msg.length; i++)
      res[i] = msg[i] | 0;
  }
  return res;
}
exports.toArray = toArray;

function toHex(msg) {
  var res = '';
  for (var i = 0; i < msg.length; i++)
    res += zero2(msg[i].toString(16));
  return res;
}
exports.toHex = toHex;

function htonl(w) {
  var res = (w >>> 24) |
            ((w >>> 8) & 0xff00) |
            ((w << 8) & 0xff0000) |
            ((w & 0xff) << 24);
  return res >>> 0;
}
exports.htonl = htonl;

function toHex32(msg, endian) {
  var res = '';
  for (var i = 0; i < msg.length; i++) {
    var w = msg[i];
    if (endian === 'little')
      w = htonl(w);
    res += zero8(w.toString(16));
  }
  return res;
}
exports.toHex32 = toHex32;

function zero2(word) {
  if (word.length === 1)
    return '0' + word;
  else
    return word;
}
exports.zero2 = zero2;

function zero8(word) {
  if (word.length === 7)
    return '0' + word;
  else if (word.length === 6)
    return '00' + word;
  else if (word.length === 5)
    return '000' + word;
  else if (word.length === 4)
    return '0000' + word;
  else if (word.length === 3)
    return '00000' + word;
  else if (word.length === 2)
    return '000000' + word;
  else if (word.length === 1)
    return '0000000' + word;
  else
    return word;
}
exports.zero8 = zero8;

function join32(msg, start, end, endian) {
  var len = end - start;
  assert(len % 4 === 0);
  var res = new Array(len / 4);
  for (var i = 0, k = start; i < res.length; i++, k += 4) {
    var w;
    if (endian === 'big')
      w = (msg[k] << 24) | (msg[k + 1] << 16) | (msg[k + 2] << 8) | msg[k + 3];
    else
      w = (msg[k + 3] << 24) | (msg[k + 2] << 16) | (msg[k + 1] << 8) | msg[k];
    res[i] = w >>> 0;
  }
  return res;
}
exports.join32 = join32;

function split32(msg, endian) {
  var res = new Array(msg.length * 4);
  for (var i = 0, k = 0; i < msg.length; i++, k += 4) {
    var m = msg[i];
    if (endian === 'big') {
      res[k] = m >>> 24;
      res[k + 1] = (m >>> 16) & 0xff;
      res[k + 2] = (m >>> 8) & 0xff;
      res[k + 3] = m & 0xff;
    } else {
      res[k + 3] = m >>> 24;
      res[k + 2] = (m >>> 16) & 0xff;
      res[k + 1] = (m >>> 8) & 0xff;
      res[k] = m & 0xff;
    }
  }
  return res;
}
exports.split32 = split32;

function rotr32(w, b) {
  return (w >>> b) | (w << (32 - b));
}
exports.rotr32 = rotr32;

function rotl32(w, b) {
  return (w << b) | (w >>> (32 - b));
}
exports.rotl32 = rotl32;

function sum32(a, b) {
  return (a + b) >>> 0;
}
exports.sum32 = sum32;

function sum32_3(a, b, c) {
  return (a + b + c) >>> 0;
}
exports.sum32_3 = sum32_3;

function sum32_4(a, b, c, d) {
  return (a + b + c + d) >>> 0;
}
exports.sum32_4 = sum32_4;

function sum32_5(a, b, c, d, e) {
  return (a + b + c + d + e) >>> 0;
}
exports.sum32_5 = sum32_5;

function sum64(buf, pos, ah, al) {
  var bh = buf[pos];
  var bl = buf[pos + 1];

  var lo = (al + bl) >>> 0;
  var hi = (lo < al ? 1 : 0) + ah + bh;
  buf[pos] = hi >>> 0;
  buf[pos + 1] = lo;
}
exports.sum64 = sum64;

function sum64_hi(ah, al, bh, bl) {
  var lo = (al + bl) >>> 0;
  var hi = (lo < al ? 1 : 0) + ah + bh;
  return hi >>> 0;
}
exports.sum64_hi = sum64_hi;

function sum64_lo(ah, al, bh, bl) {
  var lo = al + bl;
  return lo >>> 0;
}
exports.sum64_lo = sum64_lo;

function sum64_4_hi(ah, al, bh, bl, ch, cl, dh, dl) {
  var carry = 0;
  var lo = al;
  lo = (lo + bl) >>> 0;
  carry += lo < al ? 1 : 0;
  lo = (lo + cl) >>> 0;
  carry += lo < cl ? 1 : 0;
  lo = (lo + dl) >>> 0;
  carry += lo < dl ? 1 : 0;

  var hi = ah + bh + ch + dh + carry;
  return hi >>> 0;
}
exports.sum64_4_hi = sum64_4_hi;

function sum64_4_lo(ah, al, bh, bl, ch, cl, dh, dl) {
  var lo = al + bl + cl + dl;
  return lo >>> 0;
}
exports.sum64_4_lo = sum64_4_lo;

function sum64_5_hi(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
  var carry = 0;
  var lo = al;
  lo = (lo + bl) >>> 0;
  carry += lo < al ? 1 : 0;
  lo = (lo + cl) >>> 0;
  carry += lo < cl ? 1 : 0;
  lo = (lo + dl) >>> 0;
  carry += lo < dl ? 1 : 0;
  lo = (lo + el) >>> 0;
  carry += lo < el ? 1 : 0;

  var hi = ah + bh + ch + dh + eh + carry;
  return hi >>> 0;
}
exports.sum64_5_hi = sum64_5_hi;

function sum64_5_lo(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
  var lo = al + bl + cl + dl + el;

  return lo >>> 0;
}
exports.sum64_5_lo = sum64_5_lo;

function rotr64_hi(ah, al, num) {
  var r = (al << (32 - num)) | (ah >>> num);
  return r >>> 0;
}
exports.rotr64_hi = rotr64_hi;

function rotr64_lo(ah, al, num) {
  var r = (ah << (32 - num)) | (al >>> num);
  return r >>> 0;
}
exports.rotr64_lo = rotr64_lo;

function shr64_hi(ah, al, num) {
  return ah >>> num;
}
exports.shr64_hi = shr64_hi;

function shr64_lo(ah, al, num) {
  var r = (ah << (32 - num)) | (al >>> num);
  return r >>> 0;
}
exports.shr64_lo = shr64_lo;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * tx.js - transaction object for wmcc_core.
 */



const assert = __webpack_require__(0);
const util = __webpack_require__(1);
const encoding = __webpack_require__(3);
const digest = __webpack_require__(5);
const secp256k1 = __webpack_require__(12);
const Amount = __webpack_require__(20);
const Network = __webpack_require__(6);
const Script = __webpack_require__(8);
const BufferReader = __webpack_require__(2);
const StaticWriter = __webpack_require__(4);
const Input = __webpack_require__(41);
const Output = __webpack_require__(13);
const Outpoint = __webpack_require__(21);
const InvItem = __webpack_require__(36);
const Bloom = __webpack_require__(42);
const consensus = __webpack_require__(7);
const policy = __webpack_require__(19);
const ScriptError = __webpack_require__(35);
const hashType = Script.hashType;

/**
 * A static transaction object.
 * @alias module:primitives.TX
 * @constructor
 * @param {Object} options - Transaction fields.
 * @property {Number} version - Transaction version. Note that WMCC_Core reads
 * versions as unsigned even though they are signed at the protocol level.
 * This value will never be negative.
 * @property {Number} flag - Flag field for segregated witness.
 * Always non-zero (1 if not present).
 * @property {Input[]} inputs
 * @property {Output[]} outputs
 * @property {Number} locktime - nLockTime
 */

function TX(options) {
  if (!(this instanceof TX))
    return new TX(options);

  this.version = 1;
  this.inputs = [];
  this.outputs = [];
  this.locktime = 0;

  this.mutable = false;

  this._hash = null;
  this._hhash = null;
  this._whash = null;

  this._raw = null;
  this._size = -1;
  this._witness = -1;
  this._sigops = -1;

  this._hashPrevouts = null;
  this._hashSequence = null;
  this._hashOutputs = null;

  if (options)
    this.fromOptions(options);
}

/**
 * Inject properties from options object.
 * @private
 * @param {NakedTX} options
 */

TX.prototype.fromOptions = function fromOptions(options) {
  assert(options, 'TX data is required.');

  if (options.version != null) {
    assert(util.isU32(options.version), 'Version must be a uint32.');
    this.version = options.version;
  }

  if (options.inputs) {
    assert(Array.isArray(options.inputs), 'Inputs must be an array.');
    for (const input of options.inputs)
      this.inputs.push(new Input(input));
  }

  if (options.outputs) {
    assert(Array.isArray(options.outputs), 'Outputs must be an array.');
    for (const output of options.outputs)
      this.outputs.push(new Output(output));
  }

  if (options.locktime != null) {
    assert(util.isU32(options.locktime), 'Locktime must be a uint32.');
    this.locktime = options.locktime;
  }

  return this;
};

/**
 * Instantiate TX from options object.
 * @param {NakedTX} options
 * @returns {TX}
 */

TX.fromOptions = function fromOptions(options) {
  return new TX().fromOptions(options);
};

/**
 * Clone the transaction.
 * @returns {TX}
 */

TX.prototype.clone = function clone() {
  return new TX().inject(this);
};

/**
 * Inject properties from tx.
 * Used for cloning.
 * @private
 * @param {TX} tx
 * @returns {TX}
 */

TX.prototype.inject = function inject(tx) {
  this.version = tx.version;

  for (const input of tx.inputs)
    this.inputs.push(input.clone());

  for (const output of tx.outputs)
    this.outputs.push(output.clone());

  this.locktime = tx.locktime;

  return this;
};

/**
 * Clear any cached values.
 */

TX.prototype.refresh = function refresh() {
  this._hash = null;
  this._hhash = null;
  this._whash = null;

  this._raw = null;
  this._size = -1;
  this._witness = -1;
  this._sigops = -1;

  this._hashPrevouts = null;
  this._hashSequence = null;
  this._hashOutputs = null;
};

/**
 * Hash the transaction with the non-witness serialization.
 * @param {String?} enc - Can be `'hex'` or `null`.
 * @returns {Hash|Buffer} hash
 */

TX.prototype.hash = function hash(enc) {
  let h = this._hash;

  if (!h) {
    h = digest.hash256(this.toNormal());
    if (!this.mutable)
      this._hash = h;
  }

  if (enc === 'hex') {
    let hex = this._hhash;
    if (!hex) {
      hex = h.toString('hex');
      if (!this.mutable)
        this._hhash = hex;
    }
    h = hex;
  }

  return h;
};

/**
 * Hash the transaction with the witness
 * serialization, return the wtxid (normal
 * hash if no witness is present, all zeroes
 * if coinbase).
 * @param {String?} enc - Can be `'hex'` or `null`.
 * @returns {Hash|Buffer} hash
 */

TX.prototype.witnessHash = function witnessHash(enc) {
  if (!this.hasWitness())
    return this.hash(enc);

  let hash = this._whash;

  if (!hash) {
    hash = digest.hash256(this.toRaw());
    if (!this.mutable)
      this._whash = hash;
  }

  return enc === 'hex' ? hash.toString('hex') : hash;
};

/**
 * Serialize the transaction. Note
 * that this is cached. This will use
 * the witness serialization if a
 * witness is present.
 * @returns {Buffer} Serialized transaction.
 */

TX.prototype.toRaw = function toRaw() {
  return this.frame().data;
};

/**
 * Serialize the transaction without the
 * witness vector, regardless of whether it
 * is a witness transaction or not.
 * @returns {Buffer} Serialized transaction.
 */

TX.prototype.toNormal = function toNormal() {
  if (this.hasWitness())
    return this.frameNormal().data;
  return this.toRaw();
};

/**
 * Write the transaction to a buffer writer.
 * @param {BufferWriter} bw
 */

TX.prototype.toWriter = function toWriter(bw) {
  if (this.mutable) {
    if (this.hasWitness())
      return this.writeWitness(bw);
    return this.writeNormal(bw);
  }

  bw.writeBytes(this.toRaw());

  return bw;
};

/**
 * Write the transaction to a buffer writer.
 * Uses non-witness serialization.
 * @param {BufferWriter} bw
 */

TX.prototype.toNormalWriter = function toNormalWriter(bw) {
  if (this.hasWitness()) {
    this.writeNormal(bw);
    return bw;
  }
  return this.toWriter(bw);
};

/**
 * Serialize the transaction. Note
 * that this is cached. This will use
 * the witness serialization if a
 * witness is present.
 * @private
 * @returns {RawTX}
 */

TX.prototype.frame = function frame() {
  if (this.mutable) {
    assert(!this._raw);
    if (this.hasWitness())
      return this.frameWitness();
    return this.frameNormal();
  }

  if (this._raw) {
    assert(this._size >= 0);
    assert(this._witness >= 0);
    const raw = new RawTX(this._size, this._witness);
    raw.data = this._raw;
    return raw;
  }

  let raw;
  if (this.hasWitness())
    raw = this.frameWitness();
  else
    raw = this.frameNormal();

  this._raw = raw.data;
  this._size = raw.size;
  this._witness = raw.witness;

  return raw;
};

/**
 * Calculate total size and size of the witness bytes.
 * @returns {Object} Contains `size` and `witness`.
 */

TX.prototype.getSizes = function getSizes() {
  if (this.mutable) {
    if (this.hasWitness())
      return this.getWitnessSizes();
    return this.getNormalSizes();
  }
  return this.frame();
};

/**
 * Calculate the virtual size of the transaction.
 * Note that this is cached.
 * @returns {Number} vsize
 */

TX.prototype.getVirtualSize = function getVirtualSize() {
  const scale = consensus.WITNESS_SCALE_FACTOR;
  return (this.getWeight() + scale - 1) / scale | 0;
};

/**
 * Calculate the virtual size of the transaction
 * (weighted against bytes per sigop cost).
 * @param {Number} sigops - Sigops cost.
 * @returns {Number} vsize
 */

TX.prototype.getSigopsSize = function getSigopsSize(sigops) {
  const scale = consensus.WITNESS_SCALE_FACTOR;
  const bytes = policy.BYTES_PER_SIGOP;
  const weight = Math.max(this.getWeight(), sigops * bytes);
  return (weight + scale - 1) / scale | 0;
};

/**
 * Calculate the weight of the transaction.
 * Note that this is cached.
 * @returns {Number} weight
 */

TX.prototype.getWeight = function getWeight() {
  const raw = this.getSizes();
  const base = raw.size - raw.witness;
  return base * (consensus.WITNESS_SCALE_FACTOR - 1) + raw.size;
};

/**
 * Calculate the real size of the transaction
 * with the witness included.
 * @returns {Number} size
 */

TX.prototype.getSize = function getSize() {
  return this.getSizes().size;
};

/**
 * Calculate the size of the transaction
 * without the witness.
 * with the witness included.
 * @returns {Number} size
 */

TX.prototype.getBaseSize = function getBaseSize() {
  const raw = this.getSizes();
  return raw.size - raw.witness;
};

/**
 * Test whether the transaction has a non-empty witness.
 * @returns {Boolean}
 */

TX.prototype.hasWitness = function hasWitness() {
  if (this._witness !== -1)
    return this._witness !== 0;

  for (const input of this.inputs) {
    if (input.witness.items.length > 0)
      return true;
  }

  return false;
};

/**
 * Get the signature hash of the transaction for signing verifying.
 * @param {Number} index - Index of input being signed/verified.
 * @param {Script} prev - Previous output script or redeem script
 * (in the case of witnesspubkeyhash, this should be the generated
 * p2pkh script).
 * @param {Amount} value - Previous output value.
 * @param {SighashType} type - Sighash type.
 * @param {Number} version - Sighash version (0=legacy, 1=segwit).
 * @returns {Buffer} Signature hash.
 */

TX.prototype.signatureHash = function signatureHash(index, prev, value, type, version) {
  assert(index >= 0 && index < this.inputs.length);
  assert(prev instanceof Script);
  assert(typeof value === 'number');
  assert(typeof type === 'number');

  // Traditional sighashing
  if (version === 0)
    return this.signatureHashV0(index, prev, type);

  // Segwit sighashing
  if (version === 1)
    return this.signatureHashV1(index, prev, value, type);

  throw new Error('Unknown sighash version.');
};

/**
 * Legacy sighashing -- O(n^2).
 * @private
 * @param {Number} index
 * @param {Script} prev
 * @param {SighashType} type
 * @returns {Buffer}
 */

TX.prototype.signatureHashV0 = function signatureHashV0(index, prev, type) {
  if ((type & 0x1f) === hashType.SINGLE) {
    // wmccd used to return 1 as an error code:
    // it ended up being treated like a hash.
    if (index >= this.outputs.length)
      return Buffer.from(encoding.ONE_HASH);
  }

  // Remove all code separators.
  prev = prev.removeSeparators();

  // Calculate buffer size.
  const size = this.hashSize(index, prev, type);
  const bw = StaticWriter.pool(size);

  bw.writeU32(this.version);

  // Serialize inputs.
  if (type & hashType.ANYONECANPAY) {
    // Serialize only the current
    // input if ANYONECANPAY.
    const input = this.inputs[index];

    // Count.
    bw.writeVarint(1);

    // Outpoint.
    input.prevout.toWriter(bw);

    // Replace script with previous
    // output script if current index.
    bw.writeVarBytes(prev.toRaw());
    bw.writeU32(input.sequence);
  } else {
    bw.writeVarint(this.inputs.length);
    for (let i = 0; i < this.inputs.length; i++) {
      const input = this.inputs[i];

      // Outpoint.
      input.prevout.toWriter(bw);

      // Replace script with previous
      // output script if current index.
      if (i === index) {
        bw.writeVarBytes(prev.toRaw());
        bw.writeU32(input.sequence);
        continue;
      }

      // Script is null.
      bw.writeVarint(0);

      // Sequences are 0 if NONE or SINGLE.
      switch (type & 0x1f) {
        case hashType.NONE:
        case hashType.SINGLE:
          bw.writeU32(0);
          break;
        default:
          bw.writeU32(input.sequence);
          break;
      }
    }
  }

  // Serialize outputs.
  switch (type & 0x1f) {
    case hashType.NONE: {
      // No outputs if NONE.
      bw.writeVarint(0);
      break;
    }
    case hashType.SINGLE: {
      const output = this.outputs[index];

      // Drop all outputs after the
      // current input index if SINGLE.
      bw.writeVarint(index + 1);

      for (let i = 0; i < index; i++) {
        // Null all outputs not at
        // current input index.
        bw.writeI64(-1);
        bw.writeVarint(0);
      }

      // Regular serialization
      // at current input index.
      output.toWriter(bw);

      break;
    }
    default: {
      // Regular output serialization if ALL.
      bw.writeVarint(this.outputs.length);
      for (const output of this.outputs)
        output.toWriter(bw);
      break;
    }
  }

  bw.writeU32(this.locktime);

  // Append the hash type.
  bw.writeU32(type);

  return digest.hash256(bw.render());
};

/**
 * Calculate sighash size.
 * @private
 * @param {Number} index
 * @param {Script} prev
 * @param {Number} type
 * @returns {Number}
 */

TX.prototype.hashSize = function hashSize(index, prev, type) {
  let size = 0;

  size += 4;

  if (type & hashType.ANYONECANPAY) {
    size += 1;
    size += 36;
    size += prev.getVarSize();
    size += 4;
  } else {
    size += encoding.sizeVarint(this.inputs.length);
    size += 41 * (this.inputs.length - 1);
    size += 36;
    size += prev.getVarSize();
    size += 4;
  }

  switch (type & 0x1f) {
    case hashType.NONE:
      size += 1;
      break;
    case hashType.SINGLE:
      size += encoding.sizeVarint(index + 1);
      size += 9 * index;
      size += this.outputs[index].getSize();
      break;
    default:
      size += encoding.sizeVarint(this.outputs.length);
      for (const output of this.outputs)
        size += output.getSize();
      break;
  }

  size += 8;

  return size;
};

/**
 * Witness sighashing -- O(n).
 * @private
 * @param {Number} index
 * @param {Script} prev
 * @param {Amount} value
 * @param {SighashType} type
 * @returns {Buffer}
 */

TX.prototype.signatureHashV1 = function signatureHashV1(index, prev, value, type) {
  const input = this.inputs[index];
  let prevouts = encoding.ZERO_HASH;
  let sequences = encoding.ZERO_HASH;
  let outputs = encoding.ZERO_HASH;

  if (!(type & hashType.ANYONECANPAY)) {
    if (this._hashPrevouts) {
      prevouts = this._hashPrevouts;
    } else {
      const bw = StaticWriter.pool(this.inputs.length * 36);

      for (const input of this.inputs)
        input.prevout.toWriter(bw);

      prevouts = digest.hash256(bw.render());

      if (!this.mutable)
        this._hashPrevouts = prevouts;
    }
  }

  if (!(type & hashType.ANYONECANPAY)
      && (type & 0x1f) !== hashType.SINGLE
      && (type & 0x1f) !== hashType.NONE) {
    if (this._hashSequence) {
      sequences = this._hashSequence;
    } else {
      const bw = StaticWriter.pool(this.inputs.length * 4);

      for (const input of this.inputs)
        bw.writeU32(input.sequence);

      sequences = digest.hash256(bw.render());

      if (!this.mutable)
        this._hashSequence = sequences;
    }
  }

  if ((type & 0x1f) !== hashType.SINGLE
      && (type & 0x1f) !== hashType.NONE) {
    if (this._hashOutputs) {
      outputs = this._hashOutputs;
    } else {
      let size = 0;

      for (const output of this.outputs)
        size += output.getSize();

      const bw = StaticWriter.pool(size);

      for (const output of this.outputs)
        output.toWriter(bw);

      outputs = digest.hash256(bw.render());

      if (!this.mutable)
        this._hashOutputs = outputs;
    }
  } else if ((type & 0x1f) === hashType.SINGLE) {
    if (index < this.outputs.length) {
      const output = this.outputs[index];
      outputs = digest.hash256(output.toRaw());
    }
  }

  const size = 156 + prev.getVarSize();
  const bw = StaticWriter.pool(size);

  bw.writeU32(this.version);
  bw.writeBytes(prevouts);
  bw.writeBytes(sequences);
  bw.writeHash(input.prevout.hash);
  bw.writeU32(input.prevout.index);
  bw.writeVarBytes(prev.toRaw());
  bw.writeI64(value);
  bw.writeU32(input.sequence);
  bw.writeBytes(outputs);
  bw.writeU32(this.locktime);
  bw.writeU32(type);

  return digest.hash256(bw.render());
};

/**
 * Verify signature.
 * @param {Number} index
 * @param {Script} prev
 * @param {Amount} value
 * @param {Buffer} sig
 * @param {Buffer} key
 * @param {Number} version
 * @returns {Boolean}
 */

TX.prototype.checksig = function checksig(index, prev, value, sig, key, version) {
  if (sig.length === 0)
    return false;

  const type = sig[sig.length - 1];
  const hash = this.signatureHash(index, prev, value, type, version);

  return secp256k1.verify(hash, sig.slice(0, -1), key);
};

/**
 * Create a signature suitable for inserting into scriptSigs/witnesses.
 * @param {Number} index - Index of input being signed.
 * @param {Script} prev - Previous output script or redeem script
 * (in the case of witnesspubkeyhash, this should be the generated
 * p2pkh script).
 * @param {Amount} value - Previous output value.
 * @param {Buffer} key
 * @param {SighashType} type
 * @param {Number} version - Sighash version (0=legacy, 1=segwit).
 * @returns {Buffer} Signature in DER format.
 */

TX.prototype.signature = function signature(index, prev, value, key, type, version) {
  if (type == null)
    type = hashType.ALL;

  if (version == null)
    version = 0;

  const hash = this.signatureHash(index, prev, value, type, version);
  const sig = secp256k1.sign(hash, key);
  const bw = new StaticWriter(sig.length + 1);

  bw.writeBytes(sig);
  bw.writeU8(type);

  return bw.render();
};

/**
 * Verify all transaction inputs.
 * @param {CoinView} view
 * @param {VerifyFlags?} [flags=STANDARD_VERIFY_FLAGS]
 * @throws {ScriptError} on invalid inputs
 */

TX.prototype.check = function check(view, flags) {
  if (this.inputs.length === 0)
    throw new ScriptError('UNKNOWN_ERROR', 'No inputs.');

  if (this.isCoinbase())
    return;

  for (let i = 0; i < this.inputs.length; i++) {
    const {prevout} = this.inputs[i];
    const coin = view.getOutput(prevout);

    if (!coin)
      throw new ScriptError('UNKNOWN_ERROR', 'No coin available.');

    this.checkInput(i, coin, flags);
  }
};

/**
 * Verify a transaction input.
 * @param {Number} index - Index of output being
 * verified.
 * @param {Coin|Output} coin - Previous output.
 * @param {VerifyFlags} [flags=STANDARD_VERIFY_FLAGS]
 * @throws {ScriptError} on invalid input
 */

TX.prototype.checkInput = function checkInput(index, coin, flags) {
  const input = this.inputs[index];

  assert(input, 'Input does not exist.');
  assert(coin, 'No coin passed.');

  Script.verify(
    input.script,
    input.witness,
    coin.script,
    this,
    index,
    coin.value,
    flags
  );
};

/**
 * Verify the transaction inputs on the worker pool
 * (if workers are enabled).
 * @param {CoinView} view
 * @param {VerifyFlags?} [flags=STANDARD_VERIFY_FLAGS]
 * @param {WorkerPool?} pool
 * @returns {Promise}
 */

TX.prototype.checkAsync = async function checkAsync(view, flags, pool) {
  if (this.inputs.length === 0)
    throw new ScriptError('UNKNOWN_ERROR', 'No inputs.');

  if (this.isCoinbase())
    return;

  if (!pool) {
    this.check(view, flags);
    return;
  }

  await pool.check(this, view, flags);
};

/**
 * Verify a transaction input asynchronously.
 * @param {Number} index - Index of output being
 * verified.
 * @param {Coin|Output} coin - Previous output.
 * @param {VerifyFlags} [flags=STANDARD_VERIFY_FLAGS]
 * @param {WorkerPool?} pool
 * @returns {Promise}
 */

TX.prototype.checkInputAsync = async function checkInputAsync(index, coin, flags, pool) {
  const input = this.inputs[index];

  assert(input, 'Input does not exist.');
  assert(coin, 'No coin passed.');

  if (!pool) {
    this.checkInput(index, coin, flags);
    return;
  }

  await pool.checkInput(this, index, coin, flags);
};

/**
 * Verify all transaction inputs.
 * @param {CoinView} view
 * @param {VerifyFlags?} [flags=STANDARD_VERIFY_FLAGS]
 * @returns {Boolean} Whether the inputs are valid.
 */

TX.prototype.verify = function verify(view, flags) {
  try {
    this.check(view, flags);
  } catch (e) {
    if (e.type === 'ScriptError')
      return false;
    throw e;
  }
  return true;
};

/**
 * Verify a transaction input.
 * @param {Number} index - Index of output being
 * verified.
 * @param {Coin|Output} coin - Previous output.
 * @param {VerifyFlags} [flags=STANDARD_VERIFY_FLAGS]
 * @returns {Boolean} Whether the input is valid.
 */

TX.prototype.verifyInput = function verifyInput(index, coin, flags) {
  try {
    this.checkInput(index, coin, flags);
  } catch (e) {
    if (e.type === 'ScriptError')
      return false;
    throw e;
  }
  return true;
};

/**
 * Verify the transaction inputs on the worker pool
 * (if workers are enabled).
 * @param {CoinView} view
 * @param {VerifyFlags?} [flags=STANDARD_VERIFY_FLAGS]
 * @param {WorkerPool?} pool
 * @returns {Promise}
 */

TX.prototype.verifyAsync = async function verifyAsync(view, flags, pool) {
  try {
    await this.checkAsync(view, flags, pool);
  } catch (e) {
    if (e.type === 'ScriptError')
      return false;
    throw e;
  }
  return true;
};

/**
 * Verify a transaction input asynchronously.
 * @param {Number} index - Index of output being
 * verified.
 * @param {Coin|Output} coin - Previous output.
 * @param {VerifyFlags} [flags=STANDARD_VERIFY_FLAGS]
 * @param {WorkerPool?} pool
 * @returns {Promise}
 */

TX.prototype.verifyInputAsync = async function verifyInputAsync(index, coin, flags, pool) {
  try {
    await this.checkInput(index, coin, flags, pool);
  } catch (e) {
    if (e.type === 'ScriptError')
      return false;
    throw e;
  }
  return true;
};

/**
 * Test whether the transaction is a coinbase
 * by examining the inputs.
 * @returns {Boolean}
 */

TX.prototype.isCoinbase = function isCoinbase() {
  return this.inputs.length === 1 && this.inputs[0].prevout.isNull();
};

/**
 * Test whether the transaction is replaceable.
 * @returns {Boolean}
 */

TX.prototype.isRBF = function isRBF() {
  // Core doesn't do this, but it should:
  if (this.version === 2)
    return false;

  for (const input of this.inputs) {
    if (input.isRBF())
      return true;
  }

  return false;
};

/**
 * Calculate the fee for the transaction.
 * @param {CoinView} view
 * @returns {Amount} fee (zero if not all coins are available).
 */

TX.prototype.getFee = function getFee(view) {
  if (!this.hasCoins(view))
    return 0;

  return this.getInputValue(view) - this.getOutputValue();
};

/**
 * Calculate the total input value.
 * @param {CoinView} view
 * @returns {Amount} value
 */

TX.prototype.getInputValue = function getInputValue(view) {
  let total = 0;

  for (const {prevout} of this.inputs) {
    const coin = view.getOutput(prevout);

    if (!coin)
      return 0;

    total += coin.value;
  }

  return total;
};

/**
 * Calculate the total output value.
 * @returns {Amount} value
 */

TX.prototype.getOutputValue = function getOutputValue() {
  let total = 0;

  for (const output of this.outputs)
    total += output.value;

  return total;
};

/**
 * Get all input addresses.
 * @private
 * @param {CoinView} view
 * @returns {Array} [addrs, table]
 */

TX.prototype._getInputAddresses = function _getInputAddresses(view) {
  const table = Object.create(null);
  const addrs = [];

  if (this.isCoinbase())
    return [addrs, table];

  for (const input of this.inputs) {
    const coin = view ? view.getOutputFor(input) : null;
    const addr = input.getAddress(coin);

    if (!addr)
      continue;

    const hash = addr.getHash('hex');

    if (!table[hash]) {
      table[hash] = true;
      addrs.push(addr);
    }
  }

  return [addrs, table];
};

/**
 * Get all output addresses.
 * @private
 * @returns {Array} [addrs, table]
 */

TX.prototype._getOutputAddresses = function _getOutputAddresses() {
  const table = Object.create(null);
  const addrs = [];

  for (const output of this.outputs) {
    const addr = output.getAddress();

    if (!addr)
      continue;

    const hash = addr.getHash('hex');

    if (!table[hash]) {
      table[hash] = true;
      addrs.push(addr);
    }
  }

  return [addrs, table];
};

/**
 * Get all addresses.
 * @private
 * @param {CoinView} view
 * @returns {Array} [addrs, table]
 */

TX.prototype._getAddresses = function _getAddresses(view) {
  const [addrs, table] = this._getInputAddresses(view);
  const output = this.getOutputAddresses();

  for (const addr of output) {
    const hash = addr.getHash('hex');

    if (!table[hash]) {
      table[hash] = true;
      addrs.push(addr);
    }
  }

  return [addrs, table];
};

/**
 * Get all input addresses.
 * @param {CoinView|null} view
 * @returns {Address[]} addresses
 */

TX.prototype.getInputAddresses = function getInputAddresses(view) {
  const [addrs] = this._getInputAddresses(view);
  return addrs;
};

/**
 * Get all output addresses.
 * @returns {Address[]} addresses
 */

TX.prototype.getOutputAddresses = function getOutputAddresses() {
  const [addrs] = this._getOutputAddresses();
  return addrs;
};

/**
 * Get all addresses.
 * @param {CoinView|null} view
 * @returns {Address[]} addresses
 */

TX.prototype.getAddresses = function getAddresses(view) {
  const [addrs] = this._getAddresses(view);
  return addrs;
};

/**
 * Get all input address hashes.
 * @param {CoinView|null} view
 * @returns {Hash[]} hashes
 */

TX.prototype.getInputHashes = function getInputHashes(view, enc) {
  if (enc === 'hex') {
    const [, table] = this._getInputAddresses(view);
    return Object.keys(table);
  }

  const addrs = this.getInputAddresses(view);
  const hashes = [];

  for (const addr of addrs)
    hashes.push(addr.getHash());

  return hashes;
};

/**
 * Get all output address hashes.
 * @returns {Hash[]} hashes
 */

TX.prototype.getOutputHashes = function getOutputHashes(enc) {
  if (enc === 'hex') {
    const [, table] = this._getOutputAddresses();
    return Object.keys(table);
  }

  const addrs = this.getOutputAddresses();
  const hashes = [];

  for (const addr of addrs)
    hashes.push(addr.getHash());

  return hashes;
};

/**
 * Get all address hashes.
 * @param {CoinView|null} view
 * @returns {Hash[]} hashes
 */

TX.prototype.getHashes = function getHashes(view, enc) {
  if (enc === 'hex') {
    const [, table] = this._getAddresses(view);
    return Object.keys(table);
  }

  const addrs = this.getAddresses(view);
  const hashes = [];

  for (const addr of addrs)
    hashes.push(addr.getHash());

  return hashes;
};

/**
 * Test whether the transaction has
 * all coins available.
 * @param {CoinView} view
 * @returns {Boolean}
 */

TX.prototype.hasCoins = function hasCoins(view) {
  if (this.inputs.length === 0)
    return false;

  for (const {prevout} of this.inputs) {
    if (!view.hasEntry(prevout))
      return false;
  }

  return true;
};

/**
 * Check finality of transaction by examining
 * nLocktime and nSequence values.
 * @example
 * tx.isFinal(chain.height + 1, network.now());
 * @param {Number} height - Height at which to test. This
 * is usually the chain height, or the chain height + 1
 * when the transaction entered the mempool.
 * @param {Number} time - Time at which to test. This is
 * usually the chain tip's parent's median time, or the
 * time at which the transaction entered the mempool. If
 * MEDIAN_TIME_PAST is enabled this will be the median
 * time of the chain tip's previous entry's median time.
 * @returns {Boolean}
 */

TX.prototype.isFinal = function isFinal(height, time) {
  const THRESHOLD = consensus.LOCKTIME_THRESHOLD;

  if (this.locktime === 0)
    return true;

  if (this.locktime < (this.locktime < THRESHOLD ? height : time))
    return true;

  for (const input of this.inputs) {
    if (input.sequence !== 0xffffffff)
      return false;
  }

  return true;
};

/**
 * Verify the absolute locktime of a transaction.
 * Called by OP_CHECKLOCKTIMEVERIFY.
 * @param {Number} index - Index of input being verified.
 * @param {Number} predicate - Locktime to verify against.
 * @returns {Boolean}
 */

TX.prototype.verifyLocktime = function verifyLocktime(index, predicate) {
  const THRESHOLD = consensus.LOCKTIME_THRESHOLD;
  const input = this.inputs[index];

  assert(input, 'Input does not exist.');
  assert(predicate >= 0, 'Locktime must be non-negative.');

  // Locktimes must be of the same type (blocks or seconds).
  if ((this.locktime < THRESHOLD) !== (predicate < THRESHOLD))
    return false;

  if (predicate > this.locktime)
    return false;

  if (input.sequence === 0xffffffff)
    return false;

  return true;
};

/**
 * Verify the relative locktime of an input.
 * Called by OP_CHECKSEQUENCEVERIFY.
 * @param {Number} index - Index of input being verified.
 * @param {Number} predicate - Relative locktime to verify against.
 * @returns {Boolean}
 */

TX.prototype.verifySequence = function verifySequence(index, predicate) {
  const DISABLE_FLAG = consensus.SEQUENCE_DISABLE_FLAG;
  const TYPE_FLAG = consensus.SEQUENCE_TYPE_FLAG;
  const MASK = consensus.SEQUENCE_MASK;
  const input = this.inputs[index];

  assert(input, 'Input does not exist.');
  assert(predicate >= 0, 'Locktime must be non-negative.');

  // For future softfork capability.
  if (predicate & DISABLE_FLAG)
    return true;

  // Version must be >=2.
  if (this.version < 2)
    return false;

  // Cannot use the disable flag without
  // the predicate also having the disable
  // flag (for future softfork capability).
  if (input.sequence & DISABLE_FLAG)
    return false;

  // Locktimes must be of the same type (blocks or seconds).
  if ((input.sequence & TYPE_FLAG) !== (predicate & TYPE_FLAG))
    return false;

  if ((predicate & MASK) > (input.sequence & MASK))
    return false;

  return true;
};

/**
 * Calculate legacy (inaccurate) sigop count.
 * @returns {Number} sigop count
 */

TX.prototype.getLegacySigops = function getLegacySigops() {
  if (this._sigops !== -1)
    return this._sigops;

  let total = 0;

  for (const input of this.inputs)
    total += input.script.getSigops(false);

  for (const output of this.outputs)
    total += output.script.getSigops(false);

  if (!this.mutable)
    this._sigops = total;

  return total;
};

/**
 * Calculate accurate sigop count, taking into account redeem scripts.
 * @param {CoinView} view
 * @returns {Number} sigop count
 */

TX.prototype.getScripthashSigops = function getScripthashSigops(view) {
  if (this.isCoinbase())
    return 0;

  let total = 0;

  for (const input of this.inputs) {
    const coin = view.getOutputFor(input);

    if (!coin)
      continue;

    if (!coin.script.isScripthash())
      continue;

    total += coin.script.getScripthashSigops(input.script);
  }

  return total;
};

/**
 * Calculate accurate sigop count, taking into account redeem scripts.
 * @param {CoinView} view
 * @returns {Number} sigop count
 */

TX.prototype.getWitnessSigops = function getWitnessSigops(view) {
  if (this.isCoinbase())
    return 0;

  let total = 0;

  for (const input of this.inputs) {
    const coin = view.getOutputFor(input);

    if (!coin)
      continue;

    total += coin.script.getWitnessSigops(input.script, input.witness);
  }

  return total;
};

/**
 * Calculate sigops cost, taking into account witness programs.
 * @param {CoinView} view
 * @param {VerifyFlags?} flags
 * @returns {Number} sigop weight
 */

TX.prototype.getSigopsCost = function getSigopsCost(view, flags) {
  if (flags == null)
    flags = Script.flags.STANDARD_VERIFY_FLAGS;

  const scale = consensus.WITNESS_SCALE_FACTOR;

  let cost = this.getLegacySigops() * scale;

  if (flags & Script.flags.VERIFY_P2SH)
    cost += this.getScripthashSigops(view) * scale;

  if (flags & Script.flags.VERIFY_WITNESS)
    cost += this.getWitnessSigops(view);

  return cost;
};

/**
 * Calculate virtual sigop count.
 * @param {CoinView} view
 * @param {VerifyFlags?} flags
 * @returns {Number} sigop count
 */

TX.prototype.getSigops = function getSigops(view, flags) {
  const scale = consensus.WITNESS_SCALE_FACTOR;
  return (this.getSigopsCost(view, flags) + scale - 1) / scale | 0;
};

/**
 * Non-contextual sanity checks for the transaction.
 * Will mostly verify coin and output values.
 * @see CheckTransaction()
 * @returns {Array} [result, reason, score]
 */

TX.prototype.isSane = function isSane(height) {
  const [valid] = this.checkSanity(height); // check this 
  return valid;
};

/**
 * Non-contextual sanity checks for the transaction.
 * Will mostly verify coin and output values.
 * @see CheckTransaction()
 * @returns {Array} [valid, reason, score]
 */

TX.prototype.checkSanity = function checkSanity(height) {
  assert(typeof height === 'number');
  if (this.inputs.length === 0)
    return [false, 'bad-txns-vin-empty', 100];

  if (this.outputs.length === 0)
    return [false, 'bad-txns-vout-empty', 100];

  if (this.getBaseSize() > consensus.MAX_BLOCK_SIZE)
    return [false, 'bad-txns-oversize', 100];

  let total = 0;

  for (const output of this.outputs) {
    if (output.value < 0)
      return [false, 'bad-txns-vout-negative', 100];

    if (output.value > consensus.getMaxMoney(height))
      return [false, 'bad-txns-vout-toolarge', 100];

    if (!util.isSafeAddition(total, output.value)) // ctl
      return [false, 'bad-txns-txouttotal-toolarge', 100]; // ctl

    total += output.value;

    if (total < 0 || total > consensus.getMaxMoney(height))
      return [false, 'bad-txns-txouttotal-toolarge', 100];
  }

  const prevout = new Set();

  for (const input of this.inputs) {
    const key = input.prevout.toKey();

    if (prevout.has(key))
      return [false, 'bad-txns-inputs-duplicate', 100];

    prevout.add(key);
  }

  if (this.isCoinbase()) {
    const size = this.inputs[0].script.getSize();
    if (size < 2 || size > 100)
      return [false, 'bad-cb-length', 100];
  } else {
    for (const input of this.inputs) {
      if (input.prevout.isNull())
        return [false, 'bad-txns-prevout-null', 10];
    }
  }

  return [true, 'valid', 0];
};

/**
 * Non-contextual checks to determine whether the
 * transaction has all standard output script
 * types and standard input script size with only
 * pushdatas in the code.
 * Will mostly verify coin and output values.
 * @see IsStandardTx()
 * @returns {Array} [valid, reason, score]
 */

TX.prototype.isStandard = function isStandard() {
  const [valid] = this.checkStandard();
  return valid;
};

/**
 * Non-contextual checks to determine whether the
 * transaction has all standard output script
 * types and standard input script size with only
 * pushdatas in the code.
 * Will mostly verify coin and output values.
 * @see IsStandardTx()
 * @returns {Array} [valid, reason, score]
 */

TX.prototype.checkStandard = function checkStandard() {
  if (this.version < 1 || this.version > policy.MAX_TX_VERSION)
    return [false, 'version', 0];

  if (this.getWeight() >= policy.MAX_TX_WEIGHT)
    return [false, 'tx-size', 0];

  for (const input of this.inputs) {
    if (input.script.getSize() > 1650)
      return [false, 'scriptsig-size', 0];

    if (!input.script.isPushOnly())
      return [false, 'scriptsig-not-pushonly', 0];
  }

  let nulldata = 0;

  for (const output of this.outputs) {
    if (!output.script.isStandard())
      return [false, 'scriptpubkey', 0];

    if (output.script.isNulldata()) {
      nulldata++;
      continue;
    }

    if (output.script.isMultisig() && !policy.BARE_MULTISIG)
      return [false, 'bare-multisig', 0];

    if (output.isDust(policy.MIN_RELAY))
      return [false, 'dust', 0];
  }

  if (nulldata > 1)
    return [false, 'multi-op-return', 0];

  return [true, 'valid', 0];
};

/**
 * Perform contextual checks to verify coin and input
 * script standardness (including the redeem script).
 * @see AreInputsStandard()
 * @param {CoinView} view
 * @param {VerifyFlags?} flags
 * @returns {Boolean}
 */

TX.prototype.hasStandardInputs = function hasStandardInputs(view) {
  if (this.isCoinbase())
    return true;

  for (const input of this.inputs) {
    const coin = view.getOutputFor(input);

    if (!coin)
      return false;

    if (coin.script.isPubkeyhash())
      continue;

    if (coin.script.isScripthash()) {
      const redeem = input.script.getRedeem();

      if (!redeem)
        return false;

      if (redeem.getSigops(true) > policy.MAX_P2SH_SIGOPS)
        return false;

      continue;
    }

    if (coin.script.isUnknown())
      return false;
  }

  return true;
};

/**
 * Perform contextual checks to verify coin and witness standardness.
 * @see IsBadWitness()
 * @param {CoinView} view
 * @returns {Boolean}
 */

TX.prototype.hasStandardWitness = function hasStandardWitness(view) {
  if (this.isCoinbase())
    return true;

  for (const input of this.inputs) {
    const witness = input.witness;
    const coin = view.getOutputFor(input);

    if (!coin)
      continue;

    if (witness.items.length === 0)
      continue;

    let prev = coin.script;

    if (prev.isScripthash()) {
      prev = input.script.getRedeem();
      if (!prev)
        return false;
    }

    if (!prev.isProgram())
      return false;

    if (prev.isWitnessPubkeyhash()) {
      if (witness.items.length !== 2)
        return false;

      if (witness.items[0].length > 73)
        return false;

      if (witness.items[1].length > 65)
        return false;

      continue;
    }

    if (prev.isWitnessScripthash()) {
      if (witness.items.length - 1 > policy.MAX_P2WSH_STACK)
        return false;

      for (let i = 0; i < witness.items.length - 1; i++) {
        const item = witness.items[i];
        if (item.length > policy.MAX_P2WSH_PUSH)
          return false;
      }

      const raw = witness.items[witness.items.length - 1];

      if (raw.length > policy.MAX_P2WSH_SIZE)
        return false;

      const redeem = Script.fromRaw(raw);

      if (redeem.isPubkey()) {
        if (witness.items.length - 1 !== 1)
          return false;

        if (witness.items[0].length > 73)
          return false;

        continue;
      }

      if (redeem.isPubkeyhash()) {
        if (input.witness.items.length - 1 !== 2)
          return false;

        if (witness.items[0].length > 73)
          return false;

        if (witness.items[1].length > 65)
          return false;

        continue;
      }

      const [m] = redeem.getMultisig();

      if (m !== -1) {
        if (witness.items.length - 1 !== m + 1)
          return false;

        if (witness.items[0].length !== 0)
          return false;

        for (let i = 1; i < witness.items.length - 1; i++) {
          const item = witness.items[i];
          if (item.length > 73)
            return false;
        }
      }

      continue;
    }

    if (witness.items.length > policy.MAX_P2WSH_STACK)
      return false;

    for (const item of witness.items) {
      if (item.length > policy.MAX_P2WSH_PUSH)
        return false;
    }
  }

  return true;
};

/**
 * Perform contextual checks to verify input, output,
 * and fee values, as well as coinbase spend maturity
 * (coinbases can only be spent 100 blocks or more
 * after they're created). Note that this function is
 * consensus critical.
 * @param {CoinView} view
 * @param {Number} height - Height at which the
 * transaction is being spent. In the mempool this is
 * the chain height plus one at the time it entered the pool.
 * @returns {Boolean}
 */

TX.prototype.verifyInputs = function verifyInputs(view, height) {
  const [fee] = this.checkInputs(view, height);
  return fee !== -1;
};

/**
 * Perform contextual checks to verify input, output,
 * and fee values, as well as coinbase spend maturity
 * (coinbases can only be spent 100 blocks or more
 * after they're created). Note that this function is
 * consensus critical.
 * @param {CoinView} view
 * @param {Number} height - Height at which the
 * transaction is being spent. In the mempool this is
 * the chain height plus one at the time it entered the pool.
 * @returns {Array} [fee, reason, score]
 */

TX.prototype.checkInputs = function checkInputs(view, height) {
  assert(typeof height === 'number');

  let total = 0;

  for (const {prevout} of this.inputs) {
    const entry = view.getEntry(prevout);

    if (!entry)
      return [-1, 'bad-txns-inputs-missingorspent', 0];

    if (entry.coinbase) {
      if (height - entry.height < consensus.COINBASE_MATURITY)
        return [-1, 'bad-txns-premature-spend-of-coinbase', 0];
    }

    const coin = view.getOutput(prevout);
    assert(coin);

    if (coin.value < 0 || coin.value > consensus.getMaxMoney(height))
      return [-1, 'bad-txns-inputvalues-outofrange', 100];

    if (!util.isSafeAddition(total, coin.value)) // ctl
      return [-1, 'bad-txns-inputvalues-outofrange', 100]; // ctl

    total += coin.value;

    if (total < 0 || total > consensus.getMaxMoney(height))
      return [-1, 'bad-txns-inputvalues-outofrange', 100];
  }

  // Overflows already checked in `isSane()`.
  const value = this.getOutputValue();

  if (total < value)
    return [-1, 'bad-txns-in-belowout', 100];

  const fee = total - value;

  if (fee < 0)
    return [-1, 'bad-txns-fee-negative', 100];

  if (fee > consensus.getMaxMoney(height))
    return [-1, 'bad-txns-fee-outofrange', 100];

  return [fee, 'valid', 0];
};

/**
 * Calculate the modified size of the transaction. This
 * is used in the mempool for calculating priority.
 * @param {Number?} size - The size to modify. If not present,
 * virtual size will be used.
 * @returns {Number} Modified size.
 */

TX.prototype.getModifiedSize = function getModifiedSize(size) {
  if (size == null)
    size = this.getVirtualSize();

  for (const input of this.inputs) {
    const offset = 41 + Math.min(110, input.script.getSize());
    if (size > offset)
      size -= offset;
  }

  return size;
};

/**
 * Calculate the transaction priority.
 * @param {CoinView} view
 * @param {Number} height
 * @param {Number?} size - Size to calculate priority
 * based on. If not present, virtual size will be used.
 * @returns {Number}
 */

TX.prototype.getPriority = function getPriority(view, height, size) {
  assert(typeof height === 'number', 'Must pass in height.');

  if (this.isCoinbase())
    return 0;

  if (size == null)
    size = this.getVirtualSize();

  let sum = 0;

  for (const {prevout} of this.inputs) {
    const coin = view.getOutput(prevout);

    if (!coin)
      continue;

    const coinHeight = view.getHeight(prevout);

    if (coinHeight === -1)
      continue;

    if (coinHeight <= height) {
      const age = height - coinHeight;
      sum += coin.value * age;
    }
  }

  return Math.floor(sum / size);
};

/**
 * Calculate the transaction's on-chain value.
 * @param {CoinView} view
 * @returns {Number}
 */

TX.prototype.getChainValue = function getChainValue(view) {
  if (this.isCoinbase())
    return 0;

  let value = 0;

  for (const {prevout} of this.inputs) {
    const coin = view.getOutput(prevout);

    if (!coin)
      continue;

    const height = view.getHeight(prevout);

    if (height === -1)
      continue;

    value += coin.value;
  }

  return value;
};

/**
 * Determine whether the transaction is above the
 * free threshold in priority. A transaction which
 * passed this test is most likely relayable
 * without a fee.
 * @param {CoinView} view
 * @param {Number?} height - If not present, tx
 * height or network height will be used.
 * @param {Number?} size - If not present, modified
 * size will be calculated and used.
 * @returns {Boolean}
 */

TX.prototype.isFree = function isFree(view, height, size) {
  const priority = this.getPriority(view, height, size);
  return priority > policy.FREE_THRESHOLD;
};

/**
 * Calculate minimum fee in order for the transaction
 * to be relayable (not the constant min relay fee).
 * @param {Number?} size - If not present, max size
 * estimation will be calculated and used.
 * @param {Rate?} rate - Rate of wmcoin per kB.
 * @returns {Amount} fee
 */

TX.prototype.getMinFee = function getMinFee(size, rate) {
  if (size == null)
    size = this.getVirtualSize();

  return policy.getMinFee(size, rate);
};

/**
 * Calculate the minimum fee in order for the transaction
 * to be relayable, but _round to the nearest kilobyte
 * when taking into account size.
 * @param {Number?} size - If not present, max size
 * estimation will be calculated and used.
 * @param {Rate?} rate - Rate of wmcoin per kB.
 * @returns {Amount} fee
 */

TX.prototype.getRoundFee = function getRoundFee(size, rate) {
  if (size == null)
    size = this.getVirtualSize();

  return policy.getRoundFee(size, rate);
};

/**
 * Calculate the transaction's rate based on size
 * and fees. Size will be calculated if not present.
 * @param {CoinView} view
 * @param {Number?} size
 * @returns {Rate}
 */

TX.prototype.getRate = function getRate(view, size) {
  const fee = this.getFee(view);

  if (fee < 0)
    return 0;

  if (size == null)
    size = this.getVirtualSize();

  return policy.getRate(size, fee);
};

/**
 * Get all unique outpoint hashes.
 * @returns {Hash[]} Outpoint hashes.
 */

TX.prototype.getPrevout = function getPrevout() {
  if (this.isCoinbase())
    return [];

  const prevout = Object.create(null);

  for (const input of this.inputs)
    prevout[input.prevout.hash] = true;

  return Object.keys(prevout);
};

/**
 * Test a transaction against a bloom filter using
 * the BIP37 matching algorithm. Note that this may
 * update the filter depending on what the `update`
 * value is.
 * @see "Filter matching algorithm":
 * @see https://github.com/bitcoin/bips/blob/master/bip-0037.mediawiki
 * @param {Bloom} filter
 * @returns {Boolean} True if the transaction matched.
 */

TX.prototype.isWatched = function isWatched(filter) {
  let found = false;

  // 1. Test the tx hash
  if (filter.test(this.hash()))
    found = true;

  // 2. Test data elements in output scripts
  //    (may need to update filter on match)
  for (let i = 0; i < this.outputs.length; i++) {
    const output = this.outputs[i];
    // Test the output script
    if (output.script.test(filter)) {
      if (filter.update === Bloom.flags.ALL) {
        const prevout = Outpoint.fromTX(this, i);
        filter.add(prevout.toRaw());
      } else if (filter.update === Bloom.flags.PUBKEY_ONLY) {
        if (output.script.isPubkey() || output.script.isMultisig()) {
          const prevout = Outpoint.fromTX(this, i);
          filter.add(prevout.toRaw());
        }
      }
      found = true;
    }
  }

  if (found)
    return found;

  // 3. Test prev_out structure
  // 4. Test data elements in input scripts
  for (const input of this.inputs) {
    const prevout = input.prevout;

    // Test the COutPoint structure
    if (filter.test(prevout.toRaw()))
      return true;

    // Test the input script
    if (input.script.test(filter))
      return true;
  }

  // 5. No match
  return false;
};

/**
 * Get little-endian tx hash.
 * @returns {Hash}
 */

TX.prototype.rhash = function rhash() {
  return util.revHex(this.hash('hex'));
};

/**
 * Get little-endian wtx hash.
 * @returns {Hash}
 */

TX.prototype.rwhash = function rwhash() {
  return util.revHex(this.witnessHash('hex'));
};

/**
 * Get little-endian tx hash.
 * @returns {Hash}
 */

TX.prototype.txid = function txid() {
  return this.rhash();
};

/**
 * Get little-endian wtx hash.
 * @returns {Hash}
 */

TX.prototype.wtxid = function wtxid() {
  return this.rwhash();
};

/**
 * Convert the tx to an inv item.
 * @returns {InvItem}
 */

TX.prototype.toInv = function toInv() {
  return new InvItem(InvItem.types.TX, this.hash('hex'));
};

/**
 * Inspect the transaction and return a more
 * user-friendly representation of the data.
 * @returns {Object}
 */

TX.prototype.inspect = function inspect() {
  return this.format();
};

/**
 * Inspect the transaction and return a more
 * user-friendly representation of the data.
 * @param {CoinView} view
 * @param {ChainEntry} entry
 * @param {Number} index
 * @returns {Object}
 */

TX.prototype.format = function format(view, entry, index) {
  let rate = 0;
  let fee = 0;
  let height = -1;
  let block = null;
  let time = 0;
  let date = null;

  if (view) {
    fee = this.getFee(view);
    rate = this.getRate(view);

    // Rate can exceed 53 bits in testing.
    if (!Number.isSafeInteger(rate))
      rate = 0;
  }

  if (entry) {
    height = entry.height;
    block = util.revHex(entry.hash);
    time = entry.time;
    date = util.date(time);
  }

  if (index == null)
    index = -1;

  return {
    hash: this.txid(),
    witnessHash: this.wtxid(),
    size: this.getSize(),
    virtualSize: this.getVirtualSize(),
    value: Amount.wmcc(this.getOutputValue()),
    fee: Amount.wmcc(fee),
    rate: Amount.wmcc(rate),
    minFee: Amount.wmcc(this.getMinFee()),
    height: height,
    block: block,
    time: time,
    date: date,
    index: index,
    version: this.version,
    inputs: this.inputs.map((input) => {
      const coin = view ? view.getOutputFor(input) : null;
      return input.format(coin);
    }),
    outputs: this.outputs,
    locktime: this.locktime
  };
};

/**
 * Convert the transaction to an object suitable
 * for JSON serialization.
 * @returns {Object}
 */

TX.prototype.toJSON = function toJSON() {
  return this.getJSON();
};

/**
 * Convert the transaction to an object suitable
 * for JSON serialization. Note that the hashes
 * will be reversed to abide by wmccd's legacy
 * of little-endian uint256s.
 * @param {Network} network
 * @param {CoinView} view
 * @param {ChainEntry} entry
 * @param {Number} index
 * @returns {Object}
 */

TX.prototype.getJSON = function getJSON(network, view, entry, index) {
  let rate, fee, height, block, time, date;

  if (view) {
    fee = this.getFee(view);
    rate = this.getRate(view);

    // Rate can exceed 53 bits in testing.
    if (!Number.isSafeInteger(rate))
      rate = 0;
  }

  if (entry) {
    height = entry.height;
    block = util.revHex(entry.hash);
    time = entry.time;
    date = util.date(time);
  }

  network = Network.get(network);

  return {
    hash: this.txid(),
    witnessHash: this.wtxid(),
    fee: fee,
    rate: rate,
    mtime: util.now(),
    height: height,
    block: block,
    time: time,
    date: date,
    index: index,
    version: this.version,
    inputs: this.inputs.map((input) => {
      const coin = view ? view.getCoinFor(input) : null;
      return input.getJSON(network, coin);
    }),
    outputs: this.outputs.map((output) => {
      return output.getJSON(network);
    }),
    locktime: this.locktime,
    hex: this.toRaw().toString('hex')
  };
};

/**
 * Inject properties from a json object.
 * @private
 * @param {Object} json
 */

TX.prototype.fromJSON = function fromJSON(json) {
  assert(json, 'TX data is required.');
  assert(util.isU32(json.version), 'Version must be a uint32.');
  assert(Array.isArray(json.inputs), 'Inputs must be an array.');
  assert(Array.isArray(json.outputs), 'Outputs must be an array.');
  assert(util.isU32(json.locktime), 'Locktime must be a uint32.');

  this.version = json.version;

  for (const input of json.inputs)
    this.inputs.push(Input.fromJSON(input));

  for (const output of json.outputs)
    this.outputs.push(Output.fromJSON(output));

  this.locktime = json.locktime;

  return this;
};

/**
 * Instantiate a transaction from a
 * jsonified transaction object.
 * @param {Object} json - The jsonified transaction object.
 * @returns {TX}
 */

TX.fromJSON = function fromJSON(json) {
  return new TX().fromJSON(json);
};

/**
 * Instantiate a transaction from a serialized Buffer.
 * @param {Buffer} data
 * @param {String?} enc - Encoding, can be `'hex'` or null.
 * @returns {TX}
 */

TX.fromRaw = function fromRaw(data, enc) {
  if (typeof data === 'string')
    data = Buffer.from(data, enc);
  return new TX().fromRaw(data);
};

/**
 * Instantiate a transaction from a buffer reader.
 * @param {BufferReader} br
 * @returns {TX}
 */

TX.fromReader = function fromReader(br) {
  return new TX().fromReader(br);
};

/**
 * Inject properties from serialized data.
 * @private
 * @param {Buffer} data
 */

TX.prototype.fromRaw = function fromRaw(data) {
  return this.fromReader(new BufferReader(data));
};

/**
 * Inject properties from buffer reader.
 * @private
 * @param {BufferReader} br
 */

TX.prototype.fromReader = function fromReader(br) {
  if (hasWitnessBytes(br))
    return this.fromWitnessReader(br);

  br.start();

  this.version = br.readU32();

  const inCount = br.readVarint();

  for (let i = 0; i < inCount; i++)
    this.inputs.push(Input.fromReader(br));

  const outCount = br.readVarint();

  for (let i = 0; i < outCount; i++)
    this.outputs.push(Output.fromReader(br));

  this.locktime = br.readU32();

  if (!this.mutable) {
    this._raw = br.endData();
    this._size = this._raw.length;
    this._witness = 0;
  } else {
    br.end();
  }

  return this;
};

/**
 * Inject properties from serialized
 * buffer reader (witness serialization).
 * @private
 * @param {BufferReader} br
 */

TX.prototype.fromWitnessReader = function fromWitnessReader(br) {
  br.start();

  this.version = br.readU32();

  assert(br.readU8() === 0, 'Non-zero marker.');

  let flags = br.readU8();

  assert(flags !== 0, 'Flags byte is zero.');

  const inCount = br.readVarint();

  for (let i = 0; i < inCount; i++)
    this.inputs.push(Input.fromReader(br));

  const outCount = br.readVarint();

  for (let i = 0; i < outCount; i++)
    this.outputs.push(Output.fromReader(br));

  let witness = 0;
  let hasWitness = false;

  if (flags & 1) {
    flags ^= 1;

    witness = br.offset;

    for (const input of this.inputs) {
      input.witness.fromReader(br);
      if (input.witness.items.length > 0)
        hasWitness = true;
    }

    witness = (br.offset - witness) + 2;
  }

  if (flags !== 0)
    throw new Error('Unknown witness flag.');

  // We'll never be able to reserialize
  // this to get the regular txid, and
  // there's no way it's valid anyway.
  if (this.inputs.length === 0 && this.outputs.length !== 0)
    throw new Error('Zero input witness tx.');

  this.locktime = br.readU32();

  if (!this.mutable && hasWitness) {
    this._raw = br.endData();
    this._size = this._raw.length;
    this._witness = witness;
  } else {
    br.end();
  }

  return this;
};

/**
 * Serialize transaction without witness.
 * @private
 * @returns {RawTX}
 */

TX.prototype.frameNormal = function frameNormal() {
  const raw = this.getNormalSizes();
  const bw = new StaticWriter(raw.size);
  this.writeNormal(bw);
  raw.data = bw.render();
  return raw;
};

/**
 * Serialize transaction with witness. Calculates the witness
 * size as it is framing (exposed on return value as `witness`).
 * @private
 * @returns {RawTX}
 */

TX.prototype.frameWitness = function frameWitness() {
  const raw = this.getWitnessSizes();
  const bw = new StaticWriter(raw.size);
  this.writeWitness(bw);
  raw.data = bw.render();
  return raw;
};

/**
 * Serialize transaction without witness.
 * @private
 * @param {BufferWriter} bw
 * @returns {RawTX}
 */

TX.prototype.writeNormal = function writeNormal(bw) {
  if (this.inputs.length === 0 && this.outputs.length !== 0)
    throw new Error('Cannot serialize zero-input tx.');

  bw.writeU32(this.version);

  bw.writeVarint(this.inputs.length);

  for (const input of this.inputs)
    input.toWriter(bw);

  bw.writeVarint(this.outputs.length);

  for (const output of this.outputs)
    output.toWriter(bw);

  bw.writeU32(this.locktime);

  return bw;
};

/**
 * Serialize transaction with witness. Calculates the witness
 * size as it is framing (exposed on return value as `witness`).
 * @private
 * @param {BufferWriter} bw
 * @returns {RawTX}
 */

TX.prototype.writeWitness = function writeWitness(bw) {
  if (this.inputs.length === 0 && this.outputs.length !== 0)
    throw new Error('Cannot serialize zero-input tx.');

  bw.writeU32(this.version);
  bw.writeU8(0);
  bw.writeU8(1);

  bw.writeVarint(this.inputs.length);

  for (const input of this.inputs)
    input.toWriter(bw);

  bw.writeVarint(this.outputs.length);

  for (const output of this.outputs)
    output.toWriter(bw);

  const start = bw.offset;

  for (const input of this.inputs)
    input.witness.toWriter(bw);

  const witness = bw.offset - start;

  bw.writeU32(this.locktime);

  if (witness === this.inputs.length)
    throw new Error('Cannot serialize empty-witness tx.');

  return bw;
};

/**
 * Calculate the real size of the transaction
 * without the witness vector.
 * @returns {RawTX}
 */

TX.prototype.getNormalSizes = function getNormalSizes() {
  let base = 0;

  base += 4;

  base += encoding.sizeVarint(this.inputs.length);

  for (const input of this.inputs)
    base += input.getSize();

  base += encoding.sizeVarint(this.outputs.length);

  for (const output of this.outputs)
    base += output.getSize();

  base += 4;

  return new RawTX(base, 0);
};

/**
 * Calculate the real size of the transaction
 * with the witness included.
 * @returns {RawTX}
 */

TX.prototype.getWitnessSizes = function getWitnessSizes() {
  let base = 0;
  let witness = 0;

  base += 4;
  witness += 2;

  base += encoding.sizeVarint(this.inputs.length);

  for (const input of this.inputs) {
    base += input.getSize();
    witness += input.witness.getVarSize();
  }

  base += encoding.sizeVarint(this.outputs.length);

  for (const output of this.outputs)
    base += output.getSize();

  base += 4;

  return new RawTX(base + witness, witness);
};

/**
 * Test whether an object is a TX.
 * @param {Object} obj
 * @returns {Boolean}
 */

TX.isTX = function isTX(obj) {
  return obj instanceof TX;
};

/*
 * Helpers
 */

function hasWitnessBytes(br) {
  if (br.left() < 6)
    return false;

  return br.data[br.offset + 4] === 0
    && br.data[br.offset + 5] !== 0;
}

function RawTX(size, witness) {
  this.data = null;
  this.size = size;
  this.witness = witness;
}

/*
 * Expose
 */

module.exports = TX;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * co.js - promise and generator control flow for wmcc_core.
 * Originally based on yoursnetwork's "asink" module.
 */



/**
 * @module utils/co
 */

const assert = __webpack_require__(0);

/**
 * Execute an instantiated generator.
 * @param {Generator} gen
 * @returns {Promise}
 */

function exec(gen) {
  return new Promise((resolve, reject) => {
    const step = (value, rejection) => {
      let next;

      try {
        if (rejection)
          next = gen.throw(value);
        else
          next = gen.next(value);
      } catch (e) {
        reject(e);
        return;
      }

      if (next.done) {
        resolve(next.value);
        return;
      }

      if (!isPromise(next.value)) {
        step(next.value, false);
        return;
      }

      // eslint-disable-next-line no-use-before-define
      next.value.then(succeed, fail);
    };

    const succeed = (value) => {
      step(value, false);
    };

    const fail = (value) => {
      step(value, true);
    };

    step(undefined, false);
  });
}

/**
 * Execute generator function
 * with a context and execute.
 * @param {GeneratorFunction} generator
 * @param {Object?} self
 * @returns {Promise}
 */

function spawn(generator, self) {
  const gen = generator.call(self);
  return exec(gen);
}

/**
 * Wrap a generator function to be
 * executed into a function that
 * returns a promise.
 * @param {GeneratorFunction}
 * @returns {Function}
 */

function co(generator) {
  return function() {
    const gen = generator.apply(this, arguments);
    return exec(gen);
  };
}

/**
 * Test whether an object is a promise.
 * @param {Object} obj
 * @returns {Boolean}
 */

function isPromise(obj) {
  return obj && typeof obj.then === 'function';
}

/**
 * Wait for a nextTick with a promise.
 * @returns {Promise}
 */

function wait() {
  return new Promise(resolve => setImmediate(resolve));
};

/**
 * Wait for a timeout with a promise.
 * @param {Number} time
 * @returns {Promise}
 */

function timeout(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

/**
 * Wrap `resolve` and `reject` into
 * a node.js style callback.
 * @param {Function} resolve
 * @param {Function} reject
 * @returns {Function}
 */

function wrap(resolve, reject) {
  return function(err, result) {
    if (err) {
      reject(err);
      return;
    }
    resolve(result);
  };
}

/**
 * Wrap a function that accepts node.js
 * style callbacks into a function that
 * returns a promise.
 * @param {Function} func
 * @returns {AsyncFunction}
 */

function promisify(func) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      args.push(wrap(resolve, reject));
      func.call(this, ...args);
    });
  };
}

/**
 * Wrap a promise-returning function
 * into a function that accepts a
 * node.js style callback.
 * @param {AsyncFunction} func
 * @returns {Function}
 */

function callbackify(func) {
  return function(...args) {
    if (args.length === 0
        || typeof args[args.length - 1] !== 'function') {
      throw new Error(`${func.name || 'Function'} requires a callback.`);
    }

    const callback = args.pop();

    func.call(this, ...args).then((value) => {
      setImmediate(() => callback(null, value));
    }, (err) => {
      setImmediate(() => callback(err));
    });
  };
}

/**
 * Execute each promise and
 * have them pass a truth test.
 * @method
 * @param {Promise[]} jobs
 * @returns {Promise}
 */

async function every(jobs) {
  const result = await Promise.all(jobs);

  for (const item of result) {
    if (!item)
      return false;
  }

  return true;
}

/**
 * Start an interval. Wait for promise
 * to resolve on each iteration.
 * @param {Function} func
 * @param {Number?} time
 * @param {Object?} self
 * @returns {Object}
 */

function startInterval(func, time, self) {
  const ctx = {
    timer: null,
    stopped: false
  };

  const cb = async () => {
    assert(ctx.timer != null);
    ctx.timer = null;

    try {
      await func.call(self);
    } finally {
      if (!ctx.stopped)
        ctx.timer = setTimeout(cb, time);
    }
  };

  ctx.timer = setTimeout(cb, time);

  return ctx;
}

/**
 * Clear an interval.
 * @param {Object} ctx
 */

function stopInterval(ctx) {
  assert(ctx);
  if (ctx.timer != null) {
    clearTimeout(ctx.timer);
    ctx.timer = null;
  }
  ctx.stopped = true;
}

/**
 * Start a timeout.
 * @param {Function} func
 * @param {Number?} time
 * @param {Object?} self
 * @returns {Object}
 */

function startTimeout(func, time, self) {
  return {
    timer: setTimeout(func.bind(self), time),
    stopped: false
  };
}

/**
 * Clear a timeout.
 * @param {Object} ctx
 */

function stopTimeout(ctx) {
  assert(ctx);
  if (ctx.timer != null) {
    clearTimeout(ctx.timer);
    ctx.timer = null;
  }
  ctx.stopped = true;
}

/**
 * Create a job object.
 * @returns {Job}
 */

function job(resolve, reject) {
  return new Job(resolve, reject);
}

/**
 * Job
 * @constructor
 * @ignore
 * @param {Function} resolve
 * @param {Function} reject
 * @property {Function} resolve
 * @property {Function} reject
 */

function Job(resolve, reject) {
  this.resolve = resolve;
  this.reject = reject;
}

/*
 * Expose
 */

exports = co;
exports.exec = exec;
exports.spawn = spawn;
exports.co = co;
exports.wait = wait;
exports.timeout = timeout;
exports.wrap = wrap;
exports.promisify = promisify;
exports.callbackify = callbackify;
exports.every = every;
exports.setInterval = startInterval;
exports.clearInterval = stopInterval;
exports.setTimeout = startTimeout;
exports.clearTimeout = stopTimeout;
exports.job = job;

module.exports = exports;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function (module, exports) {
  'use strict';

  // Utils
  function assert (val, msg) {
    if (!val) throw new Error(msg || 'Assertion failed');
  }

  // Could use `inherits` module, but don't want to move from single file
  // architecture yet.
  function inherits (ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function () {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  }

  // BN

  function BN (number, base, endian) {
    if (BN.isBN(number)) {
      return number;
    }

    this.negative = 0;
    this.words = null;
    this.length = 0;

    // Reduction context
    this.red = null;

    if (number !== null) {
      if (base === 'le' || base === 'be') {
        endian = base;
        base = 10;
      }

      this._init(number || 0, base || 10, endian || 'be');
    }
  }
  if (typeof module === 'object') {
    module.exports = BN;
  } else {
    exports.BN = BN;
  }

  BN.BN = BN;
  BN.wordSize = 26;

  var Buffer;
  try {
    Buffer = __webpack_require__(65).Buffer;
  } catch (e) {
  }

  BN.isBN = function isBN (num) {
    if (num instanceof BN) {
      return true;
    }

    return num !== null && typeof num === 'object' &&
      num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
  };

  BN.max = function max (left, right) {
    if (left.cmp(right) > 0) return left;
    return right;
  };

  BN.min = function min (left, right) {
    if (left.cmp(right) < 0) return left;
    return right;
  };

  BN.prototype._init = function init (number, base, endian) {
    if (typeof number === 'number') {
      return this._initNumber(number, base, endian);
    }

    if (typeof number === 'object') {
      return this._initArray(number, base, endian);
    }

    if (base === 'hex') {
      base = 16;
    }
    assert(base === (base | 0) && base >= 2 && base <= 36);

    number = number.toString().replace(/\s+/g, '');
    var start = 0;
    if (number[0] === '-') {
      start++;
    }

    if (base === 16) {
      this._parseHex(number, start);
    } else {
      this._parseBase(number, base, start);
    }

    if (number[0] === '-') {
      this.negative = 1;
    }

    this.strip();

    if (endian !== 'le') return;

    this._initArray(this.toArray(), base, endian);
  };

  BN.prototype._initNumber = function _initNumber (number, base, endian) {
    if (number < 0) {
      this.negative = 1;
      number = -number;
    }
    if (number < 0x4000000) {
      this.words = [ number & 0x3ffffff ];
      this.length = 1;
    } else if (number < 0x10000000000000) {
      this.words = [
        number & 0x3ffffff,
        (number / 0x4000000) & 0x3ffffff
      ];
      this.length = 2;
    } else {
      assert(number < 0x20000000000000); // 2 ^ 53 (unsafe)
      this.words = [
        number & 0x3ffffff,
        (number / 0x4000000) & 0x3ffffff,
        1
      ];
      this.length = 3;
    }

    if (endian !== 'le') return;

    // Reverse the bytes
    this._initArray(this.toArray(), base, endian);
  };

  BN.prototype._initArray = function _initArray (number, base, endian) {
    // Perhaps a Uint8Array
    assert(typeof number.length === 'number');
    if (number.length <= 0) {
      this.words = [ 0 ];
      this.length = 1;
      return this;
    }

    this.length = Math.ceil(number.length / 3);
    this.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      this.words[i] = 0;
    }

    var j, w;
    var off = 0;
    if (endian === 'be') {
      for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
        w = number[i] | (number[i - 1] << 8) | (number[i - 2] << 16);
        this.words[j] |= (w << off) & 0x3ffffff;
        this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
        off += 24;
        if (off >= 26) {
          off -= 26;
          j++;
        }
      }
    } else if (endian === 'le') {
      for (i = 0, j = 0; i < number.length; i += 3) {
        w = number[i] | (number[i + 1] << 8) | (number[i + 2] << 16);
        this.words[j] |= (w << off) & 0x3ffffff;
        this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
        off += 24;
        if (off >= 26) {
          off -= 26;
          j++;
        }
      }
    }
    return this.strip();
  };

  function parseHex (str, start, end) {
    var r = 0;
    var len = Math.min(str.length, end);
    for (var i = start; i < len; i++) {
      var c = str.charCodeAt(i) - 48;

      r <<= 4;

      // 'a' - 'f'
      if (c >= 49 && c <= 54) {
        r |= c - 49 + 0xa;

      // 'A' - 'F'
      } else if (c >= 17 && c <= 22) {
        r |= c - 17 + 0xa;

      // '0' - '9'
      } else {
        r |= c & 0xf;
      }
    }
    return r;
  }

  BN.prototype._parseHex = function _parseHex (number, start) {
    // Create possibly bigger array to ensure that it fits the number
    this.length = Math.ceil((number.length - start) / 6);
    this.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      this.words[i] = 0;
    }

    var j, w;
    // Scan 24-bit chunks and add them to the number
    var off = 0;
    for (i = number.length - 6, j = 0; i >= start; i -= 6) {
      w = parseHex(number, i, i + 6);
      this.words[j] |= (w << off) & 0x3ffffff;
      // NOTE: `0x3fffff` is intentional here, 26bits max shift + 24bit hex limb
      this.words[j + 1] |= w >>> (26 - off) & 0x3fffff;
      off += 24;
      if (off >= 26) {
        off -= 26;
        j++;
      }
    }
    if (i + 6 !== start) {
      w = parseHex(number, start, i + 6);
      this.words[j] |= (w << off) & 0x3ffffff;
      this.words[j + 1] |= w >>> (26 - off) & 0x3fffff;
    }
    this.strip();
  };

  function parseBase (str, start, end, mul) {
    var r = 0;
    var len = Math.min(str.length, end);
    for (var i = start; i < len; i++) {
      var c = str.charCodeAt(i) - 48;

      r *= mul;

      // 'a'
      if (c >= 49) {
        r += c - 49 + 0xa;

      // 'A'
      } else if (c >= 17) {
        r += c - 17 + 0xa;

      // '0' - '9'
      } else {
        r += c;
      }
    }
    return r;
  }

  BN.prototype._parseBase = function _parseBase (number, base, start) {
    // Initialize as zero
    this.words = [ 0 ];
    this.length = 1;

    // Find length of limb in base
    for (var limbLen = 0, limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base) {
      limbLen++;
    }
    limbLen--;
    limbPow = (limbPow / base) | 0;

    var total = number.length - start;
    var mod = total % limbLen;
    var end = Math.min(total, total - mod) + start;

    var word = 0;
    for (var i = start; i < end; i += limbLen) {
      word = parseBase(number, i, i + limbLen, base);

      this.imuln(limbPow);
      if (this.words[0] + word < 0x4000000) {
        this.words[0] += word;
      } else {
        this._iaddn(word);
      }
    }

    if (mod !== 0) {
      var pow = 1;
      word = parseBase(number, i, number.length, base);

      for (i = 0; i < mod; i++) {
        pow *= base;
      }

      this.imuln(pow);
      if (this.words[0] + word < 0x4000000) {
        this.words[0] += word;
      } else {
        this._iaddn(word);
      }
    }
  };

  BN.prototype.copy = function copy (dest) {
    dest.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      dest.words[i] = this.words[i];
    }
    dest.length = this.length;
    dest.negative = this.negative;
    dest.red = this.red;
  };

  BN.prototype.clone = function clone () {
    var r = new BN(null);
    this.copy(r);
    return r;
  };

  BN.prototype._expand = function _expand (size) {
    while (this.length < size) {
      this.words[this.length++] = 0;
    }
    return this;
  };

  // Remove leading `0` from `this`
  BN.prototype.strip = function strip () {
    while (this.length > 1 && this.words[this.length - 1] === 0) {
      this.length--;
    }
    return this._normSign();
  };

  BN.prototype._normSign = function _normSign () {
    // -0 = 0
    if (this.length === 1 && this.words[0] === 0) {
      this.negative = 0;
    }
    return this;
  };

  BN.prototype.inspect = function inspect () {
    return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
  };

  /*

  var zeros = [];
  var groupSizes = [];
  var groupBases = [];

  var s = '';
  var i = -1;
  while (++i < BN.wordSize) {
    zeros[i] = s;
    s += '0';
  }
  groupSizes[0] = 0;
  groupSizes[1] = 0;
  groupBases[0] = 0;
  groupBases[1] = 0;
  var base = 2 - 1;
  while (++base < 36 + 1) {
    var groupSize = 0;
    var groupBase = 1;
    while (groupBase < (1 << BN.wordSize) / base) {
      groupBase *= base;
      groupSize += 1;
    }
    groupSizes[base] = groupSize;
    groupBases[base] = groupBase;
  }

  */

  var zeros = [
    '',
    '0',
    '00',
    '000',
    '0000',
    '00000',
    '000000',
    '0000000',
    '00000000',
    '000000000',
    '0000000000',
    '00000000000',
    '000000000000',
    '0000000000000',
    '00000000000000',
    '000000000000000',
    '0000000000000000',
    '00000000000000000',
    '000000000000000000',
    '0000000000000000000',
    '00000000000000000000',
    '000000000000000000000',
    '0000000000000000000000',
    '00000000000000000000000',
    '000000000000000000000000',
    '0000000000000000000000000'
  ];

  var groupSizes = [
    0, 0,
    25, 16, 12, 11, 10, 9, 8,
    8, 7, 7, 7, 7, 6, 6,
    6, 6, 6, 6, 6, 5, 5,
    5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5
  ];

  var groupBases = [
    0, 0,
    33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216,
    43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625,
    16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632,
    6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149,
    24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176
  ];

  BN.prototype.toString = function toString (base, padding) {
    base = base || 10;
    padding = padding | 0 || 1;

    var out;
    if (base === 16 || base === 'hex') {
      out = '';
      var off = 0;
      var carry = 0;
      for (var i = 0; i < this.length; i++) {
        var w = this.words[i];
        var word = (((w << off) | carry) & 0xffffff).toString(16);
        carry = (w >>> (24 - off)) & 0xffffff;
        if (carry !== 0 || i !== this.length - 1) {
          out = zeros[6 - word.length] + word + out;
        } else {
          out = word + out;
        }
        off += 2;
        if (off >= 26) {
          off -= 26;
          i--;
        }
      }
      if (carry !== 0) {
        out = carry.toString(16) + out;
      }
      while (out.length % padding !== 0) {
        out = '0' + out;
      }
      if (this.negative !== 0) {
        out = '-' + out;
      }
      return out;
    }

    if (base === (base | 0) && base >= 2 && base <= 36) {
      // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
      var groupSize = groupSizes[base];
      // var groupBase = Math.pow(base, groupSize);
      var groupBase = groupBases[base];
      out = '';
      var c = this.clone();
      c.negative = 0;
      while (!c.isZero()) {
        var r = c.modn(groupBase).toString(base);
        c = c.idivn(groupBase);

        if (!c.isZero()) {
          out = zeros[groupSize - r.length] + r + out;
        } else {
          out = r + out;
        }
      }
      if (this.isZero()) {
        out = '0' + out;
      }
      while (out.length % padding !== 0) {
        out = '0' + out;
      }
      if (this.negative !== 0) {
        out = '-' + out;
      }
      return out;
    }

    assert(false, 'Base should be between 2 and 36');
  };

  BN.prototype.toNumber = function toNumber () {
    var ret = this.words[0];
    if (this.length === 2) {
      ret += this.words[1] * 0x4000000;
    } else if (this.length === 3 && this.words[2] === 0x01) {
      // NOTE: at this stage it is known that the top bit is set
      ret += 0x10000000000000 + (this.words[1] * 0x4000000);
    } else if (this.length > 2) {
      assert(false, 'Number can only safely store up to 53 bits');
    }
    return (this.negative !== 0) ? -ret : ret;
  };

  BN.prototype.toJSON = function toJSON () {
    return this.toString(16);
  };

  BN.prototype.toBuffer = function toBuffer (endian, length) {
    assert(typeof Buffer !== 'undefined');
    return this.toArrayLike(Buffer, endian, length);
  };

  BN.prototype.toArray = function toArray (endian, length) {
    return this.toArrayLike(Array, endian, length);
  };

  BN.prototype.toArrayLike = function toArrayLike (ArrayType, endian, length) {
    var byteLength = this.byteLength();
    var reqLength = length || Math.max(1, byteLength);
    assert(byteLength <= reqLength, 'byte array longer than desired length');
    assert(reqLength > 0, 'Requested array length <= 0');

    this.strip();
    var littleEndian = endian === 'le';
    var res = new ArrayType(reqLength);

    var b, i;
    var q = this.clone();
    if (!littleEndian) {
      // Assume big-endian
      for (i = 0; i < reqLength - byteLength; i++) {
        res[i] = 0;
      }

      for (i = 0; !q.isZero(); i++) {
        b = q.andln(0xff);
        q.iushrn(8);

        res[reqLength - i - 1] = b;
      }
    } else {
      for (i = 0; !q.isZero(); i++) {
        b = q.andln(0xff);
        q.iushrn(8);

        res[i] = b;
      }

      for (; i < reqLength; i++) {
        res[i] = 0;
      }
    }

    return res;
  };

  if (Math.clz32) {
    BN.prototype._countBits = function _countBits (w) {
      return 32 - Math.clz32(w);
    };
  } else {
    BN.prototype._countBits = function _countBits (w) {
      var t = w;
      var r = 0;
      if (t >= 0x1000) {
        r += 13;
        t >>>= 13;
      }
      if (t >= 0x40) {
        r += 7;
        t >>>= 7;
      }
      if (t >= 0x8) {
        r += 4;
        t >>>= 4;
      }
      if (t >= 0x02) {
        r += 2;
        t >>>= 2;
      }
      return r + t;
    };
  }

  BN.prototype._zeroBits = function _zeroBits (w) {
    // Short-cut
    if (w === 0) return 26;

    var t = w;
    var r = 0;
    if ((t & 0x1fff) === 0) {
      r += 13;
      t >>>= 13;
    }
    if ((t & 0x7f) === 0) {
      r += 7;
      t >>>= 7;
    }
    if ((t & 0xf) === 0) {
      r += 4;
      t >>>= 4;
    }
    if ((t & 0x3) === 0) {
      r += 2;
      t >>>= 2;
    }
    if ((t & 0x1) === 0) {
      r++;
    }
    return r;
  };

  // Return number of used bits in a BN
  BN.prototype.bitLength = function bitLength () {
    var w = this.words[this.length - 1];
    var hi = this._countBits(w);
    return (this.length - 1) * 26 + hi;
  };

  function toBitArray (num) {
    var w = new Array(num.bitLength());

    for (var bit = 0; bit < w.length; bit++) {
      var off = (bit / 26) | 0;
      var wbit = bit % 26;

      w[bit] = (num.words[off] & (1 << wbit)) >>> wbit;
    }

    return w;
  }

  // Number of trailing zero bits
  BN.prototype.zeroBits = function zeroBits () {
    if (this.isZero()) return 0;

    var r = 0;
    for (var i = 0; i < this.length; i++) {
      var b = this._zeroBits(this.words[i]);
      r += b;
      if (b !== 26) break;
    }
    return r;
  };

  BN.prototype.byteLength = function byteLength () {
    return Math.ceil(this.bitLength() / 8);
  };

  BN.prototype.toTwos = function toTwos (width) {
    if (this.negative !== 0) {
      return this.abs().inotn(width).iaddn(1);
    }
    return this.clone();
  };

  BN.prototype.fromTwos = function fromTwos (width) {
    if (this.testn(width - 1)) {
      return this.notn(width).iaddn(1).ineg();
    }
    return this.clone();
  };

  BN.prototype.isNeg = function isNeg () {
    return this.negative !== 0;
  };

  // Return negative clone of `this`
  BN.prototype.neg = function neg () {
    return this.clone().ineg();
  };

  BN.prototype.ineg = function ineg () {
    if (!this.isZero()) {
      this.negative ^= 1;
    }

    return this;
  };

  // Or `num` with `this` in-place
  BN.prototype.iuor = function iuor (num) {
    while (this.length < num.length) {
      this.words[this.length++] = 0;
    }

    for (var i = 0; i < num.length; i++) {
      this.words[i] = this.words[i] | num.words[i];
    }

    return this.strip();
  };

  BN.prototype.ior = function ior (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuor(num);
  };

  // Or `num` with `this`
  BN.prototype.or = function or (num) {
    if (this.length > num.length) return this.clone().ior(num);
    return num.clone().ior(this);
  };

  BN.prototype.uor = function uor (num) {
    if (this.length > num.length) return this.clone().iuor(num);
    return num.clone().iuor(this);
  };

  // And `num` with `this` in-place
  BN.prototype.iuand = function iuand (num) {
    // b = min-length(num, this)
    var b;
    if (this.length > num.length) {
      b = num;
    } else {
      b = this;
    }

    for (var i = 0; i < b.length; i++) {
      this.words[i] = this.words[i] & num.words[i];
    }

    this.length = b.length;

    return this.strip();
  };

  BN.prototype.iand = function iand (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuand(num);
  };

  // And `num` with `this`
  BN.prototype.and = function and (num) {
    if (this.length > num.length) return this.clone().iand(num);
    return num.clone().iand(this);
  };

  BN.prototype.uand = function uand (num) {
    if (this.length > num.length) return this.clone().iuand(num);
    return num.clone().iuand(this);
  };

  // Xor `num` with `this` in-place
  BN.prototype.iuxor = function iuxor (num) {
    // a.length > b.length
    var a;
    var b;
    if (this.length > num.length) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    for (var i = 0; i < b.length; i++) {
      this.words[i] = a.words[i] ^ b.words[i];
    }

    if (this !== a) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    this.length = a.length;

    return this.strip();
  };

  BN.prototype.ixor = function ixor (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuxor(num);
  };

  // Xor `num` with `this`
  BN.prototype.xor = function xor (num) {
    if (this.length > num.length) return this.clone().ixor(num);
    return num.clone().ixor(this);
  };

  BN.prototype.uxor = function uxor (num) {
    if (this.length > num.length) return this.clone().iuxor(num);
    return num.clone().iuxor(this);
  };

  // Not ``this`` with ``width`` bitwidth
  BN.prototype.inotn = function inotn (width) {
    assert(typeof width === 'number' && width >= 0);

    var bytesNeeded = Math.ceil(width / 26) | 0;
    var bitsLeft = width % 26;

    // Extend the buffer with leading zeroes
    this._expand(bytesNeeded);

    if (bitsLeft > 0) {
      bytesNeeded--;
    }

    // Handle complete words
    for (var i = 0; i < bytesNeeded; i++) {
      this.words[i] = ~this.words[i] & 0x3ffffff;
    }

    // Handle the residue
    if (bitsLeft > 0) {
      this.words[i] = ~this.words[i] & (0x3ffffff >> (26 - bitsLeft));
    }

    // And remove leading zeroes
    return this.strip();
  };

  BN.prototype.notn = function notn (width) {
    return this.clone().inotn(width);
  };

  // Set `bit` of `this`
  BN.prototype.setn = function setn (bit, val) {
    assert(typeof bit === 'number' && bit >= 0);

    var off = (bit / 26) | 0;
    var wbit = bit % 26;

    this._expand(off + 1);

    if (val) {
      this.words[off] = this.words[off] | (1 << wbit);
    } else {
      this.words[off] = this.words[off] & ~(1 << wbit);
    }

    return this.strip();
  };

  // Add `num` to `this` in-place
  BN.prototype.iadd = function iadd (num) {
    var r;

    // negative + positive
    if (this.negative !== 0 && num.negative === 0) {
      this.negative = 0;
      r = this.isub(num);
      this.negative ^= 1;
      return this._normSign();

    // positive + negative
    } else if (this.negative === 0 && num.negative !== 0) {
      num.negative = 0;
      r = this.isub(num);
      num.negative = 1;
      return r._normSign();
    }

    // a.length > b.length
    var a, b;
    if (this.length > num.length) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    var carry = 0;
    for (var i = 0; i < b.length; i++) {
      r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
      this.words[i] = r & 0x3ffffff;
      carry = r >>> 26;
    }
    for (; carry !== 0 && i < a.length; i++) {
      r = (a.words[i] | 0) + carry;
      this.words[i] = r & 0x3ffffff;
      carry = r >>> 26;
    }

    this.length = a.length;
    if (carry !== 0) {
      this.words[this.length] = carry;
      this.length++;
    // Copy the rest of the words
    } else if (a !== this) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    return this;
  };

  // Add `num` to `this`
  BN.prototype.add = function add (num) {
    var res;
    if (num.negative !== 0 && this.negative === 0) {
      num.negative = 0;
      res = this.sub(num);
      num.negative ^= 1;
      return res;
    } else if (num.negative === 0 && this.negative !== 0) {
      this.negative = 0;
      res = num.sub(this);
      this.negative = 1;
      return res;
    }

    if (this.length > num.length) return this.clone().iadd(num);

    return num.clone().iadd(this);
  };

  // Subtract `num` from `this` in-place
  BN.prototype.isub = function isub (num) {
    // this - (-num) = this + num
    if (num.negative !== 0) {
      num.negative = 0;
      var r = this.iadd(num);
      num.negative = 1;
      return r._normSign();

    // -this - num = -(this + num)
    } else if (this.negative !== 0) {
      this.negative = 0;
      this.iadd(num);
      this.negative = 1;
      return this._normSign();
    }

    // At this point both numbers are positive
    var cmp = this.cmp(num);

    // Optimization - zeroify
    if (cmp === 0) {
      this.negative = 0;
      this.length = 1;
      this.words[0] = 0;
      return this;
    }

    // a > b
    var a, b;
    if (cmp > 0) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    var carry = 0;
    for (var i = 0; i < b.length; i++) {
      r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
      carry = r >> 26;
      this.words[i] = r & 0x3ffffff;
    }
    for (; carry !== 0 && i < a.length; i++) {
      r = (a.words[i] | 0) + carry;
      carry = r >> 26;
      this.words[i] = r & 0x3ffffff;
    }

    // Copy rest of the words
    if (carry === 0 && i < a.length && a !== this) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    this.length = Math.max(this.length, i);

    if (a !== this) {
      this.negative = 1;
    }

    return this.strip();
  };

  // Subtract `num` from `this`
  BN.prototype.sub = function sub (num) {
    return this.clone().isub(num);
  };

  function smallMulTo (self, num, out) {
    out.negative = num.negative ^ self.negative;
    var len = (self.length + num.length) | 0;
    out.length = len;
    len = (len - 1) | 0;

    // Peel one iteration (compiler can't do it, because of code complexity)
    var a = self.words[0] | 0;
    var b = num.words[0] | 0;
    var r = a * b;

    var lo = r & 0x3ffffff;
    var carry = (r / 0x4000000) | 0;
    out.words[0] = lo;

    for (var k = 1; k < len; k++) {
      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
      // note that ncarry could be >= 0x3ffffff
      var ncarry = carry >>> 26;
      var rword = carry & 0x3ffffff;
      var maxJ = Math.min(k, num.length - 1);
      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
        var i = (k - j) | 0;
        a = self.words[i] | 0;
        b = num.words[j] | 0;
        r = a * b + rword;
        ncarry += (r / 0x4000000) | 0;
        rword = r & 0x3ffffff;
      }
      out.words[k] = rword | 0;
      carry = ncarry | 0;
    }
    if (carry !== 0) {
      out.words[k] = carry | 0;
    } else {
      out.length--;
    }

    return out.strip();
  }

  // TODO(indutny): it may be reasonable to omit it for users who don't need
  // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
  // multiplication (like elliptic secp256k1).
  var comb10MulTo = function comb10MulTo (self, num, out) {
    var a = self.words;
    var b = num.words;
    var o = out.words;
    var c = 0;
    var lo;
    var mid;
    var hi;
    var a0 = a[0] | 0;
    var al0 = a0 & 0x1fff;
    var ah0 = a0 >>> 13;
    var a1 = a[1] | 0;
    var al1 = a1 & 0x1fff;
    var ah1 = a1 >>> 13;
    var a2 = a[2] | 0;
    var al2 = a2 & 0x1fff;
    var ah2 = a2 >>> 13;
    var a3 = a[3] | 0;
    var al3 = a3 & 0x1fff;
    var ah3 = a3 >>> 13;
    var a4 = a[4] | 0;
    var al4 = a4 & 0x1fff;
    var ah4 = a4 >>> 13;
    var a5 = a[5] | 0;
    var al5 = a5 & 0x1fff;
    var ah5 = a5 >>> 13;
    var a6 = a[6] | 0;
    var al6 = a6 & 0x1fff;
    var ah6 = a6 >>> 13;
    var a7 = a[7] | 0;
    var al7 = a7 & 0x1fff;
    var ah7 = a7 >>> 13;
    var a8 = a[8] | 0;
    var al8 = a8 & 0x1fff;
    var ah8 = a8 >>> 13;
    var a9 = a[9] | 0;
    var al9 = a9 & 0x1fff;
    var ah9 = a9 >>> 13;
    var b0 = b[0] | 0;
    var bl0 = b0 & 0x1fff;
    var bh0 = b0 >>> 13;
    var b1 = b[1] | 0;
    var bl1 = b1 & 0x1fff;
    var bh1 = b1 >>> 13;
    var b2 = b[2] | 0;
    var bl2 = b2 & 0x1fff;
    var bh2 = b2 >>> 13;
    var b3 = b[3] | 0;
    var bl3 = b3 & 0x1fff;
    var bh3 = b3 >>> 13;
    var b4 = b[4] | 0;
    var bl4 = b4 & 0x1fff;
    var bh4 = b4 >>> 13;
    var b5 = b[5] | 0;
    var bl5 = b5 & 0x1fff;
    var bh5 = b5 >>> 13;
    var b6 = b[6] | 0;
    var bl6 = b6 & 0x1fff;
    var bh6 = b6 >>> 13;
    var b7 = b[7] | 0;
    var bl7 = b7 & 0x1fff;
    var bh7 = b7 >>> 13;
    var b8 = b[8] | 0;
    var bl8 = b8 & 0x1fff;
    var bh8 = b8 >>> 13;
    var b9 = b[9] | 0;
    var bl9 = b9 & 0x1fff;
    var bh9 = b9 >>> 13;

    out.negative = self.negative ^ num.negative;
    out.length = 19;
    /* k = 0 */
    lo = Math.imul(al0, bl0);
    mid = Math.imul(al0, bh0);
    mid = (mid + Math.imul(ah0, bl0)) | 0;
    hi = Math.imul(ah0, bh0);
    var w0 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w0 >>> 26)) | 0;
    w0 &= 0x3ffffff;
    /* k = 1 */
    lo = Math.imul(al1, bl0);
    mid = Math.imul(al1, bh0);
    mid = (mid + Math.imul(ah1, bl0)) | 0;
    hi = Math.imul(ah1, bh0);
    lo = (lo + Math.imul(al0, bl1)) | 0;
    mid = (mid + Math.imul(al0, bh1)) | 0;
    mid = (mid + Math.imul(ah0, bl1)) | 0;
    hi = (hi + Math.imul(ah0, bh1)) | 0;
    var w1 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w1 >>> 26)) | 0;
    w1 &= 0x3ffffff;
    /* k = 2 */
    lo = Math.imul(al2, bl0);
    mid = Math.imul(al2, bh0);
    mid = (mid + Math.imul(ah2, bl0)) | 0;
    hi = Math.imul(ah2, bh0);
    lo = (lo + Math.imul(al1, bl1)) | 0;
    mid = (mid + Math.imul(al1, bh1)) | 0;
    mid = (mid + Math.imul(ah1, bl1)) | 0;
    hi = (hi + Math.imul(ah1, bh1)) | 0;
    lo = (lo + Math.imul(al0, bl2)) | 0;
    mid = (mid + Math.imul(al0, bh2)) | 0;
    mid = (mid + Math.imul(ah0, bl2)) | 0;
    hi = (hi + Math.imul(ah0, bh2)) | 0;
    var w2 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w2 >>> 26)) | 0;
    w2 &= 0x3ffffff;
    /* k = 3 */
    lo = Math.imul(al3, bl0);
    mid = Math.imul(al3, bh0);
    mid = (mid + Math.imul(ah3, bl0)) | 0;
    hi = Math.imul(ah3, bh0);
    lo = (lo + Math.imul(al2, bl1)) | 0;
    mid = (mid + Math.imul(al2, bh1)) | 0;
    mid = (mid + Math.imul(ah2, bl1)) | 0;
    hi = (hi + Math.imul(ah2, bh1)) | 0;
    lo = (lo + Math.imul(al1, bl2)) | 0;
    mid = (mid + Math.imul(al1, bh2)) | 0;
    mid = (mid + Math.imul(ah1, bl2)) | 0;
    hi = (hi + Math.imul(ah1, bh2)) | 0;
    lo = (lo + Math.imul(al0, bl3)) | 0;
    mid = (mid + Math.imul(al0, bh3)) | 0;
    mid = (mid + Math.imul(ah0, bl3)) | 0;
    hi = (hi + Math.imul(ah0, bh3)) | 0;
    var w3 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w3 >>> 26)) | 0;
    w3 &= 0x3ffffff;
    /* k = 4 */
    lo = Math.imul(al4, bl0);
    mid = Math.imul(al4, bh0);
    mid = (mid + Math.imul(ah4, bl0)) | 0;
    hi = Math.imul(ah4, bh0);
    lo = (lo + Math.imul(al3, bl1)) | 0;
    mid = (mid + Math.imul(al3, bh1)) | 0;
    mid = (mid + Math.imul(ah3, bl1)) | 0;
    hi = (hi + Math.imul(ah3, bh1)) | 0;
    lo = (lo + Math.imul(al2, bl2)) | 0;
    mid = (mid + Math.imul(al2, bh2)) | 0;
    mid = (mid + Math.imul(ah2, bl2)) | 0;
    hi = (hi + Math.imul(ah2, bh2)) | 0;
    lo = (lo + Math.imul(al1, bl3)) | 0;
    mid = (mid + Math.imul(al1, bh3)) | 0;
    mid = (mid + Math.imul(ah1, bl3)) | 0;
    hi = (hi + Math.imul(ah1, bh3)) | 0;
    lo = (lo + Math.imul(al0, bl4)) | 0;
    mid = (mid + Math.imul(al0, bh4)) | 0;
    mid = (mid + Math.imul(ah0, bl4)) | 0;
    hi = (hi + Math.imul(ah0, bh4)) | 0;
    var w4 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w4 >>> 26)) | 0;
    w4 &= 0x3ffffff;
    /* k = 5 */
    lo = Math.imul(al5, bl0);
    mid = Math.imul(al5, bh0);
    mid = (mid + Math.imul(ah5, bl0)) | 0;
    hi = Math.imul(ah5, bh0);
    lo = (lo + Math.imul(al4, bl1)) | 0;
    mid = (mid + Math.imul(al4, bh1)) | 0;
    mid = (mid + Math.imul(ah4, bl1)) | 0;
    hi = (hi + Math.imul(ah4, bh1)) | 0;
    lo = (lo + Math.imul(al3, bl2)) | 0;
    mid = (mid + Math.imul(al3, bh2)) | 0;
    mid = (mid + Math.imul(ah3, bl2)) | 0;
    hi = (hi + Math.imul(ah3, bh2)) | 0;
    lo = (lo + Math.imul(al2, bl3)) | 0;
    mid = (mid + Math.imul(al2, bh3)) | 0;
    mid = (mid + Math.imul(ah2, bl3)) | 0;
    hi = (hi + Math.imul(ah2, bh3)) | 0;
    lo = (lo + Math.imul(al1, bl4)) | 0;
    mid = (mid + Math.imul(al1, bh4)) | 0;
    mid = (mid + Math.imul(ah1, bl4)) | 0;
    hi = (hi + Math.imul(ah1, bh4)) | 0;
    lo = (lo + Math.imul(al0, bl5)) | 0;
    mid = (mid + Math.imul(al0, bh5)) | 0;
    mid = (mid + Math.imul(ah0, bl5)) | 0;
    hi = (hi + Math.imul(ah0, bh5)) | 0;
    var w5 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w5 >>> 26)) | 0;
    w5 &= 0x3ffffff;
    /* k = 6 */
    lo = Math.imul(al6, bl0);
    mid = Math.imul(al6, bh0);
    mid = (mid + Math.imul(ah6, bl0)) | 0;
    hi = Math.imul(ah6, bh0);
    lo = (lo + Math.imul(al5, bl1)) | 0;
    mid = (mid + Math.imul(al5, bh1)) | 0;
    mid = (mid + Math.imul(ah5, bl1)) | 0;
    hi = (hi + Math.imul(ah5, bh1)) | 0;
    lo = (lo + Math.imul(al4, bl2)) | 0;
    mid = (mid + Math.imul(al4, bh2)) | 0;
    mid = (mid + Math.imul(ah4, bl2)) | 0;
    hi = (hi + Math.imul(ah4, bh2)) | 0;
    lo = (lo + Math.imul(al3, bl3)) | 0;
    mid = (mid + Math.imul(al3, bh3)) | 0;
    mid = (mid + Math.imul(ah3, bl3)) | 0;
    hi = (hi + Math.imul(ah3, bh3)) | 0;
    lo = (lo + Math.imul(al2, bl4)) | 0;
    mid = (mid + Math.imul(al2, bh4)) | 0;
    mid = (mid + Math.imul(ah2, bl4)) | 0;
    hi = (hi + Math.imul(ah2, bh4)) | 0;
    lo = (lo + Math.imul(al1, bl5)) | 0;
    mid = (mid + Math.imul(al1, bh5)) | 0;
    mid = (mid + Math.imul(ah1, bl5)) | 0;
    hi = (hi + Math.imul(ah1, bh5)) | 0;
    lo = (lo + Math.imul(al0, bl6)) | 0;
    mid = (mid + Math.imul(al0, bh6)) | 0;
    mid = (mid + Math.imul(ah0, bl6)) | 0;
    hi = (hi + Math.imul(ah0, bh6)) | 0;
    var w6 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w6 >>> 26)) | 0;
    w6 &= 0x3ffffff;
    /* k = 7 */
    lo = Math.imul(al7, bl0);
    mid = Math.imul(al7, bh0);
    mid = (mid + Math.imul(ah7, bl0)) | 0;
    hi = Math.imul(ah7, bh0);
    lo = (lo + Math.imul(al6, bl1)) | 0;
    mid = (mid + Math.imul(al6, bh1)) | 0;
    mid = (mid + Math.imul(ah6, bl1)) | 0;
    hi = (hi + Math.imul(ah6, bh1)) | 0;
    lo = (lo + Math.imul(al5, bl2)) | 0;
    mid = (mid + Math.imul(al5, bh2)) | 0;
    mid = (mid + Math.imul(ah5, bl2)) | 0;
    hi = (hi + Math.imul(ah5, bh2)) | 0;
    lo = (lo + Math.imul(al4, bl3)) | 0;
    mid = (mid + Math.imul(al4, bh3)) | 0;
    mid = (mid + Math.imul(ah4, bl3)) | 0;
    hi = (hi + Math.imul(ah4, bh3)) | 0;
    lo = (lo + Math.imul(al3, bl4)) | 0;
    mid = (mid + Math.imul(al3, bh4)) | 0;
    mid = (mid + Math.imul(ah3, bl4)) | 0;
    hi = (hi + Math.imul(ah3, bh4)) | 0;
    lo = (lo + Math.imul(al2, bl5)) | 0;
    mid = (mid + Math.imul(al2, bh5)) | 0;
    mid = (mid + Math.imul(ah2, bl5)) | 0;
    hi = (hi + Math.imul(ah2, bh5)) | 0;
    lo = (lo + Math.imul(al1, bl6)) | 0;
    mid = (mid + Math.imul(al1, bh6)) | 0;
    mid = (mid + Math.imul(ah1, bl6)) | 0;
    hi = (hi + Math.imul(ah1, bh6)) | 0;
    lo = (lo + Math.imul(al0, bl7)) | 0;
    mid = (mid + Math.imul(al0, bh7)) | 0;
    mid = (mid + Math.imul(ah0, bl7)) | 0;
    hi = (hi + Math.imul(ah0, bh7)) | 0;
    var w7 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w7 >>> 26)) | 0;
    w7 &= 0x3ffffff;
    /* k = 8 */
    lo = Math.imul(al8, bl0);
    mid = Math.imul(al8, bh0);
    mid = (mid + Math.imul(ah8, bl0)) | 0;
    hi = Math.imul(ah8, bh0);
    lo = (lo + Math.imul(al7, bl1)) | 0;
    mid = (mid + Math.imul(al7, bh1)) | 0;
    mid = (mid + Math.imul(ah7, bl1)) | 0;
    hi = (hi + Math.imul(ah7, bh1)) | 0;
    lo = (lo + Math.imul(al6, bl2)) | 0;
    mid = (mid + Math.imul(al6, bh2)) | 0;
    mid = (mid + Math.imul(ah6, bl2)) | 0;
    hi = (hi + Math.imul(ah6, bh2)) | 0;
    lo = (lo + Math.imul(al5, bl3)) | 0;
    mid = (mid + Math.imul(al5, bh3)) | 0;
    mid = (mid + Math.imul(ah5, bl3)) | 0;
    hi = (hi + Math.imul(ah5, bh3)) | 0;
    lo = (lo + Math.imul(al4, bl4)) | 0;
    mid = (mid + Math.imul(al4, bh4)) | 0;
    mid = (mid + Math.imul(ah4, bl4)) | 0;
    hi = (hi + Math.imul(ah4, bh4)) | 0;
    lo = (lo + Math.imul(al3, bl5)) | 0;
    mid = (mid + Math.imul(al3, bh5)) | 0;
    mid = (mid + Math.imul(ah3, bl5)) | 0;
    hi = (hi + Math.imul(ah3, bh5)) | 0;
    lo = (lo + Math.imul(al2, bl6)) | 0;
    mid = (mid + Math.imul(al2, bh6)) | 0;
    mid = (mid + Math.imul(ah2, bl6)) | 0;
    hi = (hi + Math.imul(ah2, bh6)) | 0;
    lo = (lo + Math.imul(al1, bl7)) | 0;
    mid = (mid + Math.imul(al1, bh7)) | 0;
    mid = (mid + Math.imul(ah1, bl7)) | 0;
    hi = (hi + Math.imul(ah1, bh7)) | 0;
    lo = (lo + Math.imul(al0, bl8)) | 0;
    mid = (mid + Math.imul(al0, bh8)) | 0;
    mid = (mid + Math.imul(ah0, bl8)) | 0;
    hi = (hi + Math.imul(ah0, bh8)) | 0;
    var w8 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w8 >>> 26)) | 0;
    w8 &= 0x3ffffff;
    /* k = 9 */
    lo = Math.imul(al9, bl0);
    mid = Math.imul(al9, bh0);
    mid = (mid + Math.imul(ah9, bl0)) | 0;
    hi = Math.imul(ah9, bh0);
    lo = (lo + Math.imul(al8, bl1)) | 0;
    mid = (mid + Math.imul(al8, bh1)) | 0;
    mid = (mid + Math.imul(ah8, bl1)) | 0;
    hi = (hi + Math.imul(ah8, bh1)) | 0;
    lo = (lo + Math.imul(al7, bl2)) | 0;
    mid = (mid + Math.imul(al7, bh2)) | 0;
    mid = (mid + Math.imul(ah7, bl2)) | 0;
    hi = (hi + Math.imul(ah7, bh2)) | 0;
    lo = (lo + Math.imul(al6, bl3)) | 0;
    mid = (mid + Math.imul(al6, bh3)) | 0;
    mid = (mid + Math.imul(ah6, bl3)) | 0;
    hi = (hi + Math.imul(ah6, bh3)) | 0;
    lo = (lo + Math.imul(al5, bl4)) | 0;
    mid = (mid + Math.imul(al5, bh4)) | 0;
    mid = (mid + Math.imul(ah5, bl4)) | 0;
    hi = (hi + Math.imul(ah5, bh4)) | 0;
    lo = (lo + Math.imul(al4, bl5)) | 0;
    mid = (mid + Math.imul(al4, bh5)) | 0;
    mid = (mid + Math.imul(ah4, bl5)) | 0;
    hi = (hi + Math.imul(ah4, bh5)) | 0;
    lo = (lo + Math.imul(al3, bl6)) | 0;
    mid = (mid + Math.imul(al3, bh6)) | 0;
    mid = (mid + Math.imul(ah3, bl6)) | 0;
    hi = (hi + Math.imul(ah3, bh6)) | 0;
    lo = (lo + Math.imul(al2, bl7)) | 0;
    mid = (mid + Math.imul(al2, bh7)) | 0;
    mid = (mid + Math.imul(ah2, bl7)) | 0;
    hi = (hi + Math.imul(ah2, bh7)) | 0;
    lo = (lo + Math.imul(al1, bl8)) | 0;
    mid = (mid + Math.imul(al1, bh8)) | 0;
    mid = (mid + Math.imul(ah1, bl8)) | 0;
    hi = (hi + Math.imul(ah1, bh8)) | 0;
    lo = (lo + Math.imul(al0, bl9)) | 0;
    mid = (mid + Math.imul(al0, bh9)) | 0;
    mid = (mid + Math.imul(ah0, bl9)) | 0;
    hi = (hi + Math.imul(ah0, bh9)) | 0;
    var w9 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w9 >>> 26)) | 0;
    w9 &= 0x3ffffff;
    /* k = 10 */
    lo = Math.imul(al9, bl1);
    mid = Math.imul(al9, bh1);
    mid = (mid + Math.imul(ah9, bl1)) | 0;
    hi = Math.imul(ah9, bh1);
    lo = (lo + Math.imul(al8, bl2)) | 0;
    mid = (mid + Math.imul(al8, bh2)) | 0;
    mid = (mid + Math.imul(ah8, bl2)) | 0;
    hi = (hi + Math.imul(ah8, bh2)) | 0;
    lo = (lo + Math.imul(al7, bl3)) | 0;
    mid = (mid + Math.imul(al7, bh3)) | 0;
    mid = (mid + Math.imul(ah7, bl3)) | 0;
    hi = (hi + Math.imul(ah7, bh3)) | 0;
    lo = (lo + Math.imul(al6, bl4)) | 0;
    mid = (mid + Math.imul(al6, bh4)) | 0;
    mid = (mid + Math.imul(ah6, bl4)) | 0;
    hi = (hi + Math.imul(ah6, bh4)) | 0;
    lo = (lo + Math.imul(al5, bl5)) | 0;
    mid = (mid + Math.imul(al5, bh5)) | 0;
    mid = (mid + Math.imul(ah5, bl5)) | 0;
    hi = (hi + Math.imul(ah5, bh5)) | 0;
    lo = (lo + Math.imul(al4, bl6)) | 0;
    mid = (mid + Math.imul(al4, bh6)) | 0;
    mid = (mid + Math.imul(ah4, bl6)) | 0;
    hi = (hi + Math.imul(ah4, bh6)) | 0;
    lo = (lo + Math.imul(al3, bl7)) | 0;
    mid = (mid + Math.imul(al3, bh7)) | 0;
    mid = (mid + Math.imul(ah3, bl7)) | 0;
    hi = (hi + Math.imul(ah3, bh7)) | 0;
    lo = (lo + Math.imul(al2, bl8)) | 0;
    mid = (mid + Math.imul(al2, bh8)) | 0;
    mid = (mid + Math.imul(ah2, bl8)) | 0;
    hi = (hi + Math.imul(ah2, bh8)) | 0;
    lo = (lo + Math.imul(al1, bl9)) | 0;
    mid = (mid + Math.imul(al1, bh9)) | 0;
    mid = (mid + Math.imul(ah1, bl9)) | 0;
    hi = (hi + Math.imul(ah1, bh9)) | 0;
    var w10 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w10 >>> 26)) | 0;
    w10 &= 0x3ffffff;
    /* k = 11 */
    lo = Math.imul(al9, bl2);
    mid = Math.imul(al9, bh2);
    mid = (mid + Math.imul(ah9, bl2)) | 0;
    hi = Math.imul(ah9, bh2);
    lo = (lo + Math.imul(al8, bl3)) | 0;
    mid = (mid + Math.imul(al8, bh3)) | 0;
    mid = (mid + Math.imul(ah8, bl3)) | 0;
    hi = (hi + Math.imul(ah8, bh3)) | 0;
    lo = (lo + Math.imul(al7, bl4)) | 0;
    mid = (mid + Math.imul(al7, bh4)) | 0;
    mid = (mid + Math.imul(ah7, bl4)) | 0;
    hi = (hi + Math.imul(ah7, bh4)) | 0;
    lo = (lo + Math.imul(al6, bl5)) | 0;
    mid = (mid + Math.imul(al6, bh5)) | 0;
    mid = (mid + Math.imul(ah6, bl5)) | 0;
    hi = (hi + Math.imul(ah6, bh5)) | 0;
    lo = (lo + Math.imul(al5, bl6)) | 0;
    mid = (mid + Math.imul(al5, bh6)) | 0;
    mid = (mid + Math.imul(ah5, bl6)) | 0;
    hi = (hi + Math.imul(ah5, bh6)) | 0;
    lo = (lo + Math.imul(al4, bl7)) | 0;
    mid = (mid + Math.imul(al4, bh7)) | 0;
    mid = (mid + Math.imul(ah4, bl7)) | 0;
    hi = (hi + Math.imul(ah4, bh7)) | 0;
    lo = (lo + Math.imul(al3, bl8)) | 0;
    mid = (mid + Math.imul(al3, bh8)) | 0;
    mid = (mid + Math.imul(ah3, bl8)) | 0;
    hi = (hi + Math.imul(ah3, bh8)) | 0;
    lo = (lo + Math.imul(al2, bl9)) | 0;
    mid = (mid + Math.imul(al2, bh9)) | 0;
    mid = (mid + Math.imul(ah2, bl9)) | 0;
    hi = (hi + Math.imul(ah2, bh9)) | 0;
    var w11 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w11 >>> 26)) | 0;
    w11 &= 0x3ffffff;
    /* k = 12 */
    lo = Math.imul(al9, bl3);
    mid = Math.imul(al9, bh3);
    mid = (mid + Math.imul(ah9, bl3)) | 0;
    hi = Math.imul(ah9, bh3);
    lo = (lo + Math.imul(al8, bl4)) | 0;
    mid = (mid + Math.imul(al8, bh4)) | 0;
    mid = (mid + Math.imul(ah8, bl4)) | 0;
    hi = (hi + Math.imul(ah8, bh4)) | 0;
    lo = (lo + Math.imul(al7, bl5)) | 0;
    mid = (mid + Math.imul(al7, bh5)) | 0;
    mid = (mid + Math.imul(ah7, bl5)) | 0;
    hi = (hi + Math.imul(ah7, bh5)) | 0;
    lo = (lo + Math.imul(al6, bl6)) | 0;
    mid = (mid + Math.imul(al6, bh6)) | 0;
    mid = (mid + Math.imul(ah6, bl6)) | 0;
    hi = (hi + Math.imul(ah6, bh6)) | 0;
    lo = (lo + Math.imul(al5, bl7)) | 0;
    mid = (mid + Math.imul(al5, bh7)) | 0;
    mid = (mid + Math.imul(ah5, bl7)) | 0;
    hi = (hi + Math.imul(ah5, bh7)) | 0;
    lo = (lo + Math.imul(al4, bl8)) | 0;
    mid = (mid + Math.imul(al4, bh8)) | 0;
    mid = (mid + Math.imul(ah4, bl8)) | 0;
    hi = (hi + Math.imul(ah4, bh8)) | 0;
    lo = (lo + Math.imul(al3, bl9)) | 0;
    mid = (mid + Math.imul(al3, bh9)) | 0;
    mid = (mid + Math.imul(ah3, bl9)) | 0;
    hi = (hi + Math.imul(ah3, bh9)) | 0;
    var w12 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w12 >>> 26)) | 0;
    w12 &= 0x3ffffff;
    /* k = 13 */
    lo = Math.imul(al9, bl4);
    mid = Math.imul(al9, bh4);
    mid = (mid + Math.imul(ah9, bl4)) | 0;
    hi = Math.imul(ah9, bh4);
    lo = (lo + Math.imul(al8, bl5)) | 0;
    mid = (mid + Math.imul(al8, bh5)) | 0;
    mid = (mid + Math.imul(ah8, bl5)) | 0;
    hi = (hi + Math.imul(ah8, bh5)) | 0;
    lo = (lo + Math.imul(al7, bl6)) | 0;
    mid = (mid + Math.imul(al7, bh6)) | 0;
    mid = (mid + Math.imul(ah7, bl6)) | 0;
    hi = (hi + Math.imul(ah7, bh6)) | 0;
    lo = (lo + Math.imul(al6, bl7)) | 0;
    mid = (mid + Math.imul(al6, bh7)) | 0;
    mid = (mid + Math.imul(ah6, bl7)) | 0;
    hi = (hi + Math.imul(ah6, bh7)) | 0;
    lo = (lo + Math.imul(al5, bl8)) | 0;
    mid = (mid + Math.imul(al5, bh8)) | 0;
    mid = (mid + Math.imul(ah5, bl8)) | 0;
    hi = (hi + Math.imul(ah5, bh8)) | 0;
    lo = (lo + Math.imul(al4, bl9)) | 0;
    mid = (mid + Math.imul(al4, bh9)) | 0;
    mid = (mid + Math.imul(ah4, bl9)) | 0;
    hi = (hi + Math.imul(ah4, bh9)) | 0;
    var w13 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w13 >>> 26)) | 0;
    w13 &= 0x3ffffff;
    /* k = 14 */
    lo = Math.imul(al9, bl5);
    mid = Math.imul(al9, bh5);
    mid = (mid + Math.imul(ah9, bl5)) | 0;
    hi = Math.imul(ah9, bh5);
    lo = (lo + Math.imul(al8, bl6)) | 0;
    mid = (mid + Math.imul(al8, bh6)) | 0;
    mid = (mid + Math.imul(ah8, bl6)) | 0;
    hi = (hi + Math.imul(ah8, bh6)) | 0;
    lo = (lo + Math.imul(al7, bl7)) | 0;
    mid = (mid + Math.imul(al7, bh7)) | 0;
    mid = (mid + Math.imul(ah7, bl7)) | 0;
    hi = (hi + Math.imul(ah7, bh7)) | 0;
    lo = (lo + Math.imul(al6, bl8)) | 0;
    mid = (mid + Math.imul(al6, bh8)) | 0;
    mid = (mid + Math.imul(ah6, bl8)) | 0;
    hi = (hi + Math.imul(ah6, bh8)) | 0;
    lo = (lo + Math.imul(al5, bl9)) | 0;
    mid = (mid + Math.imul(al5, bh9)) | 0;
    mid = (mid + Math.imul(ah5, bl9)) | 0;
    hi = (hi + Math.imul(ah5, bh9)) | 0;
    var w14 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w14 >>> 26)) | 0;
    w14 &= 0x3ffffff;
    /* k = 15 */
    lo = Math.imul(al9, bl6);
    mid = Math.imul(al9, bh6);
    mid = (mid + Math.imul(ah9, bl6)) | 0;
    hi = Math.imul(ah9, bh6);
    lo = (lo + Math.imul(al8, bl7)) | 0;
    mid = (mid + Math.imul(al8, bh7)) | 0;
    mid = (mid + Math.imul(ah8, bl7)) | 0;
    hi = (hi + Math.imul(ah8, bh7)) | 0;
    lo = (lo + Math.imul(al7, bl8)) | 0;
    mid = (mid + Math.imul(al7, bh8)) | 0;
    mid = (mid + Math.imul(ah7, bl8)) | 0;
    hi = (hi + Math.imul(ah7, bh8)) | 0;
    lo = (lo + Math.imul(al6, bl9)) | 0;
    mid = (mid + Math.imul(al6, bh9)) | 0;
    mid = (mid + Math.imul(ah6, bl9)) | 0;
    hi = (hi + Math.imul(ah6, bh9)) | 0;
    var w15 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w15 >>> 26)) | 0;
    w15 &= 0x3ffffff;
    /* k = 16 */
    lo = Math.imul(al9, bl7);
    mid = Math.imul(al9, bh7);
    mid = (mid + Math.imul(ah9, bl7)) | 0;
    hi = Math.imul(ah9, bh7);
    lo = (lo + Math.imul(al8, bl8)) | 0;
    mid = (mid + Math.imul(al8, bh8)) | 0;
    mid = (mid + Math.imul(ah8, bl8)) | 0;
    hi = (hi + Math.imul(ah8, bh8)) | 0;
    lo = (lo + Math.imul(al7, bl9)) | 0;
    mid = (mid + Math.imul(al7, bh9)) | 0;
    mid = (mid + Math.imul(ah7, bl9)) | 0;
    hi = (hi + Math.imul(ah7, bh9)) | 0;
    var w16 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w16 >>> 26)) | 0;
    w16 &= 0x3ffffff;
    /* k = 17 */
    lo = Math.imul(al9, bl8);
    mid = Math.imul(al9, bh8);
    mid = (mid + Math.imul(ah9, bl8)) | 0;
    hi = Math.imul(ah9, bh8);
    lo = (lo + Math.imul(al8, bl9)) | 0;
    mid = (mid + Math.imul(al8, bh9)) | 0;
    mid = (mid + Math.imul(ah8, bl9)) | 0;
    hi = (hi + Math.imul(ah8, bh9)) | 0;
    var w17 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w17 >>> 26)) | 0;
    w17 &= 0x3ffffff;
    /* k = 18 */
    lo = Math.imul(al9, bl9);
    mid = Math.imul(al9, bh9);
    mid = (mid + Math.imul(ah9, bl9)) | 0;
    hi = Math.imul(ah9, bh9);
    var w18 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w18 >>> 26)) | 0;
    w18 &= 0x3ffffff;
    o[0] = w0;
    o[1] = w1;
    o[2] = w2;
    o[3] = w3;
    o[4] = w4;
    o[5] = w5;
    o[6] = w6;
    o[7] = w7;
    o[8] = w8;
    o[9] = w9;
    o[10] = w10;
    o[11] = w11;
    o[12] = w12;
    o[13] = w13;
    o[14] = w14;
    o[15] = w15;
    o[16] = w16;
    o[17] = w17;
    o[18] = w18;
    if (c !== 0) {
      o[19] = c;
      out.length++;
    }
    return out;
  };

  // Polyfill comb
  if (!Math.imul) {
    comb10MulTo = smallMulTo;
  }

  function bigMulTo (self, num, out) {
    out.negative = num.negative ^ self.negative;
    out.length = self.length + num.length;

    var carry = 0;
    var hncarry = 0;
    for (var k = 0; k < out.length - 1; k++) {
      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
      // note that ncarry could be >= 0x3ffffff
      var ncarry = hncarry;
      hncarry = 0;
      var rword = carry & 0x3ffffff;
      var maxJ = Math.min(k, num.length - 1);
      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
        var i = k - j;
        var a = self.words[i] | 0;
        var b = num.words[j] | 0;
        var r = a * b;

        var lo = r & 0x3ffffff;
        ncarry = (ncarry + ((r / 0x4000000) | 0)) | 0;
        lo = (lo + rword) | 0;
        rword = lo & 0x3ffffff;
        ncarry = (ncarry + (lo >>> 26)) | 0;

        hncarry += ncarry >>> 26;
        ncarry &= 0x3ffffff;
      }
      out.words[k] = rword;
      carry = ncarry;
      ncarry = hncarry;
    }
    if (carry !== 0) {
      out.words[k] = carry;
    } else {
      out.length--;
    }

    return out.strip();
  }

  function jumboMulTo (self, num, out) {
    var fftm = new FFTM();
    return fftm.mulp(self, num, out);
  }

  BN.prototype.mulTo = function mulTo (num, out) {
    var res;
    var len = this.length + num.length;
    if (this.length === 10 && num.length === 10) {
      res = comb10MulTo(this, num, out);
    } else if (len < 63) {
      res = smallMulTo(this, num, out);
    } else if (len < 1024) {
      res = bigMulTo(this, num, out);
    } else {
      res = jumboMulTo(this, num, out);
    }

    return res;
  };

  // Cooley-Tukey algorithm for FFT
  // slightly revisited to rely on looping instead of recursion

  function FFTM (x, y) {
    this.x = x;
    this.y = y;
  }

  FFTM.prototype.makeRBT = function makeRBT (N) {
    var t = new Array(N);
    var l = BN.prototype._countBits(N) - 1;
    for (var i = 0; i < N; i++) {
      t[i] = this.revBin(i, l, N);
    }

    return t;
  };

  // Returns binary-reversed representation of `x`
  FFTM.prototype.revBin = function revBin (x, l, N) {
    if (x === 0 || x === N - 1) return x;

    var rb = 0;
    for (var i = 0; i < l; i++) {
      rb |= (x & 1) << (l - i - 1);
      x >>= 1;
    }

    return rb;
  };

  // Performs "tweedling" phase, therefore 'emulating'
  // behaviour of the recursive algorithm
  FFTM.prototype.permute = function permute (rbt, rws, iws, rtws, itws, N) {
    for (var i = 0; i < N; i++) {
      rtws[i] = rws[rbt[i]];
      itws[i] = iws[rbt[i]];
    }
  };

  FFTM.prototype.transform = function transform (rws, iws, rtws, itws, N, rbt) {
    this.permute(rbt, rws, iws, rtws, itws, N);

    for (var s = 1; s < N; s <<= 1) {
      var l = s << 1;

      var rtwdf = Math.cos(2 * Math.PI / l);
      var itwdf = Math.sin(2 * Math.PI / l);

      for (var p = 0; p < N; p += l) {
        var rtwdf_ = rtwdf;
        var itwdf_ = itwdf;

        for (var j = 0; j < s; j++) {
          var re = rtws[p + j];
          var ie = itws[p + j];

          var ro = rtws[p + j + s];
          var io = itws[p + j + s];

          var rx = rtwdf_ * ro - itwdf_ * io;

          io = rtwdf_ * io + itwdf_ * ro;
          ro = rx;

          rtws[p + j] = re + ro;
          itws[p + j] = ie + io;

          rtws[p + j + s] = re - ro;
          itws[p + j + s] = ie - io;

          /* jshint maxdepth : false */
          if (j !== l) {
            rx = rtwdf * rtwdf_ - itwdf * itwdf_;

            itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
            rtwdf_ = rx;
          }
        }
      }
    }
  };

  FFTM.prototype.guessLen13b = function guessLen13b (n, m) {
    var N = Math.max(m, n) | 1;
    var odd = N & 1;
    var i = 0;
    for (N = N / 2 | 0; N; N = N >>> 1) {
      i++;
    }

    return 1 << i + 1 + odd;
  };

  FFTM.prototype.conjugate = function conjugate (rws, iws, N) {
    if (N <= 1) return;

    for (var i = 0; i < N / 2; i++) {
      var t = rws[i];

      rws[i] = rws[N - i - 1];
      rws[N - i - 1] = t;

      t = iws[i];

      iws[i] = -iws[N - i - 1];
      iws[N - i - 1] = -t;
    }
  };

  FFTM.prototype.normalize13b = function normalize13b (ws, N) {
    var carry = 0;
    for (var i = 0; i < N / 2; i++) {
      var w = Math.round(ws[2 * i + 1] / N) * 0x2000 +
        Math.round(ws[2 * i] / N) +
        carry;

      ws[i] = w & 0x3ffffff;

      if (w < 0x4000000) {
        carry = 0;
      } else {
        carry = w / 0x4000000 | 0;
      }
    }

    return ws;
  };

  FFTM.prototype.convert13b = function convert13b (ws, len, rws, N) {
    var carry = 0;
    for (var i = 0; i < len; i++) {
      carry = carry + (ws[i] | 0);

      rws[2 * i] = carry & 0x1fff; carry = carry >>> 13;
      rws[2 * i + 1] = carry & 0x1fff; carry = carry >>> 13;
    }

    // Pad with zeroes
    for (i = 2 * len; i < N; ++i) {
      rws[i] = 0;
    }

    assert(carry === 0);
    assert((carry & ~0x1fff) === 0);
  };

  FFTM.prototype.stub = function stub (N) {
    var ph = new Array(N);
    for (var i = 0; i < N; i++) {
      ph[i] = 0;
    }

    return ph;
  };

  FFTM.prototype.mulp = function mulp (x, y, out) {
    var N = 2 * this.guessLen13b(x.length, y.length);

    var rbt = this.makeRBT(N);

    var _ = this.stub(N);

    var rws = new Array(N);
    var rwst = new Array(N);
    var iwst = new Array(N);

    var nrws = new Array(N);
    var nrwst = new Array(N);
    var niwst = new Array(N);

    var rmws = out.words;
    rmws.length = N;

    this.convert13b(x.words, x.length, rws, N);
    this.convert13b(y.words, y.length, nrws, N);

    this.transform(rws, _, rwst, iwst, N, rbt);
    this.transform(nrws, _, nrwst, niwst, N, rbt);

    for (var i = 0; i < N; i++) {
      var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
      iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
      rwst[i] = rx;
    }

    this.conjugate(rwst, iwst, N);
    this.transform(rwst, iwst, rmws, _, N, rbt);
    this.conjugate(rmws, _, N);
    this.normalize13b(rmws, N);

    out.negative = x.negative ^ y.negative;
    out.length = x.length + y.length;
    return out.strip();
  };

  // Multiply `this` by `num`
  BN.prototype.mul = function mul (num) {
    var out = new BN(null);
    out.words = new Array(this.length + num.length);
    return this.mulTo(num, out);
  };

  // Multiply employing FFT
  BN.prototype.mulf = function mulf (num) {
    var out = new BN(null);
    out.words = new Array(this.length + num.length);
    return jumboMulTo(this, num, out);
  };

  // In-place Multiplication
  BN.prototype.imul = function imul (num) {
    return this.clone().mulTo(num, this);
  };

  BN.prototype.imuln = function imuln (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);

    // Carry
    var carry = 0;
    for (var i = 0; i < this.length; i++) {
      var w = (this.words[i] | 0) * num;
      var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
      carry >>= 26;
      carry += (w / 0x4000000) | 0;
      // NOTE: lo is 27bit maximum
      carry += lo >>> 26;
      this.words[i] = lo & 0x3ffffff;
    }

    if (carry !== 0) {
      this.words[i] = carry;
      this.length++;
    }

    return this;
  };

  BN.prototype.muln = function muln (num) {
    return this.clone().imuln(num);
  };

  // `this` * `this`
  BN.prototype.sqr = function sqr () {
    return this.mul(this);
  };

  // `this` * `this` in-place
  BN.prototype.isqr = function isqr () {
    return this.imul(this.clone());
  };

  // Math.pow(`this`, `num`)
  BN.prototype.pow = function pow (num) {
    var w = toBitArray(num);
    if (w.length === 0) return new BN(1);

    // Skip leading zeroes
    var res = this;
    for (var i = 0; i < w.length; i++, res = res.sqr()) {
      if (w[i] !== 0) break;
    }

    if (++i < w.length) {
      for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
        if (w[i] === 0) continue;

        res = res.mul(q);
      }
    }

    return res;
  };

  // Shift-left in-place
  BN.prototype.iushln = function iushln (bits) {
    assert(typeof bits === 'number' && bits >= 0);
    var r = bits % 26;
    var s = (bits - r) / 26;
    var carryMask = (0x3ffffff >>> (26 - r)) << (26 - r);
    var i;

    if (r !== 0) {
      var carry = 0;

      for (i = 0; i < this.length; i++) {
        var newCarry = this.words[i] & carryMask;
        var c = ((this.words[i] | 0) - newCarry) << r;
        this.words[i] = c | carry;
        carry = newCarry >>> (26 - r);
      }

      if (carry) {
        this.words[i] = carry;
        this.length++;
      }
    }

    if (s !== 0) {
      for (i = this.length - 1; i >= 0; i--) {
        this.words[i + s] = this.words[i];
      }

      for (i = 0; i < s; i++) {
        this.words[i] = 0;
      }

      this.length += s;
    }

    return this.strip();
  };

  BN.prototype.ishln = function ishln (bits) {
    // TODO(indutny): implement me
    assert(this.negative === 0);
    return this.iushln(bits);
  };

  // Shift-right in-place
  // NOTE: `hint` is a lowest bit before trailing zeroes
  // NOTE: if `extended` is present - it will be filled with destroyed bits
  BN.prototype.iushrn = function iushrn (bits, hint, extended) {
    assert(typeof bits === 'number' && bits >= 0);
    var h;
    if (hint) {
      h = (hint - (hint % 26)) / 26;
    } else {
      h = 0;
    }

    var r = bits % 26;
    var s = Math.min((bits - r) / 26, this.length);
    var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
    var maskedWords = extended;

    h -= s;
    h = Math.max(0, h);

    // Extended mode, copy masked part
    if (maskedWords) {
      for (var i = 0; i < s; i++) {
        maskedWords.words[i] = this.words[i];
      }
      maskedWords.length = s;
    }

    if (s === 0) {
      // No-op, we should not move anything at all
    } else if (this.length > s) {
      this.length -= s;
      for (i = 0; i < this.length; i++) {
        this.words[i] = this.words[i + s];
      }
    } else {
      this.words[0] = 0;
      this.length = 1;
    }

    var carry = 0;
    for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
      var word = this.words[i] | 0;
      this.words[i] = (carry << (26 - r)) | (word >>> r);
      carry = word & mask;
    }

    // Push carried bits as a mask
    if (maskedWords && carry !== 0) {
      maskedWords.words[maskedWords.length++] = carry;
    }

    if (this.length === 0) {
      this.words[0] = 0;
      this.length = 1;
    }

    return this.strip();
  };

  BN.prototype.ishrn = function ishrn (bits, hint, extended) {
    // TODO(indutny): implement me
    assert(this.negative === 0);
    return this.iushrn(bits, hint, extended);
  };

  // Shift-left
  BN.prototype.shln = function shln (bits) {
    return this.clone().ishln(bits);
  };

  BN.prototype.ushln = function ushln (bits) {
    return this.clone().iushln(bits);
  };

  // Shift-right
  BN.prototype.shrn = function shrn (bits) {
    return this.clone().ishrn(bits);
  };

  BN.prototype.ushrn = function ushrn (bits) {
    return this.clone().iushrn(bits);
  };

  // Test if n bit is set
  BN.prototype.testn = function testn (bit) {
    assert(typeof bit === 'number' && bit >= 0);
    var r = bit % 26;
    var s = (bit - r) / 26;
    var q = 1 << r;

    // Fast case: bit is much higher than all existing words
    if (this.length <= s) return false;

    // Check bit and return
    var w = this.words[s];

    return !!(w & q);
  };

  // Return only lowers bits of number (in-place)
  BN.prototype.imaskn = function imaskn (bits) {
    assert(typeof bits === 'number' && bits >= 0);
    var r = bits % 26;
    var s = (bits - r) / 26;

    assert(this.negative === 0, 'imaskn works only with positive numbers');

    if (this.length <= s) {
      return this;
    }

    if (r !== 0) {
      s++;
    }
    this.length = Math.min(s, this.length);

    if (r !== 0) {
      var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
      this.words[this.length - 1] &= mask;
    }

    return this.strip();
  };

  // Return only lowers bits of number
  BN.prototype.maskn = function maskn (bits) {
    return this.clone().imaskn(bits);
  };

  // Add plain number `num` to `this`
  BN.prototype.iaddn = function iaddn (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);
    if (num < 0) return this.isubn(-num);

    // Possible sign change
    if (this.negative !== 0) {
      if (this.length === 1 && (this.words[0] | 0) < num) {
        this.words[0] = num - (this.words[0] | 0);
        this.negative = 0;
        return this;
      }

      this.negative = 0;
      this.isubn(num);
      this.negative = 1;
      return this;
    }

    // Add without checks
    return this._iaddn(num);
  };

  BN.prototype._iaddn = function _iaddn (num) {
    this.words[0] += num;

    // Carry
    for (var i = 0; i < this.length && this.words[i] >= 0x4000000; i++) {
      this.words[i] -= 0x4000000;
      if (i === this.length - 1) {
        this.words[i + 1] = 1;
      } else {
        this.words[i + 1]++;
      }
    }
    this.length = Math.max(this.length, i + 1);

    return this;
  };

  // Subtract plain number `num` from `this`
  BN.prototype.isubn = function isubn (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);
    if (num < 0) return this.iaddn(-num);

    if (this.negative !== 0) {
      this.negative = 0;
      this.iaddn(num);
      this.negative = 1;
      return this;
    }

    this.words[0] -= num;

    if (this.length === 1 && this.words[0] < 0) {
      this.words[0] = -this.words[0];
      this.negative = 1;
    } else {
      // Carry
      for (var i = 0; i < this.length && this.words[i] < 0; i++) {
        this.words[i] += 0x4000000;
        this.words[i + 1] -= 1;
      }
    }

    return this.strip();
  };

  BN.prototype.addn = function addn (num) {
    return this.clone().iaddn(num);
  };

  BN.prototype.subn = function subn (num) {
    return this.clone().isubn(num);
  };

  BN.prototype.iabs = function iabs () {
    this.negative = 0;

    return this;
  };

  BN.prototype.abs = function abs () {
    return this.clone().iabs();
  };

  BN.prototype._ishlnsubmul = function _ishlnsubmul (num, mul, shift) {
    var len = num.length + shift;
    var i;

    this._expand(len);

    var w;
    var carry = 0;
    for (i = 0; i < num.length; i++) {
      w = (this.words[i + shift] | 0) + carry;
      var right = (num.words[i] | 0) * mul;
      w -= right & 0x3ffffff;
      carry = (w >> 26) - ((right / 0x4000000) | 0);
      this.words[i + shift] = w & 0x3ffffff;
    }
    for (; i < this.length - shift; i++) {
      w = (this.words[i + shift] | 0) + carry;
      carry = w >> 26;
      this.words[i + shift] = w & 0x3ffffff;
    }

    if (carry === 0) return this.strip();

    // Subtraction overflow
    assert(carry === -1);
    carry = 0;
    for (i = 0; i < this.length; i++) {
      w = -(this.words[i] | 0) + carry;
      carry = w >> 26;
      this.words[i] = w & 0x3ffffff;
    }
    this.negative = 1;

    return this.strip();
  };

  BN.prototype._wordDiv = function _wordDiv (num, mode) {
    var shift = this.length - num.length;

    var a = this.clone();
    var b = num;

    // Normalize
    var bhi = b.words[b.length - 1] | 0;
    var bhiBits = this._countBits(bhi);
    shift = 26 - bhiBits;
    if (shift !== 0) {
      b = b.ushln(shift);
      a.iushln(shift);
      bhi = b.words[b.length - 1] | 0;
    }

    // Initialize quotient
    var m = a.length - b.length;
    var q;

    if (mode !== 'mod') {
      q = new BN(null);
      q.length = m + 1;
      q.words = new Array(q.length);
      for (var i = 0; i < q.length; i++) {
        q.words[i] = 0;
      }
    }

    var diff = a.clone()._ishlnsubmul(b, 1, m);
    if (diff.negative === 0) {
      a = diff;
      if (q) {
        q.words[m] = 1;
      }
    }

    for (var j = m - 1; j >= 0; j--) {
      var qj = (a.words[b.length + j] | 0) * 0x4000000 +
        (a.words[b.length + j - 1] | 0);

      // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
      // (0x7ffffff)
      qj = Math.min((qj / bhi) | 0, 0x3ffffff);

      a._ishlnsubmul(b, qj, j);
      while (a.negative !== 0) {
        qj--;
        a.negative = 0;
        a._ishlnsubmul(b, 1, j);
        if (!a.isZero()) {
          a.negative ^= 1;
        }
      }
      if (q) {
        q.words[j] = qj;
      }
    }
    if (q) {
      q.strip();
    }
    a.strip();

    // Denormalize
    if (mode !== 'div' && shift !== 0) {
      a.iushrn(shift);
    }

    return {
      div: q || null,
      mod: a
    };
  };

  // NOTE: 1) `mode` can be set to `mod` to request mod only,
  //       to `div` to request div only, or be absent to
  //       request both div & mod
  //       2) `positive` is true if unsigned mod is requested
  BN.prototype.divmod = function divmod (num, mode, positive) {
    assert(!num.isZero());

    if (this.isZero()) {
      return {
        div: new BN(0),
        mod: new BN(0)
      };
    }

    var div, mod, res;
    if (this.negative !== 0 && num.negative === 0) {
      res = this.neg().divmod(num, mode);

      if (mode !== 'mod') {
        div = res.div.neg();
      }

      if (mode !== 'div') {
        mod = res.mod.neg();
        if (positive && mod.negative !== 0) {
          mod.iadd(num);
        }
      }

      return {
        div: div,
        mod: mod
      };
    }

    if (this.negative === 0 && num.negative !== 0) {
      res = this.divmod(num.neg(), mode);

      if (mode !== 'mod') {
        div = res.div.neg();
      }

      return {
        div: div,
        mod: res.mod
      };
    }

    if ((this.negative & num.negative) !== 0) {
      res = this.neg().divmod(num.neg(), mode);

      if (mode !== 'div') {
        mod = res.mod.neg();
        if (positive && mod.negative !== 0) {
          mod.isub(num);
        }
      }

      return {
        div: res.div,
        mod: mod
      };
    }

    // Both numbers are positive at this point

    // Strip both numbers to approximate shift value
    if (num.length > this.length || this.cmp(num) < 0) {
      return {
        div: new BN(0),
        mod: this
      };
    }

    // Very short reduction
    if (num.length === 1) {
      if (mode === 'div') {
        return {
          div: this.divn(num.words[0]),
          mod: null
        };
      }

      if (mode === 'mod') {
        return {
          div: null,
          mod: new BN(this.modn(num.words[0]))
        };
      }

      return {
        div: this.divn(num.words[0]),
        mod: new BN(this.modn(num.words[0]))
      };
    }

    return this._wordDiv(num, mode);
  };

  // Find `this` / `num`
  BN.prototype.div = function div (num) {
    return this.divmod(num, 'div', false).div;
  };

  // Find `this` % `num`
  BN.prototype.mod = function mod (num) {
    return this.divmod(num, 'mod', false).mod;
  };

  BN.prototype.umod = function umod (num) {
    return this.divmod(num, 'mod', true).mod;
  };

  // Find Round(`this` / `num`)
  BN.prototype.divRound = function divRound (num) {
    var dm = this.divmod(num);

    // Fast case - exact division
    if (dm.mod.isZero()) return dm.div;

    var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;

    var half = num.ushrn(1);
    var r2 = num.andln(1);
    var cmp = mod.cmp(half);

    // Round down
    if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div;

    // Round up
    return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
  };

  BN.prototype.modn = function modn (num) {
    assert(num <= 0x3ffffff);
    var p = (1 << 26) % num;

    var acc = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      acc = (p * acc + (this.words[i] | 0)) % num;
    }

    return acc;
  };

  // In-place division by number
  BN.prototype.idivn = function idivn (num) {
    assert(num <= 0x3ffffff);

    var carry = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      var w = (this.words[i] | 0) + carry * 0x4000000;
      this.words[i] = (w / num) | 0;
      carry = w % num;
    }

    return this.strip();
  };

  BN.prototype.divn = function divn (num) {
    return this.clone().idivn(num);
  };

  BN.prototype.egcd = function egcd (p) {
    assert(p.negative === 0);
    assert(!p.isZero());

    var x = this;
    var y = p.clone();

    if (x.negative !== 0) {
      x = x.umod(p);
    } else {
      x = x.clone();
    }

    // A * x + B * y = x
    var A = new BN(1);
    var B = new BN(0);

    // C * x + D * y = y
    var C = new BN(0);
    var D = new BN(1);

    var g = 0;

    while (x.isEven() && y.isEven()) {
      x.iushrn(1);
      y.iushrn(1);
      ++g;
    }

    var yp = y.clone();
    var xp = x.clone();

    while (!x.isZero()) {
      for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
      if (i > 0) {
        x.iushrn(i);
        while (i-- > 0) {
          if (A.isOdd() || B.isOdd()) {
            A.iadd(yp);
            B.isub(xp);
          }

          A.iushrn(1);
          B.iushrn(1);
        }
      }

      for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
      if (j > 0) {
        y.iushrn(j);
        while (j-- > 0) {
          if (C.isOdd() || D.isOdd()) {
            C.iadd(yp);
            D.isub(xp);
          }

          C.iushrn(1);
          D.iushrn(1);
        }
      }

      if (x.cmp(y) >= 0) {
        x.isub(y);
        A.isub(C);
        B.isub(D);
      } else {
        y.isub(x);
        C.isub(A);
        D.isub(B);
      }
    }

    return {
      a: C,
      b: D,
      gcd: y.iushln(g)
    };
  };

  // This is reduced incarnation of the binary EEA
  // above, designated to invert members of the
  // _prime_ fields F(p) at a maximal speed
  BN.prototype._invmp = function _invmp (p) {
    assert(p.negative === 0);
    assert(!p.isZero());

    var a = this;
    var b = p.clone();

    if (a.negative !== 0) {
      a = a.umod(p);
    } else {
      a = a.clone();
    }

    var x1 = new BN(1);
    var x2 = new BN(0);

    var delta = b.clone();

    while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
      for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
      if (i > 0) {
        a.iushrn(i);
        while (i-- > 0) {
          if (x1.isOdd()) {
            x1.iadd(delta);
          }

          x1.iushrn(1);
        }
      }

      for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
      if (j > 0) {
        b.iushrn(j);
        while (j-- > 0) {
          if (x2.isOdd()) {
            x2.iadd(delta);
          }

          x2.iushrn(1);
        }
      }

      if (a.cmp(b) >= 0) {
        a.isub(b);
        x1.isub(x2);
      } else {
        b.isub(a);
        x2.isub(x1);
      }
    }

    var res;
    if (a.cmpn(1) === 0) {
      res = x1;
    } else {
      res = x2;
    }

    if (res.cmpn(0) < 0) {
      res.iadd(p);
    }

    return res;
  };

  BN.prototype.gcd = function gcd (num) {
    if (this.isZero()) return num.abs();
    if (num.isZero()) return this.abs();

    var a = this.clone();
    var b = num.clone();
    a.negative = 0;
    b.negative = 0;

    // Remove common factor of two
    for (var shift = 0; a.isEven() && b.isEven(); shift++) {
      a.iushrn(1);
      b.iushrn(1);
    }

    do {
      while (a.isEven()) {
        a.iushrn(1);
      }
      while (b.isEven()) {
        b.iushrn(1);
      }

      var r = a.cmp(b);
      if (r < 0) {
        // Swap `a` and `b` to make `a` always bigger than `b`
        var t = a;
        a = b;
        b = t;
      } else if (r === 0 || b.cmpn(1) === 0) {
        break;
      }

      a.isub(b);
    } while (true);

    return b.iushln(shift);
  };

  // Invert number in the field F(num)
  BN.prototype.invm = function invm (num) {
    return this.egcd(num).a.umod(num);
  };

  BN.prototype.isEven = function isEven () {
    return (this.words[0] & 1) === 0;
  };

  BN.prototype.isOdd = function isOdd () {
    return (this.words[0] & 1) === 1;
  };

  // And first word and num
  BN.prototype.andln = function andln (num) {
    return this.words[0] & num;
  };

  // Increment at the bit position in-line
  BN.prototype.bincn = function bincn (bit) {
    assert(typeof bit === 'number');
    var r = bit % 26;
    var s = (bit - r) / 26;
    var q = 1 << r;

    // Fast case: bit is much higher than all existing words
    if (this.length <= s) {
      this._expand(s + 1);
      this.words[s] |= q;
      return this;
    }

    // Add bit and propagate, if needed
    var carry = q;
    for (var i = s; carry !== 0 && i < this.length; i++) {
      var w = this.words[i] | 0;
      w += carry;
      carry = w >>> 26;
      w &= 0x3ffffff;
      this.words[i] = w;
    }
    if (carry !== 0) {
      this.words[i] = carry;
      this.length++;
    }
    return this;
  };

  BN.prototype.isZero = function isZero () {
    return this.length === 1 && this.words[0] === 0;
  };

  BN.prototype.cmpn = function cmpn (num) {
    var negative = num < 0;

    if (this.negative !== 0 && !negative) return -1;
    if (this.negative === 0 && negative) return 1;

    this.strip();

    var res;
    if (this.length > 1) {
      res = 1;
    } else {
      if (negative) {
        num = -num;
      }

      assert(num <= 0x3ffffff, 'Number is too big');

      var w = this.words[0] | 0;
      res = w === num ? 0 : w < num ? -1 : 1;
    }
    if (this.negative !== 0) return -res | 0;
    return res;
  };

  // Compare two numbers and return:
  // 1 - if `this` > `num`
  // 0 - if `this` == `num`
  // -1 - if `this` < `num`
  BN.prototype.cmp = function cmp (num) {
    if (this.negative !== 0 && num.negative === 0) return -1;
    if (this.negative === 0 && num.negative !== 0) return 1;

    var res = this.ucmp(num);
    if (this.negative !== 0) return -res | 0;
    return res;
  };

  // Unsigned comparison
  BN.prototype.ucmp = function ucmp (num) {
    // At this point both numbers have the same sign
    if (this.length > num.length) return 1;
    if (this.length < num.length) return -1;

    var res = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      var a = this.words[i] | 0;
      var b = num.words[i] | 0;

      if (a === b) continue;
      if (a < b) {
        res = -1;
      } else if (a > b) {
        res = 1;
      }
      break;
    }
    return res;
  };

  BN.prototype.gtn = function gtn (num) {
    return this.cmpn(num) === 1;
  };

  BN.prototype.gt = function gt (num) {
    return this.cmp(num) === 1;
  };

  BN.prototype.gten = function gten (num) {
    return this.cmpn(num) >= 0;
  };

  BN.prototype.gte = function gte (num) {
    return this.cmp(num) >= 0;
  };

  BN.prototype.ltn = function ltn (num) {
    return this.cmpn(num) === -1;
  };

  BN.prototype.lt = function lt (num) {
    return this.cmp(num) === -1;
  };

  BN.prototype.lten = function lten (num) {
    return this.cmpn(num) <= 0;
  };

  BN.prototype.lte = function lte (num) {
    return this.cmp(num) <= 0;
  };

  BN.prototype.eqn = function eqn (num) {
    return this.cmpn(num) === 0;
  };

  BN.prototype.eq = function eq (num) {
    return this.cmp(num) === 0;
  };

  //
  // A reduce context, could be using montgomery or something better, depending
  // on the `m` itself.
  //
  BN.red = function red (num) {
    return new Red(num);
  };

  BN.prototype.toRed = function toRed (ctx) {
    assert(!this.red, 'Already a number in reduction context');
    assert(this.negative === 0, 'red works only with positives');
    return ctx.convertTo(this)._forceRed(ctx);
  };

  BN.prototype.fromRed = function fromRed () {
    assert(this.red, 'fromRed works only with numbers in reduction context');
    return this.red.convertFrom(this);
  };

  BN.prototype._forceRed = function _forceRed (ctx) {
    this.red = ctx;
    return this;
  };

  BN.prototype.forceRed = function forceRed (ctx) {
    assert(!this.red, 'Already a number in reduction context');
    return this._forceRed(ctx);
  };

  BN.prototype.redAdd = function redAdd (num) {
    assert(this.red, 'redAdd works only with red numbers');
    return this.red.add(this, num);
  };

  BN.prototype.redIAdd = function redIAdd (num) {
    assert(this.red, 'redIAdd works only with red numbers');
    return this.red.iadd(this, num);
  };

  BN.prototype.redSub = function redSub (num) {
    assert(this.red, 'redSub works only with red numbers');
    return this.red.sub(this, num);
  };

  BN.prototype.redISub = function redISub (num) {
    assert(this.red, 'redISub works only with red numbers');
    return this.red.isub(this, num);
  };

  BN.prototype.redShl = function redShl (num) {
    assert(this.red, 'redShl works only with red numbers');
    return this.red.shl(this, num);
  };

  BN.prototype.redMul = function redMul (num) {
    assert(this.red, 'redMul works only with red numbers');
    this.red._verify2(this, num);
    return this.red.mul(this, num);
  };

  BN.prototype.redIMul = function redIMul (num) {
    assert(this.red, 'redMul works only with red numbers');
    this.red._verify2(this, num);
    return this.red.imul(this, num);
  };

  BN.prototype.redSqr = function redSqr () {
    assert(this.red, 'redSqr works only with red numbers');
    this.red._verify1(this);
    return this.red.sqr(this);
  };

  BN.prototype.redISqr = function redISqr () {
    assert(this.red, 'redISqr works only with red numbers');
    this.red._verify1(this);
    return this.red.isqr(this);
  };

  // Square root over p
  BN.prototype.redSqrt = function redSqrt () {
    assert(this.red, 'redSqrt works only with red numbers');
    this.red._verify1(this);
    return this.red.sqrt(this);
  };

  BN.prototype.redInvm = function redInvm () {
    assert(this.red, 'redInvm works only with red numbers');
    this.red._verify1(this);
    return this.red.invm(this);
  };

  // Return negative clone of `this` % `red modulo`
  BN.prototype.redNeg = function redNeg () {
    assert(this.red, 'redNeg works only with red numbers');
    this.red._verify1(this);
    return this.red.neg(this);
  };

  BN.prototype.redPow = function redPow (num) {
    assert(this.red && !num.red, 'redPow(normalNum)');
    this.red._verify1(this);
    return this.red.pow(this, num);
  };

  // Prime numbers with efficient reduction
  var primes = {
    k256: null,
    p224: null,
    p192: null,
    p25519: null
  };

  // Pseudo-Mersenne prime
  function MPrime (name, p) {
    // P = 2 ^ N - K
    this.name = name;
    this.p = new BN(p, 16);
    this.n = this.p.bitLength();
    this.k = new BN(1).iushln(this.n).isub(this.p);

    this.tmp = this._tmp();
  }

  MPrime.prototype._tmp = function _tmp () {
    var tmp = new BN(null);
    tmp.words = new Array(Math.ceil(this.n / 13));
    return tmp;
  };

  MPrime.prototype.ireduce = function ireduce (num) {
    // Assumes that `num` is less than `P^2`
    // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
    var r = num;
    var rlen;

    do {
      this.split(r, this.tmp);
      r = this.imulK(r);
      r = r.iadd(this.tmp);
      rlen = r.bitLength();
    } while (rlen > this.n);

    var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
    if (cmp === 0) {
      r.words[0] = 0;
      r.length = 1;
    } else if (cmp > 0) {
      r.isub(this.p);
    } else {
      r.strip();
    }

    return r;
  };

  MPrime.prototype.split = function split (input, out) {
    input.iushrn(this.n, 0, out);
  };

  MPrime.prototype.imulK = function imulK (num) {
    return num.imul(this.k);
  };

  function K256 () {
    MPrime.call(
      this,
      'k256',
      'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
  }
  inherits(K256, MPrime);

  K256.prototype.split = function split (input, output) {
    // 256 = 9 * 26 + 22
    var mask = 0x3fffff;

    var outLen = Math.min(input.length, 9);
    for (var i = 0; i < outLen; i++) {
      output.words[i] = input.words[i];
    }
    output.length = outLen;

    if (input.length <= 9) {
      input.words[0] = 0;
      input.length = 1;
      return;
    }

    // Shift by 9 limbs
    var prev = input.words[9];
    output.words[output.length++] = prev & mask;

    for (i = 10; i < input.length; i++) {
      var next = input.words[i] | 0;
      input.words[i - 10] = ((next & mask) << 4) | (prev >>> 22);
      prev = next;
    }
    prev >>>= 22;
    input.words[i - 10] = prev;
    if (prev === 0 && input.length > 10) {
      input.length -= 10;
    } else {
      input.length -= 9;
    }
  };

  K256.prototype.imulK = function imulK (num) {
    // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
    num.words[num.length] = 0;
    num.words[num.length + 1] = 0;
    num.length += 2;

    // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390
    var lo = 0;
    for (var i = 0; i < num.length; i++) {
      var w = num.words[i] | 0;
      lo += w * 0x3d1;
      num.words[i] = lo & 0x3ffffff;
      lo = w * 0x40 + ((lo / 0x4000000) | 0);
    }

    // Fast length reduction
    if (num.words[num.length - 1] === 0) {
      num.length--;
      if (num.words[num.length - 1] === 0) {
        num.length--;
      }
    }
    return num;
  };

  function P224 () {
    MPrime.call(
      this,
      'p224',
      'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
  }
  inherits(P224, MPrime);

  function P192 () {
    MPrime.call(
      this,
      'p192',
      'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
  }
  inherits(P192, MPrime);

  function P25519 () {
    // 2 ^ 255 - 19
    MPrime.call(
      this,
      '25519',
      '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
  }
  inherits(P25519, MPrime);

  P25519.prototype.imulK = function imulK (num) {
    // K = 0x13
    var carry = 0;
    for (var i = 0; i < num.length; i++) {
      var hi = (num.words[i] | 0) * 0x13 + carry;
      var lo = hi & 0x3ffffff;
      hi >>>= 26;

      num.words[i] = lo;
      carry = hi;
    }
    if (carry !== 0) {
      num.words[num.length++] = carry;
    }
    return num;
  };

  // Exported mostly for testing purposes, use plain name instead
  BN._prime = function prime (name) {
    // Cached version of prime
    if (primes[name]) return primes[name];

    var prime;
    if (name === 'k256') {
      prime = new K256();
    } else if (name === 'p224') {
      prime = new P224();
    } else if (name === 'p192') {
      prime = new P192();
    } else if (name === 'p25519') {
      prime = new P25519();
    } else {
      throw new Error('Unknown prime ' + name);
    }
    primes[name] = prime;

    return prime;
  };

  //
  // Base reduction engine
  //
  function Red (m) {
    if (typeof m === 'string') {
      var prime = BN._prime(m);
      this.m = prime.p;
      this.prime = prime;
    } else {
      assert(m.gtn(1), 'modulus must be greater than 1');
      this.m = m;
      this.prime = null;
    }
  }

  Red.prototype._verify1 = function _verify1 (a) {
    assert(a.negative === 0, 'red works only with positives');
    assert(a.red, 'red works only with red numbers');
  };

  Red.prototype._verify2 = function _verify2 (a, b) {
    assert((a.negative | b.negative) === 0, 'red works only with positives');
    assert(a.red && a.red === b.red,
      'red works only with red numbers');
  };

  Red.prototype.imod = function imod (a) {
    if (this.prime) return this.prime.ireduce(a)._forceRed(this);
    return a.umod(this.m)._forceRed(this);
  };

  Red.prototype.neg = function neg (a) {
    if (a.isZero()) {
      return a.clone();
    }

    return this.m.sub(a)._forceRed(this);
  };

  Red.prototype.add = function add (a, b) {
    this._verify2(a, b);

    var res = a.add(b);
    if (res.cmp(this.m) >= 0) {
      res.isub(this.m);
    }
    return res._forceRed(this);
  };

  Red.prototype.iadd = function iadd (a, b) {
    this._verify2(a, b);

    var res = a.iadd(b);
    if (res.cmp(this.m) >= 0) {
      res.isub(this.m);
    }
    return res;
  };

  Red.prototype.sub = function sub (a, b) {
    this._verify2(a, b);

    var res = a.sub(b);
    if (res.cmpn(0) < 0) {
      res.iadd(this.m);
    }
    return res._forceRed(this);
  };

  Red.prototype.isub = function isub (a, b) {
    this._verify2(a, b);

    var res = a.isub(b);
    if (res.cmpn(0) < 0) {
      res.iadd(this.m);
    }
    return res;
  };

  Red.prototype.shl = function shl (a, num) {
    this._verify1(a);
    return this.imod(a.ushln(num));
  };

  Red.prototype.imul = function imul (a, b) {
    this._verify2(a, b);
    return this.imod(a.imul(b));
  };

  Red.prototype.mul = function mul (a, b) {
    this._verify2(a, b);
    return this.imod(a.mul(b));
  };

  Red.prototype.isqr = function isqr (a) {
    return this.imul(a, a.clone());
  };

  Red.prototype.sqr = function sqr (a) {
    return this.mul(a, a);
  };

  Red.prototype.sqrt = function sqrt (a) {
    if (a.isZero()) return a.clone();

    var mod3 = this.m.andln(3);
    assert(mod3 % 2 === 1);

    // Fast case
    if (mod3 === 3) {
      var pow = this.m.add(new BN(1)).iushrn(2);
      return this.pow(a, pow);
    }

    // Tonelli-Shanks algorithm (Totally unoptimized and slow)
    //
    // Find Q and S, that Q * 2 ^ S = (P - 1)
    var q = this.m.subn(1);
    var s = 0;
    while (!q.isZero() && q.andln(1) === 0) {
      s++;
      q.iushrn(1);
    }
    assert(!q.isZero());

    var one = new BN(1).toRed(this);
    var nOne = one.redNeg();

    // Find quadratic non-residue
    // NOTE: Max is such because of generalized Riemann hypothesis.
    var lpow = this.m.subn(1).iushrn(1);
    var z = this.m.bitLength();
    z = new BN(2 * z * z).toRed(this);

    while (this.pow(z, lpow).cmp(nOne) !== 0) {
      z.redIAdd(nOne);
    }

    var c = this.pow(z, q);
    var r = this.pow(a, q.addn(1).iushrn(1));
    var t = this.pow(a, q);
    var m = s;
    while (t.cmp(one) !== 0) {
      var tmp = t;
      for (var i = 0; tmp.cmp(one) !== 0; i++) {
        tmp = tmp.redSqr();
      }
      assert(i < m);
      var b = this.pow(c, new BN(1).iushln(m - i - 1));

      r = r.redMul(b);
      c = b.redSqr();
      t = t.redMul(c);
      m = i;
    }

    return r;
  };

  Red.prototype.invm = function invm (a) {
    var inv = a._invmp(this.m);
    if (inv.negative !== 0) {
      inv.negative = 0;
      return this.imod(inv).redNeg();
    } else {
      return this.imod(inv);
    }
  };

  Red.prototype.pow = function pow (a, num) {
    if (num.isZero()) return new BN(1).toRed(this);
    if (num.cmpn(1) === 0) return a.clone();

    var windowSize = 4;
    var wnd = new Array(1 << windowSize);
    wnd[0] = new BN(1).toRed(this);
    wnd[1] = a;
    for (var i = 2; i < wnd.length; i++) {
      wnd[i] = this.mul(wnd[i - 1], a);
    }

    var res = wnd[0];
    var current = 0;
    var currentLen = 0;
    var start = num.bitLength() % 26;
    if (start === 0) {
      start = 26;
    }

    for (i = num.length - 1; i >= 0; i--) {
      var word = num.words[i];
      for (var j = start - 1; j >= 0; j--) {
        var bit = (word >> j) & 1;
        if (res !== wnd[0]) {
          res = this.sqr(res);
        }

        if (bit === 0 && current === 0) {
          currentLen = 0;
          continue;
        }

        current <<= 1;
        current |= bit;
        currentLen++;
        if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;

        res = this.mul(res, wnd[current]);
        currentLen = 0;
        current = 0;
      }
      start = 26;
    }

    return res;
  };

  Red.prototype.convertTo = function convertTo (num) {
    var r = num.umod(this.m);

    return r === num ? r.clone() : r;
  };

  Red.prototype.convertFrom = function convertFrom (num) {
    var res = num.clone();
    res.red = null;
    return res;
  };

  //
  // Montgomery method engine
  //

  BN.mont = function mont (num) {
    return new Mont(num);
  };

  function Mont (m) {
    Red.call(this, m);

    this.shift = this.m.bitLength();
    if (this.shift % 26 !== 0) {
      this.shift += 26 - (this.shift % 26);
    }

    this.r = new BN(1).iushln(this.shift);
    this.r2 = this.imod(this.r.sqr());
    this.rinv = this.r._invmp(this.m);

    this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
    this.minv = this.minv.umod(this.r);
    this.minv = this.r.sub(this.minv);
  }
  inherits(Mont, Red);

  Mont.prototype.convertTo = function convertTo (num) {
    return this.imod(num.ushln(this.shift));
  };

  Mont.prototype.convertFrom = function convertFrom (num) {
    var r = this.imod(num.mul(this.rinv));
    r.red = null;
    return r;
  };

  Mont.prototype.imul = function imul (a, b) {
    if (a.isZero() || b.isZero()) {
      a.words[0] = 0;
      a.length = 1;
      return a;
    }

    var t = a.imul(b);
    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    var u = t.isub(c).iushrn(this.shift);
    var res = u;

    if (u.cmp(this.m) >= 0) {
      res = u.isub(this.m);
    } else if (u.cmpn(0) < 0) {
      res = u.iadd(this.m);
    }

    return res._forceRed(this);
  };

  Mont.prototype.mul = function mul (a, b) {
    if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);

    var t = a.mul(b);
    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    var u = t.isub(c).iushrn(this.shift);
    var res = u;
    if (u.cmp(this.m) >= 0) {
      res = u.isub(this.m);
    } else if (u.cmpn(0) < 0) {
      res = u.iadd(this.m);
    }

    return res._forceRed(this);
  };

  Mont.prototype.invm = function invm (a) {
    // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
    var res = this.imod(a._invmp(this.m).mul(this.r2));
    return res._forceRed(this);
  };
})(typeof module === 'undefined' || module, this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(64)(module)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * native.js - Native bindings for wmcc_core.
 */
 


exports.binding = null;

if (Number(process.env.WMCC_NO_NATIVE) !== 1) {
  try {
    exports.binding = __webpack_require__(133);
  } catch (e) {
    ;
  }
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * policy.js - WMCC constants for wmcc_core.
 */



/**
 * @module protocol/policy
 */

const assert = __webpack_require__(0);
const consensus = __webpack_require__(7);

/**
 * Maximum transaction version (policy).
 * @const {Number}
 * @default
 */

exports.MAX_TX_VERSION = 2;

/**
 * Maximum transaction base size (policy).
 * @const {Number}
 * @default
 */

exports.MAX_TX_SIZE = consensus.MAX_BLOCK_SIZE / 10;

/**
 * Maximum transaction weight (policy).
 * @const {Number}
 * @default
 */

exports.MAX_TX_WEIGHT = consensus.MAX_BLOCK_WEIGHT / 10;

/**
 * Maximum number of transaction sigops (policy).
 * @const {Number}
 * @default
 */

exports.MAX_TX_SIGOPS = consensus.MAX_BLOCK_SIGOPS / 5;

/**
 * Maximum cost of transaction sigops (policy).
 * @const {Number}
 * @default
 */

exports.MAX_TX_SIGOPS_COST = consensus.MAX_BLOCK_SIGOPS_COST / 5;

/**
 * How much weight a sigop should
 * add to virtual size (policy).
 * @const {Number}
 * @default
 */

exports.BYTES_PER_SIGOP = 20;

/**
 * Minimum relay fee rate (policy).
 * @const {Rate}
 */

exports.MIN_RELAY = 1000;

/**
 * Whether bare multisig outputs
 * should be relayed (policy).
 * @const {Boolean}
 * @default
 */

exports.BARE_MULTISIG = true;

/**
 * Priority threshold for
 * free transactions (policy).
 * @const {Number}
 * @default
 */

exports.FREE_THRESHOLD = consensus.COIN * 144 / 250;

/**
 * Max sigops per redeem script (policy).
 * @const {Number}
 * @default
 */

exports.MAX_P2SH_SIGOPS = 15;

/**
 * Max serialized nulldata size (policy).
 * @const {Number}
 * @default
 */

exports.MAX_OP_RETURN_BYTES = 83;

/**
 * Max pushdata size in nulldata (policy).
 * @const {Number}
 * @default
 */

exports.MAX_OP_RETURN = 80;

/**
 * Max p2wsh stack size. Used for
 * witness malleation checks (policy).
 * @const {Number}
 * @default
 */

exports.MAX_P2WSH_STACK = 100;

/**
 * Max p2wsh push size. Used for
 * witness malleation checks (policy).
 * @const {Number}
 * @default
 */

exports.MAX_P2WSH_PUSH = 80;

/**
 * Max serialized p2wsh size. Used for
 * witness malleation checks (policy).
 * @const {Number}
 * @default
 */

exports.MAX_P2WSH_SIZE = 3600;

/**
 * Default ancestor limit.
 * @const {Number}
 * @default
 */

exports.MEMPOOL_MAX_ANCESTORS = 25;

/**
 * Default maximum mempool size in bytes.
 * @const {Number}
 * @default
 */

exports.MEMPOOL_MAX_SIZE = 100 * 1000000;

/**
 * Time at which transactions
 * fall out of the mempool.
 * @const {Number}
 * @default
 */

exports.MEMPOOL_EXPIRY_TIME = 72 * 60 * 60;

/**
 * Maximum number of orphan transactions.
 * @const {Number}
 * @default
 */

exports.MEMPOOL_MAX_ORPHANS = 100;

/**
 * Minimum block size to create. Block will be
 * filled with free transactions until block
 * reaches this weight.
 * @const {Number}
 * @default
 */

exports.MIN_BLOCK_WEIGHT = 0;

/**
 * Maximum block weight to be mined.
 * @const {Number}
 * @default
 */

exports.MAX_BLOCK_WEIGHT = 1000000 * consensus.WITNESS_SCALE_FACTOR;

/**
 * How much of the block should be dedicated to
 * high-priority transactions (included regardless
 * of fee rate).
 * @const {Number}
 * @default
 */

exports.BLOCK_PRIORITY_WEIGHT = 0;

/**
 * Priority threshold to be reached before
 * switching to fee rate comparison.
 * @const {Number}
 * @default
 */

exports.BLOCK_PRIORITY_THRESHOLD = exports.FREE_THRESHOLD;

/**
 * Calculate minimum fee based on rate and size.
 * @param {Number?} size
 * @param {Rate?} rate - Rate of wmcoin per kB.
 * @returns {Amount} fee
 */

exports.getMinFee = function getMinFee(size, rate) {
  if (rate == null)
    rate = exports.MIN_RELAY;

  assert(size >= 0);
  assert(rate >= 0);

  if (size === 0)
    return 0;

  let fee = Math.floor(rate * size / 1000);

  if (fee === 0 && rate > 0)
    fee = rate;

  return fee;
};

/**
 * Calculate the minimum fee in order for the transaction
 * to be relayable, but _round to the nearest kilobyte
 * when taking into account size.
 * @param {Number?} size
 * @param {Rate?} rate - Rate of wmcoin per kB.
 * @returns {Amount} fee
 */

exports.getRoundFee = function getRoundFee(size, rate) {
  if (rate == null)
    rate = exports.MIN_RELAY;

  assert(size >= 0);
  assert(rate >= 0);

  if (size === 0)
    return 0;

  let fee = rate * Math.ceil(size / 1000);

  if (fee === 0 && rate > 0)
    fee = rate;

  return fee;
};

/**
 * Calculate a fee rate based on size and fees.
 * @param {Number} size
 * @param {Amount} fee
 * @returns {Rate}
 */

exports.getRate = function getRate(size, fee) {
  assert(size >= 0);
  assert(fee >= 0);

  if (size === 0)
    return 0;

  return Math.floor(fee * 1000 / size);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * amount.js - amount object for wmcc_core.
 */



const assert = __webpack_require__(0);
const util = __webpack_require__(1);

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


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * outpoint.js - outpoint object for wmcc_core.
 */



const assert = __webpack_require__(0);
const util = __webpack_require__(1);
const StaticWriter = __webpack_require__(4);
const BufferReader = __webpack_require__(2);
const encoding = __webpack_require__(3);

/**
 * Represents a COutPoint.
 * @alias module:primitives.Outpoint
 * @constructor
 * @param {Hash?} hash
 * @param {Number?} index
 * @property {Hash} hash
 * @property {Number} index
 */

function Outpoint(hash, index) {
  if (!(this instanceof Outpoint))
    return new Outpoint(hash, index);

  this.hash = encoding.NULL_HASH;
  this.index = 0xffffffff;

  if (hash != null) {
    assert(typeof hash === 'string', 'Hash must be a string.');
    assert(util.isU32(index), 'Index must be a uint32.');
    this.hash = hash;
    this.index = index;
  }
}

/**
 * Inject properties from options object.
 * @private
 * @param {Object} options
 */

Outpoint.prototype.fromOptions = function fromOptions(options) {
  assert(options, 'Outpoint data is required.');
  assert(typeof options.hash === 'string', 'Hash must be a string.');
  assert(util.isU32(options.index), 'Index must be a uint32.');
  this.hash = options.hash;
  this.index = options.index;
  return this;
};

/**
 * Instantate outpoint from options object.
 * @param {Object} options
 * @returns {Outpoint}
 */

Outpoint.fromOptions = function fromOptions(options) {
  return new Outpoint().fromOptions(options);
};

/**
 * Clone the outpoint.
 * @returns {Outpoint}
 */

Outpoint.prototype.clone = function clone() {
  const outpoint = new Outpoint();
  outpoint.hash = this.value;
  outpoint.index = this.index;
  return outpoint;
};

/**
 * Test equality against another outpoint.
 * @param {Outpoint} prevout
 * @returns {Boolean}
 */

Outpoint.prototype.equals = function equals(prevout) {
  assert(Outpoint.isOutpoint(prevout));
  return this.hash === prevout.hash
    && this.index === prevout.index;
};

/**
 * Compare against another outpoint (BIP69).
 * @param {Outpoint} prevout
 * @returns {Number}
 */

Outpoint.prototype.compare = function compare(prevout) {
  assert(Outpoint.isOutpoint(prevout));

  const cmp = util.strcmp(this.txid(), prevout.txid());

  if (cmp !== 0)
    return cmp;

  return this.index - prevout.index;
};

/**
 * Test whether the outpoint is null (hash of zeroes
 * with max-u32 index). Used to detect coinbases.
 * @returns {Boolean}
 */

Outpoint.prototype.isNull = function isNull() {
  return this.index === 0xffffffff && this.hash === encoding.NULL_HASH;
};

/**
 * Get little-endian hash.
 * @returns {Hash}
 */

Outpoint.prototype.rhash = function rhash() {
  return util.revHex(this.hash);
};

/**
 * Get little-endian hash.
 * @returns {Hash}
 */

Outpoint.prototype.txid = function txid() {
  return this.rhash();
};

/**
 * Serialize outpoint to a key
 * suitable for a hash table.
 * @returns {String}
 */

Outpoint.prototype.toKey = function toKey() {
  return Outpoint.toKey(this.hash, this.index);
};

/**
 * Inject properties from hash table key.
 * @private
 * @param {String} key
 * @returns {Outpoint}
 */

Outpoint.prototype.fromKey = function fromKey(key) {
  assert(key.length > 64);
  this.hash = key.slice(0, 64);
  this.index = parseInt(key.slice(64), 10);
  return this;
};

/**
 * Instantiate outpoint from hash table key.
 * @param {String} key
 * @returns {Outpoint}
 */

Outpoint.fromKey = function fromKey(key) {
  return new Outpoint().fromKey(key);
};

/**
 * Write outpoint to a buffer writer.
 * @param {BufferWriter} bw
 */

Outpoint.prototype.toWriter = function toWriter(bw) {
  bw.writeHash(this.hash);
  bw.writeU32(this.index);
  return bw;
};

/**
 * Calculate size of outpoint.
 * @returns {Number}
 */

Outpoint.prototype.getSize = function getSize() {
  return 36;
};

/**
 * Serialize outpoint.
 * @returns {Buffer}
 */

Outpoint.prototype.toRaw = function toRaw() {
  return this.toWriter(new StaticWriter(36)).render();
};

/**
 * Inject properties from buffer reader.
 * @private
 * @param {BufferReader} br
 */

Outpoint.prototype.fromReader = function fromReader(br) {
  this.hash = br.readHash('hex');
  this.index = br.readU32();
  return this;
};

/**
 * Inject properties from serialized data.
 * @private
 * @param {Buffer} data
 */

Outpoint.prototype.fromRaw = function fromRaw(data) {
  return this.fromReader(new BufferReader(data));
};

/**
 * Instantiate outpoint from a buffer reader.
 * @param {BufferReader} br
 * @returns {Outpoint}
 */

Outpoint.fromReader = function fromReader(br) {
  return new Outpoint().fromReader(br);
};

/**
 * Instantiate outpoint from serialized data.
 * @param {Buffer} data
 * @returns {Outpoint}
 */

Outpoint.fromRaw = function fromRaw(data) {
  return new Outpoint().fromRaw(data);
};

/**
 * Inject properties from json object.
 * @private
 * @params {Object} json
 */

Outpoint.prototype.fromJSON = function fromJSON(json) {
  assert(json, 'Outpoint data is required.');
  assert(typeof json.hash === 'string', 'Hash must be a string.');
  assert(util.isU32(json.index), 'Index must be a uint32.');
  this.hash = util.revHex(json.hash);
  this.index = json.index;
  return this;
};

/**
 * Convert the outpoint to an object suitable
 * for JSON serialization. Note that the hash
 * will be reversed to abide by wmccd's legacy
 * of little-endian uint256s.
 * @returns {Object}
 */

Outpoint.prototype.toJSON = function toJSON() {
  return {
    hash: util.revHex(this.hash),
    index: this.index
  };
};

/**
 * Instantiate outpoint from json object.
 * @param {Object} json
 * @returns {Outpoint}
 */

Outpoint.fromJSON = function fromJSON(json) {
  return new Outpoint().fromJSON(json);
};

/**
 * Inject properties from tx.
 * @private
 * @param {TX} tx
 * @param {Number} index
 */

Outpoint.prototype.fromTX = function fromTX(tx, index) {
  assert(tx);
  assert(typeof index === 'number');
  assert(index >= 0);
  this.hash = tx.hash('hex');
  this.index = index;
  return this;
};

/**
 * Instantiate outpoint from tx.
 * @param {TX} tx
 * @param {Number} index
 * @returns {Outpoint}
 */

Outpoint.fromTX = function fromTX(tx, index) {
  return new Outpoint().fromTX(tx, index);
};

/**
 * Serialize outpoint to a key
 * suitable for a hash table.
 * @param {Hash} hash
 * @param {Number} index
 * @returns {String}
 */

Outpoint.toKey = function toKey(hash, index) {
  assert(typeof hash === 'string');
  assert(hash.length === 64);
  assert(index >= 0);
  return hash + index;
};

/**
 * Convert the outpoint to a user-friendly string.
 * @returns {String}
 */

Outpoint.prototype.inspect = function inspect() {
  return `<Outpoint: ${this.rhash()}/${this.index}>`;
};

/**
 * Test an object to see if it is an outpoint.
 * @param {Object} obj
 * @returns {Boolean}
 */

Outpoint.isOutpoint = function isOutpoint(obj) {
  return obj instanceof Outpoint;
};

/*
 * Expose
 */

module.exports = Outpoint;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = assert;

function assert(val, msg) {
  if (!val)
    throw new Error(msg || 'Assertion failed');
}

assert.equal = function assertEqual(l, r, msg) {
  if (l != r)
    throw new Error(msg || ('Assertion failed: ' + l + ' != ' + r));
};


/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * base58.js - base58 for wmcc_core.
 */



/**
 * @module utils/base58
 */

const assert = __webpack_require__(0);
const native = __webpack_require__(18).binding;

/*
 * Base58
 */

const base58 = ''
  + '123456789'
  + 'ABCDEFGHJKLMNPQRSTUVWXYZ'
  + 'abcdefghijkmnopqrstuvwxyz';

const unbase58 = {};

for (let i = 0; i < base58.length; i++)
  unbase58[base58[i]] = i;

/**
 * Encode a base58 string.
 * @see https://github.com/bitcoin/bitcoin/blob/master/src/base58.cpp
 * @param {Buffer} data
 * @returns {Base58String}
 */

exports.encode = function encode(data) {
  let zeroes = 0;
  let i = 0;

  for (; i < data.length; i++) {
    if (data[i] !== 0)
      break;
    zeroes++;
  }

  const b58 = Buffer.allocUnsafe(((data.length * 138 / 100) | 0) + 1);
  b58.fill(0);

  let length = 0;

  for (; i < data.length; i++) {
    let carry = data[i];
    let j = 0;

    for (let k = b58.length - 1; k >= 0; k--, j++) {
      if (carry === 0 && j >= length)
        break;
      carry += 256 * b58[k];
      b58[k] = carry % 58;
      carry = carry / 58 | 0;
    }

    assert(carry === 0);
    length = j;
  }

  i = b58.length - length;
  while (i < b58.length && b58[i] === 0)
    i++;

  let str = '';

  for (let j = 0; j < zeroes; j++)
    str += '1';

  for (; i < b58.length; i++)
    str += base58[b58[i]];

  return str;
};

if (native)
  exports.encode = native.toBase58;

/**
 * Decode a base58 string.
 * @see https://github.com/bitcoin/bitcoin/blob/master/src/base58.cpp
 * @param {Base58String} str
 * @returns {Buffer}
 * @throws on non-base58 character.
 */

exports.decode = function decode(str) {
  let zeroes = 0;
  let i = 0;

  for (; i < str.length; i++) {
    if (str[i] !== '1')
      break;
    zeroes++;
  }

  const b256 = Buffer.allocUnsafe(((str.length * 733) / 1000 | 0) + 1);
  b256.fill(0);

  let length = 0;

  for (; i < str.length; i++) {
    const ch = unbase58[str[i]];

    if (ch == null)
      throw new Error('Non-base58 character.');

    let carry = ch;
    let j = 0;

    for (let k = b256.length - 1; k >= 0; k--, j++) {
      if (carry === 0 && j >= length)
        break;
      carry += 58 * b256[k];
      b256[k] = carry % 256;
      carry = carry / 256 | 0;
    }

    assert(carry === 0);
    length = j;
  }

  i = 0;
  while (i < b256.length && b256[i] === 0)
    i++;

  const out = Buffer.allocUnsafe(zeroes + (b256.length - i));

  let j;
  for (j = 0; j < zeroes; j++)
    out[j] = 0;

  while (i < b256.length)
    out[j++] = b256[i++];

  return out;
};

if (native)
  exports.decode = native.fromBase58;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * bn.js - big numbers for wmcc_core.
 */



/**
 * @module crypto.BN
 */

/**
 * bn.js
 * @constructor
 * @see https://github.com/indutny/bn.js
 */

module.exports = __webpack_require__(134);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * common.js - common script functions for wmcc_core.
 */



/**
 * @module script/common
 */

const assert = __webpack_require__(0);
const util = __webpack_require__(1);
const secp256k1 = __webpack_require__(12);
const ScriptNum = __webpack_require__(32);

/**
 * Script opcodes.
 * @enum {Number}
 * @default
 */

exports.opcodes = {
  // Push
  OP_0: 0x00,

  OP_PUSHDATA1: 0x4c,
  OP_PUSHDATA2: 0x4d,
  OP_PUSHDATA4: 0x4e,

  OP_1NEGATE: 0x4f,

  OP_RESERVED: 0x50,

  OP_1: 0x51,
  OP_2: 0x52,
  OP_3: 0x53,
  OP_4: 0x54,
  OP_5: 0x55,
  OP_6: 0x56,
  OP_7: 0x57,
  OP_8: 0x58,
  OP_9: 0x59,
  OP_10: 0x5a,
  OP_11: 0x5b,
  OP_12: 0x5c,
  OP_13: 0x5d,
  OP_14: 0x5e,
  OP_15: 0x5f,
  OP_16: 0x60,

  // Control
  OP_NOP: 0x61,
  OP_VER: 0x62,
  OP_IF: 0x63,
  OP_NOTIF: 0x64,
  OP_VERIF: 0x65,
  OP_VERNOTIF: 0x66,
  OP_ELSE: 0x67,
  OP_ENDIF: 0x68,
  OP_VERIFY: 0x69,
  OP_RETURN: 0x6a,

  // Stack
  OP_TOALTSTACK: 0x6b,
  OP_FROMALTSTACK: 0x6c,
  OP_2DROP: 0x6d,
  OP_2DUP: 0x6e,
  OP_3DUP: 0x6f,
  OP_2OVER: 0x70,
  OP_2ROT: 0x71,
  OP_2SWAP: 0x72,
  OP_IFDUP: 0x73,
  OP_DEPTH: 0x74,
  OP_DROP: 0x75,
  OP_DUP: 0x76,
  OP_NIP: 0x77,
  OP_OVER: 0x78,
  OP_PICK: 0x79,
  OP_ROLL: 0x7a,
  OP_ROT: 0x7b,
  OP_SWAP: 0x7c,
  OP_TUCK: 0x7d,

  // Splice
  OP_CAT: 0x7e,
  OP_SUBSTR: 0x7f,
  OP_LEFT: 0x80,
  OP_RIGHT: 0x81,
  OP_SIZE: 0x82,

  // Bit
  OP_INVERT: 0x83,
  OP_AND: 0x84,
  OP_OR: 0x85,
  OP_XOR: 0x86,
  OP_EQUAL: 0x87,
  OP_EQUALVERIFY: 0x88,
  OP_RESERVED1: 0x89,
  OP_RESERVED2: 0x8a,

  // Numeric
  OP_1ADD: 0x8b,
  OP_1SUB: 0x8c,
  OP_2MUL: 0x8d,
  OP_2DIV: 0x8e,
  OP_NEGATE: 0x8f,
  OP_ABS: 0x90,
  OP_NOT: 0x91,
  OP_0NOTEQUAL: 0x92,
  OP_ADD: 0x93,
  OP_SUB: 0x94,
  OP_MUL: 0x95,
  OP_DIV: 0x96,
  OP_MOD: 0x97,
  OP_LSHIFT: 0x98,
  OP_RSHIFT: 0x99,
  OP_BOOLAND: 0x9a,
  OP_BOOLOR: 0x9b,
  OP_NUMEQUAL: 0x9c,
  OP_NUMEQUALVERIFY: 0x9d,
  OP_NUMNOTEQUAL: 0x9e,
  OP_LESSTHAN: 0x9f,
  OP_GREATERTHAN: 0xa0,
  OP_LESSTHANOREQUAL: 0xa1,
  OP_GREATERTHANOREQUAL: 0xa2,
  OP_MIN: 0xa3,
  OP_MAX: 0xa4,
  OP_WITHIN: 0xa5,

  // Crypto
  OP_RIPEMD160: 0xa6,
  OP_SHA1: 0xa7,
  OP_SHA256: 0xa8,
  OP_HASH160: 0xa9,
  OP_HASH256: 0xaa,
  OP_CODESEPARATOR: 0xab,
  OP_CHECKSIG: 0xac,
  OP_CHECKSIGVERIFY: 0xad,
  OP_CHECKMULTISIG: 0xae,
  OP_CHECKMULTISIGVERIFY: 0xaf,

  // Expansion
  OP_NOP1: 0xb0,
  OP_CHECKLOCKTIMEVERIFY: 0xb1,
  OP_CHECKSEQUENCEVERIFY: 0xb2,
  OP_NOP4: 0xb3,
  OP_NOP5: 0xb4,
  OP_NOP6: 0xb5,
  OP_NOP7: 0xb6,
  OP_NOP8: 0xb7,
  OP_NOP9: 0xb8,
  OP_NOP10: 0xb9,

  // Custom
  OP_INVALIDOPCODE: 0xff
};

/**
 * Opcodes by value.
 * @const {RevMap}
 */

exports.opcodesByVal = util.reverse(exports.opcodes);

/**
 * Small ints (1 indexed, 1==0).
 * @const {Buffer[]}
 */

exports.small = [
  Buffer.from([0x81]),
  Buffer.from([]),
  Buffer.from([0x01]),
  Buffer.from([0x02]),
  Buffer.from([0x03]),
  Buffer.from([0x04]),
  Buffer.from([0x05]),
  Buffer.from([0x06]),
  Buffer.from([0x07]),
  Buffer.from([0x08]),
  Buffer.from([0x09]),
  Buffer.from([0x0a]),
  Buffer.from([0x0b]),
  Buffer.from([0x0c]),
  Buffer.from([0x0d]),
  Buffer.from([0x0e]),
  Buffer.from([0x0f]),
  Buffer.from([0x10])
];

/**
 * Script and locktime flags. See {@link VerifyFlags}.
 * @enum {Number}
 */

exports.flags = {
  VERIFY_NONE: 0,
  VERIFY_P2SH: 1 << 0,
  VERIFY_STRICTENC: 1 << 1,
  VERIFY_DERSIG: 1 << 2,
  VERIFY_LOW_S: 1 << 3,
  VERIFY_NULLDUMMY: 1 << 4,
  VERIFY_SIGPUSHONLY: 1 << 5,
  VERIFY_MINIMALDATA: 1 << 6,
  VERIFY_DISCOURAGE_UPGRADABLE_NOPS: 1 << 7,
  VERIFY_CLEANSTACK: 1 << 8,
  VERIFY_CHECKLOCKTIMEVERIFY: 1 << 9,
  VERIFY_CHECKSEQUENCEVERIFY: 1 << 10,
  VERIFY_WITNESS: 1 << 11,
  VERIFY_DISCOURAGE_UPGRADABLE_WITNESS_PROGRAM: 1 << 12,
  VERIFY_MINIMALIF: 1 << 13,
  VERIFY_NULLFAIL: 1 << 14,
  VERIFY_WITNESS_PUBKEYTYPE: 1 << 15,
  VERIFY_MAST: 1 << 16
};

/**
 * Consensus verify flags (used for block validation).
 * @const {VerifyFlags}
 * @default
 */

exports.flags.MANDATORY_VERIFY_FLAGS = exports.flags.VERIFY_P2SH;

/**
 * Standard verify flags (used for mempool validation).
 * @const {VerifyFlags}
 * @default
 */

exports.flags.STANDARD_VERIFY_FLAGS = 0
  | exports.flags.MANDATORY_VERIFY_FLAGS
  | exports.flags.VERIFY_DERSIG
  | exports.flags.VERIFY_STRICTENC
  | exports.flags.VERIFY_MINIMALDATA
  | exports.flags.VERIFY_NULLDUMMY
  | exports.flags.VERIFY_DISCOURAGE_UPGRADABLE_NOPS
  | exports.flags.VERIFY_CLEANSTACK
  | exports.flags.VERIFY_MINIMALIF
  | exports.flags.VERIFY_NULLFAIL
  | exports.flags.VERIFY_CHECKLOCKTIMEVERIFY
  | exports.flags.VERIFY_CHECKSEQUENCEVERIFY
  | exports.flags.VERIFY_LOW_S
  | exports.flags.VERIFY_WITNESS
  | exports.flags.VERIFY_DISCOURAGE_UPGRADABLE_WITNESS_PROGRAM
  | exports.flags.VERIFY_WITNESS_PUBKEYTYPE;

/**
 * Standard flags without mandatory bits.
 * @const {VerifyFlags}
 * @default
 */

exports.flags.ONLY_STANDARD_VERIFY_FLAGS =
  exports.flags.STANDARD_VERIFY_FLAGS & ~exports.flags.MANDATORY_VERIFY_FLAGS;

/**
 * Sighash Types.
 * @enum {SighashType}
 * @default
 */

exports.hashType = {
  /*
   * Sign all outputs.
   */

  ALL: 1,

  /*
   * Do not sign outputs (zero sequences).
   */

  NONE: 2,

  /*
   * Sign output at the same index (zero sequences).
   */

  SINGLE: 3,

  /*
   * Sign only the current input (mask).
   */

  ANYONECANPAY: 0x80
};

/**
 * Sighash types by value.
 * @const {RevMap}
 */

exports.hashTypeByVal = util.reverse(exports.hashType);

/**
 * Output script types.
 * @enum {Number}
 */

exports.types = {
  NONSTANDARD: 0,
  PUBKEY: 1,
  PUBKEYHASH: 2,
  SCRIPTHASH: 3,
  MULTISIG: 4,
  NULLDATA: 5,
  WITNESSMALFORMED: 0x80 | 0,
  WITNESSSCRIPTHASH: 0x80 | 1,
  WITNESSPUBKEYHASH: 0x80 | 2,
  WITNESSMASTHASH: 0x80 | 3
};

/**
 * Output script types by value.
 * @const {RevMap}
 */

exports.typesByVal = util.reverse(exports.types);

/**
 * Test a signature to see whether it contains a valid sighash type.
 * @param {Buffer} sig
 * @returns {Boolean}
 */

exports.isHashType = function isHashType(sig) {
  assert(Buffer.isBuffer(sig));

  if (sig.length === 0)
    return false;

  const type = sig[sig.length - 1] & ~exports.hashType.ANYONECANPAY;

  if (!(type >= exports.hashType.ALL && type <= exports.hashType.SINGLE))
    return false;

  return true;
};

/**
 * Test a signature to see whether it contains a low S value.
 * @param {Buffer} sig
 * @returns {Boolean}
 */

exports.isLowDER = function isLowDER(sig) {
  if (!exports.isSignatureEncoding(sig))
    return false;

  return secp256k1.isLowS(sig.slice(0, -1));
};

/**
 * Test whether the data element is a valid key.
 * @param {Buffer} key
 * @returns {Boolean}
 */

exports.isKeyEncoding = function isKeyEncoding(key) {
  assert(Buffer.isBuffer(key));

  if (key.length < 33)
    return false;

  if (key[0] === 0x04) {
    if (key.length !== 65)
      return false;
  } else if (key[0] === 0x02 || key[0] === 0x03) {
    if (key.length !== 33)
      return false;
  } else {
    return false;
  }

  return true;
};

/**
 * Test whether the data element is a compressed key.
 * @param {Buffer} key
 * @returns {Boolean}
 */

exports.isCompressedEncoding = function isCompressedEncoding(key) {
  assert(Buffer.isBuffer(key));

  if (key.length !== 33)
    return false;

  if (key[0] !== 0x02 && key[0] !== 0x03)
    return false;

  return true;
};

/**
 * Test a signature to see if it abides by BIP66.
 * @see https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki
 * @param {Buffer} sig
 * @returns {Boolean}
 */

exports.isSignatureEncoding = function isSignatureEncoding(sig) {
  assert(Buffer.isBuffer(sig));

  // Format:
  //   0x30 [total-length] 0x02 [R-length] [R] 0x02 [S-length] [S] [sighash]
  // * total-length: 1-byte length descriptor of everything that follows,
  //   excluding the sighash byte.
  // * R-length: 1-byte length descriptor of the R value that follows.
  // * R: arbitrary-length big-endian encoded R value. It must use the shortest
  //   possible encoding for a positive integers (which means no null bytes at
  //   the start, except a single one when the next byte has its highest bit
  //   set).
  // * S-length: 1-byte length descriptor of the S value that follows.
  // * S: arbitrary-length big-endian encoded S value. The same rules apply.
  // * sighash: 1-byte value indicating what data is hashed (not part of the DER
  //   signature)

  // Minimum and maximum size constraints.
  if (sig.length < 9)
    return false;

  if (sig.length > 73)
    return false;

  // A signature is of type 0x30 (compound).
  if (sig[0] !== 0x30)
    return false;

  // Make sure the length covers the entire signature.
  if (sig[1] !== sig.length - 3)
    return false;

  // Extract the length of the R element.
  const lenR = sig[3];

  // Make sure the length of the S element is still inside the signature.
  if (5 + lenR >= sig.length)
    return false;

  // Extract the length of the S element.
  const lenS = sig[5 + lenR];

  // Verify that the length of the signature matches the sum of the length
  // of the elements.
  if (lenR + lenS + 7 !== sig.length)
    return false;

  // Check whether the R element is an integer.
  if (sig[2] !== 0x02)
    return false;

  // Zero-length integers are not allowed for R.
  if (lenR === 0)
    return false;

  // Negative numbers are not allowed for R.
  if (sig[4] & 0x80)
    return false;

  // Null bytes at the start of R are not allowed, unless R would
  // otherwise be interpreted as a negative number.
  if (lenR > 1 && (sig[4] === 0x00) && !(sig[5] & 0x80))
    return false;

  // Check whether the S element is an integer.
  if (sig[lenR + 4] !== 0x02)
    return false;

  // Zero-length integers are not allowed for S.
  if (lenS === 0)
    return false;

  // Negative numbers are not allowed for S.
  if (sig[lenR + 6] & 0x80)
    return false;

  // Null bytes at the start of S are not allowed, unless S would otherwise be
  // interpreted as a negative number.
  if (lenS > 1 && (sig[lenR + 6] === 0x00) && !(sig[lenR + 7] & 0x80))
    return false;

  return true;
};

/**
 * Format stack item into wmccd asm format.
 * @param {Buffer} item
 * @param {Boolean?} decode - Attempt to decode hash types.
 * @returns {String} Human-readable string.
 */

exports.toASM = function toASM(item, decode) {
  if (item.length <= 4) {
    const num = ScriptNum.decode(item);
    return num.toString(10);
  }

  if (decode && exports.isSignatureEncoding(item)) {
    const type = item[item.length - 1];

    let symbol = exports.hashTypeByVal[type & 0x1f] || '';

    if (symbol) {
      if (type & exports.hashType.ANYONECANPAY)
        symbol += '|ANYONECANPAY';
      symbol = `[${symbol}]`;
    }

    return item.slice(0, -1).toString('hex') + symbol;
  }

  return item.toString('hex');
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * random.js - randomness for wmcc_core.
 */



/**
 * @module crypto.random
 */

const crypto = __webpack_require__(24);

/**
 * Generate pseudo-random bytes.
 * @function
 * @param {Number} size
 * @returns {Buffer}
 */

exports.randomBytes = crypto.randomBytes;

/**
 * Generate a random uint32.
 * Probably more cryptographically sound than
 * `Math.random()`.
 * @returns {Number}
 */

exports.randomInt = function randomInt() {
  return exports.randomBytes(4).readUInt32LE(0, true);
};

/**
 * Generate a random number within a range.
 * Probably more cryptographically sound than
 * `Math.random()`.
 * @param {Number} min - Inclusive.
 * @param {Number} max - Exclusive.
 * @returns {Number}
 */

exports.randomRange = function randomRange(min, max) {
  const num = exports.randomInt();
  return Math.floor((num / 0x100000000) * (max - min) + min);
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * coinview.js - coin viewpoint object for wmcc_core.
 */



const Coins = __webpack_require__(103);
const UndoCoins = __webpack_require__(91);
const CoinEntry = __webpack_require__(50);

/**
 * Represents a coin viewpoint:
 * a snapshot of {@link Coins} objects.
 * @alias module:coins.CoinView
 * @constructor
 * @property {Object} map
 * @property {UndoCoins} undo
 */

function CoinView() {
  if (!(this instanceof CoinView))
    return new CoinView();

  this.map = new Map();
  this.undo = new UndoCoins();
}

/**
 * Get coins.
 * @param {Hash} hash
 * @returns {Coins} coins
 */

CoinView.prototype.get = function get(hash) {
  return this.map.get(hash);
};

/**
 * Test whether the view has an entry.
 * @param {Hash} hash
 * @returns {Boolean}
 */

CoinView.prototype.has = function has(hash) {
  return this.map.has(hash);
};

/**
 * Add coins to the collection.
 * @param {Hash} hash
 * @param {Coins} coins
 * @returns {Coins}
 */

CoinView.prototype.add = function add(hash, coins) {
  this.map.set(hash, coins);
  return coins;
};

/**
 * Ensure existence of coins object in the collection.
 * @param {Hash} hash
 * @returns {Coins}
 */

CoinView.prototype.ensure = function ensure(hash) {
  const coins = this.map.get(hash);

  if (coins)
    return coins;

  return this.add(hash, new Coins());
};

/**
 * Remove coins from the collection.
 * @param {Coins} coins
 * @returns {Coins|null}
 */

CoinView.prototype.remove = function remove(hash) {
  const coins = this.map.get(hash);

  if (!coins)
    return null;

  this.map.delete(hash);

  return coins;
};

/**
 * Add a tx to the collection.
 * @param {TX} tx
 * @param {Number} height
 * @returns {Coins}
 */

CoinView.prototype.addTX = function addTX(tx, height) {
  const hash = tx.hash('hex');
  const coins = Coins.fromTX(tx, height);
  return this.add(hash, coins);
};

/**
 * Remove a tx from the collection.
 * @param {TX} tx
 * @param {Number} height
 * @returns {Coins}
 */

CoinView.prototype.removeTX = function removeTX(tx, height) {
  const hash = tx.hash('hex');
  const coins = Coins.fromTX(tx, height);

  for (const coin of coins.outputs.values())
    coin.spent = true;

  return this.add(hash, coins);
};

/**
 * Add an entry to the collection.
 * @param {Outpoint} prevout
 * @param {CoinEntry} coin
 * @returns {CoinEntry|null}
 */

CoinView.prototype.addEntry = function addEntry(prevout, coin) {
  const {hash, index} = prevout;
  /*let coins = this.get(hash);

  if (!coins) {
    coins = new Coins();
    this.add(hash, coins);
  }

  if (coin.output.script.isUnspendable())
    return null;

  if (coins.has(index))
    return null;*/
  const coins = this.ensure(hash);
  return coins.add(index, coin);
};

/**
 * Add a coin to the collection.
 * @param {Coin} coin
 * @returns {CoinEntry|null}
 */

CoinView.prototype.addCoin = function addCoin(coin) {
  /*const {hash, index} = coin;
  let coins = this.get(hash);

  if (!coins) {
    coins = new Coins();
    this.add(hash, coins);
  }

  if (coin.script.isUnspendable())
    return null;

  if (coins.has(index))
    return null;*/
  const coins = this.ensure(coin.hash);
  return coins.addCoin(coin);
};

/**
 * Add an output to the collection.
 * @param {Outpoint} prevout
 * @param {Output} output
 * @returns {CoinEntry|null}
 */

CoinView.prototype.addOutput = function addOutput(prevout, output) {
  const {hash, index} = prevout;
  /*let coins = this.get(hash);

  if (!coins) {
    coins = new Coins();
    this.add(hash, coins);
  }

  if (output.script.isUnspendable())
    return null;

  if (coins.has(index))
    return null;*/
  const coins = this.ensure(hash);
  return coins.addOutput(index, output);
};

/**
 * Add an output to the collection by output index.
 * @param {TX} tx
 * @param {Number} index
 * @param {Number} height
 * @returns {CoinEntry|null}
 */

CoinView.prototype.addIndex = function addIndex(tx, index, height) {
  const hash = tx.hash('hex');
  const coins = this.ensure(hash);
  return coins.addIndex(tx, index, height);
};

/**
 * Spend an output.
 * @param {Outpoint} prevout
 * @returns {CoinEntry|null}
 */

CoinView.prototype.spendEntry = function spendEntry(prevout) {
  const {hash, index} = prevout;
  const coins = this.get(hash);

  if (!coins)
    return null;

  const coin = coins.spend(index);

  if (!coin)
    return null;

  this.undo.push(coin);

  return coin;
};

/**
 * Remove an output.
 * @param {Outpoint} prevout
 * @returns {CoinEntry|null}
 */

CoinView.prototype.removeEntry = function removeEntry(prevout) {
  const {hash, index} = prevout;
  const coins = this.get(hash);

  if (!coins)
    return null;

  return coins.remove(index);
};

/**
 * Test whether the view has an entry by prevout.
 * @param {Outpoint} prevout
 * @returns {Boolean}
 */

CoinView.prototype.hasEntry = function hasEntry(prevout) {
  const {hash, index} = prevout;
  const coins = this.get(hash);

  if (!coins)
    return false;

  return coins.has(index);
};

/**
 * Get a single entry by prevout.
 * @param {Outpoint} prevout
 * @returns {CoinEntry|null}
 */

CoinView.prototype.getEntry = function getEntry(prevout) {
  const {hash, index} = prevout;
  const coins = this.get(hash);

  if (!coins)
    return null;

  return coins.get(index);
};

/**
 * Test whether an entry has been spent by prevout.
 * @param {Outpoint} prevout
 * @returns {Boolean}
 */

CoinView.prototype.isUnspent = function isUnspent(prevout) {
  const {hash, index} = prevout;
  const coins = this.get(hash);

  if (!coins)
    return false;

  return coins.isUnspent(index);
};

/**
 * Get a single coin by prevout.
 * @param {Outpoint} prevout
 * @returns {Coin|null}
 */

CoinView.prototype.getCoin = function getCoin(prevout) {
  const coins = this.get(prevout.hash);

  if (!coins)
    return null;

  return coins.getCoin(prevout);
};

/**
 * Get a single output by prevout.
 * @param {Outpoint} prevout
 * @returns {Output|null}
 */

CoinView.prototype.getOutput = function getOutput(prevout) {
  const {hash, index} = prevout;
  const coins = this.get(hash);

  if (!coins)
    return null;

  return coins.getOutput(index);
};

/**
 * Get coins height by prevout.
 * @param {Outpoint} prevout
 * @returns {Number}
 */

CoinView.prototype.getHeight = function getHeight(prevout) {
  const coin = this.getEntry(prevout);

  if (!coin)
    return -1;

  return coin.height;
};

/**
 * Get coins coinbase flag by prevout.
 * @param {Outpoint} prevout
 * @returns {Boolean}
 */

CoinView.prototype.isCoinbase = function isCoinbase(prevout) {
  const coin = this.getEntry(prevout);

  if (!coin)
    return false;

  return coin.coinbase;
};

/**
 * Test whether the view has an entry by input.
 * @param {Input} input
 * @returns {Boolean}
 */

CoinView.prototype.hasEntryFor = function hasEntryFor(input) {
  return this.hasEntry(input.prevout);
};

/**
 * Get a single entry by input.
 * @param {Input} input
 * @returns {CoinEntry|null}
 */

CoinView.prototype.getEntryFor = function getEntryFor(input) {
  return this.getEntry(input.prevout);
};

/**
 * Test whether an entry has been spent by input.
 * @param {Input} input
 * @returns {Boolean}
 */

CoinView.prototype.isUnspentFor = function isUnspentFor(input) {
  return this.isUnspent(input.prevout);
};

/**
 * Get a single coin by input.
 * @param {Input} input
 * @returns {Coin|null}
 */

CoinView.prototype.getCoinFor = function getCoinFor(input) {
  return this.getCoin(input.prevout);
};

/**
 * Get a single output by input.
 * @param {Input} input
 * @returns {Output|null}
 */

CoinView.prototype.getOutputFor = function getOutputFor(input) {
  return this.getOutput(input.prevout);
};

/**
 * Get coins height by input.
 * @param {Input} input
 * @returns {Number}
 */

CoinView.prototype.getHeightFor = function getHeightFor(input) {
  return this.getHeight(input.prevout);
};

/**
 * Get coins coinbase flag by input.
 * @param {Input} input
 * @returns {Boolean}
 */

CoinView.prototype.isCoinbaseFor = function isCoinbaseFor(input) {
  return this.isCoinbase(input.prevout);
};

/**
 * Retrieve coins from database.
 * @method
 * @param {ChainDB} db
 * @param {Outpoint} prevout
 * @returns {Promise} - Returns {@link CoinEntry}.
 */

CoinView.prototype.readCoin = async function readCoin(db, prevout) {
  const cache = this.getEntry(prevout);

  if (cache)
    return cache;

  const coin = await db.readCoin(prevout);

  if (!coin)
    return null;

  return this.addEntry(prevout, coin);
};

/**
 * Read all input coins into unspent map.
 * @method
 * @param {ChainDB} db
 * @param {TX} tx
 * @returns {Promise} - Returns {Boolean}.
 */

CoinView.prototype.readInputs = async function readInputs(db, tx) {
  let found = true;

  for (const {prevout} of tx.inputs) {
    if (!await this.readCoin(db, prevout))
      found = false;
  }

  return found;
};

/**
 * Spend coins for transaction.
 * @method
 * @param {ChainDB} db
 * @param {TX} tx
 * @returns {Promise} - Returns {Boolean}.
 */

CoinView.prototype.spendInputs = async function spendInputs(db, tx) {
  //if (tx.inputs.length < 4) {
  let i = 0;
  while (i < tx.inputs.length) {
    const len = Math.min(i + 4, tx.inputs.length);
    const jobs = [];

    //for (const {prevout} of tx.inputs)
    for (; i < len; i++) {
      const {prevout} = tx.inputs[i];
      jobs.push(this.readCoin(db, prevout));
    }

    const coins = await Promise.all(jobs);

    for (const coin of coins) {
      if (!coin || coin.spent)
        return false;

      coin.spent = true;
      this.undo.push(coin);
    }/*

    return true;
  }

  for (const {prevout} of tx.inputs) {
    const coin = await this.readCoin(db, prevout);

    if (!coin || coin.spent)
      return false;

    coin.spent = true;
    this.undo.push(coin);*/
  }

  return true;
};

/**
 * Calculate serialization size.
 * @returns {Number}
 */

CoinView.prototype.getSize = function getSize(tx) {
  let size = 0;

  size += tx.inputs.length;

  for (const {prevout} of tx.inputs) {
    const coin = this.getEntry(prevout);

    if (!coin)
      continue;

    size += coin.getSize();
  }

  return size;
};

/**
 * Write coin data to buffer writer
 * as it pertains to a transaction.
 * @param {BufferWriter} bw
 * @param {TX} tx
 */

CoinView.prototype.toWriter = function toWriter(bw, tx) {
  for (const {prevout} of tx.inputs) {
    const coin = this.getEntry(prevout);

    if (!coin) {
      bw.writeU8(0);
      continue;
    }

    bw.writeU8(1);
    coin.toWriter(bw);
  }

  return bw;
};

/**
 * Read serialized view data from a buffer
 * reader as it pertains to a transaction.
 * @private
 * @param {BufferReader} br
 * @param {TX} tx
 */

CoinView.prototype.fromReader = function fromReader(br, tx) {
  for (const {prevout} of tx.inputs) {
    if (br.readU8() === 0)
      continue;

    const coin = CoinEntry.fromReader(br);

    this.addEntry(prevout, coin);
  }

  return this;
};

/**
 * Read serialized view data from a buffer
 * reader as it pertains to a transaction.
 * @param {BufferReader} br
 * @param {TX} tx
 * @returns {CoinView}
 */

CoinView.fromReader = function fromReader(br, tx) {
  return new CoinView().fromReader(br, tx);
};

/*
 * Expose
 */

module.exports = CoinView;


/***/ }),
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(14);
var assert = __webpack_require__(22);

function BlockHash() {
  this.pending = null;
  this.pendingTotal = 0;
  this.blockSize = this.constructor.blockSize;
  this.outSize = this.constructor.outSize;
  this.hmacStrength = this.constructor.hmacStrength;
  this.padLength = this.constructor.padLength / 8;
  this.endian = 'big';

  this._delta8 = this.blockSize / 8;
  this._delta32 = this.blockSize / 32;
}
exports.BlockHash = BlockHash;

BlockHash.prototype.update = function update(msg, enc) {
  // Convert message to array, pad it, and join into 32bit blocks
  msg = utils.toArray(msg, enc);
  if (!this.pending)
    this.pending = msg;
  else
    this.pending = this.pending.concat(msg);
  this.pendingTotal += msg.length;

  // Enough data, try updating
  if (this.pending.length >= this._delta8) {
    msg = this.pending;

    // Process pending data in blocks
    var r = msg.length % this._delta8;
    this.pending = msg.slice(msg.length - r, msg.length);
    if (this.pending.length === 0)
      this.pending = null;

    msg = utils.join32(msg, 0, msg.length - r, this.endian);
    for (var i = 0; i < msg.length; i += this._delta32)
      this._update(msg, i, i + this._delta32);
  }

  return this;
};

BlockHash.prototype.digest = function digest(enc) {
  this.update(this._pad());
  assert(this.pending === null);

  return this._digest(enc);
};

BlockHash.prototype._pad = function pad() {
  var len = this.pendingTotal;
  var bytes = this._delta8;
  var k = bytes - ((len + this.padLength) % bytes);
  var res = new Array(k + this.padLength);
  res[0] = 0x80;
  for (var i = 1; i < k; i++)
    res[i] = 0;

  // Append length
  len <<= 3;
  if (this.endian === 'big') {
    for (var t = 8; t < this.padLength; t++)
      res[i++] = 0;

    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = (len >>> 24) & 0xff;
    res[i++] = (len >>> 16) & 0xff;
    res[i++] = (len >>> 8) & 0xff;
    res[i++] = len & 0xff;
  } else {
    res[i++] = len & 0xff;
    res[i++] = (len >>> 8) & 0xff;
    res[i++] = (len >>> 16) & 0xff;
    res[i++] = (len >>> 24) & 0xff;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;

    for (t = 8; t < this.padLength; t++)
      res[i++] = 0;
  }

  return res;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * scriptnum.js - script number object for wmcc_core.
 */



const assert = __webpack_require__(0);
const {I64} = __webpack_require__(49);
const ScriptError = __webpack_require__(35);

/*
 * Constants
 */

const EMPTY_ARRAY = Buffer.alloc(0);

/**
 * Script Number
 * @see https://github.com/chjj/n64
 * @alias module:script.ScriptNum
 * @constructor
 * @param {(Number|String|Buffer|Object)?} num
 * @param {(String|Number)?} base
 * @property {Number} hi
 * @property {Number} lo
 * @property {Number} sign
 */

function ScriptNum(num, base) {
  if (!(this instanceof ScriptNum))
    return new ScriptNum(num, base);

  I64.call(this, num, base);
}

Object.setPrototypeOf(ScriptNum, I64);
Object.setPrototypeOf(ScriptNum.prototype, I64.prototype);

/**
 * Cast to int32.
 * @returns {Number}
 */

ScriptNum.prototype.getInt = function getInt() {
  if (this.lt(I64.INT32_MIN))
    return I64.LONG_MIN;

  if (this.gt(I64.INT32_MAX))
    return I64.LONG_MAX;

  return this.toInt();
};

/**
 * Serialize script number.
 * @returns {Buffer}
 */

ScriptNum.prototype.toRaw = function toRaw() {
  let num = this;

  // Zeroes are always empty arrays.
  if (num.isZero())
    return EMPTY_ARRAY;

  // Need to append sign bit.
  let neg = false;
  if (num.isNeg()) {
    num = num.neg();
    neg = true;
  }

  // Calculate size.
  const size = num.byteLength();

  let offset = 0;

  if (num.testn((size * 8) - 1))
    offset = 1;

  // Write number.
  const data = Buffer.allocUnsafe(size + offset);

  switch (size) {
    case 8:
      data[7] = (num.hi >>> 24) & 0xff;
    case 7:
      data[6] = (num.hi >> 16) & 0xff;
    case 6:
      data[5] = (num.hi >> 8) & 0xff;
    case 5:
      data[4] = num.hi & 0xff;
    case 4:
      data[3] = (num.lo >>> 24) & 0xff;
    case 3:
      data[2] = (num.lo >> 16) & 0xff;
    case 2:
      data[1] = (num.lo >> 8) & 0xff;
    case 1:
      data[0] = num.lo & 0xff;
  }

  // Append sign bit.
  if (data[size - 1] & 0x80) {
    assert(offset === 1);
    assert(data.length === size + offset);
    data[size] = neg ? 0x80 : 0;
  } else if (neg) {
    assert(offset === 0);
    assert(data.length === size);
    data[size - 1] |= 0x80;
  } else {
    assert(offset === 0);
    assert(data.length === size);
  }

  return data;
};

/**
 * Instantiate script number from serialized data.
 * @private
 * @param {Buffer} data
 * @returns {ScriptNum}
 */

ScriptNum.prototype.fromRaw = function fromRaw(data) {
  assert(Buffer.isBuffer(data));

  // Empty arrays are always zero.
  if (data.length === 0)
    return this;

  // Read number (9 bytes max).
  switch (data.length) {
    case 8:
      this.hi |= data[7] << 24;
    case 7:
      this.hi |= data[6] << 16;
    case 6:
      this.hi |= data[5] << 8;
    case 5:
      this.hi |= data[4];
    case 4:
      this.lo |= data[3] << 24;
    case 3:
      this.lo |= data[2] << 16;
    case 2:
      this.lo |= data[1] << 8;
    case 1:
      this.lo |= data[0];
      break;
    default:
      for (let i = 0; i < data.length; i++)
        this.orb(i, data[i]);
      break;
  }

  // Remove high bit and flip sign.
  if (data[data.length - 1] & 0x80) {
    this.setn((data.length * 8) - 1, 0);
    this.ineg();
  }

  return this;
};

/**
 * Serialize script number.
 * @returns {Buffer}
 */

ScriptNum.prototype.encode = function encode() {
  return this.toRaw();
};

/**
 * Decode and verify script number.
 * @private
 * @param {Buffer} data
 * @param {Boolean?} minimal - Require minimal encoding.
 * @param {Number?} limit - Size limit.
 * @returns {ScriptNum}
 */

ScriptNum.prototype.decode = function decode(data, minimal, limit) {
  assert(Buffer.isBuffer(data));

  if (limit != null && data.length > limit)
    throw new ScriptError('UNKNOWN_ERROR', 'Script number overflow.');

  if (minimal && !ScriptNum.isMinimal(data))
    throw new ScriptError('UNKNOWN_ERROR', 'Non-minimal script number.');

  return this.fromRaw(data);
};

/**
 * Inspect script number.
 * @returns {String}
 */

ScriptNum.prototype.inspect = function inspect() {
  return `<ScriptNum: ${this.toString(10)}>`;
};

/**
 * Test wether a serialized script
 * number is in its most minimal form.
 * @param {Buffer} data
 * @returns {Boolean}
 */

ScriptNum.isMinimal = function isMinimal(data) {
  assert(Buffer.isBuffer(data));

  if (data.length === 0)
    return true;

  if ((data[data.length - 1] & 0x7f) === 0) {
    if (data.length === 1)
      return false;

    if ((data[data.length - 2] & 0x80) === 0)
      return false;
  }

  return true;
};

/**
 * Decode and verify script number.
 * @param {Buffer} data
 * @param {Boolean?} minimal - Require minimal encoding.
 * @param {Number?} limit - Size limit.
 * @returns {ScriptNum}
 */

ScriptNum.decode = function decode(data, minimal, limit) {
  return new ScriptNum().decode(data, minimal, limit);
};

/**
 * Test whether object is a script number.
 * @param {Object} obj
 * @returns {Boolean}
 */

ScriptNum.isScriptNum = function isScriptNum(obj) {
  return obj instanceof ScriptNum;
};

/*
 * Expose
 */

module.exports = ScriptNum;


/***/ }),
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * scripterror.js - script error for wmcc_core.
 */



/**
 * An error thrown from the scripting system,
 * potentially pertaining to Script execution.
 * @alias module:script.ScriptError
 * @constructor
 * @extends Error
 * @param {String} code - Error code.
 * @param {Opcode} op - Opcode.
 * @param {Number?} ip - Instruction pointer.
 * @property {String} message - Error message.
 * @property {String} code - Original code passed in.
 * @property {Number} op - Opcode.
 * @property {Number} ip - Instruction pointer.
 */

function ScriptError(code, op, ip) {
  if (!(this instanceof ScriptError))
    return new ScriptError(code, op, ip);

  Error.call(this);

  this.type = 'ScriptError';
  this.code = code;
  this.message = code;
  this.op = -1;
  this.ip = -1;

  if (typeof op === 'string') {
    this.message = op;
  } else if (op) {
    this.message = `${code} (op=${op.toSymbol()}, ip=${ip})`;
    this.op = op.value;
    this.ip = ip;
  }

  if (Error.captureStackTrace)
    Error.captureStackTrace(this, ScriptError);
};

Object.setPrototypeOf(ScriptError.prototype, Error.prototype);

module.exports = ScriptError;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * invitem.js - inv item object for wmcc_core.
 */



const BufferReader = __webpack_require__(2);
const StaticWriter = __webpack_require__(4);
const util = __webpack_require__(1);

/**
 * Inv Item
 * @alias module:primitives.InvItem
 * @constructor
 * @param {Number} type
 * @param {Hash} hash
 * @property {InvType} type
 * @property {Hash} hash
 */

function InvItem(type, hash) {
  if (!(this instanceof InvItem))
    return new InvItem(type, hash);

  this.type = type;
  this.hash = hash;
}

/**
 * Inv types.
 * @enum {Number}
 * @default
 */

InvItem.types = {
  ERROR: 0,
  TX: 1,
  BLOCK: 2,
  FILTERED_BLOCK: 3,
  WITNESS_TX: 1 | (1 << 30),
  WITNESS_BLOCK: 2 | (1 << 30),
  WITNESS_FILTERED_BLOCK: 3 | (1 << 30),
  CMPCT_BLOCK: 4
};

/**
 * Inv types by value.
 * @const {RevMap}
 */

InvItem.typesByVal = util.reverse(InvItem.types);

/**
 * Witness bit for inv types.
 * @const {Number}
 * @default
 */

InvItem.WITNESS_FLAG = 1 << 30;

/**
 * Write inv item to buffer writer.
 * @param {BufferWriter} bw
 */

InvItem.prototype.getSize = function getSize() {
  return 36;
};

/**
 * Write inv item to buffer writer.
 * @param {BufferWriter} bw
 */

InvItem.prototype.toWriter = function toWriter(bw) {
  bw.writeU32(this.type);
  bw.writeHash(this.hash);
  return bw;
};

/**
 * Serialize inv item.
 * @returns {Buffer}
 */

InvItem.prototype.toRaw = function toRaw() {
  return this.toWriter(new StaticWriter(36)).render();
};

/**
 * Inject properties from buffer reader.
 * @private
 * @param {BufferReader} br
 */

InvItem.prototype.fromReader = function fromReader(br) {
  this.type = br.readU32();
  this.hash = br.readHash('hex');
  return this;
};

/**
 * Inject properties from serialized data.
 * @param {Buffer} data
 */

InvItem.prototype.fromRaw = function fromRaw(data) {
  return this.fromReader(new BufferReader(data));
};

/**
 * Instantiate inv item from buffer reader.
 * @param {BufferReader} br
 * @returns {InvItem}
 */

InvItem.fromReader = function fromReader(br) {
  return new InvItem().fromReader(br);
};

/**
 * Instantiate inv item from serialized data.
 * @param {Buffer} data
 * @param {String?} enc
 * @returns {InvItem}
 */

InvItem.fromRaw = function fromRaw(data, enc) {
  if (typeof data === 'string')
    data = Buffer.from(data, enc);
  return new InvItem().fromRaw(data);
};

/**
 * Test whether the inv item is a block.
 * @returns {Boolean}
 */

InvItem.prototype.isBlock = function isBlock() {
  switch (this.type) {
    case InvItem.types.BLOCK:
    case InvItem.types.WITNESS_BLOCK:
    case InvItem.types.FILTERED_BLOCK:
    case InvItem.types.WITNESS_FILTERED_BLOCK:
    case InvItem.types.CMPCT_BLOCK:
      return true;
    default:
      return false;
  }
};

/**
 * Test whether the inv item is a tx.
 * @returns {Boolean}
 */

InvItem.prototype.isTX = function isTX() {
  switch (this.type) {
    case InvItem.types.TX:
    case InvItem.types.WITNESS_TX:
      return true;
    default:
      return false;
  }
};

/**
 * Test whether the inv item has the witness bit set.
 * @returns {Boolean}
 */

InvItem.prototype.hasWitness = function hasWitness() {
  return (this.type & InvItem.WITNESS_FLAG) !== 0;
};

/**
 * Get little-endian hash.
 * @returns {Hash}
 */

InvItem.prototype.rhash = function rhash() {
  return util.revHex(this.hash);
};

/*
 * Expose
 */

module.exports = InvItem;


/***/ }),
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curve = exports;

curve.base = __webpack_require__(141);
curve.short = __webpack_require__(142);
curve.mont = __webpack_require__(144);
curve.edwards = __webpack_require__(145);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

try {
  var util = __webpack_require__(54);
  if (typeof util.inherits !== 'function') throw '';
  module.exports = util.inherits;
} catch (e) {
  module.exports = __webpack_require__(143);
}


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * stack.js - stack object for wmcc_core.
 */



const assert = __webpack_require__(0);
const common = __webpack_require__(27);
const ScriptNum = __webpack_require__(32);

/**
 * Represents the stack of a Script during execution.
 * @alias module:script.Stack
 * @constructor
 * @param {Buffer[]?} items - Stack items.
 * @property {Buffer[]} items - Stack items.
 * @property {Number} length - Size of stack.
 */

function Stack(items) {
  if (!(this instanceof Stack))
    return new Stack(items);

  this.items = items || [];
}

/*
 * Expose length setter and getter.
 */

Object.defineProperty(Stack.prototype, 'length', {
  get() {
    return this.items.length;
  },
  set(length) {
    this.items.length = length;
    return this.items.length;
  }
});

/**
 * Instantiate a key and value iterator.
 * @returns {StackIterator}
 */

Stack.prototype[Symbol.iterator] = function iterator() {
  return this.items[Symbol.iterator]();
};

/**
 * Instantiate a value-only iterator.
 * @returns {StackIterator}
 */

Stack.prototype.values = function values() {
  return this.items.values();
};

/**
 * Instantiate a key and value iterator.
 * @returns {StackIterator}
 */

Stack.prototype.entries = function entries() {
  return this.items.entries();
};

/**
 * Inspect the stack.
 * @returns {String} Human-readable stack.
 */

Stack.prototype.inspect = function inspect() {
  return `<Stack: ${this.toString()}>`;
};

/**
 * Convert the stack to a string.
 * @returns {String} Human-readable stack.
 */

Stack.prototype.toString = function toString() {
  const out = [];

  for (const item of this.items)
    out.push(item.toString('hex'));

  return out.join(' ');
};

/**
 * Format the stack as wmccd asm.
 * @param {Boolean?} decode - Attempt to decode hash types.
 * @returns {String} Human-readable script.
 */

Stack.prototype.toASM = function toASM(decode) {
  const out = [];

  for (const item of this.items)
    out.push(common.toASM(item, decode));

  return out.join(' ');
};

/**
 * Clone the stack.
 * @returns {Stack} Cloned stack.
 */

Stack.prototype.clone = function clone() {
  return new Stack(this.items.slice());
};

/**
 * Clear the stack.
 * @returns {Stack}
 */

Stack.prototype.clear = function clear() {
  this.items.length = 0;
  return this;
};

/**
 * Get a stack item by index.
 * @param {Number} index
 * @returns {Buffer|null}
 */

Stack.prototype.get = function get(index) {
  if (index < 0)
    index += this.items.length;

  if (index < 0 || index >= this.items.length)
    return null;

  return this.items[index];
};

/**
 * Pop a stack item.
 * @see Array#pop
 * @returns {Buffer|null}
 */

Stack.prototype.pop = function pop() {
  const item = this.items.pop();
  return item || null;
};

/**
 * Shift a stack item.
 * @see Array#shift
 * @returns {Buffer|null}
 */

Stack.prototype.shift = function shift() {
  const item = this.items.shift();
  return item || null;
};

/**
 * Remove an item.
 * @param {Number} index
 * @returns {Buffer}
 */

Stack.prototype.remove = function remove(index) {
  if (index < 0)
    index += this.items.length;

  if (index < 0 || index >= this.items.length)
    return null;

  const items = this.items.splice(index, 1);

  if (items.length === 0)
    return null;

  return items[0];
};

/**
 * Set stack item at index.
 * @param {Number} index
 * @param {Buffer} value
 * @returns {Buffer}
 */

Stack.prototype.set = function set(index, item) {
  if (index < 0)
    index += this.items.length;

  assert(Buffer.isBuffer(item));
  assert(index >= 0 && index <= this.items.length);

  this.items[index] = item;

  return this;
};

/**
 * Push item onto stack.
 * @see Array#push
 * @param {Buffer} item
 * @returns {Number} Stack size.
 */

Stack.prototype.push = function push(item) {
  assert(Buffer.isBuffer(item));
  this.items.push(item);
  return this;
};

/**
 * Unshift item from stack.
 * @see Array#unshift
 * @param {Buffer} item
 * @returns {Number}
 */

Stack.prototype.unshift = function unshift(item) {
  assert(Buffer.isBuffer(item));
  this.items.unshift(item);
  return this;
};

/**
 * Insert an item.
 * @param {Number} index
 * @param {Buffer} item
 * @returns {Buffer}
 */

Stack.prototype.insert = function insert(index, item) {
  if (index < 0)
    index += this.items.length;

  assert(Buffer.isBuffer(item));
  assert(index >= 0 && index <= this.items.length);

  this.items.splice(index, 0, item);

  return this;
};

/**
 * Erase stack items.
 * @param {Number} start
 * @param {Number} end
 * @returns {Buffer[]}
 */

Stack.prototype.erase = function erase(start, end) {
  if (start < 0)
    start = this.items.length + start;

  if (end < 0)
    end = this.items.length + end;

  this.items.splice(start, end - start);
};

/**
 * Swap stack values.
 * @param {Number} i1 - Index 1.
 * @param {Number} i2 - Index 2.
 */

Stack.prototype.swap = function swap(i1, i2) {
  if (i1 < 0)
    i1 = this.items.length + i1;

  if (i2 < 0)
    i2 = this.items.length + i2;

  const v1 = this.items[i1];
  const v2 = this.items[i2];

  this.items[i1] = v2;
  this.items[i2] = v1;
};

/*
 * Data
 */

Stack.prototype.getData = function getData(index) {
  return this.get(index);
};

Stack.prototype.popData = function popData() {
  return this.pop();
};

Stack.prototype.shiftData = function shiftData() {
  return this.shift();
};

Stack.prototype.removeData = function removeData(index) {
  return this.remove(index);
};

Stack.prototype.setData = function setData(index, data) {
  return this.set(index, data);
};

Stack.prototype.pushData = function pushData(data) {
  return this.push(data);
};

Stack.prototype.unshiftData = function unshiftData(data) {
  return this.unshift(data);
};

Stack.prototype.insertData = function insertData(index, data) {
  return this.insert(index, data);
};

/*
 * Length
 */

Stack.prototype.getLength = function getLength(index) {
  const item = this.get(index);
  return item ? item.length : -1;
};

/*
 * String
 */

Stack.prototype.getString = function getString(index, enc) {
  const item = this.get(index);
  return item ? Stack.toString(item, enc) : null;
};

Stack.prototype.popString = function popString(enc) {
  const item = this.pop();
  return item ? Stack.toString(item, enc) : null;
};

Stack.prototype.shiftString = function shiftString(enc) {
  const item = this.shift();
  return item ? Stack.toString(item, enc) : null;
};

Stack.prototype.removeString = function removeString(index, enc) {
  const item = this.remove(index);
  return item ? Stack.toString(item, enc) : null;
};

Stack.prototype.setString = function setString(index, str, enc) {
  return this.set(index, Stack.fromString(str, enc));
};

Stack.prototype.pushString = function pushString(str, enc) {
  return this.push(Stack.fromString(str, enc));
};

Stack.prototype.unshiftString = function unshiftString(str, enc) {
  return this.unshift(Stack.fromString(str, enc));
};

Stack.prototype.insertString = function insertString(index, str, enc) {
  return this.insert(index, Stack.fromString(str, enc));
};

/*
 * Num
 */

Stack.prototype.getNum = function getNum(index, minimal, limit) {
  const item = this.get(index);
  return item ? Stack.toNum(item, minimal, limit) : null;
};

Stack.prototype.popNum = function popNum(minimal, limit) {
  const item = this.pop();
  return item ? Stack.toNum(item, minimal, limit) : null;
};

Stack.prototype.shiftNum = function shiftNum(minimal, limit) {
  const item = this.shift();
  return item ? Stack.toNum(item, minimal, limit) : null;
};

Stack.prototype.removeNum = function removeNum(index, minimal, limit) {
  const item = this.remove(index);
  return item ? Stack.toNum(item, minimal, limit) : null;
};

Stack.prototype.setNum = function setNum(index, num) {
  return this.set(index, Stack.fromNum(num));
};

Stack.prototype.pushNum = function pushNum(num) {
  return this.push(Stack.fromNum(num));
};

Stack.prototype.unshiftNum = function unshiftNum(num) {
  return this.unshift(Stack.fromNum(num));
};

Stack.prototype.insertNum = function insertNum(index, num) {
  return this.insert(index, Stack.fromNum(num));
};

/*
 * Int
 */

Stack.prototype.getInt = function getInt(index, minimal, limit) {
  const item = this.get(index);
  return item ? Stack.toInt(item, minimal, limit) : -1;
};

Stack.prototype.popInt = function popInt(minimal, limit) {
  const item = this.pop();
  return item ? Stack.toInt(item, minimal, limit) : -1;
};

Stack.prototype.shiftInt = function shiftInt(minimal, limit) {
  const item = this.shift();
  return item ? Stack.toInt(item, minimal, limit) : -1;
};

Stack.prototype.removeInt = function removeInt(index, minimal, limit) {
  const item = this.remove(index);
  return item ? Stack.toInt(item, minimal, limit) : -1;
};

Stack.prototype.setInt = function setInt(index, num) {
  return this.set(index, Stack.fromInt(num));
};

Stack.prototype.pushInt = function pushInt(num) {
  return this.push(Stack.fromInt(num));
};

Stack.prototype.unshiftInt = function unshiftInt(num) {
  return this.unshift(Stack.fromInt(num));
};

Stack.prototype.insertInt = function insertInt(index, num) {
  return this.insert(index, Stack.fromInt(num));
};

/*
 * Bool
 */

Stack.prototype.getBool = function getBool(index) {
  const item = this.get(index);
  return item ? Stack.toBool(item) : false;
};

Stack.prototype.popBool = function popBool() {
  const item = this.pop();
  return item ? Stack.toBool(item) : false;
};

Stack.prototype.shiftBool = function shiftBool() {
  const item = this.shift();
  return item ? Stack.toBool(item) : false;
};

Stack.prototype.removeBool = function removeBool(index) {
  const item = this.remove(index);
  return item ? Stack.toBool(item) : false;
};

Stack.prototype.setBool = function setBool(index, value) {
  return this.set(index, Stack.fromBool(value));
};

Stack.prototype.pushBool = function pushBool(value) {
  return this.push(Stack.fromBool(value));
};

Stack.prototype.unshiftBool = function unshiftBool(value) {
  return this.unshift(Stack.fromBool(value));
};

Stack.prototype.insertBool = function insertBool(index, value) {
  return this.insert(index, Stack.fromBool(value));
};

/**
 * Test an object to see if it is a Stack.
 * @param {Object} obj
 * @returns {Boolean}
 */

Stack.isStack = function isStack(obj) {
  return obj instanceof Stack;
};

/*
 * Encoding
 */

Stack.toString = function toString(item, enc) {
  assert(Buffer.isBuffer(item));
  return item.toString(enc || 'utf8');
};

Stack.fromString = function fromString(str, enc) {
  assert(typeof str === 'string');
  return Buffer.from(str, enc || 'utf8');
};

Stack.toNum = function toNum(item, minimal, limit) {
  return ScriptNum.decode(item, minimal, limit);
};

Stack.fromNum = function fromNum(num) {
  assert(ScriptNum.isScriptNum(num));
  return num.encode();
};

Stack.toInt = function toInt(item, minimal, limit) {
  const num = Stack.toNum(item, minimal, limit);
  return num.getInt();
};

Stack.fromInt = function fromInt(int) {
  assert(typeof int === 'number');

  if (int >= -1 && int <= 16)
    return common.small[int + 1];

  const num = ScriptNum.fromNumber(int);

  return Stack.fromNum(num);
};

Stack.toBool = function toBool(item) {
  assert(Buffer.isBuffer(item));

  for (let i = 0; i < item.length; i++) {
    if (item[i] !== 0) {
      // Cannot be negative zero
      if (i === item.length - 1 && item[i] === 0x80)
        return false;
      return true;
    }
  }

  return false;
};

Stack.fromBool = function fromBool(value) {
  assert(typeof value === 'boolean');
  return Stack.fromInt(value ? 1 : 0);
};

/*
 * Expose
 */

module.exports = Stack;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * input.js - input object for wmcc_core.
 */



const assert = __webpack_require__(0);
const util = __webpack_require__(1);
const Network = __webpack_require__(6);
const Script = __webpack_require__(8);
const Witness = __webpack_require__(56);
const Outpoint = __webpack_require__(21);
const StaticWriter = __webpack_require__(4);
const BufferReader = __webpack_require__(2);

/**
 * Represents a transaction input.
 * @alias module:primitives.Input
 * @constructor
 * @param {NakedInput} options
 * @property {Outpoint} prevout - Outpoint.
 * @property {Script} script - Input script / scriptSig.
 * @property {Number} sequence - nSequence.
 * @property {Witness} witness - Witness (empty if not present).
 */

function Input(options) {
  if (!(this instanceof Input))
    return new Input(options);

  this.prevout = new Outpoint();
  this.script = new Script();
  this.sequence = 0xffffffff;
  this.witness = new Witness();

  if (options)
    this.fromOptions(options);
}

/**
 * Inject properties from options object.
 * @private
 * @param {Object} options
 */

Input.prototype.fromOptions = function fromOptions(options) {
  assert(options, 'Input data is required.');

  this.prevout.fromOptions(options.prevout);

  if (options.script)
    this.script.fromOptions(options.script);

  if (options.sequence != null) {
    assert(util.isU32(options.sequence), 'Sequence must be a uint32.');
    this.sequence = options.sequence;
  }

  if (options.witness)
    this.witness.fromOptions(options.witness);

  return this;
};

/**
 * Instantiate an Input from options object.
 * @param {NakedInput} options
 * @returns {Input}
 */

Input.fromOptions = function fromOptions(options) {
  return new Input().fromOptions(options);
};

/**
 * Clone the input.
 * @returns {Input}
 */

Input.prototype.clone = function clone() {
  const input = new Input();
  input.prevout = this.prevout;
  input.script.inject(this.script);
  input.sequence = this.sequence;
  input.witness.inject(this.witness);
  return input;
};

/**
 * Test equality against another input.
 * @param {Input} input
 * @returns {Boolean}
 */

Input.prototype.equals = function equals(input) {
  assert(Input.isInput(input));
  return this.prevout.equals(input.prevout);
};

/**
 * Compare against another input (BIP69).
 * @param {Input} input
 * @returns {Number}
 */

Input.prototype.compare = function compare(input) {
  assert(Input.isInput(input));
  return this.prevout.compare(input.prevout);
};

/**
 * Get the previous output script type as a string.
 * Will "guess" based on the input script and/or
 * witness if coin is not available.
 * @param {Coin?} coin
 * @returns {ScriptType} type
 */

Input.prototype.getType = function getType(coin) {
  if (this.isCoinbase())
    return 'coinbase';

  if (coin)
    return coin.getType();

  let type;

  if (this.witness.items.length > 0)
    type = this.witness.getInputType();
  else
    type = this.script.getInputType();

  return Script.typesByVal[type].toLowerCase();
};

/**
 * Get the redeem script. Will attempt to resolve nested
 * redeem scripts if witnessscripthash is behind a scripthash.
 * @param {Coin?} coin
 * @returns {Script?} Redeem script.
 */

Input.prototype.getRedeem = function getRedeem(coin) {
  if (this.isCoinbase())
    return null;

  if (!coin) {
    if (this.witness.isScripthashInput())
      return this.witness.getRedeem();

    if (this.script.isScripthashInput())
      return this.script.getRedeem();

    return null;
  }

  let prev = coin.script;
  let redeem = null;

  if (prev.isScripthash()) {
    prev = this.script.getRedeem();
    redeem = prev;
  }

  if (prev && prev.isWitnessScripthash()) {
    prev = this.witness.getRedeem();
    redeem = prev;
  }

  return redeem;
};

/**
 * Get the redeem script type.
 * @param {Coin?} coin
 * @returns {String} subtype
 */

Input.prototype.getSubtype = function getSubtype(coin) {
  if (this.isCoinbase())
    return null;

  const redeem = this.getRedeem(coin);

  if (!redeem)
    return null;

  const type = redeem.getType();

  return Script.typesByVal[type].toLowerCase();
};

/**
 * Get the previous output script's address. Will "guess"
 * based on the input script and/or witness if coin
 * is not available.
 * @param {Coin?} coin
 * @returns {Address?} addr
 */

Input.prototype.getAddress = function getAddress(coin) {
  if (this.isCoinbase())
    return null;

  if (coin)
    return coin.getAddress();

  if (this.witness.items.length > 0)
    return this.witness.getInputAddress();

  return this.script.getInputAddress();
};

/**
 * Get the address hash.
 * @param {String?} enc
 * @returns {Hash} hash
 */

Input.prototype.getHash = function getHash(enc) {
  const addr = this.getAddress();

  if (!addr)
    return null;

  return addr.getHash(enc);
};

/**
 * Test to see if nSequence is equal to uint32max.
 * @returns {Boolean}
 */

Input.prototype.isFinal = function isFinal() {
  return this.sequence === 0xffffffff;
};

/**
 * Test to see if nSequence is less than 0xfffffffe.
 * @returns {Boolean}
 */

Input.prototype.isRBF = function isRBF() {
  return this.sequence < 0xfffffffe;
};

/**
 * Test to see if outpoint is null.
 * @returns {Boolean}
 */

Input.prototype.isCoinbase = function isCoinbase() {
  return this.prevout.isNull();
};

/**
 * Convert the input to a more user-friendly object.
 * @returns {Object}
 */

Input.prototype.inspect = function inspect() {
  return this.format();
};

/**
 * Convert the input to a more user-friendly object.
 * @param {Coin?} coin
 * @returns {Object}
 */

Input.prototype.format = function format(coin) {
  return {
    type: this.getType(coin),
    subtype: this.getSubtype(coin),
    address: this.getAddress(coin),
    script: this.script,
    witness: this.witness,
    redeem: this.getRedeem(coin),
    sequence: this.sequence,
    prevout: this.prevout,
    coin: coin || null
  };
};

/**
 * Convert the input to an object suitable
 * for JSON serialization.
 * @returns {Object}
 */

Input.prototype.toJSON = function toJSON(network, coin) {
  return this.getJSON();
};

/**
 * Convert the input to an object suitable
 * for JSON serialization. Note that the hashes
 * will be reversed to abide by wmccd's legacy
 * of little-endian uint256s.
 * @param {Network} network
 * @param {Coin} coin
 * @returns {Object}
 */

Input.prototype.getJSON = function getJSON(network, coin) {
  network = Network.get(network);

  let addr;
  if (!coin) {
    addr = this.getAddress();
    if (addr)
      addr = addr.toString(network);
  }

  return {
    prevout: this.prevout.toJSON(),
    script: this.script.toJSON(),
    witness: this.witness.toJSON(),
    sequence: this.sequence,
    address: addr,
    coin: coin ? coin.getJSON(network, true) : undefined
  };
};

/**
 * Inject properties from a JSON object.
 * @private
 * @param {Object} json
 */

Input.prototype.fromJSON = function fromJSON(json) {
  assert(json, 'Input data is required.');
  assert(util.isU32(json.sequence), 'Sequence must be a uint32.');
  this.prevout.fromJSON(json.prevout);
  this.script.fromJSON(json.script);
  this.witness.fromJSON(json.witness);
  this.sequence = json.sequence;
  return this;
};

/**
 * Instantiate an Input from a jsonified input object.
 * @param {Object} json - The jsonified input object.
 * @returns {Input}
 */

Input.fromJSON = function fromJSON(json) {
  return new Input().fromJSON(json);
};

/**
 * Calculate size of serialized input.
 * @returns {Number}
 */

Input.prototype.getSize = function getSize() {
  return 40 + this.script.getVarSize();
};

/**
 * Serialize the input.
 * @param {String?} enc - Encoding, can be `'hex'` or null.
 * @returns {Buffer|String}
 */

Input.prototype.toRaw = function toRaw() {
  const size = this.getSize();
  return this.toWriter(new StaticWriter(size)).render();
};

/**
 * Write the input to a buffer writer.
 * @param {BufferWriter} bw
 */

Input.prototype.toWriter = function toWriter(bw) {
  this.prevout.toWriter(bw);
  bw.writeVarBytes(this.script.toRaw());
  bw.writeU32(this.sequence);
  return bw;
};

/**
 * Inject properties from buffer reader.
 * @private
 * @param {BufferReader} br
 */

Input.prototype.fromReader = function fromReader(br) {
  this.prevout.fromReader(br);
  this.script.fromRaw(br.readVarBytes());
  this.sequence = br.readU32();
  return this;
};

/**
 * Inject properties from serialized data.
 * @param {Buffer} data
 */

Input.prototype.fromRaw = function fromRaw(data) {
  return this.fromReader(new BufferReader(data));
};

/**
 * Instantiate an input from a buffer reader.
 * @param {BufferReader} br
 * @returns {Input}
 */

Input.fromReader = function fromReader(br) {
  return new Input().fromReader(br);
};

/**
 * Instantiate an input from a serialized Buffer.
 * @param {Buffer} data
 * @param {String?} enc - Encoding, can be `'hex'` or null.
 * @returns {Input}
 */

Input.fromRaw = function fromRaw(data, enc) {
  if (typeof data === 'string')
    data = Buffer.from(data, enc);
  return new Input().fromRaw(data);
};

/**
 * Inject properties from outpoint.
 * @private
 * @param {Outpoint} outpoint
 */

Input.prototype.fromOutpoint = function fromOutpoint(outpoint) {
  assert(typeof outpoint.hash === 'string');
  assert(typeof outpoint.index === 'number');
  this.prevout.hash = outpoint.hash;
  this.prevout.index = outpoint.index;
  return this;
};

/**
 * Instantiate input from outpoint.
 * @param {Outpoint}
 * @returns {Input}
 */

Input.fromOutpoint = function fromOutpoint(outpoint) {
  return new Input().fromOutpoint(outpoint);
};

/**
 * Inject properties from coin.
 * @private
 * @param {Coin} coin
 */

Input.prototype.fromCoin = function fromCoin(coin) {
  assert(typeof coin.hash === 'string');
  assert(typeof coin.index === 'number');
  this.prevout.hash = coin.hash;
  this.prevout.index = coin.index;
  return this;
};

/**
 * Instantiate input from coin.
 * @param {Coin}
 * @returns {Input}
 */

Input.fromCoin = function fromCoin(coin) {
  return new Input().fromCoin(coin);
};

/**
 * Inject properties from transaction.
 * @private
 * @param {TX} tx
 * @param {Number} index
 */

Input.prototype.fromTX = function fromTX(tx, index) {
  assert(tx);
  assert(typeof index === 'number');
  assert(index >= 0 && index < tx.outputs.length);
  this.prevout.hash = tx.hash('hex');
  this.prevout.index = index;
  return this;
};

/**
 * Instantiate input from tx.
 * @param {TX} tx
 * @param {Number} index
 * @returns {Input}
 */

Input.fromTX = function fromTX(tx, index) {
  return new Input().fromTX(tx, index);
};

/**
 * Test an object to see if it is an Input.
 * @param {Object} obj
 * @returns {Boolean}
 */

Input.isInput = function isInput(obj) {
  return obj instanceof Input;
};

/*
 * Expose
 */

module.exports = Input;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * bloom.js - bloom filter for wmcc_core.
 */



const assert = __webpack_require__(0);
const murmur3 = __webpack_require__(68);
const BufferReader = __webpack_require__(2);
const StaticWriter = __webpack_require__(4);
const encoding = __webpack_require__(3);
const sum32 = murmur3.sum32;
const mul32 = murmur3.mul32;
const DUMMY = Buffer.alloc(0);

/*
 * Constants
 */

const LN2SQUARED = 0.4804530139182014246671025263266649717305529515945455;
const LN2 = 0.6931471805599453094172321214581765680755001343602552;

/**
 * Bloom Filter
 * @alias module:utils.Bloom
 * @constructor
 * @param {Number} size - Filter size in bits.
 * @param {Number} n - Number of hash functions.
 * @param {Number} tweak - Seed value.
 * @param {Number|String} - Update type.
 * @property {Buffer} filter
 * @property {Number} size
 * @property {Number} n
 * @property {Number} tweak
 * @property {Number} update - Update flag (see {@link Bloom.flags}).
 */

function Bloom(size, n, tweak, update) {
  if (!(this instanceof Bloom))
    return new Bloom(size, n, tweak, update);

  this.filter = DUMMY;
  this.size = 0;
  this.n = 0;
  this.tweak = 0;
  this.update = Bloom.flags.NONE;

  if (size != null)
    this.fromOptions(size, n, tweak, update);
}

/**
 * Max bloom filter size.
 * @const {Number}
 * @default
 */

Bloom.MAX_BLOOM_FILTER_SIZE = 36000;

/**
 * Max number of hash functions.
 * @const {Number}
 * @default
 */

Bloom.MAX_HASH_FUNCS = 50;

/**
 * Bloom filter update flags.
 * @enum {Number}
 * @default
 */

Bloom.flags = {
  /**
   * Never update the filter with outpoints.
   */

  NONE: 0,

  /**
   * Always update the filter with outpoints.
   */

  ALL: 1,

  /**
   * Only update the filter with outpoints if it is
   * "asymmetric" in terms of addresses (pubkey/multisig).
   */

  PUBKEY_ONLY: 2
};

/**
 * Bloom filter update flags by value.
 * @const {RevMap}
 */

Bloom.flagsByVal = {
  0: 'NONE',
  1: 'ALL',
  2: 'PUBKEY_ONLY'
};

/**
 * Inject properties from options.
 * @private
 * @param {Number} size - Filter size in bits.
 * @param {Number} n - Number of hash functions.
 * @param {Number} tweak - Seed value.
 * @param {Number|String} - Update type.
 * @returns {Bloom}
 */

Bloom.prototype.fromOptions = function fromOptions(size, n, tweak, update) {
  assert(typeof size === 'number', '`size` must be a number.');
  assert(size > 0, '`size` must be greater than zero.');
  assert(Number.isSafeInteger(size), '`size` must be an integer.');

  size -= size % 8;

  const filter = Buffer.allocUnsafe(size / 8);
  filter.fill(0);

  if (tweak == null || tweak === -1)
    tweak = (Math.random() * 0x100000000) >>> 0;

  if (update == null || update === -1)
    update = Bloom.flags.NONE;

  if (typeof update === 'string') {
    update = Bloom.flags[update.toUpperCase()];
    assert(update != null, 'Unknown update flag.');
  }

  assert(size > 0, '`size` must be greater than zero.');
  assert(n > 0, '`n` must be greater than zero.');
  assert(Number.isSafeInteger(n), '`n` must be an integer.');
  assert(typeof tweak === 'number', '`tweak` must be a number.');
  assert(Number.isSafeInteger(tweak), '`tweak` must be an integer.');
  assert(Bloom.flagsByVal[update], 'Unknown update flag.');

  this.filter = filter;
  this.size = size;
  this.n = n;
  this.tweak = tweak;
  this.update = update;

  return this;
};

/**
 * Instantiate bloom filter from options.
 * @param {Number} size - Filter size in bits.
 * @param {Number} n - Number of hash functions.
 * @param {Number} tweak - Seed value.
 * @param {Number|String} - Update type.
 * @returns {Bloom}
 */

Bloom.fromOptions = function fromOptions(size, n, tweak, update) {
  return new Bloom().fromOptions(size, n, tweak, update);
};

/**
 * Perform the mumur3 hash on data.
 * @param {Buffer} val
 * @param {Number} n
 * @returns {Number}
 */

Bloom.prototype.hash = function hash(val, n) {
  return murmur3(val, sum32(mul32(n, 0xfba4c795), this.tweak)) % this.size;
};

/**
 * Reset the filter.
 */

Bloom.prototype.reset = function reset() {
  this.filter.fill(0);
};

/**
 * Add data to the filter.
 * @param {Buffer|String}
 * @param {String?} enc - Can be any of the Buffer object's encodings.
 */

Bloom.prototype.add = function add(val, enc) {
  if (typeof val === 'string')
    val = Buffer.from(val, enc);

  for (let i = 0; i < this.n; i++) {
    const index = this.hash(val, i);
    this.filter[index >>> 3] |= 1 << (7 & index);
  }
};

/**
 * Test whether data is present in the filter.
 * @param {Buffer|String} val
 * @param {String?} enc - Can be any of the Buffer object's encodings.
 * @returns {Boolean}
 */

Bloom.prototype.test = function test(val, enc) {
  if (typeof val === 'string')
    val = Buffer.from(val, enc);

  for (let i = 0; i < this.n; i++) {
    const index = this.hash(val, i);
    if ((this.filter[index >>> 3] & (1 << (7 & index))) === 0)
      return false;
  }

  return true;
};

/**
 * Test whether data is present in the
 * filter and potentially add data.
 * @param {Buffer|String} val
 * @param {String?} enc - Can be any of the Buffer object's encodings.
 * @returns {Boolean} Whether data was added.
 */

Bloom.prototype.added = function added(val, enc) {
  let ret = false;

  if (typeof val === 'string')
    val = Buffer.from(val, enc);

  for (let i = 0; i < this.n; i++) {
    const index = this.hash(val, i);
    if (!ret && (this.filter[index >>> 3] & (1 << (7 & index))) === 0)
      ret = true;
    this.filter[index >>> 3] |= 1 << (7 & index);
  }

  return ret;
};

/**
 * Create a filter from a false positive rate.
 * @param {Number} items - Expected number of items.
 * @param {Number} rate - False positive rate (0.0-1.0).
 * @param {Number|String} update
 * @example
 * Bloom.fromRate(800000, 0.0001, 'none');
 * @returns {Boolean}
 */

Bloom.fromRate = function fromRate(items, rate, update) {
  assert(typeof items === 'number', '`items` must be a number.');
  assert(items > 0, '`items` must be greater than zero.');
  assert(Number.isSafeInteger(items), '`items` must be an integer.');
  assert(typeof rate === 'number', '`rate` must be a number.');
  assert(rate >= 0 && rate <= 1, '`rate` must be between 0.0 and 1.0.');

  const bits = (-1 / LN2SQUARED * items * Math.log(rate)) | 0;
  const size = Math.max(8, bits);

  if (update !== -1) {
    assert(size <= Bloom.MAX_BLOOM_FILTER_SIZE * 8,
      'Bloom filter size violates policy limits!');
  }

  const n = Math.max(1, (size / items * LN2) | 0);

  if (update !== -1) {
    assert(n <= Bloom.MAX_HASH_FUNCS,
      'Bloom filter size violates policy limits!');
  }

  return new Bloom(size, n, -1, update);
};

/**
 * Ensure the filter is within the size limits.
 * @returns {Boolean}
 */

Bloom.prototype.isWithinConstraints = function isWithinConstraints() {
  if (this.size > Bloom.MAX_BLOOM_FILTER_SIZE * 8)
    return false;

  if (this.n > Bloom.MAX_HASH_FUNCS)
    return false;

  return true;
};

/**
 * Get serialization size.
 * @returns {Number}
 */

Bloom.prototype.getSize = function getSize() {
  return encoding.sizeVarBytes(this.filter) + 9;
};

/**
 * Write filter to buffer writer.
 * @param {BufferWriter} bw
 */

Bloom.prototype.toWriter = function toWriter(bw) {
  bw.writeVarBytes(this.filter);
  bw.writeU32(this.n);
  bw.writeU32(this.tweak);
  bw.writeU8(this.update);
  return bw;
};

/**
 * Serialize bloom filter.
 * @returns {Buffer}
 */

Bloom.prototype.toRaw = function toRaw() {
  const size = this.getSize();
  return this.toWriter(new StaticWriter(size)).render();
};

/**
 * Inject properties from buffer reader.
 * @private
 * @param {BufferReader} br
 */

Bloom.prototype.fromReader = function fromReader(br) {
  this.filter = br.readVarBytes();
  this.n = br.readU32();
  this.tweak = br.readU32();
  this.update = br.readU8();
  assert(Bloom.flagsByVal[this.update] != null, 'Unknown update flag.');
  return this;
};

/**
 * Inject properties from serialized data.
 * @private
 * @param {Buffer} data
 */

Bloom.prototype.fromRaw = function fromRaw(data) {
  return this.fromReader(new BufferReader(data));
};

/**
 * Instantiate bloom filter from buffer reader.
 * @param {BufferReader} br
 * @returns {Bloom}
 */

Bloom.fromReader = function fromReader(br) {
  return new Bloom().fromReader(br);
};

/**
 * Instantiate bloom filter from serialized data.
 * @param {Buffer} data
 * @param {String?} enc
 * @returns {Bloom}
 */

Bloom.fromRaw = function fromRaw(data, enc) {
  if (typeof data === 'string')
    data = Buffer.from(data, enc);
  return new Bloom().fromRaw(data);
};

/*
 * Expose
 */

module.exports = Bloom;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * coin.js - coin object for wmcc_core.
 */



const assert = __webpack_require__(0);
const util = __webpack_require__(1);
const Amount = __webpack_require__(20);
const Output = __webpack_require__(13);
const Script = __webpack_require__(8);
const Network = __webpack_require__(6);
const BufferReader = __webpack_require__(2);
const StaticWriter = __webpack_require__(4);
const encoding = __webpack_require__(3);

/**
 * Represents an unspent output.
 * @alias module:primitives.Coin
 * @constructor
 * @extends Output
 * @param {NakedCoin|Coin} options
 * @property {Number} version - Transaction version.
 * @property {Number} height - Transaction height (-1 if unconfirmed).
 * @property {Amount} value - Output value in wmcoins.
 * @property {Script} script - Output script.
 * @property {Boolean} coinbase - Whether the containing
 * transaction is a coinbase.
 * @property {Hash} hash - Transaction hash.
 * @property {Number} index - Output index.
 */

function Coin(options) {
  if (!(this instanceof Coin))
    return new Coin(options);

  this.version = 1;
  this.height = -1;
  this.value = 0;
  this.script = new Script();
  this.coinbase = false;
  this.hash = encoding.NULL_HASH;
  this.index = 0;

  if (options)
    this.fromOptions(options);
}

Object.setPrototypeOf(Coin.prototype, Output.prototype);

/**
 * Inject options into coin.
 * @private
 * @param {Object} options
 */

Coin.prototype.fromOptions = function fromOptions(options) {
  assert(options, 'Coin data is required.');

  if (options.version != null) {
    assert(util.isU32(options.version), 'Version must be a uint32.');
    this.version = options.version;
  }

  if (options.height != null) {
    if (options.height !== -1) {
      assert(util.isU32(options.height), 'Height must be a uint32.');
      this.height = options.height;
    } else {
      this.height = -1;
    }
  }

  if (options.value != null) {
    assert(util.isU64(options.value), 'Value must be a uint64.');
    this.value = options.value;
  }

  if (options.script)
    this.script.fromOptions(options.script);

  if (options.coinbase != null) {
    assert(typeof options.coinbase === 'boolean',
      'Coinbase must be a boolean.');
    this.coinbase = options.coinbase;
  }

  if (options.hash != null) {
    assert(typeof options.hash === 'string', 'Hash must be a string.');
    this.hash = options.hash;
  }

  if (options.index != null) {
    assert(util.isU32(options.index), 'Index must be a uint32.');
    this.index = options.index;
  }

  return this;
};

/**
 * Instantiate Coin from options object.
 * @private
 * @param {Object} options
 */

Coin.fromOptions = function fromOptions(options) {
  return new Coin().fromOptions(options);
};

/**
 * Clone the coin.
 * @private
 * @returns {Coin}
 */

Coin.prototype.clone = function clone() {
  assert(false, 'Coins are not cloneable.');
};

/**
 * Calculate number of confirmations since coin was created.
 * @param {Number?} height - Current chain height. Network
 * height is used if not passed in.
 * @return {Number}
 */

Coin.prototype.getDepth = function getDepth(height) {
  assert(typeof height === 'number', 'Must pass a height.');

  if (this.height === -1)
    return 0;

  if (height === -1)
    return 0;

  if (height < this.height)
    return 0;

  return height - this.height + 1;
};

/**
 * Serialize coin to a key
 * suitable for a hash table.
 * @returns {String}
 */

Coin.prototype.toKey = function toKey() {
  return this.hash + this.index;
};

/**
 * Inject properties from hash table key.
 * @private
 * @param {String} key
 * @returns {Coin}
 */

Coin.prototype.fromKey = function fromKey(key) {
  assert(key.length > 64);
  this.hash = key.slice(0, 64);
  this.index = parseInt(key.slice(64), 10);
  return this;
};

/**
 * Instantiate coin from hash table key.
 * @param {String} key
 * @returns {Coin}
 */

Coin.fromKey = function fromKey(key) {
  return new Coin().fromKey(key);
};

/**
 * Get little-endian hash.
 * @returns {Hash}
 */

Coin.prototype.rhash = function rhash() {
  return util.revHex(this.hash);
};

/**
 * Get little-endian hash.
 * @returns {Hash}
 */

Coin.prototype.txid = function txid() {
  return this.rhash();
};

/**
 * Convert the coin to a more user-friendly object.
 * @returns {Object}
 */

Coin.prototype.inspect = function inspect() {
  return {
    type: this.getType(),
    version: this.version,
    height: this.height,
    value: Amount.wmcc(this.value),
    script: this.script,
    coinbase: this.coinbase,
    hash: this.hash ? util.revHex(this.hash) : null,
    index: this.index,
    address: this.getAddress()
  };
};

/**
 * Convert the coin to an object suitable
 * for JSON serialization.
 * @returns {Object}
 */

Coin.prototype.toJSON = function toJSON() {
  return this.getJSON();
};

/**
 * Convert the coin to an object suitable
 * for JSON serialization. Note that the hash
 * will be reversed to abide by wmccd's legacy
 * of little-endian uint256s.
 * @param {Network} network
 * @param {Boolean} minimal
 * @returns {Object}
 */

Coin.prototype.getJSON = function getJSON(network, minimal) {
  let addr = this.getAddress();

  network = Network.get(network);

  if (addr)
    addr = addr.toString(network);

  return {
    version: this.version,
    height: this.height,
    value: this.value,
    script: this.script.toJSON(),
    address: addr,
    coinbase: this.coinbase,
    hash: !minimal ? this.rhash() : undefined,
    index: !minimal ? this.index : undefined
  };
};

/**
 * Inject JSON properties into coin.
 * @private
 * @param {Object} json
 */

Coin.prototype.fromJSON = function fromJSON(json) {
  assert(json, 'Coin data required.');
  assert(util.isU32(json.version), 'Version must be a uint32.');
  assert(json.height === -1 || util.isU32(json.height),
    'Height must be a uint32.');
  assert(util.isU64(json.value), 'Value must be a uint64.');
  assert(typeof json.coinbase === 'boolean', 'Coinbase must be a boolean.');

  this.version = json.version;
  this.height = json.height;
  this.value = json.value;
  this.script.fromJSON(json.script);
  this.coinbase = json.coinbase;

  if (json.hash != null) {
    assert(typeof json.hash === 'string', 'Hash must be a string.');
    assert(json.hash.length === 64, 'Hash must be a string.');
    assert(util.isU32(json.index), 'Index must be a uint32.');
    this.hash = util.revHex(json.hash);
    this.index = json.index;
  }

  return this;
};

/**
 * Instantiate an Coin from a jsonified coin object.
 * @param {Object} json - The jsonified coin object.
 * @returns {Coin}
 */

Coin.fromJSON = function fromJSON(json) {
  return new Coin().fromJSON(json);
};

/**
 * Calculate size of coin.
 * @returns {Number}
 */

Coin.prototype.getSize = function getSize() {
  return 17 + this.script.getVarSize();
};

/**
 * Write the coin to a buffer writer.
 * @param {BufferWriter} bw
 */

Coin.prototype.toWriter = function toWriter(bw) {
  let height = this.height;

  if (height === -1)
    height = 0x7fffffff;

  bw.writeU32(this.version);
  bw.writeU32(height);
  bw.writeI64(this.value);
  bw.writeVarBytes(this.script.toRaw());
  bw.writeU8(this.coinbase ? 1 : 0);

  return bw;
};

/**
 * Serialize the coin.
 * @returns {Buffer|String}
 */

Coin.prototype.toRaw = function toRaw() {
  const size = this.getSize();
  return this.toWriter(new StaticWriter(size)).render();
};

/**
 * Inject properties from serialized buffer writer.
 * @private
 * @param {BufferReader} br
 */

Coin.prototype.fromReader = function fromReader(br) {
  this.version = br.readU32();
  this.height = br.readU32();
  this.value = br.readI64();
  this.script.fromRaw(br.readVarBytes());
  this.coinbase = br.readU8() === 1;

  if (this.height === 0x7fffffff)
    this.height = -1;

  return this;
};

/**
 * Inject properties from serialized data.
 * @private
 * @param {Buffer} data
 */

Coin.prototype.fromRaw = function fromRaw(data) {
  return this.fromReader(new BufferReader(data));
};

/**
 * Instantiate a coin from a buffer reader.
 * @param {BufferReader} br
 * @returns {Coin}
 */

Coin.fromReader = function fromReader(br) {
  return new Coin().fromReader(br);
};

/**
 * Instantiate a coin from a serialized Buffer.
 * @param {Buffer} data
 * @param {String?} enc - Encoding, can be `'hex'` or null.
 * @returns {Coin}
 */

Coin.fromRaw = function fromRaw(data, enc) {
  if (typeof data === 'string')
    data = Buffer.from(data, enc);
  return new Coin().fromRaw(data);
};

/**
 * Inject properties from TX.
 * @param {TX} tx
 * @param {Number} index
 */

Coin.prototype.fromTX = function fromTX(tx, index, height) {
  assert(typeof index === 'number');
  assert(typeof height === 'number');
  assert(index >= 0 && index < tx.outputs.length);
  this.version = tx.version;
  this.height = height;
  this.value = tx.outputs[index].value;
  this.script = tx.outputs[index].script;
  this.coinbase = tx.isCoinbase();
  this.hash = tx.hash('hex');
  this.index = index;
  return this;
};

/**
 * Instantiate a coin from a TX
 * @param {TX} tx
 * @param {Number} index - Output index.
 * @returns {Coin}
 */

Coin.fromTX = function fromTX(tx, index, height) {
  return new Coin().fromTX(tx, index, height);
};

/**
 * Test an object to see if it is a Coin.
 * @param {Object} obj
 * @returns {Boolean}
 */

Coin.isCoin = function isCoin(obj) {
  return obj instanceof Coin;
};

/*
 * Expose
 */

module.exports = Coin;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2016-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * scrypt.js - scrypt for wmcc_core.
 *
 * Ported from:
 * https://github.com/Tarsnap/scrypt/blob/master/lib/crypto/crypto_scrypt-ref.c
 *
 * Copyright 2009 Colin Percival
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 * OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
 */

/* eslint camelcase: "off" */



/**
 * @module crypto/scrypt
 */

const co = __webpack_require__(16);
const pbkdf2 = __webpack_require__(70);
const native = __webpack_require__(18).binding;

/**
 * Javascript scrypt implementation. Scrypt is
 * used in bip38. WMCC_Core doesn't support bip38
 * yet, but here it is, just in case.
 * @alias module:crypto/scrypt.derive
 * @param {Buffer} passwd
 * @param {Buffer} salt
 * @param {Number} N
 * @param {Number} r
 * @param {Number} p
 * @param {Number} len
 * @returns {Buffer}
 */

function derive(passwd, salt, N, r, p, len) {
  if (r * p >= (1 << 30))
    throw new Error('EFBIG');

  if ((N & (N - 1)) !== 0 || N === 0)
    throw new Error('EINVAL');

  if (N > 0xffffffff)
    throw new Error('EINVAL');

  const XY = Buffer.allocUnsafe(256 * r);
  const V = Buffer.allocUnsafe(128 * r * N);

  const B = pbkdf2.derive(passwd, salt, 1, p * 128 * r, 'sha256');

  for (let i = 0; i < p; i++)
    smix(B, i * 128 * r, r, N, V, XY);

  return pbkdf2.derive(passwd, B, 1, len, 'sha256');
}

if (native)
  derive = native.scrypt;

/**
 * Asynchronous scrypt implementation.
 * @alias module:crypto/scrypt.deriveAsync
 * @function
 * @param {Buffer} passwd
 * @param {Buffer} salt
 * @param {Number} N
 * @param {Number} r
 * @param {Number} p
 * @param {Number} len
 * @returns {Promise}
 */

async function deriveAsync(passwd, salt, N, r, p, len) {
  if (r * p >= (1 << 30))
    throw new Error('EFBIG');

  if ((N & (N - 1)) !== 0 || N === 0)
    throw new Error('EINVAL');

  if (N > 0xffffffff)
    throw new Error('EINVAL');

  const XY = Buffer.allocUnsafe(256 * r);
  const V = Buffer.allocUnsafe(128 * r * N);

  const B = await pbkdf2.deriveAsync(passwd, salt, 1, p * 128 * r, 'sha256');

  for (let i = 0; i < p; i++)
    await smixAsync(B, i * 128 * r, r, N, V, XY);

  return await pbkdf2.deriveAsync(passwd, B, 1, len, 'sha256');
}

if (native)
  deriveAsync = native.scryptAsync;

/*
 * Helpers
 */

function salsa20_8(B) {
  const B32 = new Uint32Array(16);
  const x = new Uint32Array(16);

  for (let i = 0; i < 16; i++)
    B32[i] = B.readUInt32LE(i * 4, true);

  for (let i = 0; i < 16; i++)
    x[i] = B32[i];

  for (let i = 0; i < 8; i += 2) {
    x[4] ^= R(x[0] + x[12], 7);
    x[8] ^= R(x[4] + x[0], 9);
    x[12] ^= R(x[8] + x[4], 13);
    x[0] ^= R(x[12] + x[8], 18);

    x[9] ^= R(x[5] + x[1], 7);
    x[13] ^= R(x[9] + x[5], 9);
    x[1] ^= R(x[13] + x[9], 13);
    x[5] ^= R(x[1] + x[13], 18);

    x[14] ^= R(x[10] + x[6], 7);
    x[2] ^= R(x[14] + x[10], 9);
    x[6] ^= R(x[2] + x[14], 13);
    x[10] ^= R(x[6] + x[2], 18);

    x[3] ^= R(x[15] + x[11], 7);
    x[7] ^= R(x[3] + x[15], 9);
    x[11] ^= R(x[7] + x[3], 13);
    x[15] ^= R(x[11] + x[7], 18);

    x[1] ^= R(x[0] + x[3], 7);
    x[2] ^= R(x[1] + x[0], 9);
    x[3] ^= R(x[2] + x[1], 13);
    x[0] ^= R(x[3] + x[2], 18);

    x[6] ^= R(x[5] + x[4], 7);
    x[7] ^= R(x[6] + x[5], 9);
    x[4] ^= R(x[7] + x[6], 13);
    x[5] ^= R(x[4] + x[7], 18);

    x[11] ^= R(x[10] + x[9], 7);
    x[8] ^= R(x[11] + x[10], 9);
    x[9] ^= R(x[8] + x[11], 13);
    x[10] ^= R(x[9] + x[8], 18);

    x[12] ^= R(x[15] + x[14], 7);
    x[13] ^= R(x[12] + x[15], 9);
    x[14] ^= R(x[13] + x[12], 13);
    x[15] ^= R(x[14] + x[13], 18);
  }

  for (let i = 0; i < 16; i++)
    B32[i] += x[i];

  for (let i = 0; i < 16; i++)
    B.writeUInt32LE(B32[i], 4 * i, true);
}

function R(a, b) {
  return (a << b) | (a >>> (32 - b));
}

function blockmix_salsa8(B, Y, Yo, r) {
  const X = Buffer.allocUnsafe(64);

  blkcpy(X, B, 0, (2 * r - 1) * 64, 64);

  for (let i = 0; i < 2 * r; i++) {
    blkxor(X, B, 0, i * 64, 64);
    salsa20_8(X);
    blkcpy(Y, X, Yo + i * 64, 0, 64);
  }

  for (let i = 0; i < r; i++)
    blkcpy(B, Y, i * 64, Yo + (i * 2) * 64, 64);

  for (let i = 0; i < r; i++)
    blkcpy(B, Y, (i + r) * 64, Yo + (i * 2 + 1) * 64, 64);
}

function integerify(B, r) {
  return B.readUInt32LE((2 * r - 1) * 64, true);
}

function smix(B, Bo, r, N, V, XY) {
  const X = XY;
  const Y = XY;

  blkcpy(X, B, 0, Bo, 128 * r);

  for (let i = 0; i < N; i++) {
    blkcpy(V, X, i * (128 * r), 0, 128 * r);
    blockmix_salsa8(X, Y, 128 * r, r);
  }

  for (let i = 0; i < N; i++) {
    const j = integerify(X, r) & (N - 1);
    blkxor(X, V, 0, j * (128 * r), 128 * r);
    blockmix_salsa8(X, Y, 128 * r, r);
  }

  blkcpy(B, X, Bo, 0, 128 * r);
}

async function smixAsync(B, Bo, r, N, V, XY) {
  const X = XY;
  const Y = XY;

  blkcpy(X, B, 0, Bo, 128 * r);

  for (let i = 0; i < N; i++) {
    blkcpy(V, X, i * (128 * r), 0, 128 * r);
    blockmix_salsa8(X, Y, 128 * r, r);
    await co.wait();
  }

  for (let i = 0; i < N; i++) {
    const j = integerify(X, r) & (N - 1);
    blkxor(X, V, 0, j * (128 * r), 128 * r);
    blockmix_salsa8(X, Y, 128 * r, r);
    await co.wait();
  }

  blkcpy(B, X, Bo, 0, 128 * r);
}

function blkcpy(dest, src, s1, s2, len) {
  src.copy(dest, s1, s2, s2 + len);
}

function blkxor(dest, src, s1, s2, len) {
  for (let i = 0; i < len; i++)
    dest[s1 + i] ^= src[s2 + i];
}

/*
 * Expose
 */

exports.derive = derive;
exports.deriveAsync = deriveAsync;


/***/ }),
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * keyring.js - keyring object for wmcc_core.
 */



const assert = __webpack_require__(0);
const encoding = __webpack_require__(3);
const digest = __webpack_require__(5);
const Network = __webpack_require__(6);
const BufferReader = __webpack_require__(2);
const StaticWriter = __webpack_require__(4);
const base58 = __webpack_require__(25);
const Script = __webpack_require__(8);
const Address = __webpack_require__(11);
const Output = __webpack_require__(13);
const secp256k1 = __webpack_require__(12);

/**
 * Represents a key ring which amounts to an address.
 * @alias module:primitives.KeyRing
 * @constructor
 * @param {Object} options
 * @param {Network} network
 */

function KeyRing(options, network) {
  if (!(this instanceof KeyRing))
    return new KeyRing(options, network);

  this.network = Network.primary;
  this.witness = false;
  this.nested = false;
  this.publicKey = encoding.ZERO_KEY;
  this.privateKey = null;
  this.script = null;

  this._keyHash = null;
  this._keyAddress = null;
  this._program = null;
  this._nestedHash = null;
  this._nestedAddress = null;
  this._scriptHash160 = null;
  this._scriptHash256 = null;
  this._scriptAddress = null;

  if (options)
    this.fromOptions(options, network);
}

/**
 * Inject properties from options object.
 * @private
 * @param {Object} options
 */

KeyRing.prototype.fromOptions = function fromOptions(options, network) {
  if (!network)
    network = options.network;

  let key = toKey(options);

  if (Buffer.isBuffer(key))
    return this.fromKey(key, network);

  key = toKey(options.key);

  if (options.publicKey)
    key = toKey(options.publicKey);

  if (options.privateKey)
    key = toKey(options.privateKey);

  if (options.witness != null) {
    assert(typeof options.witness === 'boolean');
    this.witness = options.witness;
  }

  if (options.nested != null) {
    assert(typeof options.nested === 'boolean');
    this.nested = options.nested;
  }

  const script = options.script;
  const compress = options.compressed;

  if (script)
    return this.fromScript(key, script, compress, network);

  return this.fromKey(key, compress, network);
};

/**
 * Instantiate key ring from options.
 * @param {Object} options
 * @returns {KeyRing}
 */

KeyRing.fromOptions = function fromOptions(options) {
  return new KeyRing().fromOptions(options);
};

/**
 * Clear cached key/script hashes.
 */

KeyRing.prototype.refresh = function refresh() {
  this._keyHash = null;
  this._keyAddress = null;
  this._program = null;
  this._nestedHash = null;
  this._nestedAddress = null;
  this._scriptHash160 = null;
  this._scriptHash256 = null;
  this._scriptAddress = null;
};

/**
 * Inject data from private key.
 * @private
 * @param {Buffer} key
 * @param {Boolean?} compress
 * @param {(NetworkType|Network)?} network
 */

KeyRing.prototype.fromPrivate = function fromPrivate(key, compress, network) {
  assert(Buffer.isBuffer(key), 'Private key must be a buffer.');
  assert(secp256k1.privateKeyVerify(key), 'Not a valid private key.');

  if (typeof compress !== 'boolean') {
    network = compress;
    compress = null;
  }

  this.network = Network.get(network);
  this.privateKey = key;
  this.publicKey = secp256k1.publicKeyCreate(key, compress !== false);

  return this;
};

/**
 * Instantiate keyring from a private key.
 * @param {Buffer} key
 * @param {Boolean?} compress
 * @param {(NetworkType|Network)?} network
 * @returns {KeyRing}
 */

KeyRing.fromPrivate = function fromPrivate(key, compress, network) {
  return new KeyRing().fromPrivate(key, compress, network);
};

/**
 * Inject data from public key.
 * @private
 * @param {Buffer} key
 * @param {(NetworkType|Network)?} network
 */

KeyRing.prototype.fromPublic = function fromPublic(key, network) {
  assert(Buffer.isBuffer(key), 'Public key must be a buffer.');
  assert(secp256k1.publicKeyVerify(key), 'Not a valid public key.');
  this.network = Network.get(network);
  this.publicKey = key;
  return this;
};

/**
 * Generate a keyring.
 * @private
 * @param {Boolean?} compress
 * @param {(Network|NetworkType)?} network
 * @returns {KeyRing}
 */

KeyRing.prototype.generate = function generate(compress, network) {
  if (typeof compress !== 'boolean') {
    network = compress;
    compress = null;
  }

  const key = secp256k1.generatePrivateKey();

  return this.fromKey(key, compress, network);
};

/**
 * Generate a keyring.
 * @param {Boolean?} compress
 * @param {(Network|NetworkType)?} network
 * @returns {KeyRing}
 */

KeyRing.generate = function generate(compress, network) {
  return new KeyRing().generate(compress, network);
};

/**
 * Instantiate keyring from a public key.
 * @param {Buffer} publicKey
 * @param {(NetworkType|Network)?} network
 * @returns {KeyRing}
 */

KeyRing.fromPublic = function fromPublic(key, network) {
  return new KeyRing().fromPublic(key, network);
};

/**
 * Inject data from public key.
 * @private
 * @param {Buffer} privateKey
 * @param {Boolean?} compress
 * @param {(NetworkType|Network)?} network
 */

KeyRing.prototype.fromKey = function fromKey(key, compress, network) {
  assert(Buffer.isBuffer(key), 'Key must be a buffer.');

  if (typeof compress !== 'boolean') {
    network = compress;
    compress = null;
  }

  if (key.length === 32)
    return this.fromPrivate(key, compress !== false, network);

  return this.fromPublic(key, network);
};

/**
 * Instantiate keyring from a public key.
 * @param {Buffer} publicKey
 * @param {Boolean?} compress
 * @param {(NetworkType|Network)?} network
 * @returns {KeyRing}
 */

KeyRing.fromKey = function fromKey(key, compress, network) {
  return new KeyRing().fromKey(key, compress, network);
};

/**
 * Inject data from script.
 * @private
 * @param {Buffer} key
 * @param {Script} script
 * @param {Boolean?} compress
 * @param {(NetworkType|Network)?} network
 */

KeyRing.prototype.fromScript = function fromScript(key, script, compress, network) {
  assert(script instanceof Script, 'Non-script passed into KeyRing.');

  if (typeof compress !== 'boolean') {
    network = compress;
    compress = null;
  }

  this.fromKey(key, compress, network);
  this.script = script;

  return this;
};

/**
 * Instantiate keyring from script.
 * @param {Buffer} key
 * @param {Script} script
 * @param {Boolean?} compress
 * @param {(NetworkType|Network)?} network
 * @returns {KeyRing}
 */

KeyRing.fromScript = function fromScript(key, script, compress, network) {
  return new KeyRing().fromScript(key, script, compress, network);
};

/**
 * Calculate WIF serialization size.
 * @returns {Number}
 */

KeyRing.prototype.getSecretSize = function getSecretSize() {
  let size = 0;

  size += 1;
  size += this.privateKey.length;

  if (this.publicKey.length === 33)
    size += 1;

  size += 4;

  return size;
};

/**
 * Convert key to a CBitcoinSecret.
 * @param {(Network|NetworkType)?} network
 * @returns {Base58String}
 */

KeyRing.prototype.toSecret = function toSecret(network) {
  const size = this.getSecretSize();
  const bw = new StaticWriter(size);

  assert(this.privateKey, 'Cannot serialize without private key.');

  if (!network)
    network = this.network;

  network = Network.get(network);

  bw.writeU8(network.keyPrefix.privkey);
  bw.writeBytes(this.privateKey);

  if (this.publicKey.length === 33)
    bw.writeU8(1);

  bw.writeChecksum();

  return base58.encode(bw.render());
};

/**
 * Inject properties from serialized CBitcoinSecret.
 * @private
 * @param {Base58String} secret
 * @param {(Network|NetworkType)?} network
 */

KeyRing.prototype.fromSecret = function fromSecret(data, network) {
  const br = new BufferReader(base58.decode(data), true);

  const version = br.readU8();

  network = Network.fromWIF(version, network);

  const key = br.readBytes(32);

  let compress = false;

  if (br.left() > 4) {
    assert(br.readU8() === 1, 'Bad compression flag.');
    compress = true;
  }

  br.verifyChecksum();

  return this.fromPrivate(key, compress, network);
};

/**
 * Instantiate a keyring from a serialized CBitcoinSecret.
 * @param {Base58String} secret
 * @param {(Network|NetworkType)?} network
 * @returns {KeyRing}
 */

KeyRing.fromSecret = function fromSecret(data, network) {
  return new KeyRing().fromSecret(data, network);
};

/**
 * Get private key.
 * @param {String?} enc - Can be `"hex"`, `"base58"`, or `null`.
 * @returns {Buffer} Private key.
 */

KeyRing.prototype.getPrivateKey = function getPrivateKey(enc) {
  if (!this.privateKey)
    return null;

  if (enc === 'base58')
    return this.toSecret();

  if (enc === 'hex')
    return this.privateKey.toString('hex');

  return this.privateKey;
};

/**
 * Get public key.
 * @param {String?} enc - `"hex"` or `null`.
 * @returns {Buffer}
 */

KeyRing.prototype.getPublicKey = function getPublicKey(enc) {
  if (enc === 'base58')
    return base58.encode(this.publicKey);

  if (enc === 'hex')
    return this.publicKey.toString('hex');

  return this.publicKey;
};

/**
 * Get redeem script.
 * @returns {Script}
 */

KeyRing.prototype.getScript = function getScript() {
  return this.script;
};

/**
 * Get witness program.
 * @returns {Buffer}
 */

KeyRing.prototype.getProgram = function getProgram() {
  if (!this.witness)
    return null;

  if (!this._program) {
    let program;
    if (!this.script) {
      const hash = digest.hash160(this.publicKey);
      program = Script.fromProgram(0, hash);
    } else {
      const hash = this.script.sha256();
      program = Script.fromProgram(0, hash);
    }
    this._program = program;
  }

  return this._program;
};

/**
 * Get address' ripemd160 program scripthash
 * (for witness programs behind a scripthash).
 * @param {String?} enc - `"hex"` or `null`.
 * @returns {Buffer}
 */

KeyRing.prototype.getNestedHash = function getNestedHash(enc) {
  if (!this.witness)
    return null;

  if (!this._nestedHash)
    this._nestedHash = this.getProgram().hash160();

  return enc === 'hex'
    ? this._nestedHash.toString('hex')
    : this._nestedHash;
};

/**
 * Get address' scripthash address for witness program.
 * @param {String?} enc - `"base58"` or `null`.
 * @returns {Address|Base58Address}
 */

KeyRing.prototype.getNestedAddress = function getNestedAddress(enc) {
  if (!this.witness)
    return null;

  if (!this._nestedAddress) {
    const hash = this.getNestedHash();
    const addr = Address.fromScripthash(hash, this.network);
    this._nestedAddress = addr;
  }

  if (enc === 'base58')
    return this._nestedAddress.toBase58();

  if (enc === 'string')
    return this._nestedAddress.toString();

  return this._nestedAddress;
};

/**
 * Get scripthash.
 * @param {String?} enc - `"hex"` or `null`.
 * @returns {Buffer}
 */

KeyRing.prototype.getScriptHash = function getScriptHash(enc) {
  if (this.witness)
    return this.getScriptHash256(enc);
  return this.getScriptHash160(enc);
};

/**
 * Get ripemd160 scripthash.
 * @param {String?} enc - `"hex"` or `null`.
 * @returns {Buffer}
 */

KeyRing.prototype.getScriptHash160 = function getScriptHash160(enc) {
  if (!this.script)
    return null;

  if (!this._scriptHash160)
    this._scriptHash160 = this.script.hash160();

  return enc === 'hex'
    ? this._scriptHash160.toString('hex')
    : this._scriptHash160;
};

/**
 * Get sha256 scripthash.
 * @param {String?} enc - `"hex"` or `null`.
 * @returns {Buffer}
 */

KeyRing.prototype.getScriptHash256 = function getScriptHash256(enc) {
  if (!this.script)
    return null;

  if (!this._scriptHash256)
    this._scriptHash256 = this.script.sha256();

  return enc === 'hex'
    ? this._scriptHash256.toString('hex')
    : this._scriptHash256;
};

/**
 * Get scripthash address.
 * @param {String?} enc - `"base58"` or `null`.
 * @returns {Address|Base58Address}
 */

KeyRing.prototype.getScriptAddress = function getScriptAddress(enc) {
  if (!this.script)
    return null;

  if (!this._scriptAddress) {
    let addr;
    if (this.witness) {
      const hash = this.getScriptHash256();
      addr = Address.fromWitnessScripthash(hash, this.network);
    } else {
      const hash = this.getScriptHash160();
      addr = Address.fromScripthash(hash, this.network);
    }
    this._scriptAddress = addr;
  }

  if (enc === 'base58')
    return this._scriptAddress.toBase58();

  if (enc === 'string')
    return this._scriptAddress.toString();

  return this._scriptAddress;
};

/**
 * Get public key hash.
 * @param {String?} enc - `"hex"` or `null`.
 * @returns {Buffer}
 */

KeyRing.prototype.getKeyHash = function getKeyHash(enc) {
  if (!this._keyHash)
    this._keyHash = digest.hash160(this.publicKey);

  return enc === 'hex'
    ? this._keyHash.toString('hex')
    : this._keyHash;
};

/**
 * Get pubkeyhash address.
 * @param {String?} enc - `"base58"` or `null`.
 * @returns {Address|Base58Address}
 */

KeyRing.prototype.getKeyAddress = function getKeyAddress(enc) {
  if (!this._keyAddress) {
    const hash = this.getKeyHash();

    let addr;
    if (this.witness)
      addr = Address.fromWitnessPubkeyhash(hash, this.network);
    else
      addr = Address.fromPubkeyhash(hash, this.network);

    this._keyAddress = addr;
  }

  if (enc === 'base58')
    return this._keyAddress.toBase58();

  if (enc === 'string')
    return this._keyAddress.toString();

  return this._keyAddress;
};

/**
 * Get hash.
 * @param {String?} enc - `"hex"` or `null`.
 * @returns {Buffer}
 */

KeyRing.prototype.getHash = function getHash(enc) {
  if (this.nested)
    return this.getNestedHash(enc);

  if (this.script)
    return this.getScriptHash(enc);

  return this.getKeyHash(enc);
};

/**
 * Get base58 address.
 * @param {String?} enc - `"base58"` or `null`.
 * @returns {Address|Base58Address}
 */

KeyRing.prototype.getAddress = function getAddress(enc) {
  if (this.nested)
    return this.getNestedAddress(enc);

  if (this.script)
    return this.getScriptAddress(enc);

  return this.getKeyAddress(enc);
};

/**
 * Test an address hash against hash and program hash.
 * @param {Buffer} hash
 * @returns {Boolean}
 */

KeyRing.prototype.ownHash = function ownHash(hash) {
  if (!hash)
    return false;

  if (hash.equals(this.getKeyHash()))
    return true;

  if (this.script) {
    if (hash.equals(this.getScriptHash()))
      return true;
  }

  if (this.witness) {
    if (hash.equals(this.getNestedHash()))
      return true;
  }

  return false;
};

/**
 * Check whether transaction output belongs to this address.
 * @param {TX|Output} tx - Transaction or Output.
 * @param {Number?} index - Output index.
 * @returns {Boolean}
 */

KeyRing.prototype.ownOutput = function ownOutput(tx, index) {
  let output;

  if (tx instanceof Output) {
    output = tx;
  } else {
    output = tx.outputs[index];
    assert(output, 'Output does not exist.');
  }

  return this.ownHash(output.getHash());
};

/**
 * Test a hash against script hashes to
 * find the correct redeem script, if any.
 * @param {Buffer} hash
 * @returns {Script|null}
 */

KeyRing.prototype.getRedeem = function getRedeem(hash) {
  if (this.witness) {
    if (hash.equals(this.getNestedHash()))
      return this.getProgram();
  }

  if (this.script) {
    if (hash.equals(this.getScriptHash160()))
      return this.script;

    if (hash.equals(this.getScriptHash256()))
      return this.script;
  }

  return null;
};

/**
 * Sign a message.
 * @param {Buffer} msg
 * @returns {Buffer} Signature in DER format.
 */

KeyRing.prototype.sign = function sign(msg) {
  assert(this.privateKey, 'Cannot sign without private key.');
  return secp256k1.sign(msg, this.privateKey);
};

/**
 * Verify a message.
 * @param {Buffer} msg
 * @param {Buffer} sig - Signature in DER format.
 * @returns {Boolean}
 */

KeyRing.prototype.verify = function verify(msg, sig) {
  return secp256k1.verify(msg, sig, this.publicKey);
};

/**
 * Get witness program version.
 * @returns {Number}
 */

KeyRing.prototype.getVersion = function getVersion() {
  if (!this.witness)
    return -1;

  if (this.nested)
    return -1;

  return 0;
};

/**
 * Get address type.
 * @returns {ScriptType}
 */

KeyRing.prototype.getType = function getType() {
  if (this.nested)
    return Address.types.SCRIPTHASH;

  if (this.witness)
    return Address.types.WITNESS;

  if (this.script)
    return Address.types.SCRIPTHASH;

  return Address.types.PUBKEYHASH;
};

/**
 * Inspect keyring.
 * @returns {Object}
 */

KeyRing.prototype.inspect = function inspect() {
  return this.toJSON();
};

/**
 * Convert an KeyRing to a more json-friendly object.
 * @returns {Object}
 */

KeyRing.prototype.toJSON = function toJSON() {
  return {
    network: this.network.type,
    witness: this.witness,
    nested: this.nested,
    publicKey: this.publicKey.toString('hex'),
    script: this.script ? this.script.toRaw().toString('hex') : null,
    program: this.witness ? this.getProgram().toRaw().toString('hex') : null,
    type: Address.typesByVal[this.getType()].toLowerCase(),
    address: this.getAddress('string')
  };
};

/**
 * Inject properties from json object.
 * @private
 * @param {Object} json
 */

KeyRing.prototype.fromJSON = function fromJSON(json) {
  assert(json);
  assert(typeof json.network === 'string');
  assert(typeof json.witness === 'boolean');
  assert(typeof json.nested === 'boolean');
  assert(typeof json.publicKey === 'string');
  assert(!json.script || typeof json.script === 'string');

  this.nework = Network.get(json.network);
  this.witness = json.witness;
  this.nested = json.nested;
  this.publicKey = Buffer.from(json.publicKey, 'hex');

  if (json.script)
    this.script = Buffer.from(json.script, 'hex');

  return this;
};

/**
 * Instantiate an KeyRing from a jsonified transaction object.
 * @param {Object} json - The jsonified transaction object.
 * @returns {KeyRing}
 */

KeyRing.fromJSON = function fromJSON(json) {
  return new KeyRing().fromJSON(json);
};

/**
 * Calculate serialization size.
 * @returns {Number}
 */

KeyRing.prototype.getSize = function getSize() {
  let size = 0;
  size += 1;
  if (this.privateKey) {
    size += encoding.sizeVarBytes(this.privateKey);
    size += 1;
  } else {
    size += encoding.sizeVarBytes(this.publicKey);
  }
  size += this.script ? this.script.getVarSize() : 1;
  return size;
};

/**
 * Write the keyring to a buffer writer.
 * @param {BufferWriter} bw
 */

KeyRing.prototype.toWriter = function toWriter(bw) {
  let field = 0;

  if (this.witness)
    field |= 1;

  if (this.nested)
    field |= 2;

  bw.writeU8(field);

  if (this.privateKey) {
    bw.writeVarBytes(this.privateKey);
    bw.writeU8(this.publicKey.length === 33);
  } else {
    bw.writeVarBytes(this.publicKey);
  }

  if (this.script)
    bw.writeVarBytes(this.script.toRaw());
  else
    bw.writeVarint(0);

  return bw;
};

/**
 * Serialize the keyring.
 * @returns {Buffer}
 */

KeyRing.prototype.toRaw = function toRaw() {
  const size = this.getSize();
  return this.toWriter(new StaticWriter(size)).render();
};

/**
 * Inject properties from buffer reader.
 * @private
 * @param {BufferReader} br
 * @param {Network?} network
 */

KeyRing.prototype.fromReader = function fromReader(br, network) {
  this.network = Network.get(network);

  const field = br.readU8();

  this.witness = (field & 1) !== 0;
  this.nested = (field & 2) !== 0;

  const key = br.readVarBytes();

  if (key.length === 32) {
    const compress = br.readU8() === 1;
    this.privateKey = key;
    this.publicKey = secp256k1.publicKeyCreate(key, compress);
  } else {
    this.publicKey = key;
    assert(secp256k1.publicKeyVerify(key), 'Invalid public key.');
  }

  const script = br.readVarBytes();

  if (script.length > 0)
    this.script = Script.fromRaw(script);

  return this;
};

/**
 * Inject properties from serialized data.
 * @private
 * @param {Buffer} data
 * @param {Network?} network
 */

KeyRing.prototype.fromRaw = function fromRaw(data, network) {
  return this.fromReader(new BufferReader(data), network);
};

/**
 * Instantiate a keyring from buffer reader.
 * @param {BufferReader} br
 * @returns {KeyRing}
 */

KeyRing.fromReader = function fromReader(br) {
  return new KeyRing().fromReader(br);
};

/**
 * Instantiate a keyring from serialized data.
 * @param {Buffer} data
 * @returns {KeyRing}
 */

KeyRing.fromRaw = function fromRaw(data) {
  return new KeyRing().fromRaw(data);
};

/**
 * Test whether an object is a KeyRing.
 * @param {Object} obj
 * @returns {Boolean}
 */

KeyRing.isKeyRing = function isKeyRing(obj) {
  return obj instanceof KeyRing;
};

/*
 * Helpers
 */

function toKey(opt) {
  if (!opt)
    return opt;

  if (opt.privateKey)
    return opt.privateKey;

  if (opt.publicKey)
    return opt.publicKey;

  return opt;
}

/*
 * Expose
 */

module.exports = KeyRing;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * mtx.js - mutable transaction object for wmcc_core.
 */



const assert = __webpack_require__(0);
const util = __webpack_require__(1);
const Script = __webpack_require__(8);
const TX = __webpack_require__(15);
const Input = __webpack_require__(41);
const Output = __webpack_require__(13);
const Coin = __webpack_require__(43);
const Outpoint = __webpack_require__(21);
const CoinView = __webpack_require__(29);
const Address = __webpack_require__(11);
const encoding = __webpack_require__(3);
const consensus = __webpack_require__(7);
const policy = __webpack_require__(19);
const Amount = __webpack_require__(20);
const Stack = __webpack_require__(40);

/**
 * A mutable transaction object.
 * @alias module:primitives.MTX
 * @extends TX
 * @constructor
 * @param {Object} options
 * @param {Number?} options.version
 * @param {Number?} options.changeIndex
 * @param {Input[]?} options.inputs
 * @param {Output[]?} options.outputs
 * @property {Number} version - Transaction version.
 * @property {Number} flag - Flag field for segregated witness.
 * Always non-zero (1 if not present).
 * @property {Input[]} inputs
 * @property {Output[]} outputs
 * @property {Number} locktime - nLockTime
 * @property {CoinView} view
 */

function MTX(options) {
  if (!(this instanceof MTX))
    return new MTX(options);

  TX.call(this);

  this.mutable = true;
  this.changeIndex = -1;
  this.view = new CoinView();

  if (options)
    this.fromOptions(options);
}

Object.setPrototypeOf(MTX.prototype, TX.prototype);

/**
 * Inject properties from options object.
 * @private
 * @param {Object} options
 */

MTX.prototype.fromOptions = function fromOptions(options) {
  if (options.version != null) {
    assert(util.isU32(options.version), 'Version must a be uint32.');
    this.version = options.version;
  }

  if (options.inputs) {
    assert(Array.isArray(options.inputs), 'Inputs must be an array.');
    for (const input of options.inputs)
      this.addInput(input);
  }

  if (options.outputs) {
    assert(Array.isArray(options.outputs), 'Outputs must be an array.');
    for (const output of options.outputs)
      this.addOutput(output);
  }

  if (options.locktime != null) {
    assert(util.isU32(options.locktime), 'Locktime must be a uint32.');
    this.locktime = options.locktime;
  }

  if (options.changeIndex != null) {
    if (options.changeIndex !== -1) {
      assert(util.isU32(options.changeIndex),
        'Change index must be a uint32.');
      this.changeIndex = options.changeIndex;
    } else {
      this.changeIndex = -1;
    }
  }

  return this;
};

/**
 * Instantiate MTX from options.
 * @param {Object} options
 * @returns {MTX}
 */

MTX.fromOptions = function fromOptions(options) {
  return new MTX().fromOptions(options);
};

/**
 * Clone the transaction. Note that
 * this will not carry over the view.
 * @returns {MTX}
 */

MTX.prototype.clone = function clone() {
  const mtx = new MTX();
  mtx.inject(this);
  mtx.changeIndex = this.changeIndex;
  return mtx;
};

/**
 * Add an input to the transaction.
 * @param {Input|Object} options
 * @returns {Input}
 *
 * @example
 * mtx.addInput({ prevout: { hash: ... }, script: ... });
 * mtx.addInput(new Input());
 */

MTX.prototype.addInput = function addInput(options) {
  const input = Input.fromOptions(options);
  this.inputs.push(input);
  return input;
};

/**
 * Add an outpoint as an input.
 * @param {Outpoint|Object} outpoint
 * @returns {Input}
 *
 * @example
 * mtx.addOutpoint({ hash: ..., index: 0 });
 * mtx.addOutpoint(new Outpoint(hash, index));
 */

MTX.prototype.addOutpoint = function addOutpoint(outpoint) {
  const prevout = Outpoint.fromOptions(outpoint);
  const input = Input.fromOutpoint(prevout);
  this.inputs.push(input);
  return input;
};

/**
 * Add a coin as an input. Note that this will
 * add the coin to the internal coin viewpoint.
 * @param {Coin} coin
 * @returns {Input}
 *
 * @example
 * mtx.addCoin(Coin.fromTX(tx, 0, -1));
 */

MTX.prototype.addCoin = function addCoin(coin) {
  assert(coin instanceof Coin, 'Cannot add non-coin.');

  const input = Input.fromCoin(coin);

  this.inputs.push(input);
  this.view.addCoin(coin);

  return input;
};

/**
 * Add a transaction as an input. Note that
 * this will add the coin to the internal
 * coin viewpoint.
 * @param {TX} tx
 * @param {Number} index
 * @param {Number?} height
 * @returns {Input}
 *
 * @example
 * mtx.addTX(tx, 0);
 */

MTX.prototype.addTX = function addTX(tx, index, height) {
  assert(tx instanceof TX, 'Cannot add non-transaction.');

  if (height == null)
    height = -1;

  const input = Input.fromTX(tx, index);
  //const coin = Coin.fromTX(tx, index, height);

  this.inputs.push(input);
  //this.view.addCoin(coin);
  this.view.addIndex(tx, index, height);

  return input;
};

/**
 * Add an output.
 * @param {Address|Script|Output|Object} script - Script or output options.
 * @param {Amount?} value
 * @returns {Output}
 *
 * @example
 * mtx.addOutput(new Output());
 * mtx.addOutput({ address: ..., value: 100000 });
 * mtx.addOutput(address, 100000);
 * mtx.addOutput(script, 100000);
 */

MTX.prototype.addOutput = function addOutput(script, value) {
  let output;

  if (value != null) {
    assert(util.isU64(value), 'Value must be a uint64.');
    output = Output.fromScript(script, value);
  } else {
    output = Output.fromOptions(script);
  }

  this.outputs.push(output);

  return output;
};

/**
 * Verify all transaction inputs.
 * @param {VerifyFlags} [flags=STANDARD_VERIFY_FLAGS]
 * @returns {Boolean} Whether the inputs are valid.
 * @throws {ScriptError} on invalid inputs
 */

MTX.prototype.check = function check(flags) {
  return TX.prototype.check.call(this, this.view, flags);
};

/**
 * Verify the transaction inputs on the worker pool
 * (if workers are enabled).
 * @param {VerifyFlags?} [flags=STANDARD_VERIFY_FLAGS]
 * @param {WorkerPool?} pool
 * @returns {Promise}
 */

MTX.prototype.checkAsync = function checkAsync(flags, pool) {
  return TX.prototype.checkAsync.call(this, this.view, flags, pool);
};

/**
 * Verify all transaction inputs.
 * @param {VerifyFlags} [flags=STANDARD_VERIFY_FLAGS]
 * @returns {Boolean} Whether the inputs are valid.
 */

MTX.prototype.verify = function verify(flags) {
  try {
    this.check(flags);
  } catch (e) {
    if (e.type === 'ScriptError')
      return false;
    throw e;
  }
  return true;
};

/**
 * Verify the transaction inputs on the worker pool
 * (if workers are enabled).
 * @param {VerifyFlags?} [flags=STANDARD_VERIFY_FLAGS]
 * @param {WorkerPool?} pool
 * @returns {Promise}
 */

MTX.prototype.verifyAsync = async function verifyAsync(flags, pool) {
  try {
    await this.checkAsync(flags, pool);
  } catch (e) {
    if (e.type === 'ScriptError')
      return false;
    throw e;
  }
  return true;
};

/**
 * Calculate the fee for the transaction.
 * @returns {Amount} fee (zero if not all coins are available).
 */

MTX.prototype.getFee = function getFee() {
  return TX.prototype.getFee.call(this, this.view);
};

/**
 * Calculate the total input value.
 * @returns {Amount} value
 */

MTX.prototype.getInputValue = function getInputValue() {
  return TX.prototype.getInputValue.call(this, this.view);
};

/**
 * Get all input addresses.
 * @returns {Address[]} addresses
 */

MTX.prototype.getInputAddresses = function getInputAddresses() {
  return TX.prototype.getInputAddresses.call(this, this.view);
};

/**
 * Get all addresses.
 * @returns {Address[]} addresses
 */

MTX.prototype.getAddresses = function getAddresses() {
  return TX.prototype.getAddresses.call(this, this.view);
};

/**
 * Get all input address hashes.
 * @returns {Hash[]} hashes
 */

MTX.prototype.getInputHashes = function getInputHashes(enc) {
  return TX.prototype.getInputHashes.call(this, this.view, enc);
};

/**
 * Get all address hashes.
 * @returns {Hash[]} hashes
 */

MTX.prototype.getHashes = function getHashes(enc) {
  return TX.prototype.getHashes.call(this, this.view, enc);
};

/**
 * Test whether the transaction has
 * all coins available/filled.
 * @returns {Boolean}
 */

MTX.prototype.hasCoins = function hasCoins() {
  return TX.prototype.hasCoins.call(this, this.view);
};

/**
 * Calculate virtual sigop count.
 * @param {VerifyFlags?} flags
 * @returns {Number} sigop count
 */

MTX.prototype.getSigops = function getSigops(flags) {
  return TX.prototype.getSigops.call(this, this.view, flags);
};

/**
 * Calculate sigops weight, taking into account witness programs.
 * @param {VerifyFlags?} flags
 * @returns {Number} sigop weight
 */

MTX.prototype.getSigopsCost = function getSigopsCost(flags) {
  return TX.prototype.getSigopsCost.call(this, this.view, flags);
};

/**
 * Calculate the virtual size of the transaction
 * (weighted against bytes per sigop cost).
 * @returns {Number} vsize
 */

MTX.prototype.getSigopsSize = function getSigopsSize() {
  return TX.prototype.getSigopsSize.call(this, this.getSigopsCost());
};

/**
 * Perform contextual checks to verify input, output,
 * and fee values, as well as coinbase spend maturity
 * (coinbases can only be spent 100 blocks or more
 * after they're created). Note that this function is
 * consensus critical.
 * @param {Number} height - Height at which the
 * transaction is being spent. In the mempool this is
 * the chain height plus one at the time it entered the pool.
 * @returns {Boolean}
 */

MTX.prototype.verifyInputs = function verifyInputs(height) {
  const [fee] = this.checkInputs(height);
  return fee !== -1;
};

/**
 * Perform contextual checks to verify input, output,
 * and fee values, as well as coinbase spend maturity
 * (coinbases can only be spent 100 blocks or more
 * after they're created). Note that this function is
 * consensus critical.
 * @param {Number} height - Height at which the
 * transaction is being spent. In the mempool this is
 * the chain height plus one at the time it entered the pool.
 * @returns {Array} [fee, reason, score]
 */

MTX.prototype.checkInputs = function checkInputs(height) {
  return TX.prototype.checkInputs.call(this, this.view, height);
};

/**
 * Build input script (or witness) templates (with
 * OP_0 in place of signatures).
 * @param {Number} index - Input index.
 * @param {Coin|Output} coin
 * @param {KeyRing} ring
 * @returns {Boolean} Whether the script was able to be built.
 */

MTX.prototype.scriptInput = function scriptInput(index, coin, ring) {
  const input = this.inputs[index];

  assert(input, 'Input does not exist.');
  assert(coin, 'No coin passed.');

  // Don't bother with any below calculation
  // if the output is already templated.
  if (input.script.raw.length !== 0
      || input.witness.items.length !== 0) {
    return true;
  }

  // Get the previous output's script
  const prev = coin.script;

  // This is easily the hardest part about
  // building a transaction with segwit:
  // figuring out where the redeem script
  // and witness redeem scripts go.
  const sh = prev.getScripthash();

  if (sh) {
    const redeem = ring.getRedeem(sh);

    if (!redeem)
      return false;

    // Witness program nested in regular P2SH.
    if (redeem.isProgram()) {
      // P2WSH nested within pay-to-scripthash.
      const wsh = redeem.getWitnessScripthash();
      if (wsh) {
        const wredeem = ring.getRedeem(wsh);

        if (!wredeem)
          return false;

        const witness = this.scriptVector(wredeem, ring);

        if (!witness)
          return false;

        witness.push(wredeem.toRaw());

        input.witness.fromStack(witness);
        input.script.fromItems([redeem.toRaw()]);

        return true;
      }

      // P2WPKH nested within pay-to-scripthash.
      const wpkh = redeem.getWitnessPubkeyhash();
      if (wpkh) {
        const pkh = Script.fromPubkeyhash(wpkh);
        const witness = this.scriptVector(pkh, ring);

        if (!witness)
          return false;

        input.witness.fromStack(witness);
        input.script.fromItems([redeem.toRaw()]);

        return true;
      }

      // Unknown witness program.
      return false;
    }

    // Regular P2SH.
    const vector = this.scriptVector(redeem, ring);

    if (!vector)
      return false;

    vector.push(redeem.toRaw());

    input.script.fromStack(vector);

    return true;
  }

  // Witness program.
  if (prev.isProgram()) {
    // Bare P2WSH.
    const wsh = prev.getWitnessScripthash();
    if (wsh) {
      const wredeem = ring.getRedeem(wsh);

      if (!wredeem)
        return false;

      const vector = this.scriptVector(wredeem, ring);

      if (!vector)
        return false;

      vector.push(wredeem.toRaw());

      input.witness.fromStack(vector);

      return true;
    }

    // Bare P2WPKH.
    const wpkh = prev.getWitnessPubkeyhash();
    if (wpkh) {
      const pkh = Script.fromPubkeyhash(wpkh);
      const vector = this.scriptVector(pkh, ring);

      if (!vector)
        return false;

      input.witness.fromStack(vector);

      return true;
    }

    // Bare... who knows?
    return false;
  }

  // Wow, a normal output! Praise be to Jengus and Gord.
  const vector = this.scriptVector(prev, ring);

  if (!vector)
    return false;

  input.script.fromStack(vector);

  return true;
};

/**
 * Build script for a single vector
 * based on a previous script.
 * @param {Script} prev
 * @param {Buffer} ring
 * @return {Boolean}
 */

MTX.prototype.scriptVector = function scriptVector(prev, ring) {
  // P2PK
  const pk = prev.getPubkey();
  if (pk) {
    if (!pk.equals(ring.publicKey))
      return null;

    const stack = new Stack();

    stack.pushInt(0);

    return stack;
  }

  // P2PKH
  const pkh = prev.getPubkeyhash();
  if (pkh) {
    if (!pkh.equals(ring.getKeyHash()))
      return null;

    const stack = new Stack();

    stack.pushInt(0);
    stack.pushData(ring.publicKey);

    return stack;
  }

  // Multisig
  const [, n] = prev.getMultisig();
  if (n !== -1) {
    if (prev.indexOf(ring.publicKey) === -1)
      return null;

    // Technically we should create m signature slots,
    // but we create n signature slots so we can order
    // the signatures properly.
    const stack = new Stack();

    stack.pushInt(0);

    // Fill script with `n` signature slots.
    for (let i = 0; i < n; i++)
      stack.pushInt(0);

    return stack;
  }

  return null;
};

/**
 * Sign a transaction input on the worker pool
 * (if workers are enabled).
 * @param {Number} index
 * @param {Coin|Output} coin
 * @param {KeyRing} ring
 * @param {SighashType?} type
 * @param {WorkerPool?} pool
 * @returns {Promise}
 */

MTX.prototype.signInputAsync = async function signInputAsync(index, coin, ring, type, pool) {
  if (!pool)
    return this.signInput(index, coin, ring, type);

  return await pool.signInput(this, index, coin, ring, type, pool);
};

/**
 * Sign an input.
 * @param {Number} index - Index of input being signed.
 * @param {Coin|Output} coin
 * @param {KeyRing} ring - Private key.
 * @param {SighashType} type
 * @returns {Boolean} Whether the input was able to be signed.
 */

MTX.prototype.signInput = function signInput(index, coin, ring, type) {
  const input = this.inputs[index];
  const key = ring.privateKey;

  assert(input, 'Input does not exist.');
  assert(coin, 'No coin passed.');

  // Get the previous output's script
  const value = coin.value;
  let prev = coin.script;
  let vector = input.script;
  let version = 0;
  let redeem = false;

  // Grab regular p2sh redeem script.
  if (prev.isScripthash()) {
    prev = input.script.getRedeem();
    if (!prev)
      throw new Error('Input has not been templated.');
    redeem = true;
  }

  // If the output script is a witness program,
  // we have to switch the vector to the witness
  // and potentially alter the length. Note that
  // witnesses are stack items, so the `dummy`
  // _has_ to be an empty buffer (what OP_0
  // pushes onto the stack).
  if (prev.isWitnessScripthash()) {
    prev = input.witness.getRedeem();
    if (!prev)
      throw new Error('Input has not been templated.');
    vector = input.witness;
    redeem = true;
    version = 1;
  } else {
    const wpkh = prev.getWitnessPubkeyhash();
    if (wpkh) {
      prev = Script.fromPubkeyhash(wpkh);
      vector = input.witness;
      redeem = false;
      version = 1;
    }
  }

  // Create our signature.
  const sig = this.signature(index, prev, value, key, type, version);

  if (redeem) {
    const stack = vector.toStack();
    const redeem = stack.pop();

    const result = this.signVector(prev, stack, sig, ring);

    if (!result)
      return false;

    result.push(redeem);

    vector.fromStack(result);

    return true;
  }

  const stack = vector.toStack();
  const result = this.signVector(prev, stack, sig, ring);

  if (!result)
    return false;

  vector.fromStack(result);

  return true;
};

/**
 * Add a signature to a vector
 * based on a previous script.
 * @param {Script} prev
 * @param {Stack} vector
 * @param {Buffer} sig
 * @param {KeyRing} ring
 * @return {Boolean}
 */

MTX.prototype.signVector = function signVector(prev, vector, sig, ring) {
  // P2PK
  const pk = prev.getPubkey();
  if (pk) {
    // Make sure the pubkey is ours.
    if (!ring.publicKey.equals(pk))
      return null;

    if (vector.length === 0)
      throw new Error('Input has not been templated.');

    // Already signed.
    if (vector.get(0).length > 0)
      return vector;

    vector.set(0, sig);

    return vector;
  }

  // P2PKH
  const pkh = prev.getPubkeyhash();
  if (pkh) {
    // Make sure the pubkey hash is ours.
    if (!ring.getKeyHash().equals(pkh))
      return null;

    if (vector.length !== 2)
      throw new Error('Input has not been templated.');

    if (vector.get(1).length === 0)
      throw new Error('Input has not been templated.');

    // Already signed.
    if (vector.get(0).length > 0)
      return vector;

    vector.set(0, sig);

    return vector;
  }

  // Multisig
  const [m, n] = prev.getMultisig();
  if (m !== -1) {
    if (vector.length < 2)
      throw new Error('Input has not been templated.');

    if (vector.get(0).length !== 0)
      throw new Error('Input has not been templated.');

    // Too many signature slots. Abort.
    if (vector.length - 1 > n)
      throw new Error('Input has not been templated.');

    // Count the number of current signatures.
    let total = 0;
    for (let i = 1; i < vector.length; i++) {
      const item = vector.get(i);
      if (item.length > 0)
        total++;
    }

    // Signatures are already finalized.
    if (total === m && vector.length - 1 === m)
      return vector;

    // Add some signature slots for us to use if
    // there was for some reason not enough.
    while (vector.length - 1 < n)
      vector.pushInt(0);

    // Grab the redeem script's keys to figure
    // out where our key should go.
    const keys = [];
    for (const op of prev.code) {
      if (op.data)
        keys.push(op.data);
    }

    // Find the key index so we can place
    // the signature in the same index.
    let keyIndex = util.indexOf(keys, ring.publicKey);

    // Our public key is not in the prev_out
    // script. We tried to sign a transaction
    // that is not redeemable by us.
    if (keyIndex === -1)
      return null;

    // Offset key index by one to turn it into
    // "sig index". Accounts for OP_0 byte at
    // the start.
    keyIndex++;

    // Add our signature to the correct slot
    // and increment the total number of
    // signatures.
    if (keyIndex < vector.length && total < m) {
      if (vector.get(keyIndex).length === 0) {
        vector.set(keyIndex, sig);
        total++;
      }
    }

    // All signatures added. Finalize.
    if (total >= m) {
      // Remove empty slots left over.
      for (let i = vector.length - 1; i >= 1; i--) {
        const item = vector.get(i);
        if (item.length === 0)
          vector.remove(i);
      }

      // Remove signatures which are not required.
      // This should never happen.
      while (total > m) {
        vector.pop();
        total--;
      }

      // Sanity checks.
      assert(total === m);
      assert(vector.length - 1 === m);
    }

    return vector;
  }

  return null;
};

/**
 * Test whether the transaction is fully-signed.
 * @returns {Boolean}
 */

MTX.prototype.isSigned = function isSigned() {
  for (let i = 0; i < this.inputs.length; i++) {
    const {prevout} = this.inputs[i];
    const coin = this.view.getOutput(prevout);

    if (!coin)
      return false;

    if (!this.isInputSigned(i, coin))
      return false;
  }

  return true;
};

/**
 * Test whether an input is fully-signed.
 * @param {Number} index
 * @param {Coin|Output} coin
 * @returns {Boolean}
 */

MTX.prototype.isInputSigned = function isInputSigned(index, coin) {
  const input = this.inputs[index];

  assert(input, 'Input does not exist.');
  assert(coin, 'No coin passed.');

  let prev = coin.script;
  let vector = input.script;
  let redeem = false;

  // Grab redeem script if possible.
  if (prev.isScripthash()) {
    prev = input.script.getRedeem();
    if (!prev)
      return false;
    redeem = true;
  }

  // If the output script is a witness program,
  // we have to switch the vector to the witness
  // and potentially alter the length.
  if (prev.isWitnessScripthash()) {
    prev = input.witness.getRedeem();
    if (!prev)
      return false;
    vector = input.witness;
    redeem = true;
  } else {
    const wpkh = prev.getWitnessPubkeyhash();
    if (wpkh) {
      prev = Script.fromPubkeyhash(wpkh);
      vector = input.witness;
      redeem = false;
    }
  }

  const stack = vector.toStack();

  if (redeem)
    stack.pop();

  return this.isVectorSigned(prev, stack);
};

/**
 * Test whether a vector is fully-signed.
 * @param {Script} prev
 * @param {Stack} vector
 * @returns {Boolean}
 */

MTX.prototype.isVectorSigned = function isVectorSigned(prev, vector) {
  if (prev.isPubkey()) {
    if (vector.length !== 1)
      return false;

    if (vector.get(0).length === 0)
      return false;

    return true;
  }

  if (prev.isPubkeyhash()) {
    if (vector.length !== 2)
      return false;

    if (vector.get(0).length === 0)
      return false;

    if (vector.get(1).length === 0)
      return false;

    return true;
  }

  const [m] = prev.getMultisig();

  if (m !== -1) {
    // Ensure we have the correct number
    // of required signatures.
    if (vector.length - 1 !== m)
      return false;

    // Ensure all members are signatures.
    for (let i = 1; i < vector.length; i++) {
      const item = vector.get(i);
      if (item.length === 0)
        return false;
    }

    return true;
  }

  return false;
};

/**
 * Build input scripts (or witnesses).
 * @param {KeyRing} ring - Address used to sign. The address
 * must be able to redeem the coin.
 * @returns {Number} Number of inputs templated.
 */

MTX.prototype.template = function template(ring) {
  if (Array.isArray(ring)) {
    let total = 0;
    for (const key of ring)
      total += this.template(key);
    return total;
  }

  let total = 0;

  for (let i = 0; i < this.inputs.length; i++) {
    const {prevout} = this.inputs[i];
    const coin = this.view.getOutput(prevout);

    if (!coin)
      continue;

    if (!ring.ownOutput(coin))
      continue;

    // Build script for input
    if (!this.scriptInput(i, coin, ring))
      continue;

    total++;
  }

  return total;
};

/**
 * Built input scripts (or witnesses) and sign the inputs.
 * @param {KeyRing} ring - Address used to sign. The address
 * must be able to redeem the coin.
 * @param {SighashType} type
 * @returns {Number} Number of inputs signed.
 */

MTX.prototype.sign = function sign(ring, type) {
  if (Array.isArray(ring)) {
    let total = 0;
    for (const key of ring)
      total += this.sign(key, type);
    return total;
  }

  assert(ring.privateKey, 'No private key available.');

  let total = 0;

  for (let i = 0; i < this.inputs.length; i++) {
    const {prevout} = this.inputs[i];
    const coin = this.view.getOutput(prevout);

    if (!coin)
      continue;

    if (!ring.ownOutput(coin))
      continue;

    // Build script for input
    if (!this.scriptInput(i, coin, ring))
      continue;

    // Sign input
    if (!this.signInput(i, coin, ring, type))
      continue;

    total++;
  }

  return total;
};

/**
 * Sign the transaction inputs on the worker pool
 * (if workers are enabled).
 * @param {KeyRing} ring
 * @param {SighashType?} type
 * @param {WorkerPool?} pool
 * @returns {Promise}
 */

MTX.prototype.signAsync = async function signAsync(ring, type, pool) {
  if (!pool)
    return this.sign(ring, type);

  return await pool.sign(this, ring, type);
};

/**
 * Estimate maximum possible size.
 * @param {Function?} estimate - Input script size estimator.
 * @returns {Number}
 */

MTX.prototype.estimateSize = async function estimateSize(estimate) {
  const scale = consensus.WITNESS_SCALE_FACTOR;

  let total = 0;

  // Calculate the size, minus the input scripts.
  total += 4;
  total += encoding.sizeVarint(this.inputs.length);
  total += this.inputs.length * 40;

  total += encoding.sizeVarint(this.outputs.length);

  for (const output of this.outputs)
    total += output.getSize();

  total += 4;

  // Add size for signatures and public keys
  for (const {prevout} of this.inputs) {
    const coin = this.view.getOutput(prevout);

    // We're out of luck here.
    // Just assume it's a p2pkh.
    if (!coin) {
      total += 110;
      continue;
    }

    // Previous output script.
    const prev = coin.script;

    // P2PK
    if (prev.isPubkey()) {
      // varint script size
      total += 1;
      // OP_PUSHDATA0 [signature]
      total += 1 + 73;
      continue;
    }

    // P2PKH
    if (prev.isPubkeyhash()) {
      // varint script size
      total += 1;
      // OP_PUSHDATA0 [signature]
      total += 1 + 73;
      // OP_PUSHDATA0 [key]
      total += 1 + 33;
      continue;
    }

    const [m] = prev.getMultisig();
    if (m !== -1) {
      let size = 0;
      // Bare Multisig
      // OP_0
      size += 1;
      // OP_PUSHDATA0 [signature] ...
      size += (1 + 73) * m;
      // varint len
      size += encoding.sizeVarint(size);
      total += size;
      continue;
    }

    // P2WPKH
    if (prev.isWitnessPubkeyhash()) {
      let size = 0;
      // varint-items-len
      size += 1;
      // varint-len [signature]
      size += 1 + 73;
      // varint-len [key]
      size += 1 + 33;
      // vsize
      size = (size + scale - 1) / scale | 0;
      total += size;
      continue;
    }

    // Call out to the custom estimator.
    if (estimate) {
      const size = await estimate(prev);
      if (size !== -1) {
        total += size;
        continue;
      }
    }

    // P2SH
    if (prev.isScripthash()) {
      // varint size
      total += 1;
      // 2-of-3 multisig input
      total += 149;
      continue;
    }

    // P2WSH
    if (prev.isWitnessScripthash()) {
      let size = 0;
      // varint-items-len
      size += 1;
      // 2-of-3 multisig input
      size += 149;
      // vsize
      size = (size + scale - 1) / scale | 0;
      total += size;
      continue;
    }

    // Unknown.
    total += 110;
  }

  return total;
};

/**
 * Select necessary coins based on total output value.
 * @param {Coin[]} coins
 * @param {Object?} options
 * @returns {CoinSelection}
 * @throws on not enough funds available.
 */

MTX.prototype.selectCoins = function selectCoins(coins, options) {
  const selector = new CoinSelector(this, options);
  return selector.select(coins);
};

/**
 * Attempt to subtract a fee from a single output.
 * @param {Number} index
 * @param {Amount} fee
 */

MTX.prototype.subtractIndex = function subtractIndex(index, fee) {
  assert(typeof index === 'number');
  assert(typeof fee === 'number');

  const output = this.outputs[index];

  if (!output)
    throw new Error('Subtraction index does not exist.');

  if (output.value < fee + output.getDustThreshold())
    throw new Error('Could not subtract fee.');

  output.value -= fee;
};

/**
 * Attempt to subtract a fee from all outputs evenly.
 * @param {Amount} fee
 */

MTX.prototype.subtractFee = function subtractFee(fee) {
  assert(typeof fee === 'number');

  let outputs = 0;

  for (const output of this.outputs) {
    // Ignore nulldatas and
    // other OP_RETURN scripts.
    if (output.script.isUnspendable())
      continue;
    outputs += 1;
  }

  if (outputs === 0)
    throw new Error('Could not subtract fee.');

  const left = fee % outputs;
  const share = (fee - left) / outputs;

  // First pass, remove even shares.
  for (const output of this.outputs) {
    if (output.script.isUnspendable())
      continue;

    if (output.value < share + output.getDustThreshold())
      throw new Error('Could not subtract fee.');

    output.value -= share;
  }

  // Second pass, remove the remainder
  // for the one unlucky output.
  for (const output of this.outputs) {
    if (output.script.isUnspendable())
      continue;

    if (output.value >= left + output.getDustThreshold()) {
      output.value -= left;
      return;
    }
  }

  throw new Error('Could not subtract fee.');
};

/**
 * Select coins and fill the inputs.
 * @param {Coin[]} coins
 * @param {Object} options - See {@link MTX#selectCoins} options.
 * @returns {CoinSelector}
 */

MTX.prototype.fund = async function fund(coins, options) {
  assert(options, 'Options are required.');
  assert(options.changeAddress, 'Change address is required.');
  assert(this.inputs.length === 0, 'TX is already funded.');

  // Select necessary coins.
  const select = await this.selectCoins(coins, options);

  // Add coins to transaction.
  for (const coin of select.chosen)
    this.addCoin(coin);

  // Attempt to subtract fee.
  if (select.subtractFee) {
    const index = select.subtractIndex;
    if (index !== -1)
      this.subtractIndex(index, select.fee);
    else
      this.subtractFee(select.fee);
  }

  // Add a change output.
  const output = new Output();
  output.value = select.change;
  output.script.fromAddress(select.changeAddress);

  if (output.isDust(policy.MIN_RELAY)) {
    // Do nothing. Change is added to fee.
    this.changeIndex = -1;
    assert.strictEqual(this.getFee(), select.fee + select.change);
  } else {
    this.outputs.push(output);
    this.changeIndex = this.outputs.length - 1;
    assert.strictEqual(this.getFee(), select.fee);
  }

  return select;
};

/**
 * Sort inputs and outputs according to BIP69.
 * @see https://github.com/bitcoin/bips/blob/master/bip-0069.mediawiki
 */

MTX.prototype.sortMembers = function sortMembers() {
  let changeOutput = null;

  if (this.changeIndex !== -1) {
    changeOutput = this.outputs[this.changeIndex];
    assert(changeOutput);
  }

  this.inputs.sort(sortInputs);
  this.outputs.sort(sortOutputs);

  if (this.changeIndex !== -1) {
    this.changeIndex = this.outputs.indexOf(changeOutput);
    assert(this.changeIndex !== -1);
  }
};

/**
 * Avoid fee sniping.
 * @param {Number} - Current chain height.
 * @see bitcoin/src/wallet/wallet.cpp
 */

MTX.prototype.avoidFeeSniping = function avoidFeeSniping(height) {
  assert(typeof height === 'number', 'Must pass in height.');

  if (util.random(0, 10) === 0) {
    height -= util.random(0, 100);

    if (height < 0)
      height = 0;
  }

  this.setLocktime(height);
};

/**
 * Set locktime and sequences appropriately.
 * @param {Number} locktime
 */

MTX.prototype.setLocktime = function setLocktime(locktime) {
  assert(util.isU32(locktime), 'Locktime must be a uint32.');
  assert(this.inputs.length > 0, 'Cannot set sequence with no inputs.');

  for (const input of this.inputs) {
    if (input.sequence === 0xffffffff)
      input.sequence = 0xfffffffe;
  }

  this.locktime = locktime;
};

/**
 * Set sequence locktime.
 * @param {Number} index - Input index.
 * @param {Number} locktime
 * @param {Boolean?} seconds
 */

MTX.prototype.setSequence = function setSequence(index, locktime, seconds) {
  const input = this.inputs[index];

  assert(input, 'Input does not exist.');
  assert(util.isU32(locktime), 'Locktime must be a uint32.');

  this.version = 2;

  if (seconds) {
    locktime >>>= consensus.SEQUENCE_GRANULARITY;
    locktime &= consensus.SEQUENCE_MASK;
    locktime |= consensus.SEQUENCE_TYPE_FLAG;
  } else {
    locktime &= consensus.SEQUENCE_MASK;
  }

  input.sequence = locktime;
};

/**
 * Inspect the transaction.
 * @returns {Object}
 */

MTX.prototype.inspect = function inspect() {
  return this.format();
};

/**
 * Inspect the transaction.
 * @returns {Object}
 */

MTX.prototype.format = function format() {
  return TX.prototype.format.call(this, this.view);
};

/**
 * Convert transaction to JSON.
 * @returns {Object}
 */

MTX.prototype.toJSON = function toJSON() {
  return TX.prototype.getJSON.call(this, null, this.view);
};

/**
 * Convert transaction to JSON.
 * @param {Network} network
 * @returns {Object}
 */

MTX.prototype.getJSON = function getJSON(network) {
  return TX.prototype.getJSON.call(this, network, this.view);
};

/**
 * Instantiate a transaction from a
 * jsonified transaction object.
 * @param {Object} json - The jsonified transaction object.
 * @returns {MTX}
 */

MTX.fromJSON = function fromJSON(json) {
  return new MTX().fromJSON(json);
};

/**
 * Instantiate a transaction from a buffer reader.
 * @param {BufferReader} br
 * @returns {MTX}
 */

MTX.fromReader = function fromReader(br) {
  return new MTX().fromReader(br);
};

/**
 * Instantiate a transaction from a serialized Buffer.
 * @param {Buffer} data
 * @param {String?} enc - Encoding, can be `'hex'` or null.
 * @returns {MTX}
 */

MTX.fromRaw = function fromRaw(data, enc) {
  if (typeof data === 'string')
    data = Buffer.from(data, enc);
  return new MTX().fromRaw(data);
};

/**
 * Convert the MTX to a TX.
 * @returns {TX}
 */

MTX.prototype.toTX = function toTX() {
  return new TX().inject(this);
};

/**
 * Convert the MTX to a TX.
 * @returns {Array} [tx, view]
 */

MTX.prototype.commit = function commit() {
  return [this.toTX(), this.view];
};

/**
 * Instantiate MTX from TX.
 * @param {TX} tx
 * @returns {MTX}
 */

MTX.fromTX = function fromTX(tx) {
  return new MTX().inject(tx);
};

/**
 * Test whether an object is an MTX.
 * @param {Object} obj
 * @returns {Boolean}
 */

MTX.isMTX = function isMTX(obj) {
  return obj instanceof MTX;
};

/**
 * Coin Selector
 * @alias module:primitives.CoinSelector
 * @constructor
 * @param {TX} tx
 * @param {Object?} options
 */

function CoinSelector(tx, options) {
  if (!(this instanceof CoinSelector))
    return new CoinSelector(tx, options);

  this.tx = tx.clone();
  this.coins = [];
  this.outputValue = 0;
  this.index = 0;
  this.chosen = [];
  this.change = 0;
  this.fee = CoinSelector.MIN_FEE;

  this.selection = 'value';
  this.subtractFee = false;
  this.subtractIndex = -1;
  this.height = -1;
  this.depth = -1;
  this.hardFee = -1;
  this.rate = CoinSelector.FEE_RATE;
  this.maxFee = -1;
  this.round = false;
  this.changeAddress = null;

  // Needed for size estimation.
  this.estimate = null;

  if (options)
    this.fromOptions(options);
}

/**
 * Default fee rate
 * for coin selection.
 * @const {Amount}
 * @default
 */

CoinSelector.FEE_RATE = 10000;

/**
 * Minimum fee to start with
 * during coin selection.
 * @const {Amount}
 * @default
 */

CoinSelector.MIN_FEE = 10000;

/**
 * Maximum fee to allow
 * after coin selection.
 * @const {Amount}
 * @default
 */

CoinSelector.MAX_FEE = consensus.COIN / 10;

/**
 * Initialize selector options.
 * @param {Object} options
 * @private
 */

CoinSelector.prototype.fromOptions = function fromOptions(options) {
  if (options.selection) {
    assert(typeof options.selection === 'string');
    this.selection = options.selection;
  }

  if (options.subtractFee != null) {
    if (typeof options.subtractFee === 'number') {
      assert(util.isInt(options.subtractFee));
      assert(options.subtractFee >= -1);
      this.subtractIndex = options.subtractFee;
      this.subtractFee = this.subtractIndex !== -1;
    } else {
      assert(typeof options.subtractFee === 'boolean');
      this.subtractFee = options.subtractFee;
    }
  }

  if (options.subtractIndex != null) {
    assert(util.isInt(options.subtractIndex));
    assert(options.subtractIndex >= -1);
    this.subtractIndex = options.subtractIndex;
    this.subtractFee = this.subtractIndex !== -1;
  }

  if (options.height != null) {
    assert(util.isInt(options.height));
    assert(options.height >= -1);
    this.height = options.height;
  }

  if (options.confirmations != null) {
    assert(util.isInt(options.confirmations));
    assert(options.confirmations >= -1);
    this.depth = options.confirmations;
  }

  if (options.depth != null) {
    assert(util.isInt(options.depth));
    assert(options.depth >= -1);
    this.depth = options.depth;
  }

  if (options.hardFee != null) {
    assert(util.isInt(options.hardFee));
    assert(options.hardFee >= -1);
    this.hardFee = options.hardFee;
  }

  if (options.rate != null) {
    assert(util.isU64(options.rate));
    this.rate = options.rate;
  }

  if (options.maxFee != null) {
    assert(util.isInt(options.maxFee));
    assert(options.maxFee >= -1);
    this.maxFee = options.maxFee;
  }

  if (options.round != null) {
    assert(typeof options.round === 'boolean');
    this.round = options.round;
  }

  if (options.changeAddress) {
    const addr = options.changeAddress;
    if (typeof addr === 'string') {
      this.changeAddress = Address.fromString(addr);
    } else {
      assert(addr instanceof Address);
      this.changeAddress = addr;
    }
  }

  if (options.estimate) {
    assert(typeof options.estimate === 'function');
    this.estimate = options.estimate;
  }

  return this;
};

/**
 * Initialize the selector with coins to select from.
 * @param {Coin[]} coins
 */

CoinSelector.prototype.init = function init(coins) {
  this.coins = coins.slice();
  this.outputValue = this.tx.getOutputValue();
  this.index = 0;
  this.chosen = [];
  this.change = 0;
  this.fee = CoinSelector.MIN_FEE;
  this.tx.inputs.length = 0;

  switch (this.selection) {
    case 'all':
    case 'random':
      this.coins.sort(sortRandom);
      break;
    case 'age':
      this.coins.sort(sortAge);
      break;
    case 'value':
      this.coins.sort(sortValue);
      break;
    default:
      throw new FundingError(`Bad selection type: ${this.selection}.`);
  }
};

/**
 * Calculate total value required.
 * @returns {Amount}
 */

CoinSelector.prototype.total = function total() {
  if (this.subtractFee)
    return this.outputValue;
  return this.outputValue + this.fee;
};

/**
 * Test whether the selector has
 * completely funded the transaction.
 * @returns {Boolean}
 */

CoinSelector.prototype.isFull = function isFull() {
  return this.tx.getInputValue() >= this.total();
};

/**
 * Test whether a coin is spendable
 * with regards to the options.
 * @param {Coin} coin
 * @returns {Boolean}
 */

CoinSelector.prototype.isSpendable = function isSpendable(coin) {
  if (this.height === -1)
    return true;

  if (coin.coinbase) {
    if (coin.height === -1)
      return false;

    if (this.height + 1 < coin.height + consensus.COINBASE_MATURITY)
      return false;

    return true;
  }

  if (this.depth === -1)
    return true;

  const depth = coin.getDepth(this.height);

  if (depth < this.depth)
    return false;

  return true;
};

/**
 * Get the current fee based on a size.
 * @param {Number} size
 * @returns {Amount}
 */

CoinSelector.prototype.getFee = function getFee(size) {
  // This is mostly here for testing.
  // i.e. A fee rounded to the nearest
  // kb is easier to predict ahead of time.
  if (this.round) {
    const fee = policy.getRoundFee(size, this.rate);
    return Math.min(fee, CoinSelector.MAX_FEE);
  }

  const fee = policy.getMinFee(size, this.rate);
  return Math.min(fee, CoinSelector.MAX_FEE);
};

/**
 * Fund the transaction with more
 * coins if the `output value + fee`
 * total was updated.
 */

CoinSelector.prototype.fund = function fund() {
  while (this.index < this.coins.length) {
    const coin = this.coins[this.index++];

    if (!this.isSpendable(coin))
      continue;

    this.tx.addCoin(coin);
    this.chosen.push(coin);

    if (this.selection === 'all')
      continue;

    if (this.isFull())
      break;
  }
};

/**
 * Initiate selection from `coins`.
 * @param {Coin[]} coins
 * @returns {CoinSelector}
 */

CoinSelector.prototype.select = async function select(coins) {
  this.init(coins);

  if (this.hardFee !== -1) {
    this.selectHard();
  } else {
    // This is potentially asynchronous:
    // it may invoke the size estimator
    // required for redeem scripts (we
    // may be calling out to a wallet
    // or something similar).
    await this.selectEstimate();
  }

  if (!this.isFull()) {
    // Still failing to get enough funds.
    throw new FundingError(
      'Not enough funds.',
      this.tx.getInputValue(),
      this.total());
  }

  // How much money is left after filling outputs.
  this.change = this.tx.getInputValue() - this.total();

  return this;
};

/**
 * Initialize selection based on size estimate.
 */

CoinSelector.prototype.selectEstimate = async function selectEstimate() {
  // Set minimum fee and do
  // an initial round of funding.
  this.fee = CoinSelector.MIN_FEE;
  this.fund();

  // Add dummy output for change.
  const change = new Output();

  if (this.changeAddress) {
    change.script.fromAddress(this.changeAddress);
  } else {
    // In case we don't have a change address,
    // we use a fake p2pkh output to gauge size.
    change.script.fromPubkeyhash(encoding.ZERO_HASH160);
  }

  this.tx.outputs.push(change);

  // Keep recalculating the fee and funding
  // until we reach some sort of equilibrium.
  do {
    const size = await this.tx.estimateSize(this.estimate);

    this.fee = this.getFee(size);

    if (this.maxFee > 0 && this.fee > this.maxFee)
      throw new FundingError('Fee is too high.');

    // Failed to get enough funds, add more coins.
    if (!this.isFull())
      this.fund();
  } while (!this.isFull() && this.index < this.coins.length);
};

/**
 * Initiate selection based on a hard fee.
 */

CoinSelector.prototype.selectHard = function selectHard() {
  this.fee = Math.min(this.hardFee, CoinSelector.MAX_FEE);
  this.fund();
};

/**
 * An error thrown from the coin selector.
 * @constructor
 * @ignore
 * @extends Error
 * @param {String} msg
 * @param {Amount} available
 * @param {Amount} required
 * @property {String} message - Error message.
 * @property {Amount} availableFunds
 * @property {Amount} requiredFunds
 */

function FundingError(msg, available, required) {
  Error.call(this);

  this.type = 'FundingError';
  this.message = msg;
  this.availableFunds = -1;
  this.requiredFunds = -1;

  if (available != null) {
    this.message += ` (available=${Amount.wmcc(available)},`;
    this.message += ` required=${Amount.wmcc(required)})`;
    this.availableFunds = available;
    this.requiredFunds = required;
  }

  if (Error.captureStackTrace)
    Error.captureStackTrace(this, FundingError);
}

Object.setPrototypeOf(FundingError.prototype, Error.prototype);

/*
 * Helpers
 */

function sortAge(a, b) {
  a = a.height === -1 ? 0x7fffffff : a.height;
  b = b.height === -1 ? 0x7fffffff : b.height;
  return a - b;
}

function sortRandom(a, b) {
  return Math.random() > 0.5 ? 1 : -1;
}

function sortValue(a, b) {
  if (a.height === -1 && b.height !== -1)
    return 1;

  if (a.height !== -1 && b.height === -1)
    return -1;

  return b.value - a.value;
}

function sortInputs(a, b) {
  return a.compare(b);
}

function sortOutputs(a, b) {
  return a.compare(b);
}

/*
 * Expose
 */

exports = MTX;
exports.MTX = MTX;
exports.Selector = CoinSelector;
exports.FundingError = FundingError;

module.exports = exports;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * int64.js - int64s for wmcc_core.
 */



module.exports = __webpack_require__(132);


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * coinentry.js - coin entry object for wmcc_core.
 */



const assert = __webpack_require__(0);
const Coin = __webpack_require__(43);
const Output = __webpack_require__(13);
const BufferReader = __webpack_require__(2);
const StaticWriter = __webpack_require__(4);
const encoding = __webpack_require__(3);
const compress = __webpack_require__(104);

/*
 * Constants
 */

const NUM_FLAGS = 1;
const MAX_HEIGHT = ((1 << (32 - NUM_FLAGS)) >>> 0) - 1;

/**
 * Represents an unspent output.
 * @alias module:coins.CoinEntry
 * @constructor
 * @property {Number} version - Transaction version.
 * @property {Number} height - Transaction height (-1 if unconfirmed).
 * @property {Boolean} coinbase - Whether the containing
 * transaction is a coinbase.
 * @property {Output} output
 * @property {Boolean} spent
 * @property {Buffer} raw
 */

function CoinEntry() {
  if (!(this instanceof CoinEntry))
    return new CoinEntry();

  this.version = 1;
  this.height = -1;
  this.coinbase = false;
  this.output = new Output();
  this.spent = false;
  this.raw = null;
}

/**
 * Convert coin entry to an output.
 * @returns {Output}
 */

CoinEntry.prototype.toOutput = function toOutput() {
  return this.output;
};

/**
 * Convert coin entry to a coin.
 * @param {Outpoint} prevout
 * @returns {Coin}
 */

CoinEntry.prototype.toCoin = function toCoin(prevout) {
  const coin = new Coin();
  coin.version = this.version;
  coin.height = this.height;
  coin.coinbase = this.coinbase;
  coin.script = this.output.script;
  coin.value = this.output.value;
  coin.hash = prevout.hash;
  coin.index = prevout.index;
  return coin;
};

/**
 * Inject properties from TX.
 * @param {TX} tx
 * @param {Number} index
 */

CoinEntry.prototype.fromOutput = function fromOutput(output) {
  this.output = output;
  return this;
};

/**
 * Instantiate a coin from a TX
 * @param {TX} tx
 * @param {Number} index - Output index.
 * @returns {CoinEntry}
 */

CoinEntry.fromOutput = function fromOutput(output) {
  return new CoinEntry().fromOutput(output);
};

/**
 * Inject properties from TX.
 * @param {TX} tx
 * @param {Number} index
 */

CoinEntry.prototype.fromCoin = function fromCoin(coin) {
  this.version = coin.version;
  this.height = coin.height;
  this.coinbase = coin.coinbase;
  this.output.script = coin.script;
  this.output.value = coin.value;
  return this;
};

/**
 * Instantiate a coin from a TX
 * @param {TX} tx
 * @param {Number} index - Output index.
 * @returns {CoinEntry}
 */

CoinEntry.fromCoin = function fromCoin(coin) {
  return new CoinEntry().fromCoin(coin);
};

/**
 * Inject properties from TX.
 * @param {TX} tx
 * @param {Number} index
 */

CoinEntry.prototype.fromTX = function fromTX(tx, index, height) {
  assert(typeof index === 'number');
  assert(typeof height === 'number');
  assert(index >= 0 && index < tx.outputs.length);
  this.version = tx.version;
  this.height = height;
  this.coinbase = tx.isCoinbase();
  this.output = tx.outputs[index];
  return this;
};

/**
 * Instantiate a coin from a TX
 * @param {TX} tx
 * @param {Number} index - Output index.
 * @returns {CoinEntry}
 */

CoinEntry.fromTX = function fromTX(tx, index, height) {
  return new CoinEntry().fromTX(tx, index, height);
};

/**
 * Calculate size of coin.
 * @returns {Number}
 */

CoinEntry.prototype.getSize = function getSize() {
  if (this.raw)
    return this.raw.length;

  let size = 0;
  size += encoding.sizeVarint(this.version);
  size += 4;
  size += compress.size(this.output);

  return size;
};

/**
 * Write the coin to a buffer writer.
 * @param {BufferWriter} bw
 */

CoinEntry.prototype.toWriter = function toWriter(bw) {
  if (this.raw) {
    bw.writeBytes(this.raw);
    return bw;
  }

  let height = this.height;
  let field = 0;

  if (this.coinbase)
    field |= 1;

  if (height === -1)
    height = MAX_HEIGHT;

  field |= height << NUM_FLAGS;

  bw.writeVarint(this.version);
  bw.writeU32(field);
  compress.pack(this.output, bw);

  return bw;
};

/**
 * Serialize the coin.
 * @returns {Buffer}
 */

CoinEntry.prototype.toRaw = function toRaw() {
  if (this.raw)
    return this.raw;

  const size = this.getSize();
  const bw = new StaticWriter(size);

  this.toWriter(bw);

  this.raw = bw.render();

  return this.raw;
};

/**
 * Inject properties from serialized buffer writer.
 * @private
 * @param {BufferReader} br
 */

CoinEntry.prototype.fromReader = function fromReader(br) {
  const version = br.readVarint();
  const field = br.readU32();

  let height = field >>> NUM_FLAGS;

  if (height === MAX_HEIGHT)
    height = -1;

  this.version = version;
  this.coinbase = (field & 1) !== 0;
  this.height = height;

  compress.unpack(this.output, br);

  return this;
};

/**
 * Instantiate a coin from a serialized Buffer.
 * @param {Buffer} data
 * @returns {CoinEntry}
 */

CoinEntry.fromReader = function fromReader(data) {
  return new CoinEntry().fromReader(data);
};

/**
 * Inject properties from serialized data.
 * @private
 * @param {Buffer} data
 */

CoinEntry.prototype.fromRaw = function fromRaw(data) {
  this.fromReader(new BufferReader(data));
  this.raw = data;
  return this;
};

/**
 * Instantiate a coin from a serialized Buffer.
 * @param {Buffer} data
 * @returns {CoinEntry}
 */

CoinEntry.fromRaw = function fromRaw(data) {
  return new CoinEntry().fromRaw(data);
};

/*
 * Expose
 */

module.exports = CoinEntry;


/***/ }),
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * packets.js - worker packets for wmcc_core.
 */



/**
 * @module workers/packets
 */

const assert = __webpack_require__(0);
const BufferReader = __webpack_require__(2);
const encoding = __webpack_require__(3);
const Script = __webpack_require__(8);
const Witness = __webpack_require__(56);
const Output = __webpack_require__(13);
const MTX = __webpack_require__(48);
const TX = __webpack_require__(15);
const KeyRing = __webpack_require__(47);
const CoinView = __webpack_require__(29);
const ScriptError = __webpack_require__(35);

/*
 * Constants
 */

const packetTypes = {
  ENV: 0,
  EVENT: 1,
  LOG: 2,
  ERROR: 3,
  ERRORRESULT: 4,
  CHECK: 5,
  CHECKRESULT: 6,
  SIGN: 7,
  SIGNRESULT: 8,
  CHECKINPUT: 9,
  CHECKINPUTRESULT: 10,
  SIGNINPUT: 11,
  SIGNINPUTRESULT: 12,
  ECVERIFY: 13,
  ECVERIFYRESULT: 14,
  ECSIGN: 15,
  ECSIGNRESULT: 16,
  MINE: 17,
  MINERESULT: 18,
  SCRYPT: 19,
  SCRYPTRESULT: 20
};

/**
 * Packet
 * @constructor
 */

function Packet() {
  this.id = ++Packet.id >>> 0;
}

Packet.id = 0;

Packet.prototype.cmd = -1;

Packet.prototype.getSize = function getSize() {
  throw new Error('Abstract method.');
};

Packet.prototype.toWriter = function toWriter() {
  throw new Error('Abstract method.');
};

Packet.prototype.fromRaw = function fromRaw() {
  throw new Error('Abstract method.');
};

Packet.fromRaw = function fromRaw() {
  throw new Error('Abstract method.');
};

/**
 * EnvPacket
 * @constructor
 */

function EnvPacket(env) {
  Packet.call(this);
  this.env = env || {};
  this.json = JSON.stringify(this.env);
}

Object.setPrototypeOf(EnvPacket.prototype, Packet.prototype);

EnvPacket.prototype.cmd = packetTypes.ENV;

EnvPacket.prototype.getSize = function getSize() {
  return encoding.sizeVarString(this.json, 'utf8');
};

EnvPacket.prototype.toWriter = function toWriter(bw) {
  bw.writeVarString(this.json, 'utf8');
  return bw;
};

EnvPacket.prototype.fromRaw = function fromRaw(data) {
  const br = new BufferReader(data, true);
  this.json = br.readVarString('utf8');
  this.env = JSON.parse(this.json);
  return this;
};

EnvPacket.fromRaw = function fromRaw(data) {
  return new EnvPacket().fromRaw(data);
};

/**
 * EventPacket
 * @constructor
 */

function EventPacket(items) {
  Packet.call(this);
  this.items = items || [];
  this.json = JSON.stringify(this.items);
}

Object.setPrototypeOf(EventPacket.prototype, Packet.prototype);

EventPacket.prototype.cmd = packetTypes.EVENT;

EventPacket.prototype.getSize = function getSize() {
  return encoding.sizeVarString(this.json, 'utf8');
};

EventPacket.prototype.toWriter = function toWriter(bw) {
  bw.writeVarString(this.json, 'utf8');
  return bw;
};

EventPacket.prototype.fromRaw = function fromRaw(data) {
  const br = new BufferReader(data, true);
  this.json = br.readVarString('utf8');
  this.items = JSON.parse(this.json);
  return this;
};

EventPacket.fromRaw = function fromRaw(data) {
  return new EventPacket().fromRaw(data);
};

/**
 * LogPacket
 * @constructor
 */

function LogPacket(text) {
  Packet.call(this);
  this.text = text || '';
}

Object.setPrototypeOf(LogPacket.prototype, Packet.prototype);

LogPacket.prototype.cmd = packetTypes.LOG;

LogPacket.prototype.getSize = function getSize() {
  return encoding.sizeVarString(this.text, 'utf8');
};

LogPacket.prototype.toWriter = function toWriter(bw) {
  bw.writeVarString(this.text, 'utf8');
  return bw;
};

LogPacket.prototype.fromRaw = function fromRaw(data) {
  const br = new BufferReader(data, true);
  this.text = br.readVarString('utf8');
  return this;
};

LogPacket.fromRaw = function fromRaw(data) {
  return new LogPacket().fromRaw(data);
};

/**
 * ErrorPacket
 * @constructor
 */

function ErrorPacket(error) {
  Packet.call(this);
  this.error = error || new Error();
}

Object.setPrototypeOf(ErrorPacket.prototype, Packet.prototype);

ErrorPacket.prototype.cmd = packetTypes.ERROR;

ErrorPacket.prototype.getSize = function getSize() {
  const err = this.error;

  let size = 0;

  size += encoding.sizeVarString(stringify(err.message), 'utf8');
  size += encoding.sizeVarString(stringify(err.stack), 'utf8');
  size += encoding.sizeVarString(stringify(err.type), 'utf8');

  switch (typeof err.code) {
    case 'number':
      size += 1;
      size += 4;
      break;
    case 'string':
      size += 1;
      size += encoding.sizeVarString(err.code, 'utf8');
      break;
    default:
      size += 1;
      break;
  }

  return size;
};

ErrorPacket.prototype.toWriter = function toWriter(bw) {
  const err = this.error;

  bw.writeVarString(stringify(err.message), 'utf8');
  bw.writeVarString(stringify(err.stack), 'utf8');
  bw.writeVarString(stringify(err.type), 'utf8');

  switch (typeof err.code) {
    case 'number':
      bw.writeU8(2);
      bw.writeI32(err.code);
      break;
    case 'string':
      bw.writeU8(1);
      bw.writeVarString(err.code, 'utf8');
      break;
    default:
      bw.writeU8(0);
      break;
  }

  return bw;
};

ErrorPacket.prototype.fromRaw = function fromRaw(data) {
  const br = new BufferReader(data, true);
  const err = this.error;

  err.message = br.readVarString('utf8');
  err.stack = br.readVarString('utf8');
  err.type = br.readVarString('utf8');

  switch (br.readU8()) {
    case 2:
      err.code = br.readI32();
      break;
    case 1:
      err.code = br.readVarString('utf8');
      break;
    default:
      err.code = null;
      break;
  }

  return this;
};

ErrorPacket.fromRaw = function fromRaw(data) {
  return new ErrorPacket().fromRaw(data);
};

/**
 * ErrorResultPacket
 * @constructor
 */

function ErrorResultPacket(error) {
  ErrorPacket.call(this, error);
}

Object.setPrototypeOf(ErrorResultPacket.prototype, ErrorPacket.prototype);

ErrorResultPacket.prototype.cmd = packetTypes.ERRORRESULT;

ErrorResultPacket.fromRaw = function fromRaw(data) {
  return new ErrorResultPacket().fromRaw(data);
};

/**
 * CheckPacket
 * @constructor
 */

function CheckPacket(tx, view, flags) {
  Packet.call(this);
  this.tx = tx || null;
  this.view = view || null;
  this.flags = flags != null ? flags : null;
}

Object.setPrototypeOf(CheckPacket.prototype, Packet.prototype);

CheckPacket.prototype.cmd = packetTypes.CHECK;

CheckPacket.prototype.getSize = function getSize() {
  return this.tx.getSize() + this.view.getSize(this.tx) + 4;
};

CheckPacket.prototype.toWriter = function toWriter(bw) {
  this.tx.toWriter(bw);
  this.view.toWriter(bw, this.tx);
  bw.writeI32(this.flags != null ? this.flags : -1);
  return bw;
};

CheckPacket.prototype.fromRaw = function fromRaw(data) {
  const br = new BufferReader(data, true);

  this.tx = TX.fromReader(br);
  this.view = CoinView.fromReader(br, this.tx);
  this.flags = br.readI32();

  if (this.flags === -1)
    this.flags = null;

  return this;
};

CheckPacket.fromRaw = function fromRaw(data) {
  return new CheckPacket().fromRaw(data);
};

/**
 * CheckResultPacket
 * @constructor
 */

function CheckResultPacket(error) {
  Packet.call(this);
  this.error = error || null;
}

Object.setPrototypeOf(CheckResultPacket.prototype, Packet.prototype);

CheckResultPacket.prototype.cmd = packetTypes.CHECKRESULT;

CheckResultPacket.prototype.getSize = function getSize() {
  const err = this.error;

  let size = 0;

  if (!err) {
    size += 1;
    return size;
  }

  size += 1;
  size += encoding.sizeVarString(stringify(err.message), 'utf8');
  size += encoding.sizeVarString(stringify(err.stack), 'utf8');
  size += encoding.sizeVarString(stringify(err.code), 'utf8');
  size += 1;
  size += 4;

  return size;
};

CheckResultPacket.prototype.toWriter = function toWriter(bw) {
  const err = this.error;

  if (!err) {
    bw.writeU8(0);
    return bw;
  }

  bw.writeU8(1);
  bw.writeVarString(stringify(err.message), 'utf8');
  bw.writeVarString(stringify(err.stack), 'utf8');
  bw.writeVarString(stringify(err.code), 'utf8');
  bw.writeU8(err.op === -1 ? 0xff : err.op);
  bw.writeU32(err.ip === -1 ? 0xffffffff : err.ip);

  return bw;
};

CheckResultPacket.prototype.fromRaw = function fromRaw(data) {
  const br = new BufferReader(data, true);

  if (br.readU8() === 0)
    return this;

  const err = new ScriptError('');

  err.message = br.readVarString('utf8');
  err.stack = br.readVarString('utf8');
  err.code = br.readVarString('utf8');
  err.op = br.readU8();
  err.ip = br.readU32();

  if (err.op === 0xff)
    err.op = -1;

  if (err.ip === 0xffffffff)
    err.ip = -1;

  this.error = err;

  return this;
};

CheckResultPacket.fromRaw = function fromRaw(data) {
  return new CheckResultPacket().fromRaw(data);
};

/**
 * SignPacket
 * @constructor
 */

function SignPacket(tx, rings, type) {
  Packet.call(this);
  this.tx = tx || null;
  this.rings = rings || [];
  this.type = type != null ? type : 1;
}

Object.setPrototypeOf(SignPacket.prototype, Packet.prototype);

SignPacket.prototype.cmd = packetTypes.SIGN;

SignPacket.prototype.getSize = function getSize() {
  let size = 0;

  size += this.tx.getSize();
  size += this.tx.view.getSize(this.tx);
  size += encoding.sizeVarint(this.rings.length);

  for (const ring of this.rings)
    size += ring.getSize();

  size += 1;

  return size;
};

SignPacket.prototype.toWriter = function toWriter(bw) {
  this.tx.toWriter(bw);
  this.tx.view.toWriter(bw, this.tx);

  bw.writeVarint(this.rings.length);

  for (const ring of this.rings)
    ring.toWriter(bw);

  bw.writeU8(this.type);

  return bw;
};

SignPacket.prototype.fromRaw = function fromRaw(data) {
  const br = new BufferReader(data, true);

  this.tx = MTX.fromReader(br);
  this.tx.view.fromReader(br, this.tx);

  const count = br.readVarint();

  for (let i = 0; i < count; i++) {
    const ring = KeyRing.fromReader(br);
    this.rings.push(ring);
  }

  this.type = br.readU8();

  return this;
};

SignPacket.fromRaw = function fromRaw(data) {
  return new SignPacket().fromRaw(data);
};

/**
 * SignResultPacket
 * @constructor
 */

function SignResultPacket(total, witness, script) {
  Packet.call(this);
  this.total = total || 0;
  this.script = script || [];
  this.witness = witness || [];
}

Object.setPrototypeOf(SignResultPacket.prototype, Packet.prototype);

SignResultPacket.prototype.cmd = packetTypes.SIGNRESULT;

SignResultPacket.prototype.fromTX = function fromTX(tx, total) {
  this.total = total;

  for (const input of tx.inputs) {
    this.script.push(input.script);
    this.witness.push(input.witness);
  }

  return this;
};

SignResultPacket.fromTX = function fromTX(tx, total) {
  return new SignResultPacket().fromTX(tx, total);
};

SignResultPacket.prototype.getSize = function getSize() {
  let size = 0;

  size += encoding.sizeVarint(this.total);
  size += encoding.sizeVarint(this.script.length);

  for (let i = 0; i < this.script.length; i++) {
    const script = this.script[i];
    const witness = this.witness[i];
    size += script.getVarSize();
    size += witness.getVarSize();
  }

  return size;
};

SignResultPacket.prototype.toWriter = function toWriter(bw) {
  assert(this.script.length === this.witness.length);

  bw.writeVarint(this.total);
  bw.writeVarint(this.script.length);

  for (let i = 0; i < this.script.length; i++) {
    this.script[i].toWriter(bw);
    this.witness[i].toWriter(bw);
  }

  return bw;
};

SignResultPacket.prototype.inject = function inject(tx) {
  assert(this.script.length === tx.inputs.length);
  assert(this.witness.length === tx.inputs.length);

  for (let i = 0; i < tx.inputs.length; i++) {
    const input = tx.inputs[i];
    input.script = this.script[i];
    input.witness = this.witness[i];
  }
};

SignResultPacket.prototype.fromRaw = function fromRaw(data) {
  const br = new BufferReader(data, true);

  this.total = br.readVarint();

  const count = br.readVarint();

  for (let i = 0; i < count; i++) {
    this.script.push(Script.fromReader(br));
    this.witness.push(Witness.fromReader(br));
  }

  return this;
};

SignResultPacket.fromRaw = function fromRaw(data) {
  return new SignResultPacket().fromRaw(data);
};

/**
 * CheckInputPacket
 * @constructor
 */

function CheckInputPacket(tx, index, coin, flags) {
  Packet.call(this);
  this.tx = tx || null;
  this.index = index;
  this.coin = coin || null;
  this.flags = flags != null ? flags : null;
}

Object.setPrototypeOf(CheckInputPacket.prototype, Packet.prototype);

CheckInputPacket.prototype.cmd = packetTypes.CHECKINPUT;

CheckInputPacket.prototype.getSize = function getSize() {
  let size = 0;
  size += this.tx.getSize();
  size += encoding.sizeVarint(this.index);
  size += encoding.sizeVarint(this.coin.value);
  size += this.coin.script.getVarSize();
  size += 4;
  return size;
};

CheckInputPacket.prototype.toWriter = function toWriter(bw) {
  this.tx.toWriter(bw);
  bw.writeVarint(this.index);
  bw.writeVarint(this.coin.value);
  this.coin.script.toWriter(bw);
  bw.writeI32(this.flags != null ? this.flags : -1);
  return bw;
};

CheckInputPacket.prototype.fromRaw = function fromRaw(data) {
  const br = new BufferReader(data, true);

  this.tx = TX.fromReader(br);
  this.index = br.readVarint();

  this.coin = new Output();
  this.coin.value = br.readVarint();
  this.coin.script.fromReader(br);

  this.flags = br.readI32();

  if (this.flags === -1)
    this.flags = null;

  return this;
};

CheckInputPacket.fromRaw = function fromRaw(data) {
  return new CheckInputPacket().fromRaw(data);
};

/**
 * CheckInputResultPacket
 * @constructor
 */

function CheckInputResultPacket(error) {
  CheckResultPacket.call(this, error);
}

Object.setPrototypeOf(
  CheckInputResultPacket.prototype,
  CheckResultPacket.prototype);

CheckInputResultPacket.prototype.cmd = packetTypes.CHECKINPUTRESULT;

CheckInputResultPacket.fromRaw = function fromRaw(data) {
  return new CheckInputResultPacket().fromRaw(data);
};

/**
 * SignInputPacket
 * @constructor
 */

function SignInputPacket(tx, index, coin, ring, type) {
  Packet.call(this);
  this.tx = tx || null;
  this.index = index;
  this.coin = coin || null;
  this.ring = ring || null;
  this.type = type != null ? type : 1;
}

Object.setPrototypeOf(SignInputPacket.prototype, Packet.prototype);

SignInputPacket.prototype.cmd = packetTypes.SIGNINPUT;

SignInputPacket.prototype.getSize = function getSize() {
  let size = 0;
  size += this.tx.getSize();
  size += encoding.sizeVarint(this.index);
  size += encoding.sizeVarint(this.coin.value);
  size += this.coin.script.getVarSize();
  size += this.ring.getSize();
  size += 1;
  return size;
};

SignInputPacket.prototype.toWriter = function toWriter(bw) {
  this.tx.toWriter(bw);
  bw.writeVarint(this.index);
  bw.writeVarint(this.coin.value);
  this.coin.script.toWriter(bw);
  this.ring.toWriter(bw);
  bw.writeU8(this.type);
  return bw;
};

SignInputPacket.prototype.fromRaw = function fromRaw(data) {
  const br = new BufferReader(data, true);

  this.tx = MTX.fromReader(br);
  this.index = br.readVarint();

  this.coin = new Output();
  this.coin.value = br.readVarint();
  this.coin.script.fromReader(br);

  this.ring = KeyRing.fromReader(br);
  this.type = br.readU8();

  return this;
};

SignInputPacket.fromRaw = function fromRaw(data) {
  return new SignInputPacket().fromRaw(data);
};

/**
 * SignInputResultPacket
 * @constructor
 */

function SignInputResultPacket(value, witness, script) {
  Packet.call(this);
  this.value = value || false;
  this.script = script || null;
  this.witness = witness || null;
}

Object.setPrototypeOf(SignInputResultPacket.prototype, Packet.prototype);

SignInputResultPacket.prototype.cmd = packetTypes.SIGNINPUTRESULT;

SignInputResultPacket.prototype.fromTX = function fromTX(tx, i, value) {
  const input = tx.inputs[i];

  assert(input);

  this.value = value;
  this.script = input.script;
  this.witness = input.witness;

  return this;
};

SignInputResultPacket.fromTX = function fromTX(tx, i, value) {
  return new SignInputResultPacket().fromTX(tx, i, value);
};

SignInputResultPacket.prototype.getSize = function getSize() {
  return 1 + this.script.getVarSize() + this.witness.getVarSize();
};

SignInputResultPacket.prototype.toWriter = function toWriter(bw) {
  bw.writeU8(this.value ? 1 : 0);
  this.script.toWriter(bw);
  this.witness.toWriter(bw);
  return bw;
};

SignInputResultPacket.prototype.inject = function inject(tx, i) {
  const input = tx.inputs[i];
  assert(input);
  input.script = this.script;
  input.witness = this.witness;
};

SignInputResultPacket.prototype.fromRaw = function fromRaw(data) {
  const br = new BufferReader(data, true);
  this.value = br.readU8() === 1;
  this.script = Script.fromReader(br);
  this.witness = Witness.fromReader(br);
  return this;
};

SignInputResultPacket.fromRaw = function fromRaw(data) {
  return new SignInputResultPacket().fromRaw(data);
};

/**
 * ECVerifyPacket
 * @constructor
 */

function ECVerifyPacket(msg, sig, key) {
  Packet.call(this);
  this.msg = msg || null;
  this.sig = sig || null;
  this.key = key || null;
}

Object.setPrototypeOf(ECVerifyPacket.prototype, Packet.prototype);

ECVerifyPacket.prototype.cmd = packetTypes.ECVERIFY;

ECVerifyPacket.prototype.getSize = function getSize() {
  let size = 0;
  size += encoding.sizeVarBytes(this.msg);
  size += encoding.sizeVarBytes(this.sig);
  size += encoding.sizeVarBytes(this.key);
  return size;
};

ECVerifyPacket.prototype.toWriter = function toWriter(bw) {
  bw.writeVarBytes(this.msg);
  bw.writeVarBytes(this.sig);
  bw.writeVarBytes(this.key);
  return bw;
};

ECVerifyPacket.prototype.fromRaw = function fromRaw(data) {
  const br = new BufferReader(data, true);
  this.msg = br.readVarBytes();
  this.sig = br.readVarBytes();
  this.key = br.readVarBytes();
  return this;
};

ECVerifyPacket.fromRaw = function fromRaw(data) {
  return new ECVerifyPacket().fromRaw(data);
};

/**
 * ECVerifyResultPacket
 * @constructor
 */

function ECVerifyResultPacket(value) {
  Packet.call(this);
  this.value = value;
}

Object.setPrototypeOf(ECVerifyResultPacket.prototype, Packet.prototype);

ECVerifyResultPacket.prototype.cmd = packetTypes.ECVERIFYRESULT;

ECVerifyResultPacket.prototype.getSize = function getSize() {
  return 1;
};

ECVerifyResultPacket.prototype.toWriter = function toWriter(bw) {
  bw.writeU8(this.value ? 1 : 0);
  return bw;
};

ECVerifyResultPacket.prototype.fromRaw = function fromRaw(data) {
  const br = new BufferReader(data, true);
  this.value = br.readU8() === 1;
  return this;
};

ECVerifyResultPacket.fromRaw = function fromRaw(data) {
  return new ECVerifyResultPacket().fromRaw(data);
};

/**
 * ECSignPacket
 * @constructor
 */

function ECSignPacket(msg, key) {
  Packet.call(this);
  this.msg = msg || null;
  this.key = key || null;
}

Object.setPrototypeOf(ECSignPacket.prototype, Packet.prototype);

ECSignPacket.prototype.cmd = packetTypes.ECSIGN;

ECSignPacket.prototype.getSize = function getSize() {
  let size = 0;
  size += encoding.sizeVarBytes(this.msg);
  size += encoding.sizeVarBytes(this.key);
  return size;
};

ECSignPacket.prototype.toWriter = function toWriter(bw) {
  bw.writeVarBytes(this.msg);
  bw.writeVarBytes(this.key);
  return bw;
};

ECSignPacket.prototype.fromRaw = function fromRaw(data) {
  const br = new BufferReader(data, true);
  this.msg = br.readVarBytes();
  this.key = br.readVarBytes();
  return this;
};

ECSignPacket.fromRaw = function fromRaw(data) {
  return new ECSignPacket().fromRaw(data);
};

/**
 * ECSignResultPacket
 * @constructor
 */

function ECSignResultPacket(sig) {
  Packet.call(this);
  this.sig = sig;
}

Object.setPrototypeOf(ECSignResultPacket.prototype, Packet.prototype);

ECSignResultPacket.prototype.cmd = packetTypes.ECSIGNRESULT;

ECSignResultPacket.prototype.getSize = function getSize() {
  return encoding.sizeVarBytes(this.sig);
};

ECSignResultPacket.prototype.toWriter = function toWriter(bw) {
  bw.writeVarBytes(this.sig);
  return bw;
};

ECSignResultPacket.prototype.fromRaw = function fromRaw(data) {
  const br = new BufferReader(data, true);
  this.sig = br.readVarBytes();
  return this;
};

ECSignResultPacket.fromRaw = function fromRaw(data) {
  return new ECSignResultPacket().fromRaw(data);
};

/**
 * MinePacket
 * @constructor
 */

function MinePacket(data, target, min, max) {
  Packet.call(this);
  this.data = data || null;
  this.target = target || null;
  this.min = min != null ? min : -1;
  this.max = max != null ? max : -1;
}

Object.setPrototypeOf(MinePacket.prototype, Packet.prototype);

MinePacket.prototype.cmd = packetTypes.MINE;

MinePacket.prototype.getSize = function getSize() {
  return 120;
};

MinePacket.prototype.toWriter = function toWriter(bw) {
  bw.writeBytes(this.data);
  bw.writeBytes(this.target);
  bw.writeU32(this.min);
  bw.writeU32(this.max);
  return bw;
};

MinePacket.prototype.fromRaw = function fromRaw(data) {
  const br = new BufferReader(data, true);
  this.data = br.readBytes(80);
  this.target = br.readBytes(32);
  this.min = br.readU32();
  this.max = br.readU32();
  return this;
};

MinePacket.fromRaw = function fromRaw(data) {
  return new MinePacket().fromRaw(data);
};

/**
 * MineResultPacket
 * @constructor
 */

function MineResultPacket(nonce) {
  Packet.call(this);
  this.nonce = nonce != null ? nonce : -1;
}

Object.setPrototypeOf(MineResultPacket.prototype, Packet.prototype);

MineResultPacket.prototype.cmd = packetTypes.MINERESULT;

MineResultPacket.prototype.getSize = function getSize() {
  return 5;
};

MineResultPacket.prototype.toWriter = function toWriter(bw) {
  bw.writeU8(this.nonce !== -1 ? 1 : 0);
  bw.writeU32(this.nonce);
  return bw;
};

MineResultPacket.prototype.fromRaw = function fromRaw(data) {
  const br = new BufferReader(data, true);
  this.nonce = -1;
  if (br.readU8() === 1)
    this.nonce = br.readU32();
  return this;
};

MineResultPacket.fromRaw = function fromRaw(data) {
  return new MineResultPacket().fromRaw(data);
};

/**
 * ScryptPacket
 * @constructor
 */

function ScryptPacket(passwd, salt, N, r, p, len) {
  Packet.call(this);
  this.passwd = passwd || null;
  this.salt = salt || null;
  this.N = N != null ? N : -1;
  this.r = r != null ? r : -1;
  this.p = p != null ? p : -1;
  this.len = len != null ? len : -1;
}

Object.setPrototypeOf(ScryptPacket.prototype, Packet.prototype);

ScryptPacket.prototype.cmd = packetTypes.SCRYPT;

ScryptPacket.prototype.getSize = function getSize() {
  let size = 0;
  size += encoding.sizeVarBytes(this.passwd);
  size += encoding.sizeVarBytes(this.salt);
  size += 16;
  return size;
};

ScryptPacket.prototype.toWriter = function toWriter(bw) {
  bw.writeVarBytes(this.passwd);
  bw.writeVarBytes(this.salt);
  bw.writeU32(this.N);
  bw.writeU32(this.r);
  bw.writeU32(this.p);
  bw.writeU32(this.len);
  return bw;
};

ScryptPacket.prototype.fromRaw = function fromRaw(data) {
  const br = new BufferReader(data, true);
  this.passwd = br.readVarBytes();
  this.salt = br.readVarBytes();
  this.N = br.readU32();
  this.r = br.readU32();
  this.p = br.readU32();
  this.len = br.readU32();
  return this;
};

ScryptPacket.fromRaw = function fromRaw(data) {
  return new ScryptPacket().fromRaw(data);
};

/**
 * ScryptResultPacket
 * @constructor
 */

function ScryptResultPacket(key) {
  Packet.call(this);
  this.key = key || null;
}

Object.setPrototypeOf(ScryptResultPacket.prototype, Packet.prototype);

ScryptResultPacket.prototype.cmd = packetTypes.SCRYPTRESULT;

ScryptResultPacket.prototype.getSize = function getSize() {
  return encoding.sizeVarBytes(this.key);
};

ScryptResultPacket.prototype.toWriter = function toWriter(bw) {
  bw.writeVarBytes(this.key);
  return bw;
};

ScryptResultPacket.prototype.fromRaw = function fromRaw(data) {
  const br = new BufferReader(data, true);
  this.key = br.readVarBytes();
  return this;
};

ScryptResultPacket.fromRaw = function fromRaw(data) {
  return new ScryptResultPacket().fromRaw(data);
};

/*
 * Helpers
 */

function stringify(value) {
  if (typeof value !== 'string')
    return '';
  return value;
}

/*
 * Expose
 */

exports.types = packetTypes;
exports.EnvPacket = EnvPacket;
exports.EventPacket = EventPacket;
exports.LogPacket = LogPacket;
exports.ErrorPacket = ErrorPacket;
exports.ErrorResultPacket = ErrorResultPacket;
exports.CheckPacket = CheckPacket;
exports.CheckResultPacket = CheckResultPacket;
exports.SignPacket = SignPacket;
exports.SignResultPacket = SignResultPacket;
exports.CheckInputPacket = CheckInputPacket;
exports.CheckInputResultPacket = CheckInputResultPacket;
exports.SignInputPacket = SignInputPacket;
exports.SignInputResultPacket = SignInputResultPacket;
exports.ECVerifyPacket = ECVerifyPacket;
exports.ECVerifyResultPacket = ECVerifyResultPacket;
exports.ECSignPacket = ECSignPacket;
exports.ECSignResultPacket = ECSignResultPacket;
exports.MinePacket = MinePacket;
exports.MineResultPacket = MineResultPacket;
exports.ScryptPacket = ScryptPacket;
exports.ScryptResultPacket = ScryptResultPacket;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var hash = exports;

hash.utils = __webpack_require__(14);
hash.common = __webpack_require__(31);
hash.sha = __webpack_require__(147);
hash.ripemd = __webpack_require__(151);
hash.hmac = __webpack_require__(152);

// Proxy hash functions to the main object
hash.sha1 = hash.sha.sha1;
hash.sha256 = hash.sha.sha256;
hash.sha224 = hash.sha.sha224;
hash.sha384 = hash.sha.sha384;
hash.sha512 = hash.sha.sha512;
hash.ripemd160 = hash.ripemd.ripemd160;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * witness.js - witness object for wmcc_core.
 */



const assert = __webpack_require__(0);
const util = __webpack_require__(1);
const Script = __webpack_require__(8);
const common = __webpack_require__(27);
const encoding = __webpack_require__(3);
const BufferReader = __webpack_require__(2);
const StaticWriter = __webpack_require__(4);
const Address = __webpack_require__(11);
const Stack = __webpack_require__(40);
const scriptTypes = common.types;
const scriptTypesByVal = common.typesByVal;

/**
 * Refers to the witness field of segregated witness transactions.
 * @alias module:script.Witness
 * @constructor
 * @param {Buffer[]|NakedWitness} items - Array of
 * stack items.
 * @property {Buffer[]} items
 * @property {Script?} redeem
 * @property {Number} length
 */

function Witness(options) {
  if (!(this instanceof Witness))
    return new Witness(options);

  Stack.call(this, []);

  if (options)
    this.fromOptions(options);
}

Object.setPrototypeOf(Witness.prototype, Stack.prototype);

/**
 * Inject properties from options object.
 * @private
 * @param {Object} options
 */

Witness.prototype.fromOptions = function fromOptions(options) {
  assert(options, 'Witness data is required.');

  if (Array.isArray(options))
    return this.fromArray(options);

  if (options.items)
    return this.fromArray(options.items);

  return this;
};

/**
 * Instantiate witness from options.
 * @param {Object} options
 * @returns {Witness}
 */

Witness.fromOptions = function fromOptions(options) {
  return new Witness().fromOptions(options);
};

/**
 * Convert witness to an array of buffers.
 * @returns {Buffer[]}
 */

Witness.prototype.toArray = function toArray() {
  return this.items.slice();
};

/**
 * Inject properties from an array of buffers.
 * @private
 * @param {Buffer[]} items
 */

Witness.prototype.fromArray = function fromArray(items) {
  assert(Array.isArray(items));
  this.items = items;
  return this;
};

/**
 * Insantiate witness from an array of buffers.
 * @param {Buffer[]} items
 * @returns {Witness}
 */

Witness.fromArray = function fromArray(items) {
  return new Witness().fromArray(items);
};

/**
 * Convert witness to an array of buffers.
 * @returns {Buffer[]}
 */

Witness.prototype.toItems = function toItems() {
  return this.items.slice();
};

/**
 * Inject properties from an array of buffers.
 * @private
 * @param {Buffer[]} items
 */

Witness.prototype.fromItems = function fromItems(items) {
  assert(Array.isArray(items));
  this.items = items;
  return this;
};

/**
 * Insantiate witness from an array of buffers.
 * @param {Buffer[]} items
 * @returns {Witness}
 */

Witness.fromItems = function fromItems(items) {
  return new Witness().fromItems(items);
};

/**
 * Convert witness to a stack.
 * @returns {Stack}
 */

Witness.prototype.toStack = function toStack() {
  return new Stack(this.toArray());
};

/**
 * Inject properties from a stack.
 * @private
 * @param {Stack} stack
 */

Witness.prototype.fromStack = function fromStack(stack) {
  return this.fromArray(stack.items);
};

/**
 * Insantiate witness from a stack.
 * @param {Stack} stack
 * @returns {Witness}
 */

Witness.fromStack = function fromStack(stack) {
  return new Witness().fromStack(stack);
};

/**
 * Inspect a Witness object.
 * @returns {String} Human-readable script.
 */

Witness.prototype.inspect = function inspect() {
  return `<Witness: ${this.toString()}>`;
};

/**
 * Clone the witness object.
 * @returns {Witness} A clone of the current witness object.
 */

Witness.prototype.clone = function clone() {
  return new Witness().inject(this);
};

/**
 * Inject properties from witness.
 * Used for cloning.
 * @private
 * @param {Witness} witness
 * @returns {Witness}
 */

Witness.prototype.inject = function inject(witness) {
  this.items = witness.items.slice();
  return this;
};

/**
 * Compile witness (NOP).
 * @returns {Witness}
 */

Witness.prototype.compile = function compile() {
  return this;
};

/**
 * "Guess" the type of the witness.
 * This method is not 100% reliable.
 * @returns {ScriptType}
 */

Witness.prototype.getInputType = function getInputType() {
  if (this.isPubkeyhashInput())
    return scriptTypes.WITNESSPUBKEYHASH;

  if (this.isScripthashInput())
    return scriptTypes.WITNESSSCRIPTHASH;

  return scriptTypes.NONSTANDARD;
};

/**
 * "Guess" the type of the witness.
 * This method is not 100% reliable.
 * @returns {ScriptType}
 */

Witness.prototype.getInputTypeVal = function getInputTypeVal() {
  if (this.isPubkeyhashInput())
    return scriptTypesByVal[scriptTypes.WITNESSPUBKEYHASH];

  if (this.isScripthashInput())
    return scriptTypesByVal[scriptTypes.WITNESSSCRIPTHASH];

  return scriptTypesByVal[scriptTypes.NONSTANDARD];
};

/**
 * "Guess" the address of the witness.
 * This method is not 100% reliable.
 * @returns {Address|null}
 */

Witness.prototype.getInputAddress = function getInputAddress() {
  return Address.fromWitness(this);
};

/**
 * "Test" whether the witness is a pubkey input.
 * Always returns false.
 * @returns {Boolean}
 */

Witness.prototype.isPubkeyInput = function isPubkeyInput() {
  return false;
};

/**
 * Get P2PK signature if present.
 * Always returns null.
 * @returns {Buffer|null}
 */

Witness.prototype.getPubkeyInput = function getPubkeyInput() {
  return null;
};

/**
 * "Guess" whether the witness is a pubkeyhash input.
 * This method is not 100% reliable.
 * @returns {Boolean}
 */

Witness.prototype.isPubkeyhashInput = function isPubkeyhashInput() {
  return this.items.length === 2
    && common.isSignatureEncoding(this.items[0])
    && common.isKeyEncoding(this.items[1]);
};

/**
 * Get P2PKH signature and key if present.
 * @returns {Array} [sig, key]
 */

Witness.prototype.getPubkeyhashInput = function getPubkeyhashInput() {
  if (!this.isPubkeyhashInput())
    return [null, null];
  return [this.items[0], this.items[1]];
};

/**
 * "Test" whether the witness is a multisig input.
 * Always returns false.
 * @returns {Boolean}
 */

Witness.prototype.isMultisigInput = function isMultisigInput() {
  return false;
};

/**
 * Get multisig signatures key if present.
 * Always returns null.
 * @returns {Buffer[]|null}
 */

Witness.prototype.getMultisigInput = function getMultisigInput() {
  return null;
};

/**
 * "Guess" whether the witness is a scripthash input.
 * This method is not 100% reliable.
 * @returns {Boolean}
 */

Witness.prototype.isScripthashInput = function isScripthashInput() {
  return this.items.length > 0 && !this.isPubkeyhashInput();
};

/**
 * Get P2SH redeem script if present.
 * @returns {Buffer|null}
 */

Witness.prototype.getScripthashInput = function getScripthashInput() {
  if (!this.isScripthashInput())
    return null;
  return this.items[this.items.length - 1];
};

/**
 * "Guess" whether the witness is an unknown/non-standard type.
 * This method is not 100% reliable.
 * @returns {Boolean}
 */

Witness.prototype.isUnknownInput = function isUnknownInput() {
  return this.getInputType() === scriptTypes.NONSTANDARD;
};

/**
 * Test the witness against a bloom filter.
 * @param {Bloom} filter
 * @returns {Boolean}
 */

Witness.prototype.test = function test(filter) {
  for (const item of this.items) {
    if (item.length === 0)
      continue;

    if (filter.test(item))
      return true;
  }

  return false;
};

/**
 * Grab and deserialize the redeem script from the witness.
 * @returns {Script} Redeem script.
 */

Witness.prototype.getRedeem = function getRedeem() {
  if (this.items.length === 0)
    return null;

  const redeem = this.items[this.items.length - 1];

  if (!redeem)
    return null;

  return Script.fromRaw(redeem);
};

/**
 * Find a data element in a witness.
 * @param {Buffer} data - Data element to match against.
 * @returns {Number} Index (`-1` if not present).
 */

Witness.prototype.indexOf = function indexOf(data) {
  return util.indexOf(this.items, data);
};

/**
 * Calculate size of the witness
 * excluding the varint size bytes.
 * @returns {Number}
 */

Witness.prototype.getSize = function getSize() {
  let size = 0;

  for (const item of this.items)
    size += encoding.sizeVarBytes(item);

  return size;
};

/**
 * Calculate size of the witness
 * including the varint size bytes.
 * @returns {Number}
 */

Witness.prototype.getVarSize = function getVarSize() {
  return encoding.sizeVarint(this.items.length) + this.getSize();
};

/**
 * Write witness to a buffer writer.
 * @param {BufferWriter} bw
 */

Witness.prototype.toWriter = function toWriter(bw) {
  bw.writeVarint(this.items.length);

  for (const item of this.items)
    bw.writeVarBytes(item);

  return bw;
};

/**
 * Encode the witness to a Buffer.
 * @param {String} enc - Encoding, either `'hex'` or `null`.
 * @returns {Buffer|String} Serialized script.
 */

Witness.prototype.toRaw = function toRaw() {
  const size = this.getVarSize();
  return this.toWriter(new StaticWriter(size)).render();
};

/**
 * Convert witness to a hex string.
 * @returns {String}
 */

Witness.prototype.toJSON = function toJSON() {
  return this.toRaw().toString('hex');
};

/**
 * Inject properties from json object.
 * @private
 * @param {String} json
 */

Witness.prototype.fromJSON = function fromJSON(json) {
  assert(typeof json === 'string', 'Witness must be a string.');
  return this.fromRaw(Buffer.from(json, 'hex'));
};

/**
 * Insantiate witness from a hex string.
 * @param {String} json
 * @returns {Witness}
 */

Witness.fromJSON = function fromJSON(json) {
  return new Witness().fromJSON(json);
};

/**
 * Inject properties from buffer reader.
 * @private
 * @param {BufferReader} br
 */

Witness.prototype.fromReader = function fromReader(br) {
  const count = br.readVarint();

  for (let i = 0; i < count; i++)
    this.items.push(br.readVarBytes());

  return this;
};

/**
 * Inject properties from serialized data.
 * @private
 * @param {Buffer} data
 */

Witness.prototype.fromRaw = function fromRaw(data) {
  return this.fromReader(new BufferReader(data));
};

/**
 * Create a witness from a buffer reader.
 * @param {BufferReader} br
 */

Witness.fromReader = function fromReader(br) {
  return new Witness().fromReader(br);
};

/**
 * Create a witness from a serialized buffer.
 * @param {Buffer|String} data - Serialized witness.
 * @param {String?} enc - Either `"hex"` or `null`.
 * @returns {Witness}
 */

Witness.fromRaw = function fromRaw(data, enc) {
  if (typeof data === 'string')
    data = Buffer.from(data, enc);
  return new Witness().fromRaw(data);
};

/**
 * Inject items from string.
 * @private
 * @param {String|String[]} items
 */

Witness.prototype.fromString = function fromString(items) {
  if (!Array.isArray(items)) {
    assert(typeof items === 'string');

    items = items.trim();

    if (items.length === 0)
      return this;

    items = items.split(/\s+/);
  }

  for (const item of items)
    this.items.push(Buffer.from(item, 'hex'));

  return this;
};

/**
 * Parse a test script/array
 * string into a witness object. _Must_
 * contain only stack items (no non-push
 * opcodes).
 * @param {String|String[]} items - Script string.
 * @returns {Witness}
 * @throws Parse error.
 */

Witness.fromString = function fromString(items) {
  return new Witness().fromString(items);
};

/**
 * Test an object to see if it is a Witness.
 * @param {Object} obj
 * @returns {Boolean}
 */

Witness.isWitness = function isWitness(obj) {
  return obj instanceof Witness;
};

/*
 * Expose
 */

module.exports = Witness;


/***/ }),
/* 57 */,
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * x15.js - x15 for wmcc_core.
 */



/**
 * @module crypto.x15
 */

/**
 * x15.js
 * @constructor
 */

module.exports = __webpack_require__(162);


/***/ }),
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * writer.js - buffer writer for wmcc_core.
 */



const assert = __webpack_require__(0);
const encoding = __webpack_require__(3);
const digest = __webpack_require__(5);

/*
 * Constants
 */

const SEEK = 0;
const UI8 = 1;
const UI16 = 2;
const UI16BE = 3;
const UI32 = 4;
const UI32BE = 5;
const UI64 = 6;
const UI64BE = 7;
const UI64N = 8;
const UI64BEN = 9;
const I8 = 10;
const I16 = 11;
const I16BE = 12;
const I32 = 13;
const I32BE = 14;
const I64 = 15;
const I64BE = 16;
const I64N = 17;
const I64BEN = 18;
const FL = 19;
const FLBE = 20;
const DBL = 21;
const DBLBE = 22;
const VARINT = 23;
const VARINTN = 24;
const VARINT2 = 25;
const VARINT2N = 26;
const BYTES = 27;
const STR = 28;
const CHECKSUM = 29;
const FILL = 30;

/**
 * An object that allows writing of buffers in a
 * sane manner. This buffer writer is extremely
 * optimized since it does not actually write
 * anything until `render` is called. It makes
 * one allocation: at the end, once it knows the
 * size of the buffer to be allocated. Because
 * of this, it can also act as a size calculator
 * which is useful for guaging block size
 * without actually serializing any data.
 * @alias module:utils.BufferWriter
 * @constructor
 */

function BufferWriter() {
  if (!(this instanceof BufferWriter))
    return new BufferWriter();

  this.ops = [];
  this.offset = 0;
}

/**
 * Allocate and render the final buffer.
 * @returns {Buffer} Rendered buffer.
 */

BufferWriter.prototype.render = function render() {
  const data = Buffer.allocUnsafe(this.offset);
  let off = 0;

  for (const op of this.ops) {
    switch (op.type) {
      case SEEK:
        off += op.value;
        break;
      case UI8:
        off = data.writeUInt8(op.value, off, true);
        break;
      case UI16:
        off = data.writeUInt16LE(op.value, off, true);
        break;
      case UI16BE:
        off = data.writeUInt16BE(op.value, off, true);
        break;
      case UI32:
        off = data.writeUInt32LE(op.value, off, true);
        break;
      case UI32BE:
        off = data.writeUInt32BE(op.value, off, true);
        break;
      case UI64:
        off = encoding.writeU64(data, op.value, off);
        break;
      case UI64BE:
        off = encoding.writeU64BE(data, op.value, off);
        break;
      case UI64N:
        off = encoding.writeU64N(data, op.value, off);
        break;
      case UI64BEN:
        off = encoding.writeU64BEN(data, op.value, off);
        break;
      case I8:
        off = data.writeInt8(op.value, off, true);
        break;
      case I16:
        off = data.writeInt16LE(op.value, off, true);
        break;
      case I16BE:
        off = data.writeInt16BE(op.value, off, true);
        break;
      case I32:
        off = data.writeInt32LE(op.value, off, true);
        break;
      case I32BE:
        off = data.writeInt32BE(op.value, off, true);
        break;
      case I64:
        off = encoding.writeI64(data, op.value, off);
        break;
      case I64BE:
        off = encoding.writeI64BE(data, op.value, off);
        break;
      case I64N:
        off = encoding.writeI64N(data, op.value, off);
        break;
      case I64BEN:
        off = encoding.writeI64BEN(data, op.value, off);
        break;
      case FL:
        off = data.writeFloatLE(op.value, off, true);
        break;
      case FLBE:
        off = data.writeFloatBE(op.value, off, true);
        break;
      case DBL:
        off = data.writeDoubleLE(op.value, off, true);
        break;
      case DBLBE:
        off = data.writeDoubleBE(op.value, off, true);
        break;
      case VARINT:
        off = encoding.writeVarint(data, op.value, off);
        break;
      case VARINTN:
        off = encoding.writeVarintN(data, op.value, off);
        break;
      case VARINT2:
        off = encoding.writeVarint2(data, op.value, off);
        break;
      case VARINT2N:
        off = encoding.writeVarint2N(data, op.value, off);
        break;
      case BYTES:
        off += op.value.copy(data, off);
        break;
      case STR:
        off += data.write(op.value, off, op.enc);
        break;
      case CHECKSUM:
        off += digest.hash256(data.slice(0, off)).copy(data, off, 0, 4);
        break;
      case FILL:
        data.fill(op.value, off, off + op.size);
        off += op.size;
        break;
      default:
        assert(false, 'Bad type.');
        break;
    }
  }

  assert(off === data.length);

  this.destroy();

  return data;
};

/**
 * Get size of data written so far.
 * @returns {Number}
 */

BufferWriter.prototype.getSize = function getSize() {
  return this.offset;
};

/**
 * Seek to relative offset.
 * @param {Number} offset
 */

BufferWriter.prototype.seek = function seek(offset) {
  this.offset += offset;
  this.ops.push(new WriteOp(SEEK, offset));
};

/**
 * Destroy the buffer writer. Remove references to `ops`.
 */

BufferWriter.prototype.destroy = function destroy() {
  this.ops.length = 0;
  this.offset = 0;
};

/**
 * Write uint8.
 * @param {Number} value
 */

BufferWriter.prototype.writeU8 = function writeU8(value) {
  this.offset += 1;
  this.ops.push(new WriteOp(UI8, value));
};

/**
 * Write uint16le.
 * @param {Number} value
 */

BufferWriter.prototype.writeU16 = function writeU16(value) {
  this.offset += 2;
  this.ops.push(new WriteOp(UI16, value));
};

/**
 * Write uint16be.
 * @param {Number} value
 */

BufferWriter.prototype.writeU16BE = function writeU16BE(value) {
  this.offset += 2;
  this.ops.push(new WriteOp(UI16BE, value));
};

/**
 * Write uint32le.
 * @param {Number} value
 */

BufferWriter.prototype.writeU32 = function writeU32(value) {
  this.offset += 4;
  this.ops.push(new WriteOp(UI32, value));
};

/**
 * Write uint32be.
 * @param {Number} value
 */

BufferWriter.prototype.writeU32BE = function writeU32BE(value) {
  this.offset += 4;
  this.ops.push(new WriteOp(UI32BE, value));
};

/**
 * Write uint64le.
 * @param {Number} value
 */

BufferWriter.prototype.writeU64 = function writeU64(value) {
  this.offset += 8;
  this.ops.push(new WriteOp(UI64, value));
};

/**
 * Write uint64be.
 * @param {Number} value
 */

BufferWriter.prototype.writeU64BE = function writeU64BE(value) {
  this.offset += 8;
  this.ops.push(new WriteOp(UI64BE, value));
};

/**
 * Write uint64le.
 * @param {U64} value
 */

BufferWriter.prototype.writeU64N = function writeU64N(value) {
  this.offset += 8;
  this.ops.push(new WriteOp(UI64N, value));
};

/**
 * Write uint64be.
 * @param {U64} value
 */

BufferWriter.prototype.writeU64BEN = function writeU64BEN(value) {
  this.offset += 8;
  this.ops.push(new WriteOp(UI64BEN, value));
};

/**
 * Write int8.
 * @param {Number} value
 */

BufferWriter.prototype.writeI8 = function writeI8(value) {
  this.offset += 1;
  this.ops.push(new WriteOp(I8, value));
};

/**
 * Write int16le.
 * @param {Number} value
 */

BufferWriter.prototype.writeI16 = function writeI16(value) {
  this.offset += 2;
  this.ops.push(new WriteOp(I16, value));
};

/**
 * Write int16be.
 * @param {Number} value
 */

BufferWriter.prototype.writeI16BE = function writeI16BE(value) {
  this.offset += 2;
  this.ops.push(new WriteOp(I16BE, value));
};

/**
 * Write int32le.
 * @param {Number} value
 */

BufferWriter.prototype.writeI32 = function writeI32(value) {
  this.offset += 4;
  this.ops.push(new WriteOp(I32, value));
};

/**
 * Write int32be.
 * @param {Number} value
 */

BufferWriter.prototype.writeI32BE = function writeI32BE(value) {
  this.offset += 4;
  this.ops.push(new WriteOp(I32BE, value));
};

/**
 * Write int64le.
 * @param {Number} value
 */

BufferWriter.prototype.writeI64 = function writeI64(value) {
  this.offset += 8;
  this.ops.push(new WriteOp(I64, value));
};

/**
 * Write int64be.
 * @param {Number} value
 */

BufferWriter.prototype.writeI64BE = function writeI64BE(value) {
  this.offset += 8;
  this.ops.push(new WriteOp(I64BE, value));
};

/**
 * Write int64le.
 * @param {I64} value
 */

BufferWriter.prototype.writeI64N = function writeI64N(value) {
  this.offset += 8;
  this.ops.push(new WriteOp(I64N, value));
};

/**
 * Write int64be.
 * @param {I64} value
 */

BufferWriter.prototype.writeI64BEN = function writeI64BEN(value) {
  this.offset += 8;
  this.ops.push(new WriteOp(I64BEN, value));
};

/**
 * Write float le.
 * @param {Number} value
 */

BufferWriter.prototype.writeFloat = function writeFloat(value) {
  this.offset += 4;
  this.ops.push(new WriteOp(FL, value));
};

/**
 * Write float be.
 * @param {Number} value
 */

BufferWriter.prototype.writeFloatBE = function writeFloatBE(value) {
  this.offset += 4;
  this.ops.push(new WriteOp(FLBE, value));
};

/**
 * Write double le.
 * @param {Number} value
 */

BufferWriter.prototype.writeDouble = function writeDouble(value) {
  this.offset += 8;
  this.ops.push(new WriteOp(DBL, value));
};

/**
 * Write double be.
 * @param {Number} value
 */

BufferWriter.prototype.writeDoubleBE = function writeDoubleBE(value) {
  this.offset += 8;
  this.ops.push(new WriteOp(DBLBE, value));
};

/**
 * Write a varint.
 * @param {Number} value
 */

BufferWriter.prototype.writeVarint = function writeVarint(value) {
  this.offset += encoding.sizeVarint(value);
  this.ops.push(new WriteOp(VARINT, value));
};

/**
 * Write a varint.
 * @param {U64} value
 */

BufferWriter.prototype.writeVarintN = function writeVarintN(value) {
  this.offset += encoding.sizeVarintN(value);
  this.ops.push(new WriteOp(VARINTN, value));
};

/**
 * Write a varint (type 2).
 * @param {Number} value
 */

BufferWriter.prototype.writeVarint2 = function writeVarint2(value) {
  this.offset += encoding.sizeVarint2(value);
  this.ops.push(new WriteOp(VARINT2, value));
};

/**
 * Write a varint (type 2).
 * @param {U64} value
 */

BufferWriter.prototype.writeVarint2N = function writeVarint2N(value) {
  this.offset += encoding.sizeVarint2N(value);
  this.ops.push(new WriteOp(VARINT2N, value));
};

/**
 * Write bytes.
 * @param {Buffer} value
 */

BufferWriter.prototype.writeBytes = function writeBytes(value) {
  if (value.length === 0)
    return;

  this.offset += value.length;
  this.ops.push(new WriteOp(BYTES, value));
};

/**
 * Write bytes with a varint length before them.
 * @param {Buffer} value
 */

BufferWriter.prototype.writeVarBytes = function writeVarBytes(value) {
  this.offset += encoding.sizeVarint(value.length);
  this.ops.push(new WriteOp(VARINT, value.length));

  if (value.length === 0)
    return;

  this.offset += value.length;
  this.ops.push(new WriteOp(BYTES, value));
};

/**
 * Copy bytes.
 * @param {Buffer} value
 * @param {Number} start
 * @param {Number} end
 */

BufferWriter.prototype.copy = function copy(value, start, end) {
  assert(end >= start);
  value = value.slice(start, end);
  this.writeBytes(value);
};

/**
 * Write string to buffer.
 * @param {String} value
 * @param {String?} enc - Any buffer-supported encoding.
 */

BufferWriter.prototype.writeString = function writeString(value, enc) {
  if (value.length === 0)
    return;

  this.offset += Buffer.byteLength(value, enc);
  this.ops.push(new WriteOp(STR, value, enc));
};

/**
 * Write a 32 byte hash.
 * @param {Hash} value
 */

BufferWriter.prototype.writeHash = function writeHash(value) {
  if (typeof value !== 'string') {
    assert(value.length === 32);
    this.writeBytes(value);
    return;
  }
  assert(value.length === 64);
  this.writeString(value, 'hex');
};

/**
 * Write a string with a varint length before it.
 * @param {String}
 * @param {String?} enc - Any buffer-supported encoding.
 */

BufferWriter.prototype.writeVarString = function writeVarString(value, enc) {
  if (value.length === 0) {
    this.ops.push(new WriteOp(VARINT, 0));
    return;
  }

  const size = Buffer.byteLength(value, enc);

  this.offset += encoding.sizeVarint(size);
  this.offset += size;

  this.ops.push(new WriteOp(VARINT, size));

  this.ops.push(new WriteOp(STR, value, enc));
};

/**
 * Write a null-terminated string.
 * @param {String|Buffer}
 * @param {String?} enc - Any buffer-supported encoding.
 */

BufferWriter.prototype.writeNullString = function writeNullString(value, enc) {
  this.writeString(value, enc);
  this.writeU8(0);
};

/**
 * Calculate and write a checksum for the data written so far.
 */

BufferWriter.prototype.writeChecksum = function writeChecksum() {
  this.offset += 4;
  this.ops.push(new WriteOp(CHECKSUM));
};

/**
 * Fill N bytes with value.
 * @param {Number} value
 * @param {Number} size
 */

BufferWriter.prototype.fill = function fill(value, size) {
  assert(size >= 0);

  if (size === 0)
    return;

  this.offset += size;
  this.ops.push(new WriteOp(FILL, value, null, size));
};

/*
 * Helpers
 */

function WriteOp(type, value, enc, size) {
  this.type = type;
  this.value = value;
  this.enc = enc;
  this.size = size;
}

/*
 * Expose
 */

module.exports = BufferWriter;


/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * merkle.js - merkle trees for wmcc_core.
 */



/**
 * @module crypto/merkle
 */

const digest = __webpack_require__(5);

/**
 * Build a merkle tree from leaves.
 * Note that this will mutate the `leaves` array!
 * @param {Buffer[]} leaves
 * @returns {Array} [nodes, malleated]
 */

exports.createTree = function createTree(leaves) {
  const nodes = leaves;
  let size = leaves.length;
  let malleated = false;
  let i = 0;

  if (size === 0) {
    nodes.push(Buffer.alloc(32));
    return [nodes, malleated];
  }

  while (size > 1) {
    for (let j = 0; j < size; j += 2) {
      const k = Math.min(j + 1, size - 1);
      const left = nodes[i + j];
      const right = nodes[i + k];

      if (k === j + 1 && k + 1 === size
          && left.equals(right)) {
        malleated = true;
      }

      const hash = digest.root256(left, right);

      nodes.push(hash);
    }
    i += size;
    size += 1;
    size >>>= 1;
  }

  return [nodes, malleated];
};

/**
 * Calculate merkle root from leaves.
 * @param {Buffer[]} leaves
 * @returns {Array} [root, malleated]
 */

exports.createRoot = function createRoot(leaves) {
  const [nodes, malleated] = exports.createTree(leaves);
  const root = nodes[nodes.length - 1];
  return [root, malleated];
};

/**
 * Collect a merkle branch from vector index.
 * @param {Number} index
 * @param {Buffer[]} leaves
 * @returns {Buffer[]} branch
 */

exports.createBranch = function createBranch(index, leaves) {
  let size = leaves.length;
  const [nodes] = exports.createTree(leaves);
  const branch = [];
  let i = 0;

  while (size > 1) {
    const j = Math.min(index ^ 1, size - 1);
    branch.push(nodes[i + j]);
    index >>>= 1;
    i += size;
    size += 1;
    size >>>= 1;
  }

  return branch;
};

/**
 * Derive merkle root from branch.
 * @param {Buffer} hash
 * @param {Buffer[]} branch
 * @param {Number} index
 * @returns {Buffer} root
 */

exports.deriveRoot = function deriveRoot(hash, branch, index) {
  let root = hash;

  for (const hash of branch) {
    if (index & 1)
      root = digest.root256(hash, root);
    else
      root = digest.root256(root, hash);

    index >>>= 1;
  }

  return root;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BN = __webpack_require__(17);

var elliptic = __webpack_require__(9);
var utils = elliptic.utils;
var assert = utils.assert;

function Signature(options, enc) {
  if (options instanceof Signature)
    return options;

  if (this._importDER(options, enc))
    return;

  assert(options.r && options.s, 'Signature without r or s');
  this.r = new BN(options.r, 16);
  this.s = new BN(options.s, 16);
  if (options.recoveryParam === undefined)
    this.recoveryParam = null;
  else
    this.recoveryParam = options.recoveryParam;
}
module.exports = Signature;

function Position() {
  this.place = 0;
}

function getLength(buf, p) {
  var initial = buf[p.place++];
  if (!(initial & 0x80)) {
    return initial;
  }
  var octetLen = initial & 0xf;
  var val = 0;
  for (var i = 0, off = p.place; i < octetLen; i++, off++) {
    val <<= 8;
    val |= buf[off];
  }
  p.place = off;
  return val;
}

function rmPadding(buf) {
  var i = 0;
  var len = buf.length - 1;
  while (!buf[i] && !(buf[i + 1] & 0x80) && i < len) {
    i++;
  }
  if (i === 0) {
    return buf;
  }
  return buf.slice(i);
}

Signature.prototype._importDER = function _importDER(data, enc) {
  data = utils.toArray(data, enc);
  var p = new Position();
  if (data[p.place++] !== 0x30) {
    return false;
  }
  var len = getLength(data, p);
  if ((len + p.place) !== data.length) {
    return false;
  }
  if (data[p.place++] !== 0x02) {
    return false;
  }
  var rlen = getLength(data, p);
  var r = data.slice(p.place, rlen + p.place);
  p.place += rlen;
  if (data[p.place++] !== 0x02) {
    return false;
  }
  var slen = getLength(data, p);
  if (data.length !== slen + p.place) {
    return false;
  }
  var s = data.slice(p.place, slen + p.place);
  if (r[0] === 0 && (r[1] & 0x80)) {
    r = r.slice(1);
  }
  if (s[0] === 0 && (s[1] & 0x80)) {
    s = s.slice(1);
  }

  this.r = new BN(r);
  this.s = new BN(s);
  this.recoveryParam = null;

  return true;
};

function constructLength(arr, len) {
  if (len < 0x80) {
    arr.push(len);
    return;
  }
  var octets = 1 + (Math.log(len) / Math.LN2 >>> 3);
  arr.push(octets | 0x80);
  while (--octets) {
    arr.push((len >>> (octets << 3)) & 0xff);
  }
  arr.push(len);
}

Signature.prototype.toDER = function toDER(enc) {
  var r = this.r.toArray();
  var s = this.s.toArray();

  // Pad values
  if (r[0] & 0x80)
    r = [ 0 ].concat(r);
  // Pad values
  if (s[0] & 0x80)
    s = [ 0 ].concat(s);

  r = rmPadding(r);
  s = rmPadding(s);

  while (!s[0] && !(s[1] & 0x80)) {
    s = s.slice(1);
  }
  var arr = [ 0x02 ];
  constructLength(arr, r.length);
  arr = arr.concat(r);
  arr.push(0x02);
  constructLength(arr, s.length);
  var backHalf = arr.concat(s);
  var res = [ 0x30 ];
  constructLength(res, backHalf.length);
  res = res.concat(backHalf);
  return utils.encode(res, enc);
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * murmur3.js - murmur3 hash for wmcc_core.
 */



const native = __webpack_require__(18).binding;

/**
 * Murmur3 hash.
 * @alias module:utils.murmur3
 * @param {Buffer} data
 * @param {Number} seed
 * @returns {Number}
 */

function murmur3(data, seed) {
  const tail = data.length - (data.length % 4);
  const c1 = 0xcc9e2d51;
  const c2 = 0x1b873593;
  let h1 = seed;
  let k1;

  for (let i = 0; i < tail; i += 4) {
    k1 = (data[i + 3] << 24)
      | (data[i + 2] << 16)
      | (data[i + 1] << 8)
      | data[i];
    k1 = mul32(k1, c1);
    k1 = rotl32(k1, 15);
    k1 = mul32(k1, c2);
    h1 ^= k1;
    h1 = rotl32(h1, 13);
    h1 = sum32(mul32(h1, 5), 0xe6546b64);
  }

  k1 = 0;
  switch (data.length & 3) {
    case 3:
      k1 ^= data[tail + 2] << 16;
    case 2:
      k1 ^= data[tail + 1] << 8;
    case 1:
      k1 ^= data[tail + 0];
      k1 = mul32(k1, c1);
      k1 = rotl32(k1, 15);
      k1 = mul32(k1, c2);
      h1 ^= k1;
  }

  h1 ^= data.length;
  h1 ^= h1 >>> 16;
  h1 = mul32(h1, 0x85ebca6b);
  h1 ^= h1 >>> 13;
  h1 = mul32(h1, 0xc2b2ae35);
  h1 ^= h1 >>> 16;

  if (h1 < 0)
    h1 += 0x100000000;

  return h1;
}

if (native)
  murmur3 = native.murmur3;

function mul32(a, b) {
  const alo = a & 0xffff;
  const blo = b & 0xffff;
  const ahi = a >>> 16;
  const bhi = b >>> 16;

  let lo = alo * blo;
  let hi = (ahi * blo + bhi * alo) & 0xffff;

  hi += lo >>> 16;
  lo &= 0xffff;

  let r = (hi << 16) | lo;

  if (r < 0)
    r += 0x100000000;

  return r;
}

function sum32(a, b) {
  let r = (a + b) & 0xffffffff;

  if (r < 0)
    r += 0x100000000;

  return r;
}

function rotl32(w, b) {
  return (w << b) | (w >>> (32 - b));
}

/**
 * Expose
 */

exports = murmur3;
exports.murmur3 = murmur3;
exports.mul32 = mul32;
exports.sum32 = sum32;
exports.rotl32 = rotl32;
module.exports = exports;


/***/ }),
/* 69 */,
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * pbkdf2.js - pbkdf2 for wmcc_core.
 */



/**
 * @module crypto.pbkdf2
 */

const crypto = __webpack_require__(24);
const co = __webpack_require__(16);

/**
 * Perform key derivation using PBKDF2.
 * @param {Buffer} key
 * @param {Buffer} salt
 * @param {Number} iter
 * @param {Number} len
 * @param {String} alg
 * @returns {Buffer}
 */

exports.derive = function derive(key, salt, iter, len, alg) {
  return crypto.pbkdf2Sync(key, salt, iter, len, alg);
};

/**
 * Execute pbkdf2 asynchronously.
 * @param {Buffer} key
 * @param {Buffer} salt
 * @param {Number} iter
 * @param {Number} len
 * @param {String} alg
 * @returns {Promise}
 */

exports.deriveAsync = function deriveAsync(key, salt, iter, len, alg) {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(key, salt, iter, len, alg, co.wrap(resolve, reject));
  });
};


/***/ }),
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * network.js - WMCC networks for wmcc_core.
 */



/**
 * @module protocol/networks
 */

const BN = __webpack_require__(26);

const network = exports;

/**
 * Network type list.
 * @memberof module:protocol/networks
 * @const {String[]}
 * @default
 */

network.types = ['mainnet', 'testnet', 'regtest', 'simnet'];

/**
 * Mainnet
 * @static
 * @lends module:protocol/networks
 * @type {Object}
 */

const mainnet = {};

/**
 * Symbolic network type.
 * @const {String}
 * @default
 */

mainnet.type = 'mainnet';

/**
 * Default DNS seeds.
 * @const {String[]}
 * @default
 */

mainnet.seeds = [
  'mainnet.wmcc.network',
  'mainnet.worldmobilecoin.net',
  'mainnet.worldmobilecoin.info',
  'mainnet.worldmobilecoin.network',
  'mainnet.worldmobilecoin.online',
  'mainnet.worldmobilecoin.me',
  'mainnet.worldmobilecoin.site',
  'mainnet.worldmobilecoin.xyz'
];

/**
 * Packet magic number.
 * @const {Number}
 * @default
 */

mainnet.magic = 0xc848e559;

/**
 * Default network port.
 * @const {Number}
 * @default
 */

mainnet.port = 8880;

/**
 * Checkpoint block list.
 * @const {Object}
 */

mainnet.checkpointMap = {
  /*block height: block hash*/
};

/**
 * Last checkpoint height.
 * @const {Number}
 * @default
 */

mainnet.lastCheckpoint = 0;

/**
 * @const {Number}
 * @default
 */

mainnet.halvingInterval = 42000000; //210000; ~400 years

/**
 * Genesis block header.
 * @const {NakedBlock}
 */

mainnet.genesis = {
  version: 1,
  hash: '7212511001f38a7b3b8ac819cc49024d1a2206b1b0f23fdeb485277b850f0000', /* here */
  prevBlock: '0000000000000000000000000000000000000000000000000000000000000000',
  merkleRoot: '49337a633ec2a4e8333243d82742c153a1772c9ac0646d444a330379500b75fe',
  time: 1513728000, /* here */
  bits: 504365040,
  nonce: 812349, /* here */
  height: 0
};

/**
 * Genesis block header.
 * @const {NakedBlock}

main.genesis = {
  version: 1,
  hash: '6fe28c0ab6f1b372c1a6a246ae63f74f931e8365e15a089c68d6190000000000',
  prevBlock: '0000000000000000000000000000000000000000000000000000000000000000',
  merkleRoot:
    '3ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a',
  time: 1231006505,
  bits: 486604799,
  nonce: 2083236893,
  height: 0
};
 */

/**
 * The network's genesis block in a hex string.
 * @const {String}
 */

  mainnet.genesisBlock =
  //abstrack block
  '01000000' // version
  + '0000000000000000000000000000000000000000000000000000000000000000' // prevBlock
  + '49337a633ec2a4e8333243d82742c153a1772c9ac0646d444a330379500b75fe' // merkleRoot
  + '00a8395a' // time /* here */
  + 'f0ff0f1e' // bits // 1e0ffff0 le
  + '3d650c00' // /* here */
  // transaction
  + '01' // tx count
  + '01000000' // tx version
  + '00' // OR witness marker
  + '01' // OR witness flag
  // tx_in
  + '01' // tx_in count
  // tx_in outpoint arrays (prev_out)
  + '0000000000000000000000000000000000000000000000000000000000000000' // ref hash
  + 'ffffffff' // index
  + '30' // script length 48
  + '512067656e6573697320626c6f636b206d696e656420627920776d63635f636f' // signature script +32
  + '7265044f3aac96080000000000000000' // signature script +16
  + 'ffffffff' // sequence
  // tx_out
  + '03' // tx_out count
  // tx_out arrays
  // intial coin
  + '0080c6a47e8d0300' // tx value wmcoins 10M wmcc - initial
  + '19' // pk_script length 25
  + '76a9148efc12b15df7ae341786bb2cdeb6f5a59ed2497688ac'
  // reserve coin
  + '0080c6a47e8d0300' // tx value wmcoins 10M wmcc - reserve
  + '19' // pk_script length 25
  + '76a914456c9dc895ca8bc6e6bae8ca8f2a8a29018ca57d88ac'
  // witness 0x51 81
  + '0000000000000000266a24aa21a9ede2f61c3f71d1defd3fa999dfa36953755c' // +32
  + '690689799962b48bebd836974e8cf90120000000000000000000000000000000' // +32
  + '0000000000000000000000000000000000' // +17
  // lock_time
  + '00000000';

/**
 * The network's genesis block in a hex string.
 * @const {String}

mainnet.genesisBlock =
  '0100000000000000000000000000000000000000000000000000000000000000000000'
  + '003ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a29ab'
  + '5f49ffff001d1dac2b7c01010000000100000000000000000000000000000000000000'
  + '00000000000000000000000000ffffffff4d04ffff001d0104455468652054696d6573'
  + '2030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66'
  + '207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01'
  + '000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f'
  + '61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f'
  + 'ac00000000';
 */

/**
 * POW-related constants.
 * @enum {Number}
 * @default
 */

mainnet.pow = {
  /**
   * Default target.
   * @const {BN}
   */

  limit: new BN(
    '00000fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
    'hex'
  ),

  /**
   * Compact pow limit.
   * @const {Number}
   * @default
   */

  bits: 504365040,

  /**
   * Minimum chainwork for best chain.
   * @const {BN}
   */

  chainwork: new BN(
    '0000000000000000000000000000000000000000000000000000000000100010',
    'hex'
  ),

  /**
   * Desired retarget period in seconds.
   * @const {Number}
   * @default
   */

  targetTimespan: 7 * 24 * 60 * 60,

  /**
   * Average block time.
   * @const {Number}
   * @default
   */

  targetSpacing: 5 * 60,

  /**
   * Retarget interval in blocks.
   * @const {Number}
   * @default
   */

  retargetInterval: 2016,

  /**
   * Whether to reset target if a block
   * has not been mined recently.
   * @const {Boolean}
   * @default
   */

  targetReset: false,

  /**
   * Do not allow retargetting.
   * @const {Boolean}
   * @default
   */

  noRetargeting: false
};

/**
 * Block constants.
 * @enum {Number}
 * @default
 */

mainnet.block = {
  /**
   * Height at which bip34 was activated.
   * Used for avoiding bip30 checks.
   */

  bip34height: 0,

  /**
   * Hash of the block that activated bip34.
   */

  bip34hash: '7212511001f38a7b3b8ac819cc49024d1a2206b1b0f23fdeb485277b850f0000', /* here */

  /**
   * Height at which bip65 was activated.
   */

  bip65height: 0,

  /**
   * Hash of the block that activated bip65.
   */

  bip65hash: '7212511001f38a7b3b8ac819cc49024d1a2206b1b0f23fdeb485277b850f0000', /* here */

  /**
   * Height at which bip66 was activated.
   */

  bip66height: 0,

  /**
   * Hash of the block that activated bip66.
   */

  bip66hash: '7212511001f38a7b3b8ac819cc49024d1a2206b1b0f23fdeb485277b850f0000', /* here */

  /**
   * Safe height to start pruning.
   */

  pruneAfterHeight: 1000,

  /**
   * Safe number of blocks to keep.
   */

  keepBlocks: 288,

  /**
   * Age used for the time delta to
   * determine whether the chain is synced.
   */

  maxTipAge: 24 * 60 * 60,

  /**
   * Height at which block processing is
   * slow enough that we can output
   * logs without spamming.
   */

  slowHeight: 650000
};

/**
 * Map of historical blocks which create duplicate transactions hashes.
 * @see https://github.com/bitcoin/bips/blob/master/bip-0030.mediawiki
 * @const {Object}
 * @default
 */

mainnet.bip30 = {
};

/**
 * For versionbits.
 * @const {Number}
 * @default
 */

mainnet.activationThreshold = 3831; // ~95% of 4032

/**
 * Confirmation window for versionbits.
 * @const {Number}
 * @default
 */

mainnet.minerWindow = 4032; // nPowTargetTimespan / nPowTargetSpacing

/**
 * Deployments for versionbits.
 * @const {Object}
 * @default
 */

mainnet.deployments = {
  csv: {
    name: 'csv',
    bit: 0,
    startTime: 1509494400, // November 1st, 2017.
    timeout: 1541030400, // November 1st, 2018.
    threshold: -1,
    window: -1,
    required: false,
    force: true
  },
  segwit: {
    name: 'segwit',
    bit: 1,
    startTime: 1509494400, // November 1st, 2017.
    timeout: 1541030400, // November 1st, 2018.
    threshold: -1,
    window: -1,
    required: true,
    force: false
  },
  segsignal: {
    name: 'segsignal',
    bit: 4,
    startTime: 1509494400, // November 1st, 2017.
    timeout: 1541030400, // November 1st, 2018.
    threshold: 269, // 80%
    window: 336, // ~2.33 days
    required: false,
    force: false
  },
  testdummy: {
    name: 'testdummy',
    bit: 28,
    startTime: 1509494400, // November 1st, 2017.
    timeout: 1541030400, // November 1st, 2018.
    threshold: -1,
    window: -1,
    required: false,
    force: true
  }
};

/**
 * Deployments for versionbits (array form, sorted).
 * @const {Array}
 * @default
 */

mainnet.deploys = [
  mainnet.deployments.csv,
  mainnet.deployments.segwit,
  mainnet.deployments.segsignal,
  mainnet.deployments.testdummy
];

/**
 * Key prefixes.
 * @enum {Number}
 * @default
 */

mainnet.keyPrefix = {
  privkey: 0x42,
  xpubkey: 0x0488b21e,
  xprivkey: 0x0488ade4,
  xpubkey58: 'xpub',
  xprivkey58: 'xprv',
  coinType: 0
};

/**
 * {@link Address} prefixes.
 * @enum {Number}
 */

mainnet.addressPrefix = {
  pubkeyhash: 0x49,
  scripthash: 0x4b,
  witnesspubkeyhash: 0x06,
  witnessscripthash: 0x0a,
  bech32: 'wc'
};

/**
 * Default value for whether the mempool
 * accepts non-standard transactions.
 * @const {Boolean}
 * @default
 */

mainnet.requireStandard = true;

/**
 * Default http port.
 * @const {Number}
 * @default
 */

mainnet.rpcPort = 7880;

/**
 * Default min relay rate.
 * @const {Rate}
 * @default
 */

mainnet.minRelay = 1000;

/**
 * Default normal relay rate.
 * @const {Rate}
 * @default
 */

mainnet.feeRate = 100000;

/**
 * Maximum normal relay rate.
 * @const {Rate}
 * @default
 */

mainnet.maxFeeRate = 400000;

/**
 * Whether to allow self-connection.
 * @const {Boolean}
 */

mainnet.selfConnect = false;

/**
 * Whether to request mempool on sync.
 * @const {Boolean}
 */

mainnet.requestMempool = false;

/*
 * Testnet (v3)
 * https://en.bitcoin.it/wiki/Testnet
 */

const testnet = {};

testnet.type = 'testnet';

testnet.seeds = [
  'testnet.wmcc.network',
  'testnet.worldmobilecoin.net'
];

testnet.magic = 0x5c6915a7;

testnet.port = 18880;

testnet.checkpointMap = {
};

testnet.lastCheckpoint = 0;

testnet.halvingInterval = 42000000;

testnet.genesis = {
  version: 1,
  hash: '43497fd7f826957108f4a30fd9cec3aeba79972084e90ead01ea330900000000',
  prevBlock: '0000000000000000000000000000000000000000000000000000000000000000',
  merkleRoot:
    '3ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a',
  time: 1296688602,
  bits: 486604799,
  nonce: 414098458,
  height: 0
};

testnet.genesisBlock =
  '0100000000000000000000000000000000000000000000000000000000000000000000'
  + '003ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4adae5'
  + '494dffff001d1aa4ae1801010000000100000000000000000000000000000000000000'
  + '00000000000000000000000000ffffffff4d04ffff001d0104455468652054696d6573'
  + '2030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66'
  + '207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01'
  + '000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f'
  + '61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f'
  + 'ac00000000';

testnet.pow = {
  limit: new BN(
    '00000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
    'hex'
  ),
  bits: 486604799,
  chainwork: new BN(
    '0000000000000000000000000000000000000000000000286d17360c5492b2c4',
    'hex'
  ),
  targetTimespan: 7 * 24 * 60 * 60,
  targetSpacing: 5 * 60,
  retargetInterval: 2016,
  targetReset: true,
  noRetargeting: false
};

testnet.block = {
  bip34height: 1,
  bip34hash: 'f88ecd9912d00d3f5c2a8e0f50417d3e415c75b3abe584346da9b32300000000',
  bip65height: 1,
  bip65hash: 'b61e864fbec41dfaf09da05d1d76dc068b0dd82ee7982ff255667f0000000000',
  bip66height: 1,
  bip66hash: '82a14b9e5ea81d4832b8e2cd3c2a6092b5a3853285a8995ec4c8042100000000',
  pruneAfterHeight: 1000,
  keepBlocks: 10000,
  maxTipAge: 24 * 60 * 60,
  slowHeight: 950000
};

testnet.bip30 = {};

testnet.activationThreshold = 1512; // 75% for testchains

testnet.minerWindow = 2016; // nPowTargetTimespan / nPowTargetSpacing

testnet.deployments = {
  csv: {
    name: 'csv',
    bit: 0,
    startTime: 1456790400, // March 1st, 2016
    timeout: 1493596800, // May 1st, 2017
    threshold: -1,
    window: -1,
    required: false,
    force: true
  },
  segwit: {
    name: 'segwit',
    bit: 1,
    startTime: 1462060800, // May 1st 2016
    timeout: 1493596800, // May 1st 2017
    threshold: -1,
    window: -1,
    required: true,
    force: false
  },
  segsignal: {
    name: 'segsignal',
    bit: 4,
    startTime: 0xffffffff,
    timeout: 0xffffffff,
    threshold: 269,
    window: 336,
    required: false,
    force: false
  },
  testdummy: {
    name: 'testdummy',
    bit: 28,
    startTime: 1199145601, // January 1, 2008
    timeout: 1230767999, // December 31, 2008
    threshold: -1,
    window: -1,
    required: false,
    force: true
  }
};

testnet.deploys = [
  testnet.deployments.csv,
  testnet.deployments.segwit,
  testnet.deployments.segsignal,
  testnet.deployments.testdummy
];

testnet.keyPrefix = {
  privkey: 0x47, //? WIF 0xef
  xpubkey: 0x043587cf,
  xprivkey: 0x04358394,
  xpubkey58: 'tpub',
  xprivkey58: 'tprv',
  coinType: 1
};

testnet.addressPrefix = {
  pubkeyhash: 0x4e,
  scripthash: 0x50,
  witnesspubkeyhash: 0x03,
  witnessscripthash: 0x28,
  bech32: 'tb'
};

testnet.requireStandard = false;

testnet.rpcPort = 17880;

testnet.minRelay = 1000;

testnet.feeRate = 20000;

testnet.maxFeeRate = 60000;

testnet.selfConnect = false;

testnet.requestMempool = false;

/*
 * Regtest
 */

const regtest = {};

regtest.type = 'regtest';

regtest.seeds = [
  '127.0.0.1'
];

regtest.magic = 0x24e09353;

regtest.port = 28880;

regtest.checkpointMap = {};
regtest.lastCheckpoint = 0;

regtest.halvingInterval = 150;

regtest.genesis = {
  version: 1,
  hash: '06226e46111a0b59caaf126043eb5bbf28c34f3a5e332a1fc7b2b73cf188910f',
  prevBlock: '0000000000000000000000000000000000000000000000000000000000000000',
  merkleRoot:
    '3ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a',
  time: 1296688602,
  bits: 545259519,
  nonce: 2,
  height: 0
};

regtest.genesisBlock =
  '0100000000000000000000000000000000000000000000000000000000000000000000'
  + '003ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4adae5'
  + '494dffff7f200200000001010000000100000000000000000000000000000000000000'
  + '00000000000000000000000000ffffffff4d04ffff001d0104455468652054696d6573'
  + '2030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66'
  + '207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01'
  + '000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f'
  + '61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f'
  + 'ac00000000';

regtest.pow = {
  limit: new BN(
    '7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
    'hex'
  ),
  bits: 545259519,
  chainwork: new BN(
    '0000000000000000000000000000000000000000000000000000000000000002',
    'hex'
  ),
  targetTimespan: 7 * 24 * 60 * 60,
  targetSpacing: 5 * 60,
  retargetInterval: 2016,
  targetReset: true,
  noRetargeting: true
};

regtest.block = {
  bip34height: 0xffffffff,
  bip34hash: null,
  bip65height: 1351,
  bip65hash: null,
  bip66height: 1251,
  bip66hash: null,
  pruneAfterHeight: 1000,
  keepBlocks: 10000,
  maxTipAge: 0xffffffff,
  slowHeight: 0
};

regtest.bip30 = {};

regtest.activationThreshold = 108; // 75% for testchains

regtest.minerWindow = 144; // Faster than normal for regtest

regtest.deployments = {
  csv: {
    name: 'csv',
    bit: 0,
    startTime: 0,
    timeout: 0xffffffff,
    threshold: -1,
    window: -1,
    required: false,
    force: true
  },
  segwit: {
    name: 'segwit',
    bit: 1,
    startTime: 0,
    timeout: 0xffffffff,
    threshold: -1,
    window: -1,
    required: true,
    force: false
  },
  segsignal: {
    name: 'segsignal',
    bit: 4,
    startTime: 0xffffffff,
    timeout: 0xffffffff,
    threshold: 269,
    window: 336,
    required: false,
    force: false
  },
  testdummy: {
    name: 'testdummy',
    bit: 28,
    startTime: 0,
    timeout: 0xffffffff,
    threshold: -1,
    window: -1,
    required: false,
    force: true
  }
};

regtest.deploys = [
  regtest.deployments.csv,
  regtest.deployments.segwit,
  regtest.deployments.segsignal,
  regtest.deployments.testdummy
];

regtest.keyPrefix = {
  privkey: 0x5a,
  xpubkey: 0xeab4fa05,
  xprivkey: 0xeab404c7,
  xpubkey58: 'rpub',
  xprivkey58: 'rprv',
  coinType: 1
};

regtest.addressPrefix = {
  pubkeyhash: 0x3c,
  scripthash: 0x26,
  witnesspubkeyhash: 0x7a,
  witnessscripthash: 0x14,
  bech32: 'rb'
};

regtest.requireStandard = false;

regtest.rpcPort = 27880;

regtest.minRelay = 1000;

regtest.feeRate = 20000;

regtest.maxFeeRate = 60000;

regtest.selfConnect = true;

regtest.requestMempool = true;

/*
 * Simnet (btcd)
 */

const simnet = {};

simnet.type = 'simnet';

simnet.seeds = [
  '127.0.0.1'
];

simnet.magic = 0xcd326176;

simnet.port = 38880;

simnet.checkpointMap = {};

simnet.lastCheckpoint = 0;

simnet.halvingInterval = 210000;

simnet.genesis = {
  version: 1,
  hash: 'f67ad7695d9b662a72ff3d8edbbb2de0bfa67b13974bb9910d116d5cbd863e68',
  prevBlock: '0000000000000000000000000000000000000000000000000000000000000000',
  merkleRoot:
    '3ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a',
  time: 1401292357,
  bits: 545259519,
  nonce: 2,
  height: 0
};

simnet.genesisBlock =
  '0100000000000000000000000000000000000000000000000000000000000000000000'
  + '003ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a4506'
  + '8653ffff7f200200000001010000000100000000000000000000000000000000000000'
  + '00000000000000000000000000ffffffff4d04ffff001d0104455468652054696d6573'
  + '2030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66'
  + '207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01'
  + '000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f'
  + '61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f'
  + 'ac00000000';

simnet.pow = {
  limit: new BN(
    // High target of 0x207fffff (545259519)
    '7fffff0000000000000000000000000000000000000000000000000000000000',
    'hex'
  ),
  bits: 545259519,
  chainwork: new BN(
    '0000000000000000000000000000000000000000000000000000000000000002',
    'hex'
  ),
  targetTimespan: 7 * 24 * 60 * 60,
  targetSpacing: 5 * 60,
  retargetInterval: 2016,
  targetReset: true,
  noRetargeting: false
};

simnet.block = {
  bip34height: 0,
  bip34hash: 'f67ad7695d9b662a72ff3d8edbbb2de0bfa67b13974bb9910d116d5cbd863e68',
  bip65height: 0,
  bip65hash: 'f67ad7695d9b662a72ff3d8edbbb2de0bfa67b13974bb9910d116d5cbd863e68',
  bip66height: 0,
  bip66hash: 'f67ad7695d9b662a72ff3d8edbbb2de0bfa67b13974bb9910d116d5cbd863e68',
  pruneAfterHeight: 1000,
  keepBlocks: 10000,
  maxTipAge: 0xffffffff,
  slowHeight: 0
};

simnet.bip30 = {};

simnet.activationThreshold = 75; // 75% for testchains

simnet.minerWindow = 100; // nPowTargetTimespan / nPowTargetSpacing

simnet.deployments = {
  csv: {
    name: 'csv',
    bit: 0,
    startTime: 0, // March 1st, 2016
    timeout: 0xffffffff, // May 1st, 2017
    threshold: -1,
    window: -1,
    required: false,
    force: true
  },
  segwit: {
    name: 'segwit',
    bit: 1,
    startTime: 0, // May 1st 2016
    timeout: 0xffffffff, // May 1st 2017
    threshold: -1,
    window: -1,
    required: true,
    force: false
  },
  segsignal: {
    name: 'segsignal',
    bit: 4,
    startTime: 0xffffffff,
    timeout: 0xffffffff,
    threshold: 269,
    window: 336,
    required: false,
    force: false
  },
  testdummy: {
    name: 'testdummy',
    bit: 28,
    startTime: 1199145601, // January 1, 2008
    timeout: 1230767999, // December 31, 2008
    threshold: -1,
    window: -1,
    required: false,
    force: true
  }
};

simnet.deploys = [
  simnet.deployments.csv,
  simnet.deployments.segwit,
  simnet.deployments.segsignal,
  simnet.deployments.testdummy
];

simnet.keyPrefix = {
  privkey: 0x64,
  xpubkey: 0x0420bd3a,
  xprivkey: 0x0420b900,
  xpubkey58: 'spub',
  xprivkey58: 'sprv',
  coinType: 115
};

simnet.addressPrefix = {
  pubkeyhash: 0x3f,
  scripthash: 0x7b,
  witnesspubkeyhash: 0x19,
  witnessscripthash: 0x28,
  bech32: 'sc'
};

simnet.requireStandard = false;

simnet.rpcPort = 37880;

simnet.minRelay = 1000;

simnet.feeRate = 20000;

simnet.maxFeeRate = 60000;

simnet.selfConnect = false;

simnet.requestMempool = false;

/*
 * Expose
 */

network.mainnet = mainnet;
network.testnet = testnet;
network.regtest = regtest;
network.simnet = simnet;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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



const EventEmitter = __webpack_require__(10);
const util = __webpack_require__(1);

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

TimeData.prototype.now = async function now() {
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

const dgram = __webpack_require__(100);

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


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * program.js - program object for wmcc_core.
 */



const assert = __webpack_require__(0);
const util = __webpack_require__(1);
const common = __webpack_require__(27);
const scriptTypes = common.types;

/**
 * Witness Program
 * @constructor
 * @alias module:script.Program
 * @param {Number} version
 * @param {Buffer} data
 * @property {Number} version - Ranges from 0 to 16.
 * @property {String|null} type - Null if malformed. `unknown` if unknown
 * version (treated as anyone-can-spend). Otherwise one of `witnesspubkeyhash`
 * or `witnessscripthash`.
 * @property {Buffer} data - The hash (for now).
 */

function Program(version, data) {
  if (!(this instanceof Program))
    return new Program(version, data);

  assert(util.isU8(version));
  assert(version >= 0 && version <= 16);
  assert(Buffer.isBuffer(data));
  assert(data.length >= 2 && data.length <= 40);

  this.version = version;
  this.data = data;
}

/**
 * Get the witness program type.
 * @returns {ScriptType}
 */

Program.prototype.getType = function getType() {
  if (this.version === 0) {
    if (this.data.length === 20)
      return scriptTypes.WITNESSPUBKEYHASH;

    if (this.data.length === 32)
      return scriptTypes.WITNESSSCRIPTHASH;

    // Fail on bad version=0
    return scriptTypes.WITNESSMALFORMED;
  }

  if (this.version === 1) {
    if (this.data.length === 32)
      return scriptTypes.WITNESSMASTHASH;

    // Fail on bad version=1
    return scriptTypes.WITNESSMALFORMED;
  }

  // No interpretation of script (anyone can spend)
  return scriptTypes.NONSTANDARD;
};

/**
 * Test whether the program is either
 * an unknown version or malformed.
 * @returns {Boolean}
 */

Program.prototype.isUnknown = function isUnknown() {
  const type = this.getType();
  return type === scriptTypes.WITNESSMALFORMED
    || type === scriptTypes.NONSTANDARD;
};

/**
 * Test whether the program is malformed.
 * @returns {Boolean}
 */

Program.prototype.isMalformed = function isMalformed() {
  return this.getType() === scriptTypes.WITNESSMALFORMED;
};

/**
 * Inspect the program.
 * @returns {String}
 */

Program.prototype.inspect = function inspect() {
  const data = this.data.toString('hex');
  const type = common.typesByVal[this.getType()].toLowerCase();
  return `<Program: version=${this.version} data=${data} type=${type}>`;
};

/*
 * Expose
 */

module.exports = Program;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = exports;

function toArray(msg, enc) {
  if (Array.isArray(msg))
    return msg.slice();
  if (!msg)
    return [];
  var res = [];
  if (typeof msg !== 'string') {
    for (var i = 0; i < msg.length; i++)
      res[i] = msg[i] | 0;
    return res;
  }
  if (enc === 'hex') {
    msg = msg.replace(/[^a-z0-9]+/ig, '');
    if (msg.length % 2 !== 0)
      msg = '0' + msg;
    for (var i = 0; i < msg.length; i += 2)
      res.push(parseInt(msg[i] + msg[i + 1], 16));
  } else {
    for (var i = 0; i < msg.length; i++) {
      var c = msg.charCodeAt(i);
      var hi = c >> 8;
      var lo = c & 0xff;
      if (hi)
        res.push(hi, lo);
      else
        res.push(lo);
    }
  }
  return res;
}
utils.toArray = toArray;

function zero2(word) {
  if (word.length === 1)
    return '0' + word;
  else
    return word;
}
utils.zero2 = zero2;

function toHex(msg) {
  var res = '';
  for (var i = 0; i < msg.length; i++)
    res += zero2(msg[i].toString(16));
  return res;
}
utils.toHex = toHex;

utils.encode = function encode(arr, enc) {
  if (enc === 'hex')
    return toHex(arr);
  else
    return arr;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(14);
var rotr32 = utils.rotr32;

function ft_1(s, x, y, z) {
  if (s === 0)
    return ch32(x, y, z);
  if (s === 1 || s === 3)
    return p32(x, y, z);
  if (s === 2)
    return maj32(x, y, z);
}
exports.ft_1 = ft_1;

function ch32(x, y, z) {
  return (x & y) ^ ((~x) & z);
}
exports.ch32 = ch32;

function maj32(x, y, z) {
  return (x & y) ^ (x & z) ^ (y & z);
}
exports.maj32 = maj32;

function p32(x, y, z) {
  return x ^ y ^ z;
}
exports.p32 = p32;

function s0_256(x) {
  return rotr32(x, 2) ^ rotr32(x, 13) ^ rotr32(x, 22);
}
exports.s0_256 = s0_256;

function s1_256(x) {
  return rotr32(x, 6) ^ rotr32(x, 11) ^ rotr32(x, 25);
}
exports.s1_256 = s1_256;

function g0_256(x) {
  return rotr32(x, 7) ^ rotr32(x, 18) ^ (x >>> 3);
}
exports.g0_256 = g0_256;

function g1_256(x) {
  return rotr32(x, 17) ^ rotr32(x, 19) ^ (x >>> 10);
}
exports.g1_256 = g1_256;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(14);
var common = __webpack_require__(31);
var shaCommon = __webpack_require__(87);
var assert = __webpack_require__(22);

var sum32 = utils.sum32;
var sum32_4 = utils.sum32_4;
var sum32_5 = utils.sum32_5;
var ch32 = shaCommon.ch32;
var maj32 = shaCommon.maj32;
var s0_256 = shaCommon.s0_256;
var s1_256 = shaCommon.s1_256;
var g0_256 = shaCommon.g0_256;
var g1_256 = shaCommon.g1_256;

var BlockHash = common.BlockHash;

var sha256_K = [
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5,
  0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
  0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc,
  0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7,
  0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
  0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3,
  0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
  0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
  0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
];

function SHA256() {
  if (!(this instanceof SHA256))
    return new SHA256();

  BlockHash.call(this);
  this.h = [
    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
    0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
  ];
  this.k = sha256_K;
  this.W = new Array(64);
}
utils.inherits(SHA256, BlockHash);
module.exports = SHA256;

SHA256.blockSize = 512;
SHA256.outSize = 256;
SHA256.hmacStrength = 192;
SHA256.padLength = 64;

SHA256.prototype._update = function _update(msg, start) {
  var W = this.W;

  for (var i = 0; i < 16; i++)
    W[i] = msg[start + i];
  for (; i < W.length; i++)
    W[i] = sum32_4(g1_256(W[i - 2]), W[i - 7], g0_256(W[i - 15]), W[i - 16]);

  var a = this.h[0];
  var b = this.h[1];
  var c = this.h[2];
  var d = this.h[3];
  var e = this.h[4];
  var f = this.h[5];
  var g = this.h[6];
  var h = this.h[7];

  assert(this.k.length === W.length);
  for (i = 0; i < W.length; i++) {
    var T1 = sum32_5(h, s1_256(e), ch32(e, f, g), this.k[i], W[i]);
    var T2 = sum32(s0_256(a), maj32(a, b, c));
    h = g;
    g = f;
    f = e;
    e = sum32(d, T1);
    d = c;
    c = b;
    b = a;
    a = sum32(T1, T2);
  }

  this.h[0] = sum32(this.h[0], a);
  this.h[1] = sum32(this.h[1], b);
  this.h[2] = sum32(this.h[2], c);
  this.h[3] = sum32(this.h[3], d);
  this.h[4] = sum32(this.h[4], e);
  this.h[5] = sum32(this.h[5], f);
  this.h[6] = sum32(this.h[6], g);
  this.h[7] = sum32(this.h[7], h);
};

SHA256.prototype._digest = function digest(enc) {
  if (enc === 'hex')
    return utils.toHex32(this.h, 'big');
  else
    return utils.split32(this.h, 'big');
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(14);
var common = __webpack_require__(31);
var assert = __webpack_require__(22);

var rotr64_hi = utils.rotr64_hi;
var rotr64_lo = utils.rotr64_lo;
var shr64_hi = utils.shr64_hi;
var shr64_lo = utils.shr64_lo;
var sum64 = utils.sum64;
var sum64_hi = utils.sum64_hi;
var sum64_lo = utils.sum64_lo;
var sum64_4_hi = utils.sum64_4_hi;
var sum64_4_lo = utils.sum64_4_lo;
var sum64_5_hi = utils.sum64_5_hi;
var sum64_5_lo = utils.sum64_5_lo;

var BlockHash = common.BlockHash;

var sha512_K = [
  0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
  0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
  0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
  0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
  0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
  0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
  0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
  0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
  0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
  0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
  0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
  0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
  0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
  0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
  0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
  0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
  0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
  0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
  0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
  0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
  0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
  0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
  0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
  0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
  0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
  0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
  0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
  0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
  0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
  0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
  0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
  0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
  0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
  0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
  0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
  0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
  0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
  0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
  0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
  0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
];

function SHA512() {
  if (!(this instanceof SHA512))
    return new SHA512();

  BlockHash.call(this);
  this.h = [
    0x6a09e667, 0xf3bcc908,
    0xbb67ae85, 0x84caa73b,
    0x3c6ef372, 0xfe94f82b,
    0xa54ff53a, 0x5f1d36f1,
    0x510e527f, 0xade682d1,
    0x9b05688c, 0x2b3e6c1f,
    0x1f83d9ab, 0xfb41bd6b,
    0x5be0cd19, 0x137e2179 ];
  this.k = sha512_K;
  this.W = new Array(160);
}
utils.inherits(SHA512, BlockHash);
module.exports = SHA512;

SHA512.blockSize = 1024;
SHA512.outSize = 512;
SHA512.hmacStrength = 192;
SHA512.padLength = 128;

SHA512.prototype._prepareBlock = function _prepareBlock(msg, start) {
  var W = this.W;

  // 32 x 32bit words
  for (var i = 0; i < 32; i++)
    W[i] = msg[start + i];
  for (; i < W.length; i += 2) {
    var c0_hi = g1_512_hi(W[i - 4], W[i - 3]);  // i - 2
    var c0_lo = g1_512_lo(W[i - 4], W[i - 3]);
    var c1_hi = W[i - 14];  // i - 7
    var c1_lo = W[i - 13];
    var c2_hi = g0_512_hi(W[i - 30], W[i - 29]);  // i - 15
    var c2_lo = g0_512_lo(W[i - 30], W[i - 29]);
    var c3_hi = W[i - 32];  // i - 16
    var c3_lo = W[i - 31];

    W[i] = sum64_4_hi(
      c0_hi, c0_lo,
      c1_hi, c1_lo,
      c2_hi, c2_lo,
      c3_hi, c3_lo);
    W[i + 1] = sum64_4_lo(
      c0_hi, c0_lo,
      c1_hi, c1_lo,
      c2_hi, c2_lo,
      c3_hi, c3_lo);
  }
};

SHA512.prototype._update = function _update(msg, start) {
  this._prepareBlock(msg, start);

  var W = this.W;

  var ah = this.h[0];
  var al = this.h[1];
  var bh = this.h[2];
  var bl = this.h[3];
  var ch = this.h[4];
  var cl = this.h[5];
  var dh = this.h[6];
  var dl = this.h[7];
  var eh = this.h[8];
  var el = this.h[9];
  var fh = this.h[10];
  var fl = this.h[11];
  var gh = this.h[12];
  var gl = this.h[13];
  var hh = this.h[14];
  var hl = this.h[15];

  assert(this.k.length === W.length);
  for (var i = 0; i < W.length; i += 2) {
    var c0_hi = hh;
    var c0_lo = hl;
    var c1_hi = s1_512_hi(eh, el);
    var c1_lo = s1_512_lo(eh, el);
    var c2_hi = ch64_hi(eh, el, fh, fl, gh, gl);
    var c2_lo = ch64_lo(eh, el, fh, fl, gh, gl);
    var c3_hi = this.k[i];
    var c3_lo = this.k[i + 1];
    var c4_hi = W[i];
    var c4_lo = W[i + 1];

    var T1_hi = sum64_5_hi(
      c0_hi, c0_lo,
      c1_hi, c1_lo,
      c2_hi, c2_lo,
      c3_hi, c3_lo,
      c4_hi, c4_lo);
    var T1_lo = sum64_5_lo(
      c0_hi, c0_lo,
      c1_hi, c1_lo,
      c2_hi, c2_lo,
      c3_hi, c3_lo,
      c4_hi, c4_lo);

    c0_hi = s0_512_hi(ah, al);
    c0_lo = s0_512_lo(ah, al);
    c1_hi = maj64_hi(ah, al, bh, bl, ch, cl);
    c1_lo = maj64_lo(ah, al, bh, bl, ch, cl);

    var T2_hi = sum64_hi(c0_hi, c0_lo, c1_hi, c1_lo);
    var T2_lo = sum64_lo(c0_hi, c0_lo, c1_hi, c1_lo);

    hh = gh;
    hl = gl;

    gh = fh;
    gl = fl;

    fh = eh;
    fl = el;

    eh = sum64_hi(dh, dl, T1_hi, T1_lo);
    el = sum64_lo(dl, dl, T1_hi, T1_lo);

    dh = ch;
    dl = cl;

    ch = bh;
    cl = bl;

    bh = ah;
    bl = al;

    ah = sum64_hi(T1_hi, T1_lo, T2_hi, T2_lo);
    al = sum64_lo(T1_hi, T1_lo, T2_hi, T2_lo);
  }

  sum64(this.h, 0, ah, al);
  sum64(this.h, 2, bh, bl);
  sum64(this.h, 4, ch, cl);
  sum64(this.h, 6, dh, dl);
  sum64(this.h, 8, eh, el);
  sum64(this.h, 10, fh, fl);
  sum64(this.h, 12, gh, gl);
  sum64(this.h, 14, hh, hl);
};

SHA512.prototype._digest = function digest(enc) {
  if (enc === 'hex')
    return utils.toHex32(this.h, 'big');
  else
    return utils.split32(this.h, 'big');
};

function ch64_hi(xh, xl, yh, yl, zh) {
  var r = (xh & yh) ^ ((~xh) & zh);
  if (r < 0)
    r += 0x100000000;
  return r;
}

function ch64_lo(xh, xl, yh, yl, zh, zl) {
  var r = (xl & yl) ^ ((~xl) & zl);
  if (r < 0)
    r += 0x100000000;
  return r;
}

function maj64_hi(xh, xl, yh, yl, zh) {
  var r = (xh & yh) ^ (xh & zh) ^ (yh & zh);
  if (r < 0)
    r += 0x100000000;
  return r;
}

function maj64_lo(xh, xl, yh, yl, zh, zl) {
  var r = (xl & yl) ^ (xl & zl) ^ (yl & zl);
  if (r < 0)
    r += 0x100000000;
  return r;
}

function s0_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 28);
  var c1_hi = rotr64_hi(xl, xh, 2);  // 34
  var c2_hi = rotr64_hi(xl, xh, 7);  // 39

  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function s0_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 28);
  var c1_lo = rotr64_lo(xl, xh, 2);  // 34
  var c2_lo = rotr64_lo(xl, xh, 7);  // 39

  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function s1_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 14);
  var c1_hi = rotr64_hi(xh, xl, 18);
  var c2_hi = rotr64_hi(xl, xh, 9);  // 41

  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function s1_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 14);
  var c1_lo = rotr64_lo(xh, xl, 18);
  var c2_lo = rotr64_lo(xl, xh, 9);  // 41

  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function g0_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 1);
  var c1_hi = rotr64_hi(xh, xl, 8);
  var c2_hi = shr64_hi(xh, xl, 7);

  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function g0_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 1);
  var c1_lo = rotr64_lo(xh, xl, 8);
  var c2_lo = shr64_lo(xh, xl, 7);

  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function g1_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 19);
  var c1_hi = rotr64_hi(xl, xh, 29);  // 61
  var c2_hi = shr64_hi(xh, xl, 6);

  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function g1_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 19);
  var c1_lo = rotr64_lo(xl, xh, 29);  // 61
  var c2_lo = shr64_lo(xh, xl, 6);

  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0)
    r += 0x100000000;
  return r;
}


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * opcode.js - opcode object for wmcc_core.
 */



const assert = __webpack_require__(0);
const ScriptNum = __webpack_require__(32);
const util = __webpack_require__(1);
const common = __webpack_require__(27);
const BufferReader = __webpack_require__(2);
const StaticWriter = __webpack_require__(4);
const opcodes = common.opcodes;

const opCache = [];

let PARSE_ERROR = null;

/**
 * A simple struct which contains
 * an opcode and pushdata buffer.
 * Note: this should not be called directly.
 * @alias module:script.Opcode
 * @constructor
 * @param {Number} value - Opcode.
 * @param {Buffer?} data - Pushdata buffer.
 * @property {Number} value
 * @property {Buffer|null} data
 */

function Opcode(value, data) {
  if (!(this instanceof Opcode))
    return new Opcode(value, data);

  this.value = value || 0;
  this.data = data || null;
}

/**
 * Test whether a pushdata abides by minimaldata.
 * @returns {Boolean}
 */

Opcode.prototype.isMinimal = function isMinimal() {
  if (!this.data)
    return true;

  if (this.data.length === 1) {
    if (this.data[0] === 0x81)
      return false;

    if (this.data[0] >= 1 && this.data[0] <= 16)
      return false;
  }

  if (this.data.length <= 0x4b)
    return this.value === this.data.length;

  if (this.data.length <= 0xff)
    return this.value === opcodes.OP_PUSHDATA1;

  if (this.data.length <= 0xffff)
    return this.value === opcodes.OP_PUSHDATA2;

  assert(this.value === opcodes.OP_PUSHDATA4);

  return true;
};

/**
 * Test whether opcode is a disabled opcode.
 * @returns {Boolean}
 */

Opcode.prototype.isDisabled = function isDisabled() {
  switch (this.value) {
    case opcodes.OP_CAT:
    case opcodes.OP_SUBSTR:
    case opcodes.OP_LEFT:
    case opcodes.OP_RIGHT:
    case opcodes.OP_INVERT:
    case opcodes.OP_AND:
    case opcodes.OP_OR:
    case opcodes.OP_XOR:
    case opcodes.OP_2MUL:
    case opcodes.OP_2DIV:
    case opcodes.OP_MUL:
    case opcodes.OP_DIV:
    case opcodes.OP_MOD:
    case opcodes.OP_LSHIFT:
    case opcodes.OP_RSHIFT:
      return true;
  }
  return false;
};

/**
 * Test whether opcode is a branch (if/else/endif).
 * @returns {Boolean}
 */

Opcode.prototype.isBranch = function isBranch() {
  return this.value >= opcodes.OP_IF && this.value <= opcodes.OP_ENDIF;
};

/**
 * Test opcode equality.
 * @param {Opcode} op
 * @returns {Boolean}
 */

Opcode.prototype.equals = function equals(op) {
  assert(Opcode.isOpcode(op));

  if (this.value !== op.value)
    return false;

  if (!this.data) {
    assert(!op.data);
    return true;
  }

  assert(op.data);

  return this.data.equals(op.data);
};

/**
 * Convert Opcode to opcode value.
 * @returns {Number}
 */

Opcode.prototype.toOp = function toOp() {
  return this.value;
};

/**
 * Covert opcode to data push.
 * @returns {Buffer|null}
 */

Opcode.prototype.toData = function toData() {
  return this.data;
};

/**
 * Covert opcode to data length.
 * @returns {Number}
 */

Opcode.prototype.toLength = function toLength() {
  return this.data ? this.data.length : -1;
};

/**
 * Covert and _cast_ opcode to data push.
 * @returns {Buffer|null}
 */

Opcode.prototype.toPush = function toPush() {
  if (this.value === opcodes.OP_0)
    return common.small[0 + 1];

  if (this.value === opcodes.OP_1NEGATE)
    return common.small[-1 + 1];

  if (this.value >= opcodes.OP_1 && this.value <= opcodes.OP_16)
    return common.small[this.value - 0x50 + 1];

  return this.toData();
};

/**
 * Get string for opcode.
 * @param {String?} enc
 * @returns {Buffer|null}
 */

Opcode.prototype.toString = function toString(enc) {
  const data = this.toPush();

  if (!data)
    return null;

  return data.toString(enc || 'utf8');
};

/**
 * Convert opcode to small integer.
 * @returns {Number}
 */

Opcode.prototype.toSmall = function toSmall() {
  if (this.value === opcodes.OP_0)
    return 0;

  if (this.value >= opcodes.OP_1 && this.value <= opcodes.OP_16)
    return this.value - 0x50;

  return -1;
};

/**
 * Convert opcode to script number.
 * @param {Boolean?} minimal
 * @param {Number?} limit
 * @returns {ScriptNum|null}
 */

Opcode.prototype.toNum = function toNum(minimal, limit) {
  if (this.value === opcodes.OP_0)
    return ScriptNum.fromInt(0);

  if (this.value === opcodes.OP_1NEGATE)
    return ScriptNum.fromInt(-1);

  if (this.value >= opcodes.OP_1 && this.value <= opcodes.OP_16)
    return ScriptNum.fromInt(this.value - 0x50);

  if (!this.data)
    return null;

  return ScriptNum.decode(this.data, minimal, limit);
};

/**
 * Convert opcode to integer.
 * @param {Boolean?} minimal
 * @param {Number?} limit
 * @returns {Number}
 */

Opcode.prototype.toInt = function toInt(minimal, limit) {
  const num = this.toNum(minimal, limit);

  if (!num)
    return -1;

  return num.getInt();
};

/**
 * Convert opcode to boolean.
 * @returns {Boolean}
 */

Opcode.prototype.toBool = function toBool() {
  const smi = this.toSmall();

  if (smi === -1)
    return false;

  return smi === 1;
};

/**
 * Convert opcode to its symbolic representation.
 * @returns {String}
 */

Opcode.prototype.toSymbol = function toSymbol() {
  if (this.value === -1)
    return 'OP_INVALIDOPCODE';

  const symbol = common.opcodesByVal[this.value];

  if (!symbol)
    return `0x${util.hex8(this.value)}`;

  return symbol;
};

/**
 * Calculate opcode size.
 * @returns {Number}
 */

Opcode.prototype.getSize = function getSize() {
  if (!this.data)
    return 1;

  switch (this.value) {
    case opcodes.OP_PUSHDATA1:
      return 2 + this.data.length;
    case opcodes.OP_PUSHDATA2:
      return 3 + this.data.length;
    case opcodes.OP_PUSHDATA4:
      return 5 + this.data.length;
    default:
      return 1 + this.data.length;
  }
};

/**
 * Encode the opcode to a buffer writer.
 * @param {BufferWriter} bw
 */

Opcode.prototype.toWriter = function toWriter(bw) {
  if (this.value === -1)
    throw new Error('Cannot reserialize a parse error.');

  if (!this.data) {
    bw.writeU8(this.value);
    return bw;
  }

  switch (this.value) {
    case opcodes.OP_PUSHDATA1:
      bw.writeU8(this.value);
      bw.writeU8(this.data.length);
      bw.writeBytes(this.data);
      break;
    case opcodes.OP_PUSHDATA2:
      bw.writeU8(this.value);
      bw.writeU16(this.data.length);
      bw.writeBytes(this.data);
      break;
    case opcodes.OP_PUSHDATA4:
      bw.writeU8(this.value);
      bw.writeU32(this.data.length);
      bw.writeBytes(this.data);
      break;
    default:
      assert(this.value === this.data.length);
      bw.writeU8(this.value);
      bw.writeBytes(this.data);
      break;
  }

  return bw;
};

/**
 * Encode the opcode.
 * @returns {Buffer}
 */

Opcode.prototype.toRaw = function toRaw() {
  const size = this.getSize();
  return this.toWriter(new StaticWriter(size)).render();
};

/**
 * Convert the opcode to a wmccd test string.
 * @returns {String} Human-readable script code.
 */

Opcode.prototype.toFormat = function toFormat() {
  if (this.value === -1)
    return '0x01';

  if (this.data) {
    // Numbers
    if (this.data.length <= 4) {
      const num = this.toNum();
      if (this.equals(Opcode.fromNum(num)))
        return num.toString(10);
    }

    const symbol = common.opcodesByVal[this.value];
    const data = this.data.toString('hex');

    // Direct push
    if (!symbol) {
      const size = util.hex8(this.value);
      return `0x${size} 0x${data}`;
    }

    // Pushdatas
    let size = this.data.length.toString(16);

    while (size.length % 2 !== 0)
      size = '0' + size;

    return `${symbol} 0x${size} 0x${data}`;
  }

  // Opcodes
  const symbol = common.opcodesByVal[this.value];
  if (symbol)
    return symbol;

  // Unknown opcodes
  const value = util.hex8(this.value);

  return `0x${value}`;
};

/**
 * Format the opcode as wmccd asm.
 * @param {Boolean?} decode - Attempt to decode hash types.
 * @returns {String} Human-readable script.
 */

Opcode.prototype.toASM = function toASM(decode) {
  if (this.value === -1)
    return '[error]';

  if (this.data)
    return common.toASM(this.data, decode);

  return common.opcodesByVal[this.value] || 'OP_UNKNOWN';
};

/**
 * Instantiate an opcode from a number opcode.
 * @param {Number} op
 * @returns {Opcode}
 */

Opcode.fromOp = function fromOp(op) {
  assert(typeof op === 'number');

  const cached = opCache[op];

  assert(cached, 'Bad opcode.');

  return cached;
};

/**
 * Instantiate a pushdata opcode from
 * a buffer (will encode minimaldata).
 * @param {Buffer} data
 * @returns {Opcode}
 */

Opcode.fromData = function fromData(data) {
  assert(Buffer.isBuffer(data));

  if (data.length === 1) {
    if (data[0] === 0x81)
      return Opcode.fromOp(opcodes.OP_1NEGATE);

    if (data[0] >= 1 && data[0] <= 16)
      return Opcode.fromOp(data[0] + 0x50);
  }

  return Opcode.fromPush(data);
};

/**
 * Instantiate a pushdata opcode from a
 * buffer (this differs from fromData in
 * that it will _always_ be a pushdata op).
 * @param {Buffer} data
 * @returns {Opcode}
 */

Opcode.fromPush = function fromPush(data) {
  assert(Buffer.isBuffer(data));

  if (data.length === 0)
    return Opcode.fromOp(opcodes.OP_0);

  if (data.length <= 0x4b)
    return new Opcode(data.length, data);

  if (data.length <= 0xff)
    return new Opcode(opcodes.OP_PUSHDATA1, data);

  if (data.length <= 0xffff)
    return new Opcode(opcodes.OP_PUSHDATA2, data);

  if (data.length <= 0xffffffff)
    return new Opcode(opcodes.OP_PUSHDATA4, data);

  throw new Error('Pushdata size too large.');
};

/**
 * Instantiate a pushdata opcode from a string.
 * @param {String} str
 * @param {String} [enc=utf8]
 * @returns {Opcode}
 */

Opcode.fromString = function fromString(str, enc) {
  assert(typeof str === 'string');
  const data = Buffer.from(str, enc || 'utf8');
  return Opcode.fromData(data);
};

/**
 * Instantiate an opcode from a small number.
 * @param {Number} num
 * @returns {Opcode}
 */

Opcode.fromSmall = function fromSmall(num) {
  assert(util.isU8(num) && num >= 0 && num <= 16);
  return Opcode.fromOp(num === 0 ? 0 : num + 0x50);
};

/**
 * Instantiate an opcode from a ScriptNum.
 * @param {ScriptNumber} num
 * @returns {Opcode}
 */

Opcode.fromNum = function fromNum(num) {
  assert(ScriptNum.isScriptNum(num));
  return Opcode.fromData(num.encode());
};

/**
 * Instantiate an opcode from a Number.
 * @param {Number} num
 * @returns {Opcode}
 */

Opcode.fromInt = function fromInt(num) {
  assert(util.isInt(num));

  if (num === 0)
    return Opcode.fromOp(opcodes.OP_0);

  if (num === -1)
    return Opcode.fromOp(opcodes.OP_1NEGATE);

  if (num >= 1 && num <= 16)
    return Opcode.fromOp(num + 0x50);

  return Opcode.fromNum(ScriptNum.fromNumber(num));
};

/**
 * Instantiate an opcode from a Number.
 * @param {Boolean} value
 * @returns {Opcode}
 */

Opcode.fromBool = function fromBool(value) {
  assert(typeof value === 'boolean');
  return Opcode.fromSmall(value ? 1 : 0);
};

/**
 * Instantiate a pushdata opcode from symbolic name.
 * @example
 *   Opcode.fromSymbol('checksequenceverify')
 * @param {String} name
 * @returns {Opcode}
 */

Opcode.fromSymbol = function fromSymbol(name) {
  assert(typeof name === 'string');
  assert(name.length > 0);

  if (!util.isUpperCase(name))
    name = name.toUpperCase();

  if (!util.startsWith(name, 'OP_'))
    name = `OP_${name}`;

  const op = common.opcodes[name];

  if (op != null)
    return Opcode.fromOp(op);

  assert(util.startsWith(name, 'OP_0X'), 'Unknown opcode.');
  assert(name.length === 7, 'Unknown opcode.');

  const value = parseInt(name.substring(5), 16);

  assert(util.isU8(value), 'Unknown opcode.');

  return Opcode.fromOp(value);
};

/**
 * Instantiate opcode from buffer reader.
 * @param {BufferReader} br
 * @returns {Opcode}
 */

Opcode.fromReader = function fromReader(br) {
  const value = br.readU8();
  const op = opCache[value];

  if (op)
    return op;

  switch (value) {
    case opcodes.OP_PUSHDATA1: {
      if (br.left() < 1)
        return PARSE_ERROR;

      const size = br.readU8();

      if (br.left() < size) {
        br.seek(br.left());
        return PARSE_ERROR;
      }

      const data = br.readBytes(size);

      return new Opcode(value, data);
    }
    case opcodes.OP_PUSHDATA2: {
      if (br.left() < 2) {
        br.seek(br.left());
        return PARSE_ERROR;
      }

      const size = br.readU16();

      if (br.left() < size) {
        br.seek(br.left());
        return PARSE_ERROR;
      }

      const data = br.readBytes(size);

      return new Opcode(value, data);
    }
    case opcodes.OP_PUSHDATA4: {
      if (br.left() < 4) {
        br.seek(br.left());
        return PARSE_ERROR;
      }

      const size = br.readU32();

      if (br.left() < size) {
        br.seek(br.left());
        return PARSE_ERROR;
      }

      const data = br.readBytes(size);

      return new Opcode(value, data);
    }
    default: {
      if (br.left() < value) {
        br.seek(br.left());
        return PARSE_ERROR;
      }

      const data = br.readBytes(value);

      return new Opcode(value, data);
    }
  }
};

/**
 * Instantiate opcode from serialized data.
 * @param {Buffer} data
 * @returns {Opcode}
 */

Opcode.fromRaw = function fromRaw(data) {
  return Opcode.fromReader(new BufferReader(data));
};

/**
 * Test whether an object an Opcode.
 * @param {Object} obj
 * @returns {Boolean}
 */

Opcode.isOpcode = function isOpcode(obj) {
  return obj instanceof Opcode;
};

/*
 * Fill Cache
 */

PARSE_ERROR = Object.freeze(new Opcode(-1));

for (let value = 0x00; value <= 0xff; value++) {
  if (value >= 0x01 && value <= 0x4e) {
    opCache.push(null);
    continue;
  }
  const op = new Opcode(value);
  opCache.push(Object.freeze(op));
}

/*
 * Expose
 */

module.exports = Opcode;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * undocoins.js - undocoins object for wmcc_core.
 */



const assert = __webpack_require__(0);
const BufferReader = __webpack_require__(2);
const StaticWriter = __webpack_require__(4);
const CoinEntry = __webpack_require__(50);

/**
 * UndoCoins
 * Coins need to be resurrected from somewhere
 * during a reorg. The undo coins store all
 * spent coins in a single record per block
 * (in a compressed format).
 * @alias module:coins.UndoCoins
 * @constructor
 * @property {UndoCoin[]} items
 */

function UndoCoins() {
  if (!(this instanceof UndoCoins))
    return new UndoCoins();

  this.items = [];
}

/**
 * Push coin entry onto undo coin array.
 * @param {CoinEntry}
 * @returns {Number}
 */

UndoCoins.prototype.push = function push(coin) {
  return this.items.push(coin);
};

/**
 * Calculate undo coins size.
 * @returns {Number}
 */

UndoCoins.prototype.getSize = function getSize() {
  let size = 0;

  size += 4;

  for (const coin of this.items)
    size += coin.getSize();

  return size;
};

/**
 * Serialize all undo coins.
 * @returns {Buffer}
 */

UndoCoins.prototype.toRaw = function toRaw() {
  const size = this.getSize();
  const bw = new StaticWriter(size);

  bw.writeU32(this.items.length);

  for (const coin of this.items)
    coin.toWriter(bw);

  return bw.render();
};

/**
 * Inject properties from serialized data.
 * @private
 * @param {Buffer} data
 * @returns {UndoCoins}
 */

UndoCoins.prototype.fromRaw = function fromRaw(data) {
  const br = new BufferReader(data);
  const count = br.readU32();

  for (let i = 0; i < count; i++)
    this.items.push(CoinEntry.fromReader(br));

  return this;
};

/**
 * Instantiate undo coins from serialized data.
 * @param {Buffer} data
 * @returns {UndoCoins}
 */

UndoCoins.fromRaw = function fromRaw(data) {
  return new UndoCoins().fromRaw(data);
};

/**
 * Test whether the undo coins have any members.
 * @returns {Boolean}
 */

UndoCoins.prototype.isEmpty = function isEmpty() {
  return this.items.length === 0;
};

/**
 * Render the undo coins.
 * @returns {Buffer}
 */

UndoCoins.prototype.commit = function commit() {
  const raw = this.toRaw();
  this.items.length = 0;
  return raw;
};

/**
 * Re-apply undo coins to a view, effectively unspending them.
 * @param {CoinView} view
 * @param {Outpoint} prevout
 */

UndoCoins.prototype.apply = function apply(view, prevout) {
  const undo = this.items.pop();

  assert(undo);

  view.addEntry(prevout, undo);
};

/*
 * Expose
 */

module.exports = UndoCoins;


/***/ }),
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * mine.js - mining function for wmcc_core.
 */



const assert = __webpack_require__(0);
// const digest = require('../crypto/digest'); // cfc
const scrypt = __webpack_require__(44); // ctl
const X15 = __webpack_require__(58);

/**
 * Hash until the nonce overflows.
 * @alias module:mining.mine
 * @param {Buffer} data
 * @param {Buffer} target - Big endian.
 * @param {Number} min
 * @param {Number} max
 * @returns {Number} Nonce or -1.
 */

function mine(data, target, min, max) {
  let nonce = min;

  data.writeUInt32LE(nonce, 76, true);

  // The heart and soul of the miner: match the target.
  while (nonce <= max) {
    // Hash and test against the next target.
    // if (rcmp(digest.hash256(data), target) <= 0) // cfc
    // if (rcmp(powHash(data), target) <= 0) // ctl
    if (rcmp(calHash(data), target) <= 0)
      return nonce;

    // Increment the nonce to get a different hash.
    nonce++;

    // Update the raw buffer.
    data.writeUInt32LE(nonce, 76, true);
  }

  return -1;
}

/**
 * Proof of work function.
 * @param {Buffer} data
 * @returns {Buffer}
 */
// ctl
function powHash(data) {
  return scrypt.derive(data, data, 1024, 1, 1, 32);
}

/**
 * Proof of work function.
 * @param {Buffer} data
 * @returns {Buffer}
 */

function calHash(data) {
  return X15.digest(data);
}

/**
 * "Reverse" comparison so we don't have
 * to waste time reversing the block hash.
 * @ignore
 * @param {Buffer} a
 * @param {Buffer} b
 * @returns {Number}
 */

function rcmp(a, b) {
  assert(a.length === b.length);

  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] < b[i])
      return -1;
    if (a[i] > b[i])
      return 1;
  }

  return 0;
}

/*
 * Expose
 */

module.exports = mine;


/***/ }),
/* 98 */,
/* 99 */,
/* 100 */
/***/ (function(module, exports) {

module.exports = require("dgram");

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * bech32.js - bech32 for wmcc_core.
 *
 * Parts of this software are based on "bech32".
 * https://github.com/sipa/bech32
 *
 * Copyright (c) 2017 Pieter Wuille
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



const native = __webpack_require__(18).binding;

/**
 * @module utils/bech32
 */

const POOL65 = Buffer.allocUnsafe(65);
const CHARSET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';
const TABLE = [
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  15, -1, 10, 17, 21, 20, 26, 30,  7,  5, -1, -1, -1, -1, -1, -1,
  -1, 29, -1, 24, 13, 25,  9,  8, 23, -1, 18, 22, 31, 27, 19, -1,
   1,  0,  3, 16, 11, 28, 12, 14,  6,  4,  2, -1, -1, -1, -1, -1,
  -1, 29, -1, 24, 13, 25,  9,  8, 23, -1, 18, 22, 31, 27, 19, -1,
   1,  0,  3, 16, 11, 28, 12, 14,  6,  4,  2, -1, -1, -1, -1, -1
];

/**
 * Update checksum.
 * @ignore
 * @param {Number} chk
 * @returns {Number}
 */

function polymod(pre) {
  const b = pre >>> 25;
  return ((pre & 0x1ffffff) << 5)
    ^ (-((b >> 0) & 1) & 0x3b6a57b2)
    ^ (-((b >> 1) & 1) & 0x26508e6d)
    ^ (-((b >> 2) & 1) & 0x1ea119fa)
    ^ (-((b >> 3) & 1) & 0x3d4233dd)
    ^ (-((b >> 4) & 1) & 0x2a1462b3);
}

/**
 * Encode hrp and data as a bech32 string.
 * @ignore
 * @param {String} hrp
 * @param {Buffer} data
 * @returns {String}
 */

function serialize(hrp, data) {
  let chk = 1;
  let i;

  for (i = 0; i < hrp.length; i++) {
    const ch = hrp.charCodeAt(i);

    if ((ch >> 5) === 0)
      throw new Error('Invalid bech32 character.');

    chk = polymod(chk) ^ (ch >> 5);
  }

  if (i + 7 + data.length > 90)
    throw new Error('Invalid bech32 data length.');

  chk = polymod(chk);

  let str = '';

  for (let i = 0; i < hrp.length; i++) {
    const ch = hrp.charCodeAt(i);
    chk = polymod(chk) ^ (ch & 0x1f);
    str += hrp[i];
  }

  str += '1';

  for (let i = 0; i < data.length; i++) {
    const ch = data[i];

    if ((ch >> 5) !== 0)
      throw new Error('Invalid bech32 value.');

    chk = polymod(chk) ^ ch;
    str += CHARSET[ch];
  }

  for (let i = 0; i < 6; i++)
    chk = polymod(chk);

  chk ^= 1;

  for (let i = 0; i < 6; i++)
    str += CHARSET[(chk >>> ((5 - i) * 5)) & 0x1f];

  return str;
}

/**
 * Decode a bech32 string.
 * @param {String} str
 * @returns {Array} [hrp, data]
 */

function deserialize(str) {
  let dlen = 0;

  if (str.length < 8 || str.length > 90)
    throw new Error('Invalid bech32 string length.');

  while (dlen < str.length && str[(str.length - 1) - dlen] !== '1')
    dlen++;

  const hlen = str.length - (1 + dlen);

  if (hlen < 1 || dlen < 6)
    throw new Error('Invalid bech32 data length.');

  dlen -= 6;

  const data = Buffer.allocUnsafe(dlen);

  let chk = 1;
  let lower = false;
  let upper = false;
  let hrp = '';

  for (let i = 0; i < hlen; i++) {
    let ch = str.charCodeAt(i);

    if (ch < 0x21 || ch > 0x7e)
      throw new Error('Invalid bech32 character.');

    if (ch >= 0x61 && ch <= 0x7a) {
      lower = true;
    } else if (ch >= 0x41 && ch <= 0x5a) {
      upper = true;
      ch = (ch - 0x41) + 0x61;
    }

    hrp += String.fromCharCode(ch);
    chk = polymod(chk) ^ (ch >> 5);
  }

  chk = polymod(chk);

  let i;
  for (i = 0; i < hlen; i++)
    chk = polymod(chk) ^ (str.charCodeAt(i) & 0x1f);

  i++;

  while (i < str.length) {
    const ch = str.charCodeAt(i);
    const v = (ch & 0x80) ? -1 : TABLE[ch];

    if (ch >= 0x61 && ch <= 0x7a)
      lower = true;
    else if (ch >= 0x41 && ch <= 0x5a)
      upper = true;

    if (v === -1)
      throw new Error('Invalid bech32 character.');

    chk = polymod(chk) ^ v;

    if (i + 6 < str.length)
      data[i - (1 + hlen)] = v;

    i++;
  }

  if (lower && upper)
    throw new Error('Invalid bech32 casing.');

  if (chk !== 1)
    throw new Error('Invalid bech32 checksum.');

  return [hrp, data.slice(0, dlen)];
}

/**
 * Convert serialized data to bits,
 * suitable to be serialized as bech32.
 * @param {Buffer} data
 * @param {Buffer} output
 * @param {Number} frombits
 * @param {Number} tobits
 * @param {Number} pad
 * @param {Number} off
 * @returns {Buffer}
 */

function convert(data, output, frombits, tobits, pad, off) {
  const maxv = (1 << tobits) - 1;
  let acc = 0;
  let bits = 0;
  let j = 0;

  if (pad !== -1)
    output[j++] = pad;

  for (let i = off; i < data.length; i++) {
    const value = data[i];

    if ((value >> frombits) !== 0)
      throw new Error('Invalid bech32 bits.');

    acc = (acc << frombits) | value;
    bits += frombits;

    while (bits >= tobits) {
      bits -= tobits;
      output[j++] = (acc >>> bits) & maxv;
    }
  }

  if (pad !== -1) {
    if (bits > 0)
      output[j++] = (acc << (tobits - bits)) & maxv;
  } else {
    if (bits >= frombits || ((acc << (tobits - bits)) & maxv))
      throw new Error('Invalid bech32 bits.');
  }

  return output.slice(0, j);
}

/**
 * Serialize data to bech32 address.
 * @param {String} hrp
 * @param {Number} version
 * @param {Buffer} hash
 * @returns {String}
 */

function encode(hrp, version, hash) {
  const output = POOL65;

  if (version < 0 || version > 16)
    throw new Error('Invalid bech32 version.');

  if (hash.length < 2 || hash.length > 40)
    throw new Error('Invalid bech32 data length.');

  const data = convert(hash, output, 8, 5, version, 0);

  return serialize(hrp, data);
}

if (native)
  encode = native.toBech32;

/**
 * Deserialize data from bech32 address.
 * @param {String} str
 * @returns {Object}
 */

function decode(str) {
  const [hrp, data] = deserialize(str);

  if (data.length === 0 || data.length > 65)
    throw new Error('Invalid bech32 data length.');

  if (data[0] > 16)
    throw new Error('Invalid bech32 version.');

  const version = data[0];
  const output = data;
  const hash = convert(data, output, 5, 8, -1, 1);

  if (hash.length < 2 || hash.length > 40)
    throw new Error('Invalid bech32 data length.');

  return new AddrResult(hrp, version, hash);
}

if (native)
  decode = native.fromBech32;

/**
 * AddrResult
 * @constructor
 * @private
 * @param {String} hrp
 * @param {Number} version
 * @param {Buffer} hash
 * @property {String} hrp
 * @property {Number} version
 * @property {Buffer} hash
 */

function AddrResult(hrp, version, hash) {
  this.hrp = hrp;
  this.version = version;
  this.hash = hash;
}

/*
 * Expose
 */

exports.deserialize = deserialize;
exports.serialize = serialize;
exports.convert = convert;
exports.encode = encode;
exports.decode = decode;


/***/ }),
/* 102 */,
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * coins.js - coins object for  wmcc_core.
 */



const assert = __webpack_require__(0);
const CoinEntry = __webpack_require__(50);

/**
 * Represents the outputs for a single transaction.
 * @alias module:coins.Coins
 * @constructor
 * @property {Map[]} outputs - Coins.
 */

function Coins() {
  if (!(this instanceof Coins))
    return new Coins();

  this.outputs = new Map();
}

/**
 * Add a single entry to the collection.
 * @param {Number} index
 * @param {CoinEntry} coin
 * @returns {CoinEntry}
 */

Coins.prototype.add = function add(index, coin) {
  //assert(index >= 0);
  //assert(!this.outputs.has(index));
  assert((index >>> 0) === index);
  assert(coin);

  this.outputs.set(index, coin);
  return coin;
};

/**
 * Add a single output to the collection.
 * @param {Number} index
 * @param {Output} output
 * @returns {CoinEntry}
 */

Coins.prototype.addOutput = function addOutput(index, output) {
  //assert(!output.script.isUnspendable());
  return this.add(index, CoinEntry.fromOutput(output));
};

/**
 * Add an output to the collection by output index.
 * @param {TX} tx
 * @param {Number} index
 * @param {Number} height
 * @returns {CoinEntry}
 */

Coins.prototype.addIndex = function addIndex(tx, index, height) {
  return this.add(index, CoinEntry.fromTX(tx, index, height));
};

/**
 * Add a single coin to the collection.
 * @param {Coin} coin
 * @returns {CoinEntry}
 */

Coins.prototype.addCoin = function addCoin(coin) {
  //assert(!coin.script.isUnspendable());
  return this.add(coin.index, CoinEntry.fromCoin(coin));
};

/**
 * Test whether the collection has a coin.
 * @param {Number} index
 * @returns {Boolean}
 */

Coins.prototype.has = function has(index) {
  return this.outputs.has(index);
};

/**
 * Test whether the collection has an unspent coin.
 * @param {Number} index
 * @returns {Boolean}
 */

Coins.prototype.isUnspent = function isUnspent(index) {
  const coin = this.outputs.get(index);

  if (!coin || coin.spent)
    return false;

  return true;
};

/**
 * Get a coin entry.
 * @param {Number} index
 * @returns {CoinEntry|null}
 */

Coins.prototype.get = function get(index) {
  return this.outputs.get(index) || null;
};

/**
 * Get an output.
 * @param {Number} index
 * @returns {Output|null}
 */

Coins.prototype.getOutput = function getOutput(index) {
  const coin = this.outputs.get(index);

  if (!coin)
    return null;

  return coin.output;
};

/**
 * Get a coin.
 * @param {Outpoint} prevout
 * @returns {Coin|null}
 */

Coins.prototype.getCoin = function getCoin(prevout) {
  const coin = this.outputs.get(prevout.index);

  if (!coin)
    return null;

  return coin.toCoin(prevout);
};

/**
 * Spend a coin entry and return it.
 * @param {Number} index
 * @returns {CoinEntry|null}
 */

Coins.prototype.spend = function spend(index) {
  const coin = this.get(index);

  if (!coin || coin.spent)
    return null;

  coin.spent = true;

  return coin;
};

/**
 * Remove a coin entry and return it.
 * @param {Number} index
 * @returns {CoinEntry|null}
 */

Coins.prototype.remove = function remove(index) {
  const coin = this.get(index);

  if (!coin)
    return null;

  this.outputs.delete(index);

  return coin;
};

/**
 * Test whether the coins are fully spent.
 * @returns {Boolean}
 */

Coins.prototype.isEmpty = function isEmpty() {
  return this.outputs.size === 0;
};

/**
 * Inject properties from tx.
 * @private
 * @param {TX} tx
 * @param {Number} height
 * @returns {Coins}
 */

Coins.prototype.fromTX = function fromTX(tx, height) {
  assert(typeof height === 'number');

  for (let i = 0; i < tx.outputs.length; i++) {
    const output = tx.outputs[i];

    if (output.script.isUnspendable())
      continue;

    //this.outputs.set(i, CoinEntry.fromTX(tx, i, height));
    const entry = CoinEntry.fromTX(tx, i, height);

    this.outputs.set(i, entry);
  }

  return this;
};

/**
 * Instantiate a coins object from a transaction.
 * @param {TX} tx
 * @param {Number} height
 * @returns {Coins}
 */

Coins.fromTX = function fromTX(tx, height) {
  return new Coins().fromTX(tx, height);
};

/*
 * Expose
 */

module.exports = Coins;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * compress.js - coin compressor for wmcc_core.
 */



/**
 * @module coins/compress
 * @ignore
 */

const assert = __webpack_require__(0);
const secp256k1 = __webpack_require__(12);
const encoding = __webpack_require__(3);
const consensus = __webpack_require__(7);

/*
 * Constants
 */

const COMPRESS_TYPES = 6;
const EMPTY_BUFFER = Buffer.alloc(0);

/**
 * Compress a script, write directly to the buffer.
 * @param {Script} script
 * @param {BufferWriter} bw
 */

function compressScript(script, bw) {
  // Attempt to compress the output scripts.
  // We can _only_ ever compress them if
  // they are serialized as minimaldata, as
  // we need to recreate them when we read
  // them.

  // P2PKH -> 0 | key-hash
  // Saves 5 bytes.
  const pkh = script.getPubkeyhash(true);
  if (pkh) {
    bw.writeU8(0);
    bw.writeBytes(pkh);
    return bw;
  }

  // P2SH -> 1 | script-hash
  // Saves 3 bytes.
  const sh = script.getScripthash();
  if (sh) {
    bw.writeU8(1);
    bw.writeBytes(sh);
    return bw;
  }

  // P2PK -> 2-5 | compressed-key
  // Only works if the key is valid.
  // Saves up to 35 bytes.
  const pk = script.getPubkey(true);
  if (pk) {
    if (publicKeyVerify(pk)) {
      const key = compressKey(pk);
      bw.writeBytes(key);
      return bw;
    }
  }

  // Raw -> varlen + 10 | script
  bw.writeVarint(script.raw.length + COMPRESS_TYPES);
  bw.writeBytes(script.raw);

  return bw;
}

/**
 * Decompress a script from buffer reader.
 * @param {Script} script
 * @param {BufferReader} br
 */

function decompressScript(script, br) {
  // Decompress the script.
  switch (br.readU8()) {
    case 0: {
      const hash = br.readBytes(20, true);
      script.fromPubkeyhash(hash);
      break;
    }
    case 1: {
      const hash = br.readBytes(20, true);
      script.fromScripthash(hash);
      break;
    }
    case 2:
    case 3:
    case 4:
    case 5: {
      br.offset -= 1;
      const data = br.readBytes(33, true);
      // Decompress the key. If this fails,
      // we have database corruption!
      const key = decompressKey(data);
      script.fromPubkey(key);
      break;
    }
    default: {
      br.offset -= 1;
      const size = br.readVarint() - COMPRESS_TYPES;
      if (size > consensus.MAX_SCRIPT_SIZE) {
        // This violates consensus rules.
        // We don't need to read it.
        script.fromNulldata(EMPTY_BUFFER);
        br.seek(size);
      } else {
        const data = br.readBytes(size);
        script.fromRaw(data);
      }
      break;
    }
  }

  return script;
}

/**
 * Calculate script size.
 * @returns {Number}
 */

function sizeScript(script) {
  if (script.isPubkeyhash(true))
    return 21;

  if (script.isScripthash())
    return 21;

  const pk = script.getPubkey(true);
  if (pk) {
    if (publicKeyVerify(pk))
      return 33;
  }

  let size = 0;
  size += encoding.sizeVarint(script.raw.length + COMPRESS_TYPES);
  size += script.raw.length;

  return size;
}

/**
 * Compress an output.
 * @param {Output} output
 * @param {BufferWriter} bw
 */

function compressOutput(output, bw) {
  bw.writeVarint(output.value);
  compressScript(output.script, bw);
  return bw;
}

/**
 * Decompress a script from buffer reader.
 * @param {Output} output
 * @param {BufferReader} br
 */

function decompressOutput(output, br) {
  output.value = br.readVarint();
  decompressScript(output.script, br);
  return output;
}

/**
 * Calculate output size.
 * @returns {Number}
 */

function sizeOutput(output) {
  let size = 0;
  size += encoding.sizeVarint(output.value);
  size += sizeScript(output.script);
  return size;
}

/**
 * Compress value using an exponent. Takes advantage of
 * the fact that many bitcoin values are divisible by 10.
 * @see https://github.com/btcsuite/btcd/blob/master/blockchain/compress.go
 * @param {Amount} value
 * @returns {Number}
 */

function compressValue(value) {
  if (value === 0)
    return 0;

  let exp = 0;
  while (value % 10 === 0 && exp < 9) {
    value /= 10;
    exp++;
  }

  if (exp < 9) {
    const last = value % 10;
    value = (value - last) / 10;
    return 1 + 10 * (9 * value + last - 1) + exp;
  }

  return 10 + 10 * (value - 1);
}

/**
 * Decompress value.
 * @param {Number} value - Compressed value.
 * @returns {Amount} value
 */

function decompressValue(value) {
  if (value === 0)
    return 0;

  value--;

  let exp = value % 10;

  value = (value - exp) / 10;

  let n;
  if (exp < 9) {
    const last = value % 9;
    value = (value - last) / 9;
    n = value * 10 + last + 1;
  } else {
    n = value + 1;
  }

  while (exp > 0) {
    n *= 10;
    exp--;
  }

  return n;
}

/**
 * Verify a public key (no hybrid keys allowed).
 * @param {Buffer} key
 * @returns {Boolean}
 */

function publicKeyVerify(key) {
  if (key.length === 0)
    return false;

  switch (key[0]) {
    case 0x02:
    case 0x03:
      return key.length === 33;
    case 0x04:
      if (key.length !== 65)
        return false;

      return secp256k1.publicKeyVerify(key);
    default:
      return false;
  }
}

/**
 * Compress a public key to coins compression format.
 * @param {Buffer} key
 * @returns {Buffer}
 */

function compressKey(key) {
  let out;

  switch (key[0]) {
    case 0x02:
    case 0x03:
      // Key is already compressed.
      out = key;
      break;
    case 0x04:
      // Compress the key normally.
      out = secp256k1.publicKeyConvert(key, true);
      // Store the oddness.
      // Pseudo-hybrid format.
      out[0] = 0x04 | (key[64] & 0x01);
      break;
    default:
      throw new Error('Bad point format.');
  }

  assert(out.length === 33);

  return out;
}

/**
 * Decompress a public key from the coins compression format.
 * @param {Buffer} key
 * @returns {Buffer}
 */

function decompressKey(key) {
  const format = key[0];

  assert(key.length === 33);

  switch (format) {
    case 0x02:
    case 0x03:
      return key;
    case 0x04:
      key[0] = 0x02;
      break;
    case 0x05:
      key[0] = 0x03;
      break;
    default:
      throw new Error('Bad point format.');
  }

  // Decompress the key.
  const out = secp256k1.publicKeyConvert(key, false);

  // Reset the first byte so as not to
  // mutate the original buffer.
  key[0] = format;

  return out;
}

// Make eslint happy.
compressValue;
decompressValue;

/*
 * Expose
 */

exports.pack = compressOutput;
exports.unpack = decompressOutput;
exports.size = sizeOutput;


/***/ }),
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * jobs.js - worker jobs for wmcc_core.
 */



const secp256k1 = __webpack_require__(12);
const {derive} = __webpack_require__(44);
const hashcash = __webpack_require__(97);
const packets = __webpack_require__(53);

/**
 * @exports workers/jobs
 */

const jobs = exports;

/**
 * Execute a job on the worker.
 * @param {String} cmd
 * @param {Array} args
 * @returns {Object}
 * @throws on unknown command
 */

jobs.execute = function execute(p) {
  try {
    return jobs.handle(p);
  } catch (e) {
    return new packets.ErrorResultPacket(e);
  }
};

/**
 * Execute a job on the worker.
 * @param {String} cmd
 * @param {Array} args
 * @returns {Object}
 * @throws on unknown command
 */

jobs.handle = function handle(p) {
  switch (p.cmd) {
    case packets.types.CHECK:
      return jobs.check(p.tx, p.view, p.flags);
    case packets.types.CHECKINPUT:
      return jobs.checkInput(p.tx, p.index, p.coin, p.flags);
    case packets.types.SIGN:
      return jobs.sign(p.tx, p.rings, p.type);
    case packets.types.SIGNINPUT:
      return jobs.signInput(p.tx, p.index, p.coin, p.ring, p.type);
    case packets.types.ECVERIFY:
      return jobs.ecVerify(p.msg, p.sig, p.key);
    case packets.types.ECSIGN:
      return jobs.ecSign(p.msg, p.key);
    case packets.types.MINE:
      return jobs.mine(p.data, p.target, p.min, p.max);
    case packets.types.SCRYPT:
      return jobs.scrypt(p.passwd, p.salt, p.N, p.r, p.p, p.len);
    default:
      throw new Error(`Unknown command: "${p.cmd}".`);
  }
};

/**
 * Execute tx.check() on worker.
 * @see TX#check
 * @param {TX} tx
 * @param {CoinView} view
 * @param {VerifyFlags} flags
 * @returns {CheckResultPacket}
 */

jobs.check = function check(tx, view, flags) {
  try {
    tx.check(view, flags);
  } catch (err) {
    if (err.type === 'ScriptError')
      return new packets.CheckResultPacket(err);
    throw err;
  }
  return new packets.CheckResultPacket();
};

/**
 * Execute tx.checkInput() on worker.
 * @see TX#checkInput
 * @param {TX} tx
 * @param {Number} index
 * @param {Output} coin
 * @param {VerifyFlags} flags
 * @returns {CheckInputResultPacket}
 */

jobs.checkInput = function checkInput(tx, index, coin, flags) {
  try {
    tx.checkInput(index, coin, flags);
  } catch (err) {
    if (err.type === 'ScriptError')
      return new packets.CheckInputResultPacket(err);
    throw err;
  }
  return new packets.CheckInputResultPacket();
};

/**
 * Execute tx.sign() on worker.
 * @see MTX#sign
 * @param {MTX} tx
 * @param {KeyRing[]} ring
 * @param {SighashType} type
 */

jobs.sign = function sign(tx, ring, type) {
  const total = tx.sign(ring, type);
  return packets.SignResultPacket.fromTX(tx, total);
};

/**
 * Execute tx.signInput() on worker.
 * @see MTX#signInput
 * @param {MTX} tx
 * @param {Number} index
 * @param {Output} coin
 * @param {KeyRing} ring
 * @param {SighashType} type
 */

jobs.signInput = function signInput(tx, index, coin, ring, type) {
  const result = tx.signInput(tx, index, coin, ring, type);
  return packets.SignInputResultPacket.fromTX(tx, index, result);
};

/**
 * Execute secp256k1.verify() on worker.
 * @see secp256k1.verify
 * @param {TX} tx
 * @param {VerifyFlags} flags
 * @returns {Boolean}
 */

jobs.ecVerify = function ecVerify(msg, sig, key) {
  const result = secp256k1.verify(msg, sig, key);
  return new packets.ECVerifyResultPacket(result);
};

/**
 * Execute secp256k1.sign() on worker.
 * @see secp256k1.sign
 * @param {TX} tx
 * @param {Number} index
 * @param {VerifyFlags} flags
 * @returns {Boolean}
 */

jobs.ecSign = function ecSign(msg, key) {
  const sig = secp256k1.sign(msg, key);
  return new packets.ECSignResultPacket(sig);
};

/**
 * Mine a block on worker.
 * @param {Buffer} data
 * @param {Buffer} target
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */

jobs.mine = function mine(data, target, min, max) {
  const nonce = hashcash(data, target, min, max);
  return new packets.MineResultPacket(nonce);
};

/**
 * Execute scrypt() on worker.
 * @see scrypt
 * @param {Buffer} passwd
 * @param {Buffer} salt
 * @param {Number} N
 * @param {Number} r
 * @param {Number} p
 * @param {Number} len
 * @returns {Buffer}
 */

jobs.scrypt = function scrypt(passwd, salt, N, r, p, len) {
  const key = derive(passwd, salt, N, r, p, len);
  return new packets.ScryptResultPacket(key);
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * workers.js - worker processes for wmcc_core.
 */



const assert = __webpack_require__(0);
const EventEmitter = __webpack_require__(10);
const packets = __webpack_require__(53);

/**
 * Parser
 * @alias module:workers.Parser
 * @constructor
 */

function Parser() {
  if (!(this instanceof Parser))
    return new Parser();

  EventEmitter.call(this);

  this.waiting = 9;
  this.header = null;
  this.pending = [];
  this.total = 0;
}

Object.setPrototypeOf(Parser.prototype, EventEmitter.prototype);

Parser.prototype.feed = function feed(data) {
  this.total += data.length;
  this.pending.push(data);

  while (this.total >= this.waiting) {
    const chunk = this.read(this.waiting);
    this.parse(chunk);
  }
};

Parser.prototype.read = function read(size) {
  assert(this.total >= size, 'Reading too much.');

  if (size === 0)
    return Buffer.alloc(0);

  const pending = this.pending[0];

  if (pending.length > size) {
    const chunk = pending.slice(0, size);
    this.pending[0] = pending.slice(size);
    this.total -= chunk.length;
    return chunk;
  }

  if (pending.length === size) {
    const chunk = this.pending.shift();
    this.total -= chunk.length;
    return chunk;
  }

  const chunk = Buffer.allocUnsafe(size);
  let off = 0;

  while (off < chunk.length) {
    const pending = this.pending[0];
    const len = pending.copy(chunk, off);
    if (len === pending.length)
      this.pending.shift();
    else
      this.pending[0] = pending.slice(len);
    off += len;
  }

  assert.strictEqual(off, chunk.length);

  this.total -= chunk.length;

  return chunk;
};

Parser.prototype.parse = function parse(data) {
  let header = this.header;

  if (!header) {
    try {
      header = this.parseHeader(data);
    } catch (e) {
      this.emit('error', e);
      return;
    }

    this.header = header;
    this.waiting = header.size + 1;

    return;
  }

  this.waiting = 9;
  this.header = null;

  let packet;
  try {
    packet = this.parsePacket(header, data);
  } catch (e) {
    this.emit('error', e);
    return;
  }

  if (data[data.length - 1] !== 0x0a) {
    this.emit('error', new Error('No trailing newline.'));
    return;
  }

  packet.id = header.id;

  this.emit('packet', packet);
};

Parser.prototype.parseHeader = function parseHeader(data) {
  const id = data.readUInt32LE(0, true);
  const cmd = data.readUInt8(4, true);
  const size = data.readUInt32LE(5, true);
  return new Header(id, cmd, size);
};

Parser.prototype.parsePacket = function parsePacket(header, data) {
  switch (header.cmd) {
    case packets.types.ENV:
      return packets.EnvPacket.fromRaw(data);
    case packets.types.EVENT:
      return packets.EventPacket.fromRaw(data);
    case packets.types.LOG:
      return packets.LogPacket.fromRaw(data);
    case packets.types.ERROR:
      return packets.ErrorPacket.fromRaw(data);
    case packets.types.ERRORRESULT:
      return packets.ErrorResultPacket.fromRaw(data);
    case packets.types.CHECK:
      return packets.CheckPacket.fromRaw(data);
    case packets.types.CHECKRESULT:
      return packets.CheckResultPacket.fromRaw(data);
    case packets.types.SIGN:
      return packets.SignPacket.fromRaw(data);
    case packets.types.SIGNRESULT:
      return packets.SignResultPacket.fromRaw(data);
    case packets.types.CHECKINPUT:
      return packets.CheckInputPacket.fromRaw(data);
    case packets.types.CHECKINPUTRESULT:
      return packets.CheckInputResultPacket.fromRaw(data);
    case packets.types.SIGNINPUT:
      return packets.SignInputPacket.fromRaw(data);
    case packets.types.SIGNINPUTRESULT:
      return packets.SignInputResultPacket.fromRaw(data);
    case packets.types.ECVERIFY:
      return packets.ECVerifyPacket.fromRaw(data);
    case packets.types.ECVERIFYRESULT:
      return packets.ECVerifyResultPacket.fromRaw(data);
    case packets.types.ECSIGN:
      return packets.ECSignPacket.fromRaw(data);
    case packets.types.ECSIGNRESULT:
      return packets.ECSignResultPacket.fromRaw(data);
    case packets.types.MINE:
      return packets.MinePacket.fromRaw(data);
    case packets.types.MINERESULT:
      return packets.MineResultPacket.fromRaw(data);
    case packets.types.SCRYPT:
      return packets.ScryptPacket.fromRaw(data);
    case packets.types.SCRYPTRESULT:
      return packets.ScryptResultPacket.fromRaw(data);
    default:
      throw new Error('Unknown packet.');
  }
};

/**
 * Header
 * @constructor
 * @ignore
 */

function Header(id, cmd, size) {
  this.id = id;
  this.cmd = cmd;
  this.size = size;
}

/*
 * Expose
 */

module.exports = Parser;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * workers.js - worker processes for wmcc_core.
 */



const StaticWriter = __webpack_require__(4);

/**
 * Framer
 * @alias module:workers.Framer
 * @constructor
 */

function Framer() {
  if (!(this instanceof Framer))
    return new Framer();
}

Framer.prototype.packet = function packet(payload) {
  const size = 10 + payload.getSize();
  const bw = new StaticWriter(size);

  bw.writeU32(payload.id);
  bw.writeU8(payload.cmd);
  bw.seek(4);

  payload.toWriter(bw);

  bw.writeU8(0x0a);

  const msg = bw.render();
  msg.writeUInt32LE(msg.length - 10, 5, true);

  return msg;
};

/*
 * Expose
 */

module.exports = Framer;


/***/ }),
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * int64.js - int64 object for javascript.
 * Copyright (c) 2017, Christopher Jeffrey (MIT License).
 * https://github.com/chjj/n64
 */



/*
 * N64 (abstract)
 */

function N64(sign) {
  enforce(this instanceof N64, 'this', 'N64');
  enforce(sign === 0 || sign === 1, 'sign', 'bit');

  this.hi = 0;
  this.lo = 0;
  this.sign = sign;
}

/*
 * Addition
 */

N64.prototype._add = function _add(bhi, blo) {
  const ahi = this.hi;
  const alo = this.lo;

  // Credit to @indutny for this method.
  const lo = (alo + blo) | 0;

  const s = lo >> 31;
  const as = alo >> 31;
  const bs = blo >> 31;

  const c = ((as & bs) | (~s & (as ^ bs))) & 1;

  const hi = ((ahi + bhi) | 0) + c;

  this.hi = hi | 0;
  this.lo = lo;

  return this;
};

N64.prototype.iadd = function iadd(b) {
  enforce(N64.isN64(b), 'operand', 'int64');
  return this._add(b.hi, b.lo);
};

N64.prototype.iaddn = function iaddn(num) {
  enforce(isNumber(num), 'operand', 'number');
  return this._add((num >> 31) & -this.sign, num | 0);
};

N64.prototype.add = function add(b) {
  return this.clone().iadd(b);
};

N64.prototype.addn = function addn(num) {
  return this.clone().iaddn(num);
};

/*
 * Subtraction
 */

N64.prototype._sub = function _sub(bhi, blo) {
  bhi = ~bhi;
  blo = ~blo;

  if (blo === -1) {
    blo = 0;
    bhi += 1;
    bhi |= 0;
  } else {
    blo += 1;
  }

  return this._add(bhi, blo);
};

N64.prototype.isub = function isub(b) {
  enforce(N64.isN64(b), 'operand', 'int64');
  return this._sub(b.hi, b.lo);
};

N64.prototype.isubn = function isubn(num) {
  enforce(isNumber(num), 'operand', 'number');
  return this._sub((num >> 31) & -this.sign, num | 0);
};

N64.prototype.sub = function sub(b) {
  return this.clone().isub(b);
};

N64.prototype.subn = function subn(num) {
  return this.clone().isubn(num);
};

/*
 * Multiplication
 */

N64.prototype._mul = function _mul(bhi, blo) {
  const ahi = this.hi;
  const alo = this.lo;

  const a48 = ahi >>> 16;
  const a32 = ahi & 0xffff;
  const a16 = alo >>> 16;
  const a00 = alo & 0xffff;

  const b48 = bhi >>> 16;
  const b32 = bhi & 0xffff;
  const b16 = blo >>> 16;
  const b00 = blo & 0xffff;

  let c48 = 0;
  let c32 = 0;
  let c16 = 0;
  let c00 = 0;

  c00 += a00 * b00;
  c16 += c00 >>> 16;
  c00 &= 0xffff;
  c16 += a16 * b00;
  c32 += c16 >>> 16;
  c16 &= 0xffff;
  c16 += a00 * b16;
  c32 += c16 >>> 16;
  c16 &= 0xffff;
  c32 += a32 * b00;
  c48 += c32 >>> 16;
  c32 &= 0xffff;
  c32 += a16 * b16;
  c48 += c32 >>> 16;
  c32 &= 0xffff;
  c32 += a00 * b32;
  c48 += c32 >>> 16;
  c32 &= 0xffff;
  c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
  c48 &= 0xffff;

  const hi = (c48 << 16) | c32;
  const lo = (c16 << 16) | c00;

  this.hi = hi;
  this.lo = lo;

  return this;
};

N64.prototype.imul = function imul(b) {
  enforce(N64.isN64(b), 'multiplicand', 'int64');
  return this._mul(b.hi, b.lo);
};

N64.prototype.imuln = function imuln(num) {
  enforce(isNumber(num), 'multiplicand', 'number');
  return this._mul((num >> 31) & -this.sign, num | 0);
};

N64.prototype.mul = function mul(b) {
  return this.clone().imul(b);
};

N64.prototype.muln = function muln(num) {
  return this.clone().imuln(num);
};

/*
 * Division
 */

N64.prototype.idiv = function idiv(b) {
  let a = this;

  enforce(N64.isN64(b), 'divisor', 'int64');

  if (b.isZero())
    throw new Error('Cannot divide by zero.');

  if (a.isZero())
    return a;

  if (a.eq(b))
    return a.set(1);

  if (a.isSafe() && b.isSafe()) {
    const n = a.toDouble();
    const d = b.toDouble();
    const q = floor(n / d);
    return a.set(q);
  }

  let neg = false;

  if (a.sign) {
    if (a.hi < 0) {
      if (b.hi < 0) {
        a = a.ineg();
        b = b.neg();
      } else {
        a = a.ineg();
        neg = true;
      }
    } else if (b.hi < 0) {
      b = b.neg();
      neg = true;
    }
  }

  const n = a.toU64();
  const d = b.toU64();

  if (n.lt(d))
    return a.set(0);

  if (n.ushrn(1).lt(d))
    return a.set(neg ? -1 : 1);

  const q = new U64();
  const r = new U64();

  let bit = n.bitLength();

  while (bit--) {
    r.ishln(1);
    r.lo |= n.testn(bit);
    if (r.gte(d)) {
      r.isub(d);
      q.setn(bit, 1);
    }
  }

  a.hi = q.hi;
  a.lo = q.lo;

  if (neg)
    a.ineg();

  return a;
};

N64.prototype.idivn = function idivn(num) {
  enforce(isNumber(num), 'divisor', 'number');
  return this.idiv(this._small(num));
};

N64.prototype.div = function div(b) {
  return this.clone().idiv(b);
};

N64.prototype.divn = function divn(num) {
  return this.clone().idivn(num);
};

/*
 * Modulo
 */

N64.prototype.imod = function imod(b) {
  const a = this;

  enforce(N64.isN64(b), 'divisor', 'int64');

  if (b.isZero())
    throw new Error('Cannot divide by zero.');

  if (a.isZero())
    return a;

  if (a.eq(b))
    return a.set(0);

  if (a.isSafe() && b.isSafe()) {
    const n = a.toDouble();
    const d = b.toDouble();
    const r = n % d;
    return a.set(r);
  }

  return a.isub(a.div(b).imul(b));
};

N64.prototype.imodn = function imodn(num) {
  enforce(isNumber(num), 'divisor', 'number');
  return this.imod(this._small(num));
};

N64.prototype.mod = function mod(b) {
  return this.clone().imod(b);
};

N64.prototype.modn = function modn(num) {
  return this.clone().imodn(num);
};

/*
 * Exponentiation
 */

N64.prototype.ipow = function ipow(b) {
  enforce(N64.isN64(b), 'exponent', 'int64');
  return this.ipown(b.lo);
};

N64.prototype.ipown = function ipown(num) {
  enforce(isNumber(num), 'exponent', 'number');

  if (this.isZero())
    return this;

  const x = this.clone();
  const n = this;

  let y = num >>> 0;

  n.set(1);

  while (y > 0) {
    if (y & 1)
      n.imul(x);
    y >>>= 1;
    x.imul(x);
  }

  return n;
};

N64.prototype.pow = function pow(b) {
  return this.clone().ipow(b);
};

N64.prototype.pown = function pown(num) {
  return this.clone().ipown(num);
};

N64.prototype.sqr = function sqr() {
  return this.mul(this);
};

N64.prototype.isqr = function isqr() {
  return this.imul(this);
};

/*
 * AND
 */

N64.prototype.iand = function iand(b) {
  enforce(N64.isN64(b), 'operand', 'int64');
  this.hi &= b.hi;
  this.lo &= b.lo;
  return this;
};

N64.prototype.iandn = function iandn(num) {
  enforce(isNumber(num), 'operand', 'number');
  this.hi &= (num >> 31) & -this.sign;
  this.lo &= num | 0;
  return this;
};

N64.prototype.and = function and(b) {
  return this.clone().iand(b);
};

N64.prototype.andn = function andn(num) {
  return this.clone().iandn(num);
};

/*
 * OR
 */

N64.prototype.ior = function ior(b) {
  enforce(N64.isN64(b), 'operand', 'int64');
  this.hi |= b.hi;
  this.lo |= b.lo;
  return this;
};

N64.prototype.iorn = function iorn(num) {
  enforce(isNumber(num), 'operand', 'number');
  this.hi |= (num >> 31) & -this.sign;
  this.lo |= num | 0;
  return this;
};

N64.prototype.or = function or(b) {
  return this.clone().ior(b);
};

N64.prototype.orn = function orn(num) {
  return this.clone().iorn(num);
};

/*
 * XOR
 */

N64.prototype.ixor = function ixor(b) {
  enforce(N64.isN64(b), 'operand', 'int64');
  this.hi ^= b.hi;
  this.lo ^= b.lo;
  return this;
};

N64.prototype.ixorn = function ixorn(num) {
  enforce(isNumber(num), 'operand', 'number');
  this.hi ^= (num >> 31) & -this.sign;
  this.lo ^= num | 0;
  return this;
};

N64.prototype.xor = function xor(b) {
  return this.clone().ixor(b);
};

N64.prototype.xorn = function xorn(num) {
  return this.clone().ixorn(num);
};

/*
 * NOT
 */

N64.prototype.inot = function inot() {
  this.hi = ~this.hi;
  this.lo = ~this.lo;
  return this;
};

N64.prototype.not = function not() {
  return this.clone().inot();
};

/*
 * Left Shift
 */

N64.prototype.ishl = function ishl(b) {
  enforce(N64.isN64(b), 'bits', 'int64');
  return this.ishln(b.lo);
};

N64.prototype.ishln = function ishln(bits) {
  enforce(isNumber(bits), 'bits', 'number');

  bits &= 63;

  if (bits === 0)
    return this;

  let hi = this.hi;
  let lo = this.lo;

  if (bits < 32) {
    hi <<= bits;
    hi |= lo >>> (32 - bits);
    lo <<= bits;
  } else {
    hi = lo << (bits - 32);
    lo = 0;
  }

  this.hi = hi;
  this.lo = lo;

  return this;
};

N64.prototype.shl = function shl(b) {
  return this.clone().ishl(b);
};

N64.prototype.shln = function shln(bits) {
  return this.clone().ishln(bits);
};

/*
 * Right Shift
 */

N64.prototype.ishr = function ishr(b) {
  enforce(N64.isN64(b), 'bits', 'int64');
  return this.ishrn(b.lo);
};

N64.prototype.ishrn = function ishrn(bits) {
  if (!this.sign)
    return this.iushrn(bits);

  enforce(isNumber(bits), 'bits', 'number');

  bits &= 63;

  if (bits === 0)
    return this;

  let hi = this.hi;
  let lo = this.lo;

  if (bits < 32) {
    lo >>>= bits;
    lo |= hi << (32 - bits);
    hi >>= bits;
  } else {
    lo = hi >> (bits - 32);
    hi = hi >> 31;
  }

  this.hi = hi;
  this.lo = lo;

  return this;
};

N64.prototype.shr = function shr(b) {
  return this.clone().ishr(b);
};

N64.prototype.shrn = function shrn(bits) {
  return this.clone().ishrn(bits);
};

/*
 * Unsigned Right Shift
 */

N64.prototype.iushr = function iushr(b) {
  enforce(N64.isN64(b), 'bits', 'int64');
  return this.iushrn(b.lo);
};

N64.prototype.iushrn = function iushrn(bits) {
  enforce(isNumber(bits), 'bits', 'number');

  bits &= 63;

  if (bits === 0)
    return this;

  let hi = this.hi;
  let lo = this.lo;

  if (bits < 32) {
    lo >>>= bits;
    lo |= hi << (32 - bits);
    hi >>>= bits;
  } else {
    lo = hi >>> (bits - 32);
    hi = 0;
  }

  this.hi = hi | 0;
  this.lo = lo | 0;

  return this;
};

N64.prototype.ushr = function ushr(b) {
  return this.clone().iushr(b);
};

N64.prototype.ushrn = function ushrn(bits) {
  return this.clone().iushrn(bits);
};

/*
 * Bit Manipulation
 */

N64.prototype.setn = function setn(bit, val) {
  enforce(isNumber(bit), 'bit', 'number');

  bit &= 63;

  if (bit < 32) {
    if (val)
      this.lo |= (1 << bit);
    else
      this.lo &= ~(1 << bit);
  } else {
    if (val)
      this.hi |= (1 << (bit - 32));
    else
      this.hi &= ~(1 << (bit - 32));
  }

  return this;
};

N64.prototype.testn = function testn(bit) {
  enforce(isNumber(bit), 'bit', 'number');

  bit &= 63;

  if (bit < 32)
    return (this.lo >>> bit) & 1;

  return (this.hi >>> (bit - 32)) & 1;
};

N64.prototype.setb = function setb(pos, ch) {
  enforce(isNumber(pos), 'pos', 'number');
  enforce(isNumber(ch), 'ch', 'number');

  pos &= 7;
  ch &= 0xff;

  if (pos < 4) {
    this.lo &= ~(0xff << (pos * 8));
    this.lo |= ch << (pos * 8);
  } else {
    this.hi &= ~(0xff << ((pos - 4) * 8));
    this.hi |= ch << ((pos - 4) * 8);
  }

  return this;
};

N64.prototype.orb = function orb(pos, ch) {
  enforce(isNumber(pos), 'pos', 'number');
  enforce(isNumber(ch), 'ch', 'number');

  pos &= 7;
  ch &= 0xff;

  if (pos < 4)
    this.lo |= ch << (pos * 8);
  else
    this.hi |= ch << ((pos - 4) * 8);

  return this;
};

N64.prototype.getb = function getb(pos) {
  enforce(isNumber(pos), 'pos', 'number');

  pos &= 7;

  if (pos < 4)
    return (this.lo >> (pos * 8)) & 0xff;

  return (this.hi >> ((pos - 4) * 8)) & 0xff;
};

N64.prototype.imaskn = function imaskn(bit) {
  enforce(isNumber(bit), 'bit', 'number');

  bit &= 63;

  if (bit < 32) {
    this.hi = 0;
    this.lo &= (1 << bit) - 1;
  } else {
    this.hi &= (1 << (bit - 32)) - 1;
    this.lo &= 0xffffffff;
  }

  return this;
};

N64.prototype.maskn = function maskn(bit) {
  return this.clone().imaskn(bit);
};

N64.prototype.andln = function andln(num) {
  enforce(isNumber(num), 'operand', 'number');
  return this.lo & num;
};

/*
 * Negation
 */

N64.prototype.ineg = function ineg() {
  let hi = ~this.hi;
  let lo = ~this.lo;

  if (lo === -1) {
    lo = 0;
    hi += 1;
    hi |= 0;
  } else {
    lo += 1;
  }

  this.hi = hi;
  this.lo = lo;

  return this;
};

N64.prototype.neg = function neg() {
  return this.clone().ineg();
};

N64.prototype.iabs = function iabs() {
  if (this.isNeg())
    this.ineg();
  return this;
};

N64.prototype.abs = function abs() {
  return this.clone().iabs();
};

/*
 * Comparison
 */

N64.prototype._cmp = function _cmp(bhi, blo) {
  const a = this;

  let ahi = a.hi;
  let alo = a.lo;

  if (ahi === bhi && alo === blo)
    return 0;

  let neg = false;

  if (a.sign) {
    const x = ahi < 0;
    const y = bhi < 0;

    if (x && !y)
      return -1;

    if (!x && y)
      return 1;

    neg = x;
  }

  if (!neg) {
    ahi >>>= 0;
    bhi >>>= 0;
  }

  if (ahi < bhi)
    return -1;

  if (ahi > bhi)
    return 1;

  alo >>>= 0;
  blo >>>= 0;

  if (alo < blo)
    return -1;

  return 1;
};

N64.prototype.cmp = function cmp(b) {
  enforce(N64.isN64(b), 'value', 'int64');
  return this._cmp(b.hi, b.lo);
};

N64.prototype.cmpn = function cmpn(num) {
  enforce(isNumber(num), 'value', 'number');
  return this._cmp((num >> 31) & -this.sign, num | 0);
};

N64.prototype.eq = function eq(b) {
  enforce(N64.isN64(b), 'value', 'int64');
  return this.hi === b.hi && this.lo === b.lo;
};

N64.prototype.eqn = function eqn(num) {
  enforce(isNumber(num), 'value', 'number');
  return this.hi === ((num >> 31) & -this.sign) && this.lo === (num | 0);
};

N64.prototype.gt = function gt(b) {
  return this.cmp(b) > 0;
};

N64.prototype.gtn = function gtn(num) {
  return this.cmpn(num) > 0;
};

N64.prototype.gte = function gte(b) {
  return this.cmp(b) >= 0;
};

N64.prototype.gten = function gten(num) {
  return this.cmpn(num) >= 0;
};

N64.prototype.lt = function lt(b) {
  return this.cmp(b) < 0;
};

N64.prototype.ltn = function ltn(num) {
  return this.cmpn(num) < 0;
};

N64.prototype.lte = function lte(b) {
  return this.cmp(b) <= 0;
};

N64.prototype.lten = function lten(num) {
  return this.cmpn(num) <= 0;
};

N64.prototype.isZero = function isZero() {
  return this.hi === 0 && this.lo === 0;
};

N64.prototype.isNeg = function isNeg() {
  return this.sign === 1 && this.hi < 0;
};

N64.prototype.isOdd = function isOdd() {
  return (this.lo & 1) === 1;
};

N64.prototype.isEven = function isEven() {
  return (this.lo & 1) === 0;
};

/*
 * Helpers
 */

N64.prototype.clone = function clone() {
  const n = new this.constructor();
  n.hi = this.hi;
  n.lo = this.lo;
  return n;
};

N64.prototype.inject = function inject(b) {
  enforce(N64.isN64(b), 'value', 'int64');
  this.hi = b.hi;
  this.lo = b.lo;
  return this;
};

N64.prototype.set = function set(num) {
  enforce(isSafeInteger(num), 'number', 'integer');

  let neg = false;

  if (num < 0) {
    num = -num;
    neg = true;
  }

  this.hi = (num * (1 / 0x100000000)) | 0;
  this.lo = num | 0;

  if (neg)
    this.ineg();

  return this;
};

N64.prototype.join = function join(hi, lo) {
  enforce(isNumber(hi), 'hi', 'number');
  enforce(isNumber(lo), 'lo', 'number');
  this.hi = hi | 0;
  this.lo = lo | 0;
  return this;
};

N64.prototype._small = function _small(num) {
  const n = new this.constructor();
  n.hi = (num >> 31) & -this.sign;
  n.lo = num | 0;
  return n;
};

N64.prototype.bitLength = function bitLength() {
  let a = this;

  if (this.isNeg())
    a = this.neg();

  if (a.hi === 0)
    return countBits(a.lo);

  return countBits(a.hi) + 32;
};

N64.prototype.byteLength = function byteLength() {
  return Math.ceil(this.bitLength() / 8);
};

N64.prototype.isSafe = function isSafe() {
  let hi = this.hi;

  if (this.isNeg()) {
    hi = ~hi;
    if (this.lo === 0)
      hi += 1;
  }

  return (hi & 0xffe00000) === 0;
};

N64.prototype.inspect = function inspect() {
  let prefix = 'I64';

  if (!this.sign)
    prefix = 'U64';

  return `<${prefix}: ${this.toString(10)}>`;
};

/*
 * Encoding
 */

N64.prototype.readLE = function readLE(data, off) {
  enforce(data && typeof data.length === 'number', 'data', 'arraylike');
  enforce((off >> 0) === off, 'offset', 'integer');
  enforce(off + 8 <= data.length, 'offset', 'valid offset');
  this.lo = readI32LE(data, off);
  this.hi = readI32LE(data, off + 4);
  return off + 8;
};

N64.prototype.readBE = function readBE(data, off) {
  enforce(data && typeof data.length === 'number', 'data', 'arraylike');
  enforce((off >> 0) === off, 'offset', 'integer');
  enforce(off + 8 <= data.length, 'offset', 'valid offset');
  this.hi = readI32BE(data, off);
  this.lo = readI32BE(data, off + 4);
  return off + 8;
};

N64.prototype.readRaw = function readRaw(data, off) {
  return this.readLE(data, off);
};

N64.prototype.writeLE = function writeLE(data, off) {
  enforce(data && typeof data.length === 'number', 'data', 'arraylike');
  enforce((off >> 0) === off, 'offset', 'integer');
  enforce(off + 8 <= data.length, 'offset', 'valid offset');
  writeI32LE(data, this.lo, off);
  writeI32LE(data, this.hi, off + 4);
  return off + 8;
};

N64.prototype.writeBE = function writeBE(data, off) {
  enforce(data && typeof data.length === 'number', 'data', 'arraylike');
  enforce((off >> 0) === off, 'offset', 'integer');
  enforce(off + 8 <= data.length, 'offset', 'valid offset');
  writeI32BE(data, this.hi, off);
  writeI32BE(data, this.lo, off + 4);
  return off + 8;
};

N64.prototype.writeRaw = function writeRaw(data, off) {
  return this.writeLE(data, off);
};

/*
 * Conversion
 */

N64.prototype.toU64 = function toU64() {
  const n = new U64();
  n.hi = this.hi;
  n.lo = this.lo;
  return n;
};

N64.prototype.toI64 = function toI64() {
  const n = new I64();
  n.hi = this.hi;
  n.lo = this.lo;
  return n;
};

N64.prototype.toNumber = function toNumber() {
  if (!this.isSafe())
    throw new Error('Number exceeds 53 bits.');

  return this.toDouble();
};

N64.prototype.toDouble = function toDouble() {
  let hi = this.hi;

  if (!this.sign)
    hi >>>= 0;

  return hi * 0x100000000 + (this.lo >>> 0);
};

N64.prototype.toInt = function toInt() {
  return this.sign ? this.lo : this.lo >>> 0;
};

N64.prototype.toBool = function toBool() {
  return !this.isZero();
};

N64.prototype.toBits = function toBits() {
  return [this.hi, this.lo];
};

N64.prototype.toObject = function toObject() {
  return { hi: this.hi, lo: this.lo };
};

N64.prototype.toString = function toString(base, pad) {
  base = getBase(base);

  if (pad == null)
    pad = 0;

  enforce((base >>> 0) === base, 'base', 'integer');
  enforce((pad >>> 0) === pad, 'pad', 'integer');

  if (base < 2 || base > 16)
    throw new Error('Base ranges between 2 and 16.');

  if (pad > 64)
    throw new Error('Maximum padding is 64 characters.');

  let n = this;
  let neg = false;

  if (n.isNeg()) {
    n = n.neg();
    neg = true;
  }

  let hi = n.hi >>> 0;
  let lo = n.lo >>> 0;
  let str = '';

  do {
    const mhi = hi % base;
    hi -= mhi;
    hi /= base;
    lo += mhi * 0x100000000;

    const mlo = lo % base;
    lo -= mlo;
    lo /= base;

    let ch = mlo;

    if (ch < 10)
      ch += 0x30;
    else
      ch += 0x61 - 10;

    str = String.fromCharCode(ch) + str;
  } while (lo > 0 || hi > 0);

  while (str.length < pad)
    str = '0' + str;

  if (neg)
    str = '-' + str;

  return str;
};

N64.prototype.toJSON = function toJSON() {
  return this.toString(16, 16);
};

N64.prototype.toBN = function toBN(BN) {
  const neg = this.isNeg();

  let hi = this.hi;
  let lo = this.lo;

  if (neg) {
    hi = ~hi;
    lo = ~lo;
    if (lo === -1) {
      lo = 0;
      hi += 1;
      hi |= 0;
    } else {
      lo += 1;
    }
  }

  hi >>>= 0;
  lo >>>= 0;

  const num = new BN(hi);
  num.ishln(32);
  num.iadd(new BN(lo));

  if (neg)
    num.ineg();

  return num;
};

N64.prototype.toLE = function toLE(ArrayLike) {
  enforce(typeof ArrayLike === 'function', 'ArrayLike', 'constructor');
  const data = alloc(ArrayLike, 8);
  this.writeLE(data, 0);
  return data;
};

N64.prototype.toBE = function toBE(ArrayLike) {
  enforce(typeof ArrayLike === 'function', 'ArrayLike', 'constructor');
  const data = alloc(ArrayLike, 8);
  this.writeBE(data, 0);
  return data;
};

N64.prototype.toRaw = function toRaw(ArrayLike) {
  return this.toLE(ArrayLike);
};

/*
 * Instantiation
 */

N64.prototype.fromNumber = function fromNumber(num) {
  return this.set(num);
};

N64.prototype.fromInt = function fromInt(num) {
  enforce(isNumber(num), 'integer', 'number');
  return this.join((num >> 31) & -this.sign, num);
};

N64.prototype.fromBool = function fromBool(value) {
  enforce(typeof value === 'boolean', 'value', 'boolean');
  this.hi = 0;
  this.lo = value ? 1 : 0;
  return this;
};

N64.prototype.fromBits = function fromBits(hi, lo) {
  return this.join(hi, lo);
};

N64.prototype.fromObject = function fromObject(num) {
  enforce(num && typeof num === 'object', 'number', 'object');
  return this.fromBits(num.hi, num.lo);
};

N64.prototype.fromString = function fromString(str, base) {
  base = getBase(base);

  enforce(typeof str === 'string', 'string', 'string');
  enforce((base >>> 0) === base, 'base', 'integer');

  if (base < 2 || base > 16)
    throw new Error('Base ranges between 2 and 16.');

  let neg = false;
  let i = 0;

  if (str.length > 0 && str[0] === '-') {
    i += 1;
    neg = true;
  }

  if (str.length === i || str.length > i + 64)
    throw new Error('Invalid string (bad length).');

  let hi = 0;
  let lo = 0;

  for (; i < str.length; i++) {
    let ch = str.charCodeAt(i);

    if (ch >= 0x30 && ch <= 0x39)
      ch -= 0x30;
    else if (ch >= 0x41 && ch <= 0x5a)
      ch -= 0x41 - 10;
    else if (ch >= 0x61 && ch <= 0x7a)
      ch -= 0x61 - 10;
    else
      ch = base;

    if (ch >= base)
      throw new Error('Invalid string (parse error).');

    lo *= base;
    lo += ch;

    hi *= base;

    if (lo > 0xffffffff) {
      ch = lo % 0x100000000;
      hi += (lo - ch) / 0x100000000;
      lo = ch;
    }

    if (hi > 0xffffffff)
      throw new Error('Invalid string (overflow).');
  }

  this.hi = hi | 0;
  this.lo = lo | 0;

  if (neg)
    this.ineg();

  return this;
};

N64.prototype.fromJSON = function fromJSON(json) {
  return this.fromString(json, 16);
};

N64.prototype.fromBN = function fromBN(num) {
  enforce(num && isArray(num.words), 'number', 'big number');

  const a = this;
  const b = num.clone();
  const neg = b.isNeg();

  if (a.sign && b.testn(63))
    throw new Error('Big number overflow.');

  let i = 0;

  while (!b.isZero()) {
    if (i === 8)
      throw new Error('Big number overflow.');

    a.orb(i, b.andln(0xff));
    b.iushrn(8);
    i++;
  }

  if (neg)
    a.ineg();

  return a;
};

N64.prototype.fromLE = function fromLE(data) {
  this.readLE(data, 0);
  return this;
};

N64.prototype.fromBE = function fromBE(data) {
  this.readBE(data, 0);
  return this;
};

N64.prototype.fromRaw = function fromRaw(data) {
  return this.fromLE(data);
};

N64.prototype.from = function from(num, base) {
  if (num == null)
    return this;

  if (typeof num === 'number') {
    if (typeof base === 'number')
      return this.fromBits(num, base);
    return this.fromNumber(num);
  }

  if (typeof num === 'string')
    return this.fromString(num, base);

  if (typeof num === 'object') {
    if (isArray(num.words))
      return this.fromBN(num);

    if (typeof num.length === 'number')
      return this.fromRaw(num);

    return this.fromObject(num);
  }

  if (typeof num === 'boolean')
    return this.fromBool(num);

  throw new TypeError('Non-numeric object passed to N64.');
};

/*
 * Static Methods
 */

N64.min = function min(a, b) {
  return a.cmp(b) < 0 ? a : b;
};

N64.max = function max(a, b) {
  return a.cmp(b) > 0 ? a : b;
};

N64.random = function random() {
  const n = new this();
  n.hi = (Math.random() * 0x100000000) | 0;
  n.lo = (Math.random() * 0x100000000) | 0;
  return n;
};

N64.pow = function pow(num, exp) {
  return new this().fromInt(num).ipown(exp);
};

N64.shift = function shift(num, bits) {
  return new this().fromInt(num).ishln(bits);
};

N64.readLE = function readLE(data, off) {
  const n = new this();
  n.readLE(data, off);
  return n;
};

N64.readBE = function readBE(data, off) {
  const n = new this();
  n.readBE(data, off);
  return n;
};

N64.readRaw = function readRaw(data, off) {
  const n = new this();
  n.readRaw(data, off);
  return n;
};

N64.fromNumber = function fromNumber(num) {
  return new this().fromNumber(num);
};

N64.fromInt = function fromInt(num) {
  return new this().fromInt(num);
};

N64.fromBool = function fromBool(value) {
  return new this().fromBool(value);
};

N64.fromBits = function fromBits(hi, lo) {
  return new this().fromBits(hi, lo);
};

N64.fromObject = function fromObject(obj) {
  return new this().fromObject(obj);
};

N64.fromString = function fromString(str, base) {
  return new this().fromString(str, base);
};

N64.fromJSON = function fromJSON(json) {
  return new this().fromJSON(json);
};

N64.fromBN = function fromBN(num) {
  return new this().fromBN(num);
};

N64.fromLE = function fromLE(data) {
  return new this().fromLE(data);
};

N64.fromBE = function fromBE(data) {
  return new this().fromBE(data);
};

N64.fromRaw = function fromRaw(data) {
  return new this().fromRaw(data);
};

N64.from = function from(num, base) {
  return new this().from(num, base);
};

N64.isN64 = function isN64(obj) {
  return obj instanceof N64;
};

N64.isU64 = function isU64(obj) {
  return obj instanceof U64;
};

N64.isI64 = function isI64(obj) {
  return obj instanceof I64;
};

/*
 * U64
 */

function U64(num, base) {
  if (!(this instanceof U64))
    return new U64(num, base);

  N64.call(this, 0);

  this.from(num, base);
}

U64.__proto__ = N64;
U64.prototype.__proto__ = N64.prototype;

/*
 * Constants
 */

U64.ULONG_MIN = 0x00000000;
U64.ULONG_MAX = 0xffffffff;

U64.UINT32_MIN = U64(0x00000000, 0x00000000);
U64.UINT32_MAX = U64(0x00000000, 0xffffffff);

U64.UINT64_MIN = U64(0x00000000, 0x00000000);
U64.UINT64_MAX = U64(0xffffffff, 0xffffffff);

/*
 * I64
 */

function I64(num, base) {
  if (!(this instanceof I64))
    return new I64(num, base);

  N64.call(this, 1);

  this.from(num, base);
}

I64.__proto__ = N64;
I64.prototype.__proto__ = N64.prototype;

/*
 * Constants
 */

I64.LONG_MIN = -0x80000000;
I64.LONG_MAX = 0x7fffffff;

I64.INT32_MIN = I64(0xffffffff, 0x80000000);
I64.INT32_MAX = I64(0x00000000, 0x7fffffff);

I64.INT64_MIN = I64(0x80000000, 0x00000000);
I64.INT64_MAX = I64(0x7fffffff, 0xffffffff);

/*
 * Helpers
 */

function getBase(base) {
  if (base == null)
    return 10;

  if (typeof base === 'number')
    return base;

  switch (base) {
    case 'bin':
      return 2;
    case 'oct':
      return 8;
    case 'dec':
      return 10;
    case 'hex':
      return 16;
  }

  return 0;
}

function countBits(word) {
  if (Math.clz32)
    return 32 - Math.clz32(word);

  let bit = 31;

  for (; bit >= 0; bit--) {
    if ((word & (1 << bit)) !== 0)
      break;
  }

  return bit + 1;
}

function floor(n) {
  if (n < 0)
    return -Math.floor(-n);
  return Math.floor(n);
}

function enforce(value, name, type) {
  if (!value)
    throw new TypeError(`'${name}' must be a(n) ${type}.`);
}

function isNumber(num) {
  return typeof num === 'number' && isFinite(num);
}

function isArray(num) {
  if (Array.isArray)
    return Array.isArray(num);

  return ({}).toString.call(num).slice(8, -1) === 'Array';
}

function isSafeInteger(num) {
  if (Number.isSafeInteger)
    return Number.isSafeInteger(num);

  return isNumber(num)
    && Math.floor(num) === num
    && num >= -0x001fffffffffffff
    && num <= 0x001fffffffffffff;
}

function alloc(ArrayLike, size) {
  if (ArrayLike.allocUnsafe)
    return ArrayLike.allocUnsafe(size);

  return new ArrayLike(size);
}

function readI32LE(data, off) {
  return data[off]
    | (data[off + 1] << 8)
    | (data[off + 2] << 16)
    | (data[off + 3] << 24);
}

function readI32BE(data, off) {
  return (data[off] << 24)
    | (data[off + 1] << 16)
    | (data[off + 2] << 8)
    | data[off + 3];
}

function writeI32LE(data, num, off) {
  data[off] = num & 0xff;
  data[off + 1] = (num >>> 8) & 0xff;
  data[off + 2] = (num >>> 16) & 0xff;
  data[off + 3] = (num >>> 24) & 0xff;
}

function writeI32BE(data, num, off) {
  data[off] = (num >>> 24) & 0xff;
  data[off + 1] = (num >>> 16) & 0xff;
  data[off + 2] = (num >>> 8) & 0xff;
  data[off + 3] = num & 0xff;
}

/*
 * Expose
 */

exports.N64 = N64;
exports.U64 = U64;
exports.I64 = I64;


/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = require("wmcc-native");

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function (module, exports) {
  'use strict';

  // Utils
  function assert (val, msg) {
    if (!val) throw new Error(msg || 'Assertion failed');
  }

  // Could use `inherits` module, but don't want to move from single file
  // architecture yet.
  function inherits (ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function () {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  }

  // BN

  function BN (number, base, endian) {
    if (BN.isBN(number)) {
      return number;
    }

    this.negative = 0;
    this.words = null;
    this.length = 0;

    // Reduction context
    this.red = null;

    if (number !== null) {
      if (base === 'le' || base === 'be') {
        endian = base;
        base = 10;
      }

      this._init(number || 0, base || 10, endian || 'be');
    }
  }
  if (typeof module === 'object') {
    module.exports = BN;
  } else {
    exports.BN = BN;
  }

  BN.BN = BN;
  BN.wordSize = 26;

  var Buffer;
  try {
    Buffer = __webpack_require__(65).Buffer;
  } catch (e) {
  }

  BN.isBN = function isBN (num) {
    if (num instanceof BN) {
      return true;
    }

    return num !== null && typeof num === 'object' &&
      num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
  };

  BN.max = function max (left, right) {
    if (left.cmp(right) > 0) return left;
    return right;
  };

  BN.min = function min (left, right) {
    if (left.cmp(right) < 0) return left;
    return right;
  };

  BN.prototype._init = function init (number, base, endian) {
    if (typeof number === 'number') {
      return this._initNumber(number, base, endian);
    }

    if (typeof number === 'object') {
      return this._initArray(number, base, endian);
    }

    if (base === 'hex') {
      base = 16;
    }
    assert(base === (base | 0) && base >= 2 && base <= 36);

    number = number.toString().replace(/\s+/g, '');
    var start = 0;
    if (number[0] === '-') {
      start++;
    }

    if (base === 16) {
      this._parseHex(number, start);
    } else {
      this._parseBase(number, base, start);
    }

    if (number[0] === '-') {
      this.negative = 1;
    }

    this.strip();

    if (endian !== 'le') return;

    this._initArray(this.toArray(), base, endian);
  };

  BN.prototype._initNumber = function _initNumber (number, base, endian) {
    if (number < 0) {
      this.negative = 1;
      number = -number;
    }
    if (number < 0x4000000) {
      this.words = [ number & 0x3ffffff ];
      this.length = 1;
    } else if (number < 0x10000000000000) {
      this.words = [
        number & 0x3ffffff,
        (number / 0x4000000) & 0x3ffffff
      ];
      this.length = 2;
    } else {
      assert(number < 0x20000000000000); // 2 ^ 53 (unsafe)
      this.words = [
        number & 0x3ffffff,
        (number / 0x4000000) & 0x3ffffff,
        1
      ];
      this.length = 3;
    }

    if (endian !== 'le') return;

    // Reverse the bytes
    this._initArray(this.toArray(), base, endian);
  };

  BN.prototype._initArray = function _initArray (number, base, endian) {
    // Perhaps a Uint8Array
    assert(typeof number.length === 'number');
    if (number.length <= 0) {
      this.words = [ 0 ];
      this.length = 1;
      return this;
    }

    this.length = Math.ceil(number.length / 3);
    this.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      this.words[i] = 0;
    }

    var j, w;
    var off = 0;
    if (endian === 'be') {
      for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
        w = number[i] | (number[i - 1] << 8) | (number[i - 2] << 16);
        this.words[j] |= (w << off) & 0x3ffffff;
        this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
        off += 24;
        if (off >= 26) {
          off -= 26;
          j++;
        }
      }
    } else if (endian === 'le') {
      for (i = 0, j = 0; i < number.length; i += 3) {
        w = number[i] | (number[i + 1] << 8) | (number[i + 2] << 16);
        this.words[j] |= (w << off) & 0x3ffffff;
        this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
        off += 24;
        if (off >= 26) {
          off -= 26;
          j++;
        }
      }
    }
    return this.strip();
  };

  function parseHex (str, start, end) {
    var r = 0;
    var len = Math.min(str.length, end);
    for (var i = start; i < len; i++) {
      var c = str.charCodeAt(i) - 48;

      r <<= 4;

      // 'a' - 'f'
      if (c >= 49 && c <= 54) {
        r |= c - 49 + 0xa;

      // 'A' - 'F'
      } else if (c >= 17 && c <= 22) {
        r |= c - 17 + 0xa;

      // '0' - '9'
      } else {
        r |= c & 0xf;
      }
    }
    return r;
  }

  BN.prototype._parseHex = function _parseHex (number, start) {
    // Create possibly bigger array to ensure that it fits the number
    this.length = Math.ceil((number.length - start) / 6);
    this.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      this.words[i] = 0;
    }

    var j, w;
    // Scan 24-bit chunks and add them to the number
    var off = 0;
    for (i = number.length - 6, j = 0; i >= start; i -= 6) {
      w = parseHex(number, i, i + 6);
      this.words[j] |= (w << off) & 0x3ffffff;
      // NOTE: `0x3fffff` is intentional here, 26bits max shift + 24bit hex limb
      this.words[j + 1] |= w >>> (26 - off) & 0x3fffff;
      off += 24;
      if (off >= 26) {
        off -= 26;
        j++;
      }
    }
    if (i + 6 !== start) {
      w = parseHex(number, start, i + 6);
      this.words[j] |= (w << off) & 0x3ffffff;
      this.words[j + 1] |= w >>> (26 - off) & 0x3fffff;
    }
    this.strip();
  };

  function parseBase (str, start, end, mul) {
    var r = 0;
    var len = Math.min(str.length, end);
    for (var i = start; i < len; i++) {
      var c = str.charCodeAt(i) - 48;

      r *= mul;

      // 'a'
      if (c >= 49) {
        r += c - 49 + 0xa;

      // 'A'
      } else if (c >= 17) {
        r += c - 17 + 0xa;

      // '0' - '9'
      } else {
        r += c;
      }
    }
    return r;
  }

  BN.prototype._parseBase = function _parseBase (number, base, start) {
    // Initialize as zero
    this.words = [ 0 ];
    this.length = 1;

    // Find length of limb in base
    for (var limbLen = 0, limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base) {
      limbLen++;
    }
    limbLen--;
    limbPow = (limbPow / base) | 0;

    var total = number.length - start;
    var mod = total % limbLen;
    var end = Math.min(total, total - mod) + start;

    var word = 0;
    for (var i = start; i < end; i += limbLen) {
      word = parseBase(number, i, i + limbLen, base);

      this.imuln(limbPow);
      if (this.words[0] + word < 0x4000000) {
        this.words[0] += word;
      } else {
        this._iaddn(word);
      }
    }

    if (mod !== 0) {
      var pow = 1;
      word = parseBase(number, i, number.length, base);

      for (i = 0; i < mod; i++) {
        pow *= base;
      }

      this.imuln(pow);
      if (this.words[0] + word < 0x4000000) {
        this.words[0] += word;
      } else {
        this._iaddn(word);
      }
    }
  };

  BN.prototype.copy = function copy (dest) {
    dest.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      dest.words[i] = this.words[i];
    }
    dest.length = this.length;
    dest.negative = this.negative;
    dest.red = this.red;
  };

  BN.prototype.clone = function clone () {
    var r = new BN(null);
    this.copy(r);
    return r;
  };

  BN.prototype._expand = function _expand (size) {
    while (this.length < size) {
      this.words[this.length++] = 0;
    }
    return this;
  };

  // Remove leading `0` from `this`
  BN.prototype.strip = function strip () {
    while (this.length > 1 && this.words[this.length - 1] === 0) {
      this.length--;
    }
    return this._normSign();
  };

  BN.prototype._normSign = function _normSign () {
    // -0 = 0
    if (this.length === 1 && this.words[0] === 0) {
      this.negative = 0;
    }
    return this;
  };

  BN.prototype.inspect = function inspect () {
    return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
  };

  /*

  var zeros = [];
  var groupSizes = [];
  var groupBases = [];

  var s = '';
  var i = -1;
  while (++i < BN.wordSize) {
    zeros[i] = s;
    s += '0';
  }
  groupSizes[0] = 0;
  groupSizes[1] = 0;
  groupBases[0] = 0;
  groupBases[1] = 0;
  var base = 2 - 1;
  while (++base < 36 + 1) {
    var groupSize = 0;
    var groupBase = 1;
    while (groupBase < (1 << BN.wordSize) / base) {
      groupBase *= base;
      groupSize += 1;
    }
    groupSizes[base] = groupSize;
    groupBases[base] = groupBase;
  }

  */

  var zeros = [
    '',
    '0',
    '00',
    '000',
    '0000',
    '00000',
    '000000',
    '0000000',
    '00000000',
    '000000000',
    '0000000000',
    '00000000000',
    '000000000000',
    '0000000000000',
    '00000000000000',
    '000000000000000',
    '0000000000000000',
    '00000000000000000',
    '000000000000000000',
    '0000000000000000000',
    '00000000000000000000',
    '000000000000000000000',
    '0000000000000000000000',
    '00000000000000000000000',
    '000000000000000000000000',
    '0000000000000000000000000'
  ];

  var groupSizes = [
    0, 0,
    25, 16, 12, 11, 10, 9, 8,
    8, 7, 7, 7, 7, 6, 6,
    6, 6, 6, 6, 6, 5, 5,
    5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5
  ];

  var groupBases = [
    0, 0,
    33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216,
    43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625,
    16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632,
    6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149,
    24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176
  ];

  BN.prototype.toString = function toString (base, padding) {
    base = base || 10;
    padding = padding | 0 || 1;

    var out;
    if (base === 16 || base === 'hex') {
      out = '';
      var off = 0;
      var carry = 0;
      for (var i = 0; i < this.length; i++) {
        var w = this.words[i];
        var word = (((w << off) | carry) & 0xffffff).toString(16);
        carry = (w >>> (24 - off)) & 0xffffff;
        if (carry !== 0 || i !== this.length - 1) {
          out = zeros[6 - word.length] + word + out;
        } else {
          out = word + out;
        }
        off += 2;
        if (off >= 26) {
          off -= 26;
          i--;
        }
      }
      if (carry !== 0) {
        out = carry.toString(16) + out;
      }
      while (out.length % padding !== 0) {
        out = '0' + out;
      }
      if (this.negative !== 0) {
        out = '-' + out;
      }
      return out;
    }

    if (base === (base | 0) && base >= 2 && base <= 36) {
      // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
      var groupSize = groupSizes[base];
      // var groupBase = Math.pow(base, groupSize);
      var groupBase = groupBases[base];
      out = '';
      var c = this.clone();
      c.negative = 0;
      while (!c.isZero()) {
        var r = c.modn(groupBase).toString(base);
        c = c.idivn(groupBase);

        if (!c.isZero()) {
          out = zeros[groupSize - r.length] + r + out;
        } else {
          out = r + out;
        }
      }
      if (this.isZero()) {
        out = '0' + out;
      }
      while (out.length % padding !== 0) {
        out = '0' + out;
      }
      if (this.negative !== 0) {
        out = '-' + out;
      }
      return out;
    }

    assert(false, 'Base should be between 2 and 36');
  };

  BN.prototype.toNumber = function toNumber () {
    var ret = this.words[0];
    if (this.length === 2) {
      ret += this.words[1] * 0x4000000;
    } else if (this.length === 3 && this.words[2] === 0x01) {
      // NOTE: at this stage it is known that the top bit is set
      ret += 0x10000000000000 + (this.words[1] * 0x4000000);
    } else if (this.length > 2) {
      assert(false, 'Number can only safely store up to 53 bits');
    }
    return (this.negative !== 0) ? -ret : ret;
  };

  BN.prototype.toJSON = function toJSON () {
    return this.toString(16);
  };

  BN.prototype.toBuffer = function toBuffer (endian, length) {
    assert(typeof Buffer !== 'undefined');
    return this.toArrayLike(Buffer, endian, length);
  };

  BN.prototype.toArray = function toArray (endian, length) {
    return this.toArrayLike(Array, endian, length);
  };

  BN.prototype.toArrayLike = function toArrayLike (ArrayType, endian, length) {
    var byteLength = this.byteLength();
    var reqLength = length || Math.max(1, byteLength);
    assert(byteLength <= reqLength, 'byte array longer than desired length');
    assert(reqLength > 0, 'Requested array length <= 0');

    this.strip();
    var littleEndian = endian === 'le';
    var res = new ArrayType(reqLength);

    var b, i;
    var q = this.clone();
    if (!littleEndian) {
      // Assume big-endian
      for (i = 0; i < reqLength - byteLength; i++) {
        res[i] = 0;
      }

      for (i = 0; !q.isZero(); i++) {
        b = q.andln(0xff);
        q.iushrn(8);

        res[reqLength - i - 1] = b;
      }
    } else {
      for (i = 0; !q.isZero(); i++) {
        b = q.andln(0xff);
        q.iushrn(8);

        res[i] = b;
      }

      for (; i < reqLength; i++) {
        res[i] = 0;
      }
    }

    return res;
  };

  if (Math.clz32) {
    BN.prototype._countBits = function _countBits (w) {
      return 32 - Math.clz32(w);
    };
  } else {
    BN.prototype._countBits = function _countBits (w) {
      var t = w;
      var r = 0;
      if (t >= 0x1000) {
        r += 13;
        t >>>= 13;
      }
      if (t >= 0x40) {
        r += 7;
        t >>>= 7;
      }
      if (t >= 0x8) {
        r += 4;
        t >>>= 4;
      }
      if (t >= 0x02) {
        r += 2;
        t >>>= 2;
      }
      return r + t;
    };
  }

  BN.prototype._zeroBits = function _zeroBits (w) {
    // Short-cut
    if (w === 0) return 26;

    var t = w;
    var r = 0;
    if ((t & 0x1fff) === 0) {
      r += 13;
      t >>>= 13;
    }
    if ((t & 0x7f) === 0) {
      r += 7;
      t >>>= 7;
    }
    if ((t & 0xf) === 0) {
      r += 4;
      t >>>= 4;
    }
    if ((t & 0x3) === 0) {
      r += 2;
      t >>>= 2;
    }
    if ((t & 0x1) === 0) {
      r++;
    }
    return r;
  };

  // Return number of used bits in a BN
  BN.prototype.bitLength = function bitLength () {
    var w = this.words[this.length - 1];
    var hi = this._countBits(w);
    return (this.length - 1) * 26 + hi;
  };

  function toBitArray (num) {
    var w = new Array(num.bitLength());

    for (var bit = 0; bit < w.length; bit++) {
      var off = (bit / 26) | 0;
      var wbit = bit % 26;

      w[bit] = (num.words[off] & (1 << wbit)) >>> wbit;
    }

    return w;
  }

  // Number of trailing zero bits
  BN.prototype.zeroBits = function zeroBits () {
    if (this.isZero()) return 0;

    var r = 0;
    for (var i = 0; i < this.length; i++) {
      var b = this._zeroBits(this.words[i]);
      r += b;
      if (b !== 26) break;
    }
    return r;
  };

  BN.prototype.byteLength = function byteLength () {
    return Math.ceil(this.bitLength() / 8);
  };

  BN.prototype.toTwos = function toTwos (width) {
    if (this.negative !== 0) {
      return this.abs().inotn(width).iaddn(1);
    }
    return this.clone();
  };

  BN.prototype.fromTwos = function fromTwos (width) {
    if (this.testn(width - 1)) {
      return this.notn(width).iaddn(1).ineg();
    }
    return this.clone();
  };

  BN.prototype.isNeg = function isNeg () {
    return this.negative !== 0;
  };

  // Return negative clone of `this`
  BN.prototype.neg = function neg () {
    return this.clone().ineg();
  };

  BN.prototype.ineg = function ineg () {
    if (!this.isZero()) {
      this.negative ^= 1;
    }

    return this;
  };

  // Or `num` with `this` in-place
  BN.prototype.iuor = function iuor (num) {
    while (this.length < num.length) {
      this.words[this.length++] = 0;
    }

    for (var i = 0; i < num.length; i++) {
      this.words[i] = this.words[i] | num.words[i];
    }

    return this.strip();
  };

  BN.prototype.ior = function ior (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuor(num);
  };

  // Or `num` with `this`
  BN.prototype.or = function or (num) {
    if (this.length > num.length) return this.clone().ior(num);
    return num.clone().ior(this);
  };

  BN.prototype.uor = function uor (num) {
    if (this.length > num.length) return this.clone().iuor(num);
    return num.clone().iuor(this);
  };

  // And `num` with `this` in-place
  BN.prototype.iuand = function iuand (num) {
    // b = min-length(num, this)
    var b;
    if (this.length > num.length) {
      b = num;
    } else {
      b = this;
    }

    for (var i = 0; i < b.length; i++) {
      this.words[i] = this.words[i] & num.words[i];
    }

    this.length = b.length;

    return this.strip();
  };

  BN.prototype.iand = function iand (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuand(num);
  };

  // And `num` with `this`
  BN.prototype.and = function and (num) {
    if (this.length > num.length) return this.clone().iand(num);
    return num.clone().iand(this);
  };

  BN.prototype.uand = function uand (num) {
    if (this.length > num.length) return this.clone().iuand(num);
    return num.clone().iuand(this);
  };

  // Xor `num` with `this` in-place
  BN.prototype.iuxor = function iuxor (num) {
    // a.length > b.length
    var a;
    var b;
    if (this.length > num.length) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    for (var i = 0; i < b.length; i++) {
      this.words[i] = a.words[i] ^ b.words[i];
    }

    if (this !== a) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    this.length = a.length;

    return this.strip();
  };

  BN.prototype.ixor = function ixor (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuxor(num);
  };

  // Xor `num` with `this`
  BN.prototype.xor = function xor (num) {
    if (this.length > num.length) return this.clone().ixor(num);
    return num.clone().ixor(this);
  };

  BN.prototype.uxor = function uxor (num) {
    if (this.length > num.length) return this.clone().iuxor(num);
    return num.clone().iuxor(this);
  };

  // Not ``this`` with ``width`` bitwidth
  BN.prototype.inotn = function inotn (width) {
    assert(typeof width === 'number' && width >= 0);

    var bytesNeeded = Math.ceil(width / 26) | 0;
    var bitsLeft = width % 26;

    // Extend the buffer with leading zeroes
    this._expand(bytesNeeded);

    if (bitsLeft > 0) {
      bytesNeeded--;
    }

    // Handle complete words
    for (var i = 0; i < bytesNeeded; i++) {
      this.words[i] = ~this.words[i] & 0x3ffffff;
    }

    // Handle the residue
    if (bitsLeft > 0) {
      this.words[i] = ~this.words[i] & (0x3ffffff >> (26 - bitsLeft));
    }

    // And remove leading zeroes
    return this.strip();
  };

  BN.prototype.notn = function notn (width) {
    return this.clone().inotn(width);
  };

  // Set `bit` of `this`
  BN.prototype.setn = function setn (bit, val) {
    assert(typeof bit === 'number' && bit >= 0);

    var off = (bit / 26) | 0;
    var wbit = bit % 26;

    this._expand(off + 1);

    if (val) {
      this.words[off] = this.words[off] | (1 << wbit);
    } else {
      this.words[off] = this.words[off] & ~(1 << wbit);
    }

    return this.strip();
  };

  // Add `num` to `this` in-place
  BN.prototype.iadd = function iadd (num) {
    var r;

    // negative + positive
    if (this.negative !== 0 && num.negative === 0) {
      this.negative = 0;
      r = this.isub(num);
      this.negative ^= 1;
      return this._normSign();

    // positive + negative
    } else if (this.negative === 0 && num.negative !== 0) {
      num.negative = 0;
      r = this.isub(num);
      num.negative = 1;
      return r._normSign();
    }

    // a.length > b.length
    var a, b;
    if (this.length > num.length) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    var carry = 0;
    for (var i = 0; i < b.length; i++) {
      r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
      this.words[i] = r & 0x3ffffff;
      carry = r >>> 26;
    }
    for (; carry !== 0 && i < a.length; i++) {
      r = (a.words[i] | 0) + carry;
      this.words[i] = r & 0x3ffffff;
      carry = r >>> 26;
    }

    this.length = a.length;
    if (carry !== 0) {
      this.words[this.length] = carry;
      this.length++;
    // Copy the rest of the words
    } else if (a !== this) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    return this;
  };

  // Add `num` to `this`
  BN.prototype.add = function add (num) {
    var res;
    if (num.negative !== 0 && this.negative === 0) {
      num.negative = 0;
      res = this.sub(num);
      num.negative ^= 1;
      return res;
    } else if (num.negative === 0 && this.negative !== 0) {
      this.negative = 0;
      res = num.sub(this);
      this.negative = 1;
      return res;
    }

    if (this.length > num.length) return this.clone().iadd(num);

    return num.clone().iadd(this);
  };

  // Subtract `num` from `this` in-place
  BN.prototype.isub = function isub (num) {
    // this - (-num) = this + num
    if (num.negative !== 0) {
      num.negative = 0;
      var r = this.iadd(num);
      num.negative = 1;
      return r._normSign();

    // -this - num = -(this + num)
    } else if (this.negative !== 0) {
      this.negative = 0;
      this.iadd(num);
      this.negative = 1;
      return this._normSign();
    }

    // At this point both numbers are positive
    var cmp = this.cmp(num);

    // Optimization - zeroify
    if (cmp === 0) {
      this.negative = 0;
      this.length = 1;
      this.words[0] = 0;
      return this;
    }

    // a > b
    var a, b;
    if (cmp > 0) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    var carry = 0;
    for (var i = 0; i < b.length; i++) {
      r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
      carry = r >> 26;
      this.words[i] = r & 0x3ffffff;
    }
    for (; carry !== 0 && i < a.length; i++) {
      r = (a.words[i] | 0) + carry;
      carry = r >> 26;
      this.words[i] = r & 0x3ffffff;
    }

    // Copy rest of the words
    if (carry === 0 && i < a.length && a !== this) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    this.length = Math.max(this.length, i);

    if (a !== this) {
      this.negative = 1;
    }

    return this.strip();
  };

  // Subtract `num` from `this`
  BN.prototype.sub = function sub (num) {
    return this.clone().isub(num);
  };

  function smallMulTo (self, num, out) {
    out.negative = num.negative ^ self.negative;
    var len = (self.length + num.length) | 0;
    out.length = len;
    len = (len - 1) | 0;

    // Peel one iteration (compiler can't do it, because of code complexity)
    var a = self.words[0] | 0;
    var b = num.words[0] | 0;
    var r = a * b;

    var lo = r & 0x3ffffff;
    var carry = (r / 0x4000000) | 0;
    out.words[0] = lo;

    for (var k = 1; k < len; k++) {
      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
      // note that ncarry could be >= 0x3ffffff
      var ncarry = carry >>> 26;
      var rword = carry & 0x3ffffff;
      var maxJ = Math.min(k, num.length - 1);
      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
        var i = (k - j) | 0;
        a = self.words[i] | 0;
        b = num.words[j] | 0;
        r = a * b + rword;
        ncarry += (r / 0x4000000) | 0;
        rword = r & 0x3ffffff;
      }
      out.words[k] = rword | 0;
      carry = ncarry | 0;
    }
    if (carry !== 0) {
      out.words[k] = carry | 0;
    } else {
      out.length--;
    }

    return out.strip();
  }

  // TODO(indutny): it may be reasonable to omit it for users who don't need
  // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
  // multiplication (like elliptic secp256k1).
  var comb10MulTo = function comb10MulTo (self, num, out) {
    var a = self.words;
    var b = num.words;
    var o = out.words;
    var c = 0;
    var lo;
    var mid;
    var hi;
    var a0 = a[0] | 0;
    var al0 = a0 & 0x1fff;
    var ah0 = a0 >>> 13;
    var a1 = a[1] | 0;
    var al1 = a1 & 0x1fff;
    var ah1 = a1 >>> 13;
    var a2 = a[2] | 0;
    var al2 = a2 & 0x1fff;
    var ah2 = a2 >>> 13;
    var a3 = a[3] | 0;
    var al3 = a3 & 0x1fff;
    var ah3 = a3 >>> 13;
    var a4 = a[4] | 0;
    var al4 = a4 & 0x1fff;
    var ah4 = a4 >>> 13;
    var a5 = a[5] | 0;
    var al5 = a5 & 0x1fff;
    var ah5 = a5 >>> 13;
    var a6 = a[6] | 0;
    var al6 = a6 & 0x1fff;
    var ah6 = a6 >>> 13;
    var a7 = a[7] | 0;
    var al7 = a7 & 0x1fff;
    var ah7 = a7 >>> 13;
    var a8 = a[8] | 0;
    var al8 = a8 & 0x1fff;
    var ah8 = a8 >>> 13;
    var a9 = a[9] | 0;
    var al9 = a9 & 0x1fff;
    var ah9 = a9 >>> 13;
    var b0 = b[0] | 0;
    var bl0 = b0 & 0x1fff;
    var bh0 = b0 >>> 13;
    var b1 = b[1] | 0;
    var bl1 = b1 & 0x1fff;
    var bh1 = b1 >>> 13;
    var b2 = b[2] | 0;
    var bl2 = b2 & 0x1fff;
    var bh2 = b2 >>> 13;
    var b3 = b[3] | 0;
    var bl3 = b3 & 0x1fff;
    var bh3 = b3 >>> 13;
    var b4 = b[4] | 0;
    var bl4 = b4 & 0x1fff;
    var bh4 = b4 >>> 13;
    var b5 = b[5] | 0;
    var bl5 = b5 & 0x1fff;
    var bh5 = b5 >>> 13;
    var b6 = b[6] | 0;
    var bl6 = b6 & 0x1fff;
    var bh6 = b6 >>> 13;
    var b7 = b[7] | 0;
    var bl7 = b7 & 0x1fff;
    var bh7 = b7 >>> 13;
    var b8 = b[8] | 0;
    var bl8 = b8 & 0x1fff;
    var bh8 = b8 >>> 13;
    var b9 = b[9] | 0;
    var bl9 = b9 & 0x1fff;
    var bh9 = b9 >>> 13;

    out.negative = self.negative ^ num.negative;
    out.length = 19;
    /* k = 0 */
    lo = Math.imul(al0, bl0);
    mid = Math.imul(al0, bh0);
    mid = (mid + Math.imul(ah0, bl0)) | 0;
    hi = Math.imul(ah0, bh0);
    var w0 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w0 >>> 26)) | 0;
    w0 &= 0x3ffffff;
    /* k = 1 */
    lo = Math.imul(al1, bl0);
    mid = Math.imul(al1, bh0);
    mid = (mid + Math.imul(ah1, bl0)) | 0;
    hi = Math.imul(ah1, bh0);
    lo = (lo + Math.imul(al0, bl1)) | 0;
    mid = (mid + Math.imul(al0, bh1)) | 0;
    mid = (mid + Math.imul(ah0, bl1)) | 0;
    hi = (hi + Math.imul(ah0, bh1)) | 0;
    var w1 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w1 >>> 26)) | 0;
    w1 &= 0x3ffffff;
    /* k = 2 */
    lo = Math.imul(al2, bl0);
    mid = Math.imul(al2, bh0);
    mid = (mid + Math.imul(ah2, bl0)) | 0;
    hi = Math.imul(ah2, bh0);
    lo = (lo + Math.imul(al1, bl1)) | 0;
    mid = (mid + Math.imul(al1, bh1)) | 0;
    mid = (mid + Math.imul(ah1, bl1)) | 0;
    hi = (hi + Math.imul(ah1, bh1)) | 0;
    lo = (lo + Math.imul(al0, bl2)) | 0;
    mid = (mid + Math.imul(al0, bh2)) | 0;
    mid = (mid + Math.imul(ah0, bl2)) | 0;
    hi = (hi + Math.imul(ah0, bh2)) | 0;
    var w2 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w2 >>> 26)) | 0;
    w2 &= 0x3ffffff;
    /* k = 3 */
    lo = Math.imul(al3, bl0);
    mid = Math.imul(al3, bh0);
    mid = (mid + Math.imul(ah3, bl0)) | 0;
    hi = Math.imul(ah3, bh0);
    lo = (lo + Math.imul(al2, bl1)) | 0;
    mid = (mid + Math.imul(al2, bh1)) | 0;
    mid = (mid + Math.imul(ah2, bl1)) | 0;
    hi = (hi + Math.imul(ah2, bh1)) | 0;
    lo = (lo + Math.imul(al1, bl2)) | 0;
    mid = (mid + Math.imul(al1, bh2)) | 0;
    mid = (mid + Math.imul(ah1, bl2)) | 0;
    hi = (hi + Math.imul(ah1, bh2)) | 0;
    lo = (lo + Math.imul(al0, bl3)) | 0;
    mid = (mid + Math.imul(al0, bh3)) | 0;
    mid = (mid + Math.imul(ah0, bl3)) | 0;
    hi = (hi + Math.imul(ah0, bh3)) | 0;
    var w3 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w3 >>> 26)) | 0;
    w3 &= 0x3ffffff;
    /* k = 4 */
    lo = Math.imul(al4, bl0);
    mid = Math.imul(al4, bh0);
    mid = (mid + Math.imul(ah4, bl0)) | 0;
    hi = Math.imul(ah4, bh0);
    lo = (lo + Math.imul(al3, bl1)) | 0;
    mid = (mid + Math.imul(al3, bh1)) | 0;
    mid = (mid + Math.imul(ah3, bl1)) | 0;
    hi = (hi + Math.imul(ah3, bh1)) | 0;
    lo = (lo + Math.imul(al2, bl2)) | 0;
    mid = (mid + Math.imul(al2, bh2)) | 0;
    mid = (mid + Math.imul(ah2, bl2)) | 0;
    hi = (hi + Math.imul(ah2, bh2)) | 0;
    lo = (lo + Math.imul(al1, bl3)) | 0;
    mid = (mid + Math.imul(al1, bh3)) | 0;
    mid = (mid + Math.imul(ah1, bl3)) | 0;
    hi = (hi + Math.imul(ah1, bh3)) | 0;
    lo = (lo + Math.imul(al0, bl4)) | 0;
    mid = (mid + Math.imul(al0, bh4)) | 0;
    mid = (mid + Math.imul(ah0, bl4)) | 0;
    hi = (hi + Math.imul(ah0, bh4)) | 0;
    var w4 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w4 >>> 26)) | 0;
    w4 &= 0x3ffffff;
    /* k = 5 */
    lo = Math.imul(al5, bl0);
    mid = Math.imul(al5, bh0);
    mid = (mid + Math.imul(ah5, bl0)) | 0;
    hi = Math.imul(ah5, bh0);
    lo = (lo + Math.imul(al4, bl1)) | 0;
    mid = (mid + Math.imul(al4, bh1)) | 0;
    mid = (mid + Math.imul(ah4, bl1)) | 0;
    hi = (hi + Math.imul(ah4, bh1)) | 0;
    lo = (lo + Math.imul(al3, bl2)) | 0;
    mid = (mid + Math.imul(al3, bh2)) | 0;
    mid = (mid + Math.imul(ah3, bl2)) | 0;
    hi = (hi + Math.imul(ah3, bh2)) | 0;
    lo = (lo + Math.imul(al2, bl3)) | 0;
    mid = (mid + Math.imul(al2, bh3)) | 0;
    mid = (mid + Math.imul(ah2, bl3)) | 0;
    hi = (hi + Math.imul(ah2, bh3)) | 0;
    lo = (lo + Math.imul(al1, bl4)) | 0;
    mid = (mid + Math.imul(al1, bh4)) | 0;
    mid = (mid + Math.imul(ah1, bl4)) | 0;
    hi = (hi + Math.imul(ah1, bh4)) | 0;
    lo = (lo + Math.imul(al0, bl5)) | 0;
    mid = (mid + Math.imul(al0, bh5)) | 0;
    mid = (mid + Math.imul(ah0, bl5)) | 0;
    hi = (hi + Math.imul(ah0, bh5)) | 0;
    var w5 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w5 >>> 26)) | 0;
    w5 &= 0x3ffffff;
    /* k = 6 */
    lo = Math.imul(al6, bl0);
    mid = Math.imul(al6, bh0);
    mid = (mid + Math.imul(ah6, bl0)) | 0;
    hi = Math.imul(ah6, bh0);
    lo = (lo + Math.imul(al5, bl1)) | 0;
    mid = (mid + Math.imul(al5, bh1)) | 0;
    mid = (mid + Math.imul(ah5, bl1)) | 0;
    hi = (hi + Math.imul(ah5, bh1)) | 0;
    lo = (lo + Math.imul(al4, bl2)) | 0;
    mid = (mid + Math.imul(al4, bh2)) | 0;
    mid = (mid + Math.imul(ah4, bl2)) | 0;
    hi = (hi + Math.imul(ah4, bh2)) | 0;
    lo = (lo + Math.imul(al3, bl3)) | 0;
    mid = (mid + Math.imul(al3, bh3)) | 0;
    mid = (mid + Math.imul(ah3, bl3)) | 0;
    hi = (hi + Math.imul(ah3, bh3)) | 0;
    lo = (lo + Math.imul(al2, bl4)) | 0;
    mid = (mid + Math.imul(al2, bh4)) | 0;
    mid = (mid + Math.imul(ah2, bl4)) | 0;
    hi = (hi + Math.imul(ah2, bh4)) | 0;
    lo = (lo + Math.imul(al1, bl5)) | 0;
    mid = (mid + Math.imul(al1, bh5)) | 0;
    mid = (mid + Math.imul(ah1, bl5)) | 0;
    hi = (hi + Math.imul(ah1, bh5)) | 0;
    lo = (lo + Math.imul(al0, bl6)) | 0;
    mid = (mid + Math.imul(al0, bh6)) | 0;
    mid = (mid + Math.imul(ah0, bl6)) | 0;
    hi = (hi + Math.imul(ah0, bh6)) | 0;
    var w6 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w6 >>> 26)) | 0;
    w6 &= 0x3ffffff;
    /* k = 7 */
    lo = Math.imul(al7, bl0);
    mid = Math.imul(al7, bh0);
    mid = (mid + Math.imul(ah7, bl0)) | 0;
    hi = Math.imul(ah7, bh0);
    lo = (lo + Math.imul(al6, bl1)) | 0;
    mid = (mid + Math.imul(al6, bh1)) | 0;
    mid = (mid + Math.imul(ah6, bl1)) | 0;
    hi = (hi + Math.imul(ah6, bh1)) | 0;
    lo = (lo + Math.imul(al5, bl2)) | 0;
    mid = (mid + Math.imul(al5, bh2)) | 0;
    mid = (mid + Math.imul(ah5, bl2)) | 0;
    hi = (hi + Math.imul(ah5, bh2)) | 0;
    lo = (lo + Math.imul(al4, bl3)) | 0;
    mid = (mid + Math.imul(al4, bh3)) | 0;
    mid = (mid + Math.imul(ah4, bl3)) | 0;
    hi = (hi + Math.imul(ah4, bh3)) | 0;
    lo = (lo + Math.imul(al3, bl4)) | 0;
    mid = (mid + Math.imul(al3, bh4)) | 0;
    mid = (mid + Math.imul(ah3, bl4)) | 0;
    hi = (hi + Math.imul(ah3, bh4)) | 0;
    lo = (lo + Math.imul(al2, bl5)) | 0;
    mid = (mid + Math.imul(al2, bh5)) | 0;
    mid = (mid + Math.imul(ah2, bl5)) | 0;
    hi = (hi + Math.imul(ah2, bh5)) | 0;
    lo = (lo + Math.imul(al1, bl6)) | 0;
    mid = (mid + Math.imul(al1, bh6)) | 0;
    mid = (mid + Math.imul(ah1, bl6)) | 0;
    hi = (hi + Math.imul(ah1, bh6)) | 0;
    lo = (lo + Math.imul(al0, bl7)) | 0;
    mid = (mid + Math.imul(al0, bh7)) | 0;
    mid = (mid + Math.imul(ah0, bl7)) | 0;
    hi = (hi + Math.imul(ah0, bh7)) | 0;
    var w7 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w7 >>> 26)) | 0;
    w7 &= 0x3ffffff;
    /* k = 8 */
    lo = Math.imul(al8, bl0);
    mid = Math.imul(al8, bh0);
    mid = (mid + Math.imul(ah8, bl0)) | 0;
    hi = Math.imul(ah8, bh0);
    lo = (lo + Math.imul(al7, bl1)) | 0;
    mid = (mid + Math.imul(al7, bh1)) | 0;
    mid = (mid + Math.imul(ah7, bl1)) | 0;
    hi = (hi + Math.imul(ah7, bh1)) | 0;
    lo = (lo + Math.imul(al6, bl2)) | 0;
    mid = (mid + Math.imul(al6, bh2)) | 0;
    mid = (mid + Math.imul(ah6, bl2)) | 0;
    hi = (hi + Math.imul(ah6, bh2)) | 0;
    lo = (lo + Math.imul(al5, bl3)) | 0;
    mid = (mid + Math.imul(al5, bh3)) | 0;
    mid = (mid + Math.imul(ah5, bl3)) | 0;
    hi = (hi + Math.imul(ah5, bh3)) | 0;
    lo = (lo + Math.imul(al4, bl4)) | 0;
    mid = (mid + Math.imul(al4, bh4)) | 0;
    mid = (mid + Math.imul(ah4, bl4)) | 0;
    hi = (hi + Math.imul(ah4, bh4)) | 0;
    lo = (lo + Math.imul(al3, bl5)) | 0;
    mid = (mid + Math.imul(al3, bh5)) | 0;
    mid = (mid + Math.imul(ah3, bl5)) | 0;
    hi = (hi + Math.imul(ah3, bh5)) | 0;
    lo = (lo + Math.imul(al2, bl6)) | 0;
    mid = (mid + Math.imul(al2, bh6)) | 0;
    mid = (mid + Math.imul(ah2, bl6)) | 0;
    hi = (hi + Math.imul(ah2, bh6)) | 0;
    lo = (lo + Math.imul(al1, bl7)) | 0;
    mid = (mid + Math.imul(al1, bh7)) | 0;
    mid = (mid + Math.imul(ah1, bl7)) | 0;
    hi = (hi + Math.imul(ah1, bh7)) | 0;
    lo = (lo + Math.imul(al0, bl8)) | 0;
    mid = (mid + Math.imul(al0, bh8)) | 0;
    mid = (mid + Math.imul(ah0, bl8)) | 0;
    hi = (hi + Math.imul(ah0, bh8)) | 0;
    var w8 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w8 >>> 26)) | 0;
    w8 &= 0x3ffffff;
    /* k = 9 */
    lo = Math.imul(al9, bl0);
    mid = Math.imul(al9, bh0);
    mid = (mid + Math.imul(ah9, bl0)) | 0;
    hi = Math.imul(ah9, bh0);
    lo = (lo + Math.imul(al8, bl1)) | 0;
    mid = (mid + Math.imul(al8, bh1)) | 0;
    mid = (mid + Math.imul(ah8, bl1)) | 0;
    hi = (hi + Math.imul(ah8, bh1)) | 0;
    lo = (lo + Math.imul(al7, bl2)) | 0;
    mid = (mid + Math.imul(al7, bh2)) | 0;
    mid = (mid + Math.imul(ah7, bl2)) | 0;
    hi = (hi + Math.imul(ah7, bh2)) | 0;
    lo = (lo + Math.imul(al6, bl3)) | 0;
    mid = (mid + Math.imul(al6, bh3)) | 0;
    mid = (mid + Math.imul(ah6, bl3)) | 0;
    hi = (hi + Math.imul(ah6, bh3)) | 0;
    lo = (lo + Math.imul(al5, bl4)) | 0;
    mid = (mid + Math.imul(al5, bh4)) | 0;
    mid = (mid + Math.imul(ah5, bl4)) | 0;
    hi = (hi + Math.imul(ah5, bh4)) | 0;
    lo = (lo + Math.imul(al4, bl5)) | 0;
    mid = (mid + Math.imul(al4, bh5)) | 0;
    mid = (mid + Math.imul(ah4, bl5)) | 0;
    hi = (hi + Math.imul(ah4, bh5)) | 0;
    lo = (lo + Math.imul(al3, bl6)) | 0;
    mid = (mid + Math.imul(al3, bh6)) | 0;
    mid = (mid + Math.imul(ah3, bl6)) | 0;
    hi = (hi + Math.imul(ah3, bh6)) | 0;
    lo = (lo + Math.imul(al2, bl7)) | 0;
    mid = (mid + Math.imul(al2, bh7)) | 0;
    mid = (mid + Math.imul(ah2, bl7)) | 0;
    hi = (hi + Math.imul(ah2, bh7)) | 0;
    lo = (lo + Math.imul(al1, bl8)) | 0;
    mid = (mid + Math.imul(al1, bh8)) | 0;
    mid = (mid + Math.imul(ah1, bl8)) | 0;
    hi = (hi + Math.imul(ah1, bh8)) | 0;
    lo = (lo + Math.imul(al0, bl9)) | 0;
    mid = (mid + Math.imul(al0, bh9)) | 0;
    mid = (mid + Math.imul(ah0, bl9)) | 0;
    hi = (hi + Math.imul(ah0, bh9)) | 0;
    var w9 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w9 >>> 26)) | 0;
    w9 &= 0x3ffffff;
    /* k = 10 */
    lo = Math.imul(al9, bl1);
    mid = Math.imul(al9, bh1);
    mid = (mid + Math.imul(ah9, bl1)) | 0;
    hi = Math.imul(ah9, bh1);
    lo = (lo + Math.imul(al8, bl2)) | 0;
    mid = (mid + Math.imul(al8, bh2)) | 0;
    mid = (mid + Math.imul(ah8, bl2)) | 0;
    hi = (hi + Math.imul(ah8, bh2)) | 0;
    lo = (lo + Math.imul(al7, bl3)) | 0;
    mid = (mid + Math.imul(al7, bh3)) | 0;
    mid = (mid + Math.imul(ah7, bl3)) | 0;
    hi = (hi + Math.imul(ah7, bh3)) | 0;
    lo = (lo + Math.imul(al6, bl4)) | 0;
    mid = (mid + Math.imul(al6, bh4)) | 0;
    mid = (mid + Math.imul(ah6, bl4)) | 0;
    hi = (hi + Math.imul(ah6, bh4)) | 0;
    lo = (lo + Math.imul(al5, bl5)) | 0;
    mid = (mid + Math.imul(al5, bh5)) | 0;
    mid = (mid + Math.imul(ah5, bl5)) | 0;
    hi = (hi + Math.imul(ah5, bh5)) | 0;
    lo = (lo + Math.imul(al4, bl6)) | 0;
    mid = (mid + Math.imul(al4, bh6)) | 0;
    mid = (mid + Math.imul(ah4, bl6)) | 0;
    hi = (hi + Math.imul(ah4, bh6)) | 0;
    lo = (lo + Math.imul(al3, bl7)) | 0;
    mid = (mid + Math.imul(al3, bh7)) | 0;
    mid = (mid + Math.imul(ah3, bl7)) | 0;
    hi = (hi + Math.imul(ah3, bh7)) | 0;
    lo = (lo + Math.imul(al2, bl8)) | 0;
    mid = (mid + Math.imul(al2, bh8)) | 0;
    mid = (mid + Math.imul(ah2, bl8)) | 0;
    hi = (hi + Math.imul(ah2, bh8)) | 0;
    lo = (lo + Math.imul(al1, bl9)) | 0;
    mid = (mid + Math.imul(al1, bh9)) | 0;
    mid = (mid + Math.imul(ah1, bl9)) | 0;
    hi = (hi + Math.imul(ah1, bh9)) | 0;
    var w10 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w10 >>> 26)) | 0;
    w10 &= 0x3ffffff;
    /* k = 11 */
    lo = Math.imul(al9, bl2);
    mid = Math.imul(al9, bh2);
    mid = (mid + Math.imul(ah9, bl2)) | 0;
    hi = Math.imul(ah9, bh2);
    lo = (lo + Math.imul(al8, bl3)) | 0;
    mid = (mid + Math.imul(al8, bh3)) | 0;
    mid = (mid + Math.imul(ah8, bl3)) | 0;
    hi = (hi + Math.imul(ah8, bh3)) | 0;
    lo = (lo + Math.imul(al7, bl4)) | 0;
    mid = (mid + Math.imul(al7, bh4)) | 0;
    mid = (mid + Math.imul(ah7, bl4)) | 0;
    hi = (hi + Math.imul(ah7, bh4)) | 0;
    lo = (lo + Math.imul(al6, bl5)) | 0;
    mid = (mid + Math.imul(al6, bh5)) | 0;
    mid = (mid + Math.imul(ah6, bl5)) | 0;
    hi = (hi + Math.imul(ah6, bh5)) | 0;
    lo = (lo + Math.imul(al5, bl6)) | 0;
    mid = (mid + Math.imul(al5, bh6)) | 0;
    mid = (mid + Math.imul(ah5, bl6)) | 0;
    hi = (hi + Math.imul(ah5, bh6)) | 0;
    lo = (lo + Math.imul(al4, bl7)) | 0;
    mid = (mid + Math.imul(al4, bh7)) | 0;
    mid = (mid + Math.imul(ah4, bl7)) | 0;
    hi = (hi + Math.imul(ah4, bh7)) | 0;
    lo = (lo + Math.imul(al3, bl8)) | 0;
    mid = (mid + Math.imul(al3, bh8)) | 0;
    mid = (mid + Math.imul(ah3, bl8)) | 0;
    hi = (hi + Math.imul(ah3, bh8)) | 0;
    lo = (lo + Math.imul(al2, bl9)) | 0;
    mid = (mid + Math.imul(al2, bh9)) | 0;
    mid = (mid + Math.imul(ah2, bl9)) | 0;
    hi = (hi + Math.imul(ah2, bh9)) | 0;
    var w11 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w11 >>> 26)) | 0;
    w11 &= 0x3ffffff;
    /* k = 12 */
    lo = Math.imul(al9, bl3);
    mid = Math.imul(al9, bh3);
    mid = (mid + Math.imul(ah9, bl3)) | 0;
    hi = Math.imul(ah9, bh3);
    lo = (lo + Math.imul(al8, bl4)) | 0;
    mid = (mid + Math.imul(al8, bh4)) | 0;
    mid = (mid + Math.imul(ah8, bl4)) | 0;
    hi = (hi + Math.imul(ah8, bh4)) | 0;
    lo = (lo + Math.imul(al7, bl5)) | 0;
    mid = (mid + Math.imul(al7, bh5)) | 0;
    mid = (mid + Math.imul(ah7, bl5)) | 0;
    hi = (hi + Math.imul(ah7, bh5)) | 0;
    lo = (lo + Math.imul(al6, bl6)) | 0;
    mid = (mid + Math.imul(al6, bh6)) | 0;
    mid = (mid + Math.imul(ah6, bl6)) | 0;
    hi = (hi + Math.imul(ah6, bh6)) | 0;
    lo = (lo + Math.imul(al5, bl7)) | 0;
    mid = (mid + Math.imul(al5, bh7)) | 0;
    mid = (mid + Math.imul(ah5, bl7)) | 0;
    hi = (hi + Math.imul(ah5, bh7)) | 0;
    lo = (lo + Math.imul(al4, bl8)) | 0;
    mid = (mid + Math.imul(al4, bh8)) | 0;
    mid = (mid + Math.imul(ah4, bl8)) | 0;
    hi = (hi + Math.imul(ah4, bh8)) | 0;
    lo = (lo + Math.imul(al3, bl9)) | 0;
    mid = (mid + Math.imul(al3, bh9)) | 0;
    mid = (mid + Math.imul(ah3, bl9)) | 0;
    hi = (hi + Math.imul(ah3, bh9)) | 0;
    var w12 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w12 >>> 26)) | 0;
    w12 &= 0x3ffffff;
    /* k = 13 */
    lo = Math.imul(al9, bl4);
    mid = Math.imul(al9, bh4);
    mid = (mid + Math.imul(ah9, bl4)) | 0;
    hi = Math.imul(ah9, bh4);
    lo = (lo + Math.imul(al8, bl5)) | 0;
    mid = (mid + Math.imul(al8, bh5)) | 0;
    mid = (mid + Math.imul(ah8, bl5)) | 0;
    hi = (hi + Math.imul(ah8, bh5)) | 0;
    lo = (lo + Math.imul(al7, bl6)) | 0;
    mid = (mid + Math.imul(al7, bh6)) | 0;
    mid = (mid + Math.imul(ah7, bl6)) | 0;
    hi = (hi + Math.imul(ah7, bh6)) | 0;
    lo = (lo + Math.imul(al6, bl7)) | 0;
    mid = (mid + Math.imul(al6, bh7)) | 0;
    mid = (mid + Math.imul(ah6, bl7)) | 0;
    hi = (hi + Math.imul(ah6, bh7)) | 0;
    lo = (lo + Math.imul(al5, bl8)) | 0;
    mid = (mid + Math.imul(al5, bh8)) | 0;
    mid = (mid + Math.imul(ah5, bl8)) | 0;
    hi = (hi + Math.imul(ah5, bh8)) | 0;
    lo = (lo + Math.imul(al4, bl9)) | 0;
    mid = (mid + Math.imul(al4, bh9)) | 0;
    mid = (mid + Math.imul(ah4, bl9)) | 0;
    hi = (hi + Math.imul(ah4, bh9)) | 0;
    var w13 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w13 >>> 26)) | 0;
    w13 &= 0x3ffffff;
    /* k = 14 */
    lo = Math.imul(al9, bl5);
    mid = Math.imul(al9, bh5);
    mid = (mid + Math.imul(ah9, bl5)) | 0;
    hi = Math.imul(ah9, bh5);
    lo = (lo + Math.imul(al8, bl6)) | 0;
    mid = (mid + Math.imul(al8, bh6)) | 0;
    mid = (mid + Math.imul(ah8, bl6)) | 0;
    hi = (hi + Math.imul(ah8, bh6)) | 0;
    lo = (lo + Math.imul(al7, bl7)) | 0;
    mid = (mid + Math.imul(al7, bh7)) | 0;
    mid = (mid + Math.imul(ah7, bl7)) | 0;
    hi = (hi + Math.imul(ah7, bh7)) | 0;
    lo = (lo + Math.imul(al6, bl8)) | 0;
    mid = (mid + Math.imul(al6, bh8)) | 0;
    mid = (mid + Math.imul(ah6, bl8)) | 0;
    hi = (hi + Math.imul(ah6, bh8)) | 0;
    lo = (lo + Math.imul(al5, bl9)) | 0;
    mid = (mid + Math.imul(al5, bh9)) | 0;
    mid = (mid + Math.imul(ah5, bl9)) | 0;
    hi = (hi + Math.imul(ah5, bh9)) | 0;
    var w14 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w14 >>> 26)) | 0;
    w14 &= 0x3ffffff;
    /* k = 15 */
    lo = Math.imul(al9, bl6);
    mid = Math.imul(al9, bh6);
    mid = (mid + Math.imul(ah9, bl6)) | 0;
    hi = Math.imul(ah9, bh6);
    lo = (lo + Math.imul(al8, bl7)) | 0;
    mid = (mid + Math.imul(al8, bh7)) | 0;
    mid = (mid + Math.imul(ah8, bl7)) | 0;
    hi = (hi + Math.imul(ah8, bh7)) | 0;
    lo = (lo + Math.imul(al7, bl8)) | 0;
    mid = (mid + Math.imul(al7, bh8)) | 0;
    mid = (mid + Math.imul(ah7, bl8)) | 0;
    hi = (hi + Math.imul(ah7, bh8)) | 0;
    lo = (lo + Math.imul(al6, bl9)) | 0;
    mid = (mid + Math.imul(al6, bh9)) | 0;
    mid = (mid + Math.imul(ah6, bl9)) | 0;
    hi = (hi + Math.imul(ah6, bh9)) | 0;
    var w15 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w15 >>> 26)) | 0;
    w15 &= 0x3ffffff;
    /* k = 16 */
    lo = Math.imul(al9, bl7);
    mid = Math.imul(al9, bh7);
    mid = (mid + Math.imul(ah9, bl7)) | 0;
    hi = Math.imul(ah9, bh7);
    lo = (lo + Math.imul(al8, bl8)) | 0;
    mid = (mid + Math.imul(al8, bh8)) | 0;
    mid = (mid + Math.imul(ah8, bl8)) | 0;
    hi = (hi + Math.imul(ah8, bh8)) | 0;
    lo = (lo + Math.imul(al7, bl9)) | 0;
    mid = (mid + Math.imul(al7, bh9)) | 0;
    mid = (mid + Math.imul(ah7, bl9)) | 0;
    hi = (hi + Math.imul(ah7, bh9)) | 0;
    var w16 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w16 >>> 26)) | 0;
    w16 &= 0x3ffffff;
    /* k = 17 */
    lo = Math.imul(al9, bl8);
    mid = Math.imul(al9, bh8);
    mid = (mid + Math.imul(ah9, bl8)) | 0;
    hi = Math.imul(ah9, bh8);
    lo = (lo + Math.imul(al8, bl9)) | 0;
    mid = (mid + Math.imul(al8, bh9)) | 0;
    mid = (mid + Math.imul(ah8, bl9)) | 0;
    hi = (hi + Math.imul(ah8, bh9)) | 0;
    var w17 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w17 >>> 26)) | 0;
    w17 &= 0x3ffffff;
    /* k = 18 */
    lo = Math.imul(al9, bl9);
    mid = Math.imul(al9, bh9);
    mid = (mid + Math.imul(ah9, bl9)) | 0;
    hi = Math.imul(ah9, bh9);
    var w18 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w18 >>> 26)) | 0;
    w18 &= 0x3ffffff;
    o[0] = w0;
    o[1] = w1;
    o[2] = w2;
    o[3] = w3;
    o[4] = w4;
    o[5] = w5;
    o[6] = w6;
    o[7] = w7;
    o[8] = w8;
    o[9] = w9;
    o[10] = w10;
    o[11] = w11;
    o[12] = w12;
    o[13] = w13;
    o[14] = w14;
    o[15] = w15;
    o[16] = w16;
    o[17] = w17;
    o[18] = w18;
    if (c !== 0) {
      o[19] = c;
      out.length++;
    }
    return out;
  };

  // Polyfill comb
  if (!Math.imul) {
    comb10MulTo = smallMulTo;
  }

  function bigMulTo (self, num, out) {
    out.negative = num.negative ^ self.negative;
    out.length = self.length + num.length;

    var carry = 0;
    var hncarry = 0;
    for (var k = 0; k < out.length - 1; k++) {
      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
      // note that ncarry could be >= 0x3ffffff
      var ncarry = hncarry;
      hncarry = 0;
      var rword = carry & 0x3ffffff;
      var maxJ = Math.min(k, num.length - 1);
      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
        var i = k - j;
        var a = self.words[i] | 0;
        var b = num.words[j] | 0;
        var r = a * b;

        var lo = r & 0x3ffffff;
        ncarry = (ncarry + ((r / 0x4000000) | 0)) | 0;
        lo = (lo + rword) | 0;
        rword = lo & 0x3ffffff;
        ncarry = (ncarry + (lo >>> 26)) | 0;

        hncarry += ncarry >>> 26;
        ncarry &= 0x3ffffff;
      }
      out.words[k] = rword;
      carry = ncarry;
      ncarry = hncarry;
    }
    if (carry !== 0) {
      out.words[k] = carry;
    } else {
      out.length--;
    }

    return out.strip();
  }

  function jumboMulTo (self, num, out) {
    var fftm = new FFTM();
    return fftm.mulp(self, num, out);
  }

  BN.prototype.mulTo = function mulTo (num, out) {
    var res;
    var len = this.length + num.length;
    if (this.length === 10 && num.length === 10) {
      res = comb10MulTo(this, num, out);
    } else if (len < 63) {
      res = smallMulTo(this, num, out);
    } else if (len < 1024) {
      res = bigMulTo(this, num, out);
    } else {
      res = jumboMulTo(this, num, out);
    }

    return res;
  };

  // Cooley-Tukey algorithm for FFT
  // slightly revisited to rely on looping instead of recursion

  function FFTM (x, y) {
    this.x = x;
    this.y = y;
  }

  FFTM.prototype.makeRBT = function makeRBT (N) {
    var t = new Array(N);
    var l = BN.prototype._countBits(N) - 1;
    for (var i = 0; i < N; i++) {
      t[i] = this.revBin(i, l, N);
    }

    return t;
  };

  // Returns binary-reversed representation of `x`
  FFTM.prototype.revBin = function revBin (x, l, N) {
    if (x === 0 || x === N - 1) return x;

    var rb = 0;
    for (var i = 0; i < l; i++) {
      rb |= (x & 1) << (l - i - 1);
      x >>= 1;
    }

    return rb;
  };

  // Performs "tweedling" phase, therefore 'emulating'
  // behaviour of the recursive algorithm
  FFTM.prototype.permute = function permute (rbt, rws, iws, rtws, itws, N) {
    for (var i = 0; i < N; i++) {
      rtws[i] = rws[rbt[i]];
      itws[i] = iws[rbt[i]];
    }
  };

  FFTM.prototype.transform = function transform (rws, iws, rtws, itws, N, rbt) {
    this.permute(rbt, rws, iws, rtws, itws, N);

    for (var s = 1; s < N; s <<= 1) {
      var l = s << 1;

      var rtwdf = Math.cos(2 * Math.PI / l);
      var itwdf = Math.sin(2 * Math.PI / l);

      for (var p = 0; p < N; p += l) {
        var rtwdf_ = rtwdf;
        var itwdf_ = itwdf;

        for (var j = 0; j < s; j++) {
          var re = rtws[p + j];
          var ie = itws[p + j];

          var ro = rtws[p + j + s];
          var io = itws[p + j + s];

          var rx = rtwdf_ * ro - itwdf_ * io;

          io = rtwdf_ * io + itwdf_ * ro;
          ro = rx;

          rtws[p + j] = re + ro;
          itws[p + j] = ie + io;

          rtws[p + j + s] = re - ro;
          itws[p + j + s] = ie - io;

          /* jshint maxdepth : false */
          if (j !== l) {
            rx = rtwdf * rtwdf_ - itwdf * itwdf_;

            itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
            rtwdf_ = rx;
          }
        }
      }
    }
  };

  FFTM.prototype.guessLen13b = function guessLen13b (n, m) {
    var N = Math.max(m, n) | 1;
    var odd = N & 1;
    var i = 0;
    for (N = N / 2 | 0; N; N = N >>> 1) {
      i++;
    }

    return 1 << i + 1 + odd;
  };

  FFTM.prototype.conjugate = function conjugate (rws, iws, N) {
    if (N <= 1) return;

    for (var i = 0; i < N / 2; i++) {
      var t = rws[i];

      rws[i] = rws[N - i - 1];
      rws[N - i - 1] = t;

      t = iws[i];

      iws[i] = -iws[N - i - 1];
      iws[N - i - 1] = -t;
    }
  };

  FFTM.prototype.normalize13b = function normalize13b (ws, N) {
    var carry = 0;
    for (var i = 0; i < N / 2; i++) {
      var w = Math.round(ws[2 * i + 1] / N) * 0x2000 +
        Math.round(ws[2 * i] / N) +
        carry;

      ws[i] = w & 0x3ffffff;

      if (w < 0x4000000) {
        carry = 0;
      } else {
        carry = w / 0x4000000 | 0;
      }
    }

    return ws;
  };

  FFTM.prototype.convert13b = function convert13b (ws, len, rws, N) {
    var carry = 0;
    for (var i = 0; i < len; i++) {
      carry = carry + (ws[i] | 0);

      rws[2 * i] = carry & 0x1fff; carry = carry >>> 13;
      rws[2 * i + 1] = carry & 0x1fff; carry = carry >>> 13;
    }

    // Pad with zeroes
    for (i = 2 * len; i < N; ++i) {
      rws[i] = 0;
    }

    assert(carry === 0);
    assert((carry & ~0x1fff) === 0);
  };

  FFTM.prototype.stub = function stub (N) {
    var ph = new Array(N);
    for (var i = 0; i < N; i++) {
      ph[i] = 0;
    }

    return ph;
  };

  FFTM.prototype.mulp = function mulp (x, y, out) {
    var N = 2 * this.guessLen13b(x.length, y.length);

    var rbt = this.makeRBT(N);

    var _ = this.stub(N);

    var rws = new Array(N);
    var rwst = new Array(N);
    var iwst = new Array(N);

    var nrws = new Array(N);
    var nrwst = new Array(N);
    var niwst = new Array(N);

    var rmws = out.words;
    rmws.length = N;

    this.convert13b(x.words, x.length, rws, N);
    this.convert13b(y.words, y.length, nrws, N);

    this.transform(rws, _, rwst, iwst, N, rbt);
    this.transform(nrws, _, nrwst, niwst, N, rbt);

    for (var i = 0; i < N; i++) {
      var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
      iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
      rwst[i] = rx;
    }

    this.conjugate(rwst, iwst, N);
    this.transform(rwst, iwst, rmws, _, N, rbt);
    this.conjugate(rmws, _, N);
    this.normalize13b(rmws, N);

    out.negative = x.negative ^ y.negative;
    out.length = x.length + y.length;
    return out.strip();
  };

  // Multiply `this` by `num`
  BN.prototype.mul = function mul (num) {
    var out = new BN(null);
    out.words = new Array(this.length + num.length);
    return this.mulTo(num, out);
  };

  // Multiply employing FFT
  BN.prototype.mulf = function mulf (num) {
    var out = new BN(null);
    out.words = new Array(this.length + num.length);
    return jumboMulTo(this, num, out);
  };

  // In-place Multiplication
  BN.prototype.imul = function imul (num) {
    return this.clone().mulTo(num, this);
  };

  BN.prototype.imuln = function imuln (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);

    // Carry
    var carry = 0;
    for (var i = 0; i < this.length; i++) {
      var w = (this.words[i] | 0) * num;
      var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
      carry >>= 26;
      carry += (w / 0x4000000) | 0;
      // NOTE: lo is 27bit maximum
      carry += lo >>> 26;
      this.words[i] = lo & 0x3ffffff;
    }

    if (carry !== 0) {
      this.words[i] = carry;
      this.length++;
    }

    return this;
  };

  BN.prototype.muln = function muln (num) {
    return this.clone().imuln(num);
  };

  // `this` * `this`
  BN.prototype.sqr = function sqr () {
    return this.mul(this);
  };

  // `this` * `this` in-place
  BN.prototype.isqr = function isqr () {
    return this.imul(this.clone());
  };

  // Math.pow(`this`, `num`)
  BN.prototype.pow = function pow (num) {
    var w = toBitArray(num);
    if (w.length === 0) return new BN(1);

    // Skip leading zeroes
    var res = this;
    for (var i = 0; i < w.length; i++, res = res.sqr()) {
      if (w[i] !== 0) break;
    }

    if (++i < w.length) {
      for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
        if (w[i] === 0) continue;

        res = res.mul(q);
      }
    }

    return res;
  };

  // Shift-left in-place
  BN.prototype.iushln = function iushln (bits) {
    assert(typeof bits === 'number' && bits >= 0);
    var r = bits % 26;
    var s = (bits - r) / 26;
    var carryMask = (0x3ffffff >>> (26 - r)) << (26 - r);
    var i;

    if (r !== 0) {
      var carry = 0;

      for (i = 0; i < this.length; i++) {
        var newCarry = this.words[i] & carryMask;
        var c = ((this.words[i] | 0) - newCarry) << r;
        this.words[i] = c | carry;
        carry = newCarry >>> (26 - r);
      }

      if (carry) {
        this.words[i] = carry;
        this.length++;
      }
    }

    if (s !== 0) {
      for (i = this.length - 1; i >= 0; i--) {
        this.words[i + s] = this.words[i];
      }

      for (i = 0; i < s; i++) {
        this.words[i] = 0;
      }

      this.length += s;
    }

    return this.strip();
  };

  BN.prototype.ishln = function ishln (bits) {
    // TODO(indutny): implement me
    assert(this.negative === 0);
    return this.iushln(bits);
  };

  // Shift-right in-place
  // NOTE: `hint` is a lowest bit before trailing zeroes
  // NOTE: if `extended` is present - it will be filled with destroyed bits
  BN.prototype.iushrn = function iushrn (bits, hint, extended) {
    assert(typeof bits === 'number' && bits >= 0);
    var h;
    if (hint) {
      h = (hint - (hint % 26)) / 26;
    } else {
      h = 0;
    }

    var r = bits % 26;
    var s = Math.min((bits - r) / 26, this.length);
    var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
    var maskedWords = extended;

    h -= s;
    h = Math.max(0, h);

    // Extended mode, copy masked part
    if (maskedWords) {
      for (var i = 0; i < s; i++) {
        maskedWords.words[i] = this.words[i];
      }
      maskedWords.length = s;
    }

    if (s === 0) {
      // No-op, we should not move anything at all
    } else if (this.length > s) {
      this.length -= s;
      for (i = 0; i < this.length; i++) {
        this.words[i] = this.words[i + s];
      }
    } else {
      this.words[0] = 0;
      this.length = 1;
    }

    var carry = 0;
    for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
      var word = this.words[i] | 0;
      this.words[i] = (carry << (26 - r)) | (word >>> r);
      carry = word & mask;
    }

    // Push carried bits as a mask
    if (maskedWords && carry !== 0) {
      maskedWords.words[maskedWords.length++] = carry;
    }

    if (this.length === 0) {
      this.words[0] = 0;
      this.length = 1;
    }

    return this.strip();
  };

  BN.prototype.ishrn = function ishrn (bits, hint, extended) {
    // TODO(indutny): implement me
    assert(this.negative === 0);
    return this.iushrn(bits, hint, extended);
  };

  // Shift-left
  BN.prototype.shln = function shln (bits) {
    return this.clone().ishln(bits);
  };

  BN.prototype.ushln = function ushln (bits) {
    return this.clone().iushln(bits);
  };

  // Shift-right
  BN.prototype.shrn = function shrn (bits) {
    return this.clone().ishrn(bits);
  };

  BN.prototype.ushrn = function ushrn (bits) {
    return this.clone().iushrn(bits);
  };

  // Test if n bit is set
  BN.prototype.testn = function testn (bit) {
    assert(typeof bit === 'number' && bit >= 0);
    var r = bit % 26;
    var s = (bit - r) / 26;
    var q = 1 << r;

    // Fast case: bit is much higher than all existing words
    if (this.length <= s) return false;

    // Check bit and return
    var w = this.words[s];

    return !!(w & q);
  };

  // Return only lowers bits of number (in-place)
  BN.prototype.imaskn = function imaskn (bits) {
    assert(typeof bits === 'number' && bits >= 0);
    var r = bits % 26;
    var s = (bits - r) / 26;

    assert(this.negative === 0, 'imaskn works only with positive numbers');

    if (this.length <= s) {
      return this;
    }

    if (r !== 0) {
      s++;
    }
    this.length = Math.min(s, this.length);

    if (r !== 0) {
      var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
      this.words[this.length - 1] &= mask;
    }

    return this.strip();
  };

  // Return only lowers bits of number
  BN.prototype.maskn = function maskn (bits) {
    return this.clone().imaskn(bits);
  };

  // Add plain number `num` to `this`
  BN.prototype.iaddn = function iaddn (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);
    if (num < 0) return this.isubn(-num);

    // Possible sign change
    if (this.negative !== 0) {
      if (this.length === 1 && (this.words[0] | 0) < num) {
        this.words[0] = num - (this.words[0] | 0);
        this.negative = 0;
        return this;
      }

      this.negative = 0;
      this.isubn(num);
      this.negative = 1;
      return this;
    }

    // Add without checks
    return this._iaddn(num);
  };

  BN.prototype._iaddn = function _iaddn (num) {
    this.words[0] += num;

    // Carry
    for (var i = 0; i < this.length && this.words[i] >= 0x4000000; i++) {
      this.words[i] -= 0x4000000;
      if (i === this.length - 1) {
        this.words[i + 1] = 1;
      } else {
        this.words[i + 1]++;
      }
    }
    this.length = Math.max(this.length, i + 1);

    return this;
  };

  // Subtract plain number `num` from `this`
  BN.prototype.isubn = function isubn (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);
    if (num < 0) return this.iaddn(-num);

    if (this.negative !== 0) {
      this.negative = 0;
      this.iaddn(num);
      this.negative = 1;
      return this;
    }

    this.words[0] -= num;

    if (this.length === 1 && this.words[0] < 0) {
      this.words[0] = -this.words[0];
      this.negative = 1;
    } else {
      // Carry
      for (var i = 0; i < this.length && this.words[i] < 0; i++) {
        this.words[i] += 0x4000000;
        this.words[i + 1] -= 1;
      }
    }

    return this.strip();
  };

  BN.prototype.addn = function addn (num) {
    return this.clone().iaddn(num);
  };

  BN.prototype.subn = function subn (num) {
    return this.clone().isubn(num);
  };

  BN.prototype.iabs = function iabs () {
    this.negative = 0;

    return this;
  };

  BN.prototype.abs = function abs () {
    return this.clone().iabs();
  };

  BN.prototype._ishlnsubmul = function _ishlnsubmul (num, mul, shift) {
    var len = num.length + shift;
    var i;

    this._expand(len);

    var w;
    var carry = 0;
    for (i = 0; i < num.length; i++) {
      w = (this.words[i + shift] | 0) + carry;
      var right = (num.words[i] | 0) * mul;
      w -= right & 0x3ffffff;
      carry = (w >> 26) - ((right / 0x4000000) | 0);
      this.words[i + shift] = w & 0x3ffffff;
    }
    for (; i < this.length - shift; i++) {
      w = (this.words[i + shift] | 0) + carry;
      carry = w >> 26;
      this.words[i + shift] = w & 0x3ffffff;
    }

    if (carry === 0) return this.strip();

    // Subtraction overflow
    assert(carry === -1);
    carry = 0;
    for (i = 0; i < this.length; i++) {
      w = -(this.words[i] | 0) + carry;
      carry = w >> 26;
      this.words[i] = w & 0x3ffffff;
    }
    this.negative = 1;

    return this.strip();
  };

  BN.prototype._wordDiv = function _wordDiv (num, mode) {
    var shift = this.length - num.length;

    var a = this.clone();
    var b = num;

    // Normalize
    var bhi = b.words[b.length - 1] | 0;
    var bhiBits = this._countBits(bhi);
    shift = 26 - bhiBits;
    if (shift !== 0) {
      b = b.ushln(shift);
      a.iushln(shift);
      bhi = b.words[b.length - 1] | 0;
    }

    // Initialize quotient
    var m = a.length - b.length;
    var q;

    if (mode !== 'mod') {
      q = new BN(null);
      q.length = m + 1;
      q.words = new Array(q.length);
      for (var i = 0; i < q.length; i++) {
        q.words[i] = 0;
      }
    }

    var diff = a.clone()._ishlnsubmul(b, 1, m);
    if (diff.negative === 0) {
      a = diff;
      if (q) {
        q.words[m] = 1;
      }
    }

    for (var j = m - 1; j >= 0; j--) {
      var qj = (a.words[b.length + j] | 0) * 0x4000000 +
        (a.words[b.length + j - 1] | 0);

      // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
      // (0x7ffffff)
      qj = Math.min((qj / bhi) | 0, 0x3ffffff);

      a._ishlnsubmul(b, qj, j);
      while (a.negative !== 0) {
        qj--;
        a.negative = 0;
        a._ishlnsubmul(b, 1, j);
        if (!a.isZero()) {
          a.negative ^= 1;
        }
      }
      if (q) {
        q.words[j] = qj;
      }
    }
    if (q) {
      q.strip();
    }
    a.strip();

    // Denormalize
    if (mode !== 'div' && shift !== 0) {
      a.iushrn(shift);
    }

    return {
      div: q || null,
      mod: a
    };
  };

  // NOTE: 1) `mode` can be set to `mod` to request mod only,
  //       to `div` to request div only, or be absent to
  //       request both div & mod
  //       2) `positive` is true if unsigned mod is requested
  BN.prototype.divmod = function divmod (num, mode, positive) {
    assert(!num.isZero());

    if (this.isZero()) {
      return {
        div: new BN(0),
        mod: new BN(0)
      };
    }

    var div, mod, res;
    if (this.negative !== 0 && num.negative === 0) {
      res = this.neg().divmod(num, mode);

      if (mode !== 'mod') {
        div = res.div.neg();
      }

      if (mode !== 'div') {
        mod = res.mod.neg();
        if (positive && mod.negative !== 0) {
          mod.iadd(num);
        }
      }

      return {
        div: div,
        mod: mod
      };
    }

    if (this.negative === 0 && num.negative !== 0) {
      res = this.divmod(num.neg(), mode);

      if (mode !== 'mod') {
        div = res.div.neg();
      }

      return {
        div: div,
        mod: res.mod
      };
    }

    if ((this.negative & num.negative) !== 0) {
      res = this.neg().divmod(num.neg(), mode);

      if (mode !== 'div') {
        mod = res.mod.neg();
        if (positive && mod.negative !== 0) {
          mod.isub(num);
        }
      }

      return {
        div: res.div,
        mod: mod
      };
    }

    // Both numbers are positive at this point

    // Strip both numbers to approximate shift value
    if (num.length > this.length || this.cmp(num) < 0) {
      return {
        div: new BN(0),
        mod: this
      };
    }

    // Very short reduction
    if (num.length === 1) {
      if (mode === 'div') {
        return {
          div: this.divn(num.words[0]),
          mod: null
        };
      }

      if (mode === 'mod') {
        return {
          div: null,
          mod: new BN(this.modn(num.words[0]))
        };
      }

      return {
        div: this.divn(num.words[0]),
        mod: new BN(this.modn(num.words[0]))
      };
    }

    return this._wordDiv(num, mode);
  };

  // Find `this` / `num`
  BN.prototype.div = function div (num) {
    return this.divmod(num, 'div', false).div;
  };

  // Find `this` % `num`
  BN.prototype.mod = function mod (num) {
    return this.divmod(num, 'mod', false).mod;
  };

  BN.prototype.umod = function umod (num) {
    return this.divmod(num, 'mod', true).mod;
  };

  // Find Round(`this` / `num`)
  BN.prototype.divRound = function divRound (num) {
    var dm = this.divmod(num);

    // Fast case - exact division
    if (dm.mod.isZero()) return dm.div;

    var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;

    var half = num.ushrn(1);
    var r2 = num.andln(1);
    var cmp = mod.cmp(half);

    // Round down
    if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div;

    // Round up
    return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
  };

  BN.prototype.modn = function modn (num) {
    assert(num <= 0x3ffffff);
    var p = (1 << 26) % num;

    var acc = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      acc = (p * acc + (this.words[i] | 0)) % num;
    }

    return acc;
  };

  // In-place division by number
  BN.prototype.idivn = function idivn (num) {
    assert(num <= 0x3ffffff);

    var carry = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      var w = (this.words[i] | 0) + carry * 0x4000000;
      this.words[i] = (w / num) | 0;
      carry = w % num;
    }

    return this.strip();
  };

  BN.prototype.divn = function divn (num) {
    return this.clone().idivn(num);
  };

  BN.prototype.egcd = function egcd (p) {
    assert(p.negative === 0);
    assert(!p.isZero());

    var x = this;
    var y = p.clone();

    if (x.negative !== 0) {
      x = x.umod(p);
    } else {
      x = x.clone();
    }

    // A * x + B * y = x
    var A = new BN(1);
    var B = new BN(0);

    // C * x + D * y = y
    var C = new BN(0);
    var D = new BN(1);

    var g = 0;

    while (x.isEven() && y.isEven()) {
      x.iushrn(1);
      y.iushrn(1);
      ++g;
    }

    var yp = y.clone();
    var xp = x.clone();

    while (!x.isZero()) {
      for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
      if (i > 0) {
        x.iushrn(i);
        while (i-- > 0) {
          if (A.isOdd() || B.isOdd()) {
            A.iadd(yp);
            B.isub(xp);
          }

          A.iushrn(1);
          B.iushrn(1);
        }
      }

      for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
      if (j > 0) {
        y.iushrn(j);
        while (j-- > 0) {
          if (C.isOdd() || D.isOdd()) {
            C.iadd(yp);
            D.isub(xp);
          }

          C.iushrn(1);
          D.iushrn(1);
        }
      }

      if (x.cmp(y) >= 0) {
        x.isub(y);
        A.isub(C);
        B.isub(D);
      } else {
        y.isub(x);
        C.isub(A);
        D.isub(B);
      }
    }

    return {
      a: C,
      b: D,
      gcd: y.iushln(g)
    };
  };

  // This is reduced incarnation of the binary EEA
  // above, designated to invert members of the
  // _prime_ fields F(p) at a maximal speed
  BN.prototype._invmp = function _invmp (p) {
    assert(p.negative === 0);
    assert(!p.isZero());

    var a = this;
    var b = p.clone();

    if (a.negative !== 0) {
      a = a.umod(p);
    } else {
      a = a.clone();
    }

    var x1 = new BN(1);
    var x2 = new BN(0);

    var delta = b.clone();

    while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
      for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
      if (i > 0) {
        a.iushrn(i);
        while (i-- > 0) {
          if (x1.isOdd()) {
            x1.iadd(delta);
          }

          x1.iushrn(1);
        }
      }

      for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
      if (j > 0) {
        b.iushrn(j);
        while (j-- > 0) {
          if (x2.isOdd()) {
            x2.iadd(delta);
          }

          x2.iushrn(1);
        }
      }

      if (a.cmp(b) >= 0) {
        a.isub(b);
        x1.isub(x2);
      } else {
        b.isub(a);
        x2.isub(x1);
      }
    }

    var res;
    if (a.cmpn(1) === 0) {
      res = x1;
    } else {
      res = x2;
    }

    if (res.cmpn(0) < 0) {
      res.iadd(p);
    }

    return res;
  };

  BN.prototype.gcd = function gcd (num) {
    if (this.isZero()) return num.abs();
    if (num.isZero()) return this.abs();

    var a = this.clone();
    var b = num.clone();
    a.negative = 0;
    b.negative = 0;

    // Remove common factor of two
    for (var shift = 0; a.isEven() && b.isEven(); shift++) {
      a.iushrn(1);
      b.iushrn(1);
    }

    do {
      while (a.isEven()) {
        a.iushrn(1);
      }
      while (b.isEven()) {
        b.iushrn(1);
      }

      var r = a.cmp(b);
      if (r < 0) {
        // Swap `a` and `b` to make `a` always bigger than `b`
        var t = a;
        a = b;
        b = t;
      } else if (r === 0 || b.cmpn(1) === 0) {
        break;
      }

      a.isub(b);
    } while (true);

    return b.iushln(shift);
  };

  // Invert number in the field F(num)
  BN.prototype.invm = function invm (num) {
    return this.egcd(num).a.umod(num);
  };

  BN.prototype.isEven = function isEven () {
    return (this.words[0] & 1) === 0;
  };

  BN.prototype.isOdd = function isOdd () {
    return (this.words[0] & 1) === 1;
  };

  // And first word and num
  BN.prototype.andln = function andln (num) {
    return this.words[0] & num;
  };

  // Increment at the bit position in-line
  BN.prototype.bincn = function bincn (bit) {
    assert(typeof bit === 'number');
    var r = bit % 26;
    var s = (bit - r) / 26;
    var q = 1 << r;

    // Fast case: bit is much higher than all existing words
    if (this.length <= s) {
      this._expand(s + 1);
      this.words[s] |= q;
      return this;
    }

    // Add bit and propagate, if needed
    var carry = q;
    for (var i = s; carry !== 0 && i < this.length; i++) {
      var w = this.words[i] | 0;
      w += carry;
      carry = w >>> 26;
      w &= 0x3ffffff;
      this.words[i] = w;
    }
    if (carry !== 0) {
      this.words[i] = carry;
      this.length++;
    }
    return this;
  };

  BN.prototype.isZero = function isZero () {
    return this.length === 1 && this.words[0] === 0;
  };

  BN.prototype.cmpn = function cmpn (num) {
    var negative = num < 0;

    if (this.negative !== 0 && !negative) return -1;
    if (this.negative === 0 && negative) return 1;

    this.strip();

    var res;
    if (this.length > 1) {
      res = 1;
    } else {
      if (negative) {
        num = -num;
      }

      assert(num <= 0x3ffffff, 'Number is too big');

      var w = this.words[0] | 0;
      res = w === num ? 0 : w < num ? -1 : 1;
    }
    if (this.negative !== 0) return -res | 0;
    return res;
  };

  // Compare two numbers and return:
  // 1 - if `this` > `num`
  // 0 - if `this` == `num`
  // -1 - if `this` < `num`
  BN.prototype.cmp = function cmp (num) {
    if (this.negative !== 0 && num.negative === 0) return -1;
    if (this.negative === 0 && num.negative !== 0) return 1;

    var res = this.ucmp(num);
    if (this.negative !== 0) return -res | 0;
    return res;
  };

  // Unsigned comparison
  BN.prototype.ucmp = function ucmp (num) {
    // At this point both numbers have the same sign
    if (this.length > num.length) return 1;
    if (this.length < num.length) return -1;

    var res = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      var a = this.words[i] | 0;
      var b = num.words[i] | 0;

      if (a === b) continue;
      if (a < b) {
        res = -1;
      } else if (a > b) {
        res = 1;
      }
      break;
    }
    return res;
  };

  BN.prototype.gtn = function gtn (num) {
    return this.cmpn(num) === 1;
  };

  BN.prototype.gt = function gt (num) {
    return this.cmp(num) === 1;
  };

  BN.prototype.gten = function gten (num) {
    return this.cmpn(num) >= 0;
  };

  BN.prototype.gte = function gte (num) {
    return this.cmp(num) >= 0;
  };

  BN.prototype.ltn = function ltn (num) {
    return this.cmpn(num) === -1;
  };

  BN.prototype.lt = function lt (num) {
    return this.cmp(num) === -1;
  };

  BN.prototype.lten = function lten (num) {
    return this.cmpn(num) <= 0;
  };

  BN.prototype.lte = function lte (num) {
    return this.cmp(num) <= 0;
  };

  BN.prototype.eqn = function eqn (num) {
    return this.cmpn(num) === 0;
  };

  BN.prototype.eq = function eq (num) {
    return this.cmp(num) === 0;
  };

  //
  // A reduce context, could be using montgomery or something better, depending
  // on the `m` itself.
  //
  BN.red = function red (num) {
    return new Red(num);
  };

  BN.prototype.toRed = function toRed (ctx) {
    assert(!this.red, 'Already a number in reduction context');
    assert(this.negative === 0, 'red works only with positives');
    return ctx.convertTo(this)._forceRed(ctx);
  };

  BN.prototype.fromRed = function fromRed () {
    assert(this.red, 'fromRed works only with numbers in reduction context');
    return this.red.convertFrom(this);
  };

  BN.prototype._forceRed = function _forceRed (ctx) {
    this.red = ctx;
    return this;
  };

  BN.prototype.forceRed = function forceRed (ctx) {
    assert(!this.red, 'Already a number in reduction context');
    return this._forceRed(ctx);
  };

  BN.prototype.redAdd = function redAdd (num) {
    assert(this.red, 'redAdd works only with red numbers');
    return this.red.add(this, num);
  };

  BN.prototype.redIAdd = function redIAdd (num) {
    assert(this.red, 'redIAdd works only with red numbers');
    return this.red.iadd(this, num);
  };

  BN.prototype.redSub = function redSub (num) {
    assert(this.red, 'redSub works only with red numbers');
    return this.red.sub(this, num);
  };

  BN.prototype.redISub = function redISub (num) {
    assert(this.red, 'redISub works only with red numbers');
    return this.red.isub(this, num);
  };

  BN.prototype.redShl = function redShl (num) {
    assert(this.red, 'redShl works only with red numbers');
    return this.red.shl(this, num);
  };

  BN.prototype.redMul = function redMul (num) {
    assert(this.red, 'redMul works only with red numbers');
    this.red._verify2(this, num);
    return this.red.mul(this, num);
  };

  BN.prototype.redIMul = function redIMul (num) {
    assert(this.red, 'redMul works only with red numbers');
    this.red._verify2(this, num);
    return this.red.imul(this, num);
  };

  BN.prototype.redSqr = function redSqr () {
    assert(this.red, 'redSqr works only with red numbers');
    this.red._verify1(this);
    return this.red.sqr(this);
  };

  BN.prototype.redISqr = function redISqr () {
    assert(this.red, 'redISqr works only with red numbers');
    this.red._verify1(this);
    return this.red.isqr(this);
  };

  // Square root over p
  BN.prototype.redSqrt = function redSqrt () {
    assert(this.red, 'redSqrt works only with red numbers');
    this.red._verify1(this);
    return this.red.sqrt(this);
  };

  BN.prototype.redInvm = function redInvm () {
    assert(this.red, 'redInvm works only with red numbers');
    this.red._verify1(this);
    return this.red.invm(this);
  };

  // Return negative clone of `this` % `red modulo`
  BN.prototype.redNeg = function redNeg () {
    assert(this.red, 'redNeg works only with red numbers');
    this.red._verify1(this);
    return this.red.neg(this);
  };

  BN.prototype.redPow = function redPow (num) {
    assert(this.red && !num.red, 'redPow(normalNum)');
    this.red._verify1(this);
    return this.red.pow(this, num);
  };

  // Prime numbers with efficient reduction
  var primes = {
    k256: null,
    p224: null,
    p192: null,
    p25519: null
  };

  // Pseudo-Mersenne prime
  function MPrime (name, p) {
    // P = 2 ^ N - K
    this.name = name;
    this.p = new BN(p, 16);
    this.n = this.p.bitLength();
    this.k = new BN(1).iushln(this.n).isub(this.p);

    this.tmp = this._tmp();
  }

  MPrime.prototype._tmp = function _tmp () {
    var tmp = new BN(null);
    tmp.words = new Array(Math.ceil(this.n / 13));
    return tmp;
  };

  MPrime.prototype.ireduce = function ireduce (num) {
    // Assumes that `num` is less than `P^2`
    // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
    var r = num;
    var rlen;

    do {
      this.split(r, this.tmp);
      r = this.imulK(r);
      r = r.iadd(this.tmp);
      rlen = r.bitLength();
    } while (rlen > this.n);

    var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
    if (cmp === 0) {
      r.words[0] = 0;
      r.length = 1;
    } else if (cmp > 0) {
      r.isub(this.p);
    } else {
      r.strip();
    }

    return r;
  };

  MPrime.prototype.split = function split (input, out) {
    input.iushrn(this.n, 0, out);
  };

  MPrime.prototype.imulK = function imulK (num) {
    return num.imul(this.k);
  };

  function K256 () {
    MPrime.call(
      this,
      'k256',
      'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
  }
  inherits(K256, MPrime);

  K256.prototype.split = function split (input, output) {
    // 256 = 9 * 26 + 22
    var mask = 0x3fffff;

    var outLen = Math.min(input.length, 9);
    for (var i = 0; i < outLen; i++) {
      output.words[i] = input.words[i];
    }
    output.length = outLen;

    if (input.length <= 9) {
      input.words[0] = 0;
      input.length = 1;
      return;
    }

    // Shift by 9 limbs
    var prev = input.words[9];
    output.words[output.length++] = prev & mask;

    for (i = 10; i < input.length; i++) {
      var next = input.words[i] | 0;
      input.words[i - 10] = ((next & mask) << 4) | (prev >>> 22);
      prev = next;
    }
    prev >>>= 22;
    input.words[i - 10] = prev;
    if (prev === 0 && input.length > 10) {
      input.length -= 10;
    } else {
      input.length -= 9;
    }
  };

  K256.prototype.imulK = function imulK (num) {
    // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
    num.words[num.length] = 0;
    num.words[num.length + 1] = 0;
    num.length += 2;

    // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390
    var lo = 0;
    for (var i = 0; i < num.length; i++) {
      var w = num.words[i] | 0;
      lo += w * 0x3d1;
      num.words[i] = lo & 0x3ffffff;
      lo = w * 0x40 + ((lo / 0x4000000) | 0);
    }

    // Fast length reduction
    if (num.words[num.length - 1] === 0) {
      num.length--;
      if (num.words[num.length - 1] === 0) {
        num.length--;
      }
    }
    return num;
  };

  function P224 () {
    MPrime.call(
      this,
      'p224',
      'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
  }
  inherits(P224, MPrime);

  function P192 () {
    MPrime.call(
      this,
      'p192',
      'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
  }
  inherits(P192, MPrime);

  function P25519 () {
    // 2 ^ 255 - 19
    MPrime.call(
      this,
      '25519',
      '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
  }
  inherits(P25519, MPrime);

  P25519.prototype.imulK = function imulK (num) {
    // K = 0x13
    var carry = 0;
    for (var i = 0; i < num.length; i++) {
      var hi = (num.words[i] | 0) * 0x13 + carry;
      var lo = hi & 0x3ffffff;
      hi >>>= 26;

      num.words[i] = lo;
      carry = hi;
    }
    if (carry !== 0) {
      num.words[num.length++] = carry;
    }
    return num;
  };

  // Exported mostly for testing purposes, use plain name instead
  BN._prime = function prime (name) {
    // Cached version of prime
    if (primes[name]) return primes[name];

    var prime;
    if (name === 'k256') {
      prime = new K256();
    } else if (name === 'p224') {
      prime = new P224();
    } else if (name === 'p192') {
      prime = new P192();
    } else if (name === 'p25519') {
      prime = new P25519();
    } else {
      throw new Error('Unknown prime ' + name);
    }
    primes[name] = prime;

    return prime;
  };

  //
  // Base reduction engine
  //
  function Red (m) {
    if (typeof m === 'string') {
      var prime = BN._prime(m);
      this.m = prime.p;
      this.prime = prime;
    } else {
      assert(m.gtn(1), 'modulus must be greater than 1');
      this.m = m;
      this.prime = null;
    }
  }

  Red.prototype._verify1 = function _verify1 (a) {
    assert(a.negative === 0, 'red works only with positives');
    assert(a.red, 'red works only with red numbers');
  };

  Red.prototype._verify2 = function _verify2 (a, b) {
    assert((a.negative | b.negative) === 0, 'red works only with positives');
    assert(a.red && a.red === b.red,
      'red works only with red numbers');
  };

  Red.prototype.imod = function imod (a) {
    if (this.prime) return this.prime.ireduce(a)._forceRed(this);
    return a.umod(this.m)._forceRed(this);
  };

  Red.prototype.neg = function neg (a) {
    if (a.isZero()) {
      return a.clone();
    }

    return this.m.sub(a)._forceRed(this);
  };

  Red.prototype.add = function add (a, b) {
    this._verify2(a, b);

    var res = a.add(b);
    if (res.cmp(this.m) >= 0) {
      res.isub(this.m);
    }
    return res._forceRed(this);
  };

  Red.prototype.iadd = function iadd (a, b) {
    this._verify2(a, b);

    var res = a.iadd(b);
    if (res.cmp(this.m) >= 0) {
      res.isub(this.m);
    }
    return res;
  };

  Red.prototype.sub = function sub (a, b) {
    this._verify2(a, b);

    var res = a.sub(b);
    if (res.cmpn(0) < 0) {
      res.iadd(this.m);
    }
    return res._forceRed(this);
  };

  Red.prototype.isub = function isub (a, b) {
    this._verify2(a, b);

    var res = a.isub(b);
    if (res.cmpn(0) < 0) {
      res.iadd(this.m);
    }
    return res;
  };

  Red.prototype.shl = function shl (a, num) {
    this._verify1(a);
    return this.imod(a.ushln(num));
  };

  Red.prototype.imul = function imul (a, b) {
    this._verify2(a, b);
    return this.imod(a.imul(b));
  };

  Red.prototype.mul = function mul (a, b) {
    this._verify2(a, b);
    return this.imod(a.mul(b));
  };

  Red.prototype.isqr = function isqr (a) {
    return this.imul(a, a.clone());
  };

  Red.prototype.sqr = function sqr (a) {
    return this.mul(a, a);
  };

  Red.prototype.sqrt = function sqrt (a) {
    if (a.isZero()) return a.clone();

    var mod3 = this.m.andln(3);
    assert(mod3 % 2 === 1);

    // Fast case
    if (mod3 === 3) {
      var pow = this.m.add(new BN(1)).iushrn(2);
      return this.pow(a, pow);
    }

    // Tonelli-Shanks algorithm (Totally unoptimized and slow)
    //
    // Find Q and S, that Q * 2 ^ S = (P - 1)
    var q = this.m.subn(1);
    var s = 0;
    while (!q.isZero() && q.andln(1) === 0) {
      s++;
      q.iushrn(1);
    }
    assert(!q.isZero());

    var one = new BN(1).toRed(this);
    var nOne = one.redNeg();

    // Find quadratic non-residue
    // NOTE: Max is such because of generalized Riemann hypothesis.
    var lpow = this.m.subn(1).iushrn(1);
    var z = this.m.bitLength();
    z = new BN(2 * z * z).toRed(this);

    while (this.pow(z, lpow).cmp(nOne) !== 0) {
      z.redIAdd(nOne);
    }

    var c = this.pow(z, q);
    var r = this.pow(a, q.addn(1).iushrn(1));
    var t = this.pow(a, q);
    var m = s;
    while (t.cmp(one) !== 0) {
      var tmp = t;
      for (var i = 0; tmp.cmp(one) !== 0; i++) {
        tmp = tmp.redSqr();
      }
      assert(i < m);
      var b = this.pow(c, new BN(1).iushln(m - i - 1));

      r = r.redMul(b);
      c = b.redSqr();
      t = t.redMul(c);
      m = i;
    }

    return r;
  };

  Red.prototype.invm = function invm (a) {
    var inv = a._invmp(this.m);
    if (inv.negative !== 0) {
      inv.negative = 0;
      return this.imod(inv).redNeg();
    } else {
      return this.imod(inv);
    }
  };

  Red.prototype.pow = function pow (a, num) {
    if (num.isZero()) return new BN(1).toRed(this);
    if (num.cmpn(1) === 0) return a.clone();

    var windowSize = 4;
    var wnd = new Array(1 << windowSize);
    wnd[0] = new BN(1).toRed(this);
    wnd[1] = a;
    for (var i = 2; i < wnd.length; i++) {
      wnd[i] = this.mul(wnd[i - 1], a);
    }

    var res = wnd[0];
    var current = 0;
    var currentLen = 0;
    var start = num.bitLength() % 26;
    if (start === 0) {
      start = 26;
    }

    for (i = num.length - 1; i >= 0; i--) {
      var word = num.words[i];
      for (var j = start - 1; j >= 0; j--) {
        var bit = (word >> j) & 1;
        if (res !== wnd[0]) {
          res = this.sqr(res);
        }

        if (bit === 0 && current === 0) {
          currentLen = 0;
          continue;
        }

        current <<= 1;
        current |= bit;
        currentLen++;
        if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;

        res = this.mul(res, wnd[current]);
        currentLen = 0;
        current = 0;
      }
      start = 26;
    }

    return res;
  };

  Red.prototype.convertTo = function convertTo (num) {
    var r = num.umod(this.m);

    return r === num ? r.clone() : r;
  };

  Red.prototype.convertFrom = function convertFrom (num) {
    var res = num.clone();
    res.red = null;
    return res;
  };

  //
  // Montgomery method engine
  //

  BN.mont = function mont (num) {
    return new Mont(num);
  };

  function Mont (m) {
    Red.call(this, m);

    this.shift = this.m.bitLength();
    if (this.shift % 26 !== 0) {
      this.shift += 26 - (this.shift % 26);
    }

    this.r = new BN(1).iushln(this.shift);
    this.r2 = this.imod(this.r.sqr());
    this.rinv = this.r._invmp(this.m);

    this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
    this.minv = this.minv.umod(this.r);
    this.minv = this.r.sub(this.minv);
  }
  inherits(Mont, Red);

  Mont.prototype.convertTo = function convertTo (num) {
    return this.imod(num.ushln(this.shift));
  };

  Mont.prototype.convertFrom = function convertFrom (num) {
    var r = this.imod(num.mul(this.rinv));
    r.red = null;
    return r;
  };

  Mont.prototype.imul = function imul (a, b) {
    if (a.isZero() || b.isZero()) {
      a.words[0] = 0;
      a.length = 1;
      return a;
    }

    var t = a.imul(b);
    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    var u = t.isub(c).iushrn(this.shift);
    var res = u;

    if (u.cmp(this.m) >= 0) {
      res = u.isub(this.m);
    } else if (u.cmpn(0) < 0) {
      res = u.iadd(this.m);
    }

    return res._forceRed(this);
  };

  Mont.prototype.mul = function mul (a, b) {
    if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);

    var t = a.mul(b);
    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    var u = t.isub(c).iushrn(this.shift);
    var res = u;
    if (u.cmp(this.m) >= 0) {
      res = u.isub(this.m);
    } else if (u.cmpn(0) < 0) {
      res = u.iadd(this.m);
    }

    return res._forceRed(this);
  };

  Mont.prototype.invm = function invm (a) {
    // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
    var res = this.imod(a._invmp(this.m).mul(this.r2));
    return res._forceRed(this);
  };
})(typeof module === 'undefined' || module, this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(64)(module)))

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * secp256k1-native.js - wrapper for secp256k1-node.
 */



const assert = __webpack_require__(0);
const secp256k1 = __webpack_require__(136);
const random = __webpack_require__(28);

/**
 * @exports crypto/secp256k1
 */

const ec = exports;

/*
 * Constants
 */

const ZERO_S = Buffer.from(
  '0000000000000000000000000000000000000000000000000000000000000000',
  'hex'
);

const HALF_ORDER = Buffer.from(
  '7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0',
  'hex');

/**
 * Whether we're using native bindings.
 * @const {Boolean}
 * @private
 */

ec.binding = true;

/**
 * Generate a private key.
 * @returns {Buffer} Private key.
 */

ec.generatePrivateKey = function generatePrivateKey() {
  let priv;

  do {
    priv = random.randomBytes(32);
  } while (!secp256k1.privateKeyVerify(priv));

  return priv;
};

/**
 * Create a public key from a private key.
 * @param {Buffer} priv
 * @param {Boolean?} compress
 * @returns {Buffer}
 */

ec.publicKeyCreate = function publicKeyCreate(priv, compress) {
  assert(Buffer.isBuffer(priv));
  return secp256k1.publicKeyCreate(priv, compress);
};

/**
 * Compress or decompress public key.
 * @param {Buffer} pub
 * @returns {Buffer}
 */

ec.publicKeyConvert = function publicKeyConvert(key, compress) {
  return secp256k1.publicKeyConvert(key, compress);
};

/**
 * ((tweak + key) % n)
 * @param {Buffer} privateKey
 * @param {Buffer} tweak
 * @returns {Buffer} privateKey
 */

ec.privateKeyTweakAdd = function privateKeyTweakAdd(privateKey, tweak) {
  return secp256k1.privateKeyTweakAdd(privateKey, tweak);
};

/**
 * ((g * tweak) + key)
 * @param {Buffer} publicKey
 * @param {Buffer} tweak
 * @returns {Buffer} publicKey
 */

ec.publicKeyTweakAdd = function publicKeyTweakAdd(publicKey, tweak, compress) {
  return secp256k1.publicKeyTweakAdd(publicKey, tweak, compress);
};

/**
 * Create an ecdh.
 * @param {Buffer} pub
 * @param {Buffer} priv
 * @returns {Buffer}
 */

ec.ecdh = function ecdh(pub, priv) {
  const point = secp256k1.ecdhUnsafe(pub, priv, true);
  return point.slice(1, 33);
};

/**
 * Recover a public key.
 * @param {Buffer} msg
 * @param {Buffer} sig
 * @param {Number?} j
 * @param {Boolean?} compress
 * @returns {Buffer[]|Buffer|null}
 */

ec.recover = function recover(msg, sig, j, compress) {
  let key;

  if (!j)
    j = 0;

  try {
    sig = secp256k1.signatureImport(sig);
  } catch (e) {
    return null;
  }

  try {
    key = secp256k1.recover(msg, sig, j, compress);
  } catch (e) {
    return null;
  }

  return key;
};

/**
 * Verify a signature.
 * @param {Buffer} msg
 * @param {Buffer} sig - DER formatted.
 * @param {Buffer} key
 * @returns {Boolean}
 */

ec.verify = function verify(msg, sig, key) {
  assert(Buffer.isBuffer(msg));
  assert(Buffer.isBuffer(sig));
  assert(Buffer.isBuffer(key));

  if (sig.length === 0)
    return false;

  if (key.length === 0)
    return false;

  try {
    sig = secp256k1.signatureImportLax(sig);
    sig = secp256k1.signatureNormalize(sig);
    return secp256k1.verify(msg, sig, key);
  } catch (e) {
    return false;
  }
};

/**
 * Validate a public key.
 * @param {Buffer} key
 * @returns {Boolean} True if buffer is a valid public key.
 */

ec.publicKeyVerify = function publicKeyVerify(key) {
  return secp256k1.publicKeyVerify(key);
};

/**
 * Validate a private key.
 * @param {Buffer} key
 * @returns {Boolean} True if buffer is a valid private key.
 */

ec.privateKeyVerify = function privateKeyVerify(key) {
  return secp256k1.privateKeyVerify(key);
};

/**
 * Sign a message.
 * @param {Buffer} msg
 * @param {Buffer} key - Private key.
 * @returns {Buffer} DER-formatted signature.
 */

ec.sign = function sign(msg, key) {
  assert(Buffer.isBuffer(msg));
  assert(Buffer.isBuffer(key));

  // Sign message
  let sig = secp256k1.sign(msg, key);

  // Ensure low S value
  sig = secp256k1.signatureNormalize(sig.signature);

  // Convert to DER
  return secp256k1.signatureExport(sig);
};

/**
 * Convert DER signature to R/S.
 * @param {Buffer} sig
 * @returns {Buffer} R/S-formatted signature.
 */

ec.fromDER = function fromDER(sig) {
  assert(Buffer.isBuffer(sig));
  return secp256k1.signatureImport(sig);
};

/**
 * Convert R/S signature to DER.
 * @param {Buffer} sig
 * @returns {Buffer} DER-formatted signature.
 */

ec.toDER = function toDER(sig) {
  assert(Buffer.isBuffer(sig));
  return secp256k1.signatureExport(sig);
};

/**
 * Test whether a signature has a low S value.
 * @param {Buffer} sig
 * @returns {Boolean}
 */

ec.isLowS = function isLowS(sig) {
  let s;

  try {
    const rs = secp256k1.signatureImport(sig);
    s = rs.slice(32, 64);
  } catch (e) {
    return false;
  }

  if (s.equals(ZERO_S))
    return false;

  // If S is greater than half the order,
  // it's too high.
  if (s.compare(HALF_ORDER) > 0)
    return false;

  return true;
};


/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = require("secp256k1");

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * secp256k1-elliptic.js - wrapper for elliptic.
 */



const assert = __webpack_require__(0);
const elliptic = __webpack_require__(9);
const secp256k1 = elliptic.ec('secp256k1');
const Signature = __webpack_require__(67);
const BN = __webpack_require__(26);
const curve = secp256k1.curve;

/**
 * @exports crypto/secp256k1-elliptic
 * @ignore
 */

const ec = exports;

/**
 * Whether we're using native bindings.
 * @const {Boolean}
 */

ec.binding = false;

/**
 * Generate a private key.
 * @returns {Buffer} Private key.
 */

ec.generatePrivateKey = function generatePrivateKey() {
  const key = secp256k1.genKeyPair();
  return key.getPrivate().toArrayLike(Buffer, 'be', 32);
};

/**
 * Create a public key from a private key.
 * @param {Buffer} priv
 * @param {Boolean?} compress
 * @returns {Buffer}
 */

ec.publicKeyCreate = function publicKeyCreate(priv, compress) {
  assert(Buffer.isBuffer(priv));

  if (compress == null)
    compress = true;

  const key = secp256k1.keyPair({ priv: priv });

  return Buffer.from(key.getPublic(compress, 'array'));
};

/**
 * Compress or decompress public key.
 * @param {Buffer} pub
 * @returns {Buffer}
 */

ec.publicKeyConvert = function publicKeyConvert(key, compress) {
  const point = curve.decodePoint(key);

  if (compress == null)
    compress = true;

  return Buffer.from(point.encode('array', compress));
};

/**
 * ((tweak + key) % n)
 * @param {Buffer} privateKey
 * @param {Buffer} tweak
 * @returns {Buffer} privateKey
 */

ec.privateKeyTweakAdd = function privateKeyTweakAdd(privateKey, tweak) {
  const key = new BN(tweak)
    .add(new BN(privateKey))
    .mod(curve.n)
    .toArrayLike(Buffer, 'be', 32);

  // Only a 1 in 2^127 chance of happening.
  if (!ec.privateKeyVerify(key))
    throw new Error('Private key is invalid.');

  return key;
};

/**
 * ((g * tweak) + key)
 * @param {Buffer} publicKey
 * @param {Buffer} tweak
 * @returns {Buffer} publicKey
 */

ec.publicKeyTweakAdd = function publicKeyTweakAdd(publicKey, tweak, compress) {
  const key = curve.decodePoint(publicKey);
  const point = curve.g.mul(new BN(tweak)).add(key);

  if (compress == null)
    compress = true;

  const pub = Buffer.from(point.encode('array', compress));

  if (!ec.publicKeyVerify(pub))
    throw new Error('Public key is invalid.');

  return pub;
};

/**
 * Create an ecdh.
 * @param {Buffer} pub
 * @param {Buffer} priv
 * @returns {Buffer}
 */

ec.ecdh = function ecdh(pub, priv) {
  priv = secp256k1.keyPair({ priv: priv });
  pub = secp256k1.keyPair({ pub: pub });
  return priv.derive(pub.getPublic()).toArrayLike(Buffer, 'be', 32);
};

/**
 * Recover a public key.
 * @param {Buffer} msg
 * @param {Buffer} sig
 * @param {Number?} j
 * @param {Boolean?} compress
 * @returns {Buffer[]|Buffer|null}
 */

ec.recover = function recover(msg, sig, j, compress) {
  if (!j)
    j = 0;

  if (compress == null)
    compress = true;

  let point;
  try {
    point = secp256k1.recoverPubKey(msg, sig, j);
  } catch (e) {
    return null;
  }

  return Buffer.from(point.encode('array', compress));
};

/**
 * Verify a signature.
 * @param {Buffer} msg
 * @param {Buffer} sig - DER formatted.
 * @param {Buffer} key
 * @returns {Boolean}
 */

ec.verify = function verify(msg, sig, key) {
  assert(Buffer.isBuffer(msg));
  assert(Buffer.isBuffer(sig));
  assert(Buffer.isBuffer(key));

  if (sig.length === 0)
    return false;

  if (key.length === 0)
    return false;

  // Attempt to normalize the signature
  // length before passing to elliptic.
  // https://github.com/indutny/elliptic/issues/78
  sig = normalizeLength(sig);

  try {
    return secp256k1.verify(msg, sig, key);
  } catch (e) {
    return false;
  }
};

/**
 * Validate a public key.
 * @param {Buffer} key
 * @returns {Boolean} True if buffer is a valid public key.
 */

ec.publicKeyVerify = function publicKeyVerify(key) {
  try {
    const pub = secp256k1.keyPair({ pub: key });
    return pub.validate();
  } catch (e) {
    return false;
  }
};

/**
 * Validate a private key.
 * @param {Buffer} key
 * @returns {Boolean} True if buffer is a valid private key.
 */

ec.privateKeyVerify = function privateKeyVerify(key) {
  if (key.length !== 32)
    return false;

  key = new BN(key);

  return key.cmpn(0) !== 0 && key.cmp(curve.n) < 0;
};

/**
 * Sign a message.
 * @param {Buffer} msg
 * @param {Buffer} key - Private key.
 * @returns {Buffer} DER-formatted signature.
 */

ec.sign = function sign(msg, key) {
  assert(Buffer.isBuffer(msg));
  assert(Buffer.isBuffer(key));

  // Sign message and ensure low S value
  const sig = secp256k1.sign(msg, key, { canonical: true });

  // Convert to DER
  return Buffer.from(sig.toDER());
};

/**
 * Convert DER signature to R/S.
 * @param {Buffer} raw
 * @returns {Buffer} R/S-formatted signature.
 */

ec.fromDER = function fromDER(raw) {
  assert(Buffer.isBuffer(raw));

  const sig = new Signature(raw);
  const out = Buffer.allocUnsafe(64);

  sig.r.toArrayLike(Buffer, 'be', 32).copy(out, 0);
  sig.s.toArrayLike(Buffer, 'be', 32).copy(out, 32);

  return out;
};

/**
 * Convert R/S signature to DER.
 * @param {Buffer} sig
 * @returns {Buffer} DER-formatted signature.
 */

ec.toDER = function toDER(raw) {
  assert(Buffer.isBuffer(raw));

  const sig = new Signature({
    r: new BN(raw.slice(0, 32), 'be'),
    s: new BN(raw.slice(32, 64), 'be')
  });

  return Buffer.from(sig.toDER());
};

/**
 * Test whether a signature has a low S value.
 * @param {Buffer} sig
 * @returns {Boolean}
 */

ec.isLowS = function isLowS(raw) {
  let sig;
  try {
    sig = new Signature(raw);
  } catch (e) {
    return false;
  }

  if (sig.s.cmpn(0) === 0)
    return false;

  // If S is greater than half the order,
  // it's too high.
  if (sig.s.cmp(secp256k1.nh) > 0)
    return false;

  return true;
};

/*
 * Helpers
 */

function normalizeLength(sig) {
  let data = sig;
  let pos = 0;
  let len;

  if (data[pos++] !== 0x30)
    return sig;

  [len, pos] = getLength(data, pos);

  if (data.length > len + pos)
    data = data.slice(0, len + pos);

  if (data[pos++] !== 0x02)
    return sig;

  // R length.
  [len, pos] = getLength(data, pos);

  pos += len;

  if (data[pos++] !== 0x02)
    return sig;

  // S length.
  [len, pos] = getLength(data, pos);

  if (data.length > len + pos)
    data = data.slice(0, len + pos);

  return data;
}

function getLength(buf, pos) {
  const initial = buf[pos++];

  if (!(initial & 0x80))
    return [initial, pos];

  const len = initial & 0xf;
  let val = 0;

  for (let i = 0; i < len; i++) {
    val <<= 8;
    val |= buf[pos++];
  }

  return [val, pos];
}


/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports = {"_from":"elliptic@6.4.0","_id":"elliptic@6.4.0","_inBundle":false,"_integrity":"sha1-ysmvh2LIWDYYcAPI3+GT5eLq5d8=","_location":"/elliptic","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"elliptic@6.4.0","name":"elliptic","escapedName":"elliptic","rawSpec":"6.4.0","saveSpec":null,"fetchSpec":"6.4.0"},"_requiredBy":["#USER","/"],"_resolved":"https://registry.npmjs.org/elliptic/-/elliptic-6.4.0.tgz","_shasum":"cac9af8762c85836187003c8dfe193e5e2eae5df","_spec":"elliptic@6.4.0","_where":"C:\\Users\\pakru\\Desktop\\New folder","author":{"name":"Fedor Indutny","email":"fedor@indutny.com"},"bugs":{"url":"https://github.com/indutny/elliptic/issues"},"bundleDependencies":false,"dependencies":{"bn.js":"^4.4.0","brorand":"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0","inherits":"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"},"deprecated":false,"description":"EC cryptography","devDependencies":{"brfs":"^1.4.3","coveralls":"^2.11.3","grunt":"^0.4.5","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^8.6.2","istanbul":"^0.4.2","jscs":"^2.9.0","jshint":"^2.6.0","mocha":"^2.1.0"},"files":["lib"],"homepage":"https://github.com/indutny/elliptic","keywords":["EC","Elliptic","curve","Cryptography"],"license":"MIT","main":"lib/elliptic.js","name":"elliptic","repository":{"type":"git","url":"git+ssh://git@github.com/indutny/elliptic.git"},"scripts":{"jscs":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","jshint":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","lint":"npm run jscs && npm run jshint","test":"npm run lint && npm run unit","unit":"istanbul test _mocha --reporter=spec test/index.js","version":"grunt dist && git add dist/"},"version":"6.4.0"}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = exports;
var BN = __webpack_require__(17);
var minAssert = __webpack_require__(22);
var minUtils = __webpack_require__(86);

utils.assert = minAssert;
utils.toArray = minUtils.toArray;
utils.zero2 = minUtils.zero2;
utils.toHex = minUtils.toHex;
utils.encode = minUtils.encode;

// Represent num in a w-NAF form
function getNAF(num, w) {
  var naf = [];
  var ws = 1 << (w + 1);
  var k = num.clone();
  while (k.cmpn(1) >= 0) {
    var z;
    if (k.isOdd()) {
      var mod = k.andln(ws - 1);
      if (mod > (ws >> 1) - 1)
        z = (ws >> 1) - mod;
      else
        z = mod;
      k.isubn(z);
    } else {
      z = 0;
    }
    naf.push(z);

    // Optimization, shift by word if possible
    var shift = (k.cmpn(0) !== 0 && k.andln(ws - 1) === 0) ? (w + 1) : 1;
    for (var i = 1; i < shift; i++)
      naf.push(0);
    k.iushrn(shift);
  }

  return naf;
}
utils.getNAF = getNAF;

// Represent k1, k2 in a Joint Sparse Form
function getJSF(k1, k2) {
  var jsf = [
    [],
    []
  ];

  k1 = k1.clone();
  k2 = k2.clone();
  var d1 = 0;
  var d2 = 0;
  while (k1.cmpn(-d1) > 0 || k2.cmpn(-d2) > 0) {

    // First phase
    var m14 = (k1.andln(3) + d1) & 3;
    var m24 = (k2.andln(3) + d2) & 3;
    if (m14 === 3)
      m14 = -1;
    if (m24 === 3)
      m24 = -1;
    var u1;
    if ((m14 & 1) === 0) {
      u1 = 0;
    } else {
      var m8 = (k1.andln(7) + d1) & 7;
      if ((m8 === 3 || m8 === 5) && m24 === 2)
        u1 = -m14;
      else
        u1 = m14;
    }
    jsf[0].push(u1);

    var u2;
    if ((m24 & 1) === 0) {
      u2 = 0;
    } else {
      var m8 = (k2.andln(7) + d2) & 7;
      if ((m8 === 3 || m8 === 5) && m14 === 2)
        u2 = -m24;
      else
        u2 = m24;
    }
    jsf[1].push(u2);

    // Second phase
    if (2 * d1 === u1 + 1)
      d1 = 1 - d1;
    if (2 * d2 === u2 + 1)
      d2 = 1 - d2;
    k1.iushrn(1);
    k2.iushrn(1);
  }

  return jsf;
}
utils.getJSF = getJSF;

function cachedProperty(obj, name, computer) {
  var key = '_' + name;
  obj.prototype[name] = function cachedProperty() {
    return this[key] !== undefined ? this[key] :
           this[key] = computer.call(this);
  };
}
utils.cachedProperty = cachedProperty;

function parseBytes(bytes) {
  return typeof bytes === 'string' ? utils.toArray(bytes, 'hex') :
                                     bytes;
}
utils.parseBytes = parseBytes;

function intFromLE(bytes) {
  return new BN(bytes, 'hex', 'le');
}
utils.intFromLE = intFromLE;



/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var r;

module.exports = function rand(len) {
  if (!r)
    r = new Rand(null);

  return r.generate(len);
};

function Rand(rand) {
  this.rand = rand;
}
module.exports.Rand = Rand;

Rand.prototype.generate = function generate(len) {
  return this._rand(len);
};

// Emulate crypto API using randy
Rand.prototype._rand = function _rand(n) {
  if (this.rand.getBytes)
    return this.rand.getBytes(n);

  var res = new Uint8Array(n);
  for (var i = 0; i < res.length; i++)
    res[i] = this.rand.getByte();
  return res;
};

if (typeof self === 'object') {
  if (self.crypto && self.crypto.getRandomValues) {
    // Modern browsers
    Rand.prototype._rand = function _rand(n) {
      var arr = new Uint8Array(n);
      self.crypto.getRandomValues(arr);
      return arr;
    };
  } else if (self.msCrypto && self.msCrypto.getRandomValues) {
    // IE
    Rand.prototype._rand = function _rand(n) {
      var arr = new Uint8Array(n);
      self.msCrypto.getRandomValues(arr);
      return arr;
    };

  // Safari's WebWorkers do not have `crypto`
  } else if (typeof window === 'object') {
    // Old junk
    Rand.prototype._rand = function() {
      throw new Error('Not implemented yet');
    };
  }
} else {
  // Node.js or Web worker with no crypto support
  try {
    var crypto = __webpack_require__(24);
    if (typeof crypto.randomBytes !== 'function')
      throw new Error('Not supported');

    Rand.prototype._rand = function _rand(n) {
      return crypto.randomBytes(n);
    };
  } catch (e) {
  }
}


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BN = __webpack_require__(17);
var elliptic = __webpack_require__(9);
var utils = elliptic.utils;
var getNAF = utils.getNAF;
var getJSF = utils.getJSF;
var assert = utils.assert;

function BaseCurve(type, conf) {
  this.type = type;
  this.p = new BN(conf.p, 16);

  // Use Montgomery, when there is no fast reduction for the prime
  this.red = conf.prime ? BN.red(conf.prime) : BN.mont(this.p);

  // Useful for many curves
  this.zero = new BN(0).toRed(this.red);
  this.one = new BN(1).toRed(this.red);
  this.two = new BN(2).toRed(this.red);

  // Curve configuration, optional
  this.n = conf.n && new BN(conf.n, 16);
  this.g = conf.g && this.pointFromJSON(conf.g, conf.gRed);

  // Temporary arrays
  this._wnafT1 = new Array(4);
  this._wnafT2 = new Array(4);
  this._wnafT3 = new Array(4);
  this._wnafT4 = new Array(4);

  // Generalized Greg Maxwell's trick
  var adjustCount = this.n && this.p.div(this.n);
  if (!adjustCount || adjustCount.cmpn(100) > 0) {
    this.redN = null;
  } else {
    this._maxwellTrick = true;
    this.redN = this.n.toRed(this.red);
  }
}
module.exports = BaseCurve;

BaseCurve.prototype.point = function point() {
  throw new Error('Not implemented');
};

BaseCurve.prototype.validate = function validate() {
  throw new Error('Not implemented');
};

BaseCurve.prototype._fixedNafMul = function _fixedNafMul(p, k) {
  assert(p.precomputed);
  var doubles = p._getDoubles();

  var naf = getNAF(k, 1);
  var I = (1 << (doubles.step + 1)) - (doubles.step % 2 === 0 ? 2 : 1);
  I /= 3;

  // Translate into more windowed form
  var repr = [];
  for (var j = 0; j < naf.length; j += doubles.step) {
    var nafW = 0;
    for (var k = j + doubles.step - 1; k >= j; k--)
      nafW = (nafW << 1) + naf[k];
    repr.push(nafW);
  }

  var a = this.jpoint(null, null, null);
  var b = this.jpoint(null, null, null);
  for (var i = I; i > 0; i--) {
    for (var j = 0; j < repr.length; j++) {
      var nafW = repr[j];
      if (nafW === i)
        b = b.mixedAdd(doubles.points[j]);
      else if (nafW === -i)
        b = b.mixedAdd(doubles.points[j].neg());
    }
    a = a.add(b);
  }
  return a.toP();
};

BaseCurve.prototype._wnafMul = function _wnafMul(p, k) {
  var w = 4;

  // Precompute window
  var nafPoints = p._getNAFPoints(w);
  w = nafPoints.wnd;
  var wnd = nafPoints.points;

  // Get NAF form
  var naf = getNAF(k, w);

  // Add `this`*(N+1) for every w-NAF index
  var acc = this.jpoint(null, null, null);
  for (var i = naf.length - 1; i >= 0; i--) {
    // Count zeroes
    for (var k = 0; i >= 0 && naf[i] === 0; i--)
      k++;
    if (i >= 0)
      k++;
    acc = acc.dblp(k);

    if (i < 0)
      break;
    var z = naf[i];
    assert(z !== 0);
    if (p.type === 'affine') {
      // J +- P
      if (z > 0)
        acc = acc.mixedAdd(wnd[(z - 1) >> 1]);
      else
        acc = acc.mixedAdd(wnd[(-z - 1) >> 1].neg());
    } else {
      // J +- J
      if (z > 0)
        acc = acc.add(wnd[(z - 1) >> 1]);
      else
        acc = acc.add(wnd[(-z - 1) >> 1].neg());
    }
  }
  return p.type === 'affine' ? acc.toP() : acc;
};

BaseCurve.prototype._wnafMulAdd = function _wnafMulAdd(defW,
                                                       points,
                                                       coeffs,
                                                       len,
                                                       jacobianResult) {
  var wndWidth = this._wnafT1;
  var wnd = this._wnafT2;
  var naf = this._wnafT3;

  // Fill all arrays
  var max = 0;
  for (var i = 0; i < len; i++) {
    var p = points[i];
    var nafPoints = p._getNAFPoints(defW);
    wndWidth[i] = nafPoints.wnd;
    wnd[i] = nafPoints.points;
  }

  // Comb small window NAFs
  for (var i = len - 1; i >= 1; i -= 2) {
    var a = i - 1;
    var b = i;
    if (wndWidth[a] !== 1 || wndWidth[b] !== 1) {
      naf[a] = getNAF(coeffs[a], wndWidth[a]);
      naf[b] = getNAF(coeffs[b], wndWidth[b]);
      max = Math.max(naf[a].length, max);
      max = Math.max(naf[b].length, max);
      continue;
    }

    var comb = [
      points[a], /* 1 */
      null, /* 3 */
      null, /* 5 */
      points[b] /* 7 */
    ];

    // Try to avoid Projective points, if possible
    if (points[a].y.cmp(points[b].y) === 0) {
      comb[1] = points[a].add(points[b]);
      comb[2] = points[a].toJ().mixedAdd(points[b].neg());
    } else if (points[a].y.cmp(points[b].y.redNeg()) === 0) {
      comb[1] = points[a].toJ().mixedAdd(points[b]);
      comb[2] = points[a].add(points[b].neg());
    } else {
      comb[1] = points[a].toJ().mixedAdd(points[b]);
      comb[2] = points[a].toJ().mixedAdd(points[b].neg());
    }

    var index = [
      -3, /* -1 -1 */
      -1, /* -1 0 */
      -5, /* -1 1 */
      -7, /* 0 -1 */
      0, /* 0 0 */
      7, /* 0 1 */
      5, /* 1 -1 */
      1, /* 1 0 */
      3  /* 1 1 */
    ];

    var jsf = getJSF(coeffs[a], coeffs[b]);
    max = Math.max(jsf[0].length, max);
    naf[a] = new Array(max);
    naf[b] = new Array(max);
    for (var j = 0; j < max; j++) {
      var ja = jsf[0][j] | 0;
      var jb = jsf[1][j] | 0;

      naf[a][j] = index[(ja + 1) * 3 + (jb + 1)];
      naf[b][j] = 0;
      wnd[a] = comb;
    }
  }

  var acc = this.jpoint(null, null, null);
  var tmp = this._wnafT4;
  for (var i = max; i >= 0; i--) {
    var k = 0;

    while (i >= 0) {
      var zero = true;
      for (var j = 0; j < len; j++) {
        tmp[j] = naf[j][i] | 0;
        if (tmp[j] !== 0)
          zero = false;
      }
      if (!zero)
        break;
      k++;
      i--;
    }
    if (i >= 0)
      k++;
    acc = acc.dblp(k);
    if (i < 0)
      break;

    for (var j = 0; j < len; j++) {
      var z = tmp[j];
      var p;
      if (z === 0)
        continue;
      else if (z > 0)
        p = wnd[j][(z - 1) >> 1];
      else if (z < 0)
        p = wnd[j][(-z - 1) >> 1].neg();

      if (p.type === 'affine')
        acc = acc.mixedAdd(p);
      else
        acc = acc.add(p);
    }
  }
  // Zeroify references
  for (var i = 0; i < len; i++)
    wnd[i] = null;

  if (jacobianResult)
    return acc;
  else
    return acc.toP();
};

function BasePoint(curve, type) {
  this.curve = curve;
  this.type = type;
  this.precomputed = null;
}
BaseCurve.BasePoint = BasePoint;

BasePoint.prototype.eq = function eq(/*other*/) {
  throw new Error('Not implemented');
};

BasePoint.prototype.validate = function validate() {
  return this.curve.validate(this);
};

BaseCurve.prototype.decodePoint = function decodePoint(bytes, enc) {
  bytes = utils.toArray(bytes, enc);

  var len = this.p.byteLength();

  // uncompressed, hybrid-odd, hybrid-even
  if ((bytes[0] === 0x04 || bytes[0] === 0x06 || bytes[0] === 0x07) &&
      bytes.length - 1 === 2 * len) {
    if (bytes[0] === 0x06)
      assert(bytes[bytes.length - 1] % 2 === 0);
    else if (bytes[0] === 0x07)
      assert(bytes[bytes.length - 1] % 2 === 1);

    var res =  this.point(bytes.slice(1, 1 + len),
                          bytes.slice(1 + len, 1 + 2 * len));

    return res;
  } else if ((bytes[0] === 0x02 || bytes[0] === 0x03) &&
              bytes.length - 1 === len) {
    return this.pointFromX(bytes.slice(1, 1 + len), bytes[0] === 0x03);
  }
  throw new Error('Unknown point format');
};

BasePoint.prototype.encodeCompressed = function encodeCompressed(enc) {
  return this.encode(enc, true);
};

BasePoint.prototype._encode = function _encode(compact) {
  var len = this.curve.p.byteLength();
  var x = this.getX().toArray('be', len);

  if (compact)
    return [ this.getY().isEven() ? 0x02 : 0x03 ].concat(x);

  return [ 0x04 ].concat(x, this.getY().toArray('be', len)) ;
};

BasePoint.prototype.encode = function encode(enc, compact) {
  return utils.encode(this._encode(compact), enc);
};

BasePoint.prototype.precompute = function precompute(power) {
  if (this.precomputed)
    return this;

  var precomputed = {
    doubles: null,
    naf: null,
    beta: null
  };
  precomputed.naf = this._getNAFPoints(8);
  precomputed.doubles = this._getDoubles(4, power);
  precomputed.beta = this._getBeta();
  this.precomputed = precomputed;

  return this;
};

BasePoint.prototype._hasDoubles = function _hasDoubles(k) {
  if (!this.precomputed)
    return false;

  var doubles = this.precomputed.doubles;
  if (!doubles)
    return false;

  return doubles.points.length >= Math.ceil((k.bitLength() + 1) / doubles.step);
};

BasePoint.prototype._getDoubles = function _getDoubles(step, power) {
  if (this.precomputed && this.precomputed.doubles)
    return this.precomputed.doubles;

  var doubles = [ this ];
  var acc = this;
  for (var i = 0; i < power; i += step) {
    for (var j = 0; j < step; j++)
      acc = acc.dbl();
    doubles.push(acc);
  }
  return {
    step: step,
    points: doubles
  };
};

BasePoint.prototype._getNAFPoints = function _getNAFPoints(wnd) {
  if (this.precomputed && this.precomputed.naf)
    return this.precomputed.naf;

  var res = [ this ];
  var max = (1 << wnd) - 1;
  var dbl = max === 1 ? null : this.dbl();
  for (var i = 1; i < max; i++)
    res[i] = res[i - 1].add(dbl);
  return {
    wnd: wnd,
    points: res
  };
};

BasePoint.prototype._getBeta = function _getBeta() {
  return null;
};

BasePoint.prototype.dblp = function dblp(k) {
  var r = this;
  for (var i = 0; i < k; i++)
    r = r.dbl();
  return r;
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curve = __webpack_require__(38);
var elliptic = __webpack_require__(9);
var BN = __webpack_require__(17);
var inherits = __webpack_require__(39);
var Base = curve.base;

var assert = elliptic.utils.assert;

function ShortCurve(conf) {
  Base.call(this, 'short', conf);

  this.a = new BN(conf.a, 16).toRed(this.red);
  this.b = new BN(conf.b, 16).toRed(this.red);
  this.tinv = this.two.redInvm();

  this.zeroA = this.a.fromRed().cmpn(0) === 0;
  this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0;

  // If the curve is endomorphic, precalculate beta and lambda
  this.endo = this._getEndomorphism(conf);
  this._endoWnafT1 = new Array(4);
  this._endoWnafT2 = new Array(4);
}
inherits(ShortCurve, Base);
module.exports = ShortCurve;

ShortCurve.prototype._getEndomorphism = function _getEndomorphism(conf) {
  // No efficient endomorphism
  if (!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)
    return;

  // Compute beta and lambda, that lambda * P = (beta * Px; Py)
  var beta;
  var lambda;
  if (conf.beta) {
    beta = new BN(conf.beta, 16).toRed(this.red);
  } else {
    var betas = this._getEndoRoots(this.p);
    // Choose the smallest beta
    beta = betas[0].cmp(betas[1]) < 0 ? betas[0] : betas[1];
    beta = beta.toRed(this.red);
  }
  if (conf.lambda) {
    lambda = new BN(conf.lambda, 16);
  } else {
    // Choose the lambda that is matching selected beta
    var lambdas = this._getEndoRoots(this.n);
    if (this.g.mul(lambdas[0]).x.cmp(this.g.x.redMul(beta)) === 0) {
      lambda = lambdas[0];
    } else {
      lambda = lambdas[1];
      assert(this.g.mul(lambda).x.cmp(this.g.x.redMul(beta)) === 0);
    }
  }

  // Get basis vectors, used for balanced length-two representation
  var basis;
  if (conf.basis) {
    basis = conf.basis.map(function(vec) {
      return {
        a: new BN(vec.a, 16),
        b: new BN(vec.b, 16)
      };
    });
  } else {
    basis = this._getEndoBasis(lambda);
  }

  return {
    beta: beta,
    lambda: lambda,
    basis: basis
  };
};

ShortCurve.prototype._getEndoRoots = function _getEndoRoots(num) {
  // Find roots of for x^2 + x + 1 in F
  // Root = (-1 +- Sqrt(-3)) / 2
  //
  var red = num === this.p ? this.red : BN.mont(num);
  var tinv = new BN(2).toRed(red).redInvm();
  var ntinv = tinv.redNeg();

  var s = new BN(3).toRed(red).redNeg().redSqrt().redMul(tinv);

  var l1 = ntinv.redAdd(s).fromRed();
  var l2 = ntinv.redSub(s).fromRed();
  return [ l1, l2 ];
};

ShortCurve.prototype._getEndoBasis = function _getEndoBasis(lambda) {
  // aprxSqrt >= sqrt(this.n)
  var aprxSqrt = this.n.ushrn(Math.floor(this.n.bitLength() / 2));

  // 3.74
  // Run EGCD, until r(L + 1) < aprxSqrt
  var u = lambda;
  var v = this.n.clone();
  var x1 = new BN(1);
  var y1 = new BN(0);
  var x2 = new BN(0);
  var y2 = new BN(1);

  // NOTE: all vectors are roots of: a + b * lambda = 0 (mod n)
  var a0;
  var b0;
  // First vector
  var a1;
  var b1;
  // Second vector
  var a2;
  var b2;

  var prevR;
  var i = 0;
  var r;
  var x;
  while (u.cmpn(0) !== 0) {
    var q = v.div(u);
    r = v.sub(q.mul(u));
    x = x2.sub(q.mul(x1));
    var y = y2.sub(q.mul(y1));

    if (!a1 && r.cmp(aprxSqrt) < 0) {
      a0 = prevR.neg();
      b0 = x1;
      a1 = r.neg();
      b1 = x;
    } else if (a1 && ++i === 2) {
      break;
    }
    prevR = r;

    v = u;
    u = r;
    x2 = x1;
    x1 = x;
    y2 = y1;
    y1 = y;
  }
  a2 = r.neg();
  b2 = x;

  var len1 = a1.sqr().add(b1.sqr());
  var len2 = a2.sqr().add(b2.sqr());
  if (len2.cmp(len1) >= 0) {
    a2 = a0;
    b2 = b0;
  }

  // Normalize signs
  if (a1.negative) {
    a1 = a1.neg();
    b1 = b1.neg();
  }
  if (a2.negative) {
    a2 = a2.neg();
    b2 = b2.neg();
  }

  return [
    { a: a1, b: b1 },
    { a: a2, b: b2 }
  ];
};

ShortCurve.prototype._endoSplit = function _endoSplit(k) {
  var basis = this.endo.basis;
  var v1 = basis[0];
  var v2 = basis[1];

  var c1 = v2.b.mul(k).divRound(this.n);
  var c2 = v1.b.neg().mul(k).divRound(this.n);

  var p1 = c1.mul(v1.a);
  var p2 = c2.mul(v2.a);
  var q1 = c1.mul(v1.b);
  var q2 = c2.mul(v2.b);

  // Calculate answer
  var k1 = k.sub(p1).sub(p2);
  var k2 = q1.add(q2).neg();
  return { k1: k1, k2: k2 };
};

ShortCurve.prototype.pointFromX = function pointFromX(x, odd) {
  x = new BN(x, 16);
  if (!x.red)
    x = x.toRed(this.red);

  var y2 = x.redSqr().redMul(x).redIAdd(x.redMul(this.a)).redIAdd(this.b);
  var y = y2.redSqrt();
  if (y.redSqr().redSub(y2).cmp(this.zero) !== 0)
    throw new Error('invalid point');

  // XXX Is there any way to tell if the number is odd without converting it
  // to non-red form?
  var isOdd = y.fromRed().isOdd();
  if (odd && !isOdd || !odd && isOdd)
    y = y.redNeg();

  return this.point(x, y);
};

ShortCurve.prototype.validate = function validate(point) {
  if (point.inf)
    return true;

  var x = point.x;
  var y = point.y;

  var ax = this.a.redMul(x);
  var rhs = x.redSqr().redMul(x).redIAdd(ax).redIAdd(this.b);
  return y.redSqr().redISub(rhs).cmpn(0) === 0;
};

ShortCurve.prototype._endoWnafMulAdd =
    function _endoWnafMulAdd(points, coeffs, jacobianResult) {
  var npoints = this._endoWnafT1;
  var ncoeffs = this._endoWnafT2;
  for (var i = 0; i < points.length; i++) {
    var split = this._endoSplit(coeffs[i]);
    var p = points[i];
    var beta = p._getBeta();

    if (split.k1.negative) {
      split.k1.ineg();
      p = p.neg(true);
    }
    if (split.k2.negative) {
      split.k2.ineg();
      beta = beta.neg(true);
    }

    npoints[i * 2] = p;
    npoints[i * 2 + 1] = beta;
    ncoeffs[i * 2] = split.k1;
    ncoeffs[i * 2 + 1] = split.k2;
  }
  var res = this._wnafMulAdd(1, npoints, ncoeffs, i * 2, jacobianResult);

  // Clean-up references to points and coefficients
  for (var j = 0; j < i * 2; j++) {
    npoints[j] = null;
    ncoeffs[j] = null;
  }
  return res;
};

function Point(curve, x, y, isRed) {
  Base.BasePoint.call(this, curve, 'affine');
  if (x === null && y === null) {
    this.x = null;
    this.y = null;
    this.inf = true;
  } else {
    this.x = new BN(x, 16);
    this.y = new BN(y, 16);
    // Force redgomery representation when loading from JSON
    if (isRed) {
      this.x.forceRed(this.curve.red);
      this.y.forceRed(this.curve.red);
    }
    if (!this.x.red)
      this.x = this.x.toRed(this.curve.red);
    if (!this.y.red)
      this.y = this.y.toRed(this.curve.red);
    this.inf = false;
  }
}
inherits(Point, Base.BasePoint);

ShortCurve.prototype.point = function point(x, y, isRed) {
  return new Point(this, x, y, isRed);
};

ShortCurve.prototype.pointFromJSON = function pointFromJSON(obj, red) {
  return Point.fromJSON(this, obj, red);
};

Point.prototype._getBeta = function _getBeta() {
  if (!this.curve.endo)
    return;

  var pre = this.precomputed;
  if (pre && pre.beta)
    return pre.beta;

  var beta = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
  if (pre) {
    var curve = this.curve;
    var endoMul = function(p) {
      return curve.point(p.x.redMul(curve.endo.beta), p.y);
    };
    pre.beta = beta;
    beta.precomputed = {
      beta: null,
      naf: pre.naf && {
        wnd: pre.naf.wnd,
        points: pre.naf.points.map(endoMul)
      },
      doubles: pre.doubles && {
        step: pre.doubles.step,
        points: pre.doubles.points.map(endoMul)
      }
    };
  }
  return beta;
};

Point.prototype.toJSON = function toJSON() {
  if (!this.precomputed)
    return [ this.x, this.y ];

  return [ this.x, this.y, this.precomputed && {
    doubles: this.precomputed.doubles && {
      step: this.precomputed.doubles.step,
      points: this.precomputed.doubles.points.slice(1)
    },
    naf: this.precomputed.naf && {
      wnd: this.precomputed.naf.wnd,
      points: this.precomputed.naf.points.slice(1)
    }
  } ];
};

Point.fromJSON = function fromJSON(curve, obj, red) {
  if (typeof obj === 'string')
    obj = JSON.parse(obj);
  var res = curve.point(obj[0], obj[1], red);
  if (!obj[2])
    return res;

  function obj2point(obj) {
    return curve.point(obj[0], obj[1], red);
  }

  var pre = obj[2];
  res.precomputed = {
    beta: null,
    doubles: pre.doubles && {
      step: pre.doubles.step,
      points: [ res ].concat(pre.doubles.points.map(obj2point))
    },
    naf: pre.naf && {
      wnd: pre.naf.wnd,
      points: [ res ].concat(pre.naf.points.map(obj2point))
    }
  };
  return res;
};

Point.prototype.inspect = function inspect() {
  if (this.isInfinity())
    return '<EC Point Infinity>';
  return '<EC Point x: ' + this.x.fromRed().toString(16, 2) +
      ' y: ' + this.y.fromRed().toString(16, 2) + '>';
};

Point.prototype.isInfinity = function isInfinity() {
  return this.inf;
};

Point.prototype.add = function add(p) {
  // O + P = P
  if (this.inf)
    return p;

  // P + O = P
  if (p.inf)
    return this;

  // P + P = 2P
  if (this.eq(p))
    return this.dbl();

  // P + (-P) = O
  if (this.neg().eq(p))
    return this.curve.point(null, null);

  // P + Q = O
  if (this.x.cmp(p.x) === 0)
    return this.curve.point(null, null);

  var c = this.y.redSub(p.y);
  if (c.cmpn(0) !== 0)
    c = c.redMul(this.x.redSub(p.x).redInvm());
  var nx = c.redSqr().redISub(this.x).redISub(p.x);
  var ny = c.redMul(this.x.redSub(nx)).redISub(this.y);
  return this.curve.point(nx, ny);
};

Point.prototype.dbl = function dbl() {
  if (this.inf)
    return this;

  // 2P = O
  var ys1 = this.y.redAdd(this.y);
  if (ys1.cmpn(0) === 0)
    return this.curve.point(null, null);

  var a = this.curve.a;

  var x2 = this.x.redSqr();
  var dyinv = ys1.redInvm();
  var c = x2.redAdd(x2).redIAdd(x2).redIAdd(a).redMul(dyinv);

  var nx = c.redSqr().redISub(this.x.redAdd(this.x));
  var ny = c.redMul(this.x.redSub(nx)).redISub(this.y);
  return this.curve.point(nx, ny);
};

Point.prototype.getX = function getX() {
  return this.x.fromRed();
};

Point.prototype.getY = function getY() {
  return this.y.fromRed();
};

Point.prototype.mul = function mul(k) {
  k = new BN(k, 16);

  if (this._hasDoubles(k))
    return this.curve._fixedNafMul(this, k);
  else if (this.curve.endo)
    return this.curve._endoWnafMulAdd([ this ], [ k ]);
  else
    return this.curve._wnafMul(this, k);
};

Point.prototype.mulAdd = function mulAdd(k1, p2, k2) {
  var points = [ this, p2 ];
  var coeffs = [ k1, k2 ];
  if (this.curve.endo)
    return this.curve._endoWnafMulAdd(points, coeffs);
  else
    return this.curve._wnafMulAdd(1, points, coeffs, 2);
};

Point.prototype.jmulAdd = function jmulAdd(k1, p2, k2) {
  var points = [ this, p2 ];
  var coeffs = [ k1, k2 ];
  if (this.curve.endo)
    return this.curve._endoWnafMulAdd(points, coeffs, true);
  else
    return this.curve._wnafMulAdd(1, points, coeffs, 2, true);
};

Point.prototype.eq = function eq(p) {
  return this === p ||
         this.inf === p.inf &&
             (this.inf || this.x.cmp(p.x) === 0 && this.y.cmp(p.y) === 0);
};

Point.prototype.neg = function neg(_precompute) {
  if (this.inf)
    return this;

  var res = this.curve.point(this.x, this.y.redNeg());
  if (_precompute && this.precomputed) {
    var pre = this.precomputed;
    var negate = function(p) {
      return p.neg();
    };
    res.precomputed = {
      naf: pre.naf && {
        wnd: pre.naf.wnd,
        points: pre.naf.points.map(negate)
      },
      doubles: pre.doubles && {
        step: pre.doubles.step,
        points: pre.doubles.points.map(negate)
      }
    };
  }
  return res;
};

Point.prototype.toJ = function toJ() {
  if (this.inf)
    return this.curve.jpoint(null, null, null);

  var res = this.curve.jpoint(this.x, this.y, this.curve.one);
  return res;
};

function JPoint(curve, x, y, z) {
  Base.BasePoint.call(this, curve, 'jacobian');
  if (x === null && y === null && z === null) {
    this.x = this.curve.one;
    this.y = this.curve.one;
    this.z = new BN(0);
  } else {
    this.x = new BN(x, 16);
    this.y = new BN(y, 16);
    this.z = new BN(z, 16);
  }
  if (!this.x.red)
    this.x = this.x.toRed(this.curve.red);
  if (!this.y.red)
    this.y = this.y.toRed(this.curve.red);
  if (!this.z.red)
    this.z = this.z.toRed(this.curve.red);

  this.zOne = this.z === this.curve.one;
}
inherits(JPoint, Base.BasePoint);

ShortCurve.prototype.jpoint = function jpoint(x, y, z) {
  return new JPoint(this, x, y, z);
};

JPoint.prototype.toP = function toP() {
  if (this.isInfinity())
    return this.curve.point(null, null);

  var zinv = this.z.redInvm();
  var zinv2 = zinv.redSqr();
  var ax = this.x.redMul(zinv2);
  var ay = this.y.redMul(zinv2).redMul(zinv);

  return this.curve.point(ax, ay);
};

JPoint.prototype.neg = function neg() {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
};

JPoint.prototype.add = function add(p) {
  // O + P = P
  if (this.isInfinity())
    return p;

  // P + O = P
  if (p.isInfinity())
    return this;

  // 12M + 4S + 7A
  var pz2 = p.z.redSqr();
  var z2 = this.z.redSqr();
  var u1 = this.x.redMul(pz2);
  var u2 = p.x.redMul(z2);
  var s1 = this.y.redMul(pz2.redMul(p.z));
  var s2 = p.y.redMul(z2.redMul(this.z));

  var h = u1.redSub(u2);
  var r = s1.redSub(s2);
  if (h.cmpn(0) === 0) {
    if (r.cmpn(0) !== 0)
      return this.curve.jpoint(null, null, null);
    else
      return this.dbl();
  }

  var h2 = h.redSqr();
  var h3 = h2.redMul(h);
  var v = u1.redMul(h2);

  var nx = r.redSqr().redIAdd(h3).redISub(v).redISub(v);
  var ny = r.redMul(v.redISub(nx)).redISub(s1.redMul(h3));
  var nz = this.z.redMul(p.z).redMul(h);

  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype.mixedAdd = function mixedAdd(p) {
  // O + P = P
  if (this.isInfinity())
    return p.toJ();

  // P + O = P
  if (p.isInfinity())
    return this;

  // 8M + 3S + 7A
  var z2 = this.z.redSqr();
  var u1 = this.x;
  var u2 = p.x.redMul(z2);
  var s1 = this.y;
  var s2 = p.y.redMul(z2).redMul(this.z);

  var h = u1.redSub(u2);
  var r = s1.redSub(s2);
  if (h.cmpn(0) === 0) {
    if (r.cmpn(0) !== 0)
      return this.curve.jpoint(null, null, null);
    else
      return this.dbl();
  }

  var h2 = h.redSqr();
  var h3 = h2.redMul(h);
  var v = u1.redMul(h2);

  var nx = r.redSqr().redIAdd(h3).redISub(v).redISub(v);
  var ny = r.redMul(v.redISub(nx)).redISub(s1.redMul(h3));
  var nz = this.z.redMul(h);

  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype.dblp = function dblp(pow) {
  if (pow === 0)
    return this;
  if (this.isInfinity())
    return this;
  if (!pow)
    return this.dbl();

  if (this.curve.zeroA || this.curve.threeA) {
    var r = this;
    for (var i = 0; i < pow; i++)
      r = r.dbl();
    return r;
  }

  // 1M + 2S + 1A + N * (4S + 5M + 8A)
  // N = 1 => 6M + 6S + 9A
  var a = this.curve.a;
  var tinv = this.curve.tinv;

  var jx = this.x;
  var jy = this.y;
  var jz = this.z;
  var jz4 = jz.redSqr().redSqr();

  // Reuse results
  var jyd = jy.redAdd(jy);
  for (var i = 0; i < pow; i++) {
    var jx2 = jx.redSqr();
    var jyd2 = jyd.redSqr();
    var jyd4 = jyd2.redSqr();
    var c = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4));

    var t1 = jx.redMul(jyd2);
    var nx = c.redSqr().redISub(t1.redAdd(t1));
    var t2 = t1.redISub(nx);
    var dny = c.redMul(t2);
    dny = dny.redIAdd(dny).redISub(jyd4);
    var nz = jyd.redMul(jz);
    if (i + 1 < pow)
      jz4 = jz4.redMul(jyd4);

    jx = nx;
    jz = nz;
    jyd = dny;
  }

  return this.curve.jpoint(jx, jyd.redMul(tinv), jz);
};

JPoint.prototype.dbl = function dbl() {
  if (this.isInfinity())
    return this;

  if (this.curve.zeroA)
    return this._zeroDbl();
  else if (this.curve.threeA)
    return this._threeDbl();
  else
    return this._dbl();
};

JPoint.prototype._zeroDbl = function _zeroDbl() {
  var nx;
  var ny;
  var nz;
  // Z = 1
  if (this.zOne) {
    // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-0.html
    //     #doubling-mdbl-2007-bl
    // 1M + 5S + 14A

    // XX = X1^2
    var xx = this.x.redSqr();
    // YY = Y1^2
    var yy = this.y.redSqr();
    // YYYY = YY^2
    var yyyy = yy.redSqr();
    // S = 2 * ((X1 + YY)^2 - XX - YYYY)
    var s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
    s = s.redIAdd(s);
    // M = 3 * XX + a; a = 0
    var m = xx.redAdd(xx).redIAdd(xx);
    // T = M ^ 2 - 2*S
    var t = m.redSqr().redISub(s).redISub(s);

    // 8 * YYYY
    var yyyy8 = yyyy.redIAdd(yyyy);
    yyyy8 = yyyy8.redIAdd(yyyy8);
    yyyy8 = yyyy8.redIAdd(yyyy8);

    // X3 = T
    nx = t;
    // Y3 = M * (S - T) - 8 * YYYY
    ny = m.redMul(s.redISub(t)).redISub(yyyy8);
    // Z3 = 2*Y1
    nz = this.y.redAdd(this.y);
  } else {
    // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-0.html
    //     #doubling-dbl-2009-l
    // 2M + 5S + 13A

    // A = X1^2
    var a = this.x.redSqr();
    // B = Y1^2
    var b = this.y.redSqr();
    // C = B^2
    var c = b.redSqr();
    // D = 2 * ((X1 + B)^2 - A - C)
    var d = this.x.redAdd(b).redSqr().redISub(a).redISub(c);
    d = d.redIAdd(d);
    // E = 3 * A
    var e = a.redAdd(a).redIAdd(a);
    // F = E^2
    var f = e.redSqr();

    // 8 * C
    var c8 = c.redIAdd(c);
    c8 = c8.redIAdd(c8);
    c8 = c8.redIAdd(c8);

    // X3 = F - 2 * D
    nx = f.redISub(d).redISub(d);
    // Y3 = E * (D - X3) - 8 * C
    ny = e.redMul(d.redISub(nx)).redISub(c8);
    // Z3 = 2 * Y1 * Z1
    nz = this.y.redMul(this.z);
    nz = nz.redIAdd(nz);
  }

  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype._threeDbl = function _threeDbl() {
  var nx;
  var ny;
  var nz;
  // Z = 1
  if (this.zOne) {
    // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-3.html
    //     #doubling-mdbl-2007-bl
    // 1M + 5S + 15A

    // XX = X1^2
    var xx = this.x.redSqr();
    // YY = Y1^2
    var yy = this.y.redSqr();
    // YYYY = YY^2
    var yyyy = yy.redSqr();
    // S = 2 * ((X1 + YY)^2 - XX - YYYY)
    var s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
    s = s.redIAdd(s);
    // M = 3 * XX + a
    var m = xx.redAdd(xx).redIAdd(xx).redIAdd(this.curve.a);
    // T = M^2 - 2 * S
    var t = m.redSqr().redISub(s).redISub(s);
    // X3 = T
    nx = t;
    // Y3 = M * (S - T) - 8 * YYYY
    var yyyy8 = yyyy.redIAdd(yyyy);
    yyyy8 = yyyy8.redIAdd(yyyy8);
    yyyy8 = yyyy8.redIAdd(yyyy8);
    ny = m.redMul(s.redISub(t)).redISub(yyyy8);
    // Z3 = 2 * Y1
    nz = this.y.redAdd(this.y);
  } else {
    // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-3.html#doubling-dbl-2001-b
    // 3M + 5S

    // delta = Z1^2
    var delta = this.z.redSqr();
    // gamma = Y1^2
    var gamma = this.y.redSqr();
    // beta = X1 * gamma
    var beta = this.x.redMul(gamma);
    // alpha = 3 * (X1 - delta) * (X1 + delta)
    var alpha = this.x.redSub(delta).redMul(this.x.redAdd(delta));
    alpha = alpha.redAdd(alpha).redIAdd(alpha);
    // X3 = alpha^2 - 8 * beta
    var beta4 = beta.redIAdd(beta);
    beta4 = beta4.redIAdd(beta4);
    var beta8 = beta4.redAdd(beta4);
    nx = alpha.redSqr().redISub(beta8);
    // Z3 = (Y1 + Z1)^2 - gamma - delta
    nz = this.y.redAdd(this.z).redSqr().redISub(gamma).redISub(delta);
    // Y3 = alpha * (4 * beta - X3) - 8 * gamma^2
    var ggamma8 = gamma.redSqr();
    ggamma8 = ggamma8.redIAdd(ggamma8);
    ggamma8 = ggamma8.redIAdd(ggamma8);
    ggamma8 = ggamma8.redIAdd(ggamma8);
    ny = alpha.redMul(beta4.redISub(nx)).redISub(ggamma8);
  }

  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype._dbl = function _dbl() {
  var a = this.curve.a;

  // 4M + 6S + 10A
  var jx = this.x;
  var jy = this.y;
  var jz = this.z;
  var jz4 = jz.redSqr().redSqr();

  var jx2 = jx.redSqr();
  var jy2 = jy.redSqr();

  var c = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4));

  var jxd4 = jx.redAdd(jx);
  jxd4 = jxd4.redIAdd(jxd4);
  var t1 = jxd4.redMul(jy2);
  var nx = c.redSqr().redISub(t1.redAdd(t1));
  var t2 = t1.redISub(nx);

  var jyd8 = jy2.redSqr();
  jyd8 = jyd8.redIAdd(jyd8);
  jyd8 = jyd8.redIAdd(jyd8);
  jyd8 = jyd8.redIAdd(jyd8);
  var ny = c.redMul(t2).redISub(jyd8);
  var nz = jy.redAdd(jy).redMul(jz);

  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype.trpl = function trpl() {
  if (!this.curve.zeroA)
    return this.dbl().add(this);

  // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-0.html#tripling-tpl-2007-bl
  // 5M + 10S + ...

  // XX = X1^2
  var xx = this.x.redSqr();
  // YY = Y1^2
  var yy = this.y.redSqr();
  // ZZ = Z1^2
  var zz = this.z.redSqr();
  // YYYY = YY^2
  var yyyy = yy.redSqr();
  // M = 3 * XX + a * ZZ2; a = 0
  var m = xx.redAdd(xx).redIAdd(xx);
  // MM = M^2
  var mm = m.redSqr();
  // E = 6 * ((X1 + YY)^2 - XX - YYYY) - MM
  var e = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
  e = e.redIAdd(e);
  e = e.redAdd(e).redIAdd(e);
  e = e.redISub(mm);
  // EE = E^2
  var ee = e.redSqr();
  // T = 16*YYYY
  var t = yyyy.redIAdd(yyyy);
  t = t.redIAdd(t);
  t = t.redIAdd(t);
  t = t.redIAdd(t);
  // U = (M + E)^2 - MM - EE - T
  var u = m.redIAdd(e).redSqr().redISub(mm).redISub(ee).redISub(t);
  // X3 = 4 * (X1 * EE - 4 * YY * U)
  var yyu4 = yy.redMul(u);
  yyu4 = yyu4.redIAdd(yyu4);
  yyu4 = yyu4.redIAdd(yyu4);
  var nx = this.x.redMul(ee).redISub(yyu4);
  nx = nx.redIAdd(nx);
  nx = nx.redIAdd(nx);
  // Y3 = 8 * Y1 * (U * (T - U) - E * EE)
  var ny = this.y.redMul(u.redMul(t.redISub(u)).redISub(e.redMul(ee)));
  ny = ny.redIAdd(ny);
  ny = ny.redIAdd(ny);
  ny = ny.redIAdd(ny);
  // Z3 = (Z1 + E)^2 - ZZ - EE
  var nz = this.z.redAdd(e).redSqr().redISub(zz).redISub(ee);

  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype.mul = function mul(k, kbase) {
  k = new BN(k, kbase);

  return this.curve._wnafMul(this, k);
};

JPoint.prototype.eq = function eq(p) {
  if (p.type === 'affine')
    return this.eq(p.toJ());

  if (this === p)
    return true;

  // x1 * z2^2 == x2 * z1^2
  var z2 = this.z.redSqr();
  var pz2 = p.z.redSqr();
  if (this.x.redMul(pz2).redISub(p.x.redMul(z2)).cmpn(0) !== 0)
    return false;

  // y1 * z2^3 == y2 * z1^3
  var z3 = z2.redMul(this.z);
  var pz3 = pz2.redMul(p.z);
  return this.y.redMul(pz3).redISub(p.y.redMul(z3)).cmpn(0) === 0;
};

JPoint.prototype.eqXToP = function eqXToP(x) {
  var zs = this.z.redSqr();
  var rx = x.toRed(this.curve.red).redMul(zs);
  if (this.x.cmp(rx) === 0)
    return true;

  var xc = x.clone();
  var t = this.curve.redN.redMul(zs);
  for (;;) {
    xc.iadd(this.curve.n);
    if (xc.cmp(this.curve.p) >= 0)
      return false;

    rx.redIAdd(t);
    if (this.x.cmp(rx) === 0)
      return true;
  }
  return false;
};

JPoint.prototype.inspect = function inspect() {
  if (this.isInfinity())
    return '<EC JPoint Infinity>';
  return '<EC JPoint x: ' + this.x.toString(16, 2) +
      ' y: ' + this.y.toString(16, 2) +
      ' z: ' + this.z.toString(16, 2) + '>';
};

JPoint.prototype.isInfinity = function isInfinity() {
  // XXX This code assumes that zero is always zero in red
  return this.z.cmpn(0) === 0;
};


/***/ }),
/* 143 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curve = __webpack_require__(38);
var BN = __webpack_require__(17);
var inherits = __webpack_require__(39);
var Base = curve.base;

var elliptic = __webpack_require__(9);
var utils = elliptic.utils;

function MontCurve(conf) {
  Base.call(this, 'mont', conf);

  this.a = new BN(conf.a, 16).toRed(this.red);
  this.b = new BN(conf.b, 16).toRed(this.red);
  this.i4 = new BN(4).toRed(this.red).redInvm();
  this.two = new BN(2).toRed(this.red);
  this.a24 = this.i4.redMul(this.a.redAdd(this.two));
}
inherits(MontCurve, Base);
module.exports = MontCurve;

MontCurve.prototype.validate = function validate(point) {
  var x = point.normalize().x;
  var x2 = x.redSqr();
  var rhs = x2.redMul(x).redAdd(x2.redMul(this.a)).redAdd(x);
  var y = rhs.redSqrt();

  return y.redSqr().cmp(rhs) === 0;
};

function Point(curve, x, z) {
  Base.BasePoint.call(this, curve, 'projective');
  if (x === null && z === null) {
    this.x = this.curve.one;
    this.z = this.curve.zero;
  } else {
    this.x = new BN(x, 16);
    this.z = new BN(z, 16);
    if (!this.x.red)
      this.x = this.x.toRed(this.curve.red);
    if (!this.z.red)
      this.z = this.z.toRed(this.curve.red);
  }
}
inherits(Point, Base.BasePoint);

MontCurve.prototype.decodePoint = function decodePoint(bytes, enc) {
  return this.point(utils.toArray(bytes, enc), 1);
};

MontCurve.prototype.point = function point(x, z) {
  return new Point(this, x, z);
};

MontCurve.prototype.pointFromJSON = function pointFromJSON(obj) {
  return Point.fromJSON(this, obj);
};

Point.prototype.precompute = function precompute() {
  // No-op
};

Point.prototype._encode = function _encode() {
  return this.getX().toArray('be', this.curve.p.byteLength());
};

Point.fromJSON = function fromJSON(curve, obj) {
  return new Point(curve, obj[0], obj[1] || curve.one);
};

Point.prototype.inspect = function inspect() {
  if (this.isInfinity())
    return '<EC Point Infinity>';
  return '<EC Point x: ' + this.x.fromRed().toString(16, 2) +
      ' z: ' + this.z.fromRed().toString(16, 2) + '>';
};

Point.prototype.isInfinity = function isInfinity() {
  // XXX This code assumes that zero is always zero in red
  return this.z.cmpn(0) === 0;
};

Point.prototype.dbl = function dbl() {
  // http://hyperelliptic.org/EFD/g1p/auto-montgom-xz.html#doubling-dbl-1987-m-3
  // 2M + 2S + 4A

  // A = X1 + Z1
  var a = this.x.redAdd(this.z);
  // AA = A^2
  var aa = a.redSqr();
  // B = X1 - Z1
  var b = this.x.redSub(this.z);
  // BB = B^2
  var bb = b.redSqr();
  // C = AA - BB
  var c = aa.redSub(bb);
  // X3 = AA * BB
  var nx = aa.redMul(bb);
  // Z3 = C * (BB + A24 * C)
  var nz = c.redMul(bb.redAdd(this.curve.a24.redMul(c)));
  return this.curve.point(nx, nz);
};

Point.prototype.add = function add() {
  throw new Error('Not supported on Montgomery curve');
};

Point.prototype.diffAdd = function diffAdd(p, diff) {
  // http://hyperelliptic.org/EFD/g1p/auto-montgom-xz.html#diffadd-dadd-1987-m-3
  // 4M + 2S + 6A

  // A = X2 + Z2
  var a = this.x.redAdd(this.z);
  // B = X2 - Z2
  var b = this.x.redSub(this.z);
  // C = X3 + Z3
  var c = p.x.redAdd(p.z);
  // D = X3 - Z3
  var d = p.x.redSub(p.z);
  // DA = D * A
  var da = d.redMul(a);
  // CB = C * B
  var cb = c.redMul(b);
  // X5 = Z1 * (DA + CB)^2
  var nx = diff.z.redMul(da.redAdd(cb).redSqr());
  // Z5 = X1 * (DA - CB)^2
  var nz = diff.x.redMul(da.redISub(cb).redSqr());
  return this.curve.point(nx, nz);
};

Point.prototype.mul = function mul(k) {
  var t = k.clone();
  var a = this; // (N / 2) * Q + Q
  var b = this.curve.point(null, null); // (N / 2) * Q
  var c = this; // Q

  for (var bits = []; t.cmpn(0) !== 0; t.iushrn(1))
    bits.push(t.andln(1));

  for (var i = bits.length - 1; i >= 0; i--) {
    if (bits[i] === 0) {
      // N * Q + Q = ((N / 2) * Q + Q)) + (N / 2) * Q
      a = a.diffAdd(b, c);
      // N * Q = 2 * ((N / 2) * Q + Q))
      b = b.dbl();
    } else {
      // N * Q = ((N / 2) * Q + Q) + ((N / 2) * Q)
      b = a.diffAdd(b, c);
      // N * Q + Q = 2 * ((N / 2) * Q + Q)
      a = a.dbl();
    }
  }
  return b;
};

Point.prototype.mulAdd = function mulAdd() {
  throw new Error('Not supported on Montgomery curve');
};

Point.prototype.jumlAdd = function jumlAdd() {
  throw new Error('Not supported on Montgomery curve');
};

Point.prototype.eq = function eq(other) {
  return this.getX().cmp(other.getX()) === 0;
};

Point.prototype.normalize = function normalize() {
  this.x = this.x.redMul(this.z.redInvm());
  this.z = this.curve.one;
  return this;
};

Point.prototype.getX = function getX() {
  // Normalize coordinates
  this.normalize();

  return this.x.fromRed();
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curve = __webpack_require__(38);
var elliptic = __webpack_require__(9);
var BN = __webpack_require__(17);
var inherits = __webpack_require__(39);
var Base = curve.base;

var assert = elliptic.utils.assert;

function EdwardsCurve(conf) {
  // NOTE: Important as we are creating point in Base.call()
  this.twisted = (conf.a | 0) !== 1;
  this.mOneA = this.twisted && (conf.a | 0) === -1;
  this.extended = this.mOneA;

  Base.call(this, 'edwards', conf);

  this.a = new BN(conf.a, 16).umod(this.red.m);
  this.a = this.a.toRed(this.red);
  this.c = new BN(conf.c, 16).toRed(this.red);
  this.c2 = this.c.redSqr();
  this.d = new BN(conf.d, 16).toRed(this.red);
  this.dd = this.d.redAdd(this.d);

  assert(!this.twisted || this.c.fromRed().cmpn(1) === 0);
  this.oneC = (conf.c | 0) === 1;
}
inherits(EdwardsCurve, Base);
module.exports = EdwardsCurve;

EdwardsCurve.prototype._mulA = function _mulA(num) {
  if (this.mOneA)
    return num.redNeg();
  else
    return this.a.redMul(num);
};

EdwardsCurve.prototype._mulC = function _mulC(num) {
  if (this.oneC)
    return num;
  else
    return this.c.redMul(num);
};

// Just for compatibility with Short curve
EdwardsCurve.prototype.jpoint = function jpoint(x, y, z, t) {
  return this.point(x, y, z, t);
};

EdwardsCurve.prototype.pointFromX = function pointFromX(x, odd) {
  x = new BN(x, 16);
  if (!x.red)
    x = x.toRed(this.red);

  var x2 = x.redSqr();
  var rhs = this.c2.redSub(this.a.redMul(x2));
  var lhs = this.one.redSub(this.c2.redMul(this.d).redMul(x2));

  var y2 = rhs.redMul(lhs.redInvm());
  var y = y2.redSqrt();
  if (y.redSqr().redSub(y2).cmp(this.zero) !== 0)
    throw new Error('invalid point');

  var isOdd = y.fromRed().isOdd();
  if (odd && !isOdd || !odd && isOdd)
    y = y.redNeg();

  return this.point(x, y);
};

EdwardsCurve.prototype.pointFromY = function pointFromY(y, odd) {
  y = new BN(y, 16);
  if (!y.red)
    y = y.toRed(this.red);

  // x^2 = (y^2 - 1) / (d y^2 + 1)
  var y2 = y.redSqr();
  var lhs = y2.redSub(this.one);
  var rhs = y2.redMul(this.d).redAdd(this.one);
  var x2 = lhs.redMul(rhs.redInvm());

  if (x2.cmp(this.zero) === 0) {
    if (odd)
      throw new Error('invalid point');
    else
      return this.point(this.zero, y);
  }

  var x = x2.redSqrt();
  if (x.redSqr().redSub(x2).cmp(this.zero) !== 0)
    throw new Error('invalid point');

  if (x.isOdd() !== odd)
    x = x.redNeg();

  return this.point(x, y);
};

EdwardsCurve.prototype.validate = function validate(point) {
  if (point.isInfinity())
    return true;

  // Curve: A * X^2 + Y^2 = C^2 * (1 + D * X^2 * Y^2)
  point.normalize();

  var x2 = point.x.redSqr();
  var y2 = point.y.redSqr();
  var lhs = x2.redMul(this.a).redAdd(y2);
  var rhs = this.c2.redMul(this.one.redAdd(this.d.redMul(x2).redMul(y2)));

  return lhs.cmp(rhs) === 0;
};

function Point(curve, x, y, z, t) {
  Base.BasePoint.call(this, curve, 'projective');
  if (x === null && y === null && z === null) {
    this.x = this.curve.zero;
    this.y = this.curve.one;
    this.z = this.curve.one;
    this.t = this.curve.zero;
    this.zOne = true;
  } else {
    this.x = new BN(x, 16);
    this.y = new BN(y, 16);
    this.z = z ? new BN(z, 16) : this.curve.one;
    this.t = t && new BN(t, 16);
    if (!this.x.red)
      this.x = this.x.toRed(this.curve.red);
    if (!this.y.red)
      this.y = this.y.toRed(this.curve.red);
    if (!this.z.red)
      this.z = this.z.toRed(this.curve.red);
    if (this.t && !this.t.red)
      this.t = this.t.toRed(this.curve.red);
    this.zOne = this.z === this.curve.one;

    // Use extended coordinates
    if (this.curve.extended && !this.t) {
      this.t = this.x.redMul(this.y);
      if (!this.zOne)
        this.t = this.t.redMul(this.z.redInvm());
    }
  }
}
inherits(Point, Base.BasePoint);

EdwardsCurve.prototype.pointFromJSON = function pointFromJSON(obj) {
  return Point.fromJSON(this, obj);
};

EdwardsCurve.prototype.point = function point(x, y, z, t) {
  return new Point(this, x, y, z, t);
};

Point.fromJSON = function fromJSON(curve, obj) {
  return new Point(curve, obj[0], obj[1], obj[2]);
};

Point.prototype.inspect = function inspect() {
  if (this.isInfinity())
    return '<EC Point Infinity>';
  return '<EC Point x: ' + this.x.fromRed().toString(16, 2) +
      ' y: ' + this.y.fromRed().toString(16, 2) +
      ' z: ' + this.z.fromRed().toString(16, 2) + '>';
};

Point.prototype.isInfinity = function isInfinity() {
  // XXX This code assumes that zero is always zero in red
  return this.x.cmpn(0) === 0 &&
         this.y.cmp(this.z) === 0;
};

Point.prototype._extDbl = function _extDbl() {
  // hyperelliptic.org/EFD/g1p/auto-twisted-extended-1.html
  //     #doubling-dbl-2008-hwcd
  // 4M + 4S

  // A = X1^2
  var a = this.x.redSqr();
  // B = Y1^2
  var b = this.y.redSqr();
  // C = 2 * Z1^2
  var c = this.z.redSqr();
  c = c.redIAdd(c);
  // D = a * A
  var d = this.curve._mulA(a);
  // E = (X1 + Y1)^2 - A - B
  var e = this.x.redAdd(this.y).redSqr().redISub(a).redISub(b);
  // G = D + B
  var g = d.redAdd(b);
  // F = G - C
  var f = g.redSub(c);
  // H = D - B
  var h = d.redSub(b);
  // X3 = E * F
  var nx = e.redMul(f);
  // Y3 = G * H
  var ny = g.redMul(h);
  // T3 = E * H
  var nt = e.redMul(h);
  // Z3 = F * G
  var nz = f.redMul(g);
  return this.curve.point(nx, ny, nz, nt);
};

Point.prototype._projDbl = function _projDbl() {
  // hyperelliptic.org/EFD/g1p/auto-twisted-projective.html
  //     #doubling-dbl-2008-bbjlp
  //     #doubling-dbl-2007-bl
  // and others
  // Generally 3M + 4S or 2M + 4S

  // B = (X1 + Y1)^2
  var b = this.x.redAdd(this.y).redSqr();
  // C = X1^2
  var c = this.x.redSqr();
  // D = Y1^2
  var d = this.y.redSqr();

  var nx;
  var ny;
  var nz;
  if (this.curve.twisted) {
    // E = a * C
    var e = this.curve._mulA(c);
    // F = E + D
    var f = e.redAdd(d);
    if (this.zOne) {
      // X3 = (B - C - D) * (F - 2)
      nx = b.redSub(c).redSub(d).redMul(f.redSub(this.curve.two));
      // Y3 = F * (E - D)
      ny = f.redMul(e.redSub(d));
      // Z3 = F^2 - 2 * F
      nz = f.redSqr().redSub(f).redSub(f);
    } else {
      // H = Z1^2
      var h = this.z.redSqr();
      // J = F - 2 * H
      var j = f.redSub(h).redISub(h);
      // X3 = (B-C-D)*J
      nx = b.redSub(c).redISub(d).redMul(j);
      // Y3 = F * (E - D)
      ny = f.redMul(e.redSub(d));
      // Z3 = F * J
      nz = f.redMul(j);
    }
  } else {
    // E = C + D
    var e = c.redAdd(d);
    // H = (c * Z1)^2
    var h = this.curve._mulC(this.c.redMul(this.z)).redSqr();
    // J = E - 2 * H
    var j = e.redSub(h).redSub(h);
    // X3 = c * (B - E) * J
    nx = this.curve._mulC(b.redISub(e)).redMul(j);
    // Y3 = c * E * (C - D)
    ny = this.curve._mulC(e).redMul(c.redISub(d));
    // Z3 = E * J
    nz = e.redMul(j);
  }
  return this.curve.point(nx, ny, nz);
};

Point.prototype.dbl = function dbl() {
  if (this.isInfinity())
    return this;

  // Double in extended coordinates
  if (this.curve.extended)
    return this._extDbl();
  else
    return this._projDbl();
};

Point.prototype._extAdd = function _extAdd(p) {
  // hyperelliptic.org/EFD/g1p/auto-twisted-extended-1.html
  //     #addition-add-2008-hwcd-3
  // 8M

  // A = (Y1 - X1) * (Y2 - X2)
  var a = this.y.redSub(this.x).redMul(p.y.redSub(p.x));
  // B = (Y1 + X1) * (Y2 + X2)
  var b = this.y.redAdd(this.x).redMul(p.y.redAdd(p.x));
  // C = T1 * k * T2
  var c = this.t.redMul(this.curve.dd).redMul(p.t);
  // D = Z1 * 2 * Z2
  var d = this.z.redMul(p.z.redAdd(p.z));
  // E = B - A
  var e = b.redSub(a);
  // F = D - C
  var f = d.redSub(c);
  // G = D + C
  var g = d.redAdd(c);
  // H = B + A
  var h = b.redAdd(a);
  // X3 = E * F
  var nx = e.redMul(f);
  // Y3 = G * H
  var ny = g.redMul(h);
  // T3 = E * H
  var nt = e.redMul(h);
  // Z3 = F * G
  var nz = f.redMul(g);
  return this.curve.point(nx, ny, nz, nt);
};

Point.prototype._projAdd = function _projAdd(p) {
  // hyperelliptic.org/EFD/g1p/auto-twisted-projective.html
  //     #addition-add-2008-bbjlp
  //     #addition-add-2007-bl
  // 10M + 1S

  // A = Z1 * Z2
  var a = this.z.redMul(p.z);
  // B = A^2
  var b = a.redSqr();
  // C = X1 * X2
  var c = this.x.redMul(p.x);
  // D = Y1 * Y2
  var d = this.y.redMul(p.y);
  // E = d * C * D
  var e = this.curve.d.redMul(c).redMul(d);
  // F = B - E
  var f = b.redSub(e);
  // G = B + E
  var g = b.redAdd(e);
  // X3 = A * F * ((X1 + Y1) * (X2 + Y2) - C - D)
  var tmp = this.x.redAdd(this.y).redMul(p.x.redAdd(p.y)).redISub(c).redISub(d);
  var nx = a.redMul(f).redMul(tmp);
  var ny;
  var nz;
  if (this.curve.twisted) {
    // Y3 = A * G * (D - a * C)
    ny = a.redMul(g).redMul(d.redSub(this.curve._mulA(c)));
    // Z3 = F * G
    nz = f.redMul(g);
  } else {
    // Y3 = A * G * (D - C)
    ny = a.redMul(g).redMul(d.redSub(c));
    // Z3 = c * F * G
    nz = this.curve._mulC(f).redMul(g);
  }
  return this.curve.point(nx, ny, nz);
};

Point.prototype.add = function add(p) {
  if (this.isInfinity())
    return p;
  if (p.isInfinity())
    return this;

  if (this.curve.extended)
    return this._extAdd(p);
  else
    return this._projAdd(p);
};

Point.prototype.mul = function mul(k) {
  if (this._hasDoubles(k))
    return this.curve._fixedNafMul(this, k);
  else
    return this.curve._wnafMul(this, k);
};

Point.prototype.mulAdd = function mulAdd(k1, p, k2) {
  return this.curve._wnafMulAdd(1, [ this, p ], [ k1, k2 ], 2, false);
};

Point.prototype.jmulAdd = function jmulAdd(k1, p, k2) {
  return this.curve._wnafMulAdd(1, [ this, p ], [ k1, k2 ], 2, true);
};

Point.prototype.normalize = function normalize() {
  if (this.zOne)
    return this;

  // Normalize coordinates
  var zi = this.z.redInvm();
  this.x = this.x.redMul(zi);
  this.y = this.y.redMul(zi);
  if (this.t)
    this.t = this.t.redMul(zi);
  this.z = this.curve.one;
  this.zOne = true;
  return this;
};

Point.prototype.neg = function neg() {
  return this.curve.point(this.x.redNeg(),
                          this.y,
                          this.z,
                          this.t && this.t.redNeg());
};

Point.prototype.getX = function getX() {
  this.normalize();
  return this.x.fromRed();
};

Point.prototype.getY = function getY() {
  this.normalize();
  return this.y.fromRed();
};

Point.prototype.eq = function eq(other) {
  return this === other ||
         this.getX().cmp(other.getX()) === 0 &&
         this.getY().cmp(other.getY()) === 0;
};

Point.prototype.eqXToP = function eqXToP(x) {
  var rx = x.toRed(this.curve.red).redMul(this.z);
  if (this.x.cmp(rx) === 0)
    return true;

  var xc = x.clone();
  var t = this.curve.redN.redMul(this.z);
  for (;;) {
    xc.iadd(this.curve.n);
    if (xc.cmp(this.curve.p) >= 0)
      return false;

    rx.redIAdd(t);
    if (this.x.cmp(rx) === 0)
      return true;
  }
  return false;
};

// Compatibility with BaseCurve
Point.prototype.toP = Point.prototype.normalize;
Point.prototype.mixedAdd = Point.prototype.add;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curves = exports;

var hash = __webpack_require__(55);
var elliptic = __webpack_require__(9);

var assert = elliptic.utils.assert;

function PresetCurve(options) {
  if (options.type === 'short')
    this.curve = new elliptic.curve.short(options);
  else if (options.type === 'edwards')
    this.curve = new elliptic.curve.edwards(options);
  else
    this.curve = new elliptic.curve.mont(options);
  this.g = this.curve.g;
  this.n = this.curve.n;
  this.hash = options.hash;

  assert(this.g.validate(), 'Invalid curve');
  assert(this.g.mul(this.n).isInfinity(), 'Invalid curve, G*N != O');
}
curves.PresetCurve = PresetCurve;

function defineCurve(name, options) {
  Object.defineProperty(curves, name, {
    configurable: true,
    enumerable: true,
    get: function() {
      var curve = new PresetCurve(options);
      Object.defineProperty(curves, name, {
        configurable: true,
        enumerable: true,
        value: curve
      });
      return curve;
    }
  });
}

defineCurve('p192', {
  type: 'short',
  prime: 'p192',
  p: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff',
  a: 'ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc',
  b: '64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1',
  n: 'ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831',
  hash: hash.sha256,
  gRed: false,
  g: [
    '188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012',
    '07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811'
  ]
});

defineCurve('p224', {
  type: 'short',
  prime: 'p224',
  p: 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001',
  a: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe',
  b: 'b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4',
  n: 'ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d',
  hash: hash.sha256,
  gRed: false,
  g: [
    'b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21',
    'bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34'
  ]
});

defineCurve('p256', {
  type: 'short',
  prime: null,
  p: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff',
  a: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc',
  b: '5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b',
  n: 'ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551',
  hash: hash.sha256,
  gRed: false,
  g: [
    '6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296',
    '4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5'
  ]
});

defineCurve('p384', {
  type: 'short',
  prime: null,
  p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ' +
     'fffffffe ffffffff 00000000 00000000 ffffffff',
  a: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ' +
     'fffffffe ffffffff 00000000 00000000 fffffffc',
  b: 'b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f ' +
     '5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef',
  n: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 ' +
     'f4372ddf 581a0db2 48b0a77a ecec196a ccc52973',
  hash: hash.sha384,
  gRed: false,
  g: [
    'aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 ' +
    '5502f25d bf55296c 3a545e38 72760ab7',
    '3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 ' +
    '0a60b1ce 1d7e819d 7a431d7c 90ea0e5f'
  ]
});

defineCurve('p521', {
  type: 'short',
  prime: null,
  p: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ' +
     'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ' +
     'ffffffff ffffffff ffffffff ffffffff ffffffff',
  a: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ' +
     'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ' +
     'ffffffff ffffffff ffffffff ffffffff fffffffc',
  b: '00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b ' +
     '99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd ' +
     '3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00',
  n: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ' +
     'ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 ' +
     'f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409',
  hash: hash.sha512,
  gRed: false,
  g: [
    '000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 ' +
    '053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 ' +
    'a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66',
    '00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 ' +
    '579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 ' +
    '3fad0761 353c7086 a272c240 88be9476 9fd16650'
  ]
});

defineCurve('curve25519', {
  type: 'mont',
  prime: 'p25519',
  p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
  a: '76d06',
  b: '1',
  n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
  hash: hash.sha256,
  gRed: false,
  g: [
    '9'
  ]
});

defineCurve('ed25519', {
  type: 'edwards',
  prime: 'p25519',
  p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
  a: '-1',
  c: '1',
  // -121665 * (121666^(-1)) (mod P)
  d: '52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3',
  n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
  hash: hash.sha256,
  gRed: false,
  g: [
    '216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a',

    // 4/5
    '6666666666666666666666666666666666666666666666666666666666666658'
  ]
});

var pre;
try {
  pre = __webpack_require__(153);
} catch (e) {
  pre = undefined;
}

defineCurve('secp256k1', {
  type: 'short',
  prime: 'k256',
  p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f',
  a: '0',
  b: '7',
  n: 'ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141',
  h: '1',
  hash: hash.sha256,

  // Precomputed endomorphism
  beta: '7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee',
  lambda: '5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72',
  basis: [
    {
      a: '3086d221a7d46bcde86c90e49284eb15',
      b: '-e4437ed6010e88286f547fa90abfe4c3'
    },
    {
      a: '114ca50f7a8e2f3f657c1108d9d44cfd8',
      b: '3086d221a7d46bcde86c90e49284eb15'
    }
  ],

  gRed: false,
  g: [
    '79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798',
    '483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8',
    pre
  ]
});


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.sha1 = __webpack_require__(148);
exports.sha224 = __webpack_require__(149);
exports.sha256 = __webpack_require__(88);
exports.sha384 = __webpack_require__(150);
exports.sha512 = __webpack_require__(89);


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(14);
var common = __webpack_require__(31);
var shaCommon = __webpack_require__(87);

var rotl32 = utils.rotl32;
var sum32 = utils.sum32;
var sum32_5 = utils.sum32_5;
var ft_1 = shaCommon.ft_1;
var BlockHash = common.BlockHash;

var sha1_K = [
  0x5A827999, 0x6ED9EBA1,
  0x8F1BBCDC, 0xCA62C1D6
];

function SHA1() {
  if (!(this instanceof SHA1))
    return new SHA1();

  BlockHash.call(this);
  this.h = [
    0x67452301, 0xefcdab89, 0x98badcfe,
    0x10325476, 0xc3d2e1f0 ];
  this.W = new Array(80);
}

utils.inherits(SHA1, BlockHash);
module.exports = SHA1;

SHA1.blockSize = 512;
SHA1.outSize = 160;
SHA1.hmacStrength = 80;
SHA1.padLength = 64;

SHA1.prototype._update = function _update(msg, start) {
  var W = this.W;

  for (var i = 0; i < 16; i++)
    W[i] = msg[start + i];

  for(; i < W.length; i++)
    W[i] = rotl32(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);

  var a = this.h[0];
  var b = this.h[1];
  var c = this.h[2];
  var d = this.h[3];
  var e = this.h[4];

  for (i = 0; i < W.length; i++) {
    var s = ~~(i / 20);
    var t = sum32_5(rotl32(a, 5), ft_1(s, b, c, d), e, W[i], sha1_K[s]);
    e = d;
    d = c;
    c = rotl32(b, 30);
    b = a;
    a = t;
  }

  this.h[0] = sum32(this.h[0], a);
  this.h[1] = sum32(this.h[1], b);
  this.h[2] = sum32(this.h[2], c);
  this.h[3] = sum32(this.h[3], d);
  this.h[4] = sum32(this.h[4], e);
};

SHA1.prototype._digest = function digest(enc) {
  if (enc === 'hex')
    return utils.toHex32(this.h, 'big');
  else
    return utils.split32(this.h, 'big');
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(14);
var SHA256 = __webpack_require__(88);

function SHA224() {
  if (!(this instanceof SHA224))
    return new SHA224();

  SHA256.call(this);
  this.h = [
    0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
    0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4 ];
}
utils.inherits(SHA224, SHA256);
module.exports = SHA224;

SHA224.blockSize = 512;
SHA224.outSize = 224;
SHA224.hmacStrength = 192;
SHA224.padLength = 64;

SHA224.prototype._digest = function digest(enc) {
  // Just truncate output
  if (enc === 'hex')
    return utils.toHex32(this.h.slice(0, 7), 'big');
  else
    return utils.split32(this.h.slice(0, 7), 'big');
};



/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(14);

var SHA512 = __webpack_require__(89);

function SHA384() {
  if (!(this instanceof SHA384))
    return new SHA384();

  SHA512.call(this);
  this.h = [
    0xcbbb9d5d, 0xc1059ed8,
    0x629a292a, 0x367cd507,
    0x9159015a, 0x3070dd17,
    0x152fecd8, 0xf70e5939,
    0x67332667, 0xffc00b31,
    0x8eb44a87, 0x68581511,
    0xdb0c2e0d, 0x64f98fa7,
    0x47b5481d, 0xbefa4fa4 ];
}
utils.inherits(SHA384, SHA512);
module.exports = SHA384;

SHA384.blockSize = 1024;
SHA384.outSize = 384;
SHA384.hmacStrength = 192;
SHA384.padLength = 128;

SHA384.prototype._digest = function digest(enc) {
  if (enc === 'hex')
    return utils.toHex32(this.h.slice(0, 12), 'big');
  else
    return utils.split32(this.h.slice(0, 12), 'big');
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(14);
var common = __webpack_require__(31);

var rotl32 = utils.rotl32;
var sum32 = utils.sum32;
var sum32_3 = utils.sum32_3;
var sum32_4 = utils.sum32_4;
var BlockHash = common.BlockHash;

function RIPEMD160() {
  if (!(this instanceof RIPEMD160))
    return new RIPEMD160();

  BlockHash.call(this);

  this.h = [ 0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0 ];
  this.endian = 'little';
}
utils.inherits(RIPEMD160, BlockHash);
exports.ripemd160 = RIPEMD160;

RIPEMD160.blockSize = 512;
RIPEMD160.outSize = 160;
RIPEMD160.hmacStrength = 192;
RIPEMD160.padLength = 64;

RIPEMD160.prototype._update = function update(msg, start) {
  var A = this.h[0];
  var B = this.h[1];
  var C = this.h[2];
  var D = this.h[3];
  var E = this.h[4];
  var Ah = A;
  var Bh = B;
  var Ch = C;
  var Dh = D;
  var Eh = E;
  for (var j = 0; j < 80; j++) {
    var T = sum32(
      rotl32(
        sum32_4(A, f(j, B, C, D), msg[r[j] + start], K(j)),
        s[j]),
      E);
    A = E;
    E = D;
    D = rotl32(C, 10);
    C = B;
    B = T;
    T = sum32(
      rotl32(
        sum32_4(Ah, f(79 - j, Bh, Ch, Dh), msg[rh[j] + start], Kh(j)),
        sh[j]),
      Eh);
    Ah = Eh;
    Eh = Dh;
    Dh = rotl32(Ch, 10);
    Ch = Bh;
    Bh = T;
  }
  T = sum32_3(this.h[1], C, Dh);
  this.h[1] = sum32_3(this.h[2], D, Eh);
  this.h[2] = sum32_3(this.h[3], E, Ah);
  this.h[3] = sum32_3(this.h[4], A, Bh);
  this.h[4] = sum32_3(this.h[0], B, Ch);
  this.h[0] = T;
};

RIPEMD160.prototype._digest = function digest(enc) {
  if (enc === 'hex')
    return utils.toHex32(this.h, 'little');
  else
    return utils.split32(this.h, 'little');
};

function f(j, x, y, z) {
  if (j <= 15)
    return x ^ y ^ z;
  else if (j <= 31)
    return (x & y) | ((~x) & z);
  else if (j <= 47)
    return (x | (~y)) ^ z;
  else if (j <= 63)
    return (x & z) | (y & (~z));
  else
    return x ^ (y | (~z));
}

function K(j) {
  if (j <= 15)
    return 0x00000000;
  else if (j <= 31)
    return 0x5a827999;
  else if (j <= 47)
    return 0x6ed9eba1;
  else if (j <= 63)
    return 0x8f1bbcdc;
  else
    return 0xa953fd4e;
}

function Kh(j) {
  if (j <= 15)
    return 0x50a28be6;
  else if (j <= 31)
    return 0x5c4dd124;
  else if (j <= 47)
    return 0x6d703ef3;
  else if (j <= 63)
    return 0x7a6d76e9;
  else
    return 0x00000000;
}

var r = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
  3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
  1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
  4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13
];

var rh = [
  5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
  6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
  15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
  8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
  12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11
];

var s = [
  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
  7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
  11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
  11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
  9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6
];

var sh = [
  8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
  9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
  9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
  15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
  8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11
];


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(14);
var assert = __webpack_require__(22);

function Hmac(hash, key, enc) {
  if (!(this instanceof Hmac))
    return new Hmac(hash, key, enc);
  this.Hash = hash;
  this.blockSize = hash.blockSize / 8;
  this.outSize = hash.outSize / 8;
  this.inner = null;
  this.outer = null;

  this._init(utils.toArray(key, enc));
}
module.exports = Hmac;

Hmac.prototype._init = function init(key) {
  // Shorten key, if needed
  if (key.length > this.blockSize)
    key = new this.Hash().update(key).digest();
  assert(key.length <= this.blockSize);

  // Add padding to key
  for (var i = key.length; i < this.blockSize; i++)
    key.push(0);

  for (i = 0; i < key.length; i++)
    key[i] ^= 0x36;
  this.inner = new this.Hash().update(key);

  // 0x36 ^ 0x5c = 0x6a
  for (i = 0; i < key.length; i++)
    key[i] ^= 0x6a;
  this.outer = new this.Hash().update(key);
};

Hmac.prototype.update = function update(msg, enc) {
  this.inner.update(msg, enc);
  return this;
};

Hmac.prototype.digest = function digest(enc) {
  this.outer.update(this.inner.digest());
  return this.outer.digest(enc);
};


/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = {
  doubles: {
    step: 4,
    points: [
      [
        'e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a',
        'f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821'
      ],
      [
        '8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508',
        '11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf'
      ],
      [
        '175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739',
        'd3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695'
      ],
      [
        '363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640',
        '4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9'
      ],
      [
        '8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c',
        '4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36'
      ],
      [
        '723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda',
        '96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f'
      ],
      [
        'eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa',
        '5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999'
      ],
      [
        '100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0',
        'cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09'
      ],
      [
        'e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d',
        '9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d'
      ],
      [
        'feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d',
        'e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088'
      ],
      [
        'da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1',
        '9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d'
      ],
      [
        '53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0',
        '5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8'
      ],
      [
        '8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047',
        '10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a'
      ],
      [
        '385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862',
        '283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453'
      ],
      [
        '6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7',
        '7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160'
      ],
      [
        '3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd',
        '56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0'
      ],
      [
        '85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83',
        '7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6'
      ],
      [
        '948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a',
        '53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589'
      ],
      [
        '6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8',
        'bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17'
      ],
      [
        'e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d',
        '4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda'
      ],
      [
        'e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725',
        '7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd'
      ],
      [
        '213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754',
        '4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2'
      ],
      [
        '4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c',
        '17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6'
      ],
      [
        'fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6',
        '6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f'
      ],
      [
        '76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39',
        'c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01'
      ],
      [
        'c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891',
        '893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3'
      ],
      [
        'd895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b',
        'febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f'
      ],
      [
        'b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03',
        '2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7'
      ],
      [
        'e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d',
        'eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78'
      ],
      [
        'a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070',
        '7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1'
      ],
      [
        '90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4',
        'e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150'
      ],
      [
        '8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da',
        '662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82'
      ],
      [
        'e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11',
        '1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc'
      ],
      [
        '8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e',
        'efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b'
      ],
      [
        'e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41',
        '2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51'
      ],
      [
        'b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef',
        '67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45'
      ],
      [
        'd68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8',
        'db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120'
      ],
      [
        '324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d',
        '648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84'
      ],
      [
        '4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96',
        '35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d'
      ],
      [
        '9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd',
        'ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d'
      ],
      [
        '6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5',
        '9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8'
      ],
      [
        'a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266',
        '40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8'
      ],
      [
        '7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71',
        '34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac'
      ],
      [
        '928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac',
        'c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f'
      ],
      [
        '85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751',
        '1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962'
      ],
      [
        'ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e',
        '493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907'
      ],
      [
        '827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241',
        'c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec'
      ],
      [
        'eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3',
        'be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d'
      ],
      [
        'e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f',
        '4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414'
      ],
      [
        '1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19',
        'aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd'
      ],
      [
        '146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be',
        'b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0'
      ],
      [
        'fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9',
        '6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811'
      ],
      [
        'da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2',
        '8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1'
      ],
      [
        'a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13',
        '7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c'
      ],
      [
        '174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c',
        'ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73'
      ],
      [
        '959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba',
        '2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd'
      ],
      [
        'd2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151',
        'e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405'
      ],
      [
        '64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073',
        'd99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589'
      ],
      [
        '8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458',
        '38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e'
      ],
      [
        '13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b',
        '69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27'
      ],
      [
        'bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366',
        'd3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1'
      ],
      [
        '8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa',
        '40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482'
      ],
      [
        '8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0',
        '620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945'
      ],
      [
        'dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787',
        '7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573'
      ],
      [
        'f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e',
        'ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82'
      ]
    ]
  },
  naf: {
    wnd: 7,
    points: [
      [
        'f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9',
        '388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672'
      ],
      [
        '2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4',
        'd8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6'
      ],
      [
        '5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc',
        '6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da'
      ],
      [
        'acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe',
        'cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37'
      ],
      [
        '774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb',
        'd984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b'
      ],
      [
        'f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8',
        'ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81'
      ],
      [
        'd7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e',
        '581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58'
      ],
      [
        'defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34',
        '4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77'
      ],
      [
        '2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c',
        '85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a'
      ],
      [
        '352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5',
        '321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c'
      ],
      [
        '2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f',
        '2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67'
      ],
      [
        '9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714',
        '73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402'
      ],
      [
        'daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729',
        'a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55'
      ],
      [
        'c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db',
        '2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482'
      ],
      [
        '6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4',
        'e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82'
      ],
      [
        '1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5',
        'b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396'
      ],
      [
        '605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479',
        '2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49'
      ],
      [
        '62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d',
        '80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf'
      ],
      [
        '80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f',
        '1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a'
      ],
      [
        '7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb',
        'd0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7'
      ],
      [
        'd528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9',
        'eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933'
      ],
      [
        '49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963',
        '758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a'
      ],
      [
        '77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74',
        '958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6'
      ],
      [
        'f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530',
        'e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37'
      ],
      [
        '463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b',
        '5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e'
      ],
      [
        'f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247',
        'cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6'
      ],
      [
        'caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1',
        'cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476'
      ],
      [
        '2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120',
        '4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40'
      ],
      [
        '7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435',
        '91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61'
      ],
      [
        '754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18',
        '673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683'
      ],
      [
        'e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8',
        '59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5'
      ],
      [
        '186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb',
        '3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b'
      ],
      [
        'df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f',
        '55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417'
      ],
      [
        '5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143',
        'efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868'
      ],
      [
        '290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba',
        'e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a'
      ],
      [
        'af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45',
        'f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6'
      ],
      [
        '766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a',
        '744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996'
      ],
      [
        '59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e',
        'c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e'
      ],
      [
        'f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8',
        'e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d'
      ],
      [
        '7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c',
        '30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2'
      ],
      [
        '948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519',
        'e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e'
      ],
      [
        '7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab',
        '100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437'
      ],
      [
        '3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca',
        'ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311'
      ],
      [
        'd3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf',
        '8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4'
      ],
      [
        '1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610',
        '68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575'
      ],
      [
        '733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4',
        'f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d'
      ],
      [
        '15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c',
        'd56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d'
      ],
      [
        'a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940',
        'edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629'
      ],
      [
        'e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980',
        'a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06'
      ],
      [
        '311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3',
        '66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374'
      ],
      [
        '34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf',
        '9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee'
      ],
      [
        'f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63',
        '4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1'
      ],
      [
        'd7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448',
        'fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b'
      ],
      [
        '32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf',
        '5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661'
      ],
      [
        '7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5',
        '8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6'
      ],
      [
        'ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6',
        '8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e'
      ],
      [
        '16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5',
        '5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d'
      ],
      [
        'eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99',
        'f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc'
      ],
      [
        '78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51',
        'f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4'
      ],
      [
        '494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5',
        '42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c'
      ],
      [
        'a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5',
        '204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b'
      ],
      [
        'c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997',
        '4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913'
      ],
      [
        '841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881',
        '73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154'
      ],
      [
        '5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5',
        '39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865'
      ],
      [
        '36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66',
        'd2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc'
      ],
      [
        '336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726',
        'ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224'
      ],
      [
        '8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede',
        '6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e'
      ],
      [
        '1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94',
        '60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6'
      ],
      [
        '85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31',
        '3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511'
      ],
      [
        '29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51',
        'b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b'
      ],
      [
        'a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252',
        'ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2'
      ],
      [
        '4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5',
        'cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c'
      ],
      [
        'd24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b',
        '6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3'
      ],
      [
        'ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4',
        '322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d'
      ],
      [
        'af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f',
        '6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700'
      ],
      [
        'e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889',
        '2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4'
      ],
      [
        '591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246',
        'b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196'
      ],
      [
        '11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984',
        '998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4'
      ],
      [
        '3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a',
        'b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257'
      ],
      [
        'cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030',
        'bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13'
      ],
      [
        'c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197',
        '6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096'
      ],
      [
        'c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593',
        'c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38'
      ],
      [
        'a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef',
        '21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f'
      ],
      [
        '347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38',
        '60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448'
      ],
      [
        'da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a',
        '49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a'
      ],
      [
        'c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111',
        '5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4'
      ],
      [
        '4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502',
        '7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437'
      ],
      [
        '3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea',
        'be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7'
      ],
      [
        'cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26',
        '8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d'
      ],
      [
        'b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986',
        '39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a'
      ],
      [
        'd4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e',
        '62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54'
      ],
      [
        '48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4',
        '25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77'
      ],
      [
        'dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda',
        'ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517'
      ],
      [
        '6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859',
        'cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10'
      ],
      [
        'e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f',
        'f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125'
      ],
      [
        'eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c',
        '6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e'
      ],
      [
        '13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942',
        'fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1'
      ],
      [
        'ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a',
        '1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2'
      ],
      [
        'b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80',
        '5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423'
      ],
      [
        'ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d',
        '438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8'
      ],
      [
        '8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1',
        'cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758'
      ],
      [
        '52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63',
        'c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375'
      ],
      [
        'e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352',
        '6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d'
      ],
      [
        '7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193',
        'ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec'
      ],
      [
        '5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00',
        '9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0'
      ],
      [
        '32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58',
        'ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c'
      ],
      [
        'e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7',
        'd3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4'
      ],
      [
        '8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8',
        'c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f'
      ],
      [
        '4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e',
        '67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649'
      ],
      [
        '3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d',
        'cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826'
      ],
      [
        '674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b',
        '299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5'
      ],
      [
        'd32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f',
        'f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87'
      ],
      [
        '30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6',
        '462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b'
      ],
      [
        'be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297',
        '62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc'
      ],
      [
        '93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a',
        '7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c'
      ],
      [
        'b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c',
        'ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f'
      ],
      [
        'd5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52',
        '4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a'
      ],
      [
        'd3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb',
        'bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46'
      ],
      [
        '463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065',
        'bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f'
      ],
      [
        '7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917',
        '603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03'
      ],
      [
        '74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9',
        'cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08'
      ],
      [
        '30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3',
        '553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8'
      ],
      [
        '9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57',
        '712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373'
      ],
      [
        '176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66',
        'ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3'
      ],
      [
        '75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8',
        '9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8'
      ],
      [
        '809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721',
        '9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1'
      ],
      [
        '1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180',
        '4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9'
      ]
    ]
  }
};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BN = __webpack_require__(17);
var HmacDRBG = __webpack_require__(155);
var elliptic = __webpack_require__(9);
var utils = elliptic.utils;
var assert = utils.assert;

var KeyPair = __webpack_require__(156);
var Signature = __webpack_require__(67);

function EC(options) {
  if (!(this instanceof EC))
    return new EC(options);

  // Shortcut `elliptic.ec(curve-name)`
  if (typeof options === 'string') {
    assert(elliptic.curves.hasOwnProperty(options), 'Unknown curve ' + options);

    options = elliptic.curves[options];
  }

  // Shortcut for `elliptic.ec(elliptic.curves.curveName)`
  if (options instanceof elliptic.curves.PresetCurve)
    options = { curve: options };

  this.curve = options.curve.curve;
  this.n = this.curve.n;
  this.nh = this.n.ushrn(1);
  this.g = this.curve.g;

  // Point on curve
  this.g = options.curve.g;
  this.g.precompute(options.curve.n.bitLength() + 1);

  // Hash for function for DRBG
  this.hash = options.hash || options.curve.hash;
}
module.exports = EC;

EC.prototype.keyPair = function keyPair(options) {
  return new KeyPair(this, options);
};

EC.prototype.keyFromPrivate = function keyFromPrivate(priv, enc) {
  return KeyPair.fromPrivate(this, priv, enc);
};

EC.prototype.keyFromPublic = function keyFromPublic(pub, enc) {
  return KeyPair.fromPublic(this, pub, enc);
};

EC.prototype.genKeyPair = function genKeyPair(options) {
  if (!options)
    options = {};

  // Instantiate Hmac_DRBG
  var drbg = new HmacDRBG({
    hash: this.hash,
    pers: options.pers,
    persEnc: options.persEnc || 'utf8',
    entropy: options.entropy || elliptic.rand(this.hash.hmacStrength),
    entropyEnc: options.entropy && options.entropyEnc || 'utf8',
    nonce: this.n.toArray()
  });

  var bytes = this.n.byteLength();
  var ns2 = this.n.sub(new BN(2));
  do {
    var priv = new BN(drbg.generate(bytes));
    if (priv.cmp(ns2) > 0)
      continue;

    priv.iaddn(1);
    return this.keyFromPrivate(priv);
  } while (true);
};

EC.prototype._truncateToN = function truncateToN(msg, truncOnly) {
  var delta = msg.byteLength() * 8 - this.n.bitLength();
  if (delta > 0)
    msg = msg.ushrn(delta);
  if (!truncOnly && msg.cmp(this.n) >= 0)
    return msg.sub(this.n);
  else
    return msg;
};

EC.prototype.sign = function sign(msg, key, enc, options) {
  if (typeof enc === 'object') {
    options = enc;
    enc = null;
  }
  if (!options)
    options = {};

  key = this.keyFromPrivate(key, enc);
  msg = this._truncateToN(new BN(msg, 16));

  // Zero-extend key to provide enough entropy
  var bytes = this.n.byteLength();
  var bkey = key.getPrivate().toArray('be', bytes);

  // Zero-extend nonce to have the same byte size as N
  var nonce = msg.toArray('be', bytes);

  // Instantiate Hmac_DRBG
  var drbg = new HmacDRBG({
    hash: this.hash,
    entropy: bkey,
    nonce: nonce,
    pers: options.pers,
    persEnc: options.persEnc || 'utf8'
  });

  // Number of bytes to generate
  var ns1 = this.n.sub(new BN(1));

  for (var iter = 0; true; iter++) {
    var k = options.k ?
        options.k(iter) :
        new BN(drbg.generate(this.n.byteLength()));
    k = this._truncateToN(k, true);
    if (k.cmpn(1) <= 0 || k.cmp(ns1) >= 0)
      continue;

    var kp = this.g.mul(k);
    if (kp.isInfinity())
      continue;

    var kpX = kp.getX();
    var r = kpX.umod(this.n);
    if (r.cmpn(0) === 0)
      continue;

    var s = k.invm(this.n).mul(r.mul(key.getPrivate()).iadd(msg));
    s = s.umod(this.n);
    if (s.cmpn(0) === 0)
      continue;

    var recoveryParam = (kp.getY().isOdd() ? 1 : 0) |
                        (kpX.cmp(r) !== 0 ? 2 : 0);

    // Use complement of `s`, if it is > `n / 2`
    if (options.canonical && s.cmp(this.nh) > 0) {
      s = this.n.sub(s);
      recoveryParam ^= 1;
    }

    return new Signature({ r: r, s: s, recoveryParam: recoveryParam });
  }
};

EC.prototype.verify = function verify(msg, signature, key, enc) {
  msg = this._truncateToN(new BN(msg, 16));
  key = this.keyFromPublic(key, enc);
  signature = new Signature(signature, 'hex');

  // Perform primitive values validation
  var r = signature.r;
  var s = signature.s;
  if (r.cmpn(1) < 0 || r.cmp(this.n) >= 0)
    return false;
  if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0)
    return false;

  // Validate signature
  var sinv = s.invm(this.n);
  var u1 = sinv.mul(msg).umod(this.n);
  var u2 = sinv.mul(r).umod(this.n);

  if (!this.curve._maxwellTrick) {
    var p = this.g.mulAdd(u1, key.getPublic(), u2);
    if (p.isInfinity())
      return false;

    return p.getX().umod(this.n).cmp(r) === 0;
  }

  // NOTE: Greg Maxwell's trick, inspired by:
  // https://git.io/vad3K

  var p = this.g.jmulAdd(u1, key.getPublic(), u2);
  if (p.isInfinity())
    return false;

  // Compare `p.x` of Jacobian point with `r`,
  // this will do `p.x == r * p.z^2` instead of multiplying `p.x` by the
  // inverse of `p.z^2`
  return p.eqXToP(r);
};

EC.prototype.recoverPubKey = function(msg, signature, j, enc) {
  assert((3 & j) === j, 'The recovery param is more than two bits');
  signature = new Signature(signature, enc);

  var n = this.n;
  var e = new BN(msg);
  var r = signature.r;
  var s = signature.s;

  // A set LSB signifies that the y-coordinate is odd
  var isYOdd = j & 1;
  var isSecondKey = j >> 1;
  if (r.cmp(this.curve.p.umod(this.curve.n)) >= 0 && isSecondKey)
    throw new Error('Unable to find sencond key candinate');

  // 1.1. Let x = r + jn.
  if (isSecondKey)
    r = this.curve.pointFromX(r.add(this.curve.n), isYOdd);
  else
    r = this.curve.pointFromX(r, isYOdd);

  var rInv = signature.r.invm(n);
  var s1 = n.sub(e).mul(rInv).umod(n);
  var s2 = s.mul(rInv).umod(n);

  // 1.6.1 Compute Q = r^-1 (sR -  eG)
  //               Q = r^-1 (sR + -eG)
  return this.g.mulAdd(s1, r, s2);
};

EC.prototype.getKeyRecoveryParam = function(e, signature, Q, enc) {
  signature = new Signature(signature, enc);
  if (signature.recoveryParam !== null)
    return signature.recoveryParam;

  for (var i = 0; i < 4; i++) {
    var Qprime;
    try {
      Qprime = this.recoverPubKey(e, signature, i);
    } catch (e) {
      continue;
    }

    if (Qprime.eq(Q))
      return i;
  }
  throw new Error('Unable to find valid recovery factor');
};


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hash = __webpack_require__(55);
var utils = __webpack_require__(86);
var assert = __webpack_require__(22);

function HmacDRBG(options) {
  if (!(this instanceof HmacDRBG))
    return new HmacDRBG(options);
  this.hash = options.hash;
  this.predResist = !!options.predResist;

  this.outLen = this.hash.outSize;
  this.minEntropy = options.minEntropy || this.hash.hmacStrength;

  this._reseed = null;
  this.reseedInterval = null;
  this.K = null;
  this.V = null;

  var entropy = utils.toArray(options.entropy, options.entropyEnc || 'hex');
  var nonce = utils.toArray(options.nonce, options.nonceEnc || 'hex');
  var pers = utils.toArray(options.pers, options.persEnc || 'hex');
  assert(entropy.length >= (this.minEntropy / 8),
         'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits');
  this._init(entropy, nonce, pers);
}
module.exports = HmacDRBG;

HmacDRBG.prototype._init = function init(entropy, nonce, pers) {
  var seed = entropy.concat(nonce).concat(pers);

  this.K = new Array(this.outLen / 8);
  this.V = new Array(this.outLen / 8);
  for (var i = 0; i < this.V.length; i++) {
    this.K[i] = 0x00;
    this.V[i] = 0x01;
  }

  this._update(seed);
  this._reseed = 1;
  this.reseedInterval = 0x1000000000000;  // 2^48
};

HmacDRBG.prototype._hmac = function hmac() {
  return new hash.hmac(this.hash, this.K);
};

HmacDRBG.prototype._update = function update(seed) {
  var kmac = this._hmac()
                 .update(this.V)
                 .update([ 0x00 ]);
  if (seed)
    kmac = kmac.update(seed);
  this.K = kmac.digest();
  this.V = this._hmac().update(this.V).digest();
  if (!seed)
    return;

  this.K = this._hmac()
               .update(this.V)
               .update([ 0x01 ])
               .update(seed)
               .digest();
  this.V = this._hmac().update(this.V).digest();
};

HmacDRBG.prototype.reseed = function reseed(entropy, entropyEnc, add, addEnc) {
  // Optional entropy enc
  if (typeof entropyEnc !== 'string') {
    addEnc = add;
    add = entropyEnc;
    entropyEnc = null;
  }

  entropy = utils.toArray(entropy, entropyEnc);
  add = utils.toArray(add, addEnc);

  assert(entropy.length >= (this.minEntropy / 8),
         'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits');

  this._update(entropy.concat(add || []));
  this._reseed = 1;
};

HmacDRBG.prototype.generate = function generate(len, enc, add, addEnc) {
  if (this._reseed > this.reseedInterval)
    throw new Error('Reseed is required');

  // Optional encoding
  if (typeof enc !== 'string') {
    addEnc = add;
    add = enc;
    enc = null;
  }

  // Optional additional data
  if (add) {
    add = utils.toArray(add, addEnc || 'hex');
    this._update(add);
  }

  var temp = [];
  while (temp.length < len) {
    this.V = this._hmac().update(this.V).digest();
    temp = temp.concat(this.V);
  }

  var res = temp.slice(0, len);
  this._update(add);
  this._reseed++;
  return utils.encode(res, enc);
};


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BN = __webpack_require__(17);
var elliptic = __webpack_require__(9);
var utils = elliptic.utils;
var assert = utils.assert;

function KeyPair(ec, options) {
  this.ec = ec;
  this.priv = null;
  this.pub = null;

  // KeyPair(ec, { priv: ..., pub: ... })
  if (options.priv)
    this._importPrivate(options.priv, options.privEnc);
  if (options.pub)
    this._importPublic(options.pub, options.pubEnc);
}
module.exports = KeyPair;

KeyPair.fromPublic = function fromPublic(ec, pub, enc) {
  if (pub instanceof KeyPair)
    return pub;

  return new KeyPair(ec, {
    pub: pub,
    pubEnc: enc
  });
};

KeyPair.fromPrivate = function fromPrivate(ec, priv, enc) {
  if (priv instanceof KeyPair)
    return priv;

  return new KeyPair(ec, {
    priv: priv,
    privEnc: enc
  });
};

KeyPair.prototype.validate = function validate() {
  var pub = this.getPublic();

  if (pub.isInfinity())
    return { result: false, reason: 'Invalid public key' };
  if (!pub.validate())
    return { result: false, reason: 'Public key is not a point' };
  if (!pub.mul(this.ec.curve.n).isInfinity())
    return { result: false, reason: 'Public key * N != O' };

  return { result: true, reason: null };
};

KeyPair.prototype.getPublic = function getPublic(compact, enc) {
  // compact is optional argument
  if (typeof compact === 'string') {
    enc = compact;
    compact = null;
  }

  if (!this.pub)
    this.pub = this.ec.g.mul(this.priv);

  if (!enc)
    return this.pub;

  return this.pub.encode(enc, compact);
};

KeyPair.prototype.getPrivate = function getPrivate(enc) {
  if (enc === 'hex')
    return this.priv.toString(16, 2);
  else
    return this.priv;
};

KeyPair.prototype._importPrivate = function _importPrivate(key, enc) {
  this.priv = new BN(key, enc || 16);

  // Ensure that the priv won't be bigger than n, otherwise we may fail
  // in fixed multiplication method
  this.priv = this.priv.umod(this.ec.curve.n);
};

KeyPair.prototype._importPublic = function _importPublic(key, enc) {
  if (key.x || key.y) {
    // Montgomery points only have an `x` coordinate.
    // Weierstrass/Edwards points on the other hand have both `x` and
    // `y` coordinates.
    if (this.ec.curve.type === 'mont') {
      assert(key.x, 'Need x coordinate');
    } else if (this.ec.curve.type === 'short' ||
               this.ec.curve.type === 'edwards') {
      assert(key.x && key.y, 'Need both x and y coordinate');
    }
    this.pub = this.ec.curve.point(key.x, key.y);
    return;
  }
  this.pub = this.ec.curve.decodePoint(key, enc);
};

// ECDH
KeyPair.prototype.derive = function derive(pub) {
  return pub.mul(this.priv).getX();
};

// ECDSA
KeyPair.prototype.sign = function sign(msg, enc, options) {
  return this.ec.sign(msg, this, enc, options);
};

KeyPair.prototype.verify = function verify(msg, signature) {
  return this.ec.verify(msg, signature, this);
};

KeyPair.prototype.inspect = function inspect() {
  return '<Key priv: ' + (this.priv && this.priv.toString(16, 2)) +
         ' pub: ' + (this.pub && this.pub.inspect()) + ' >';
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hash = __webpack_require__(55);
var elliptic = __webpack_require__(9);
var utils = elliptic.utils;
var assert = utils.assert;
var parseBytes = utils.parseBytes;
var KeyPair = __webpack_require__(158);
var Signature = __webpack_require__(159);

function EDDSA(curve) {
  assert(curve === 'ed25519', 'only tested with ed25519 so far');

  if (!(this instanceof EDDSA))
    return new EDDSA(curve);

  var curve = elliptic.curves[curve].curve;
  this.curve = curve;
  this.g = curve.g;
  this.g.precompute(curve.n.bitLength() + 1);

  this.pointClass = curve.point().constructor;
  this.encodingLength = Math.ceil(curve.n.bitLength() / 8);
  this.hash = hash.sha512;
}

module.exports = EDDSA;

/**
* @param {Array|String} message - message bytes
* @param {Array|String|KeyPair} secret - secret bytes or a keypair
* @returns {Signature} - signature
*/
EDDSA.prototype.sign = function sign(message, secret) {
  message = parseBytes(message);
  var key = this.keyFromSecret(secret);
  var r = this.hashInt(key.messagePrefix(), message);
  var R = this.g.mul(r);
  var Rencoded = this.encodePoint(R);
  var s_ = this.hashInt(Rencoded, key.pubBytes(), message)
               .mul(key.priv());
  var S = r.add(s_).umod(this.curve.n);
  return this.makeSignature({ R: R, S: S, Rencoded: Rencoded });
};

/**
* @param {Array} message - message bytes
* @param {Array|String|Signature} sig - sig bytes
* @param {Array|String|Point|KeyPair} pub - public key
* @returns {Boolean} - true if public key matches sig of message
*/
EDDSA.prototype.verify = function verify(message, sig, pub) {
  message = parseBytes(message);
  sig = this.makeSignature(sig);
  var key = this.keyFromPublic(pub);
  var h = this.hashInt(sig.Rencoded(), key.pubBytes(), message);
  var SG = this.g.mul(sig.S());
  var RplusAh = sig.R().add(key.pub().mul(h));
  return RplusAh.eq(SG);
};

EDDSA.prototype.hashInt = function hashInt() {
  var hash = this.hash();
  for (var i = 0; i < arguments.length; i++)
    hash.update(arguments[i]);
  return utils.intFromLE(hash.digest()).umod(this.curve.n);
};

EDDSA.prototype.keyFromPublic = function keyFromPublic(pub) {
  return KeyPair.fromPublic(this, pub);
};

EDDSA.prototype.keyFromSecret = function keyFromSecret(secret) {
  return KeyPair.fromSecret(this, secret);
};

EDDSA.prototype.makeSignature = function makeSignature(sig) {
  if (sig instanceof Signature)
    return sig;
  return new Signature(this, sig);
};

/**
* * https://tools.ietf.org/html/draft-josefsson-eddsa-ed25519-03#section-5.2
*
* EDDSA defines methods for encoding and decoding points and integers. These are
* helper convenience methods, that pass along to utility functions implied
* parameters.
*
*/
EDDSA.prototype.encodePoint = function encodePoint(point) {
  var enc = point.getY().toArray('le', this.encodingLength);
  enc[this.encodingLength - 1] |= point.getX().isOdd() ? 0x80 : 0;
  return enc;
};

EDDSA.prototype.decodePoint = function decodePoint(bytes) {
  bytes = utils.parseBytes(bytes);

  var lastIx = bytes.length - 1;
  var normed = bytes.slice(0, lastIx).concat(bytes[lastIx] & ~0x80);
  var xIsOdd = (bytes[lastIx] & 0x80) !== 0;

  var y = utils.intFromLE(normed);
  return this.curve.pointFromY(y, xIsOdd);
};

EDDSA.prototype.encodeInt = function encodeInt(num) {
  return num.toArray('le', this.encodingLength);
};

EDDSA.prototype.decodeInt = function decodeInt(bytes) {
  return utils.intFromLE(bytes);
};

EDDSA.prototype.isPoint = function isPoint(val) {
  return val instanceof this.pointClass;
};


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var elliptic = __webpack_require__(9);
var utils = elliptic.utils;
var assert = utils.assert;
var parseBytes = utils.parseBytes;
var cachedProperty = utils.cachedProperty;

/**
* @param {EDDSA} eddsa - instance
* @param {Object} params - public/private key parameters
*
* @param {Array<Byte>} [params.secret] - secret seed bytes
* @param {Point} [params.pub] - public key point (aka `A` in eddsa terms)
* @param {Array<Byte>} [params.pub] - public key point encoded as bytes
*
*/
function KeyPair(eddsa, params) {
  this.eddsa = eddsa;
  this._secret = parseBytes(params.secret);
  if (eddsa.isPoint(params.pub))
    this._pub = params.pub;
  else
    this._pubBytes = parseBytes(params.pub);
}

KeyPair.fromPublic = function fromPublic(eddsa, pub) {
  if (pub instanceof KeyPair)
    return pub;
  return new KeyPair(eddsa, { pub: pub });
};

KeyPair.fromSecret = function fromSecret(eddsa, secret) {
  if (secret instanceof KeyPair)
    return secret;
  return new KeyPair(eddsa, { secret: secret });
};

KeyPair.prototype.secret = function secret() {
  return this._secret;
};

cachedProperty(KeyPair, 'pubBytes', function pubBytes() {
  return this.eddsa.encodePoint(this.pub());
});

cachedProperty(KeyPair, 'pub', function pub() {
  if (this._pubBytes)
    return this.eddsa.decodePoint(this._pubBytes);
  return this.eddsa.g.mul(this.priv());
});

cachedProperty(KeyPair, 'privBytes', function privBytes() {
  var eddsa = this.eddsa;
  var hash = this.hash();
  var lastIx = eddsa.encodingLength - 1;

  var a = hash.slice(0, eddsa.encodingLength);
  a[0] &= 248;
  a[lastIx] &= 127;
  a[lastIx] |= 64;

  return a;
});

cachedProperty(KeyPair, 'priv', function priv() {
  return this.eddsa.decodeInt(this.privBytes());
});

cachedProperty(KeyPair, 'hash', function hash() {
  return this.eddsa.hash().update(this.secret()).digest();
});

cachedProperty(KeyPair, 'messagePrefix', function messagePrefix() {
  return this.hash().slice(this.eddsa.encodingLength);
});

KeyPair.prototype.sign = function sign(message) {
  assert(this._secret, 'KeyPair can only verify');
  return this.eddsa.sign(message, this);
};

KeyPair.prototype.verify = function verify(message, sig) {
  return this.eddsa.verify(message, sig, this);
};

KeyPair.prototype.getSecret = function getSecret(enc) {
  assert(this._secret, 'KeyPair is public only');
  return utils.encode(this.secret(), enc);
};

KeyPair.prototype.getPublic = function getPublic(enc) {
  return utils.encode(this.pubBytes(), enc);
};

module.exports = KeyPair;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BN = __webpack_require__(17);
var elliptic = __webpack_require__(9);
var utils = elliptic.utils;
var assert = utils.assert;
var cachedProperty = utils.cachedProperty;
var parseBytes = utils.parseBytes;

/**
* @param {EDDSA} eddsa - eddsa instance
* @param {Array<Bytes>|Object} sig -
* @param {Array<Bytes>|Point} [sig.R] - R point as Point or bytes
* @param {Array<Bytes>|bn} [sig.S] - S scalar as bn or bytes
* @param {Array<Bytes>} [sig.Rencoded] - R point encoded
* @param {Array<Bytes>} [sig.Sencoded] - S scalar encoded
*/
function Signature(eddsa, sig) {
  this.eddsa = eddsa;

  if (typeof sig !== 'object')
    sig = parseBytes(sig);

  if (Array.isArray(sig)) {
    sig = {
      R: sig.slice(0, eddsa.encodingLength),
      S: sig.slice(eddsa.encodingLength)
    };
  }

  assert(sig.R && sig.S, 'Signature without R or S');

  if (eddsa.isPoint(sig.R))
    this._R = sig.R;
  if (sig.S instanceof BN)
    this._S = sig.S;

  this._Rencoded = Array.isArray(sig.R) ? sig.R : sig.Rencoded;
  this._Sencoded = Array.isArray(sig.S) ? sig.S : sig.Sencoded;
}

cachedProperty(Signature, 'S', function S() {
  return this.eddsa.decodeInt(this.Sencoded());
});

cachedProperty(Signature, 'R', function R() {
  return this.eddsa.decodePoint(this.Rencoded());
});

cachedProperty(Signature, 'Rencoded', function Rencoded() {
  return this.eddsa.encodePoint(this.R());
});

cachedProperty(Signature, 'Sencoded', function Sencoded() {
  return this.eddsa.encodeInt(this.S());
});

Signature.prototype.toBytes = function toBytes() {
  return this.Rencoded().concat(this.Sencoded());
};

Signature.prototype.toHex = function toHex() {
  return utils.encode(this.toBytes(), 'hex').toUpperCase();
};

module.exports = Signature;


/***/ }),
/* 160 */,
/* 161 */,
/* 162 */
/***/ (function(module, exports) {

module.exports = require("node-x15");

/***/ }),
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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



const Master = __webpack_require__(329);
const util = __webpack_require__(1);
const server = new Master();

util.log = server.log.bind(server);
util.error = util.log;

server.listen();


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2015, Fedor Indutny
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * master.js - master process for wmcc_core.
 */



const assert = __webpack_require__(0);
const EventEmitter = __webpack_require__(10);
const util = __webpack_require__(1);
const Network = __webpack_require__(6);
const jobs = __webpack_require__(126);
const Parser = __webpack_require__(127);
const Framer = __webpack_require__(128);
const packets = __webpack_require__(53);
const Parent = __webpack_require__(330);

/**
 * Represents the master process.
 * @alias module:workers.Master
 * @constructor
 */

function Master() {
  if (!(this instanceof Master))
    return new Master();

  EventEmitter.call(this);

  this.parent = new Parent();
  this.framer = new Framer();
  this.parser = new Parser();
  this.listening = false;
  this.color = false;

  this.init();
}

Object.setPrototypeOf(Master.prototype, EventEmitter.prototype);

/**
 * Initialize master. Bind events.
 * @private
 */

Master.prototype.init = function init() {
  this.parent.on('data', (data) => {
    this.parser.feed(data);
  });

  this.parent.on('error', (err) => {
    this.emit('error', err);
  });

  this.parent.on('exception', (err) => {
    this.send(new packets.ErrorPacket(err));
    setTimeout(() => this.destroy(), 1000);
  });

  this.parser.on('error', (err) => {
    this.emit('error', err);
  });

  this.parser.on('packet', (packet) => {
    this.emit('packet', packet);
  });
};

/**
 * Set environment.
 * @param {Object} env
 */

Master.prototype.setEnv = function setEnv(env) {
  this.color = env.WMCC_WORKER_ISTTY === '1';
  this.set(env.WMCC_WORKER_NETWORK);
};

/**
 * Set primary network.
 * @param {NetworkType|Network} network
 */

Master.prototype.set = function set(network) {
  return Network.set(network);
};

/**
 * Send data to worker.
 * @param {Buffer} data
 * @returns {Boolean}
 */

Master.prototype.write = function write(data) {
  return this.parent.write(data);
};

/**
 * Frame and send a packet.
 * @param {Packet} packet
 * @returns {Boolean}
 */

Master.prototype.send = function send(packet) {
  return this.write(this.framer.packet(packet));
};

/**
 * Emit an event on the worker side.
 * @param {String} event
 * @param {...Object} arg
 * @returns {Boolean}
 */

Master.prototype.sendEvent = function sendEvent(...items) {
  return this.send(new packets.EventPacket(items));
};

/**
 * Destroy the worker.
 */

Master.prototype.destroy = function destroy() {
  return this.parent.destroy();
};

/**
 * Write a message to stdout in the master process.
 * @param {Object|String} obj
 * @param {...String} args
 */

Master.prototype.log = function log(...items) {
  const text = util.format(items, this.color);
  this.send(new packets.LogPacket(text));
};

/**
 * Listen for messages from master process (only if worker).
 */

Master.prototype.listen = function listen() {
  assert(!this.listening, 'Already listening.');

  this.listening = true;

  this.on('error', (err) => {
    this.send(new packets.ErrorPacket(err));
  });

  this.on('packet', (packet) => {
    try {
      this.handlePacket(packet);
    } catch (e) {
      this.emit('error', e);
    }
  });
};

/**
 * Handle packet.
 * @private
 * @param {Packet}
 */

Master.prototype.handlePacket = function handlePacket(packet) {
  let result;

  switch (packet.cmd) {
    case packets.types.ENV:
      this.setEnv(packet.env);
      break;
    case packets.types.EVENT:
      this.emit('event', packet.items);
      this.emit(...packet.items);
      break;
    case packets.types.ERROR:
      this.emit('error', packet.error);
      break;
    default:
      result = jobs.execute(packet);
      result.id = packet.id;
      this.send(result);
      break;
  }
};

/*
 * Expose
 */

module.exports = Master;


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Copyright (c) 2014-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * parent.js - worker processes for wmcc_core.
 */



const EventEmitter = __webpack_require__(10);

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


/***/ })
/******/ ]);