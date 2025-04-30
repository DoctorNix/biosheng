import { AboutUsContent } from './types';

const content: AboutUsContent = {
  title: "About Us",
  sections: [
    {
      heading: "Company Overview",
      paragraphs: [
        "Biosheng Healthcare was founded in 2012 and is headquartered in Singapore. We specialize in providing high-quality wellness solutions and services for the elderly.",
        "Our core business includes medical services, healthcare products, medical devices, nutritional supplements, health consulting, and wellness tourism."
      ]
    },
    {
      heading: "Our Mission & Vision",
      paragraphs: [
        "Our mission is 'Care for Life, Serve Health', driven by innovation and built on trust.",
        "Our vision is to become a globally leading brand in integrated health management and continuously create social value."
      ]
    },
    {
      heading: "Founder Bio",
      paragraphs: [
        "Mr. Li Zhirun is the founder of Biosheng Healthcare. He holds an MBA from the National University of Singapore (NUS) and has a long history in healthcare business management.",
        "He is not only a leader in the healthcare sector but also actively participates in numerous social and business organizations in Singapore."
      ],
      image: "/images/founder-li.png",
      resume: [
        "MBA, National University of Singapore (NUS)",
        "Founder, Biosheng Healthcare",
        "Former CEO, Ma Kuang TCM Medical Group",
        "Vice Chairman, World Federation of Manual Medicine",
        "Vice President, Singapore Spinal Health Association",
        "President, Singapore Association of Manual Therapists",
        "President, Singapore Alumni Association of Harbin Institute of Technology",
        "Vice President, Nanyang Zhangzhou Chamber of Commerce",
        "Member, Yuhua Constituency Citizens' Consultative Committee",
        "Secretary General, Jurong East Central Business Association"
      ]
    },
    // {
    //   heading: "Core Products",
    //   paragraphs: [
    //     "Our flagship products include the N4 multifunctional spinal therapy bed and HM-90 tourmaline heating mattress, both recommended by the Singapore Association of Professional Manual Therapists.",
    //     "We also collaborate with laser medicine expert Dr. Ma Ning to develop and launch at-home red and blue phototherapy devices, which are well received by the market."
    //   ]
    // }
  ]
};

export default content;