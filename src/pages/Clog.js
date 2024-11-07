import React from 'react';
import clogPosts from '../data/Logs';

const Clog = () => {

  const sortedPosts = clogPosts.sort((a, b) => b.id - a.id);

  return (
    <div className='content'>
      <h1>Captain's Log</h1>
      <div className="clog-container">
        {sortedPosts.map((post) => (
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
