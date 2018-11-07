/*
   Root, Router 配置
*/
import React from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';
 
import App from './../App';
import Home from './../views/home/Home';
import Article from './../views/article/Article';
import User from './../views/user/User';
 
const Root = () => (
   <div>
      <Switch>
        <Route path="/"
          render={props => (
            <App>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/article" component={Article} />
                <Route path="/user" component={User} />
                {/*路由不正确时，默认跳回home页面*/}
                <Route render={() => <Redirect to="/" />} />
              </Switch>
            </App>
          )}
         />
      </Switch>
   </div>
);
 
export default Root;