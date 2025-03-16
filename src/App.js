import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage';
import LoadingSpinner from './components/LoadingSpinner';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [answers, setAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  const startQuiz = () => {
    setCurrentPage('quiz');
  };
  
  const submitAnswers = (userAnswers) => {
    setAnswers(userAnswers);
    setIsLoading(true);
    
    // Simulasi loading untuk pengalaman pengguna yang lebih baik
    setTimeout(() => {
      setIsLoading(false);
      setCurrentPage('result');
    }, 1500);
  };
  
  const restartQuiz = () => {
    setAnswers({});
    setCurrentPage('landing');
  };
  
  return (
    <div className="App">
      {currentPage === 'landing' && (
        <>
          <LandingPage onStart={startQuiz} />
          <Footer />
        </>
      )}
      
      {currentPage === 'quiz' && (
        <>
          <QuizPage onSubmit={submitAnswers} />
          <Footer />
        </>
      )}
      
      {isLoading && <LoadingSpinner />}
      
      {currentPage === 'result' && !isLoading && (
        <>
          <ResultPage answers={answers} onRestart={restartQuiz} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;