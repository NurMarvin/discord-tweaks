/*
 * Copyright (c) 2020 NurMarvin (Marvin Witt)
 * Licensed under the Open Software License version 3.0
 */

const { getModule } = require('powercord/webpack');
const { inject, uninject } = require('powercord/injector');

module.exports = {
  enable: async () => {
    const module = await getModule(['decodeURIComponent']);

    inject('discord-tweaks-buildoverride-fix', module, 'decodeURIComponent', _ => {
      return [];
    }, true);
  },
  disable: () => {
    uninject('discord-tweaks-buildoverride-fix');
  }
};
