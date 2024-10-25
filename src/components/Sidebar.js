import React, { Fragment } from 'react';
import imageSrc from '../media/3.jfif';


const Sidebar = () => {

  return (
    <Fragment>
    <div class="sidebar">
    <img className="headerimg" src={imageSrc} alt="x" />
<ul>
    <li><a href="/">Home</a></li>
    <li><a href="/cv">CV</a></li>
    <li><a href="projects.html">Projects</a></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="/Tarot">Pick a Card</a></li>
    <li><a href="contact.html">Contact</a></li>
    <li><a href="about.html">About</a></li>
  </ul>
  Image Space
<div className='colorbox'>
  Color palette
<div className='color1'></div>
<div className='color2'></div>
<div className='color3'></div>
<div className='color4'></div>
<div className='color5'></div>
</div>
</div>  
    </Fragment>
   );
   

};

export default Sidebar;
