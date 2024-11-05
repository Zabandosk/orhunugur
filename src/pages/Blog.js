import React from 'react';
import blogPosts from '../data/Post';

const Blog = () => {
  return (
    <div className='content'>
      <h1>My Blog</h1>
      <div className="blog-container">
      {blogPosts.map((post) => (
        <div key={post.id} className="blog-post">
          <h2>{post.title}</h2>
          <p><em>{post.date}</em></p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Blog;
