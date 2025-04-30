import { CustomerEventsContent } from './types';

const customerEventContent: CustomerEventsContent = {
  title: '客户社区精彩时刻',
  description: '在百生健康中心，我们和每位长者都像家人一样相处，这里记录了一些欢笑与感动的美好瞬间。',
  events: [
    {
      id: 1,
      title: '长者生日会',
      description: '在裕廊中心为我们挚爱的长者举办的惊喜生日派对，大家齐聚一堂庆生，感受满满关爱与笑声。',
      images: [
        '/images/customer-events/birthday1.jpg',
        '/images/customer-events/birthday2.jpg',
        '/images/customer-events/birthday3.jpg'
      ]
    },
    {
      id: 2,
      title: '新春联欢会',
      description: '新春佳节，我们邀请财神爷与舞狮为长者带来祝福，齐聚一堂欢庆新年，现场喜气洋洋，充满团圆氛围。',
      images: [
        '/images/customer-events/newyear1.jpg',
        '/images/customer-events/newyear2.jpg'
      ]
    }
  ]
};

export default customerEventContent;

export {};