import { EventsContent } from './types';

const eventsContent: EventsContent = {
    title: '客户活动',
    description: '我们定期举办各种客户活动，增进与客户的交流和互动。',
    events: [
        {
            id: 1,
            title: '健康讲座',
            date: '2023-09-15',
            description: '邀请知名专家分享健康知识。',
            image: '/images/health_seminar.jpg',
        },
        {
            id: 2,
            title: '新品发布会',
            date: '2023-10-10',
            description: '展示我们最新的产品系列。',
            image: '/images/product_launch.jpg',
        },
        // 添加更多活动
    ],
};

export default eventsContent;