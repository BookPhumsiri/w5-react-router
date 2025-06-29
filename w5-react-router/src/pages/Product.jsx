import React from 'react';
import '../App.css';

const products = [
  // สินค้าเดิม 6 รายการ
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

  // สินค้าเพิ่มใหม่
  {
    id: 7,
    name: 'Webcam HD',
    description: 'เว็บแคมความละเอียดสูงสำหรับการประชุมออนไลน์',
    imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTZ-xshqqKkwOs1BzsZI3eNIZGwWcywGMfVzNKChe_uqpJ-ONfp_gE4vqNKV9D1IHfkRfGIHcWFrES1jPd-oFoQSLz-gPCoX3WCBqj4Cik2GheAPay_6T2o',
  },
  {
    id: 8,
    name: 'USB Hub',
    description: 'ฮับ USB ขยายพอร์ตเชื่อมต่อหลายอุปกรณ์',
    imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ9JIg8et9LrWTuNsXCX2Jz3lZ31WAtqXzTv1dgmKTuNpPNDLT4tgvnlm34Qfp2b3m985TYZOyYuihLNWsZDnfp-gSCb2GGC260Ji-wjiyuxMD5l7OSn-HalA',
  },
  {
    id: 9,
    name: 'Graphic Tablet',
    description: 'แท็บเล็ตวาดภาพสำหรับนักออกแบบและนักวาดภาพ',
    imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSNA-gZ2R0OLgqIr-RM6EffkEF0odcmFfIHG-CBr65j9niRPahdra2Z4789GAiZKNDwh-3Ou8v7AjSnImdGXlr37-Oh82v3Ehh046ETE5Z0fj5opAgze64GPw',
  },
  {
    id: 10,
    name: 'Portable Projector',
    description: 'โปรเจคเตอร์แบบพกพาสำหรับพรีเซนต์หรือดูหนัง',
    imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRlQ0FdD_PkqYDqYbnRkU5woTEx4D7Hn4VQO8HsXwn6u96DO3D0EFsKHyFFgOhU8eOLDQDqXGMuxeOZU2ex0aP5pTQwH0UcvOxtfAvlI0JvginPs1pZz2onmw',
  },
  {
    id: 11,
    name: 'Smartwatch',
    description: 'สมาร์ทวอทช์ติดตามสุขภาพและการแจ้งเตือน',
    imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT3IB208vsKmMK5Yads0g7bVwwtNN82JLh0PloENDSVDx89T7wjF3sR1sqprYHFSq0CgqlltmpkgHO2fJBsyws6Wvy-dP3JxvUjgdtCQTbWX7BD5RHsBbfo',
  },
  {
    id: 12,
    name: 'Bluetooth Speaker',
    description: 'ลำโพงบลูทูธเสียงชัด พกพาสะดวก',
    imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSoVAZjkmakmVDYAMxh0kWYjzkyhIn5WcxXzLmhYRfIwvqQlmerZyhKZLlgzaw1IInw5aznMn6LV1m9ZqzFdikcuTxgCIPNPbubD92TEGcEx_4EKRUS-oUH',
  },
  {
    id: 13,
    name: 'Wi-Fi Router',
    description: 'เราเตอร์ Wi-Fi ความเร็วสูงสำหรับบ้านและออฟฟิศ',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS4JkrpJZRxUZpo4Ce0daYihXw3jy57HUre2o7Mhvnqr6vQsTFP2moxQ5ObaJkepjyG6YlWCHIF160-p1sBvPXPLdODEn_LDNC8hnUA7NkK5ZpTQM7lQDO4',
  },
  {
    id: 14,
    name: 'VR Headset',
    description: 'อุปกรณ์ VR เพื่อประสบการณ์เสมือนจริง',
    imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRQfh9qFHg9UG3U45Xe0QEq7q1O5dVXzRQSIEYdS3kxwMViULGfKZjTWiMj-2txSGQ9dCCrwhfH8ekwelN2UMGPx99ovleaNJcM-yHvvu3GsaqLZz7xg9RKIg',
  },
  {
    id: 15,
    name: 'Gaming Chair',
    description: 'เก้าอี้เกมเมอร์นั่งสบาย รองรับสรีระ',
    imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTWsZdWy1LYZuBCMwvzYStCbCAoqpOpURiaM5vJ_EEsbqRzIG2zk_ECbjcpqhePhef8bczIf9iNke7itLDixzu4pPRPED9H1HS4s-WKgyQJ1JlPNG33gheuIQ',
  },
  {
    id: 16,
    name: 'Laptop Stand',
    description: 'แท่นวางแล็ปท็อปเพื่อการทำงานที่สบาย',
    imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRSW920fHdqmLmGTSvv2IbymRwV6nX-9UoK45J7KQzCeq1Y9D56nIVJuBiNR8GNhsghBe7bo34feY38pw6lyi_uqkmqKRsVSf8lg9KqlW19evSjqDHSegk_IA',
  },
  {
    id: 17,
    name: 'Capture Card',
    description: 'การ์ดจับภาพสำหรับการสตรีมและบันทึกเกม',
    imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR5HtVz5ocJzWF0FtMCL9YphorfoKv699Y4q1E4IpRDqwDR0NKNnivGzQ_sPHEnsPBYLdEXA-HVpd7w7IgUjtZmTFUv-fDuUsN8vBF7L4Imkyt6cA81645S',
  },
  {
    id: 18,
    name: 'PC Case',
    description: 'เคสคอมพิวเตอร์ออกแบบสวยงามและระบายความร้อนดี',
    imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTETvR_FKu_gYkZZm1SyaoWePxwdsYnWUrMy5A3zg1rzWVrnmJ6UCFo8QpqN0mkoesmFGS9_CR0GdJF3ndxCCtmpAColxtz223rypVic8isay01LhYEAplegg',
  },
  {
    id: 19,
    name: 'Motherboard',
    description: 'เมนบอร์ดคุณภาพสูงรองรับ CPU รุ่นล่าสุด',
    imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQYVrMTaEUhrIl394NoJbqsIy0Uw-nIhW5Nrx80JgUP2W2-Bw7qYXtTlNpx2ICkksxLlcsdprnp6GvriaYYt6vqrz8d_NEhGv5NH99hojm1_o41g471QvAS-g',
  },
  {
    id: 20,
    name: 'Power Supply Unit',
    description: 'พาวเวอร์ซัพพลายเสถียรสำหรับเครื่อง PC',
    imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTiNZv7ZfvH02n-2LtvmiWqF55SgangTX7fQqPF5zk1XkI6sKccJZ9T9xcjgUu9v1zxY-cEw2CZG17NXSV4huuWeeq7VaKZnu9pmunv56lJt5-PBmcFuVld0w',
  },
  {
    id: 21,
    name: 'Graphics Card',
    description: 'การ์ดจอประสิทธิภาพสูงสำหรับเล่นเกมและงานกราฟิก',
    imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ305Mr5g-Dr5j4x7gqhYaktQL8vvthOJ9_ilYsoc5cjh8O-E-f8MNIZ6q9SHNN9mDFwv_P1som3GQMloADCEPkVvHbQUKa1xa0t0-1JT3UmCsCbKTE_uM3',
  },
  {
    id: 22,
    name: 'CPU Cooler',
    description: 'ชุดระบายความร้อนซีพียูแบบพัดลมหรือชุดน้ำ',
    imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS6C2YUPbrBa5X09_WAd8cAYfAgEvfN-mL9YvaQQ1WjPX5k4ObtIaUGYEPzUV6ig--c5PcVJ-J14UQZxeWGJXXwEWy6iV1TlSoutK482k8ung4TJ6nK4CEr',
  },
  {
    id: 23,
    name: 'RAM DDR5',
    description: 'หน่วยความจำความเร็วสูงสำหรับเกมและงานหนัก',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRUR4VG9VETW3NTsPI1xo_QbD2kaDrJjUC6bSvieD_bfeRvKSmH1WWMZAfS_W4dIiCXt7ddfYC7MqwdnbU2Gekb9ulMBaLQXFYljicwCT101R93lGbBkwvTkQ',
  },
  {
    id: 24,
    name: 'NAS Storage',
    description: 'ระบบเก็บข้อมูล NAS สำหรับใช้ในบ้านหรือธุรกิจ',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRxseA34Ob2EtIdzCa9uiibVUKVUcLruy7G2B6d_lnPO_a8piHUwp3Z677G_XAbbE9tlKQWb78xpG0VX3L2MvNhyo92MogSBrceSAOS6SJN',
  },
  {
    id: 25,
    name: 'Surge Protector',
    description: 'ปลั๊กไฟกันไฟกระชาก ป้องกันอุปกรณ์เสียหาย',
    imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ1LplQPgZWJU7EQG7RVhBT16EyNprrCPbJkrSLJM0qYNAeZKR3MPtLhJ-dHF-UpnMpeUDXv9L3kVq5NbweyTktle1bXHhJ78z_UVMMmu12jTBMQM2xGMnm6g',
  },
  {
    id: 26,
    name: 'HDMI Cable',
    description: 'สาย HDMI คุณภาพสูงสำหรับภาพและเสียงคมชัด',
    imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR3j0Jrcd-NJAZIWOupE6Wu5PFK4eoWiPfFNfAg8gtYtIcT2cszVudGcVycBjfke7ji-3qxrVFRbc3qHkGf-TJkrCRLUxsLvp7bmMno6JDryoaT_7yqn4Ey',
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
