const { getModule } = require('powercord/webpack');
const { inject, uninject } = require('powercord/injector');

module.exports = {
  enable: async () => {
    const module = await getModule(['decodeURIComponent']);

    inject('discord-tweaks-buildoverride-fix', module, 'decodeURIComponent', (_, _) => {
      return [];
    }, true);
  },
  disable: () => {
    uninject('discord-tweaks-buildoverride-fix');
  }
};
