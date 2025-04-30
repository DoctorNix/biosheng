// content/functionalContent.zh.ts

import { FunctionalContent } from './types';

const functionalContent: FunctionalContent = {
    title: '功能性保健品',
    description: '我们的功能性保健品旨在提升您的健康和生活质量。',
    products: [
        {
            id: 1,
            name: '增强免疫力胶囊',
            description: '帮助增强免疫系统，预防疾病。',
            details: '增强免疫力胶囊采用维生素和矿物质混合配方，有助于增强免疫系统，预防疾病。',
            image: '/image/immune_capsule.jpg',
        },
        {
            id: 2,
            name: '改善睡眠片剂',
            description: '促进深度睡眠，提高睡眠质量。',
            details: '改善睡眠片剂旨在帮助您更快入睡，睡得更久，醒来感觉焕然一新。',
            image: '/image/sleep_pills.jpg',
        },
        // 添加更多产品
    ],
};

export default functionalContent;
