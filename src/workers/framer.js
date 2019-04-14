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

'use strict';

const StaticWriter = require('../utils/staticwriter');

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
