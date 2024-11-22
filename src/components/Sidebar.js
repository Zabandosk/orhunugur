import React, { Fragment, useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 600);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
        <button onClick={toggleSidebar} className="collapse-button">
        <i className="fa fa-bars"></i>
        </button>
        {isOpen && (
          <div>
            <h1 className='myname'><a href="/">Orhun Uğur</a></h1>
            <div className='title'>
              <h3>Digital Archaeologist | Archivist | Humanist</h3> 
            </div>
            <div className='navsocial'>
              <ul>
                <li>
                  <a href="https://twitter.com/birvarmiymis">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://bsky.app/profile/orhunugur.bsky.social">
                    <i class="fa-brands fa-bluesky"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/orhun-u%C4%9Fur-a3853218a/">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Zabandosk">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://orcid.org/0000-0002-9274-0414">
                    <i className="fa-brands fa-orcid"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto:orhun.ugur93@gmail.com">
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
            <hr />

            <div className='navpages'>
            <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/diy-heritage">DIY-Heritage</a></li>
        <li><a href="/clog">Captain's Log</a></li>
        <li><a href="/tarot">Pick a Card</a></li>
        <li><a href="/cv">CV</a></li>
        <li><a href="/about">About</a></li>
        </ul>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Sidebar;
