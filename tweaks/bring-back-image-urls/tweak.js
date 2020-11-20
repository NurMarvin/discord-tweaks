/*
 * Copyright (c) 2020 Juby210 <https://github.com/Juby210>
 * Licensed under the Open Software License version 3.0
 */

const { getModule } = require('powercord/webpack');
const { inject, uninject } = require('powercord/injector');

module.exports = {
    enable: async () => {
        const mod = await getModule(['renderMessageMarkupToAST']);

        inject('discord-tweaks-imageurls', mod, 'default', args => {
            if (args[1]) args[1].renderMediaEmbeds = false;
            return args;
        }, true);
    },
    disable: () => {
        uninject('discord-tweaks-imageurls');
    }
};
