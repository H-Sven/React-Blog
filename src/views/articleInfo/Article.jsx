import React, { Component } from 'react'
import './article.scss'
import { get } from "../../static/js/http";

export default class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id:null,
      articleInfo:{},
    }
  }
  componentDidMount() {
    console.log(this.props.match);
    this.setState({id:this.props.match.params.id})
    get('/articleList').then(res=>{
      this.setState({articleInfo:res[this.props.match.params.id]})
    })
  }
  render() {
    return (
      <div className="article_info">
        <h2>[{this.state.articleInfo.tag}]&nbsp;{this.state.articleInfo.title}</h2>
        <div className="text_info">{this.state.articleInfo.text}</div>
      </div>
    )
  }
}
