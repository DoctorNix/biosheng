import { CustomerEventsContent } from './types';

const customerEventContent: CustomerEventsContent = {
  title: 'Customer Community Moments',
  description: 'At Biosheng Health Centers, we treat every senior like family. Here are some joyful and heartwarming memories we’ve shared.',
  events: [
    {
      id: 1,
      title: 'Senior Birthday Celebration',
      description: 'A surprise birthday party held at the Jurong center for our beloved seniors. Everyone gathered to celebrate with laughter and love.',
      images: [
        '/images/customer-events/birthday1.jpg',
        '/images/customer-events/birthday2.jpg',
        '/images/customer-events/birthday3.jpg'
      ]
    },
    {
      id: 2,
      title: 'Chinese New Year Celebration',
      description: 'During the Lunar New Year, we invited the God of Wealth and lion dancers to bring festive blessings. The center was filled with joy and reunion.',
      images: [
        '/images/customer-events/newyear1.jpg',
        '/images/customer-events/newyear2.jpg'
      ]
    }
  ]
};

export default customerEventContent;
