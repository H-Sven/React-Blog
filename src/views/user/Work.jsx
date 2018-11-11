import React, { Component } from 'react';
import { Card,Skeleton  } from 'antd';
import { get } from "../../static/js/http";
import './work.scss';

export default class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingWork:true,
      workList:[],
      loadingProject:true,
      projectList:[]
    }
  }
  componentDidMount() {
    get('/work').then(res=>{
      this.setState({workList:res,loadingWork:false})
    })
    get('/project').then(res=>{
      this.setState({projectList:res,loadingProject:false})
    })
  }
  render() {
    return (
      <div className="work">
        <div className="work_title">工作经历</div>
        {this.state.workList.map((item,index)=>{
          return (
            <Skeleton loading={this.state.loadingWork} active key={index}>
              <Card title={item.title} key={index}>
                <p>{item.position}</p>
                <p>{item.date}</p>
                {item.workContext.map((items,indexs)=>{
                    return <p key={indexs}>{items}</p>
                })}
              </Card>
            </Skeleton>
          )
        })}
        <div className="work_title">项目经历</div>
        {this.state.projectList.map((item,index)=>{
          return (
            <Skeleton loading={this.state.loadingProject} active key={index}>
              <Card title={item.title} key={index}>
                <p>{item.introduce}</p>
                <p>{item.date}</p>
                {item.projectContext.map((items,indexs)=>{
                  return <p key={indexs}>{items}</p>
                })}
              </Card>
            </Skeleton>
          )
        })}
      </div>
    )
  }
}
