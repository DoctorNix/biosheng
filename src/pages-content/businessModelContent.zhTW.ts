import { BusinessModelContent } from './types';

const businessModelContent: BusinessModelContent = {
  title: '營運模式',
  description: '我們採用標準化與個性化並行的營運模式，透過一致的服務流程與科技工具，為客戶帶來穩定又貼心的健康照護體驗。',
  sections: [
    {
      id: 1,
      title: '康養產業趨勢與市場機會',
      description: '隨著人口老化加劇，健康照護與康復保健需求快速成長。中老年族群特別重視養生保健與生活品質，而政府在推動“健康城市”與“健康新加坡”等政策下，為康養產業提供了政策與需求雙重推力。這為百生康養體驗店的發展創造了龐大空間。'
    },
    {
      id: 2,
      title: '一站式健康服務模式',
      description: '百生康養體驗店結合產品展示、健康諮詢、康復理療與健康教育於一體，讓顧客在舒適的空間中完成檢測、體驗、購買與跟進，實現從預防、保健到康復的完整健康照護流程。'
    },
    {
      id: 3,
      title: '社區互動與顧客黏著',
      description: '門店定期舉辦健康講座、公益檢測與社區交流活動，提供長者參與的平台，增強門店與顧客之間的連結，建立高黏性口碑與回訪率。'
    },
    {
      id: 4,
      title: '供應鏈整合與通路聯動',
      description: '透過自建供應鏈，整合自有品牌、代銷品牌與OEM產品，同時結合線上商城與門市通路，打造多元化收入來源並提升營運效率。'
    },
    {
      id: 5,
      title: '獲利模式與投資回報',
      description: '營收來源包括產品銷售、理療服務、會員制度與加盟收入。成熟門市年營收可達數百萬新幣，毛利高、回本期短，具備靈活的股權轉讓與退場機制。'
    },
    {
      id: 6,
      title: '品牌擴展與未來布局',
      description: '計劃以“直營+加盟”模式擴展至 20~30 家門店，並透過智慧系統與品牌整合推動“百店聯動”戰略，打造區域性康養品牌龍頭。'
    },
    {
      id: 7,
      title: '門市據點與顧客體驗',
      description: '我們在新加坡主要核心區域設有門市，方便顧客就近體驗健康檢測與專業理療服務。',
      stores: [
        {
          id: 1,
          name: '百生健康・裕廊東中心店',
          address: "Blk 134, Jurong Gateway Road, #02-309H, S' 600134",
          phone: '6567 5070',
          image: '/images/stores/jurong.jpg'
        },
        {
          id: 2,
          name: '百生健康・淡濱尼門店',
          address: "3 Tampines Central 1, #08-03, Tampines Plaza 1, S' 529540",
          phone: '6917 3360',
          image: '/images/stores/tampines.jpg'
        },
        {
          id: 3,
          name: '百生健康・牛車水門店',
          address: "Blk 336, Smith Street, #02-300, New Bridge Center, S' 050336",
          phone: '6535 4070',
          image: '/images/stores/chinatown.jpg'
        }
      ]
    }
  ]
};

export default businessModelContent;
