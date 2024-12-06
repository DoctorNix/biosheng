import { BusinessModelContent } from './types';
import {useHref} from "react-router-dom";

const businessModelContent: BusinessModelContent = {
    title: '经营模式',
    description: '我们的经营模式结合了线上和线下资源，提供最佳的客户体验。',
    sections: [
        {
            id: 1,
            title: '线上商城',
            description: '我们提供便捷的线上购物体验，随时随地购买我们的产品。',
            image: './images/test1.png',
            url: 'https://www.business.com',
        },
        {
            id: 2,
            title: '线下门店',
            description: '我们的线下门店遍布全国，提供专业的健康咨询服务。',
            image: '/images/offline_store.jpg',
            stores: [
                {
                    id: 1,
                    name: '裕廊东店',
                    address: 'Jurong East',
                    phone: '010-12345678',
                    image: '/images/store_beijing.jpg',
                    description: '我们的旗舰店，提供全方位的健康服务。',
                },
                {
                    id: 2,
                    name: '百生健康上海店',
                    address: '上海市浦东新区示例大道456号',
                    phone: '021-87654321',
                    image: '/images/store_shanghai.jpg',
                    description: '位于上海市中心的高端健康体验店。',
                },
                // 添加更多门店
            ],
        },
        // 其他部分
    ],
};

export default businessModelContent;