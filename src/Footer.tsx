import React from 'react';

interface FooterProps {
  isChinese: boolean;
  isLargeFont: boolean;
}

const Footer: React.FC<FooterProps> = ({ isChinese, isLargeFont }) => {
  return (
    <footer
      style={{
        backgroundColor: '#BDB76B',
        color: 'black',
        textAlign: 'center',
        padding: isLargeFont ? '30px' : '20px',
        fontSize: isLargeFont ? '1.5rem' : '1rem',
      }}
    >
      <p>
        {isChinese
          ? '友情链接：武汉楚精灵 | ' //相关合作商后面继续加
          : 'Friendly Links To: Wuhan EndoAngel Medical Technology Co.LTD | '}
      </p>
      <p>© 2024 百生 Biosheng. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
