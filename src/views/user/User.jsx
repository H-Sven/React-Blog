import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Avatar } from 'antd';
import './user.scss';

export default class User extends Component {
  render() {
    return (
      <div className="my_user">
        <Avatar icon="user" size={50} />
      </div>
    )
  }
}
