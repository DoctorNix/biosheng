import { ProductsContent } from './types';

const productsContent: ProductsContent = {
  title: '产品展示',
  description: '百生健康精选多样化保健设备与康复服务，融合现代科技与传统调理，提供全面健康支持。',
  sections: [
    {
      category: '公司核心产品介绍',
      products: [
        {
          id: 0,
          name: 'N4 多功能脊椎理疗仪',
          description: '多效合一的家用脊椎健康守护装置，荣获专业机构认证推荐。',
          details: '集温热理疗、脊椎牵引矫正与低频电刺激功能于一体，N4 经新加坡专业手法治疗师协会鉴定为“优良产品”，并授予“指定家用脊椎理疗仪”推荐，是中老年日常调理首选。',
          image: '/images/products/n4.jpg'
        },
        {
          id: 0.5,
          name: 'HM-90 托玛琳温热床垫',
          description: '远红外热源结合天然托玛琳材料，促进血液循环与睡眠改善。',
          details: '床垫采用远红外加热元件与托玛琳矿石协同作用，提供深层热疗，改善血液循环与代谢，适合家庭与康养门店使用。',
          image: '/images/products/hm90.jpg'
        },
        {
          id: 0.6,
          name: 'LED 光疗与软激光系列',
          description: '与马宁博士团队联合研发，结合前沿光学科技应用于健康管理。',
          details: '该系列光疗设备结合特定波段 LED 与低能量激光技术，具有促进组织修复、消炎、活化等功效，适用于肌肉疲劳与皮肤修护，广泛布局未来居家医疗与康复中心场景。',
          image: '/images/products/softlaser.jpg'
        }
      ]
    },
    {
      category: '功能保健产品',
      products: [
        {
          id: 3,
          name: 'Vision Essens 健视力',
          description: '',
          details: '',
          image: '/images/products/vision.jpg'
        },
        {
          id: 4,
          name: 'Joint Essens PRO 健关节',
          description: '',
          details: '',
          image: '/images/products/joint.jpg'
        },
        {
          id: 5,
          name: 'Cardiovascular Essens 健心脑',
          description: '',
          details: '',
          image: '/images/products/heart.jpg'
        },
        {
          id: 6,
          name: 'Vegetarian Omega Essens 健血管',
          description: '',
          details: '',
          image: '/images/products/omega.jpg'
        },
        {
          id: 7,
          name: '灵芝孢子粉 Plus',
          description: '',
          details: '',
          image: '/images/products/lingzhi.jpg'
        }
      ]
    }
  ]
};

export default productsContent;
