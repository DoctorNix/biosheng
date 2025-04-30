import React from 'react';
import {Typography, Image, Row, Col, Button} from 'antd';
import {content} from '../pages-content';
import {EndoAngelContent} from '../pages-content/types';

interface Props {
    content: EndoAngelContent;
    isLargeFont: boolean;
    language: 'zh-CN' | 'zh-TW' | 'en';
  }
  
  const EndoAngel: React.FC<Props> = ({ content, isLargeFont, language }) => {
    return (
      <div style={{ padding: '48px 24px' }}>
        <Typography.Title style={{ fontSize: isLargeFont ? '2.5rem' : '1.8rem', textAlign: 'center' }}>
          {content.title}
        </Typography.Title>
  
        <Typography.Paragraph style={{ fontSize: isLargeFont ? '1.3rem' : '1rem', whiteSpace: 'pre-line' }}>
          {content.description}
        </Typography.Paragraph>
  
        {content.images && (
          <Row gutter={[16, 16]} justify="center" style={{ marginTop: 24 }}>
            {content.images.map((src, idx) => (
              <Col key={idx} xs={24} sm={12} md={8}>
                <Image
                  src={src}
                  alt={`EndoAngel image ${idx + 1}`}
                  style={{ width: '100%', borderRadius: 8 }}
                  content='ENDOANGEL® Lower Gastrointestinal Endoscope Image Auxiliary Diagnostic Equipment'
                />
              </Col>
            ))}
          </Row>
        )}
  
        <div style={{ marginTop: 40, display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
          {content.websiteUrl && (
            <Button
              type="primary"
              href={content.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {language === 'zh-TW' ? '前往官方網站' : language === 'zh-CN' ? '访问官网' : 'Visit Official Website'}
            </Button>
          )}
          {content.productUrl && (
            <Button
              href={content.productUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {language === 'zh-TW' ? '查看產品詳情' : language === 'zh-CN' ? '查看产品详情' : 'View Product Details'}
            </Button>
          )}
        </div>
      </div>
    );
  };
  
  export default EndoAngel;
  