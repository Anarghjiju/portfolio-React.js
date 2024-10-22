import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Welcome to My Portfolio</h1>
      <p>
        This portfolio showcases my skills, projects, and experience as a computer engineer. Explore
        my journey and feel free to reach out for collaborations or inquiries.
      </p>
      <a href="/contact">Get in Touch</a>
    </div>
  );
};

export default Home;
