/*
 * Copyright (c) 2020 NurMarvin (Marvin Witt)
 * Licensed under the Open Software License version 3.0
 */

const { React } = require('powercord/webpack')

const Card = require('./Card')
const SearchBox = require('./SearchBox')

module.exports = class DiscordTweaksSettings extends React.Component {
    constructor() {
        super()
        this.state = {
            filter: ''
        }
    }

    updateFilter(filter) {
        this.setState({ filter: filter.toLowerCase() })
    }

    render() {
        const updateFilter = (val) => {
            this.updateFilter(val)
        }

        const tweakList = []

        this.props.tweaks
            .filter(tweak => tweak.name.toLowerCase().includes(this.state.filter)
                || tweak.author.toLowerCase().includes(this.state.filter)
                || (tweak.authorUrl && tweak.authorUrl.toLowerCase().includes(this.state.filter))
                || tweak.description.toLowerCase().includes(this.state.filter))
            .forEach(tweak => tweakList.push(
                <Card
                    name={tweak.name}
                    author={tweak.author}
                    authorUrl={tweak.authorUrl}
                    description={tweak.description}
                    settings={tweak.settings}
                    toggleTweak={this.props.toggleTweak}
                    toggleSetting={this.props.toggleSetting}
                    getSetting={this.props.getSetting}
                />
            ))

        return (
            <div className="discordTweaksSettings">
                <SearchBox
                    placeholder="Filter tweaks..."
                    updateFilter={updateFilter}
                />
                <div className="tweaks">
                    {tweakList}
                </div>
            </div>
        )
    }
}
