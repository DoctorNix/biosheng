export interface AboutUsSection {
    heading: string;
    paragraphs: string[];
    image?: string;        // 可选：显示图片（例如创始人头像）
    resume?: string[];     // 可选：履历项目（用于列表显示）
}

export interface ProductSection {
    category: string;
    products: ProductItem[];
}
  
export interface ProductsContent {
    title: string;
    description: string;
    sections: ProductSection[];
}

export interface AboutUsContent {
    title: string;
    sections: AboutUsSection[];
}

export interface ProductItem {
    id: number;
    name: string;
    description: string;
    details: string;
    image: string; // 图片的 URL 或路径
}

export interface DescriptionItem {
    id: number;
    name: string;
    description: string;
    //image: string;
}

export interface FunctionalContent {
    title: string;
    description: string;
    products: ProductItem[];
}

export interface DailyCareContent {
    title: string;
    description: string;
    products: ProductItem[];
}

export interface EndoAngelContent {
    title: string;
    description: string;
    images?: string[]; // 可选：产品或功能图片数组
    websiteUrl?: string; // 可选：官网链接
    productUrl?: string; // 可选：产品详情页链接
}

export interface CoreConceptContent {
    title: string;
    coredescription: DescriptionItem[];
}

export interface StoreInfo {
    id: number;
    name: string;
    address: string;
    phone: string;
    image?: string; // 门店图片
    url?: string;
    description?: string; // 可选的描述
}

export interface BusinessModelItem {
    id: number;
    title: string;
    description?: string;
    image?: string; // 图片的 URL 或路径
    url?: string; //线上商城的url（目前）
    stores?: StoreInfo[]; // 添加 stores 字段，可能为 undefined
}

export interface BusinessModelContent {
    title: string;
    description: string;
    sections: BusinessModelItem[];
}

export interface EventItem {
    id: number;
    title: string;
    //date: string;
    description: string;
    images: string[]; // 多图展示
}

export interface CustomerEventItem {
    id: number;
    title: string;
    //date: string;
    description: string;
    images: string[]; // 多图展示
}

export interface CustomerEventsContent {
    title: string;
    description: string;
    events: CustomerEventItem[];
}

export interface EventsContent {
    title: string;
    description: string;
    events: EventItem[];
}

export interface Section {
    id: string;
    title: string;
    content: string;
}

export interface BioshengHealthContent {
    title: string;
    sections: Section[];
}

export interface Content {
    aboutUs: AboutUsContent;
    products: ProductsContent;
    endoAngel: EndoAngelContent;
    coreConcept: CoreConceptContent;
    businessModel: BusinessModelContent;
    events: EventsContent;
    bioshengHealth: BioshengHealthContent;
    customerEvents: CustomerEventsContent;
}
