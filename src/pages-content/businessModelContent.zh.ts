import { BusinessModelContent } from './types';

const businessModelContent: BusinessModelContent = {
  title: '经营模式',
  description: '我们推行标准化运营体系，结合科技化管理与线下门店服务，确保客户在各地都能享受一致、高品质的健康体验。',
  sections: [
    {
      id: 1,
      title: '康养产业趋势与市场机遇',
      description: '随着老龄化社会加剧，健康养老成为核心议题。中老年人对健康管理、康复保健的需求日益增长，他们更渴望高品质、便捷的社区健康服务。政府在“健康中国”战略支持下，也为康养服务提供政策支持，这为百生康养体验店创造了广阔的发展空间。'
    },
    {
      id: 2,
      title: '一站式健康服务模式',
      description: '百生康养体验店融合产品、服务与信息传播于一体，提供健康检测、康复调理、膳食指导与社群活动等全方位服务。每家门店配备专业顾问与设备，实现从预防、保健到康复的闭环健康管理体验。'
    },
    {
      id: 3,
      title: '社区融合与客户忠诚机制',
      description: '门店定期举办健康讲座、公益义诊和社交活动，形成老年社群交流空间。客户在此不仅获得健康服务，还能结识朋友、参与活动，从而形成口碑传播与高客户粘性。'
    },
    {
      id: 4,
      title: '供应链整合与线上线下联动',
      description: '百生自建供应链，严选功能性保健品、智能器械与生活用品，结合自营品牌与代销品牌。借助线上商城与门店联动，实现高效率运营与多渠道变现。'
    },
    {
      id: 5,
      title: '盈利模式与投资回报',
      description: '公司收入来源多元，包括产品销售、服务费用、会员/加盟体系。成熟门店年营收可达数百万，净利润率高达25%-30%。预计2~3年回本，具备IPO退出或股权转让机制，回报高且灵活。'
    },
    {
      id: 6,
      title: '品牌战略与扩张计划',
      description: '未来将通过“直营+加盟”模式拓展门店至20~30家，并逐步实现全国联网“百店联动”，形成规模化品牌影响力，为上市打下基础。'
    },
    {
      id: 7,
      title: '门店分布与客户体验',
      description: '我们在新加坡主要核心区域设有实体门店，为客户提供便利的到店服务与深度调理体验。',
      stores: [
        {
          id: 1,
          name: '百生健康·裕廊东中心店',
          address: "Blk 134, Jurong Gateway Road, #02-309H, S' 600134",
          phone: '6567 5070',
          image: '/images/stores/jurong.jpg',
        },
        {
          id: 2,
          name: '百生健康·淡滨尼门店',
          address: "3 Tampines Central 1, #08-03, Tampines Plaza 1, S' 529540",
          phone: '6917 3360',
          image: '/images/stores/tampines.jpg',
        },
        {
          id: 3,
          name: '百生健康·牛车水门店',
          address: "Blk 336, Smith Street, #02-300, New Bridge Center, S' 050336",
          phone: '6535 4070',
          image: '/images/stores/chinatown.jpg',
        }
      ]
    }
  ]
};

export default businessModelContent;