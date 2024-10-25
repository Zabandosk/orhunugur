import React, { Fragment } from 'react';



const CV = () => {

  return (
    <Fragment>
        <div class="content">
            <h1>CV</h1>
            <div>
                Education
                <table>
                    <tr>
                        <th>Degree</th>
                        <th>University</th>
                        <th>Department</th>
                        <th>Graduation Year</th>
                        <th>GPA</th>
                        </tr>
                    <tr>
                        <td>BA</td>
                        <td>Uludağ University</td>
                        <td>Archaeology</td>
                        <td>2019</td>
                        <td>3,44</td>
                    </tr>
                    <tr>
                        <td>MA</td>
                        <td>Hacettepe University</td>
                        <td>Information and Records Management</td>
                        <td>2023</td>
                        <td>3,86</td>
                    </tr>
                </table>
            </div>

            <div>
                Work
            <table>
                    <tr>
                        <th>Position</th>
                        <th>Institute</th>
                        <th>Department</th>
                        <th>Year</th>
                    </tr>
                    <tr>
                        <td>Archaeologist-Intern</td>
                        <td>Uludağ University</td>
                        <td>Priene Excavations</td>
                        <td>2014,2015,2017 Summers</td>
                    </tr>
                    <tr>
                        <td>Digital Archivist</td>
                        <td>British Institute at Ankara (BIAA)</td>
                        <td>Digital Repository</td>
                        <td>Oct 2020-Jul 2023</td>
                    </tr>
                    <tr>
                        <td>Research Associate</td>
                        <td>University of Exeter</td>
                        <td>Imagining Futures Project-Digital Repository</td>
                        <td>Aug 2023-Aug 2024</td>
                    </tr>
                </table>
            </div>

            <div>
                Languages
                <table>
                    <tr>
                        <th>Language</th>
                        <th>Level</th>
                    </tr>
                    <tr>
                        <td>Turkish</td>
                        <td>Native</td>
                    </tr>
                    <tr>
                        <td>English</td>
                        <td>Advanced</td>
                    </tr>
                    <tr>
                        <td>German</td>
                        <td>Beginner</td>
                    </tr>
                    <tr>
                        <td>Latin & Ancient Greek</td>
                        <td>Beginner</td>
                    </tr>
                </table>
            </div>

            <div>
                Skills
            </div>
        </div>
    </Fragment>
   );
};

export default CV;
