import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Footer = () => {
    const [subscribeEmail, setSubscribeEmail] = useState('');
    const [isSubscribing, setIsSubscribing] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!subscribeEmail) {
            toast.error('Please enter your email address');
            return;
        }

        setIsSubscribing(true);

        const formDataToSend = new FormData();
        formDataToSend.append('access_key', '57f5f674-b25d-46c6-a012-d361d52e5b55');
        formDataToSend.append('subject', 'Newsletter Subscription - ZOE Wildlife Safaris');
        formDataToSend.append('from_email', subscribeEmail);
        formDataToSend.append('message', `
NEWSLETTER SUBSCRIPTION

Email: ${subscribeEmail}

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
                setSubscribeEmail('');
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
        <footer style={{
            background: 'white',
            borderTop: '1px solid #e5e4e7',
            padding: '60px 20px 30px',
            marginTop: '60px'
        }}>
            <div className="container-custom">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '40px',
                    marginBottom: '40px'
                }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                            <div style={{ fontSize: '24px' }}>🦁</div>
                            <div>
                                <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937' }}>ZOE</div>
                                <div style={{ fontSize: '12px', color: '#D97706' }}>Wildlife Safaris</div>
                            </div>
                        </div>
                        <p style={{ color: '#6B7280', lineHeight: 1.6, marginBottom: '20px' }}>
                            Immersive journeys through the wild connecting you deeper to Africa's soul, its people, and its untamed beauty.
                        </p>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <span style={{ fontSize: '20px', cursor: 'pointer' }}>📘</span>
                            <span style={{ fontSize: '20px', cursor: 'pointer' }}>🐦</span>
                            <span style={{ fontSize: '20px', cursor: 'pointer' }}>📷</span>
                            <span style={{ fontSize: '20px', cursor: 'pointer' }}>▶️</span>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '20px', fontSize: '18px', color: '#1f2937' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '12px' }}><Link to="/services" style={{ color: '#6B7280', textDecoration: 'none' }}>Services</Link></li>
                            <li style={{ marginBottom: '12px' }}><Link to="/destinations" style={{ color: '#6B7280', textDecoration: 'none' }}>Destinations</Link></li>
                            <li style={{ marginBottom: '12px' }}><Link to="/testimonials" style={{ color: '#6B7280', textDecoration: 'none' }}>Testimonials</Link></li>
                            <li style={{ marginBottom: '12px' }}><Link to="/contact" style={{ color: '#6B7280', textDecoration: 'none' }}>Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '20px', fontSize: '18px', color: '#1f2937' }}>Contact Info</h4>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                            <span>📍</span>
                            <p style={{ color: '#6B7280' }}>Arusha, Tanzania</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                            <span>📞</span>
                            <p style={{ color: '#6B7280' }}>+255 714 500 162</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                            <span>✉️</span>
                            <p style={{ color: '#6B7280' }}>zwildlifesafaris@gmail.com</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <span>🕐</span>
                            <p style={{ color: '#6B7280' }}>Mon-Sat: 8am - 6pm</p>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '20px', fontSize: '18px', color: '#1f2937' }}>Newsletter</h4>
                        <p style={{ color: '#6B7280', marginBottom: '16px' }}>Subscribe for exclusive offers and safari updates.</p>
                        <form onSubmit={handleSubscribe}>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    value={subscribeEmail}
                                    onChange={(e) => setSubscribeEmail(e.target.value)}
                                    style={{
                                        flex: 1,
                                        padding: '12px',
                                        border: '1px solid #E5E7EB',
                                        borderRadius: '8px',
                                        background: 'white',
                                        color: '#1f2937'
                                    }}
                                    required
                                />
                                <button 
                                    type="submit"
                                    disabled={isSubscribing}
                                    className="btn-primary" 
                                    style={{ 
                                        padding: '12px 20px',
                                        background: isSubscribed ? '#10B981' : undefined,
                                        cursor: isSubscribing ? 'not-allowed' : 'pointer',
                                        opacity: isSubscribing ? 0.7 : 1
                                    }}
                                >
                                    {isSubscribing ? 'Subscribing...' : isSubscribed ? 'Subscribed' : 'Subscribe'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid #E5E7EB',
                    paddingTop: '30px',
                    textAlign: 'center',
                    color: '#6B7280',
                    fontSize: '14px'
                }}>
                    <p>&copy; 2025 ZOE Wildlife Safaris. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;