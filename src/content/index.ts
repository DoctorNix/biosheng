import { Content } from "./types";
import aboutUsContentZh from "./aboutUsContent.zh";
import aboutUsContentEn from "./aboutUsContent.en";
import productContentZh from "./productContent.zh";
import productContentEn from "./productContent.en";
import dailyCareContentEn from "./dailyCareContent.en";
import dailyCareContentZh from "./dailyCareContent.zh";
import functionalContentEn from "./functionalContent.en";
import functionalContentZh from "./functionalContent.zh";

export const content: {zh: Content; en: Content} = {
    zh: {
        aboutUs: aboutUsContentZh,
        products: productContentZh,
        functional: functionalContentZh,
        dailyCare: dailyCareContentZh,
    },
    en: {
        aboutUs: aboutUsContentEn,
        products: productContentEn,
        functional: functionalContentEn,
        dailyCare: dailyCareContentEn,
    },
};