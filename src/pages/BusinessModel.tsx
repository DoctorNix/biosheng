import React from 'react';
import { content } from '../content';
import { BusinessModelContent } from '../content/types';

interface BusinessModelProps {
    isChinese: boolean;
    isLargeFont: boolean;
}

const BusinessModel: React.FC<BusinessModelProps> = ({ isChinese, isLargeFont }) => {
    const language = isChinese ? 'zh' : 'en';
    const businessModelContent: BusinessModelContent = content[language].businessModel;

    return (
        <div
            style={{
                padding: '40px 20px',
                fontSize: isLargeFont ? '1.5rem' : '1rem',
                minHeight: '100%',
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
            <p style={{ textAlign: 'center', marginBottom: '40px' }}>{businessModelContent.description}</p>

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
                    {/* 不显示 section 的图片 */}
                    {/*
          {section.url ? (
            <a href={section.url} target="_blank" rel="noopener noreferrer">
              <img
                src={section.image}
                alt={section.title}
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  height: 'auto',
                  borderRadius: '8px',
                  display: 'block',
                  margin: '0 auto 20px',
                }}
              />
            </a>
          ) : (
            <img
              src={section.image}
              alt={section.title}
              style={{
                width: '100%',
                maxWidth: '600px',
                height: 'auto',
                borderRadius: '8px',
                display: 'block',
                margin: '0 auto 20px',
              }}
            />
          )}
          */}
                    <p style={{ maxWidth: '800px', textAlign: 'center', margin: '0 auto 40px' }}>
                        {section.description}
                    </p>

                    {/* 渲染门店信息，保留门店图片 */}
                    {section.stores && section.stores.length > 0 && (
                        <div>
                            <h3
                                style={{
                                    fontSize: isLargeFont ? '2rem' : '1.5rem',
                                    textAlign: 'center',
                                    marginBottom: '30px',
                                }}
                            >
                                {isChinese ? '我们的门店' : 'Our Stores'}
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
                                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
                                        <p>{store.description}</p>
                                        <p style={{ marginTop: '10px' }}>
                                            <strong>{isChinese ? '地址：' : 'Address: '}</strong>
                                            {store.address}
                                        </p>
                                        <p>
                                            <strong>{isChinese ? '电话：' : 'Phone: '}</strong>
                                            {store.phone}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default BusinessModel;