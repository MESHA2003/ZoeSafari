import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmailBookingForm from '../components/booking/EmailBookingForm';
import toast from 'react-hot-toast';
import img1 from '../assets/img1.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img11 from '../assets/img11.jpg';
import img12 from '../assets/img12.jpg';
import img13 from '../assets/img13.jpg';
import img14 from '../assets/img14.jpg';
import day2 from '../assets/2dy.jpg';
import day4 from '../assets/4dy.jpg';
import day5 from '../assets/5dy.jpg';

const Home = () => {
    const [currentBg, setCurrentBg] = useState(0);
    const [currentStoryImage, setCurrentStoryImage] = useState(0);
    const [showBookingForm, setShowBookingForm] = useState(false);
    const backgrounds = [img1, img11, img12, day2, day4];
    const storyImages = [img14, img11, img5, img13, day5];

    // Sample safari for direct booking from home page
    const sampleSafari = {
        id: 1,
        days: "4 Days",
        title: "Northern Tanzania Safari Escape",
        focus: "Northern Safaris",
        type: "Wildlife safari",
        price: 1200,
        description: "Experience the best of Northern Tanzania's wildlife including Serengeti and Ngorongoro Crater.",
        highlights: ["Serengeti Migration", "Ngorongoro Crater", "Lake Manyara"]
    };

    useEffect(() => {
        // Hero background slider
        const bgInterval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgrounds.length);
        }, 5000);

        // Brand story image transition
        const storyInterval = setInterval(() => {
            setCurrentStoryImage((prev) => (prev + 1) % storyImages.length);
        }, 4000);

        return () => {
            clearInterval(bgInterval);
            clearInterval(storyInterval);
        };
    }, []);

    const handlePlanYourJourney = () => {
        setShowBookingForm(true);
    };

    return (
        <div>
            {/* Hero Section with Background Slider */}
            <div style={{
                position: 'relative',
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden'
            }}>
                {/* Background Images */}
                {backgrounds.map((bg, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `url(${bg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: currentBg === index ? 1 : 0,
                            transition: 'opacity 1.5s ease-in-out',
                            zIndex: 0
                        }}
                    />
                ))}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)',
                    zIndex: 1
                }} />

                {/* Hero Content */}
                <div className="container-custom" style={{ position: 'relative', zIndex: 2, color: 'white', padding: '60px 20px' }}>
                    <div style={{ maxWidth: '700px' }}>
                        <h1 style={{
                            fontSize: '72px',
                            fontWeight: 'bold',
                            marginBottom: '24px',
                            lineHeight: '1.1',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                        }}>
                            Go Beyond the<br />
                            Ordinary, The<br />
                            <span style={{ color: '#D97706' }}>ZOE Wildlife Way</span>
                        </h1>
                        <p style={{
                            fontSize: '20px',
                            marginBottom: '40px',
                            lineHeight: '1.6',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                        }}>
                            Immersive journeys through the wild where every moment connects you<br />
                            deeper to Africa's soul, its people, and its untamed beauty.
                        </p>
                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            <Link to="/services" className="btn-primary" style={{ fontSize: '18px', padding: '14px 32px' }}>
                                Start Your Safari →
                            </Link>
                            <button
                                onClick={handlePlanYourJourney}
                                className="btn-outline"
                                style={{
                                    fontSize: '18px',
                                    padding: '14px 32px',
                                    background: 'rgba(255,255,255,0.2)',
                                    border: '1px solid white',
                                    color: 'white',
                                    cursor: 'pointer',
                                    borderRadius: '30px',
                                    fontWeight: '600',
                                    fontFamily: 'inherit'
                                }}
                            >
                                Plan Your Journey
                            </button>
                        </div>
                    </div>
                </div>

                {/* Slider Dots */}
                <div style={{
                    position: 'absolute',
                    bottom: '30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '12px',
                    zIndex: 2
                }}>
                    {backgrounds.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentBg(index)}
                            style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                border: 'none',
                                background: currentBg === index ? '#D97706' : 'rgba(255,255,255,0.5)',
                                cursor: 'pointer',
                                transition: 'all 0.3s'
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Our Brand Story Section - Left Text, Right Transitioning Images */}
            <div className="container-custom" style={{ padding: '100px 20px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '60px',
                    alignItems: 'center'
                }}>
                    {/* Left side - Text Content */}
                    <div className="animate-slideLeft">
                        <span style={{ color: '#D97706', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '600' }}>Our Brand Story</span>
                        <h2 style={{ fontSize: '42px', marginBottom: '24px', marginTop: '12px', color: '#1F2937', fontWeight: '700' }}>
                            ZOE Wildlife Safaris
                        </h2>
                        <p style={{ color: '#4B5563', lineHeight: '1.8', fontSize: '17px', marginBottom: '20px' }}>
                            We are a leading company in Tanzania tourism industry with over <strong style={{ color: '#D97706' }}>5 years</strong> of unrivaled experience.
                            Our mission is to create immersive journeys that connect travelers deeper to Africa's soul,
                            its people, and its untamed beauty.
                        </p>
                        <p style={{ color: '#4B5563', lineHeight: '1.8', fontSize: '17px', marginBottom: '30px' }}>
                            Every safari we design is a carefully crafted experience, managed by seasoned tour experts
                            based in Tanzania who know these landscapes intimately.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '40px' }}>
                            <div style={{
                                background: 'linear-gradient(135deg, rgba(217,119,6,0.1) 0%, rgba(230,126,34,0.1) 100%)',
                                padding: '24px',
                                borderRadius: '16px',
                                border: '1px solid rgba(217,119,6,0.2)'
                            }}>
                                <div style={{ fontSize: '40px', marginBottom: '12px' }}>🦁</div>
                                <h4 style={{ marginBottom: '8px', color: '#1F2937', fontSize: '18px', fontWeight: '700' }}>Expert Guides</h4>
                                <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.5' }}>Seasoned professionals based in Tanzania</p>
                            </div>
                            <div style={{
                                background: 'linear-gradient(135deg, rgba(217,119,6,0.1) 0%, rgba(230,126,34,0.1) 100%)',
                                padding: '24px',
                                borderRadius: '16px',
                                border: '1px solid rgba(217,119,6,0.2)'
                            }}>
                                <div style={{ fontSize: '40px', marginBottom: '12px' }}>✨</div>
                                <h4 style={{ marginBottom: '8px', color: '#1F2937', fontSize: '18px', fontWeight: '700' }}>Tailor-Made Journeys</h4>
                                <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.5' }}>Luxury safaris designed around you</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', paddingTop: '20px', borderTop: '1px solid #E5E7EB' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#D97706' }}>5+</div>
                                <div style={{ color: '#6B7280', fontSize: '14px', fontWeight: '500' }}>Years of Excellence</div>
                            </div>
                            <div style={{ width: '1px', height: '40px', background: '#E5E7EB' }}></div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#D97706' }}>2000+</div>
                                <div style={{ color: '#6B7280', fontSize: '14px', fontWeight: '500' }}>Happy Travelers</div>
                            </div>
                            <div style={{ width: '1px', height: '40px', background: '#E5E7EB' }}></div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#D97706' }}>98%</div>
                                <div style={{ color: '#6B7280', fontSize: '14px', fontWeight: '500' }}>Satisfaction Rate</div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Transitioning Images in a Beautiful Box */}
                    <div className="animate-slideRight">
                        <div style={{
                            position: 'relative',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                            background: '#1F2937'
                        }}>
                            {/* Transitioning Image */}
                            <div style={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
                                {storyImages.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`ZOE Wildlife Story ${index + 1}`}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            opacity: currentStoryImage === index ? 1 : 0,
                                            transition: 'opacity 1s ease-in-out'
                                        }}
                                    />
                                ))}

                                {/* Overlay Gradient */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                    padding: '40px',
                                    zIndex: 2
                                }}>
                                    <div style={{ color: 'white', textAlign: 'center' }}>
                                        <div style={{ fontSize: '14px', letterSpacing: '2px', marginBottom: '8px' }}>DISCOVER</div>
                                        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>The ZOE Wildlife Experience</div>
                                    </div>
                                </div>
                            </div>

                            {/* Image Indicators */}
                            <div style={{
                                position: 'absolute',
                                bottom: '20px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                display: 'flex',
                                gap: '12px',
                                zIndex: 3
                            }}>
                                {storyImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentStoryImage(index)}
                                        style={{
                                            width: '10px',
                                            height: '10px',
                                            borderRadius: '50%',
                                            border: 'none',
                                            background: currentStoryImage === index ? '#D97706' : 'rgba(255,255,255,0.5)',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s',
                                            padding: 0
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div style={{ background: 'linear-gradient(135deg, rgba(217,119,6,0.05) 0%, rgba(230,126,34,0.05) 100%)', padding: '80px 20px' }}>
                <div className="container-custom">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ color: '#D97706', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '600' }}>Why Choose Us</span>
                        <h2 style={{ fontSize: '42px', marginBottom: '16px', marginTop: '12px', color: '#1F2937' }}>We Combine Expertise, Transparency, and Passion</h2>
                        <p style={{ color: '#6B7280', maxWidth: '600px', margin: '0 auto', fontSize: '17px' }}>
                            Creating unforgettable African adventures with local knowledge and personalized service
                        </p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
                        <div style={{ textAlign: 'center', padding: '40px', background: 'white', borderRadius: '20px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', transition: 'transform 0.3s' }} className="hover-lift">
                            <div style={{ fontSize: '50px', marginBottom: '20px' }}>🦁</div>
                            <h3 style={{ marginBottom: '12px', fontSize: '22px', fontWeight: '700' }}>Experienced Safari Specialists</h3>
                            <p style={{ color: '#6B7280', lineHeight: '1.6' }}>Managed by seasoned tour experts based in Tanzania with deep local knowledge.</p>
                        </div>
                        <div style={{ textAlign: 'center', padding: '40px', background: 'white', borderRadius: '20px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', transition: 'transform 0.3s' }} className="hover-lift">
                            <div style={{ fontSize: '50px', marginBottom: '20px' }}>✨</div>
                            <h3 style={{ marginBottom: '12px', fontSize: '22px', fontWeight: '700' }}>Tailor-Made Itineraries</h3>
                            <p style={{ color: '#6B7280', lineHeight: '1.6' }}>Luxury safari journeys designed around your preferences and interests.</p>
                        </div>
                        <div style={{ textAlign: 'center', padding: '40px', background: 'white', borderRadius: '20px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', transition: 'transform 0.3s' }} className="hover-lift">
                            <div style={{ fontSize: '50px', marginBottom: '20px' }}>💰</div>
                            <h3 style={{ marginBottom: '12px', fontSize: '22px', fontWeight: '700' }}>Fair & Transparent Pricing</h3>
                            <p style={{ color: '#6B7280', lineHeight: '1.6' }}>Best price guarantee with zero hidden costs, so you know exactly what to expect.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="container-custom" style={{ padding: '80px 20px', textAlign: 'center' }}>
                <div style={{
                    background: 'linear-gradient(135deg, #D97706 0%, #E67E22 100%)',
                    borderRadius: '24px',
                    padding: '60px 40px',
                    color: 'white'
                }}>
                    <h2 style={{ fontSize: '36px', marginBottom: '16px', color: 'white' }}>Ready for Your African Adventure?</h2>
                    <p style={{ fontSize: '18px', marginBottom: '32px', opacity: 0.95, maxWidth: '600px', margin: '0 auto 32px' }}>
                        Book your safari today and experience the magic of Tanzania with ZOE Wildlife Safaris
                    </p>
                    <Link to="/services" className="btn-primary" style={{ background: 'white', color: '#D97706', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
                        Plan Your Safari Now →
                    </Link>
                </div>
            </div>

            {/* Email Booking Form Modal */}
            {showBookingForm && (
                <EmailBookingForm
                    safari={sampleSafari}
                    onClose={() => setShowBookingForm(false)}
                />
            )}
        </div>
    );
};

export default Home;