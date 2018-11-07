import React, { Component } from 'react';
import Header from './views/header/Header';
class App extends Component {
  constructor(props) {
    super(props)
    this.callFn = this.callFn.bind(this)
    this.state = {
       pageName:'',
    }
  }
  callFn(pageName){ //获取菜单栏选择的值
    this.setState({pageName:pageName})
  }
  
  render() {
    return <div>
      <Header callFn={this.callFn} />
      {this.props.children}
    </div>;
  }
}

export default App;
