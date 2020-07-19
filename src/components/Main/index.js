import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Pokeball from '../../pokeball.png'
import { connect } from 'react-redux'

class Main extends Component {
  render() {
    console.log(this.props);
    const { posts } = this.props
    const postList = posts.length ? (
      posts.map(post => (
        <div className='post card' key={post.id}>
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img src={Pokeball} alt='A pokeball image'/>
          <div className='card-content'>
            <Link to={'/' + post.id}> 
              <span className='card-title red-text'>{post.title}</span>
            </Link>
            
            <p>{post.body}</p>
          </div>
        </div>
      ))
    ) : (
      <div className='center'>No posts yet</div>
    )

    return (
      <div className='container home'>
        <h4 className='center'>Home</h4>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Main);