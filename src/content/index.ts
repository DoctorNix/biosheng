import { Content } from "./types";
import aboutUsContentZh from "./aboutUsContent.zh";
import aboutUsContentEn from "./aboutUsContent.en";
import productContentZh from "./productContent.zh";
import productContentEn from "./productContent.en";
import dailyCareContentEn from "./dailyCareContent.en";
import dailyCareContentZh from "./dailyCareContent.zh";
import functionalContentEn from "./functionalContent.en";
import functionalContentZh from "./functionalContent.zh";
import EndoAngelContentZh from "./EndoAngelContent.zh";
import EndoAngelContentEn from "./EndoAngelContent.en";
import CoreConceptContentZh from "./coreConceptContent.zh";
import CoreConceptContentEn from "./coreConceptContent.en";
import businessModelContentZh from './businessModelContent.zh';
import businessModelContentEn from './businessModelContent.en';
import eventsContentZh from './eventsContent.zh';
import eventsContentEn from './eventsContent.en';


export const content: {zh: Content; en: Content} = {
    zh: {
        aboutUs: aboutUsContentZh,
        products: productContentZh,
        functional: functionalContentZh,
        dailyCare: dailyCareContentZh,
        endoAngel: EndoAngelContentZh,
        coreConcept: CoreConceptContentZh,
        businessModel: businessModelContentZh,
        events: eventsContentZh,
    },
    en: {
        aboutUs: aboutUsContentEn,
        products: productContentEn,
        functional: functionalContentEn,
        dailyCare: dailyCareContentEn,
        endoAngel: EndoAngelContentEn,
        coreConcept: CoreConceptContentEn,
        businessModel: businessModelContentEn,
        events: eventsContentEn,
    },
};