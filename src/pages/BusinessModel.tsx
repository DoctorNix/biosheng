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
                <div
                    key={section.id}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginBottom: '60px',
                    }}
                >
                    <h2
                        style={{
                            fontSize: isLargeFont ? '2.5rem' : '2rem',
                            marginBottom: '20px',
                        }}
                    >
                        {section.title}
                    </h2>
                    <img
                        src={section.image}
                        alt={section.title}
                        style={{
                            width: '100%',
                            maxWidth: '600px',
                            height: 'auto',
                            borderRadius: '8px',
                            marginBottom: '20px',
                        }}
                    />
                    <p style={{ maxWidth: '800px', textAlign: 'center' }}>{section.description}</p>
                </div>
            ))}
        </div>
    );
};

export default BusinessModel;