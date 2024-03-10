import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col, Tabs } from 'antd';
import TweenOne from 'rc-tween-one';
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';
import { getChildrenToRender as kunRender } from '../utils';

TweenOne.plugins.push(Children);

function getUrlParameter(parameter) {
  // 获取当前URL的查询字符串
  const queryString = window.location.search;
  // 解析查询字符串
  const urlParams = new URLSearchParams(queryString);
  return Number(urlParams.get(parameter) || 0);
}

class Feature14 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.carouselRef = React.createRef();
    this.state = {
      current: 0,
      defaultActiveKey: getUrlParameter('tab')
    };
  }
  getChildrenToRender = (dataSource, isMobile) => {
    const { current, defaultActiveKey } = this.state;
    const { tabs } = dataSource;
    const { titleWrapper, children: childWrapper, wrapper } = tabs;

    const { barWrapper, title: titleChild, ...titleWrapperProps } = titleWrapper;

    const titleToRender = [];

    const childrenToRender = childWrapper.map((item, ii) => {
      const { title, children, ...itemProps } = item;
      titleToRender.push(
        <div
          {...title}
          key={ii.toString()}
          onClick={e => {
            this.onTitleClick(e, ii);
          }}
          className={ii === current ? `${title.className || ''} active` : title.className}
        >
          {title.children}
        </div>
      );
      const childrenItem = children.map(($item, i) => {
        const { number, children: child, ...childProps } = $item;
        return (
          <Col {...childProps} key={i.toString()}>
            <p {...child}>{child.children}</p>
          </Col>
        );
      });
      return (
        <div key={ii.toString()}>
          <QueueAnim type="bottom" component={Row} {...itemProps}>
            {childrenItem}
          </QueueAnim>
        </div>
      );
    });

    return (
      <QueueAnim key="queue" leaveReverse type="bottom" delay={[0, 100]} {...wrapper}>
        <div {...titleWrapperProps} key="title">
          <div key="title" {...titleWrapper}>
            {titleWrapper.children.map(kunRender)}
          </div>
        </div>
        <Tabs
          tabPosition={isMobile ? 'top' : 'left'}
          type={isMobile ? 'line' : 'card'}
          tabBarGutter={isMobile ? 20 : 9}
          defaultActiveKey={defaultActiveKey}
          items={childWrapper.map((item, i) => {
            return {
              label: item.title.children,
              key: i,
              children: childrenToRender[i]
            };
          })}
        />
      </QueueAnim>
    );
  };

  render() {
    const { dataSource, isMobile, ...props } = this.props;
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>{this.getChildrenToRender(dataSource, isMobile)}</div>
      </div>
    );
  }
}
export default Feature14;
