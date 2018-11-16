/*
   Root, Router 配置
*/
import React from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';
 
import App from './../App';
import Home from './../views/home/Home';
import User from './../views/user/User';
import Article from './../views/articleInfo/Article';
import Toutiao from './../views/toutiao/Toutiao';
 
const Root = () => (
  <Switch>
    <Route path="/"
      render={props => (
        <App>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/user" component={User} />
            <Route path="/Article/:id" component={Article} />
            <Route path="/Toutiao" component={Toutiao} />
            {/*路由不正确时，默认跳回home页面*/}
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </App>
      )}
    />
  </Switch>
);
 
export default Root;