// content/productsContent.en.ts

import { ProductsContent } from './types';

const productsContent: ProductsContent = {
    title: 'Our Products',
    description: 'We offer a variety of functional supplements and daily health products to meet your health needs.',
    products: [
        {
            id: 1,
            name: 'Functional Supplement A',
            description: 'Boosts immunity and improves sleep quality.',
            image: 'path/to/imageA.jpg',
        },
        {
            id: 2,
            name: 'Daily Health Product B',
            description: 'Supplements vitamins to maintain good health.',
            image: 'path/to/imageB.jpg',
        },
        // Add more products
    ],
};

export default productsContent;
