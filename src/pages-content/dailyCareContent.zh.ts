import { DailyCareContent } from './types';

const dailyCareContent: DailyCareContent = {
    title: '日常保健',
    description: '我们的日常保健品帮助您保持日常健康。',
    products: [
        {
            id: 1,
            name: '多种维生素',
            description: '提供每日必需的维生素和矿物质。',
            details: '多种维生素是一种综合维生素补充剂，提供每日必需的维生素和矿物质，有助于维持身体健康。',
            image: 'path/to/multivitamins.jpg',
        },
        {
            id: 2,
            name: '益生菌',
            description: '促进肠道健康，增强消化功能。',
            details: '益生菌是一种有益的细菌，有助于维持肠道菌群平衡，增强消化功能，提高免疫力。',
            image: 'path/to/probiotics.jpg',
        },
        // 添加更多产品
    ],
};

export default dailyCareContent;
