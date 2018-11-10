import React, { Component } from 'react';
import { Avatar,Icon,Tag  } from 'antd';
import { get } from "../../static/js/http";
import './userinfo.scss';

export default class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo:{}
    }
  }
  componentDidMount() {
    get('/userinfo').then(res=>{
      this.setState({userInfo:res})
    })
  }
  render() {
    return (
      <div className="user_info">
        <Avatar className="my_avatar" icon="user" size={160} />
        {this.state.userInfo.contact && <div className="my_info">
          <ul className="info">
            <li className="my_name">{this.state.userInfo.name}</li>
            <li className="my_address"><Icon type="environment" />{this.state.userInfo.address}</li>
            <li className="my_Contact"><Icon type="phone" />{this.state.userInfo.contact.phone}</li>
            <li className="my_stack"><Icon type="tags" />
              <span>
                {this.state.userInfo.stack.map((item,index)=>{
                  return <Tag color="magenta" key={index}>{item}</Tag>
                })}
              </span>
            </li>
          </ul>
          <div className="about">
            <div className="title">个人介绍</div>
            <p>{this.state.userInfo.about}</p>
          </div>
        </div>}
      </div>
    )
  }
}
