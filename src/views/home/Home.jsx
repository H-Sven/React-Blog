import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import { get } from "../../static/js/http";

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list:[]
    }
  }
  componentDidMount() {
    // get('/homeList').then(res=>{
    //   this.setState({list:res})
    // })
  }
  
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
