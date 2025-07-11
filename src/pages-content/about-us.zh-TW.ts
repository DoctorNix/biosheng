import { AboutUsContent } from './types';

const content: AboutUsContent = {
  title: "關於我們",
  sections: [
    {
      heading: "公司簡介",
      paragraphs: [
        "百生醫療成立於2012年，總部位於新加坡，專注於提供高品質的中老年康養解決方案和服務。",
        "我們的核心業務包括醫療服務、保健產品、醫療器械、營養保健食品、健康諮詢及康養旅遊等。"
      ]
    },
    {
      heading: "企業使命與願景",
      paragraphs: [
        "我們的使命是「關懷生命，服務健康」，致力於以創新驅動發展，以誠信贏得信任。",
        "我們的願景是成為全球領先的綜合健康管理品牌，持續為社會創造價值。"
      ]
    },
    {
      heading: "創始人介紹",
      paragraphs: [
        "李祉潤先生是百生健康創辦人，擁有新加坡國立大學MBA學位，長期深耕於醫療健康管理領域，具備豐富的企業營運經驗。",
        "他不僅是醫療行業的領導者，也積極參與新加坡多個社會與商會組織。"
      ],
      image: "./images/founder-li.png",
      resume: [
        "新加坡國立大學（NUS） MBA碩士",
        "Biosheng Health 百生健康 創辦人",
        "曾任馬光中醫集團 CEO",
        "世界手法醫學聯盟 副主席",
        "世界脊椎健康聯盟新加坡總會 副會長",
        "新加坡專業手法治療師協會 會長",
        "新加坡哈爾濱工業大學校友會 會長",
        "南洋漳州商會 副會長",
        "新加坡裕華區公民諮詢委員會 委員",
        "新加坡裕廊東中心商業城商聯會 總務長"
      ]
    },
    // {
    //   heading: "核心產品",
    //   paragraphs: [
    //     "公司的旗艦產品包括N4多功能脊椎理療床、HM-90托瑪琳溫熱床墊，均獲得新加坡專業手法治療師協會推薦。",
    //     "此外，公司亦與激光醫學專家馬寧博士合作，推出家用紅藍光光療設備，深受市場認可。"
    //   ]
    // }
  ]
};

export default content;