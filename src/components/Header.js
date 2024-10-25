import React, { Fragment } from 'react';
import imageSrc from '../media/3.jfif';
const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <img className="headerimg" src={imageSrc} alt="x" />
        
      </div>  
    </Fragment>
  );
};

export default Header;
