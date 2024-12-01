import React from 'react';

interface BioshengHealthProps {
    isChinese: boolean;
    isLargeFont: boolean;
}

const BioshengHealthDisplay: React.FC<BioshengHealthProps> = ({ isChinese, isLargeFont }) => {
    return (
        <div
            style={{
                padding: '40px 20px',
                fontSize: isLargeFont ? '1.5rem' : '1rem',
                backgroundColor: '#f9f9f9',
                minHeight: '100vh',
                lineHeight: '1.8',
            }}
        >
            <h1 style={{ textAlign: 'center', fontSize: isLargeFont ? '3rem' : '2.5rem' }}>
                {isChinese ? '我们的宗旨' : 'Our Mission'}
            </h1>

            {/* Introduction Section */}
            <section id="introduction">
                <h2>{isChinese ? '关于百生健康' : 'About Biosheng Health'}</h2>
                <p>{isChinese ? '百生健康致力于...' : 'Biosheng Health is dedicated to...'}</p>
            </section>

            {/* Core Philosophy Section */}
            <section
                id="core-concept"
                style={{
                    marginTop: '40px',
                    padding: '20px',
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
            >
                <h2>{isChinese ? '核心理念' : 'Core Philosophy'}</h2>
                <p>{isChinese ? '我们坚信...' : 'We believe...'}</p>
            </section>

            {/* Vision Section */}
            <section
                id="vision"
                style={{
                    marginTop: '40px',
                    padding: '20px',
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
            >
                <h2>{isChinese ? '我们的愿景' : 'Our Vision'}</h2>
                <p>{isChinese ? '成为健康行业的领导者...' : 'To become a leader in...'}</p>
            </section>
        </div>
    );
};

export default BioshengHealthDisplay;
