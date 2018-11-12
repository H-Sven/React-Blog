import React, { Component } from 'react'
import './home.scss';
import { Carousel  } from 'antd';
// import { Link } from 'react-router-dom';
// import { get } from "../../static/js/http";

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list:[],
      bannerImage:[
        'Banner1',
        'Banner2',
        'Banner3',
        'Banner4',
      ]
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
        <Carousel autoplay>
          {this.state.bannerImage.map((item,index)=>{
            return <div key={index}><h3>{item}</h3></div>
          })}
        </Carousel>
      </div>
    )
  }
}
