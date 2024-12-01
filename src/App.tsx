import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './NavBar';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Footer from './Footer';
import { Layout, Tooltip } from 'antd';
import logo from './image/Logo_Biosheng.jpeg';
import background from './image/Background.jpeg';
import BreadcrumbDisplay from "./BreadcrumbDisplay";

const { Header, Content } = Layout;

const headerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: 'white',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 200px)', // Adjust based on header and footer height
    padding: '20px',
    border: '2px solid rgba(0, 0, 0, 0.1)', // Add a light border
    borderRadius: '8px', // Rounded corners
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
    backgroundImage: `url(${background})`,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
    backdropFilter: 'blur(5px)', // Optional: Blur background for effect
    margin: '20px', // Add margin for spacing
    color: '#000', // Ensure text is visible
};

const App: React.FC = () => {
    const [isChinese, setChinese] = useState(true);
    const [isLargeFont, setLargeFont] = useState(false);

    const toggleLanguage = () => setChinese(!isChinese);
    const toggleFontSize = () => setLargeFont(!isLargeFont);

    const menuItems = [
        { title: '首页', path: '/' },
        { title: '关于我们', path: '/about-us' },
        {
            title: '保健品', path: '/products',
            submenu: [
                { title: '功能性保健品', path: '/functional' },
                { title: '日常保健', path: '/daily' },
            ],
        },
        {
            title: '百生健康体验连锁门店',
            submenu: [
                { title: '我们的核心理念', path: '/core-concept' },
                { title: '客户群体/活动', path: '/customer-events' },
                { title: '经营模式', path: '/business-model' },
            ],
        },
        {
            title: 'AI医疗器械',
            submenu: [
                {title: '武汉楚精灵', path: '/EndoAngel' },
            ],
        },
        { title: '联系我们', path: '/contact' },
    ];

    return (
        <Router>
            <Layout>
                {/* Header Section */}
                <Header style={headerStyle}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <img src={logo} alt="Logo" style={{ height: '70px' }} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'self-end', gap: '20px' }}>
                        <Navbar menuItems={menuItems} isChinese={isChinese} isLargeFont={isLargeFont} />
                    </div>
                    <div style={{ display: 'flex', gap: '10px', color: '#000' }}>
                        <Tooltip title={isChinese ? '切换到英文' : 'Switch to Chinese'}>
                            <button
                                onClick={toggleLanguage}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: 'white',
                                    cursor: 'pointer',
                                    fontSize: isLargeFont ? '1.5rem' : '1rem',
                                }}
                            >
                                {isChinese ? 'Eng' : '中'}
                            </button>
                        </Tooltip>
                        <button
                            onClick={toggleFontSize}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer',
                                fontSize: '1.2rem',
                            }}
                        >
                            🧓
                        </button>
                    </div>

                </Header>

                {/* Main Content Section */}
                <Layout>
                    <Content style={contentStyle}>
                        <BreadcrumbDisplay isChinese={isChinese} />
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <div>
                                        <h1 style={{ fontSize: isLargeFont ? '3rem' : '2rem' }}>
                                            {isChinese ? '欢迎来到百生健康' : 'Welcome to Biosheng'}
                                        </h1>
                                        <p style={{ fontSize: isLargeFont ? '1.5rem' : '1rem' }}>
                                            {isChinese
                                                ? '百生是您的购物首选。'
                                                : 'Biosheng is your first choice for shopping!'}
                                        </p>
                                    </div>
                                }
                            />
                            <Route
                                path="/about-us"
                                element={<AboutUs isChinese={isChinese} isLargeFont={isLargeFont} />}
                            />
                            <Route
                                path="/products"
                                element={<Products isChinese={isChinese} isLargeFont={isLargeFont} />}
                            />
                            <Route
                                path="/contact"
                                element={<Contact isChinese={isChinese} isLargeFont={isLargeFont} />}
                            />
                        </Routes>
                    </Content>
                </Layout>

                {/* Footer Section */}
                <Footer isChinese={isChinese} isLargeFont={isLargeFont} />
            </Layout>
        </Router>
    );
};

export default App;
