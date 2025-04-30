import React from 'react';
import { content } from '../pages-content';
import { BusinessModelContent } from '../pages-content/types';

interface BusinessModelProps {
  language: 'zh-CN' | 'zh-TW' | 'en';
  isLargeFont: boolean;
}

const BusinessModel: React.FC<BusinessModelProps> = ({ language, isLargeFont }) => {
  const contentLanguage = language === 'zh-CN' ? 'zh' : language;
  const businessModelContent: BusinessModelContent = content[contentLanguage].businessModel;

  return (
    <div
      style={{
        padding: '40px 20px',
        fontSize: isLargeFont ? '1.5rem' : '1rem',
        minHeight: '100%',
        textAlign: 'center',
        background: 'linear-gradient(to bottom, #eafaf1, #f8fff9)', // subtle green-white gradient
      }}
    >
      <h1
        style={{
          fontSize: isLargeFont ? '3rem' : '2.5rem',
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        {businessModelContent.title}
      </h1>
      <p style={{ textAlign: 'center', marginBottom: '40px', width: '100%' }}>{businessModelContent.description}</p>

      {businessModelContent.sections.map((section) => (
        <div key={section.id} style={{ marginBottom: '60px' }}>
          <h2
            style={{
              fontSize: isLargeFont ? '2.5rem' : '2rem',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            {section.title}
          </h2>

          <p style={{ maxWidth: '900px', margin: '0 auto 40px', textAlign: 'center' }}>{section.description}</p>

          {section.stores && section.stores.length > 0 && (
            <div>
              <h3
                style={{
                  fontSize: isLargeFont ? '2rem' : '1.5rem',
                  textAlign: 'center',
                  marginBottom: '30px',
                }}
              >
                {language.startsWith('zh') ? '我们的门店' : 'Our Stores'}
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '40px',
                }}
              >
                {section.stores.map((store) => (
                  <div
                    key={store.id}
                    style={{
                      width: '300px',
                      padding: '20px',
                      backgroundColor: 'rgba(255, 255, 255, 0.85)',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      borderRadius: '8px',
                      textAlign: 'center',
                    }}
                  >
                    {store.url ? (
                      <a href={store.url} target="_blank" rel="noopener noreferrer">
                        <img
                          src={store.image}
                          alt={store.name}
                          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                        />
                      </a>
                    ) : (
                      <img
                        src={store.image}
                        alt={store.name}
                        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                      />
                    )}
                    <h4
                      style={{
                        fontSize: isLargeFont ? '1.8rem' : '1.5rem',
                        margin: '20px 0 10px',
                      }}
                    >
                      {store.name}
                    </h4>
                    {store.description && <p>{store.description}</p>}
                    <p style={{ marginTop: '10px', textAlign: 'center' }}>
                      <strong>{language.startsWith('zh') ? '地址：' : 'Address: '}</strong>
                      {store.address}
                    </p>
                    <p style={{ textAlign: 'center' }}>
                      <strong>{language.startsWith('zh') ? '电话：' : 'Phone: '}</strong>
                      {store.phone}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div style={{
            height: '40px',
            background: 'linear-gradient(to bottom, #f0f0f0, #f0f0f0)',
            margin: '40px 0',
            borderTop: '1px solid #ccc'
          }} />
        </div>
      ))}
    </div>
  );
};

export default BusinessModel;