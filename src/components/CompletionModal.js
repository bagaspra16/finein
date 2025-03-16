import React, { useState, useEffect } from 'react';
import '../styles/CompletionModal.css';

function CompletionModal({ answeredQuestions, totalQuestions, onClose }) {
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    // Otomatis tutup modal setelah 10 detik
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 10000);
    
    return () => clearTimeout(timer);
  }, [onClose]);
  
  if (!visible) return null;
  
  return (
    <div className="completion-modal-overlay" onClick={onClose}>
      <div className="completion-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>×</button>
        
        <div className="completion-modal-content">
          <div className="completion-icon">✓</div>
          <h2 className="completion-title">Tes Selesai!</h2>
          <p className="completion-message">
            Anda telah menjawab {answeredQuestions} dari {totalQuestions} pertanyaan
          </p>
          <p className="completion-submessage">
            Hasil analisis Anda sedang diproses...
          </p>
        </div>
      </div>
    </div>
  );
}

export default CompletionModal; 