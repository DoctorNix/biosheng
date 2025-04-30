import { ProductsContent } from './types';

const productContent: ProductsContent = {
  title: '產品展示',
  description: '百生健康提供結合現代科技與傳統養生的多樣化設備與體驗服務，致力於打造全方位的健康守護方案。',
  sections: [
    {
      category: '公司核心產品介紹',
      products: [
        {
          id: 0,
          name: 'N4 多功能脊椎理療儀',
          description: '多效合一的家用脊椎健康守護裝置，榮獲專業機構認可。',
          details: '結合溫熱理療、脊椎牽引矯正與低頻電刺激功能，N4 經新加坡專業手法治療師協會鑑定為「優良產品」，並授予「指定家用脊椎理療儀」推薦，是中老年族群日常調理首選。',
          image: '/images/products/n4.jpg',
        },
        {
          id: 0.5,
          name: 'HM-90 托瑪琳溫熱床墊',
          description: '遠紅外 + 托瑪琳雙效材料，打造舒眠理療新選擇。',
          details: '內建遠紅外線熱源與天然托瑪琳礦石，透過溫熱效應促進血液循環與新陳代謝，有效舒緩疲勞、改善睡眠，廣泛應用於百生健康實體門店與家庭養生場景。',
          image: '/images/products/hm90.jpg',
        },
        {
          id: 0.6,
          name: 'LED 光療與軟激光系列（合作開發）',
          description: '與馬寧博士團隊研發的非侵入性光學理療裝置，結合創新科技與臨床應用。',
          details: '以不同波段 LED 或低能量激光進行皮膚與深層組織調理，具備消炎、活化與恢復功能，未來將持續推廣於康復中心與家庭市場。',
          image: '/images/products/softlaser.jpg',
        }
      ]
    },
    {
      category: '功能保健產品',
      products: [
        {
          id: 3,
          name: 'Vision Essens 健視力',
          description: '',
          details: '',
          image: '/images/products/vision.jpg'
        },
        {
          id: 4,
          name: 'Joint Essens PRO 健關節',
          description: '',
          details: '',
          image: '/images/products/joint.jpg'
        },
        {
          id: 5,
          name: 'Cardiovascular Essens 健心腦',
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
          name: '靈芝孢子粉 Plus',
          description: '',
          details: '',
          image: '/images/products/lingzhi.jpg'
        }
      ]
    }
  ]
};

export default productContent;
