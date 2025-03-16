import React from 'react';
import '../styles/AnswerLoadingSpinner.css';

function AnswerLoadingSpinner() {
  return (
    <div className="answer-spinner-overlay">
      <div className="answer-spinner-container">
        <div className="answer-spinner"></div>
        <p className="answer-spinner-text">Menyimpan jawaban...</p>
      </div>
    </div>
  );
}

export default AnswerLoadingSpinner; 