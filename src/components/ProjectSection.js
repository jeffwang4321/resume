import React from 'react';
import styles from '../styles/Section.module.css';

const ProjectSection = () => {

  return (
    <section className={styles.Section}>
      <h3>PROJECT EXPERIENCE</h3>
      <div id={styles.textbox}>
        <p><b>Multiplayer Browser Game</b> - IO Games - <a href="https://github.com/jeffwang4321/IO-Games" target="_"> <span>GitHub</span></a></p>
        <p>Nov 2020</p>
      </div>
      <ul>
        <li>• &nbsp; Developed a cross platform  multiplayer browser game using Node.js, Express.js, and Socket.io</li>
        <li>• &nbsp; Implemented responsive design, a group chat feature, 3 unique minigames and automatic score tracking</li>
        <li>• &nbsp; Organized client connections into unique game rooms where individual rooms can run asynchronously</li>
        <li>• &nbsp; Implemented real-time communication between the client server environment using web sockets (TCP)</li>
      </ul>
      <ul id={styles.skills}>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Socket.io</li>
        <li>TCP</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Git</li>
        <li>Heroku</li>
      </ul>
    </section>
  );
};

export default ProjectSection;