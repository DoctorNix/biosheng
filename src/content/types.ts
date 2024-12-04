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

export interface Content {
    aboutUs: AboutUsContent;
    products: ProductsContent;
    dailyCare: DailyCareContent;
    functional: FunctionalContent;
}