// import React from 'react';
// import { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { CustomerServiceOutlined } from '@ant-design/icons';
// import { Button } from 'antd';
// import { FloatButton } from 'antd';
// import Info from './Info';

// const App: React.FC = () => {
//   // 切换中英文的按钮
//   const [isChinese, setChinese] = useState(true);
//   const changeLanguage = () => {
//     setChinese(!isChinese);
//   };
//   // 切换为老人版
//   const [isElder, setElder] = useState(false);
//   const changeToElder = () => {
//     setElder(!isElder);
//   }


//   return (
//     <div className='App'
//     style={{
//       fontSize: isElder ? "1.5rem" : "1rem", //切换成大字体
//       lineHeight: isElder ? '1.8' : '1.5',
//       display: 'flex',
//       alignItems: 'center',
//       padding: '20px',
//     }}>
      
//       <div style={{
//         display: 'flex',
//         gap: '10px',
//         marginBottom: '20px',
//       }}>
//         <Button 
//           type='primary'
//           style={{
//             fontSize: isElder ? "1.2rem" : "1rem",
//             padding: isElder ? "10px 20px": "8px 16px",
//           }}
//           onClick={changeLanguage}>
//             {isChinese ? 'Change to English' : '切换回中文'}
//         </Button>

//         <Button
//             type="default"
//             style={{
//               fontSize: isElder ? "1.2rem" : "1rem",
//               padding: isElder ? "10px 20px": "8px 16px",
//             }}
//             onClick={changeToElder}
//           >
//             {isElder ? (isChinese ? '恢复字体' : 'Return to Normal') : (isChinese ? '切换为老人版' : 'Change to Elder Friendly')}
//         </Button>
//       </div>
      
//       {/* 页面的html主设计 */}

//       <h1>{<div>{isChinese ? '欢迎来到百盛' : 'Welcome to Biosheng'}</div>}</h1>


//       {/* 设置浮游窗口 （目前作为呼叫客服方式） */}
//       <FloatButton 
//       shape="square" 
//       type="primary" 
//       style={{ insetInlineEnd: 94 }} 
//       tooltip={<div>{isChinese ? '呼叫客服' : 'Need Help, Contact Us Now!'}</div>}
//       onClick={() => console.log('User click this')}/>
//     </div>
    
//   )

// } 

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/AboutUs';
import Footer from './Footer';
import { Tooltip } from 'antd';
import logo from './image/Logo_Bio.jpeg';

const App: React.FC = () => {
  const [isChinese, setChinese] = useState(true);
  const [isLargeFont, setLargeFont] = useState(false);

  const toggleLanguage = () => {
    setChinese(!isChinese);
  };

  const toggleFontSize = () => {
    setLargeFont(!isLargeFont);
  };

  return (
    <Router>
      <div className="App">
        {/* 顶部导航栏 */}
        <header className="App-header">
          <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px', // 调整间距
            }}>
            <img
              src={logo}
              alt="Logo"
              style={{
                height: '50px',
              }}
            />
            <nav style={{
                display: 'flex',
                gap: '10px',}}>
              <Link to="/" style={{ color: 'black', textDecoration: 'underline', fontSize: isLargeFont ? '1.5rem' : '1rem' }}>
                {isChinese ? '首页' : 'HOME'}
              </Link>
              <Link to="/about-us" style={{ color: 'black', textDecoration: 'underline', fontSize: isLargeFont ? '1.5rem' : '1rem'}}>
                {isChinese ? '关于我们' : 'ABOUT US'}
              </Link>
              <Link to="/solution" style={{color: 'black', textDecoration: 'underline', fontSize: isLargeFont ? '1.5rem':'1rem'}}>
                {isChinese ? '产品中心' : 'Products'}
              </Link>
              <Link to="/contact" style={{color: 'black', textDecoration: 'underline', fontSize: isLargeFont ? '1.5rem':'1rem'}}>
                {isChinese ? '联系我们' : 'Contact Us'}
              </Link>
            </nav>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Tooltip title={isChinese ? '切换到英文':'Switch to Chinese'}>
              <button
                onClick={toggleLanguage}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: isLargeFont ? '1.5rem':'1rem',
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
        </header>

        {/* 主内容区域 */}
        <main className="App-main">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h1 style={{ fontSize: isLargeFont ? '3rem' : '2rem' }}>
                    {isChinese ? '欢迎来到百生健康' : 'Welcome to Biosheng'}
                  </h1>
                  {/* 文案部分 */}
                  <p style={{ fontSize: isLargeFont ? '1.5rem' : '1rem' }}>
                    {isChinese
                      ? '百生是您的购物首选 谁'
                      : 'Biosheng is your first choice for shopping!'}
                  </p>
                </div>
              }
            />
            <Route
              path="/about-us"
              element={<AboutUs isLargeFont={isLargeFont} isChinese={isChinese} />}
            />
          </Routes>
        </main>

        {/* Footer 部分 */}
        <Footer isChinese={isChinese} isLargeFont={isLargeFont} />
      </div>
    </Router>
  );
};

export default App;
