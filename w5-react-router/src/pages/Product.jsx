import React from 'react';
import '../App.css';

const products = [
  {
    id: 1,
    name: 'Gaming Laptop',
    description: 'แล็ปท็อปทรงพลังสำหรับการเล่นเกมและการสตรีม',
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Mechanical Keyboard',
    description: 'คีย์บอร์ดเชิงกลคุณภาพสูงพร้อมแสง RGB',
    imageUrl: 'https://speedcom.co.th/cdn/shop/files/Ajazz-AK680-Wired-Lets-Play_-SpeedCom-324871457_695x695.png?v=1746094615',
  },
  {
    id: 3,
    name: 'Wireless Mouse',
    description: 'เมาส์ไร้สายตามหลักสรีรศาสตร์พร้อมแบตเตอรี่อายุการใช้งานยาวนาน',
    imageUrl: 'https://pim-cdn0.ofm.co.th/products/original/YB17228.png?v=20250625&x-image-process=image/format,webp/resize,m_fixed,w_400,h_400/quality,q_100/marker,u_plus/sharpen,50',
  },
  {
    id: 4,
    name: '4K Monitor',
    description: 'จอภาพ Ultra HD 4K เพื่อภาพและสีสันที่คมชัด',
    imageUrl: 'https://www.abshop.in.th/wp-content/uploads/2024/10/VA2708-4K-MHD-01-580x580.jpg',
  },
  {
    id: 5,
    name: 'Gaming Headset',
    description: 'หูฟังระบบเสียงรอบทิศทางเพื่อประสบการณ์การเล่นเกมที่เต็มอิ่ม',
    imageUrl: 'https://th.bing.com/th/id/R.c8f613d704deee811c126227152a1a06?rik=rWVaXJDO3SG9SA&pid=ImgRaw&r=0',
  },
  {
    id: 6,
    name: 'External SSD',
    description: 'SSD ภายนอกที่รวดเร็วและพกพาสะดวกสำหรับพื้นที่จัดเก็บเพิ่มเติม',
    imageUrl: 'https://th.bing.com/th/id/OIP.BoY6UbJamZK2USM1MQh0NAHaHa?w=200&h=200&c=10&o=6&cb=iavawebpc1&pid=genserp&rm=2',
  },
];

function Product() {
  return (
    <div className="product-container">
      <h1>สินค้าของ IHAVERAM</h1>
      <p>สำรวจคอมพิวเตอร์และอุปกรณ์เสริมคุณภาพสูงของเรา ซึ่งเหมาะสำหรับการทำงาน การเล่นเกม และอื่นๆ อีกมากมาย</p>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="product-caption">ให้เลือกซื้อ</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
