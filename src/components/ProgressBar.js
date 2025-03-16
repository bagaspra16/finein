import React from 'react';

function ProgressBar({ currentQuestion, totalQuestions }) {
  const progress = (currentQuestion / totalQuestions) * 100;
  
  return (
    <div className="progress-container">
      <div 
        className="progress-bar" 
        style={{ width: `${progress}%` }}
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
      <div className="progress-text">
        <span className="progress-percentage">{Math.round(progress)}%</span> selesai
      </div>
    </div>
  );
}

export default ProgressBar;