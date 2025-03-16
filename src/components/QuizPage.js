import React, { useState } from 'react';
import questions from '../data/questions';
import ProgressBar from './ProgressBar';
import '../styles/QuizPage.css';

function QuizPage({ onSubmit }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  
  const handleAnswer = (questionId, answer) => {
    setAnswers({
      ...answers,
      [questionId]: answer
    });
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const handleSubmit = () => {
    onSubmit(answers);
  };
  
  const currentQuestion = questions[currentQuestionIndex];
  
  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Tes Deteksi Dini Masalah Mental</h1>
      <p className="quiz-instruction">Pilih jawaban yang paling sesuai dengan pengalaman Anda dalam dua minggu terakhir.</p>
      
      <ProgressBar 
        currentQuestion={currentQuestionIndex + 1} 
        totalQuestions={questions.length} 
      />
      
      <div className="question-card">
        <h2 className="section-title">{currentQuestion.section}</h2>
        <h3 className="question-text">{currentQuestion.question}</h3>
        
        <div className="options-container">
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              className={`option-button ${answers[currentQuestion.id] === option.value ? 'selected' : ''}`}
              onClick={() => handleAnswer(currentQuestion.id, option.value)}
            >
              {option.value}. {option.text}
            </button>
          ))}
        </div>
        
        <div className="navigation-buttons">
          <button 
            className="nav-button" 
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            Sebelumnya
          </button>
          
          {currentQuestionIndex === questions.length - 1 ? (
            <button 
              className="nav-button submit-button"
              onClick={handleSubmit}
              disabled={Object.keys(answers).length < questions.length}
            >
              Lihat Hasil
            </button>
          ) : (
            <button 
              className="nav-button"
              onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
              disabled={!answers[currentQuestion.id]}
            >
              Selanjutnya
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuizPage;