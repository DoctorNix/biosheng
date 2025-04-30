import { Content } from "./types";

// 📦 Products
import productContentZh from "./productContent.zh";
import productContentEn from "./productContent.en";
import productContentZhTw from "./productContent.zhTW";

// 📦 Daily Care
import dailyCareContentEn from "./dailyCareContent.en";
import dailyCareContentZh from "./dailyCareContent.zh";
// import dailyCareContentZhTw from "./dailyCareContent.zh-TW";

// 📦 Functional
import functionalContentEn from "./functionalContent.en";
import functionalContentZh from "./functionalContent.zh";
// import functionalContentZhTw from "./functionalContent.zh-TW";

// 📦 EndoAngel
import EndoAngelContentZh from "./EndoAngelContent.zh";
import EndoAngelContentEn from "./EndoAngelContent.en";
import EndoAngelContentZhTw from "./EndoAngelContent.zhTW";

// 📦 Core Concept
import CoreConceptContentZh from "./coreConceptContent.zh";
import CoreConceptContentEn from "./coreConceptContent.en";
import CoreConceptContentZhTw from "./coreConceptContent.zhTW";

// 📦 Business Model
import businessModelContentZh from './businessModelContent.zh';
import businessModelContentEn from './businessModelContent.en';
import businessModelContentZhTW from './businessModelContent.zhTW';

// 📦 Events
import eventsContentZh from './eventsContent.zh';
import eventsContentEn from './eventsContent.en';
import eventsContentZhTW from './eventsContent.zhTW';

// ✅ New About Us
import aboutUsContentZh from "./about-us.zh";
import aboutUsContentTw from "./about-us.zh-TW";
import aboutUsContentEn from "./about-us.en";

// ✅ New Contact
import contactContentZh from "./contactContent.zh";
import contactContentZhTW from "./contactContent.zhTW";
import contactContentEn from "./contactContent.en";
// ✅ New Customer Events
import customerEventsContentZh from "./customerEventsContent.zh";
import customerEventsContentZhTW from "./customerEventsContent.zhTW";
import customerEventsContentEn from "./customerEventsContent.en";
// ✅ New Biosheng Healthcare
import bioshengHealthContentZh from "./bioshengHealthContent.zh";
import bioshengHealthContentZhTW from "./bioshengHealthContent.zhTW";
import bioshengHealthContentEn from "./bioshengHealthContent.en";


export const content: {
    'zh': Content;
    'zh-TW': Content;
    'en': Content;
  } = {
    zh: {
      aboutUs: aboutUsContentZh,
      products: productContentZh,
      endoAngel: EndoAngelContentZh,
      coreConcept: CoreConceptContentZh,
      businessModel: businessModelContentZh,
      events: eventsContentZh,
      customerEvents: customerEventsContentZh,
      bioshengHealth: bioshengHealthContentZh,
    },
    'zh-TW': {
      aboutUs: aboutUsContentTw,
      products: productContentZhTw,
      endoAngel: EndoAngelContentZhTw,
      coreConcept: CoreConceptContentZhTw,
      businessModel: businessModelContentZhTW,
      events: eventsContentZhTW,
      customerEvents: customerEventsContentZhTW,
      bioshengHealth: bioshengHealthContentZhTW,
    },
    en: {
      aboutUs: aboutUsContentEn,
      products: productContentEn,
      endoAngel: EndoAngelContentEn,
      coreConcept: CoreConceptContentEn,
      businessModel: businessModelContentEn,
      events: eventsContentEn,
      customerEvents: customerEventsContentEn,
      bioshengHealth: bioshengHealthContentEn,
    },
  };