import React from 'react';
import styles from '../styles/Section.module.css';

const WorkSection = () => {

  return (
    <section className={styles.Section}>
      <h3>WORK EXPERIENCE</h3>
      <div id={styles.textbox}>
        <p><b>Web Application Developer</b> - Government of Canada (PSPC - DSB)</p>
        <p>Jun 2022 - Sep 2022</p>
      </div>
      <ul>
        <li>• &nbsp; Developed, maintained, and optimized ASP.NET web applications for Canadian government clients in C#</li>
        <li>• &nbsp; Refactored and debugged MVC architecture, business billing logic, and SQL Server database connections</li>
        <li>• &nbsp; Responsible for PHP database scripting, network troubleshooting, jQuery, AJAX, and Vue.js debugging</li>
      </ul>
      {/* <ul id={styles.skills}>
        <li>Vue.js</li>
        <li>.NET Framework</li>
        <li>ASP.NET</li>
        <li>AJAX</li>
        <li>C#</li> 
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>PHP</li>
      </ul> */}

      <div id={styles.textbox}>
        <p><b>Software Developer</b> - Rainforest Automation Inc</p>
        <p>Jan 2021 - Sep 2021</p>
      </div>
      <ul>
        <li>• &nbsp; Developed, refactored, and optimized React components, JavaScript functions, and AJAX promises. Resolving over 40+ JIRA tickets in a 4-month period</li>
        <li>• &nbsp; Implemented a pricing graph feature using Canvas API and optimized JSON history using Redux states</li>
        <li>• &nbsp; Reduced the demand history graph's render time by 80% from 5s to 1s by implementing Redux caching</li>
        <li>• &nbsp; Developed the inactivity timeout function that automatically logs off the user after a set period of time</li>
        <li>• &nbsp; Designed and automated frontend testing using Cypress and firmware testing using Python's Fabric library</li>
        <li>• &nbsp; Automated REST API testing to monitor cloud health using Postman collections and environments</li>
        <li>• &nbsp; Updated, troubleshooted, and reprogrammed UNIX firmware using Bash scripts and XML commands</li>
      </ul>
      <ul id={styles.skills}>
        <li>React.js</li>
        <li>Redux.js</li>
        <li>Cypress.io</li>
        <li>REST APIs</li>
        <li>TypeScript</li>
        <li>AJAX</li>
        <li>Python</li>
        {/* <li>UNIX</li> */}
        <li>AWS</li>
      </ul>

      <div id={styles.textbox}>
        <p><b>Database Support Technician</b> - Prococious Technology Inc (ClearDent)</p>
        <p>Apr 2019 - Dec 2019</p>
      </div>
      <ul>
        <li>• &nbsp; Responsible for client software setup, updates, Microsoft SQL Server database migrations</li>
        <li>• &nbsp; Maintained, debugged and applied schema updates to SQL Servers using SQL Server Management Studio</li>
        <li>• &nbsp; Performed cloud database setup, backups, and automated integrity testing on DB backups using C++</li>
      </ul>
      {/* <ul id={styles.skills}>
        <li>Microsoft SQL Server</li>
        <li>SQL Management Studio</li>
        <li>C++</li>
        <li>Windows System Administration</li>
      </ul> */}
    </section>
  );
};

export default WorkSection;