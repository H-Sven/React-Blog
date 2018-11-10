import React, { Component } from 'react';
import UserInfo from './UserInfo';
import Work from './Work';

export default class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      style:{
        margin:'0 auto',
        width:'1200px',
      }
    }
  }
  render() {
    return (
      <div className="my_user" style={this.state.style}>
        <UserInfo></UserInfo>
        <Work></Work>
      </div>
    )
  }
}
