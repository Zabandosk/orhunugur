import React, { Fragment } from 'react';



const CV = () => {

  return (
    <Fragment>
        <div class="content">

      <h1>CV</h1>
      
      <div id='cv'>
      <section>
      <h2>Education</h2>
          <p>Archaeology (BA). Uludağ University. Graduation Year: 2019. GPA: 3.44</p>
          <p>Information and Records Management (MA). Hacettepe University. Graduation Year: 2023. GPA: 3.86</p>
      </section>

      <section>
        <h2>Work Experience</h2>
          <p>Archaeologist-Intern. Uludağ University, Priene Excavations. Summers of 2014, 2015, and 2017.</p>
          <p>Librarian-Part Time. Uludağ University, Central Library. 2018.</p>
          <p>Digital Archivist. British Institute at Ankara (BIAA)  - <a href='https://digitalrepository.biaa.ac.uk/'>Digital Repository</a>. Oct 2020 - Jul 2023.</p>
          <p>Research Associate. University of Exeter, Imagining Futures Project - <a href='https://ifrepo.world/'>Digital Repository</a>. Aug 2023 - Aug 2024.</p>
      </section>

      <section>
      <h2>Technical Skills</h2>
      <div className="skills">
        <div>
        <h3><i className="fas fa-briefcase"></i> Office & Productivity Software</h3>
        <ul>
          <li>Microsoft 365 (Word, Excel, PowerPoint, Outlook)</li>
          <li>Google Workspace (Docs, Sheets, Slides, Forms)</li>
          <li>Microsoft Teams</li>
          <li>Dropbox</li>
          <li>Google Drive</li>
          <li>SharePoint</li>
        </ul>
        </div>
        <div>
        <h3><i className="fas fa-code"></i> Programming & Web Development</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>React.js</li>
          
        </ul>
        </div>
        <div>
        <h3><i className="fas fa-database"></i> Database & Data Management</h3>
        <ul>
          <li>SQL</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>XML</li>
        </ul>
        </div>
        <div>
        <h3><i className="fas fa-map-marked-alt"></i> Geospatial Analysis</h3>
        <ul>
          <li>QGIS</li>
          <li>ArcGIS</li>
        </ul>
        </div>
        <div>
        <h3><i className="fas fa-chart-line"></i> Data Analysis & Statistical Software</h3>
        <ul>
          <li>IBM SPSS Statistics</li>
          <li>Python</li>
          <li>KNIME Analytics</li>
        </ul>
        </div>
        </div>
        </section>
      <section>
        <h2>Languages</h2>
        <ul>
          <li>Turkish: Native</li>
          <li>English: Advanced</li>
          <li>German: Beginner</li>
          <li>Latin & Ancient Greek: Beginner</li>
        </ul>
      </section>

      <section className="research-interests">
        <h2>Research Interests</h2>
        <p>Digital Humanities, Heritage Data Management, Everyday Heritage, Participatory Heritage, Personal Information Management, People's History, Usability</p>
      </section>
      
    </div>
    </div>
    </Fragment>
   );
};

export default CV;
