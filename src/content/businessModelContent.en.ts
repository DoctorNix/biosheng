import { BusinessModelContent } from './types';

const businessModelContent: BusinessModelContent = {
    title: 'Business Model',
    description: 'Our business model combines online and offline resources to provide the best customer experience.',
    sections: [
        {
            id: 1,
            title: 'Online Store',
            description: 'We offer a convenient online shopping experience to purchase our products anytime, anywhere.',
            //image: './images/test1.png',
            url: 'https://www.business.com',
        },
        {
            id: 2,
            title: 'Offline Stores',
            description: 'Our offline stores are located nationwide, providing professional health consultation services.',
            // image: '/images/offline_store.jpg',
            stores: [
                {
                    id: 1,
                    name: 'Jurong East',
                    address: '123 Example Road, Chaoyang District, Beijing',
                    phone: '+86-10-12345678',
                    image: '/images/store_beijing.jpg',
                    description: 'Our flagship store offering comprehensive health services.',
                },
                {
                    id: 2,
                    name: 'Chinatown',
                    address: '456 Example Avenue, xxxx, Singapore',
                    phone: '+86-21-87654321',
                    image: '/images/store_shanghai.jpg',
                    description: 'A high-end health experience store located in the heart of Shanghai.',
                },
                {
                    id: 3,
                    name: 'JRE',
                    address: ' sdajda',
                    phone: '123444',
                    image: '/images/store_JRE.jpg',
                    description: '......',
                },
            ],
        },
        // Other sections
    ],
};

export default businessModelContent;