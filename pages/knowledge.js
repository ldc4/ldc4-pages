import React from 'react'

class KnowledgePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      radioValue: 'zh',
    };
  }

  handleRadioChange = (e) => {
    const { value } = e.target;
    this.setState({ radioValue: value });
  }

  render() {
    const { radioValue } = this.state;
    return (
      <div>
        <img src={`/static/roadmap-${radioValue}.png`} alt="知识地图(中文版)" />
        <div>
          <label>
            <input
              type="radio"
              name="lang"
              value="zh"
              checked={radioValue === 'zh'}
              onChange={this.handleRadioChange}
            />
            <span>中文</span>
          </label>
          <label>
            <input
              type="radio"
              name="lang"
              value="en"
              checked={radioValue === 'en'}
              onChange={this.handleRadioChange}
            />
            <span>English</span>
          </label>
          <span style={{ float: 'right' }}>引用至（https://github.com/adam-golab/react-developer-roadmap）</span>
        </div>
      </div>
    )
  }
}

export default KnowledgePage