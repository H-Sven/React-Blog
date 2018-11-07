import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <p>Home</p>
        {/*search,state可以自定义，获取方法：this.props.location.search，this.props.location.state*/}
        <Link to="/user">to list</Link>
        <Link to="/article">to article</Link>
      </div>
    )
  }
}
