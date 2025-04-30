import React from 'react';
import { content } from '../pages-content';
import { EventsContent } from '../pages-content/types';

interface EventsProps {
  language: 'zh-CN' | 'zh-TW' | 'en';
  isLargeFont: boolean;
}

const Events: React.FC<EventsProps> = ({ language, isLargeFont }) => {
  const contentLanguage = language === 'zh-CN' ? 'zh' : language;
  const eventsContent: EventsContent = content[contentLanguage].events;

  return (
    <div style={{ padding: '40px 20px', minHeight: '100%' }}>
      <h1
        style={{
          fontSize: isLargeFont ? '3rem' : '2.2rem',
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        {eventsContent.title}
      </h1>
      <p
        style={{
          fontSize: isLargeFont ? '1.4rem' : '1rem',
          textAlign: 'center',
          marginBottom: '40px',
        }}
      >
        {eventsContent.description}
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
        }}
      >
        {eventsContent.events.map((event) => (
          <div
            key={event.id}
            style={{
              width: '320px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255,255,255,0.95)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              overflow: 'hidden',
            }}
          >
            {Array.isArray((event as any).images) ? (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', padding: '10px' }}>
                {(event as any).images.map((imgSrc: string, index: number) => (
                  <img
                    key={index}
                    src={imgSrc}
                    alt={`${event.title}-${index}`}
                    style={{
                      width: '140px',
                      height: '140px',
                      objectFit: 'contain',
                      borderRadius: '24px',
                      backgroundColor: '#fff',
                      padding: '8px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                ))}
              </div>
            ) : (
              <img
                src={(event as any).image}
                alt={event.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
            )}
            <div style={{ padding: '20px' }}>
              <h3 style={{ fontSize: isLargeFont ? '1.8rem' : '1.4rem' }}>{event.title}</h3>
              {/* <p style={{ fontSize: isLargeFont ? '1.1rem' : '0.95rem', color: '#888' }}>{event.date}</p> */}
              <p style={{ fontSize: isLargeFont ? '1.1rem' : '0.95rem', marginTop: '10px' }}>
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
