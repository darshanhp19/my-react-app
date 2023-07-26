import React, { useState } from 'react';
import './anim.css';

const Anim = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className={`card ${isExpanded ? 'expanded' : ''}`} onClick={handleToggle}>
      <div className="card-content">
        <h2>Beautiful Animated Component</h2>
        <p>
          This is a beautiful animated component example. Click the card to see the animation!
        </p>
      </div>
    </div>
  );
};

export default Anim;
