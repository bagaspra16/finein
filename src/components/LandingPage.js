import React from 'react';
import '../styles/LandingPage.css';

function LandingPage({ onStart }) {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-title">FineIn</h1>
        <p className="landing-subtitle">Kenali kondisi mental Anda melalui tes interaktif</p>
        <button className="start-button" onClick={onStart}>
          Mulai Cek Kondisi Mental
        </button>
        <p className="landing-description">
          FineIn membantu Anda mengenali tanda-tanda awal masalah kesehatan mental
          melalui serangkaian pertanyaan yang disusun oleh para ahli. Hasil tes ini
          tidak menggantikan diagnosis profesional, tetapi dapat menjadi langkah awal
          untuk memahami kondisi mental Anda.
        </p>
        
        <div className="landing-features">
          <div className="feature-item">
            <div className="feature-icon">🔍</div>
            <h3 className="feature-title">Deteksi Dini</h3>
            <p>Kenali tanda-tanda awal masalah mental</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔒</div>
            <h3 className="feature-title">Privasi</h3>
            <p>Semua data Anda tetap aman dan privat</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📊</div>
            <h3 className="feature-title">Hasil Detail</h3>
            <p>Dapatkan analisis komprehensif</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;