import React, { CSSProperties } from 'react';
import { SearchOutlined} from "@ant-design/icons";
import {Button, Flex, Tooltip} from "antd";

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
                {isChinese ? (
                    <>
                        友情链接：
                        <a href="https://www.endoangel.cn/" target="_blank" rel="noopener noreferrer">
                            武汉楚精灵
                        </a>
                        {/*{' | '}*/}
                        {/*<a href="https://www.biosheng.com" target="_blank" rel="noopener noreferrer">*/}
                        {/*    北京百生健康*/}
                        {/*</a>*/}
                        {' | 更多合作伙伴…'}
                    </>
                ) : (
                    <>
                        Friendly Links To:{' '}
                        <a href="https://www.endoangel.cn/" target="_blank" rel="noopener noreferrer">
                            Wuhan EndoAngel Medical Technology Co., LTD
                        </a>
                        {/*{' | '}*/}
                        {/*<a href="https://www.biosheng.com/en" target="_blank" rel="noopener noreferrer">*/}
                        {/*    Beijing Biosheng Health*/}
                        {/*</a>*/}
                        {' | More Partners…'}
                    </>
                )}
            </p>
            <p>

                {isChinese
                    ? '版权所有©2024 百生健康. 保留所有权利。'
                    : 'Copyrights©2024 Biosheng Health. All Rights Reserved.'}
            </p>
        </footer>
    );
};

export default Footer;
