/*
 * Copyright (c) 2020 NurMarvin (Marvin Witt)
 * Licensed under the Open Software License version 3.0
 */

const { getModuleByDisplayName, React } = require('powercord/webpack')

const AsyncComponent = require('powercord/components/AsyncComponent')

const TextInput = AsyncComponent.from(getModuleByDisplayName('TextInput'));
const Icon = AsyncComponent.from(getModuleByDisplayName('Icon'));

module.exports = class SearchBox extends React.Component {
    constructor() {
        super()
        this.state = {
            searchQuery: ''
        }
    }

    render() {
        return (
            <div className="searchBox">
                <TextInput
                    className="searchBoxInputWrapper-nKncfu"
                    inputClassName="searchBoxInput"
                    placeholder={this.props.placeholder}
                    value={this.state.searchQuery}
                    onChange={val => {
                        this.setState({
                            searchQuery: val
                        })
                        this.props.updateFilter(val);
                    }
                    }
                    type="text"
                    size="default"
                    maxLength={100}
                    autoFocus={true}
                >
                </TextInput>
                <Icon name="Search" className="searchIcon" aria-hidden={false} />
            </div>
        )
    }
}