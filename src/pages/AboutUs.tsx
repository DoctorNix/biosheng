import React from 'react';

interface AboutUsProps {
    isChinese: boolean;
    isLargeFont: boolean;
}

const AboutUs: React.FC<AboutUsProps> = ({ isChinese, isLargeFont }) => {
    return (
        <div
            style={{
                padding: '40px 20px',
                textAlign: 'center',
                fontSize: isLargeFont ? '1.5rem' : '1rem',
                backgroundColor: '#f9f9f9',
                minHeight: '100vh',
            }}
        >
            {/* About Us Section */}
            <section
                style={{
                    marginBottom: '40px',
                    padding: '20px',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                }}
            >
                <h1
                    style={{
                        fontSize: isLargeFont ? '3rem' : '2.5rem',
                        marginBottom: '20px',
                    }}
                >
                    {isChinese ? '关于我们' : 'About Us'}
                </h1>
                <p>
                    {isChinese
                        ? '百生健康致力于提供卓越的健康体验，通过专业团队和优质产品改善您的生活。'
                        : 'Biosheng Health is dedicated to providing excellent health experiences, improving your life with professional teams and quality products.'}
                </p>
            </section>

            {/* Core Values Section */}
            <section
                style={{
                    marginBottom: '40px',
                    padding: '20px',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                }}
            >
                <h2
                    style={{
                        fontSize: isLargeFont ? '2.5rem' : '2rem',
                        marginBottom: '20px',
                    }}
                >
                    {isChinese ? '核心理念' : 'Core Values'}
                </h2>
                <p>
                    {isChinese
                        ? '我们始终坚持以客户为中心，通过创新产品和个性化服务满足多样化需求。'
                        : 'We are committed to customer-centric principles, meeting diverse needs with innovative products and personalized services.'}
                </p>
            </section>

            {/* Team Section */}
            <section
                style={{
                    padding: '20px',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                }}
            >
                <h2
                    style={{
                        fontSize: isLargeFont ? '2.5rem' : '2rem',
                        marginBottom: '20px',
                    }}
                >
                    {isChinese ? '我们的团队' : 'Our Team'}
                </h2>
                <p>
                    {isChinese
                        ? '我们的专业团队由健康顾问、技术专家和运营团队组成，为您提供最佳服务。'
                        : 'Our professional team includes health consultants, technical experts, and operational staff to deliver the best services.'}
                </p>
            </section>
        </div>
    );
};

export default AboutUs;
