const { React } = require('powercord/webpack')
const { SwitchItem } = require("powercord/components/settings")
const { shell } = window.require('electron');

module.exports = class DiscordTweaksSettings extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <SwitchItem
                    note={
                        <div>
                            When toggled, the help button in the top right corner will not be shown.
                        <br />
                            Credits: <a href={"#"}>@sdf#9069</a>
                        </div>
                    }
                    value={this.props.getSetting('hideHelpButton', false)}
                    onChange={() => {
                        this.props.toggleSetting("hideHelpButton")
                        this.props.toggleTweak("hide-help-button");
                    }}
                >
                    Hide Help Button
                </SwitchItem>
                <SwitchItem
                    note={
                        <div>
                            When toggled, categories will be centered and have lines next to them.
                            <br />
                            <b>Note:</b> This will most definitely break if you use a custom theme.
                            <br />
                            Credits: <a href={"#"} onClick={() => shell.openExternal("https://github.com/cloudrac3r/")}>Cadence</a>
                        </div>
                    }
                    value={this.props.getSetting('linedCategories', false)}
                    onChange={() => {
                        this.props.toggleSetting("linedCategories")
                        this.props.toggleTweak("lined-categories");
                    }}
                >
                    Lined Categories
                </SwitchItem>
                <SwitchItem
                    note={
                        <div>
                            When toggled, the emoji picker will be dark themed.
                            <br />
                            Credits: <a href={"#"} onClick={() => shell.openExternal("https://github.com/cloudrac3r/")}>Cadence</a>
                        </div>
                    }
                    value={this.props.getSetting('darkEmojiPicker', false)}
                    onChange={() => {
                        this.props.toggleSetting("darkEmojiPicker")
                        this.props.toggleTweak("dark-emoji-picker");
                    }}
                >
                    Dark Emoji Picker
                </SwitchItem>
                <SwitchItem
                    note={
                        <div>
                            When toggled, messages from blocked users will not be shown.
                            <br />
                            Credits: <a href={"#"} onClick={() => shell.openExternal("https://gitlab.com/GhostlyDilemma/")}>emma</a>
                        </div>
                    }
                    value={this.props.getSetting('hideBlockedUserMessages', false)}
                    onChange={() => {
                        this.props.toggleSetting("hideBlockedUserMessages")
                        this.props.toggleTweak("hide-blocked-user-messages");
                    }}
                >
                    Hide Blocked User Messages
                </SwitchItem>
                <SwitchItem
                    note={
                        <div>
                            When toggled, mentions have a rainbow gradient in the background.
                            <br />
                            Credits: <a href={"#"} onClick={() => shell.openExternal("https://github.com/cloudrac3r/")}>Cadence</a>
                        </div>
                    }
                    value={this.props.getSetting('rainbowMentions', false)}
                    onChange={() => {
                        this.props.toggleSetting("rainbowMentions")
                        this.props.toggleTweak("rainbow-mentions");
                    }}
                >
                    Rainbow Mentions
                </SwitchItem>
                <SwitchItem
                    note={
                        <div>
                            When toggled, message timestamps are always shown.
                            <br />
                            Credits: <a href={"#"} onClick={() => shell.openExternal("https://github.com/cloudrac3r/")}>Cadence</a>
                        </div>
                    }
                    value={this.props.getSetting('alwaysShowMessageTimestamps', false)}
                    onChange={() => {
                        this.props.toggleSetting("alwaysShowMessageTimestamps")
                        this.props.toggleTweak("always-show-message-timestamps");
                    }}
                >
                    Always Show Message Timestamps
                </SwitchItem>
                <SwitchItem
                    note={
                        <div>
                            When toggled, the library button under the home tab will not be shown.
                            <br />
                            (Really helps to not always be reminded that Discord's game store only supports Windows)
                            <br />
                            Credits: <a href={"#"} onClick={() => shell.openExternal("https://github.com/cloudrac3r/")}>Cadence</a>
                        </div>
                    }
                    value={this.props.getSetting('hideLibraryButton', false)}
                    onChange={() => {
                        this.props.toggleSetting("hideLibraryButton")
                        this.props.toggleTweak("hide-library-button");
                    }}
                >
                    Hide Library Button
                </SwitchItem>
                <SwitchItem
                    note={
                        <div>
                            When toggled, user panels are scrollable.
                            <br />
                            Really handy if that one extra ordinary friend of yours decides to give themselves every role on the server.
                            <br />
                            Credits: <a href={"#"} onClick={() => shell.openExternal("https://github.com/cloudrac3r/")}>Cadence</a>
                        </div>
                    }
                    value={this.props.getSetting('scrollableUserPanels', false)}
                    onChange={() => {
                        this.props.toggleSetting("scrollableUserPanels")
                        this.props.toggleTweak("scrollable-user-panels");
                    }}
                >
                    Scrollable User Panels
                </SwitchItem>
                <SwitchItem
                    note={
                        <div>
                            When toggled, code blocks are scrollable.
                            <br />
                            Idea from: <a href={"#"} onClick={() => shell.openExternal("https://gitlab.com/frozo/discord-onedark/")}>Discord One Dark</a>
                        </div>
                    }
                    value={this.props.getSetting('scrollableCodeBlocks', false)}
                    onChange={() => {
                        this.props.toggleSetting("scrollableCodeBlocks")
                        this.props.toggleTweak("scrollable-code-blocks");
                    }}
                >
                    Scrollable Code Blocks
                </SwitchItem>
                <SwitchItem
                    note={
                        <div>
                            When toggled, the Nitro boost will not be shown unless you hover over the guild name.
                            <br />
                            Credits: <a href={"#"} onClick={() => shell.openExternal("https://github.com/cloudrac3r/")}>Cadence</a>
                        </div>
                    }
                    value={this.props.getSetting('hideBoostIconUnlessHovering', false)}
                    onChange={() => {
                        this.props.toggleSetting("hideBoostIconUnlessHovering")
                        this.props.toggleTweak("hide-boost-icon-unless-hovering");
                    }}
                >
                    Hide Nitro Boost Icon Unless Hovering
                </SwitchItem>
                <SwitchItem
                    note={
                        <div>
                            When toggled, role names in the user list on the right are fully shown.
                            <br />
                            Credits: <a href={"#"} onClick={() => shell.openExternal("https://github.com/cloudrac3r/")}>Cadence</a>
                        </div>
                    }
                    value={this.props.getSetting('showFullRoleNames', false)}
                    onChange={() => {
                        this.props.toggleSetting("showFullRoleNames")
                        this.props.toggleTweak("show-full-role-names");
                    }}
                >
                    Show Full Role Names
                </SwitchItem>
                <SwitchItem
                    note={
                        <div>
                            When toggled, the guild speaker icon is a little better to see.
                            <br />
                            Credits: <a href={"#"} onClick={() => shell.openExternal("https://github.com/cloudrac3r/")}>Cadence</a>
                        </div>
                    }
                    value={this.props.getSetting('moreObviousGuildSpeaker', false)}
                    onChange={() => {
                        this.props.toggleSetting("moreObviousGuildSpeaker")
                        this.props.toggleTweak("more-obvious-guild-speaker");
                    }}
                >
                    More Obvious Guild Speaker
                </SwitchItem>
                <SwitchItem
                    note={
                        <div>
                            When toggled, the searchbar is rearranged to the far right and hides the other button during search.
                            <br />
                            Credits: <a href={"#"} onClick={() => shell.openExternal("https://github.com/cloudrac3r/")}>Cadence</a>
                        </div>
                    }
                    value={this.props.getSetting('rearrangedSearchbar', false)}
                    onChange={() => {
                        this.props.toggleSetting("rearrangedSearchbar")
                        this.props.toggleTweak("rearranged-searchbar");
                    }}
                >
                    Rearranged Searchbar
                </SwitchItem>
                <SwitchItem
                    note={
                        <div>
                            When toggled, user avatars in the user popouts become a little bit bigger.
                            <br />
                            Credits: <a href={"#"} onClick={() => shell.openExternal("https://github.com/cloudrac3r/")}>Cadence</a>
                        </div>
                    }
                    value={this.props.getSetting('largerProfileAvatars', false)}
                    onChange={() => {
                        this.props.toggleSetting("largerProfileAvatars")
                        this.props.toggleTweak("larger-profile-avatars");
                    }}
                >
                    Larger Profile Avatars
                </SwitchItem>
                <SwitchItem
                    note={
                        <div>
                            When toggled, the gift button on the text field next to GIF will not be shown.
                            <br />
                            Credits: <a href={"#"} onClick={() => shell.openExternal("https://github.com/Soheab")}>Soheab</a>
                        </div>
                    }
                    value={this.props.getSetting('hideGiftButton', false)}
                    onChange={() => {
                        this.props.toggleSetting("hideGiftButton")
                        this.props.toggleTweak("hide-gift-button");
                    }}
                >
                    Hide Gift Button
                </SwitchItem>

            </div>
        )
    }
}
