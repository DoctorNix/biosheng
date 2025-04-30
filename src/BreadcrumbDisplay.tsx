import React from 'react';
import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  language: 'zh-CN' | 'zh-TW' | 'en';
}

const BreadcrumbDisplay: React.FC<Props> = ({ language }) => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter(i => i);

  const breadcrumbNameMap: Record<string, Record<string, string>> = {
    '/': { 'zh-CN': '首页', 'zh-TW': '首頁', 'en': 'Home' },
    '/about-us': { 'zh-CN': '关于我们', 'zh-TW': '關於我們', 'en': 'About Us' },
    '/biosheng-healthcare': { 'zh-CN': '百生医疗', 'zh-TW': '百生醫療', 'en': 'Biosheng Healthcare' },
    '/products': { 'zh-CN': '保健品', 'zh-TW': '保健品', 'en': 'Products' },
    '/products/functional': { 'zh-CN': '功能性保健品', 'zh-TW': '功能性保健品', 'en': 'Functional Products' },
    '/products/daily-care': { 'zh-CN': '日常保健', 'zh-TW': '日常保健', 'en': 'Daily Care' },
    '/customer-events': { 'zh-CN': '对外交流', 'zh-TW': '對外交流', 'en': 'External Collaborations' },
    '/core-concept': { 'zh-CN': '核心理念', 'zh-TW': '核心理念', 'en': 'Core Concept' },
    '/business-model': { 'zh-CN': '经营模式', 'zh-TW': '經營模式', 'en': 'Business Model' },
    '/endoangel-full': { 'zh-CN': 'EndoAngel 内镜精灵', 'zh-TW': 'EndoAngel 內鏡精靈', 'en': 'EndoAngel' },
    '/contact': { 'zh-CN': '联系我们', 'zh-TW': '聯繫我們', 'en': 'Contact' },
    '/customer-care': { 'zh-CN': '客户关怀', 'zh-TW': '客戶關懷', 'en': 'Customer Care' },
  };

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    const isLast = index === pathSnippets.length - 1;
    const title = breadcrumbNameMap[url] ? breadcrumbNameMap[url][language] : undefined;

    return title ? (
      <Breadcrumb.Item key={url}>
        {isLast ? (
          title
        ) : (
          <Link to={url}>{title}</Link>
        )}
      </Breadcrumb.Item>
    ) : null;
  }).filter(Boolean); // Removes null values if any

  const homeBreadcrumb = (
    <Breadcrumb.Item key="home">
      <Link to="/">{breadcrumbNameMap['/'][language]}</Link>
    </Breadcrumb.Item>
  );

  const breadcrumbItems = [homeBreadcrumb, ...extraBreadcrumbItems];

  return (
    <Breadcrumb style={{ marginBottom: '16px' }}>
      {breadcrumbItems}
    </Breadcrumb>
  );
};

export default BreadcrumbDisplay;