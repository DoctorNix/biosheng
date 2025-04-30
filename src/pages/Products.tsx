import React from 'react';
import { Typography, Card, Row, Col } from 'antd';
import { ProductsContent } from '../pages-content/types';

export interface ProductsProps {
  language: 'zh-CN' | 'zh-TW' | 'en';
  isLargeFont: boolean;
  content: ProductsContent;
}

const Products: React.FC<ProductsProps> = ({ language, isLargeFont, content }) => {
  return (
    <div style={{ padding: '24px' }}>
      <Typography.Title style={{ fontSize: isLargeFont ? '2.2rem' : '1.6rem', textAlign: 'center' }}>
        {content.title}
      </Typography.Title>

      <Typography.Paragraph style={{ fontSize: isLargeFont ? '1.2rem' : '1rem', textAlign: 'center' }}>
        {content.description}
      </Typography.Paragraph>

      {content.sections.map((section, idx) => (
        <div key={idx} style={{ marginTop: 40 }}>
          <Typography.Title level={3} style={{ fontSize: isLargeFont ? '1.8rem' : '1.4rem' }}>
            {section.category}
          </Typography.Title>
          <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
            {section.products.map((product) => (
              <Col xs={24} sm={12} md={8} key={product.id}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt={product.name}
                      src={product.image}
                      style={{
                        width: '100%',
                        height: '300px',
                        objectFit: 'contain',
                        borderRadius: '24px',
                        backgroundColor: '#fff',
                        padding: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                  }
                >
                  <Card.Meta
                    title={
                      <Typography.Title level={5} style={{ marginBottom: 0, textAlign: 'center' }}>
                        {product.name}
                      </Typography.Title>
                    }
                    description={
                      <div style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: isLargeFont ? '1.1rem' : '0.95rem' }}>{product.description}</p>
                        <p style={{ fontSize: isLargeFont ? '0.95rem' : '0.85rem', color: '#555' }}>
                          {product.details}
                        </p>
                      </div>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
};

export default Products;
