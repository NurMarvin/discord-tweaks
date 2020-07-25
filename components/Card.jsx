const { getModuleByDisplayName, React } = require('powercord/webpack');

const AsyncComponent = require('powercord/components/AsyncComponent');
const { SwitchItem, Category } = require('powercord/components/settings');
const { shell } = window.require('electron');

const Text = AsyncComponent.from(getModuleByDisplayName('Text'));
const Anchor = AsyncComponent.from(getModuleByDisplayName('Anchor'));

const Dropdown = require('./Dropdown');

module.exports = class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      settingsOpen: false,
    };
  }

  render() {
    let settings;
    if (this.props.settings) {
      const settingList = [];

      for (let setting of this.props.settings) {
        if (setting.options) {
          const optionArray = [];

          setting.options.forEach((option) => {
            optionArray.push({
              label: option,
              value: option.toUpperCase(),
            });
          });

          {
            settingList.push(
              <Dropdown
                title={setting.name}
                note={setting.description}
                value={optionArray[0].value}
                options={optionArray}
                searchable={false}
                clearable={false}
                onChange={() => console.log('emma is cute')}
              >
                {setting.name}
              </Dropdown>
            );
          }
        } else {
          settingList.push(
            <SwitchItem
              note={setting.description}
              value={false}
              onChange={() => console.log('emma is cute')}
            >
              {setting.name}
            </SwitchItem>
          );
        }
      }

      settings = (
        <div className='tweakSettings'>
          <Category
            name='Tweak Settings (Soon™️)'
            description='This feature is not yet ready. We are hard at work at implementing it though!'
            opened={false}
            onChange={() =>
              this.setState({ settingsOpen: !this.state.settingsOpen })
            }
          >
            {settingList}
          </Category>
        </div>
      );
    }

    let { toggleTweak, toggleSetting, getSetting, name } = this.props;

    let tweakName = name.toLowerCase().replace(/ /g, '-');

    let enabled = getSetting(tweakName, false);

    return (
      <div className='tweakCard'>
        <div className='tweakInfo'>
          <Text className='tweakName' size='size16-1P40sf'>
            <span>{name}</span>
          </Text>
          <Text className='tweakAuthor' size='size16-1P40sf'>
            <span>
              Created by{' '}
              <Anchor href={this.props.authorUrl}>{this.props.author}</Anchor>
            </span>
          </Text>
          <Text className='tweakDescription' size='size16-1P40sf'>
            <span
              dangerouslySetInnerHTML={{ __html: this.props.description }}
            ></span>
          </Text>
        </div>
        {settings}
        <div className='tweakToggle'>
          <SwitchItem
            value={enabled}
            onChange={() => {
              toggleTweak(tweakName);
              toggleSetting(tweakName, false);
            }}
          >
            {!enabled ? 'Enable' : 'Disable'}
          </SwitchItem>
        </div>
      </div>
    );
  }
};
