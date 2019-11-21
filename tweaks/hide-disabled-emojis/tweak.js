/*
 Credits: Juby210 <https://github.com/juby210-PL>
*/
const { getModule } = require('powercord/webpack');
const { inject, uninject } = require('powercord/injector');

module.exports = {
    enable: async () => {
        const mod = await getModule(['isEmojiFiltered']);

        inject('discord-tweaks-hde', mod, 'isEmojiFiltered', args => mod.isEmojiDisabled(...args));
    },
    disable: () => {
        uninject('discord-tweaks-hde');
    }
};