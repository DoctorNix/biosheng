import React from "react";
import { content } from "../pages-content";
import { CustomerEventsContent } from "../pages-content/types";

interface CustomerEventsProps {
    language: 'zh-CN' | 'zh-TW' | 'en';
    isLargeFont: boolean;
    content: CustomerEventsContent;
}

const CustomerEvent: React.FC<CustomerEventsProps> = ({ language, isLargeFont, content }) => {
    const eventsContent = content;

    return (
        <div
            style={{
                padding: '40px 20px',
                fontSize: isLargeFont ? '1.5rem' : '1rem',
                minHeight: '100%',
            }}
        >
            <h1
                style={{
                    fontSize: isLargeFont ? '3rem' : '2.5rem',
                    textAlign: 'center',
                    marginBottom: '20px',
                }}
            >
                {eventsContent.title}
            </h1>
            <p style={{ textAlign: 'center', marginBottom: '40px' }}>{eventsContent.description}</p>

            {eventsContent.events.map((event) => (
                <div
                    key={event.id}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginBottom: '60px',
                    }}
                >
                    <h2
                        style={{
                            fontSize: isLargeFont ? '2.5rem' : '2rem',
                            marginBottom: '10px',
                        }}
                    >
                        {event.title}
                    </h2>
                    {/* <p style={{ marginBottom: '20px', color: '#888' }}>{event.date}</p> */}
                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '20px' }}>
                        {event.images.map((imgSrc, index) => (
                            <img
                                key={index}
                                src={imgSrc}
                                alt={`${event.title}-${index}`}
                                style={{
                                    width: '300px',
                                    height: 'auto',
                                    borderRadius: '8px',
                                    objectFit: 'cover'
                                }}
                            />
                        ))}
                    </div>
                    <p style={{ maxWidth: '800px', textAlign: 'center' }}>{event.description}</p>
                </div>
            ))}
        </div>
    );
};

export default CustomerEvent;