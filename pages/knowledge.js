import React from 'react';
import { Transition, animated } from 'react-spring';

const imgs = [
  style => (
    <animated.img style={{ width: '100%', height: '100%', ...style }} src={`/static/roadmap-zh.png`} alt="知识地图(中文版)" />
  ),
  style => (
    <animated.img style={{ width: '100%', height: '100%', ...style }} src={`/static/roadmap-en.png`} alt="Knowledge(English Version)" />
  ),
];

class KnowledgePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  toggle = (e) => {
    this.setState(state => ({
      index: state.index === imgs.length - 1 ? 0 : state.index + 1,
    }));
  }

  render() {
    const { index } = this.state;
    return (
      <div className="container" onClick={this.toggle}>
        <style jsx>{`
          .container {
            max-width: 1024px;
            margin: 0 auto;
            overflow: hidden;
          }
        `}</style>
        <Transition
          native
          reset
          unique
          items={index}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {index => imgs[index]}
        </Transition>
        <div>
          <span>点击图片切换语言</span>
          <span style={{ float: 'right' }}>引用至（https://github.com/adam-golab/react-developer-roadmap）</span>
        </div>
      </div>
    )
  }
}

export default KnowledgePage