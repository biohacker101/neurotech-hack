import React from 'react';
import './Logo.css';

const Logo = ({ size = 'medium' }) => {
  return (
    <div className={`logo ${size}`}>
      <div className="logo-icon">
        <div className="brain">
          <div className="brain-circle"></div>
          <div className="brain-wave"></div>
        </div>
        <div className="play-button"></div>
      </div>
      <h1 className="logo-text">FocusFlow</h1>
    </div>
  );
};

export default Logo; 