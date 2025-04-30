import React, { useEffect, useState } from 'react';
import { Typography, Divider } from 'antd';
import { AboutUsContent } from '../pages-content/types';

interface AboutUsProps {
  language: 'zh-CN' | 'zh-TW' | 'en';
  isLargeFont: boolean;
}

const AboutUs: React.FC<AboutUsProps> = ({ language, isLargeFont }) => {
  const [content, setContent] = useState<AboutUsContent | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      const langKey = language === 'zh-CN' ? 'zh' : language;
      const importedContent = await import(`../pages-content/about-us.${langKey}.ts`);
      setContent(importedContent.default);
    };
    loadContent();
  }, [language]);

  if (!content) return null;

  return (
    <div style={{
      padding: '20px',
      textAlign: 'center',
      background: 'linear-gradient(to bottom, #e6f4ea 0%, #f0f9f5 50%, #ffffff 100%)'
    }}>
      <Typography.Title
        level={1}
        style={{
          fontSize: isLargeFont ? '3rem' : '2rem',
          textAlign: 'center',
        }}
      >
        {content.title}
      </Typography.Title>

      {content.sections.map((section, index) => (
        <div key={index} style={{ marginBottom: '40px' }}>
          <Divider />

          <Typography.Title
            level={2}
            style={{ fontSize: isLargeFont ? '2.2rem' : '1.6rem' }}
          >
            {section.heading}
          </Typography.Title>

          {section.image ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px', justifyContent: 'center', flexDirection: 'row-reverse' }}>
              <img
                src={section.image}
                alt="section-img"
                style={{
                  maxWidth: '220px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              />
              <div style={{ textAlign: 'left', maxWidth: '600px' }}>
                {section.paragraphs.map((text, idx) => (
                  <Typography.Paragraph
                    key={idx}
                    style={{ fontSize: isLargeFont ? '1.4rem' : '1rem', lineHeight: 1.8 }}
                  >
                    {text}
                  </Typography.Paragraph>
                ))}
                {section.resume && (
                  <ul style={{ paddingLeft: '20px', fontSize: isLargeFont ? '1.3rem' : '1rem' }}>
                    {section.resume.map((item, i) => (
                      <li key={i} style={{ marginBottom: '0.5em' }}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.heading === '核心产品' && (
                  <p style={{ marginTop: '10px' }}>
                    <a href="/products" style={{ fontSize: isLargeFont ? '1.2rem' : '1rem' }}>
                      了解更多我们的核心产品 &gt;
                    </a>
                  </p>
                )}
              </div>
            </div>
          ) : (
            <>
              {section.paragraphs.map((text, idx) => (
                <Typography.Paragraph
                  key={idx}
                  style={{ fontSize: isLargeFont ? '1.4rem' : '1rem', lineHeight: 1.8 }}
                >
                  {text}
                </Typography.Paragraph>
              ))}
              {section.resume && (
                <ul style={{ paddingLeft: '20px', fontSize: isLargeFont ? '1.3rem' : '1rem' }}>
                  {section.resume.map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.5em' }}>{item}</li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
