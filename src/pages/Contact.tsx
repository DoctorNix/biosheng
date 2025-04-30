import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import { StoreInfo } from '../pages-content/types';
import { MailOutlined } from '@ant-design/icons';
import { FacebookFilled } from '@ant-design/icons';

interface ContactProps {
  language: 'zh-CN' | 'zh-TW' | 'en';
  isLargeFont: boolean;
  email: string;
  facebook: string;
  stores: StoreInfo[];
}

const Contact: React.FC<ContactProps> = ({ language, isLargeFont, email, facebook, stores }) => {
  const titleMap = {
    'zh-CN': '联系我们',
    'zh-TW': '聯絡我們',
    'en': 'Contact Us'
  };

  const emailText = {
    'zh-CN': '联系邮箱',
    'zh-TW': '聯絡信箱',
    'en': 'Email'
  };

  return (
    <div style={{ padding: '24px' }}>
      <Typography.Title style={{ fontSize: isLargeFont ? '2.2rem' : '1.6rem' }}>
        {titleMap[language]}
      </Typography.Title>

      <Typography.Paragraph style={{ fontSize: isLargeFont ? '1.2rem' : '1rem', display: 'flex', alignItems: 'center' }}>
        <MailOutlined style={{ marginRight: 8 }} /> {emailText[language]}: <a href={`mailto:${email}`} style={{ marginLeft: 8 }}>{email}</a>
      </Typography.Paragraph>
      <Typography.Paragraph style={{ fontSize: isLargeFont ? '1.2rem' : '1rem', display: 'flex', alignItems: 'center' }}>
        <FacebookFilled style={{ marginRight: 8 }} />
        <a href={facebook} target="_blank" rel="noopener noreferrer">Facebook/Biosheng</a>
      </Typography.Paragraph>

      <Row gutter={[16, 24]} style={{ marginTop: 32 }}>
        {stores.map(store => (
          <Col key={store.id} xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img src={store.image} alt={store.name} style={{ height: 200, objectFit: 'cover' }} />}
            >
              <Card.Meta
                title={<Typography.Title level={5}>{store.name}</Typography.Title>}
                description={
                  <div>
                    <p style={{ marginBottom: 4 }}>{store.address}</p>
                    <p style={{ marginBottom: 0 }}>📞 {store.phone}</p>
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Contact;
