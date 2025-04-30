import React from 'react';
import { FacebookFilled } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';

interface FooterProps {
  language: 'zh-CN' | 'zh-TW' | 'en';
  isLargeFont: boolean;
  menuItems: {
    title: { 'zh-CN': string; 'zh-TW': string; en: string };
    path: string;
    submenu?: {
      title: { 'zh-CN': string; 'zh-TW': string; en: string };
      path: string;
    }[];
  }[];
}

const Footer: React.FC<FooterProps> = ({ language, isLargeFont, menuItems }) => {
  const getCopyright = (lang: 'zh-CN' | 'zh-TW' | 'en') => {
    switch (lang) {
      case 'zh-CN':
        return '版权所有©2024 百生健康。保留所有权利。';
      case 'zh-TW':
        return '版權所有©2024 百生健康。保留所有權利。';
      case 'en':
      default:
        return '©2024 Biosheng Health. All Rights Reserved.';
    }
  };

  const copyright = getCopyright(language);

  return (
    <footer
      style={{
        backgroundColor: '#61CE70',
        color: 'black',
        padding: isLargeFont ? '30px' : '20px',
        fontSize: isLargeFont ? '1.4rem' : '1rem',
        borderTop: '2px solid #808080',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexDirection: 'row',
        }}
        className="footer-container"
      >
        {/* Left: Logo */}
        <div style={{ flex: '1', minWidth: '180px', textAlign: 'left' }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            padding: '10px',
            borderRadius: '8px',
            boxShadow: '0 1px 6px rgba(0,0,0,0.1)',
            display: 'inline-block'
          }}>
            <img
              src="./images/logo_Biosheng_ch_2_1.png"
              alt="Biosheng Logo"
              style={{ height: '70px', objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Center: Navigation */}
        <div style={{
          flex: '2',
          minWidth: '200px',
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          padding: '12px 20px',
          borderRadius: '10px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <p style={{ margin: '8px 0', fontWeight: 'bold' }}>
            {language === 'zh-CN' ? '导航' : language === 'zh-TW' ? '導覽' : 'Navigation'}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', columnGap: '40px', rowGap: '10px' }}>
            {menuItems.map((item, index) => (
              item.submenu ? (
                item.submenu.map((sub, subIndex) => (
                  <Link
                    key={`${index}-${subIndex}`}
                    to={sub.path}
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#f0f0f0',
                      padding: '10px 16px',
                      borderRadius: '8px',
                      boxShadow: '0 1px 5px rgba(0,0,0,0.1)',
                      color: '#333',
                      fontWeight: '500',
                      textDecoration: 'none',
                      minWidth: '180px',
                      textAlign: 'center'
                    }}
                  >
                    {sub.title[language]}
                  </Link>
                ))
              ) : (
                <Link
                  key={index}
                  to={item.path}
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#f0f0f0',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    boxShadow: '0 1px 5px rgba(0,0,0,0.1)',
                    color: '#333',
                    fontWeight: '500',
                    textDecoration: 'none',
                    minWidth: '180px',
                    textAlign: 'center'
                  }}
                >
                  {item.title[language]}
                </Link>
              )
            ))}
          </div>
        </div>

        {/* Right: Contact Info */}
        <div style={{ flex: '1', minWidth: '180px', textAlign: 'right', marginLeft: '20px' }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            padding: '10px',
            borderRadius: '8px',
            color: '#333',
            fontWeight: '500',
            boxShadow: '0 1px 6px rgba(0,0,0,0.1)',
            marginBottom: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '10px'
          }}>
            <div>
              📞 +65 6567 5070<br />
              ✉️ wesleyli@biosheng.com
            </div>
            <Tooltip title="Facebook">
              <a
                href="https://www.facebook.com/Biosheng/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '1.6rem', color: '#4267B2' }}
              >
                <FacebookFilled />
              </a>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <p>{copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
      <style>
        {`
        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          .footer-container > div {
            margin-bottom: 20px;
            text-align: center !important;
            align-items: center !important;
          }
          .footer-container .ant-tooltip {
            display: flex;
            justify-content: center;
          }
        }
        `}
      </style>