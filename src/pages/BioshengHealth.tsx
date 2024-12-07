// src/pages/BioshengHealthDisplay.tsx

import React from 'react';
import { content } from '../content';
import { BioshengHealthContent } from '../content/types';
import styles from './BioshengHealthDisplay.module.css'; // 可选：使用 CSS Modules 进行样式管理

interface BioshengHealthProps {
    isChinese: boolean;
    isLargeFont: boolean;
}

const BioshengHealthDisplay: React.FC<BioshengHealthProps> = ({ isChinese, isLargeFont }) => {
    const language = isChinese ? 'zh' : 'en';
    const bioshengHealthContent: BioshengHealthContent = content[language].bioshengHealth;

    return (
        <div
            className={styles.container}
            style={{
                fontSize: isLargeFont ? '1.5rem' : '1rem',
            }}
        >
            <h1
                className={styles.title}
                style={{
                    fontSize: isLargeFont ? '3rem' : '2.5rem',
                }}
            >
                {bioshengHealthContent.title}
            </h1>

            {/* 渐入效果的标题和段落 */}
            {bioshengHealthContent.sections.map((section) => (
                <section
                    key={section.id}
                    id={section.id}
                    className={styles.section}
                    style={{
                        marginTop: '40px',
                        padding: '20px',
                        backgroundColor: '#ffffff',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <h2>{section.title}</h2>
                    <p>{section.content}</p>
                </section>
            ))}
        </div>
    );
};

export default BioshengHealthDisplay;
