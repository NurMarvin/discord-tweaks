const { resolve } = require("path")
const { Plugin } = require("powercord/entities")
const { React } = require("powercord/webpack")
const Settings = require("./components/Settings")

module.exports = class DiscordTweaks extends Plugin {
    async startPlugin() {
        const toggleTweak = tweak => {
            this.toggleTweak(tweak);
        }

        const getSettings = (key, defaultValue) => {
            return this.settings.get(key, defaultValue)
        }

        this.registerSettings("discord-tweaks", "Discord Tweaks", (props) =>
            React.createElement(Settings, {
                toggleTweak: toggleTweak,
                ...props
            })
        );

        if (getSettings("hideHelpButton")) {
            toggleTweak('hide-help-button')
        }

        if (getSettings("linedCategories")) {
            toggleTweak('lined-categories')
        }

        if (getSettings("darkEmojiPicker")) {
            toggleTweak('dark-emoji-picker')
        }

        if (getSettings("hideBlockedUserMessages")) {
            toggleTweak('hide-blocked-user-messages')
        }

        if (getSettings("rainbowMentions")) {
            toggleTweak('rainbow-mentions')
        }

        if (getSettings("hideLibraryButton")) {
            toggleTweak('hide-library-button')
        }

        if (getSettings("alwaysShowMessageTimestamps")) {
            toggleTweak('always-show-message-timestamps')
        }

        if (getSettings("scrollableUserPanels")) {
            toggleTweak('scrollable-user-panels')
        }

        if (getSettings("scrollableCodeBlocks")) {
            toggleTweak('scrollable-code-blocks')
        }

        if (getSettings("hideBoostIconUnlessHovering")) {
            toggleTweak('hide-boost-icon-unless-hovering')
        }

        if (getSettings("showFullRoleNames")) {
            toggleTweak('show-full-role-names')
        }

        if (getSettings("rearrangedSearchbar")) {
            toggleTweak('rearranged-searchbar')
        }

        if (getSettings("largerProfileAvatars")) {
            toggleTweak('larger-profile-avatars')
        }

        if (getSettings("moreObviousGuildSpeaker")) {
            toggleTweak('more-obvious-guild-speaker')
        }
    }

    toggleTweak(tweak) {
        const id = `discord-tweaks-${tweak}`;
        let style = document.getElementById(`powercord-css-${id}`);

        if (!style) {
            this.loadCSS(id, resolve(`${__dirname}/tweaks/`, `${tweak}.scss`))
        } else {
            this.unloadCSS(id);
        }
    }

    unloadCSS(id) {
        const styles = this.registered.styles;

        for (var i = 0; i < styles.length; i++) {
            if (styles[i] === id) {
                this.registered.styles.splice(i, 1);
            }
        }

        powercord.styleManager.themes.get(id).remove();
    }
}