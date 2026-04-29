import React, { useState } from 'react';
import { X, Send, Calendar, Users, MessageSquare, Phone, Mail, User, MapPin, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const EmailBookingForm = ({ safari, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        number_of_people: 1,
        preferred_date: '',
        special_requests: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formDataToSend = new FormData();
        formDataToSend.append('access_key', '57f5f674-b25d-46c6-a012-d361d52e5b55');
        formDataToSend.append('subject', `New Safari Quote Request: ${safari.title}`);
        formDataToSend.append('from_name', formData.name);
        formDataToSend.append('from_email', formData.email);
        formDataToSend.append('message', `
========================================
NEW SAFARI QUOTE REQUEST
========================================

SAFARI DETAILS:
----------------------------------------
Safari: ${safari.title}
Duration: ${safari.days}
Focus: ${safari.focus}
Type: ${safari.type}

CUSTOMER DETAILS:
----------------------------------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Country: ${formData.country || 'Not specified'}

BOOKING DETAILS:
----------------------------------------
Number of People: ${formData.number_of_people}
Preferred Date: ${formData.preferred_date}

SPECIAL REQUESTS:
----------------------------------------
${formData.special_requests || 'No special requests'}

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
                toast.success('Quote request sent successfully! We will contact you within 24 hours.');
                onClose();
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

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            backdropFilter: 'blur(5px)'
        }}>
            <div style={{
                background: 'white',
                borderRadius: '24px',
                maxWidth: '550px',
                width: '90%',
                maxHeight: '90vh',
                overflow: 'auto',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)'
            }}>
                <div style={{
                    background: 'linear-gradient(135deg, #D97706 0%, #E67E22 100%)',
                    color: 'white',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div>
                        <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>Request Safari Quote</h3>
                        <p style={{ margin: '4px 0 0', fontSize: '13px', opacity: 0.9 }}>{safari.title} • {safari.days}</p>
                    </div>
                    <button onClick={onClose} style={{
                        background: 'rgba(255,255,255,0.2)',
                        border: 'none',
                        color: 'white',
                        cursor: 'pointer',
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <X size={18} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} style={{ padding: '24px' }}>
                    <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <AlertCircle size={14} color="#D97706" />
                        <p style={{ fontSize: '12px', color: '#6B7280', margin: 0 }}>
                            Fill in your details and we'll send you a personalized quote within 24 hours
                        </p>
                    </div>

                    {/* Personal Information Section */}
                    <div style={{ background: '#F9FAFB', borderRadius: '12px', padding: '18px', marginBottom: '20px' }}>
                        <h4 style={{ margin: '0 0 14px 0', fontSize: '15px', color: '#1F2937', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <User size={16} color="#D97706" />
                            Personal Information
                        </h4>

                        <div style={{ marginBottom: '14px' }}>
                            <label style={{ display: 'block', marginBottom: '5px', color: '#1F2937', fontWeight: '500', fontSize: '13px' }}>
                                Full Name *
                            </label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '10px 12px',
                                    border: '1px solid #E5E7EB',
                                    borderRadius: '8px',
                                    fontSize: '14px',
                                    outline: 'none'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#D97706'}
                                onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                                required
                            />
                        </div>

                        <div style={{ marginBottom: '14px' }}>
                            <label style={{ display: 'block', marginBottom: '5px', color: '#1F2937', fontWeight: '500', fontSize: '13px' }}>
                                <Mail size={13} style={{ display: 'inline', marginRight: '4px' }} />
                                Email Address *
                            </label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '10px 12px',
                                    border: '1px solid #E5E7EB',
                                    borderRadius: '8px',
                                    fontSize: '14px',
                                    outline: 'none'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#D97706'}
                                onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                                required
                            />
                        </div>

                        <div style={{ marginBottom: '14px' }}>
                            <label style={{ display: 'block', marginBottom: '5px', color: '#1F2937', fontWeight: '500', fontSize: '13px' }}>
                                <Phone size={13} style={{ display: 'inline', marginRight: '4px' }} />
                                Phone Number (WhatsApp) *
                            </label>
                            <input
                                type="tel"
                                placeholder="+255 XXX XXX XXX"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '10px 12px',
                                    border: '1px solid #E5E7EB',
                                    borderRadius: '8px',
                                    fontSize: '14px',
                                    outline: 'none'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#D97706'}
                                onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                                required
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', color: '#1F2937', fontWeight: '500', fontSize: '13px' }}>
                                <MapPin size={13} style={{ display: 'inline', marginRight: '4px' }} />
                                Country *
                            </label>
                            <input
                                type="text"
                                placeholder="e.g., USA, United Kingdom, Tanzania"
                                value={formData.country}
                                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '10px 12px',
                                    border: '1px solid #E5E7EB',
                                    borderRadius: '8px',
                                    fontSize: '14px',
                                    outline: 'none'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#D97706'}
                                onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                                required
                            />
                        </div>
                    </div>

                    {/* Safari Details Section */}
                    <div style={{ background: '#F9FAFB', borderRadius: '12px', padding: '18px', marginBottom: '20px' }}>
                        <h4 style={{ margin: '0 0 14px 0', fontSize: '15px', color: '#1F2937', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Calendar size={16} color="#D97706" />
                            Safari Details
                        </h4>

                        <div style={{ marginBottom: '14px' }}>
                            <label style={{ display: 'block', marginBottom: '5px', color: '#1F2937', fontWeight: '500', fontSize: '13px' }}>
                                <Users size={13} style={{ display: 'inline', marginRight: '4px' }} />
                                Number of People *
                            </label>
                            <input
                                type="number"
                                min="1"
                                max="20"
                                value={formData.number_of_people}
                                onChange={(e) => setFormData({ ...formData, number_of_people: parseInt(e.target.value) })}
                                style={{
                                    width: '100%',
                                    padding: '10px 12px',
                                    border: '1px solid #E5E7EB',
                                    borderRadius: '8px',
                                    fontSize: '14px',
                                    outline: 'none'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#D97706'}
                                onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                                required
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '5px', color: '#1F2937', fontWeight: '500', fontSize: '13px' }}>
                                <Calendar size={13} style={{ display: 'inline', marginRight: '4px' }} />
                                Preferred Travel Date *
                            </label>
                            <input
                                type="date"
                                value={formData.preferred_date}
                                onChange={(e) => setFormData({ ...formData, preferred_date: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '10px 12px',
                                    border: '1px solid #E5E7EB',
                                    borderRadius: '8px',
                                    fontSize: '14px',
                                    outline: 'none'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#D97706'}
                                onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                                required
                            />
                        </div>
                    </div>

                    {/* Special Requests */}
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', color: '#1F2937', fontWeight: '500', fontSize: '13px' }}>
                            <MessageSquare size={13} style={{ display: 'inline', marginRight: '4px' }} />
                            Special Requests / Preferences
                        </label>
                        <textarea
                            rows="3"
                            value={formData.special_requests}
                            onChange={(e) => setFormData({ ...formData, special_requests: e.target.value })}
                            style={{
                                width: '100%',
                                padding: '10px 12px',
                                border: '1px solid #E5E7EB',
                                borderRadius: '8px',
                                fontSize: '14px',
                                resize: 'vertical',
                                fontFamily: 'inherit',
                                outline: 'none'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#D97706'}
                            onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                            placeholder="Tell us about:
• Dietary restrictions
• Accommodation preferences (lodges/camping)
• Special occasions (honeymoon/birthday)
• Accessibility needs
• Any other specific requirements"
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            style={{
                                flex: 1,
                                padding: '14px',
                                background: 'linear-gradient(135deg, #D97706 0%, #E67E22 100%)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '10px',
                                fontSize: '15px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                opacity: isSubmitting ? 0.7 : 1
                            }}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="spinner" style={{
                                        width: '18px',
                                        height: '18px',
                                        border: '2px solid white',
                                        borderTopColor: 'transparent',
                                        borderRadius: '50%',
                                        animation: 'spin 0.8s linear infinite'
                                    }} />
                                    Sending Request...
                                </>
                            ) : (
                                <>
                                    <Send size={16} />
                                    Send Quote Request
                                </>
                            )}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            style={{
                                flex: 1,
                                padding: '14px',
                                background: 'white',
                                color: '#D97706',
                                border: '2px solid #D97706',
                                borderRadius: '10px',
                                fontSize: '15px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#FEF3C7';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'white';
                            }}
                        >
                            <X size={16} />
                            Exit
                        </button>
                    </div>

                    <p style={{
                        textAlign: 'center',
                        fontSize: '11px',
                        color: '#9CA3AF',
                        marginTop: '16px',
                        padding: '10px',
                        background: '#F9FAFB',
                        borderRadius: '8px'
                    }}>
                        <span style={{ display: 'block' }}>🔒 Your information is secure and will only be used to respond to your request.</span>
                        <span style={{ display: 'block', marginTop: '4px' }}>We'll respond within 24 hours via email or WhatsApp.</span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default EmailBookingForm;