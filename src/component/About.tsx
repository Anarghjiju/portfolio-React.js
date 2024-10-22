import React from 'react';
import './About.css'; // Optional: For styling
import profileImage from '../Images/pf.jpg';
const About: React.FC = () => {
  return (
    <div className="about-container">
      {/* Image Section */}
      <div className="image-container">
        <img 
          src={profileImage} 
          alt="Anargh" 
          className="profile-image" 
        />
      </div>

      {/* Name */}
      <h1 className="name-title">Anargh Jiju</h1>

      {/* About Me */}
      <section className="about-section">
        <h2>About Me</h2>
        <p>
          Hello! I am Anargh, a computer engineer passionate about building innovative solutions using
          cutting-edge technology. I am always eager to explore new fields in technology, and I am
          enthusiastic about solving real-world problems through coding and software development.
        </p>
      </section>

      {/* Languages I Know */}
      <section className="skills-section">
        <h2>Languages I Know</h2>
        <ul>
          <li>Java</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>TypeScript</li>
          <li>SQL</li>
          <li>HTML5</li>
          <li>CSS</li>
        </ul>
      </section>

      {/* Libraries/Frameworks */}
      <section className="skills-section">
        <h2>Libraries/Frameworks I Know</h2>
        <ul>
          <li>React</li>
          <li>Spring Boot</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Hibernate</li>
        </ul>
      </section>

      {/* Tools */}
      <section className="skills-section">
        <h2>Tools I Know</h2>
        <ul>
          <li>Git & GitHub</li>
          <li>Docker</li>
          <li>Jenkins</li>
          <li>Postman</li>
          <li>AWS</li>
        </ul>
      </section>

      {/* Soft Skills */}
      <section className="skills-section">
        <h2>Soft Skills</h2>
        <ul>
          <li>Problem Solving</li>
          <li>Teamwork</li>
          <li>Communication</li>
          <li>Critical Thinking</li>
          <li>Time Management</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
