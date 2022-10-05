import React from 'react';
import styles from '../styles/Section.module.css';

const EducationSection = () => {

  return (
    <section className={styles.Section}>
      <h3>EDUCATION</h3>
      <div id={styles.textbox}>
        <p><b>B.Sc. Computing Science</b> - Simon Fraser University, Canada</p>
        <p>Graduating: Dec 2022</p>
      </div>
      <ul>
        <li>• &nbsp; Database Systems II, Operating Systems, Networking II, Data Mining, Artificial Intelligence, Data Structures</li>
      </ul>
    </section>
  );
};

export default EducationSection;