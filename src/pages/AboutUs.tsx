import React from 'react';
import { content } from '../content';
import { AboutUsContent } from '../content/types';

interface AboutUsProps {
    isChinese: boolean;
    isLargeFont: boolean;
}

const AboutUs: React.FC<AboutUsProps> = ({ isChinese, isLargeFont }) => {
    const language = isChinese ? 'zh' : 'en';
    const aboutUsContent: AboutUsContent = content[language].aboutUs;

    return (
        <div
            style={{
                padding: '40px 20px',
                textAlign: 'center',
                fontSize: isLargeFont ? '1.5rem' : '1rem',
                minHeight: '100%',
            }}
        >
            {/* 关于我们部分 */}
            <section
                style={{
                    marginBottom: '40px',
                    padding: '20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                }}
            >
                <h1
                    style={{
                        fontSize: isLargeFont ? '3rem' : '2.5rem',
                        marginBottom: '20px',
                    }}
                >
                    {aboutUsContent.title}
                </h1>
                <p>{aboutUsContent.description}</p>
            </section>

            {/* 核心理念部分 */}
            <section
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
                    {aboutUsContent.coreValuesTitle}
                </h2>
                <p>{aboutUsContent.coreValuesDescription}</p>
            </section>

            {/* 团队部分 */}
            <section
                style={{
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
                    {aboutUsContent.teamTitle}
                </h2>
                <p>{aboutUsContent.teamDescription}</p>
            </section>
        </div>
    );
};

export default AboutUs;
