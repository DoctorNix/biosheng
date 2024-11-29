import React from 'react';

interface AboutUsProps {
  isLargeFont: boolean; // 动态字体大小
  isChinese: boolean; // 动态语言切换
}

const AboutUs: React.FC<AboutUsProps> = ({ isLargeFont, isChinese }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
        height: '100vh',
        backgroundColor: '#f0f2f5',
        fontSize: isLargeFont ? '1.5rem' : '1rem', // 动态字体大小
      }}
    >
      <h1 style={{ fontSize: isLargeFont ? '3.5rem' : '3rem', marginBottom: '20px', width: '100%' }}>
        {isChinese ? '关于我们' : 'About Us'}
      </h1>
      <p style={{ maxWidth: '800px', lineHeight: isLargeFont ? '2' : '1.8',display: 'flex', }}>
        {isChinese
          ? '欢迎来到百生！我们致力于提供卓越的购物体验。'
          : 'Welcome to Biosheng! We are dedicated to providing top-notch shopping experiences.'}
      </p>
      <p style={{ maxWidth: '800px', lineHeight: isLargeFont ? '2' : '1.8', marginTop: '20px' }}>
        {isChinese
          ? '我们的使命是提供优质的产品和卓越的客户服务。'
          : 'Our mission is to deliver quality products and exceptional customer service.'}
      </p>
      {/* <footer style={{ marginTop: '40px', color: '#AAAAAA', fontSize: isLargeFont ? '1rem' : '0.8rem' }}>
        {isChinese ? '© 2024 百生. 版权所有.' : '© 2024 Biosheng. All Rights Reserved.'}
      </footer> */}
    </div>
  );
};

export default AboutUs;
