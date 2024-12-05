import { EventsContent } from './types';

const eventsContent: EventsContent = {
    title: 'Customer Events',
    description: 'We regularly host various customer events to enhance communication and interaction.',
    events: [
        {
            id: 1,
            title: 'Health Seminar',
            date: '2023-09-15',
            description: 'Inviting renowned experts to share health knowledge.',
            image: '/images/health_seminar.jpg',
        },
        {
            id: 2,
            title: 'Product Launch',
            date: '2023-10-10',
            description: 'Showcasing our latest product line.',
            image: '/images/product_launch.jpg',
        },
        // Add more events
    ],
};

export default eventsContent;
