import { StoreInfo } from './types';

const contactContent = {
    email: 'wesleyli@biosheng.com',
    facebook: 'https://www.facebook.com/Biosheng/',
    stores: [
      {
        id: 1,
        name: '百生健康·裕廊东中心店',
        address: "Blk 134, Jurong Gateway Road, #02-309H, S' 600134",
        phone: '6567 5070',
        image: './images/stores/jurong.jpg'
      },
      {
        id: 2,
        name: '百生健康·淡滨尼门店',
        address: "3 Tampines Central 1, #08-03, Tampines Plaza 1, S' 529540",
        phone: '6917 3360',
        image: '/images/stores/Tampines.jpg'
      },
      {
        id: 3,
        name: '百生健康·牛车水门店',
        address: "Blk 336, Smith Street, #02-300, New Bridge Center, S' 050336",
        phone: '6535 4070',
        image: './images/stores/chinatown.jpg'
      }
    ] satisfies StoreInfo[]
  };
  
  export default contactContent;
  