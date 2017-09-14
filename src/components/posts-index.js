import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from "../actions/fetch-posts";
import _ from "lodash";

class PostsIndex extends Component{

  constructor(){super();this.renderPosts=this.renderPosts.bind(this);}

  componentDidMount(){
    this.props.fetchPosts();
  }

  render(){
    return (<div>
      <h3>Posts H3</h3>
      <ul className="list-group">
        {this.renderPosts()}
      </ul>
    </div>)
  }

  renderPosts() {
    console.log("posts:", this.props.posts);
    return _.map(this.props.posts, p=>(<li key={p.id} className="list-group-item">{p.title}</li>))
  }
}

export default connect( s=> ({posts:s.posts}), {fetchPosts})(PostsIndex);