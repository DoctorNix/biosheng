import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

interface SubMenu {
    title: string;
    path: string;
}

interface MenuItem {
    title: string;
    path?: string;
    submenu?: SubMenu[];
}

interface NavbarProps {
    menuItems: MenuItem[];
    isLargeFont: boolean;
    isChinese: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ menuItems, isLargeFont, isChinese }) => {
    const [menuOpen, setMenuOpen] = useState(false); // For small screens
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // For submenus
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = (path: string) => {
        setMenuOpen(false); // Close menu on navigation
        navigate(path); // Navigate to the selected path
    };

    const handleSubMenuHover = (index: number | null) => {
        setHoveredIndex(index); // Show/hide submenu on hover
    };

    return (
        <nav className="navbar">
            {/* Hamburger Icon 用于小屏幕*/}
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            {/* Main Menu 用于正常显示*/}
            <ul className={`menu ${menuOpen ? "menu-open" : ""}`}>
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className="menu-item"
                        onMouseEnter={() => handleSubMenuHover(index)}
                        onMouseLeave={() => handleSubMenuHover(null)}
                    >
                        {/* Main Menu Link */}
                        {item.path ? (
                            <Link
                                to={item.path}
                                className="menu-link"
                                onClick={() => handleLinkClick(item.path!)}
                                style={{
                                    fontSize: isLargeFont ? "1.5rem" : "1rem",
                                }}
                            >
                                {isChinese ? item.title : translateTitle(item.title)}
                            </Link>
                        ) : (
                            <span
                                className="menu-link"
                                style={{
                                    fontSize: isLargeFont ? "1.5rem" : "1rem",
                                }}
                            >
                                {isChinese ? item.title : translateTitle(item.title)}
                            </span>
                        )}

                        {/* Submenu */}
                        {item.submenu && hoveredIndex === index && (
                            <ul className="submenu">
                                {item.submenu.map((submenuItem, subIndex) => (
                                    <li key={subIndex} className="submenu-item">
                                        <Link
                                            to={submenuItem.path}
                                            className="submenu-link"
                                            onClick={() => handleLinkClick(submenuItem.path)}
                                            style={{
                                                fontSize: isLargeFont ? "1.2rem" : "1rem",
                                            }}
                                        >
                                            {isChinese
                                                ? submenuItem.title
                                                : translateTitle(submenuItem.title)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

// Translate function
const translateTitle = (title: string): string => {
    const translations: { [key: string]: string } = {
        "首页": "Home",
        "百生健康体验连锁门店": "Biosheng Health Chain Store",
        "我们的核心理念": "Our Core Concept",
        "客户群体/活动": "Customer Groups/Events",
        "经营模式": "Business Model",
        "(以后)网上商城": "Online Store (Future)",
        "AI医疗器械": "AI Medical Devices",
        "代理商品品类": "Agency Products",
        "武汉楚精灵": "EndoAngel Products",
        "会务照片": "Conference Photos",
        "保健品": "Our Health Products",
        "功能性保健品": "Functional Health Products",
        "辅助健康治疗": "Assisted Treatment",
        "日常保健": "Daily Care",
        "日常补充类": "Daily Supplements",
        "联系我们": "Contact Us",
        "关于我们": "About Us",
        "产品中心": "Our Products",
    };
    return translations[title] || title;
};

export default Navbar;
