import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [subscribeEmail, setSubscribeEmail] = useState('');
    const [isSubscribing, setIsSubscribing] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formDataToSend = new FormData();
        formDataToSend.append('access_key', '57f5f674-b25d-46c6-a012-d361d52e5b55');
        formDataToSend.append('subject', `Contact Form: ${formData.subject}`);
        formDataToSend.append('from_name', formData.name);
        formDataToSend.append('from_email', formData.email);
        formDataToSend.append('message', `
========================================
NEW CONTACT FORM SUBMISSION
========================================

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Subject: ${formData.subject}

MESSAGE:
----------------------------------------
${formData.message}

========================================
Please respond to this inquiry within 24 hours.
========================================
        `);
        formDataToSend.append('replyto', formData.email);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formDataToSend
            });
            const result = await response.json();

            if (result.success) {
                toast.success('Message sent successfully! We will get back to you soon.');
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            } else {
                toast.error('Failed to send. Please try again or call us directly.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Failed to send. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

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

    // WhatsApp number
    const whatsappNumber = "+255762704464";
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    return (
        <div style={{ padding: '60px 20px', background: '#FAF7F2' }}>
            <div className="container-custom">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span style={{ color: '#D97706', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '600' }}>Get in Touch</span>
                    <h1 style={{ fontSize: '48px', marginBottom: '16px', marginTop: '12px', color: '#1F2937' }}>Contact ZOE Wildlife Safaris</h1>
                    <p style={{ fontSize: '18px', color: '#6B7280', maxWidth: '600px', margin: '0 auto' }}>
                        Get in touch with our safari specialists to plan your dream adventure
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
                    gap: '50px'
                }}>
                    {/* Contact Information */}
                    <div>
                        <div style={{
                            background: 'white',
                            borderRadius: '20px',
                            padding: '40px',
                            boxShadow: '0 20px 35px -10px rgba(0,0,0,0.1)'
                        }}>
                            <h2 style={{ marginBottom: '28px', fontSize: '24px', color: '#1F2937' }}>Get in Touch</h2>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '24px' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    background: 'rgba(217,119,6,0.1)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '24px'
                                }}>
                                    📍
                                </div>
                                <div>
                                    <strong style={{ fontSize: '16px', color: '#1F2937', display: 'block', marginBottom: '4px' }}>Visit Us</strong>
                                    <p style={{ color: '#6B7280', margin: 0 }}>Arusha, Tanzania<br />Safari Street, Clock Tower Building</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '24px' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    background: 'rgba(217,119,6,0.1)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '24px'
                                }}>
                                    📞
                                </div>
                                <div>
                                    <strong style={{ fontSize: '16px', color: '#1F2937', display: 'block', marginBottom: '4px' }}>Call Us</strong>
                                    <p style={{ color: '#6B7280', margin: 0 }}>+255 762 704 464</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '24px' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    background: 'rgba(217,119,6,0.1)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '24px'
                                }}>
                                    💬
                                </div>
                                <div>
                                    <strong style={{ fontSize: '16px', color: '#1F2937', display: 'block', marginBottom: '4px' }}>WhatsApp</strong>
                                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none' }}>
                                        +255 762 704 464
                                    </a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '24px' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    background: 'rgba(217,119,6,0.1)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '24px'
                                }}>
                                    ✉️
                                </div>
                                <div>
                                    <strong style={{ fontSize: '16px', color: '#1F2937', display: 'block', marginBottom: '4px' }}>Email Us</strong>
                                    <p style={{ color: '#6B7280', margin: 0 }}>zwildlifesafaris@gmail.com<br />bookings@zoewildlife.com</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    background: 'rgba(217,119,6,0.1)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '24px'
                                }}>
                                    🕐
                                </div>
                                <div>
                                    <strong style={{ fontSize: '16px', color: '#1F2937', display: 'block', marginBottom: '4px' }}>Office Hours</strong>
                                    <p style={{ color: '#6B7280', margin: 0 }}>Monday - Friday: 8am - 6pm<br />Saturday: 9am - 4pm</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Section */}
                        <div style={{
                            marginTop: '30px',
                            background: 'white',
                            borderRadius: '20px',
                            padding: '30px',
                            textAlign: 'center',
                            boxShadow: '0 20px 35px -10px rgba(0,0,0,0.1)'
                        }}>
                            <h3 style={{ marginBottom: '20px', fontSize: '20px', color: '#1F2937' }}>Follow Our Journey</h3>
                            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                                <a href="#" style={{
                                    width: '48px',
                                    height: '48px',
                                    background: '#1877F2',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s',
                                    textDecoration: 'none',
                                    fontSize: '24px'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                                    📘
                                </a>
                                <a href="#" style={{
                                    width: '48px',
                                    height: '48px',
                                    background: '#1DA1F2',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s',
                                    textDecoration: 'none',
                                    fontSize: '24px'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                                    🐦
                                </a>
                                <a href="#" style={{
                                    width: '48px',
                                    height: '48px',
                                    background: 'radial-gradient(circle at 30% 110%, #ffdb8a 0%, #feda77 25%, #e4405f 50%, #c13584 75%, #833ab4 100%)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s',
                                    textDecoration: 'none',
                                    fontSize: '24px'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                                    📷
                                </a>
                                <a href="#" style={{
                                    width: '48px',
                                    height: '48px',
                                    background: '#FF0000',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s',
                                    textDecoration: 'none',
                                    fontSize: '24px'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                                    ▶️
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <div style={{
                            background: 'white',
                            borderRadius: '20px',
                            padding: '40px',
                            boxShadow: '0 20px 35px -10px rgba(0,0,0,0.1)',
                            marginBottom: '30px'
                        }}>
                            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                                <span style={{ fontSize: '40px' }}>✉️</span>
                                <h2 style={{ fontSize: '28px', color: '#1F2937', marginTop: '8px' }}>Send Us a Message</h2>
                                <p style={{ color: '#6B7280', marginTop: '8px' }}>We'll respond within 24 hours</p>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', color: '#1F2937', fontWeight: '500', fontSize: '14px' }}>
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: '14px 16px',
                                            border: '2px solid #E5E7EB',
                                            borderRadius: '12px',
                                            background: 'white',
                                            color: '#1F2937',
                                            fontSize: '15px',
                                            transition: 'all 0.3s',
                                            outline: 'none'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = '#D97706'}
                                        onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                                        required
                                    />
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', color: '#1F2937', fontWeight: '500', fontSize: '14px' }}>
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: '14px 16px',
                                            border: '2px solid #E5E7EB',
                                            borderRadius: '12px',
                                            background: 'white',
                                            color: '#1F2937',
                                            fontSize: '15px',
                                            transition: 'all 0.3s',
                                            outline: 'none'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = '#D97706'}
                                        onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                                        required
                                    />
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', color: '#1F2937', fontWeight: '500', fontSize: '14px' }}>
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="+255 762 704 464"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: '14px 16px',
                                            border: '2px solid #E5E7EB',
                                            borderRadius: '12px',
                                            background: 'white',
                                            color: '#1F2937',
                                            fontSize: '15px',
                                            transition: 'all 0.3s',
                                            outline: 'none'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = '#D97706'}
                                        onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                                    />
                                </div>

                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', color: '#1F2937', fontWeight: '500', fontSize: '14px' }}>
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Safari Inquiry"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: '14px 16px',
                                            border: '2px solid #E5E7EB',
                                            borderRadius: '12px',
                                            background: 'white',
                                            color: '#1F2937',
                                            fontSize: '15px',
                                            transition: 'all 0.3s',
                                            outline: 'none'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = '#D97706'}
                                        onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                                        required
                                    />
                                </div>

                                <div style={{ marginBottom: '24px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', color: '#1F2937', fontWeight: '500', fontSize: '14px' }}>
                                        Message *
                                    </label>
                                    <textarea
                                        placeholder="Tell us about your safari dreams..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows="5"
                                        style={{
                                            width: '100%',
                                            padding: '14px 16px',
                                            border: '2px solid #E5E7EB',
                                            borderRadius: '12px',
                                            background: 'white',
                                            color: '#1F2937',
                                            fontSize: '15px',
                                            resize: 'vertical',
                                            transition: 'all 0.3s',
                                            outline: 'none',
                                            fontFamily: 'inherit'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = '#D97706'}
                                        onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    style={{
                                        width: '100%',
                                        padding: '16px',
                                        fontSize: '16px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '10px',
                                        background: 'linear-gradient(135deg, #D97706 0%, #E67E22 100%)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '12px',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        opacity: isSubmitting ? 0.7 : 1
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isSubmitting) {
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                            e.currentTarget.style.boxShadow = '0 5px 15px rgba(217,119,6,0.3)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    {isSubmitting ? (
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
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            ✉️ Send Message
                                        </>
                                    )}
                                </button>

                                <div style={{
                                    marginTop: '20px',
                                    padding: '12px',
                                    background: 'rgba(217,119,6,0.05)',
                                    borderRadius: '12px',
                                    textAlign: 'center'
                                }}>
                                    <span style={{ fontSize: '13px', color: '#6B7280' }}>
                                        🔒 We'll respond to your inquiry within 24 hours
                                    </span>
                                </div>
                            </form>
                        </div>

                        {/* Newsletter Section */}
                        <div style={{
                            background: 'linear-gradient(135deg, rgba(217,119,6,0.1) 0%, rgba(230,126,34,0.1) 100%)',
                            borderRadius: '20px',
                            padding: '30px',
                            textAlign: 'center',
                            border: '1px solid rgba(217,119,6,0.2)'
                        }}>
                            <span style={{ fontSize: '32px' }}>📧</span>
                            <h3 style={{ fontSize: '20px', color: '#1F2937', marginTop: '8px', marginBottom: '8px' }}>Stay Updated</h3>
                            <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '20px' }}>
                                Subscribe to our newsletter for exclusive offers and safari news
                            </p>
                            <form onSubmit={handleSubscribe} style={{ maxWidth: '100%', margin: '0 auto' }}>
                                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        value={subscribeEmail}
                                        onChange={(e) => setSubscribeEmail(e.target.value)}
                                        style={{
                                            flex: 1,
                                            padding: '12px 16px',
                                            border: '2px solid #E5E7EB',
                                            borderRadius: '10px',
                                            background: 'white',
                                            color: '#1F2937',
                                            fontSize: '14px',
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
                                            padding: '12px 24px',
                                            background: isSubscribed ? '#10B981' : 'linear-gradient(135deg, #D97706 0%, #E67E22 100%)',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '10px',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            cursor: isSubscribing ? 'not-allowed' : 'pointer',
                                            transition: 'all 0.3s ease',
                                            opacity: isSubscribing ? 0.7 : 1,
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        {isSubscribing ? (
                                            <>
                                                <span className="spinner" style={{
                                                    width: '16px',
                                                    height: '16px',
                                                    border: '2px solid white',
                                                    borderTopColor: 'transparent',
                                                    borderRadius: '50%',
                                                    display: 'inline-block',
                                                    animation: 'spin 0.8s linear infinite'
                                                }} />
                                                {' '}Subscribing...
                                            </>
                                        ) : isSubscribed ? (
                                            'Subscribed'
                                        ) : (
                                            'Subscribe'
                                        )}
                                    </button>
                                </div>
                            </form>
                            <p style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '16px' }}>
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div style={{
                    marginTop: '60px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 35px -10px rgba(0,0,0,0.1)'
                }}>
                    <iframe
                        title="ZOE Wildlife Safaris Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d509127.422417099!2d36.400000!3d-3.366667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18356b2c5f7b7b7b%3A0x7b7b7b7b7b7b7b7b!2sArusha%2C%20Tanzania!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;