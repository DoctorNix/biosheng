import React from 'react';
import { content } from '../content';
import { CoreConceptContent } from '../content/types';

interface CoreConceptProps {
    isChinese: boolean;
    isLargeFont: boolean;
}

const CoreConcept: React.FC<CoreConceptProps> = ({ isChinese, isLargeFont }) => {
    const language = isChinese ? 'zh' : 'en';
    const coreConceptContent: CoreConceptContent = content[language].coreConcept;

    return (
        <div
            style={{
                padding: '40px 20px',
                textAlign: 'center',
                fontSize: isLargeFont ? '1.5rem' : '1rem',
                minHeight: '100%',
            }}
        >
            <h1
                style={{
                    fontSize: isLargeFont ? '3rem' : '2.5rem',
                    marginBottom: '20px',
                }}
            >
                {coreConceptContent.title}
            </h1>

            {coreConceptContent.coredescription.map((item) => (
                <section
                    key={item.id}
                    style={{
                        marginBottom: '40px',
                        padding: '20px',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                    }}
                >
                    <h2
                        style={{
                            fontSize: isLargeFont ? '2.5rem' : '2rem',
                            marginBottom: '20px',
                        }}
                    >
                        {item.name}
                    </h2>
                    <p>{item.description}</p>
                </section>
            ))}
        </div>
    );
};

export default CoreConcept;
