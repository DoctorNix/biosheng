import React from 'react';
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from 'antd';

interface BreadcrumbDisplayProps {
    isChinese: boolean;
}

const BreadcrumbDisplay: React.FC<BreadcrumbDisplayProps> = ({ isChinese }) => {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter((segment) => segment);

    const translations: Record<string, string> = {
        '': isChinese ? '首页' : 'Home',
        'about-us': isChinese ? '关于我们' : 'About Us',
        functional: isChinese ? '功能性保健品' : 'Functional Health Products',
        'daily-health': isChinese ? '日常保健' : 'Daily Care',
        'core-concept': isChinese ? '我们的核心理念' : 'Our Core Concept',
        'customer-events': isChinese ? '客户群体和活动' : 'Our Customer Groups and Events',
        'business-model': isChinese ? '经营模式' : 'Our Business Model',
        contact: isChinese ? '联系我们' : 'Contact Us',
        products: isChinese ? '保健品': 'Health Products',
    };

    const breadcrumbItems = [
        { path: '/', label: translations[''] },
        ...pathSegments.map((segment) => ({
            path: `/${segment}`,
            label: translations[segment as keyof typeof translations] || segment,
        })),
    ];

    return (
        <Breadcrumb style={{ margin: '16px 24px' }}>
            {breadcrumbItems.map((item, index) => (
                <Breadcrumb.Item key={index}>
                    {index === breadcrumbItems.length - 1 ? (
                        <span>{item.label}</span>
                    ) : (
                        <a href={item.path}>{item.label}</a>
                    )}
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
    );
};

export default BreadcrumbDisplay;
