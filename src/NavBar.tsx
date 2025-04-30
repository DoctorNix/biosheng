import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

interface SubMenu {
    title: { 'zh-CN': string; 'zh-TW': string; en: string };
    path: string;
}

interface MenuItem {
    title: { 'zh-CN': string; 'zh-TW': string; en: string };
    path: string;
    submenu?: SubMenu[];
}

interface NavbarProps {
    menuItems: MenuItem[];
    isLargeFont: boolean;
    language: 'zh-CN' | 'zh-TW' | 'en';
}

const Navbar: React.FC<NavbarProps> = ({ menuItems, isLargeFont, language }) => {
    const [menuOpen, setMenuOpen] = useState(false); // For small screens
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = (path: string) => {
        setMenuOpen(false); // Close menu on navigation
        navigate(path); // Navigate to the selected path
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
                    <li key={index} className="menu-item">
                        <div
                            className="menu-link"
                            style={{
                                fontSize: isLargeFont ? "1.5rem" : "1rem",
                                cursor: item.submenu ? "default" : "pointer",
                            }}
                            onClick={() => !item.submenu && handleLinkClick(item.path)}
                        >
                            {translateTitle(item.title, language)}
                        </div>
                        {item.submenu && (
                            <ul className="submenu">
                                {item.submenu.map((sub, subIndex) => (
                                    <li key={subIndex} className="submenu-item">
                                        <Link
                                            to={sub.path}
                                            className="submenu-link"
                                            onClick={() => handleLinkClick(sub.path)}
                                        >
                                            {translateTitle(sub.title, language)}
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
const translateTitle = (
    title: { 'zh-CN': string; 'zh-TW': string; en: string },
    lang: 'zh-CN' | 'zh-TW' | 'en'
): string => {
    return title[lang] || title['zh-CN'];
};

export default Navbar;
