import React, { Component } from 'react'
import './toutiao.scss'
import { db_get } from "../../static/js/douban"

export default class Toutiao extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    this.getHot();
  }
  getHot(){
    db_get('/in_theaters',{
      apikey:'0b2bdeda43b5688921839c8ecb20399b',
      city:'北京',
      start:1,
      count:100,
      client:'something',
      udid:'dddddddddddddddddddddd'
    }).then(res=>{
      console.log(res);
    })
  }
  render() {
    return (
      <div className="toutiao">
        sdasdsadsdsddasd
      </div>
    )
  }
}
