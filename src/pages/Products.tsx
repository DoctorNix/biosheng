import React from 'react';
import Contact from "./Contact";

interface ProductsProps {
  isLargeFont: boolean; // 动态字体大小
  isChinese: boolean; // 动态语言切换
}

const Products: React.FC<ProductsProps> = ({ isLargeFont, isChinese }) => {
    return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '20px',
            height: '100vh',
            backgroundColor: '#f0f2f5',
            fontSize: isLargeFont ? '1.5rem' : '1rem', // 动态字体大小
          }}
        >
        <h1 style={{ fontSize: isLargeFont ? '3.5rem' : '3rem', marginBottom: '20px', width: '100%' }}>
            {isChinese ? '产品中心':'Our Products'}
        </h1>
        </div>
    )
}

export default Products;