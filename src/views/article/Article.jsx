import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Article extends Component {
  render() {
    return (
      <div>
        <p>Article</p>
        {/*search,state可以自定义，获取方法：this.props.location.search，this.props.location.state*/}
        <Link to="/home">to home</Link>
        <Link to="/user">to user</Link>
      </div>
    )
  }
}
