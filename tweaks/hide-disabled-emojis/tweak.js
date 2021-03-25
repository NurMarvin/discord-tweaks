/*
 * Copyright (c) 2020 Juby210 <https://github.com/Juby210>
 * Licensed under the Open Software License version 3.0
 */

const { getModule } = require('powercord/webpack');
const { inject, uninject } = require('powercord/injector');

module.exports = {
    enable: async () => {
        const mod = await getModule(['isEmojiFiltered']);

        inject('discord-tweaks-hde', mod, 'isEmojiFiltered', (args, res) => res || mod.isEmojiDisabled(...args));
        inject('discord-tweaks-hde2', mod, 'getEmojiUnavailableReason', (args, res) => {
            if (args[0] && mod.isEmojiDisabled(args[0].emoji, args[0].channel, args[0].intention)) return 0;
            return res;
        });
    },
    disable: () => {
        uninject('discord-tweaks-hde');
        uninject('discord-tweaks-hde2');
    }
};
