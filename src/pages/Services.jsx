import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmailBookingForm from '../components/booking/EmailBookingForm';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';
import img11 from '../assets/img11.jpg';
import img12 from '../assets/img12.jpg';
import img13 from '../assets/img13.jpg';
import img15 from '../assets/img15.jpg';
import img16 from '../assets/img16.jpg';
import img17 from '../assets/img17.jpg';

const Services = () => {
    const [hoveredSafari, setHoveredSafari] = useState(null);
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [selectedSafari, setSelectedSafari] = useState(null);

    const safaris = [
        {
            id: 1,
            days: "4 Days",
            title: "Northern Tanzania Safari Escape",
            focus: "Northern Safaris",
            type: "Wildlife safari",
            images: [img6, img5, img3, img1, img11, img12],
            description: "Experience the best of Northern Tanzania's wildlife including Serengeti and Ngorongoro Crater.",
            highlights: ["Serengeti Migration", "Ngorongoro Crater", "Lake Manyara"]
        },
        {
            id: 2,
            days: "7 Days",
            title: "Kilimanjaro Hiking - Lemosho Route",
            focus: "Mountain Trekking",
            type: "Mountain trekking",
            images: [img2, img15, img16, img1, img11],
            description: "Conquer Africa's highest peak via the scenic Lemosho Route with expert mountain guides.",
            highlights: ["Uhuru Peak", "Shira Plateau", "Mawenzi Peak"]
        },
        {
            id: 3,
            days: "3 Days",
            title: "Serengeti Safari",
            focus: "Big Five Safaris",
            type: "Wildlife safari",
            images: [img10, img11, img12, img13, img1],
            description: "Witness the Great Migration and spot the Big Five in the endless plains of Serengeti.",
            highlights: ["Great Migration", "Big Five", "Hot Air Balloon"]
        },
        {
            id: 4,
            days: "3 Days",
            title: "Ngorongoro Crater Safari",
            focus: "Crater Safari",
            type: "Wildlife safari",
            images: [img9, img10, img17, img13, img11],
            description: "Explore the world's largest inactive volcanic caldera, home to the Big Five and flamingos.",
            highlights: ["Black Rhinos", "Flamingos", "Crater Floor"]
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
                        <div
                            key={safari.id}
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
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #E5E7EB', paddingTop: '20px' }}>
                                    <div>
                                        <span style={{ fontSize: '14px', color: '#D97706', fontWeight: '500' }}>
                                            ✨ Custom pricing available
                                        </span>
                                    </div>
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
                                            boxShadow: '0 2px 8px rgba(217,119,6,0.3)'
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