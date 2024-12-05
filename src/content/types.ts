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

export interface BusinessModelItem {
    id: number;
    title: string;
    description: string;
    image: string; // 图片的 URL 或路径
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

export interface Content {
    aboutUs: AboutUsContent;
    products: ProductsContent;
    dailyCare: DailyCareContent;
    functional: FunctionalContent;
    endoAngel: EndoAngelContent;
    coreConcept: CoreConceptContent;
    businessModel: BusinessModelContent;
    events: EventsContent;
}