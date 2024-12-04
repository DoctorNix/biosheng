import React from 'react';
import {content} from '../content';
import {EndoAngelContent} from '../content/types';

interface EndoAngelProps {
    isLargeFont: boolean;
    isChinese: boolean;
}

const EndoAngel: React.FC<EndoAngelProps> = ({isLargeFont,isChinese}) => {
    const language = isChinese ? 'zh' : 'en';
    const endoAngelContent: EndoAngelContent = content[language].endoAngel;

    return (
        <div
            style={{
                padding: '20px',
                minHeight: '100vh',
                fontSize: isLargeFont ? '1.5rem' : '1rem',
            }}
        >
            <h1
                style={{
                    fontSize: isLargeFont ? '3.5rem' : '3rem',
                    marginBottom: '20px',
                    textAlign: 'center',
                }}
            >
                {endoAngelContent.title}
            </h1>
            <p style={{textAlign: 'center'}}>{endoAngelContent.description}</p>
        </div>
);
};

export default EndoAngel;