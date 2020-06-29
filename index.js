const { resolve } = require('path');
const { Plugin } = require('powercord/entities');
const { React } = require('powercord/webpack');
const Settings = require('./components/Settings');

const tweaks = require('./tweaks.json');
const fs = require('fs');

module.exports = class DiscordTweaks extends Plugin {
  registeredTweaksJS = []

  async startPlugin() {
    const toggleTweak = tweak => {
      this.toggleTweak(tweak)
    };

    const toggleTweakJS = tweakid => {
      this.toggleTweakJS(tweakid);
    }

    const getSettings = (key, defaultValue) => this.settings.get(key, defaultValue);

    this.loadStylesheet(resolve(__dirname, 'style.scss'))

    // this.registerSettings('discord-tweaks', 'Discord Tweaks', (props) =>
    //   React.createElement(Settings, {
    //     toggleTweak,
    //     toggleTweakJS,
    //     tweaks,
    //     ...props
    //   })
    // );
    powercord.api.settings.registerSettings('discord-tweaks', {
      category: 'discord-tweaks',
      label: 'Discord Tweaks',
      render: (props) =>
      React.createElement(Settings, {
        toggleTweak,
        toggleTweakJS,
        tweaks,
        ...props
      })
    });

    tweaks.forEach(tweak => {
      let tweakName = tweak.name.toLowerCase().replace(/ /g, '-');

      if (getSettings(tweakName)) {
        toggleTweak(tweakName);
      }
    });
  }

  toggleTweak(tweakId) {
    const id = `discord-tweaks-${tweakId}`;

    if (fs.existsSync(resolve(`${__dirname}/tweaks/${tweakId}`, `tweak.scss`))) {
      const style = document.getElementById(`powercord-css-${id}`);
      if (!style) {
        this.loadStylesheet(resolve(`${__dirname}/tweaks/${tweakId}/tweak.scss`));
      } else {
        this.unloadCSS(id);
      }
    }

    if (fs.existsSync(resolve(`${__dirname}/tweaks/${tweakId}`, `tweak.js`))) {
      const tweak = this.registeredTweaksJS.find(t => t.id == tweakId)

      if (!tweak) {
        const tweakjs = require(`${__dirname}/tweaks/${tweakId}/tweak.js`);
        tweakjs.enable();
        this.registeredTweaksJS.push({ id: tweakId, ...tweakjs });
      } else {
        tweak.disable();
        this.registeredTweaksJS.splice(this.registeredTweaksJS.indexOf(tweak), 1);
      }
    }
  }

  unloadStylesheet(id) {
    const { styles } = this.registered;

    for (let i = 0; i < styles.length; i++) {
      if (styles[i] === id) {
        this.registered.styles.splice(i, 1);
      }
    }

    powercord.styleManager.themes.get(id).remove();
  }
  
  pluginWillUnload () {
    powercord.api.settings.unregisterSettings('discord-tweaks')
  }
};
