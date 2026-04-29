import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const SafariCard = ({ safari, onBook }) => {
    return (
        <div className="safari-card group">
            <div className="relative overflow-hidden h-64">
                <img
                    src={safari.images?.[0] || safari.image}
                    alt={safari.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-dss-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {safari.days} Days
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-dss-dark">{safari.title}</h3>
                <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin size={16} className="text-dss-primary" />
                        <span>Focus: {safari.focus}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar size={16} className="text-dss-primary" />
                        <span>Type: {safari.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users size={16} className="text-dss-primary" />
                        <span>Max: 6 people</span>
                    </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-dss-primary">{safari.price}</span>
                    <span className="text-sm text-gray-500">per person</span>
                </div>
                <button
                    onClick={() => onBook(safari)}
                    className="w-full btn-primary py-2 text-center group-hover:scale-105 transition-transform"
                >
                    Book This Safari
                </button>
            </div>
        </div>
    );
};

export default SafariCard;