import React from 'react';
import { useNavigate } from 'react-router';
import '../App.css';

function Home() {
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate('/product');
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to IHAVERAM Store</h1>
      <p className="home-description">
        ร้านค้าครบวงจรสำหรับคอมพิวเตอร์ประสิทธิภาพสูง อุปกรณ์เสริม และการสนับสนุนจากผู้เชี่ยวชาญ ไม่ว่าคุณจะเป็นเกมเมอร์ ครีเอเตอร์ หรือมืออาชีพด้านไอที เรามีอุปกรณ์ที่เหมาะกับคุณ
      </p>
      <button className="home-button" onClick={goToProduct}>
        ดูสินค้าได้ที่นี่
      </button>
    </div>
  );
}

export default Home;
