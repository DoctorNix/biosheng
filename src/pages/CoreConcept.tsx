import React from 'react';
import { content } from '../pages-content';
import { CoreConceptContent } from '../pages-content/types';

interface CoreConceptProps {
    language: 'zh-CN' | 'zh-TW' | 'en';
    isLargeFont: boolean;
}

const CoreConcept: React.FC<CoreConceptProps> = ({ language, isLargeFont }) => {
    const contentLanguage = language === 'zh-CN' ? 'zh' : language;
    const coreConceptContent: CoreConceptContent = content[contentLanguage].coreConcept;

    return (
        <div
            style={{
                padding: '40px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontSize: isLargeFont ? '1.5rem' : '1rem',
                minHeight: '100%',
                background: 'linear-gradient(to bottom, #e8f5e9, #ffffff)', // add this line for consistent background
            }}
        >
            <h1
                style={{
                    fontSize: isLargeFont ? '3rem' : '2.5rem',
                    marginBottom: '40px',
                    textAlign: 'center',
                }}
            >
                {coreConceptContent.title}
            </h1>

            <div style={{ maxWidth: '900px', width: '100%' }}>
                {coreConceptContent.coredescription.map((item) => (
                    <section
                        key={item.id}
                        style={{
                            marginBottom: '40px',
                            padding: '24px',
                            backgroundColor: 'rgba(255, 255, 255, 0.85)',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '12px',
                            textAlign: 'left',
                        }}
                    >
                        <h2
                            style={{
                                fontSize: isLargeFont ? '2.4rem' : '1.8rem',
                                marginBottom: '12px',
                                color: '#2c3e50',
                                textAlign: 'center' // add this line
                            }}
                        >
                            {item.name}
                        </h2>
                        <p style={{ lineHeight: 1.75 }}>{item.description}</p>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default CoreConcept;
