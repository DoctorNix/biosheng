import { DailyCareContent } from './types';

const dailyCareContent: DailyCareContent = {
    title: 'Daily Care',
    description: 'Our daily care products help you maintain everyday health.',
    products: [
        {
            id: 1,
            name: 'Multivitamins',
            description: 'Provides essential daily vitamins and minerals.',
            details: 'Multivitamins are a comprehensive vitamin supplement that provides essential daily vitamins and minerals to help maintain overall health.',
            image: 'path/to/multivitamins.jpg',
        },
        {
            id: 2,
            name: 'Probiotics',
            description: 'Promotes gut health and enhances digestion.',
            details: 'Probiotics are beneficial bacteria that help maintain a balanced gut flora, enhance digestion, and boost immunity.',
            image: 'path/to/probiotics.jpg',
        },
        // Add more products
    ],
};

export default dailyCareContent;
