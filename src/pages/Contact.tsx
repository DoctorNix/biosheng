import React from 'react';

interface ContactProps {
    isChinese: boolean;
    isLargeFont: boolean;
}

// 这边是公司信息部分，修改信息在这里修，添加格式为：
// {
//     name: isChinese ? '公司名' : 'Company Name',
//         address: isChinese ? '地址: xx' : 'Address: xx',
//     email: 'xxx@company.com',
//     phone: isChinese ? '电话: +86 123 456 789' : 'Phone: +86 123 456 789',
//     logo: 'https://via.placeholder.com/80', // Placeholder logo
// },
const Contact: React.FC<ContactProps> = ({ isChinese, isLargeFont }) => {
    const companies = [
        {
            name: isChinese ? '总公司' : 'Company',
            address: isChinese ? '地址: xx' : 'Address: xx',
            email: 'xxx@company.com',
            phone: isChinese ? '电话: +86 123 456 789' : 'Phone: +86 123 456 789',
            logo: 'https://via.placeholder.com/80', // Placeholder logo
        },
        {
            name: isChinese ? '公司 1' : 'Live Mo',
            address: isChinese ? '地址: xx' : 'Address: xx',
            email: 'xxx@company.com',
            phone: isChinese ? '电话: +86 123 456 789' : 'Phone: +86 123 456 789',
            logo: 'https://via.placeholder.com/80', // Placeholder logo
        },
        {
            name: isChinese ? '公司 2' : '360 Health',
            address: isChinese ? '地址: yy' : 'Address: yy',
            email: 'contact@company.com',
            phone: isChinese ? '电话: +86 987 654 321' : 'Phone: +86 987 654 321',
            logo: 'https://via.placeholder.com/80', // Placeholder logo
        },
    ];

    return (
        <div
            style={{
                padding: '40px 20px',
                backgroundColor: '#f9f9f9',
                minHeight: '100vh',
            }}
        >
            {/* Contact Title */}
            <h1
                style={{
                    fontSize: isLargeFont ? '3rem' : '2.5rem',
                    marginBottom: '20px',
                    textAlign: 'center',
                }}
            >
                {isChinese ? '联系我们' : 'Contact Us'}
            </h1>
            <p
                style={{
                    marginBottom: '40px',
                    fontSize: isLargeFont ? '1.5rem' : '1rem',
                    textAlign: 'center',
                }}
            >
                {isChinese
                    ? '以下是我们不同办公点的联系方式：'
                    : 'Below is the contact information for our various office locations:'}
            </p>

            {/* Contact Information Section */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                }}
            >
                {companies.map((company, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '20px',
                            backgroundColor: '#ffffff',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px',
                        }}
                    >
                        {/* Company Details */}
                        <div style={{ flex: 1, textAlign: 'left' }}>
                            <h2 style={{ marginBottom: '10px' }}>{company.name}</h2>
                            <p style={{ marginBottom: '5px' }}>{company.address}</p>
                            <p style={{ marginBottom: '5px' }}>{isChinese ? `邮箱: ${company.email}` : `Email: ${company.email}`}</p>
                            <p>{company.phone}</p>
                        </div>

                        {/* Logo Section */}
                        <img
                            src={company.logo}
                            alt={`${company.name} Logo`}
                            style={{
                                width: '80px',
                                height: '80px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                marginLeft: '20px',
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Map Section */}
            <div
                style={{
                    marginTop: '40px',
                    backgroundColor: '#d9d9d9',
                    height: '300px',
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <p style={{ color: '#555', fontSize: '1.5rem' }}>
                    {isChinese ? '地图位置（未来加入）' : 'Map position (for future)'}
                </p>
            </div>
        </div>
    );
};

export default Contact;
