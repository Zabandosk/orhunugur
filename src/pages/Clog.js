import React from 'react';
import clogPosts from '../data/Logs';

const Clog = () => {
  return (
    <div className='content'>
      <h1>Captain's Log</h1>
      <div className="clog-container">
      {clogPosts.map((post) => (
        <div key={post.id} className="clog-post">
          <h2>{post.title}</h2>
          <p><em>{post.date}</em></p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Clog;
