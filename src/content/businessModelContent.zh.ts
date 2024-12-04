import { BusinessModelContent } from './types';

const businessModelContent: BusinessModelContent = {
    title: '经营模式',
    description: '我们的经营模式结合了线上和线下资源，提供最佳的客户体验。',
    sections: [
        {
            id: 1,
            title: '线上商城',
            description: '我们提供便捷的线上购物体验，随时随地购买我们的产品。',
            image: 'src/image/test2.png',
        },
        {
            id: 2,
            title: '线下门店',
            description: '我们的线下门店遍布全国，提供专业的健康咨询服务。',
            image: 'src/image/test1.png',
        },
        // 添加更多部分
    ],
};

export default businessModelContent;