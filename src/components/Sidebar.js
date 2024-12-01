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
              <h3>Digital Archaeologist | Archivist</h3> 
            </div>
            <div className='navsocial'>
              <ul>
                <li>
                  <a 
                  href="https://twitter.com/birvarmiymis" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  >
                  <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://bsky.app/profile/orhunugur.bsky.social"
                    target="_blank" 
                    rel="noopener noreferrer">
                  <div className="bluesky">
                    <svg  width="100%" height="100%"  viewBox="0 0 600 530" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" />
                    </svg></div>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/orhun-u%C4%9Fur-a3853218a/"
                  target="_blank" 
                  rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Zabandosk"
                  target="_blank" 
                  rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://orcid.org/0000-0002-9274-0414"
                  target="_blank" 
                  rel="noopener noreferrer">
                    <i className="fa-brands fa-orcid"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto:orhun.ugur93@gmail.com"
                  target="_blank" 
                  rel="noopener noreferrer">
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
