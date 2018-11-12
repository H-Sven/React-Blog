import React, { Component } from 'react'
import './home.scss';
import { Carousel,Divider,Skeleton  } from 'antd';
// import { Link } from 'react-router-dom';
import { get } from "../../static/js/http";

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list:[],
      loadingArticle:true,
      bannerImage:[
        'Hu Siwen',
      ],
      articleList:[]
    }
  }
  componentDidMount() {
    get('/articleList').then(res=>{
      this.setState({articleList:res})
      setTimeout(() => {
        this.setState({loadingArticle:false})
      }, 500);
    })
  }
  goArticle(id){
    this.props.history.push(`/Article/${id}`)
  }
  render() {
    return (
      <div>
        <Carousel className="banner">
          {this.state.bannerImage.map((item,index)=>{
            return <div key={index}><h3>{item}</h3></div>
          })}
        </Carousel>
        <div className="article">
          {this.state.articleList.map((item,index)=>{
            return (
              <Skeleton loading={this.state.loadingArticle} active key={index}>
                <div className="article_list" key={index}>
                  <div className="article_info" onClick={this.goArticle.bind(this,index)}>
                    <a href="javscript:;">
                      <h3>[{item.tag}]&nbsp;{item.title}</h3>
                    </a>
                    <div className="text_info">
                      {item.text.length > 200 ? `${item.text.slice(0,200)}......` : `${item.text}`}
                    </div>
                  </div>
                  <div className="message">
                    <p><span>Posted by</span>&nbsp;&nbsp;{item.author}&nbsp;&nbsp;on&nbsp;{item.update}</p>
                    <span className="tags">{item.tag}</span>
                  </div>
                  <Divider />
                </div>
              </Skeleton>
            )
          })}
        </div>
      </div>
    )
  }
}
