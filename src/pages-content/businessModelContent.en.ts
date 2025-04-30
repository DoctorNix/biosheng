import { BusinessModelContent } from './types';

const businessModelContent: BusinessModelContent = {
    title: 'Business Model',
    description: 'Our business model combines online and offline resources to provide the best customer experience.',
    sections: [
        {
            id: 1,
            title: 'Health Industry Trends and Market Opportunities',
            description: 'With the rise of aging populations, demand for health management and wellness services is increasing rapidly. Elderly consumers are seeking high-quality, community-based health services. Supported by national policies such as “Healthy China” and “Smart Nation,” Biosheng Health’s service model has strong market potential.'
        },
        {
            id: 2,
            title: 'One-Stop Wellness Service Model',
            description: 'Our stores combine wellness products, diagnostic services, and guided therapies under one roof. Customers receive comprehensive care from assessment to recovery, supported by trained consultants and professional devices in a relaxing, comfortable environment.'
        },
        {
            id: 3,
            title: 'Community Engagement and Customer Loyalty',
            description: 'We organize regular health talks, community screenings, and social activities, making each store a wellness hub for seniors to connect, learn, and receive care. These programs strengthen client loyalty and encourage word-of-mouth referrals.'
        },
        {
            id: 4,
            title: 'Integrated Supply Chain and Omni-Channel Sales',
            description: 'We maintain an integrated supply chain combining self-owned brands, OEM partnerships, and selected wellness products. Our online store complements offline services, enabling fast, multi-channel fulfillment and customer support.'
        },
        {
            id: 5,
            title: 'Revenue Model and Investment Returns',
            description: 'Revenue streams include product sales, service packages, membership plans, and franchise models. Mature stores can reach multi-million revenue annually, with 25%-30% net margins and estimated return periods of 2–3 years.'
        },
        {
            id: 6,
            title: 'Brand Strategy and Expansion Plan',
            description: 'We aim to expand through both direct and franchise operations, with a goal to reach 20–30 stores. With centralized IT systems and strong branding, we plan to build a connected “network of 100 stores” in key regions.'
        },
        {
            id: 7,
            title: 'Store Locations and Service Experience',
            description: 'Our flagship stores are located in key urban centers, offering professional consultations and in-store therapies.',
            stores: [
                {
                    id: 1,
                    name: 'Biosheng Health – Jurong Gateway',
                    address: "Blk 134, Jurong Gateway Road, #02-309H, Singapore 600134",
                    phone: '6567 5070',
                    image: '/images/stores/jurong.jpg',
                },
                {
                    id: 2,
                    name: 'Biosheng Health – Tampines',
                    address: "3 Tampines Central 1, #08-03, Tampines Plaza 1, Singapore 529540",
                    phone: '6917 3360',
                    image: '/images/stores/tampines.jpg',
                },
                {
                    id: 3,
                    name: 'Biosheng Health – Chinatown',
                    address: "Blk 336, Smith Street, #02-300, New Bridge Center, Singapore 050336",
                    phone: '6535 4070',
                    image: '/images/stores/chinatown.jpg',
                }
            ]
        }
    ],
};

export default businessModelContent;