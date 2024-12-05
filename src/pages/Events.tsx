import React from "react";
import {content} from "../content";
import {EventsContent} from "../content/types";

interface EventsProps {
    isChinese: boolean;
    isLargeFont: boolean;
}

const Events: React.FC<EventsProps> = ({isChinese,isLargeFont}) => {
    const language = isChinese ? 'zh':'en';
    const eventsContent: EventsContent = content[language].events;

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
            <p style={{textAlign: 'center', marginBottom: '40px'}}>{eventsContent.description}</p>

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
                    <p style={{marginBottom: '20px', color: '#888'}}>{event.date}</p>
                    <img
                        src={event.image}
                        alt={event.title}
                        style={{
                            width: '100%',
                            maxWidth: '600px',
                            height: 'auto',
                            borderRadius: '8px',
                            marginBottom: '20px',
                        }}
                    />
                    <p style={{maxWidth: '800px', textAlign: 'center'}}>{event.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Events;