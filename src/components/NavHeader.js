import React from 'react';
import { VscGlobe } from "react-icons/vsc";
import { FiMail } from "react-icons/fi";
import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import styles from '../styles/NavHeader.module.css';

const NavHeader = () => {

  return (
    <nav className={styles.NavHeader}>
      <section> 
        <h1>Jeff Wang</h1>
        <p>Computer Science Undergrad &nbsp; | &nbsp; Full Stack Developer &nbsp; | &nbsp; Web Designer</p>
      </section>
      <section id={styles.sectionRight}>
        <ul>  
          <li>
            <VscGlobe className={styles.icon}/>
            <a href="https://jeffwang.netlify.app" target="_"> <span>jeffwang.netlify.app</span></a>
          </li>
          <li>
            <FiMail className={styles.icon}/>
            <a href="mailto:jeffwang4321@gmail.com" target="_"> jeffwang4321@gmail.com</a>
          </li>
          <li>
            <FaPhoneAlt className={styles.icon}/>
            <a href="tel:1-778-927-6762" target="_"> +1 (778) 927 6762</a>
          </li>
          <li>
            <FaLinkedin className={styles.icon}/>
            <a href="https://linkedin.com/in/jw4321" target="_"> <span>linkedin.com/in/jw4321</span></a>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default NavHeader;