import React, { CSSProperties } from 'react';

interface FooterProps {
    isChinese: boolean;
    isLargeFont: boolean;
}

const Footer: React.FC<FooterProps> = ({ isChinese, isLargeFont }) => {
    return (
        <footer
            style={{
                backgroundColor: '#61CE70',
                color: 'black',
                textAlign: 'center',
                padding: isLargeFont ? '30px' : '20px',
                fontSize: isLargeFont ? '1.5rem' : '1rem',
                borderTop: '2px solid #808080',
            }}
        >
            <p>
                {isChinese
                    ? '友情链接：武汉楚精灵 | 北京百生健康 | 更多合作伙伴…'
                    : 'Friendly Links To: Wuhan EndoAngel Medical Technology Co., LTD | Beijing Biosheng Health | More Partners…'}
            </p>
            <p>
                {isChinese
                    ? '版权所有 © 2024 百生健康. 保留所有权利。'
                    : '© 2024 Biosheng Health. All Rights Reserved.'}
            </p>
        </footer>
    );
};

export default Footer;
