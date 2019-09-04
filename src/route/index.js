import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import config from './config.js';
import AllComponents from '../components';
import getStorage from '../utils/Storage'

const menus = config.menus;
class Routes extends Component {
  render() {
      const isLogin = getStorage.getItem('isLogin');
      console.log('**********渲染次数**********',isLogin);
      return (
      <Switch>
          {!!isLogin &&  isLogin!=='null' ?
              menus && menus.map(item =>
                  <Route
                      key={item.key}
                      exact
                      path={item.key}
                      component={AllComponents[item.component]}
                  />)
              : <Redirect to='/login'/>}
        <Route render={() => <Redirect to='/404'/>}/>
      </Switch>
    )
  }
}

export default Routes;