import React, { useState } from 'react';
import { useTransition, animated as a } from 'react-spring';

const imgs = [
  ({ style }) => <a.img
    style={{ width: '100%', height: '100%', ...style }}
    src={'/static/roadmap-zh.png'}
    alt={'知识地图（中文版）'}
  />,
  ({ style }) => <a.img
    style={{ width: '100%', height: '100%', ...style }}
    src={'/static/roadmap-en.png'}
    alt={'Knowledge(English Version)'}
  />,
];

function KnowledgePage() {
  const [index, setIndex] = useState(0);
  const transitions = useTransition(index, p => p, {
    from : { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const next = (e) => {
    setIndex(index === imgs.length - 1 ? 0 : index + 1);
  }

  const prev = (e) => {
    setIndex(index === 0 ? imgs.length - 1 : index - 1);
  }

  return (
    <div className="container">
      <div className="content">
        <style jsx>{`
          .content {
            display: flex;
            max-width: 1024px;
            margin: 0 auto;
          }
          .left {
            width: 100px;
            z-index: 99;
          }
          .left:hover {
            background: rgba(233,233,233,0.7) url('/static/left-arrow.svg') no-repeat center;
            background-size: 80px 80px;
            cursor: pointer;
          }
          .center {
            height: 100%;
            width: 100%;
            margin-left: -100px;
            margin-right: -100px;
          }
          .right {
            width: 100px;
            z-index: 99;
          }
          .right:hover {
            background: rgba(233,233,233,0.7) url('/static/right-arrow.svg') no-repeat center;
            background-size: 80px 80px;
            cursor: pointer;
          }
        `}</style>
        <div className="left" onClick={prev}></div>
        <div className="center">
          {transitions.map(({ item, props, key}) => {
            const Img = imgs[item];
            return <Img key={key} style={props} />;
          })}
        </div>
        <div className="right" onClick={next}></div>
      </div>
      <div className="ext-info">
        <style jsx>{`
          .ext-info {
            max-width: 1024px;
            margin: 0 auto;
          }
        `}</style>
        <span style={{ float: 'right' }}>引用至（https://github.com/adam-golab/react-developer-roadmap）</span>
      </div>
    </div>
  )
}

export default KnowledgePage