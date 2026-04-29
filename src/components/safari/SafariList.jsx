import React from 'react';
import SafariCard from './SafariCard';

const SafariList = ({ safaris, onBook }) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safaris.map((safari, idx) => (
                <SafariCard key={idx} safari={safari} onBook={onBook} />
            ))}
        </div>
    );
};

export default SafariList;