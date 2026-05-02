import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Testimonials = () => {
    const [email, setEmail] = useState('');
    const [isSubscribing, setIsSubscribing] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);

    const testimonials = [
        {
            name: "Sarah Johnson",
            country: "USA",
            rating: 5,
            text: "An absolutely incredible experience! The guides were knowledgeable, the accommodations were luxurious, and every moment was magical. The Serengeti migration was breathtaking!",
            safari: "Serengeti Migration Safari"
        },
        {
            name: "Michael Chen",
            country: "Singapore",
            rating: 4,
            text: "Best safari of my life. The attention to detail and personalized service made this trip unforgettable. Highly recommended for anyone visiting Tanzania!",
            safari: "Kilimanjaro Hiking"
        },
        {
            name: "David Kim",
            country: "South Korea",
            rating: 5,
            text: "The guides were incredibly knowledgeable about animal behavior and habitats. We saw everything from lions hunting to elephants bathing. Amazing experience!",
            safari: "Northern Tanzania Safari"
        },
        {
            name: "James Wilson",
            country: "Australia",
            rating: 4,
            text: "Incredible value for money. The team went above and beyond to ensure we had the best experience. The hot air balloon ride over Serengeti was unforgettable!",
            safari: "Luxury Safari Package"
        }
    ];

    const renderStars = (rating) => {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    };

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email) {
            toast.error('Please enter your email address');
            return;
        }

        setIsSubscribing(true);

        const formDataToSend = new FormData();
        formDataToSend.append('access_key', '57f5f674-b25d-46c6-a012-d361d52e5b55');
        formDataToSend.append('subject', 'Newsletter Subscription - ZOE Wildlife Safaris');
        formDataToSend.append('from_email', email);
        formDataToSend.append('message', `
NEWSLETTER SUBSCRIPTION

Email: ${email}

This user has subscribed to the ZOE Wildlife Safaris newsletter.
        `);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formDataToSend
            });
            const result = await response.json();

            if (result.success) {
                setIsSubscribed(true);
                toast.success('Subscribed successfully! You\'ll receive our latest updates.');
                setEmail('');
                setTimeout(() => {
                    setIsSubscribed(false);
                }, 3000);
            } else {
                toast.error('Subscription failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Failed to subscribe. Please try again.');
        } finally {
            setIsSubscribing(false);
        }
    };

    return (
        <div style={{ padding: '60px 20px', background: '#FAF7F2' }}>
            <div className="container-custom">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span style={{ color: '#D97706', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '600' }}>Testimonials</span>
                    <h1 style={{ fontSize: '48px', marginBottom: '16px', marginTop: '12px', color: '#1F2937' }}>What Our Travelers Say</h1>
                    <p style={{ fontSize: '18px', color: '#6B7280', maxWidth: '600px', margin: '0 auto' }}>
                        Real experiences from real adventurers
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '30px'
                }}>
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'white',
                                border: '1px solid #E5E7EB',
                                borderRadius: '16px',
                                padding: '28px',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'pointer'
                            }}
                            className="testimonial-card"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 20px 25px -12px rgba(0,0,0,0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{ marginBottom: '16px' }}>
                                <div style={{ fontSize: '24px', color: '#F5B042', letterSpacing: '2px' }}>
                                    {renderStars(testimonial.rating)}
                                </div>
                            </div>
                            <p style={{ color: '#6B7280', lineHeight: 1.6, marginBottom: '20px', fontStyle: 'italic' }}>
                                "{testimonial.text}"
                            </p>
                            <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '16px' }}>
                                <p style={{ fontWeight: 'bold', color: '#1F2937', marginBottom: '4px' }}>
                                    {testimonial.name}
                                </p>
                                <p style={{ color: '#D97706', fontSize: '14px', marginBottom: '4px' }}>
                                    {testimonial.country}
                                </p>
                                <p style={{ color: '#6B7280', fontSize: '14px' }}>
                                    Safari: {testimonial.safari}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Newsletter Subscription Section */}
                <div style={{
                    marginTop: '60px',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, rgba(217,119,6,0.1) 0%, rgba(230,126,34,0.1) 100%)',
                    padding: '60px',
                    borderRadius: '24px',
                    border: '1px solid rgba(217,119,6,0.2)'
                }}>
                    <h2 style={{ marginBottom: '16px', fontSize: '32px', color: '#1F2937' }}>Stay Updated with Safari News</h2>
                    <p style={{ color: '#6B7280', marginBottom: '32px', fontSize: '18px', maxWidth: '500px', margin: '0 auto 32px' }}>
                        Subscribe to our newsletter for exclusive offers, travel tips, and wildlife stories
                    </p>

                    <form onSubmit={handleSubscribe} style={{ maxWidth: '500px', margin: '0 auto' }}>
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    flex: 1,
                                    minWidth: '250px',
                                    padding: '14px 20px',
                                    border: '2px solid #E5E7EB',
                                    borderRadius: '12px',
                                    background: 'white',
                                    color: '#1F2937',
                                    fontSize: '15px',
                                    outline: 'none',
                                    transition: 'all 0.3s'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#D97706'}
                                onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                                required
                            />
                            <button
                                type="submit"
                                disabled={isSubscribing}
                                style={{
                                    padding: '14px 32px',
                                    background: isSubscribed
                                        ? '#10B981'
                                        : 'linear-gradient(135deg, #D97706 0%, #E67E22 100%)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '12px',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    cursor: isSubscribing ? 'not-allowed' : 'pointer',
                                    transition: 'all 0.3s ease',
                                    opacity: isSubscribing ? 0.7 : 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}
                                onMouseEnter={(e) => {
                                    if (!isSubscribing && !isSubscribed) {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 5px 15px rgba(217,119,6,0.3)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                {isSubscribing ? (
                                    <>
                                        <span className="spinner" style={{
                                            width: '18px',
                                            height: '18px',
                                            border: '2px solid white',
                                            borderTopColor: 'transparent',
                                            borderRadius: '50%',
                                            display: 'inline-block',
                                            animation: 'spin 0.8s linear infinite'
                                        }} />
                                        Subscribing...
                                    </>
                                ) : isSubscribed ? (
                                    <>
                                        ✓ Subscribed!
                                    </>
                                ) : (
                                    <>
                                        📧 Subscribe Now
                                    </>
                                )}
                            </button>
                        </div>
                        <p style={{
                            fontSize: '12px',
                            color: '#9CA3AF',
                            marginTop: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '6px'
                        }}>
                            <span>🔒</span> We respect your privacy. Unsubscribe at any time.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;