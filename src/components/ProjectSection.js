import React from 'react';
import styles from '../styles/Section.module.css';

const ProjectSection = () => {

  return (
    <section className={styles.Section}>
      <h3>PROJECT EXPERIENCE</h3>
      <div id={styles.textbox}>
        <p><b>Multiplayer Browser Game</b> - IO Games - <a href="https://github.com/jeffwang4321/IO-Games" target="_"> <span>GitHub</span></a></p>
        <p>May 2022 - Aug 2022</p>
      </div>
      <ul>
        <li>• &nbsp; Developed a web-based multiplayer browser game using Node.js, Express.js, and Socket.io</li>
        <li>• &nbsp; Implemented a group chat feature, 3 unique minigames and automatic score tracking</li>
        <li>• &nbsp; Organized client connections into unique rooms where individual minigames can run asynchronously</li>
        <li>• &nbsp; Implemented real-time communication between client server environment using web sockets</li>
      </ul>
      <ul id={styles.skills}>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Socket.io</li>
        <li>JavaScript</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Heroku</li>
      </ul>
    </section>
  );
};

export default ProjectSection;