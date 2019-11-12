const { resolve } = require('path');
const { Plugin } = require('powercord/entities');
const { React } = require('powercord/webpack');
const Settings = require('./components/Settings');

module.exports = class DiscordTweaks extends Plugin {
  registeredTweaksJS = []

  async startPlugin () {
    const toggleTweak = tweak => {
      this.toggleTweak(tweak);
    };
    const toggleTweakJS = tweakid => {
      this.toggleTweakJS(tweakid);
    }

    const getSettings = (key, defaultValue) => this.settings.get(key, defaultValue);

    this.registerSettings('discord-tweaks', 'Discord Tweaks', (props) =>
      React.createElement(Settings, {
        toggleTweak,
        toggleTweakJS,
        ...props
      })
    );

    if (getSettings('hideHelpButton')) {
      toggleTweak('hide-help-button');
    }

    if (getSettings('linedCategories')) {
      toggleTweak('lined-categories');
    }

    if (getSettings('darkEmojiPicker')) {
      toggleTweak('dark-emoji-picker');
    }

    if (getSettings('hideBlockedUserMessages')) {
      toggleTweak('hide-blocked-user-messages');
    }

    if (getSettings('rainbowMentions')) {
      toggleTweak('rainbow-mentions');
    }

    if (getSettings('hideLibraryButton')) {
      toggleTweak('hide-library-button');
    }

    if (getSettings('alwaysShowMessageTimestamps')) {
      toggleTweak('always-show-message-timestamps');
    }

    if (getSettings('scrollableUserPanels')) {
      toggleTweak('scrollable-user-panels');
    }

    if (getSettings('scrollableCodeBlocks')) {
      toggleTweak('scrollable-code-blocks');
    }

    if (getSettings('hideBoostIconUnlessHovering')) {
      toggleTweak('hide-boost-icon-unless-hovering');
    }

    if (getSettings('showFullRoleNames')) {
      toggleTweak('show-full-role-names');
    }

    if (getSettings('rearrangedSearchbar')) {
      toggleTweak('rearranged-searchbar');
    }

    if (getSettings('largerProfileAvatars')) {
      toggleTweak('larger-profile-avatars');
    }

    if (getSettings('moreObviousGuildSpeaker')) {
      toggleTweak('more-obvious-guild-speaker');
    }
    if (getSettings('hideGiftButton')) {
      toggleTweak('hide-gift-button');
    }
    if (getSettings('compactExtraButtons')) {
      toggleTweak('compact-extra-buttons');
    }

    if (getSettings('hideDisabledEmojis')) {
      toggleTweakJS('hide-disabled-emojis');
    }
  }

  toggleTweak (tweak) {
    const id = `discord-tweaks-${tweak}`;
    const style = document.getElementById(`powercord-css-${id}`);

    if (!style) {
      this.loadCSS(id, resolve(`${__dirname}/tweaks/`, `${tweak}.scss`));
    } else {
      this.unloadCSS(id);
    }
  }

  toggleTweakJS (tweakid) {
    const tweak = this.registeredTweaksJS.find(t => t.id == tweakid)

    if (!tweak) {
      const tweakjs = require(`./tweaksjs/${tweakid}`);
      tweakjs.enable();
      this.registeredTweaksJS.push({ id: tweakid, ...tweakjs });
    } else {
      tweak.disable();
      this.registeredTweaksJS.splice(this.registeredTweaksJS.indexOf(tweak), 1);
    }
  }

  unloadCSS (id) {
    const { styles } = this.registered;

    for (let i = 0; i < styles.length; i++) {
      if (styles[i] === id) {
        this.registered.styles.splice(i, 1);
      }
    }

    powercord.styleManager.themes.get(id).remove();
  }
};
