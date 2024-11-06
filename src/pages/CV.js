import React, { Fragment } from 'react';



const CV = () => {

  return (
    <Fragment>
        <div class="content">

      <h1>CV</h1>
      
      <section>
      <h2>Education</h2>
          <p>Archaeology (BA). Uludağ University. Graduation Year: 2019. GPA: 3.44</p>
          <p>MA in Information and Records Management (MA). Hacettepe University. Graduation Year: 2023. GPA: 3.86</p>
      </section>

      <section>
        <h2>Work Experience</h2>
          <p>Archaeologist-Intern. Uludağ University, Priene Excavations. Summers of 2014, 2015, and 2017.</p>
          <p>Librarian-Part Time. Uludağ University, Central Library. 2018.</p>
          <p>Digital Archivist. British Institute at Ankara (BIAA)  - <a href='https://digitalrepository.biaa.ac.uk/'>Digital Repository</a>. Oct 2020 - Jul 2023.</p>
          <p>Research Associate. University of Exeter, Imagining Futures Project - <a href='https://ifrepo.world/'>Digital Repository</a>. Aug 2023 - Aug 2024.</p>
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

      <section>
      <h2>Technical Skills</h2>

      <div>
        <h3>Office & Productivity Software</h3>
        <p>Advanced: Microsoft Word, Excel, PowerPoint</p>
      </div>

      <div>
        <h3>Programming & Web Development</h3>
        <p>Competent: HTML, CSS, JavaScript, Node.js, React</p>
      </div>

      <div>
        <h3>Database & Data Management</h3>
        <p>Competent: MySQL, PostgreSQL, XML</p>
      </div>

      <div>
        <h3>Geospatial Analysis</h3>
        <p>Competent: QGIS</p>
        <p>Working Knowledge: ArcGIS</p>
      </div>

      <div>
        <h3>Data Analysis & Statistical Software</h3>
        <p>Advanced: IBM SPSS Statistics</p>
        <p>Working Knowledge: Python, KNIME Analytics</p>
      </div>
    </section>

      <section>
        <h2>Research Interests</h2>
        <p>Heritage Data Management, Digital Humanities, Everyday Heritage, Participatory Heritage, Personal Information Management, Usability</p>
      </section>
    </div>
    </Fragment>
   );
};

export default CV;
