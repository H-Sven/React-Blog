import React, { Component } from 'react';
import { get } from "../../static/js/http";
import { List } from 'antd';
import './aryicle.scss';

export default class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articleList:[]
    }
  }
  componentDidMount() {
    get('/articleList').then(res=>{
      this.setState({articleList:res})
    })
  }
  
  render() {
    return (
      <div className="article">
        <List dataSource={this.state.articleList} 
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={<a href="https://ant.design">{item.title}</a>}
                description={item.text}
              />
            </List.Item>
          )}
        />,
      </div>
    )
  }
}
