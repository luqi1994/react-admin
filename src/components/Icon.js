import React from 'react';
import { Icon } from 'antd';

class IconDemo extends React.Component {

  render() {
    return (
      
      <div>
        <Icon type="fast-backward" theme="outlined" />
        <Icon type="fast-forward" theme="outlined" />
        <Icon type="left" theme="outlined" />
        <Icon type="right" theme="outlined" />
        <Icon type="caret-up" theme="outlined" />
        <Icon type="caret-down" theme="outlined" />
        <Icon type="up-circle" theme="outlined" />
        <Icon type="down-circle" theme="outlined" />
      </div>

    );
  }

}

export default IconDemo;