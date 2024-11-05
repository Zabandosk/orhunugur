import React, { Fragment } from 'react';


const Sidebar = () => {

  return (
    <Fragment>
    <div class="sidebar">
    <h1 className='myname'><a href="/">Orhun Uğur</a></h1>
        <h3>Digital Archaeologist</h3> 
        <h3>Heritage|Archive|Archaeology|Humanities</h3>
        <div className='navsocial'>
        <ul>
          <li>
            <a href="https://twitter.com/birvarmiymis">
            <i class="fab fa-twitter"></i>
            </a><i class="x-twitter-brands-solid"></i>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/orhun-u%C4%9Fur-a3853218a/">
            <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://orcid.org/0000-0002-9274-0414">
            <i class="fa-brands fa-orcid"></i>
            </a>
          </li>
          <li>
            <a href="orhun.ugur93@gmail.com">
            <i class="fa-solid fa-envelope"></i>
            </a>
          </li>
        </ul>
        </div>

        <hr></hr>

      <div className='navpages'>
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/cv">CV</a></li>
        <li><a href="/diy-heritage">DIY-Heritage</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/tarot">Pick a Card</a></li>
        <li><a href="/about">About</a></li>
        </ul>
      </div>

  
</div>  
    </Fragment>
   );
   

};

export default Sidebar;
