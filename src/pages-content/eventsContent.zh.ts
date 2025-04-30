import { EventsContent } from './types';

const eventsContent: EventsContent = {
    title: '对外交流',
    description: '我们积极参与各类医疗会议和合作交流活动，和伙伴们一起探索健康的更多可能，让科技与服务走进更多人的生活。',
    events: [
        {
            id: 1,
            title: '百生医疗入驻新加坡国立大学医院（NUH）',
            description: '百生医疗正式入驻新加坡国立大学医院，迈出与本地医疗系统深度合作的重要一步。',
            images: [
                '/images/events/nuh_entry1.jpg',
                '/images/events/nuh_entry2.jpg'
            ],
        },
        {
            id: 2,
            title: '签署 EndoAngel 战略合作协议',
            description: '百生健康与武汉楚精灵（EndoAngel）达成 AI 医疗技术合作协议。',
            images: ['/images/events/contract_endoangel.jpg',
                '/images/events/contract_2.jpg',
            ],
        },
        {
            id: 3,
            title: '第十五届国际手法医学与脊柱疗法学术大会（2019年广州）',
            description: '百生团队参加第十五届国际手法医学与脊柱疗法大会，展示康复产品并与多国专家交流。',
            images: [
                '/images/events/manual_medicine_1.jpg',
                '/images/events/19.jpg',
            ],
        },
        {
            id: 4,
            title: 'IDEAS 国际消化内镜人工智能会议（2023年9月）',
            description: '百生受邀参与 IDEAS 会议，展示 EndoAngel 合作产品，推广 AI 赋能医疗。',
            images: [
                '/images/events/ideas_1.jpg',
                '/images/events/ideas_2.jpg',
                '/images/events/ideas_3.jpg'
            ],
        },
        {
            id: 5,
            title: '马来西亚内镜年会（马大医学院，2024年5月）',
            description: '百生团队出席马来西亚内镜年会，推动区域合作并展示最新技术成果。',
            images: [
                '/images/events/malaysia_endoscopy_1.jpg',
                '/images/events/malaysia_endoscopy_2.jpg',
                '/images/events/malaysia_endoscopy_3.jpg'
            ],
        }
    ],
};

export default eventsContent;