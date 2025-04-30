import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout, Tooltip, Carousel } from 'antd';
import Navbar from './NavBar';
import Footer from './Footer';
import BreadcrumbDisplay from "./BreadcrumbDisplay";

// Existing Pages
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Contact from './pages/Contact';
// import Functional from './pages/Functional';
// import DailyCare from './pages/DailyCare';
import CoreConcept from './pages/CoreConcept';
import BusinessModel from './pages/BusinessModel';
import Events from './pages/Events';

// New Pages
import BioshengHealthcare from './pages/BioshengHealthcare';
import CustomerEvents from './pages/CustomerEvent';
import EndoAngelFull from './pages/EndoAngelFull';

// Images and Styling
import logo from './images/logo_Biosheng_ch.png';
import background from './images/Background.jpeg';
import './App.css';
import { content } from './pages-content';
import contactContentZh from './pages-content/contactContent.zh';
import contactContentZhTW from './pages-content/contactContent.zhTW';
import contactContentEn from './pages-content/contactContent.en';

const { Header, Content } = Layout;

const App: React.FC = () => {
  const getContentLang = (lang: 'zh-CN' | 'zh-TW' | 'en') => {
    return lang === 'zh-CN' ? 'zh' : lang;
  };

  // Language state ('zh-CN' = Simplified, 'zh-TW' = Traditional, 'en' = English)
  const [language, setLanguage] = useState<'zh-CN' | 'zh-TW' | 'en'>('zh-CN');
  const [isLargeFont, setLargeFont] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const aboutPosition = document.getElementById('about-section')?.getBoundingClientRect().top;
      if (aboutPosition !== undefined && aboutPosition < window.innerHeight - 100) {
        setShowAbout(true);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Toggle Font Size
  const toggleFontSize = () => setLargeFont(!isLargeFont);

  // Multilingual Menu Items
  const menuItems = [
    { title: { 'zh-CN': '首页', 'zh-TW': '首頁', 'en': 'Home' }, path: '/' },
    { title: { 'zh-CN': '关于我们', 'zh-TW': '關於我們', 'en': 'About Us' }, path: '/about-us' },
    { title: { 'zh-CN': '健康产品', 'zh-TW': '健康產品', 'en': 'Health Products' }, path: '/products' },
    { title: { 'zh-CN': '核心理念', 'zh-TW': '核心理念', 'en': 'Core Concept' }, path: '/core-concept' },
    {
      title: { 'zh-CN': '客户关怀/交流', 'zh-TW': '客戶關懷/交流', 'en': 'Customer Engagement' },
      path: '/customer-events',
      submenu: [
        { title: { 'zh-CN': '对外交流', 'zh-TW': '對外交流', 'en': 'External Collaboration' }, path: '/customer-events' },
        { title: { 'zh-CN': '客户关怀', 'zh-TW': '客戶關懷', 'en': 'Customer Care' }, path: '/customer-care' }
      ]
    },
    { title: { 'zh-CN': '经营模式', 'zh-TW': '經營模式', 'en': 'Business Model' }, path: '/business-model' },
    { title: { 'zh-CN': 'AI医疗器械', 'zh-TW': 'AI醫療器械', 'en': 'AI Medical Devices' }, path: '/endoangel-full' },
    { title: { 'zh-CN': '联系我们', 'zh-TW': '聯繫我們', 'en': 'Contact' }, path: '/contact' },
  ];

  // Styles
  const headerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 64,
    paddingInline: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
  };

  const contentStyle: React.CSSProperties = {
    padding: '20px',
    background: 'rgba(255,255,255,0.75)',
    borderRadius: '8px',
    backdropFilter: 'blur(4px)',
  };

  const contactContent = language === 'zh-CN' ? contactContentZh : language === 'zh-TW' ? contactContentZhTW : contactContentEn;

  return (
    <Router>
      <div style={{ backgroundImage: `url(${background})`, minHeight: '100vh', backgroundSize: 'cover', position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(240, 240, 240, 0.6)',
            zIndex: 0
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, border: '2px solid rgba(180, 180, 180, 0.6)', borderRadius: '10px' }}>
          <Layout>
          <Header style={headerStyle}>
            <img src={logo} alt="Biosheng Logo" style={{ height: '60px', marginLeft: 0 }} />
            <Navbar menuItems={menuItems} language={language} isLargeFont={isLargeFont} />
            <div style={{ display: 'flex', gap: '10px', color: '#000' }}>
              <Tooltip title="简体中文">
                <button onClick={() => setLanguage('zh-CN')} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>简</button>
              </Tooltip>
              <Tooltip title="繁體中文">
                <button onClick={() => setLanguage('zh-TW')} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>繁</button>
              </Tooltip>
              <Tooltip title="English">
                <button onClick={() => setLanguage('en')} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>EN</button>
              </Tooltip>
              <button onClick={toggleFontSize} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>🧓</button>
            </div>
          </Header>

          <Content style={{ margin: '24px', minHeight: 'calc(100vh - 64px - 200px)' }}>
            <div style={contentStyle}>
              <BreadcrumbDisplay language={language} />
              <Routes>
                <Route path="/" element={
                  <div className="homepage-container">
                    <div className="homepage-hero">
                      <div style={{
                        textAlign: 'center',
                        fontSize: isLargeFont ? '2rem' : '1.5rem',
                        fontWeight: 'bold',
                        color: '#006644',
                        margin: '0 auto 20px',
                        backgroundColor: 'rgba(255,255,255,0.85)',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        maxWidth: 'fit-content'
                      }}>
                        {language === 'zh-CN'
                          ? '百生健康，科技与关爱的结合'
                          : language === 'zh-TW'
                          ? '百生健康，科技與關愛的結合'
                          : 'Biosheng Health — Integrating Care & Technology'}
                      </div>
                      <Carousel autoplay autoplaySpeed={5000} effect="fade" dotPosition="bottom" arrows style={{ marginBottom: '40px' }}>
                      {[
                        {
                          src: "/images/1831744782556_.pic.jpg",
                          alt: "Slide 1",
                          caption:
                            language === 'zh-CN'
                              ? '马来西亚内镜年会 （马大医学院 2024.5）'
                              : language === 'zh-TW'
                              ? '馬來西亞內鏡年會 （馬大醫學院 2024.5）'
                              : 'Malaysian Endoscopy Conference (UM Medical Faculty 2024.5)',
                          bg: 'linear-gradient(to bottom, #f0f8ff, #e6f2f1)'
                        },
                        {
                          src: "/images/1821744782452_.pic.jpg",
                          alt: "Slide 2",
                          caption:
                            language === 'zh-CN'
                              ? 'IDEAS国际消化内镜人工智能会议（2024.11）'
                              : language === 'zh-TW'
                              ? 'IDEAS國際消化內鏡人工智慧會議（2024.11）'
                              : 'IDEAS: International Digestive Endoscopy AI Summit (November 2024)',
                          bg: 'linear-gradient(to bottom, #e6f2f1, #d0ebe8)'
                        },
                        {
                          src: "/images/1761744782229_.pic_hd.jpg",
                          alt: "Slide 3",
                          caption:
                            language === 'zh-CN'
                              ? '南洋理工大学C-AIM人工智能医学中心启动(2024.9)'
                              : language === 'zh-TW'
                              ? '南洋理工大學C-AIM人工智慧醫學中心啟動(2024.9)'
                              : 'NTU Launch of Centre for AI in Medicine (C-AIM) (September 2024)',
                          bg: 'linear-gradient(to bottom, #d0ebe8, #b3dfdd)'
                        },
                        {
                          src: "/images/events/manual_medicine_1.jpg",
                          alt: "Slide 4",
                          caption:
                            language === 'zh-CN'
                              ? '第十五届国际手法医学与佳统疗法学木大会（2019年广州）'
                              : language === 'zh-TW'
                              ? '第十五屆國際手法醫學與佳統療法學術大會（2019年廣州）'
                              : '15th Intl Manual Medicine & Therapy Congress (Guangzhou 2019)',
                          bg: 'linear-gradient(to bottom, #cfe9f2, #b0d8eb)'
                        },
                        {
                          src: "/images/events/contract_endoangel.jpg",
                          alt: "Slide 5",
                          caption:
                            language === 'zh-CN'
                              ? '百生医疗与EndoAngel医疗签订东南亚代理'
                              : language === 'zh-TW'
                              ? '百生醫療與EndoAngel簽訂東南亞代理'
                              : 'Biosheng x EndoAngel SEA Distribution Agreement',
                          bg: 'linear-gradient(to bottom, #b0d8eb, #a0cde0)'
                        },
                        {
                          src: "/images/events/nuh_entry1.jpg",
                          alt: "Slide 6",
                          caption:
                            language === 'zh-CN'
                              ? '百生医疗入驻新加坡国立大学医院（NUH)'
                              : language === 'zh-TW'
                              ? '百生醫療入駐新加坡國立大學醫院（NUH)'
                              : 'Biosheng joins National University Hospital (NUH) Singapore',
                          bg: 'linear-gradient(to bottom, #a0cde0, #90c1d7)'
                        }
                      ].map((img, idx) => (
                        <div
                          key={idx}
                          style={{
                            textAlign: 'center',
                            position: 'relative',
                            background: img.bg,
                            padding: '20px',
                            borderRadius: '10px',
                            overflow: 'hidden'
                          }}>
                          {/* Caption block at bottom-left */}
                          <div
                            style={{
                              position: 'absolute',
                              left: '30px',
                              bottom: '30px',
                              backgroundColor: 'rgba(0,0,0,0.45)',
                              color: 'white',
                              padding: '12px 18px',
                              borderRadius: '10px',
                              fontSize: '1.23rem',
                              fontWeight: 'bold',
                              display: 'inline-block',
                              maxWidth: '85%',
                              boxShadow: '0 2px 8px rgba(0,0,0,0.09)',
                              zIndex: 2
                            }}
                          >
                            {img.caption}
                          </div>
                          <div style={{ position: 'relative', width: '100%', height: '450px' }}>
                            <img
                              src={img.src}
                              alt={img.alt}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                borderRadius: '10px'
                              }}
                            />
                          </div>
                        </div>
                      ))}
                      </Carousel>
                    </div>
                    <div
                      id="about-section"
                      className="about-section responsive-block"
                      style={{
                        opacity: showAbout ? 1 : 0,
                        transform: showAbout ? 'translateY(0)' : 'translateY(50px)',
                        transition: 'opacity 0.8s ease, transform 0.8s ease',
                        maxWidth: '1000px',
                        margin: '0 auto',
                        padding: '40px 30px',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        borderRadius: '12px',
                        boxShadow: '0 0 12px rgba(0,0,0,0.1)',
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        gap: '30px'
                      }}
                    >
                      <div style={{
                        flex: '1 1 400px',
                        textAlign: 'left',
                        minWidth: '280px',
                        wordBreak: 'break-word'
                      }}>
                        <img src={logo} alt="Biosheng Logo" style={{ height: '80px', marginBottom: '20px' }} />
                        <p style={{
                          fontSize: isLargeFont ? '1.3rem' : '1.05rem',
                          color: '#333',
                          lineHeight: 1.8,
                          wordBreak: 'break-word',
                          overflowWrap: 'break-word',
                          whiteSpace: 'normal',
                          maxWidth: '100%'
                        }}>
                          {language === 'zh-CN'
                            ? '百生健康致力于将人工智能与关怀服务融合，构建更加贴近用户的医疗体验。我们的研发团队汇聚了来自中美顶尖院校的医学科技人才，致力于推动医疗技术的进步。'
                            : language === 'zh-TW'
                            ? '百生健康致力於將人工智慧與關懷服務融合，打造更貼近使用者的醫療體驗。我們的研發團隊集結來自中美頂尖學府的醫療科技人才，推動醫療技術革新。'
                            : 'Biosheng Health is committed to integrating AI with human-centered care, building a more personalized healthcare experience. Our R&D team brings together top talents from China and the US, driving innovation in medical technology.'}
                        </p>
                      </div>
                      <div style={{
                        flex: '1 1 320px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}>
                        <img src="/images/1831744782556_.pic.jpg" alt="About Visual" style={{
                          width: '100%',
                          maxWidth: '320px',
                          height: 'auto',
                          borderRadius: '12px',
                          boxShadow: '0 0 8px rgba(0,0,0,0.1)',
                          objectFit: 'cover'
                        }} />
                      </div>
                    </div>
                    {/* <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', marginBottom: '40px' }}>
                      {
                        content[getContentLang(language)].products.sections.flatMap(s => s.products).slice(0, 3).map(product => (
                          <div key={product.id} style={{ width: '250px', background: '#fff', borderRadius: '8px', padding: '15px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                            <img src={product.image} alt={product.name} style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '6px' }} />
                            <h3 style={{ marginTop: '15px', fontSize: isLargeFont ? '1.5rem' : '1.2rem' }}>{product.name}</h3>
                            <p style={{ fontSize: isLargeFont ? '1.1rem' : '0.95rem', color: '#666' }}>{product.description}</p>
                          </div>
                        ))
                      }
                    </div> */}
                    
                    <div
                      className="brand-single-block responsive-block"
                      style={{
                        marginTop: '50px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        backgroundColor: 'rgba(248, 248, 248, 0.9)',
                        padding: '30px',
                        borderRadius: '12px',
                        minHeight: '220px',
                        maxWidth: '1000px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                      }}>
                      <div
                        className="brand-single-img"
                        style={{
                          flex: '1 1 40%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minWidth: '200px',
                          order: 1
                        }}>
                        <img src="/images/brand/brand_all.png" alt="Brand Certifications" style={{ width: '100%', maxWidth: '320px', height: 'auto', borderRadius: '10px', boxShadow: '0 0 6px rgba(0,0,0,0.08)' }} />
                      </div>
                      <div
                        className="brand-single-text"
                        style={{
                          flex: '1 1 50%',
                          textAlign: 'left',
                          fontSize: isLargeFont ? '1.2rem' : '1rem',
                          color: '#444',
                          paddingLeft: '20px',
                          minWidth: '280px',
                          order: 2,
                          wordBreak: 'break-word',
                          overflowWrap: 'break-word',
                          whiteSpace: 'normal',
                          maxWidth: '100%'
                        }}>
                        {language === 'zh-CN'
                          ? '荣获“新加坡品牌”标志，亦为“新加坡品牌企业家联盟”认证会员，致力于品质与创新。'
                          : language === 'zh-TW'
                          ? '榮獲「新加坡品牌」標誌，亦為「新加坡品牌企業家聯盟」認證會員，致力於品質與創新。'
                          : 'Recognized by “Singapore Brands” and certified by the Singapore Brands Entrepreneurs’ Alliance—committed to excellence and innovation.'}
                      </div>
                    </div>
                    {/* 三栏内容区块：产品 / 愿景 / EndoAngel */}
                    <div style={{
                      marginTop: '40px',
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      gap: '30px',
                      maxWidth: '1080px',
                      marginLeft: 'auto',
                      marginRight: 'auto'
                    }}>
                      {[{
                        title: language === 'zh-CN' ? '核心产品' : language === 'zh-TW' ? '核心產品' : 'Core Products',
                        description: language === 'zh-CN'
                          ? '我们精选健康与医疗产品，为日常护理与康复提供支持。'
                          : language === 'zh-TW'
                          ? '我們精選健康與醫療產品，提供日常照護與復健支持。'
                          : 'We offer curated healthcare products that support daily wellness and recovery.',
                        image: '/images/products/n4.jpg',
                        link: '/products'
                      }, {
                        title: language === 'zh-CN' ? '公司愿景' : language === 'zh-TW' ? '公司願景' : 'Our Vision',
                        description: language === 'zh-CN'
                          ? '百生致力于将关怀与技术融合，建设更人性化的健康生态。'
                          : language === 'zh-TW'
                          ? '百生致力於融合科技與關懷，打造更人本的健康體系。'
                          : 'We integrate care and technology to build a human-centered wellness ecosystem.',
                        image: '/images/logo_Biosheng_ch_2_1.png',
                        link: '/about-us'
                      }, {
                        title:
                          language === 'zh-CN'
                            ? '武汉楚精灵 AI'
                            : language === 'zh-TW'
                            ? '武漢楚精靈 AI'
                            : 'EndoAngel AI',
                        description: language === 'zh-CN'
                          ? '与EndoAngel合作，推动AI在内镜诊断中的应用与推广。'
                          : language === 'zh-TW'
                          ? '與EndoAngel合作，推動AI於內視鏡診斷的應用與推廣。'
                          : 'In collaboration with EndoAngel, we advance AI-powered endoscopic diagnostics.',
                        image: '/images/endoangel/feature1.jpg',
                        link: '/endoangel-full'
                      }].map((section, idx) => (
                        <div key={idx} style={{
                          width: '300px',
                          background: '#ffffffcc',
                          borderRadius: '10px',
                          overflow: 'hidden',
                          boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                          display: 'flex',
                          flexDirection: 'column'
                        }}>
                          <img
                            src={section.image}
                            alt={section.title}
                            style={{
                              width: '100%',
                              height: '150px',
                              objectFit: 'cover',
                              borderTopLeftRadius: '10px',
                              borderTopRightRadius: '10px'
                            }}
                          />
                          <div style={{ padding: '20px', flex: 1 }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', textAlign: 'center', color: '#006644' }}>{section.title}</h3>
                            <p style={{
                              fontSize: '0.95rem',
                              color: '#555',
                              textAlign: 'center',
                              wordBreak: 'break-word',
                              overflowWrap: 'break-word',
                              whiteSpace: 'normal',
                              maxWidth: '100%'
                            }}>{section.description}</p>
                          </div>
                          <div style={{ padding: '0 0 20px', textAlign: 'center' }}>
                            <a href={section.link} style={{ fontWeight: 'bold', color: '#006644' }}>
                              {language === 'zh-CN' ? '了解更多' : language === 'zh-TW' ? '了解更多' : 'More Information'}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                } />
                <Route path="/about-us" element={<AboutUs language={language} isLargeFont={isLargeFont} />} />
                <Route path="/products" element={<Products language={language} isLargeFont={isLargeFont} content={content[getContentLang(language)].products} />} />
                <Route path="/contact" element={<Contact language={language} isLargeFont={isLargeFont} email={contactContent.email} facebook={contactContent.facebook} stores={contactContent.stores} />} />
                {/* <Route path="/products/functional" element={<Functional language={language} isLargeFont={isLargeFont} />} />
                <Route path="/products/daily-care" element={<DailyCare language={language} isLargeFont={isLargeFont} />} /> */}
                <Route path="/endoangel-full" element={<EndoAngelFull content={content[getContentLang(language)].endoAngel} language={language} isLargeFont={isLargeFont} />} />
                <Route path="/core-concept" element={<CoreConcept language={language} isLargeFont={isLargeFont} />} />
                <Route path="/business-model" element={<BusinessModel language={language} isLargeFont={isLargeFont} />} />
                <Route
                  path="/customer-events"
                  element={
                    <CustomerEvents
                      language={language}
                      isLargeFont={isLargeFont}
                      content={content[getContentLang(language)].events}
                    />
                  }
                />
                <Route path="/customer-care" element={
                  <CustomerEvents
                    language={language}
                    isLargeFont={isLargeFont}
                    content={content[getContentLang(language)].customerEvents}
                  />
                } />
                <Route path="/biosheng-healthcare" element={<BioshengHealthcare language={language} isLargeFont={isLargeFont} />} />
              </Routes>
            </div>
          </Content>

          <Footer language={language} isLargeFont={isLargeFont} menuItems={menuItems} />
          </Layout>
        </div>
      </div>
    </Router>
  );
};

export default App;