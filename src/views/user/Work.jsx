import React, { Component } from 'react';
import { Card } from 'antd';
import { get } from "../../static/js/http";
import './work.scss';

export default class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      workList:[]
    }
  }
  componentDidMount() {
    get('/work').then(res=>{
      this.setState({workList:res})
    })
  }
  render() {
    return (
      <div className="work">
        {this.state.workList.map((item,index)=>{
          return (
            <Card title={item.title} key={index}>
              <p>{item.position}</p>
              <p>{item.date}</p>
              {item.workContext.map((items,indexs)=>{
                  return <p key={indexs}>{items}</p>
              })}
            </Card>
          )
        })}
      </div>
    )
  }
}
