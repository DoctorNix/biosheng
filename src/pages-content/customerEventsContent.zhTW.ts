import { CustomerEventsContent } from './types';

const customerEventContent: CustomerEventsContent = {
  title: '客戶社群精彩時刻',
  description: '在百生健康中心，我們和每位長者都像家人一樣相處，這裡記錄了一些歡笑與感動的美好瞬間。',
  events: [
    {
      id: 1,
      title: '長者生日會',
      description: '在裕廊中心為我們摯愛的長者舉辦的驚喜生日派對，大家齊聚一堂慶生，感受滿滿關愛與笑聲。',
      images: [
        '/images/customer-events/birthday1.jpg',
        '/images/customer-events/birthday2.jpg',
        '/images/customer-events/birthday3.jpg'
      ]
    },
    {
      id: 2,
      title: '新春聯歡會',
      description: '新春佳節，我們邀請財神爺與舞獅為長者帶來祝福，齊聚一堂歡慶新年，現場喜氣洋洋，充滿團圓氛圍。',
      images: [
        '/images/customer-events/newyear1.jpg',
        '/images/customer-events/newyear2.jpg'
      ]
    }
  ]
};

export default customerEventContent;

export {};
