import React, { useEffect } from 'react';
import questions from '../data/questions';
import results from '../data/results';
import '../styles/ResultPage.css';

function ResultPage({ answers, onRestart }) {
  // Analisis jawaban
  const analyzeAnswers = () => {
    const categories = {
      depression: 0,
      anxiety: 0,
      bipolar: 0,
      schizophrenia: 0,
      ptsd: 0,
      eating: 0
    };
    
    const scores = {
      A: 0,
      B: 1,
      C: 2,
      D: 3
    };
    
    // Hitung skor untuk setiap kategori
    questions.forEach(question => {
      const answer = answers[question.id];
      if (answer && question.category) {
        categories[question.category] += scores[answer];
      }
    });
    
    // Hitung persentase untuk setiap kategori
    const categoryQuestionCounts = {};
    questions.forEach(question => {
      if (question.category) {
        categoryQuestionCounts[question.category] = (categoryQuestionCounts[question.category] || 0) + 1;
      }
    });
    
    const percentages = {};
    Object.keys(categories).forEach(category => {
      const maxScore = categoryQuestionCounts[category] * 3; // 3 adalah skor maksimum (D)
      percentages[category] = (categories[category] / maxScore) * 100;
    });
    
    // Urutkan kategori berdasarkan persentase tertinggi
    const sortedCategories = Object.keys(percentages).sort(
      (a, b) => percentages[b] - percentages[a]
    );
    
    // Pastikan ada kategori yang terdeteksi, jika tidak gunakan default
    const primaryConcern = sortedCategories.length > 0 ? sortedCategories[0] : 'depression';
    
    return {
      primaryConcern,
      percentages
    };
  };
  
  const { primaryConcern, percentages } = analyzeAnswers();
  
  // Pastikan result ada, jika tidak gunakan fallback
  const result = results[primaryConcern] || {
    title: "Tidak Terdeteksi",
    description: "Tidak ada masalah mental yang terdeteksi secara signifikan berdasarkan jawaban Anda.",
    facts: ["Kesehatan mental adalah bagian penting dari kesehatan secara keseluruhan."],
    examples: ["Merasa baik secara mental adalah tanda kesehatan yang baik."],
    treatment: ["Tetap jaga kesehatan mental dengan olahraga dan istirahat yang cukup."]
  };
  
  // Efek animasi untuk chart bar
  useEffect(() => {
    const chartBars = document.querySelectorAll('.chart-bar');
    setTimeout(() => {
      chartBars.forEach(bar => {
        bar.style.width = bar.getAttribute('data-width');
      });
    }, 100);
  }, []);
  
  return (
    <div className="result-container">
      <h1 className="result-title">Hasil Tes Kondisi Mental</h1>
      
      <div className="result-card">
        <h2 className="concern-title">Kemungkinan Masalah: {result.title}</h2>
        <p className="concern-description">{result.description}</p>
        
        <div className="result-chart">
          {Object.keys(percentages).sort((a, b) => percentages[b] - percentages[a]).map(category => {
            // Pastikan results[category] ada sebelum mengakses properti title
            const categoryTitle = results[category] ? results[category].title : category;
            const percentage = Math.round(percentages[category]);
            
            return (
              <div key={category} className="chart-item">
                <div className="chart-label">
                  <span className="chart-label-text">{categoryTitle}</span>
                  <span className="chart-percentage-text">{percentage}%</span>
                </div>
                <div className="chart-bar-container">
                  <div 
                    className="chart-bar" 
                    style={{ width: '0%' }}
                    data-width={`${percentage}%`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="result-details">
          <div className="detail-section">
            <h3>Fakta tentang {result.title}</h3>
            <ul>
              {result.facts.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>
          </div>
          
          <div className="detail-section">
            <h3>Contoh Gejala</h3>
            <ul>
              {result.examples.map((example, index) => (
                <li key={index}>{example}</li>
              ))}
            </ul>
          </div>
          
          <div className="detail-section">
            <h3>Penanganan yang Disarankan</h3>
            <ul>
              {result.treatment.map((treatment, index) => (
                <li key={index}>{treatment}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="result-disclaimer">
          <h3>Catatan Penting</h3>
          <p>
            Hasil tes ini hanya bersifat indikatif dan tidak menggantikan diagnosis profesional.
            Jika Anda mengalami gejala yang mengganggu, segera konsultasikan dengan psikolog atau
            psikiater untuk mendapatkan bantuan yang tepat.
          </p>
        </div>
        
        <button className="restart-button" onClick={onRestart}>
          Mulai Tes Kembali
        </button>
      </div>
    </div>

);
}

export default ResultPage;