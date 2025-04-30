// content/functionalContent.en.ts

import { FunctionalContent } from './types';

const functionalContent: FunctionalContent = {
    title: 'Functional Supplements',
    description: 'Our functional supplements are designed to enhance your health and quality of life.',
    products: [
        {
            id: 1,
            name: 'Immune Boost Capsules',
            description: 'Helps strengthen the immune system and prevent illnesses.',
            details: 'Immune Boost Capsules are formulated with a blend of vitamins and minerals to help strengthen the immune system and prevent illnesses.',
            image: 'path/to/immune_capsule.jpg',
        },
        {
            id: 2,
            name: 'Sleep Improvement Tablets',
            description: 'Promotes deep sleep and improves sleep quality.',
            details: 'Sleep Improvement Tablets are designed to help you fall asleep faster, stay asleep longer, and wake up feeling refreshed.',
            image: '/image/sleep_pills.jpg',
        },
        // Add more products
    ],
};

export default functionalContent;
