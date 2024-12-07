export interface AboutUsContent {
    title: string;
    description: string;
    coreValuesTitle: string;
    coreValuesDescription: string;
    teamTitle: string;
    teamDescription: string;
}

export interface ProductItem {
    id: number;
    name: string;
    description: string;
    image: string; // 图片的 URL 或路径
}

export interface DescriptionItem {
    id: number;
    name: string;
    description: string;
    //image: string;
}

export interface ProductsContent {
    title: string;
    description: string;
    products: ProductItem[];
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

export interface EndoAngelContent{
    title: string;
    // image: string;
    description: string;
}

export interface CoreConceptContent{
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
    date: string;
    description: string;
    image: string; // 图片的 URL 或路径
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
    dailyCare: DailyCareContent;
    functional: FunctionalContent;
    endoAngel: EndoAngelContent;
    coreConcept: CoreConceptContent;
    businessModel: BusinessModelContent;
    events: EventsContent;
    bioshengHealth: BioshengHealthContent;
}