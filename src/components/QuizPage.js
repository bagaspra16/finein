import React, { useState, useEffect } from 'react';
import questions from '../data/questions';
import ProgressBar from './ProgressBar';
import AnswerLoadingSpinner from './AnswerLoadingSpinner';
import '../styles/QuizPage.css';

function QuizPage({ onSubmit }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);
  const [sectionProgress, setSectionProgress] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  // Menghitung progress per section
  useEffect(() => {
    const sections = {};
    questions.forEach(q => {
      if (!sections[q.section]) {
        sections[q.section] = {
          total: 0,
          answered: 0
        };
      }
      sections[q.section].total += 1;
    });
    
    // Hitung pertanyaan yang sudah dijawab per section
    Object.keys(answers).forEach(qId => {
      const question = questions.find(q => q.id === parseInt(qId));
      if (question && sections[question.section]) {
        sections[question.section].answered += 1;
      }
    });
    
    setSectionProgress(sections);
  }, [answers]);
  
  const handleAnswer = (questionId, answer) => {
    // Simpan jawaban
    setAnswers({
      ...answers,
      [questionId]: answer
    });
    
    // Tampilkan loading spinner
    setIsLoading(true);
    
    // Simulasi menyimpan jawaban selama 1-2 detik
    setTimeout(() => {
      setIsLoading(false);
      
      if (currentQuestionIndex < questions.length - 1) {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setIsAnimating(false);
        }, 300);
      }
    }, 1000 + Math.random() * 1000); // Random antara 1-2 detik
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
        setIsAnimating(false);
      }, 300);
    }
  };
  
  const handleSubmit = () => {
    // Tampilkan loading spinner sebelum submit
    setIsLoading(true);
    
    // Simulasi menyimpan jawaban terakhir
    setTimeout(() => {
      setIsLoading(false);
      onSubmit(answers);
    }, 1000 + Math.random() * 1000); // Random antara 1-2 detik
  };
  
  // Scroll to top when question changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentQuestionIndex]);
  
  const currentQuestion = questions[currentQuestionIndex];
  
  // Menentukan apakah ini pertanyaan pertama dari section baru
  const isNewSection = currentQuestionIndex === 0 || 
    questions[currentQuestionIndex - 1].section !== currentQuestion.section;
  
  // Mendapatkan progress section saat ini
  const currentSection = currentQuestion.section;
  const currentSectionProgress = sectionProgress[currentSection] || { total: 0, answered: 0 };
  const sectionProgressPercent = (currentSectionProgress.answered / currentSectionProgress.total) * 100;
  
  // Mendapatkan nomor pertanyaan dalam section saat ini
  const questionsInCurrentSection = questions.filter(q => q.section === currentSection);
  const currentQuestionNumberInSection = questionsInCurrentSection.findIndex(q => q.id === currentQuestion.id) + 1;
  
  return (
    <div className="quiz-container">
      {isLoading && <AnswerLoadingSpinner />}
      
      <h1 className="quiz-title">Tes Deteksi Dini Masalah Mental</h1>
      <p className="quiz-instruction">Pilih jawaban yang paling sesuai dengan pengalaman Anda dalam beberapa minggu terakhir.</p>
      
      <ProgressBar 
        currentQuestion={currentQuestionIndex + 1} 
        totalQuestions={questions.length} 
      />
      
      <div className={`question-card ${isAnimating ? 'fade-out' : 'fade-in'}`}>
        {isNewSection && (
          <div className="section-header">
            <h2 className="section-title">{currentQuestion.section}</h2>
            <div className="section-progress-container">
              <div 
                className="section-progress-bar" 
                style={{ width: `${sectionProgressPercent}%` }}
              ></div>
              <span className="section-progress-text">
                {currentSectionProgress.answered} dari {currentSectionProgress.total} pertanyaan dijawab
              </span>
            </div>
          </div>
        )}
        
        <div className="question-number-indicator">
          Pertanyaan {currentQuestionNumberInSection} dari {questionsInCurrentSection.length} di bagian ini
        </div>
        
        <h3 className="question-text">{currentQuestion.question}</h3>
        
        <div className="options-container">
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              className={`option-button ${answers[currentQuestion.id] === option.value ? 'selected' : ''}`}
              onClick={() => handleAnswer(currentQuestion.id, option.value)}
              disabled={isLoading}
            >
              <span className="option-letter">{option.value}</span> {option.text}
            </button>
          ))}
        </div>
        
        <div className="navigation-buttons">
          <button 
            className="nav-button prev-button" 
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0 || isLoading}
          >
            <span className="nav-icon">←</span> Sebelumnya
          </button>
          
          {currentQuestionIndex === questions.length - 1 ? (
            <button 
              className="nav-button submit-button"
              onClick={handleSubmit}
              disabled={!answers[currentQuestion.id] || isLoading}
            >
              Lihat Hasil <span className="nav-icon">→</span>
            </button>
          ) : (
            <button 
              className="nav-button next-button"
              onClick={() => {
                if (answers[currentQuestion.id] && !isLoading) {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    setIsAnimating(false);
                  }, 300);
                }
              }}
              disabled={!answers[currentQuestion.id] || isLoading}
            >
              Selanjutnya <span className="nav-icon">→</span>
            </button>
          )}
        </div>
        
        <div className="question-progress">
          <div className="question-counter">
            {currentQuestionIndex + 1} dari {questions.length} pertanyaan
          </div>
          
          <div className="question-dots">
            {Array.from({ length: Math.min(7, questions.length) }, (_, i) => {
              // Tampilkan 3 dot sebelum dan 3 dot setelah pertanyaan saat ini
              const startIdx = Math.max(0, currentQuestionIndex - 3);
              const idx = startIdx + i;
              if (idx < questions.length) {
                return (
                  <span 
                    key={idx} 
                    className={`question-dot ${idx === currentQuestionIndex ? 'active' : ''} ${answers[questions[idx].id] ? 'answered' : ''}`}
                    onClick={() => {
                      if (!isLoading && (answers[questions[idx].id] || idx < currentQuestionIndex)) {
                        setIsAnimating(true);
                        setTimeout(() => {
                          setCurrentQuestionIndex(idx);
                          setIsAnimating(false);
                        }, 300);
                      }
                    }}
                  ></span>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;