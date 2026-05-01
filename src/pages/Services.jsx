import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmailBookingForm from '../components/booking/EmailBookingForm';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';
import img11 from '../assets/img11.jpg';
import img12 from '../assets/img12.jpg';
import img13 from '../assets/img13.jpg';
import img17 from '../assets/img17.jpg';
import day1 from '../assets/1dy.jpg';
import day2 from '../assets/2dy.jpg';
import day3 from '../assets/3dy.jpg';
import day4 from '../assets/4dy.jpg';
import day5 from '../assets/5dy.jpg';
import day6 from '../assets/6dy.jpg';
import zoe13 from '../assets/zoe13.jpg';
import zoe8 from '../assets/zoe8.jpg';
import zoe11 from '../assets/zoe11.jpg';
import zoe15 from '../assets/zoe15.jpg';
import zoe7 from '../assets/zoe7.jpg';

const Services = () => {
    const [hoveredSafari, setHoveredSafari] = useState(null);
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [selectedSafari, setSelectedSafari] = useState(null);
    const [expandedSafari, setExpandedSafari] = useState(null);

    const safaris = [
        {
            id: 1,
            days: "4 Days",
            title: "Northern Tanzania Safari Escape",
            focus: "Northern Safaris",
            type: "Wildlife safari",
            images: [img6, img5, img3, img1, img11, img12],
            description: "Experience the best of Northern Tanzania's wildlife including Serengeti and Ngorongoro Crater.",
            highlights: ["Serengeti Migration", "Ngorongoro Crater", "Lake Manyara"],
            itinerary: [
                { day: "Day 1", title: "Arrival in Arusha", details: "Airport pick-up and transfer to your hotel. Relax and receive your safari briefing from our expert guides." },
                { day: "Day 2", title: "Lake Manyara National Park", details: "Full-day game drive featuring tree-climbing lions, vast elephant herds, and spectacular flamingo flocks along the lake." },
                { day: "Day 3", title: "Serengeti National Park", details: "Drive to Serengeti with game viewing en route. Experience the endless plains and witness the Great Migration (seasonal)." },
                { day: "Day 4", title: "Ngorongoro Crater", details: "Morning game drive in Serengeti, then transfer to Ngorongoro. Descend into the crater to spot the Big Five and return to Arusha." }
            ]
        },
        {
            id: 2,
            days: "7 Days",
            title: "Kilimanjaro Hiking - Lemosho Route",
            focus: "Mountain Trekking",
            type: "Mountain trekking",
            images: [zoe13, zoe8, zoe11, zoe15, zoe7],
            description: "Conquer Africa's highest peak via the scenic Lemosho Route with expert mountain guides.",
            highlights: ["Uhuru Peak", "Shira Plateau", "Mawenzi Peak"],
            itinerary: [
                { day: "Day 1", title: "Arrival & Preparation", details: "Arrive in Moshi. Meet your guide and porter team. Final preparation and equipment check for the climb." },
                { day: "Day 2", title: "Forest Camp", details: "Trek through lush rainforest to Forest Camp. Acclimatization and preparation for higher altitudes." },
                { day: "Day 3", title: "Shira Plateau", details: "Hike through diverse vegetation zones to Shira Plateau at 3,840m. Stunning views of the mountain." },
                { day: "Day 4", title: "Mawenzi Peak", details: "Visit the dramatic Mawenzi Peak crater rim. Spectacular panoramic views at high altitude." },
                { day: "Day 5", title: "Barafu Camp", details: "Trek to Barafu Camp. Prepare for the summit attempt. Rest and hydrate well." },
                { day: "Day 6", title: "Summit - Uhuru Peak", details: "Midnight start to reach Uhuru Peak (5,895m) at sunrise. Experience Africa's highest point!" },
                { day: "Day 7", title: "Descent & Celebration", details: "Descend to Moshi. Celebrate your achievement with your guide and porter team." }
            ]
        },
        {
            id: 3,
            days: "3 Days",
            title: "Serengeti Safari",
            focus: "Big Five Safaris",
            type: "Wildlife safari",
            images: [img3, img4, img5, img9, img17],
            description: "Witness the Great Migration and spot the Big Five in the endless plains of Serengeti.",
            highlights: ["Great Migration", "Big Five", "Hot Air Balloon"],
            itinerary: [
                { day: "Day 1", title: "Arrival & First Game Drive", details: "Transfer to Serengeti. Late afternoon game drive to spot lions, elephants, and other wildlife." },
                { day: "Day 2", title: "Full Day Serengeti", details: "Full-day game drive through endless plains. High chances to see the Big Five and the Great Migration (seasonal). Optional hot air balloon ride available." },
                { day: "Day 3", title: "Early Game Drive & Departure", details: "Early morning game drive to catch predators hunting. Transfer back to Arusha airport." }
            ]
        },
        {
            id: 4,
            days: "3 Days",
            title: "Ngorongoro Crater Safari",
            focus: "Crater Safari",
            type: "Wildlife safari",
            images: [img6, img2, img8, day3, img1],
            description: "Explore the world's largest inactive volcanic caldera, home to the Big Five and flamingos.",
            highlights: ["Black Rhinos", "Flamingos", "Crater Floor"],
            itinerary: [
                { day: "Day 1", title: "Arrival & Crater Rim", details: "Transfer to Ngorongoro. Visit the crater rim for breathtaking views of the volcanic caldera and surrounding landscapes." },
                { day: "Day 2", title: "Crater Floor Exploration", details: "Descend 600m into the crater floor. Full-day game drive to spot the Big Five, including endangered black rhinos, in their natural habitat." },
                { day: "Day 3", title: "Return & Departure", details: "Final game drive on the crater floor. Return to Arusha for departure or onward journey." }
            ]
        },
        {
            id: 5,
            days: "6 Days",
            title: "6 Days Ultimate Tanzania Safari",
            focus: "Ultimate Tanzania Experience",
            type: "Wildlife safari",
            images: [day1, day2, day3, day4, day5, day6],
            description: "Experience the best of Tanzania with visits to Tarangire, Serengeti, and Ngorongoro Crater. Spot elephant herds, lions, cheetahs, and the Big Five.",
            highlights: ["Tarangire National Park", "Serengeti Migration", "Ngorongoro Crater", "Big Five", "Elephant Herds", "Baobab Trees"],
            itinerary: [
                { day: "Day 1", title: "Arrival – Arusha", details: "Airport pick-up and transfer to hotel in Arusha. Relaxation & safari briefing from expert guides." },
                { day: "Day 2", title: "Arusha → Tarangire National Park", details: "Full-day game drive featuring large elephant herds and iconic baobab trees. Tarangire is famous for its diverse wildlife and scenic beauty." },
                { day: "Day 3", title: "Tarangire → Serengeti", details: "Drive to Serengeti with game viewing en route. Enter the endless plains of the Serengeti and experience its untamed beauty." },
                { day: "Day 4", title: "Full Day Serengeti", details: "Full-day game drive with high chances to see lions 🦁, cheetahs, and wildebeest migration (seasonal). Witness one of nature's greatest spectacles." },
                { day: "Day 5", title: "Serengeti → Ngorongoro", details: "Morning game drive in Serengeti. Transfer to Ngorongoro area. Prepare for the crater exploration." },
                { day: "Day 6", title: "Ngorongoro Crater → Arusha", details: "Crater descent (UNESCO World Heritage Site) with high chances to spot rhinos 🦏 and the Big Five. Return to Arusha for departure." }
            ]
        }
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState({});

    useEffect(() => {
        const indices = {};
        safaris.forEach(safari => {
            indices[safari.id] = 0;
        });
        setCurrentImageIndex(indices);

        const intervals = safaris.map(safari => {
            return setInterval(() => {
                setCurrentImageIndex(prev => ({
                    ...prev,
                    [safari.id]: (prev[safari.id] + 1) % safari.images.length
                }));
            }, 4000);
        });

        return () => intervals.forEach(interval => clearInterval(interval));
    }, []);

    const handleOpenBookingForm = (safari) => {
        setSelectedSafari(safari);
        setShowBookingForm(true);
    };

    return (
        <div style={{ padding: '60px 20px', background: '#FAF7F2' }}>
            <style>{`
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
            <div className="container-custom">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span style={{ color: '#D97706', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '600' }}>Our Safari Collections</span>
                    <h1 style={{ fontSize: '48px', marginBottom: '16px', marginTop: '12px', color: '#1F2937' }}>Handpicked Journeys Designed by Local Safari Specialists</h1>
                    <p style={{ fontSize: '18px', color: '#6B7280', maxWidth: '600px', margin: '0 auto' }}>
                        Choose from our carefully crafted safari experiences. Contact us for personalized pricing.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '40px', marginBottom: '60px' }}>
                    {safaris.map(safari => (
                        <React.Fragment key={safari.id}>
                            <div
                                style={{
                                    background: 'white',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    cursor: 'pointer',
                                    transform: hoveredSafari === safari.id ? 'translateY(-12px)' : 'translateY(0)',
                                    boxShadow: hoveredSafari === safari.id ? '0 20px 35px -10px rgba(0,0,0,0.2)' : '0 4px 6px rgba(0,0,0,0.05)',
                                    border: '1px solid #E5E7EB'
                                }}
                                onMouseEnter={() => setHoveredSafari(safari.id)}
                                onMouseLeave={() => setHoveredSafari(null)}
                            >
                            <div style={{ position: 'relative', height: '320px', overflow: 'hidden' }}>
                                <img
                                    src={safari.images[currentImageIndex[safari.id]]}
                                    alt={safari.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.6s ease',
                                        transform: hoveredSafari === safari.id ? 'scale(1.1)' : 'scale(1)'
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '20px',
                                    left: '20px',
                                    background: '#D97706',
                                    color: 'white',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontWeight: 'bold',
                                    fontSize: '14px'
                                }}>
                                    {safari.days}
                                </div>
                                <div style={{
                                    position: 'absolute',
                                    bottom: '20px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    display: 'flex',
                                    gap: '8px',
                                    background: 'rgba(0,0,0,0.6)',
                                    padding: '6px 12px',
                                    borderRadius: '20px',
                                    backdropFilter: 'blur(5px)'
                                }}>
                                    {safari.images.map((_, idx) => (
                                        <div
                                            key={idx}
                                            style={{
                                                width: '8px',
                                                height: '8px',
                                                borderRadius: '50%',
                                                background: currentImageIndex[safari.id] === idx ? '#D97706' : 'white',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s'
                                            }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setCurrentImageIndex(prev => ({
                                                    ...prev,
                                                    [safari.id]: idx
                                                }));
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div style={{ padding: '28px' }}>
                                <h3 style={{ fontSize: '22px', marginBottom: '12px', color: '#1F2937', fontWeight: '700' }}>
                                    {safari.title}
                                </h3>
                                <div style={{ marginBottom: '16px' }}>
                                    <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '6px' }}>
                                        <strong>Focus:</strong> {safari.focus}
                                    </p>
                                    <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '6px' }}>
                                        <strong>Type:</strong> {safari.type}
                                    </p>
                                </div>
                                <p style={{ color: '#6B7280', marginBottom: '20px', lineHeight: 1.6 }}>
                                    {safari.description}
                                </p>
                                <div style={{ marginBottom: '20px' }}>
                                    <strong style={{ color: '#1F2937' }}>Highlights:</strong>
                                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
                                        {safari.highlights.map((highlight, idx) => (
                                            <span key={idx} style={{
                                                background: '#F3F4F6',
                                                padding: '4px 12px',
                                                borderRadius: '20px',
                                                fontSize: '12px',
                                                color: '#4B5563'
                                            }}>
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #E5E7EB', paddingTop: '20px', gap: '12px' }}>
                                    <button
                                        onClick={() => setExpandedSafari(expandedSafari === safari.id ? null : safari.id)}
                                        style={{
                                            background: 'transparent',
                                            color: '#D97706',
                                            padding: '10px 20px',
                                            border: '2px solid #D97706',
                                            borderRadius: '30px',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            fontSize: '14px'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = '#D97706';
                                            e.target.style.color = 'white';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = 'transparent';
                                            e.target.style.color = '#D97706';
                                        }}
                                    >
                                        {expandedSafari === safari.id ? '✕ Close' : '📖 Explore'}
                                    </button>
                                    <button
                                        onClick={() => handleOpenBookingForm(safari)}
                                        style={{
                                            background: 'linear-gradient(135deg, #D97706 0%, #E67E22 100%)',
                                            color: 'white',
                                            padding: '12px 28px',
                                            border: 'none',
                                            borderRadius: '30px',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            boxShadow: '0 2px 8px rgba(217,119,6,0.3)',
                                            flex: 1
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.transform = 'translateY(-2px)';
                                            e.target.style.boxShadow = '0 4px 12px rgba(217,119,6,0.4)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.transform = 'translateY(0)';
                                            e.target.style.boxShadow = '0 2px 8px rgba(217,119,6,0.3)';
                                        }}
                                    >
                                        Request Quote
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Expanded Safari Details */}
                        {expandedSafari === safari.id && (
                            <div style={{
                                gridColumn: '1 / -1',
                                background: 'linear-gradient(135deg, rgba(217,119,6,0.08) 0%, rgba(230,126,34,0.08) 100%)',
                                borderRadius: '16px',
                                padding: '40px',
                                border: '2px solid rgba(217,119,6,0.2)',
                                animation: 'slideDown 0.3s ease-out'
                            }}>
                                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1F2937', marginBottom: '30px' }}>
                                    ✈️ {safari.days} Itinerary Overview
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                                    {safari.itinerary.map((item, idx) => (
                                        <div key={idx} style={{
                                            background: 'white',
                                            padding: '24px',
                                            borderRadius: '12px',
                                            border: '1px solid #E5E7EB',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-4px)';
                                            e.currentTarget.style.boxShadow = '0 8px 16px rgba(217,119,6,0.15)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                                        }}>
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '12px',
                                                marginBottom: '12px'
                                            }}>
                                                <div style={{
                                                    background: '#D97706',
                                                    color: 'white',
                                                    width: '40px',
                                                    height: '40px',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 'bold',
                                                    fontSize: '16px'
                                                }}>
                                                    {idx + 1}
                                                </div>
                                                <div>
                                                    <div style={{ fontSize: '14px', color: '#D97706', fontWeight: '600', textTransform: 'uppercase' }}>
                                                        {item.day}
                                                    </div>
                                                    <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#1F2937', margin: '4px 0 0 0' }}>
                                                        {item.title}
                                                    </h4>
                                                </div>
                                            </div>
                                            <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: '1.6', margin: '12px 0 0 0' }}>
                                                {item.details}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        </React.Fragment>
                    ))}
                </div>

                <div style={{
                    background: 'linear-gradient(135deg, rgba(217,119,6,0.05) 0%, rgba(230,126,34,0.05) 100%)',
                    borderRadius: '20px',
                    padding: '60px',
                    textAlign: 'center',
                    border: '1px solid rgba(217,119,6,0.2)'
                }}>
                    <h2 style={{ marginBottom: '16px', fontSize: '32px', color: '#1F2937' }}>✨ Plan Your Custom Safari</h2>
                    <p style={{ color: '#6B7280', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px', fontSize: '18px' }}>
                        Can't find what you're looking for? Create your own personalized safari experience tailored to your preferences and budget.
                    </p>
                    <Link to="/contact" style={{
                        background: 'linear-gradient(135deg, #D97706 0%, #E67E22 100%)',
                        color: 'white',
                        padding: '14px 40px',
                        borderRadius: '30px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        display: 'inline-block',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(217,119,6,0.3)'
                    }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 4px 12px rgba(217,119,6,0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 2px 8px rgba(217,119,6,0.3)';
                        }}>
                        Contact Us to Customize →
                    </Link>
                </div>
            </div>

            {/* Email Booking Form Modal */}
            {showBookingForm && selectedSafari && (
                <EmailBookingForm
                    safari={selectedSafari}
                    onClose={() => {
                        setShowBookingForm(false);
                        setSelectedSafari(null);
                    }}
                />
            )}
        </div>
    );
};

export default Services;