// content/productsContent.zh.ts

import { ProductsContent } from './types';

const productsContent: ProductsContent = {
    title: '产品中心',
    description: '我们提供多种功能性保健品和日常保健品，满足您的健康需求。',
    products: [
        {
            id: 1,
            name: '功能性保健品 A',
            description: '提高免疫力，改善睡眠质量。',
            image: 'path/to/imageA.jpg',
        },
        {
            id: 2,
            name: '日常保健品 B',
            description: '补充维生素，保持身体健康。',
            image: 'path/to/imageB.jpg',
        },
        // 添加更多产品
    ],
};

export default productsContent;
