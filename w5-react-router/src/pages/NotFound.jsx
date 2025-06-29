import React from 'react';

function NotFound() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff', // เปลี่ยนเป็นสีขาว
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: '20px',
      textAlign: 'center',
      backgroundColor: 'transparent',
    }}>
      <h1 style={{
        fontSize: '8rem',
        margin: 0,
        fontWeight: '900',
        letterSpacing: '0.1em',
        textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)', // เงาดำ เพิ่มความเด่น
      }}>
        404
      </h1>
      <p style={{
        fontSize: '2rem',
        marginTop: '1rem',
        fontWeight: '600',
        textShadow: '1px 1px 5px rgba(0, 0, 0, 0.6)', // เงาดำเล็กน้อย
      }}>
        Not Found<br />
        "ไม่เจอหน้าที่คุณต้องการจะเข้าครับ"
      </p>
    </div>
  );
}

export default NotFound;
