/*!
 * Copyright (c) 2016-2017, Christopher Jeffrey
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-core
 * payment.js - BIP70 payment for wmcc_core.
 */
 
'use strict';

const assert = require('assert');
const Output = require('../primitives/output');
const TX = require('../primitives/tx');
const Script = require('../script/script');
const ProtoReader = require('../utils/protoreader');
const ProtoWriter = require('../utils/protowriter');
const PaymentDetails = require('./paymentdetails');

/**
 * Represents a BIP70 payment.
 * @alias module:bip70.Payment
 * @constructor
 * @param {Object?} options
 * @property {Buffer} merchantData
 * @property {TX[]} transactions
 * @property {Output[]} refundTo
 * @property {String|null} memo
 */

function Payment(options) {
  if (!(this instanceof Payment))
    return new Payment(options);

  this.merchantData = null;
  this.transactions = [];
  this.refundTo = [];
  this.memo = null;

  if (options)
    this.fromOptions(options);
}

/**
 * Inject properties from options.
 * @private
 * @param {Object} options
 * @returns {Payment}
 */

Payment.prototype.fromOptions = function fromOptions(options) {
  if (options.merchantData)
    this.setData(options.merchantData);

  if (options.transactions) {
    assert(Array.isArray(options.transactions));
    for (const item of options.transactions) {
      const tx = new TX(item);
      this.transactions.push(tx);
    }
  }

  if (options.refundTo) {
    assert(Array.isArray(options.refundTo));
    for (const item of options.refundTo) {
      const output = new Output(item);
      this.refundTo.push(output);
    }
  }

  if (options.memo != null) {
    assert(typeof options.memo === 'string');
    this.memo = options.memo;
  }

  return this;
};

/**
 * Instantiate payment from options.
 * @param {Object} options
 * @returns {Payment}
 */

Payment.fromOptions = function fromOptions(options) {
  return new Payment().fromOptions(options);
};

/**
 * Set payment details.
 * @method
 * @alias Payment#setData
 * @param {Object} data
 * @param {String?} enc
 */

Payment.prototype.setData = PaymentDetails.prototype.setData;

/**
 * Get payment details.
 * @method
 * @alias Payment#getData
 * @param {String?} enc
 * @returns {String|Object|null}
 */

Payment.prototype.getData = PaymentDetails.prototype.getData;

/**
 * Inject properties from serialized data.
 * @private
 * @param {Buffer} data
 * @returns {Payment}
 */

Payment.prototype.fromRaw = function fromRaw(data) {
  const br = new ProtoReader(data);

  this.merchantData = br.readFieldBytes(1, true);

  while (br.nextTag() === 2) {
    const tx = TX.fromRaw(br.readFieldBytes(2));
    this.transactions.push(tx);
  }

  while (br.nextTag() === 3) {
    const op = new ProtoReader(br.readFieldBytes(3));
    const output = new Output();
    output.value = op.readFieldU64(1, true);
    output.script = Script.fromRaw(op.readFieldBytes(2, true));
    this.refundTo.push(output);
  }

  this.memo = br.readFieldString(4, true);

  return this;
};

/**
 * Instantiate payment from serialized data.
 * @param {Buffer} data
 * @returns {Payment}
 */

Payment.fromRaw = function fromRaw(data, enc) {
  if (typeof data === 'string')
    data = Buffer.from(data, enc);
  return new Payment().fromRaw(data);
};

/**
 * Serialize the payment (protobuf).
 * @returns {Buffer}
 */

Payment.prototype.toRaw = function toRaw() {
  const bw = new ProtoWriter();

  if (this.merchantData)
    bw.writeFieldBytes(1, this.merchantData);

  for (const tx of this.transactions)
    bw.writeFieldBytes(2, tx.toRaw());

  for (const output of this.refundTo) {
    const op = new ProtoWriter();
    op.writeFieldU64(1, output.value);
    op.writeFieldBytes(2, output.script.toRaw());
    bw.writeFieldBytes(3, op.render());
  }

  if (this.memo != null)
    bw.writeFieldString(4, this.memo);

  return bw.render();
};

/*
 * Expose
 */

module.exports = Payment;
