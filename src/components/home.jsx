import React from 'react';
import Prueba from '../video/Prueba.mp4';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <h1>Unravel</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt ligula neque, eget vulputate orci tempus non. Curabitur et ultricies lorem.</p>
        <div className="video-section">
          <video width="70%" controls>
            <source src={Prueba} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="buttons">
          <button>Lorem Ipsum</button>
          <button>Lorem Ipsum</button>
        </div>
      </div>
      <div className="cards">
        <div className="card">250+
          <p>Nullam hendrerit leo in tempor mattis. Mauris vel tortor enim.</p>
        </div>
        <div className="card">$50.00
          <p>Nullam hendrerit leo in tempor mattis. Mauris vel tortor enim.</p>
        </div>
        <div className="card">250+
          <p>Nullam hendrerit leo in tempor mattis. Mauris vel tortor enim.</p>
        </div>
        <div className="card">250+
          <p>Nullam hendrerit leo in tempor mattis. Mauris vel tortor enim.</p>
        </div>
        <div className="card">$50.00
          <p>Nullam hendrerit leo in tempor mattis. Mauris vel tortor enim.</p>
        </div>
      </div>
    </div>
  );
}

export default Home