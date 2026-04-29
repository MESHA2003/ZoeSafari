import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img8.jpg';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav style={{
            background: 'white',
            borderBottom: '1px solid #e5e4e7',
            padding: '15px 0',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
        }}>
            <div className="container-custom" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                    <img src={logo} alt="ZOE" style={{ width: '50px', height: '50px', borderRadius: '8px', objectFit: 'cover' }} />
                    <div>
                        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937' }}>ZOE</div>
                        <div style={{ fontSize: '12px', color: '#D97706' }}>Wildlife Safaris</div>
                    </div>
                </Link>

                <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                    <Link to="/services" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '15px' }}>Services</Link>
                    <Link to="/destinations" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '15px' }}>Destinations</Link>
                    <Link to="/testimonials" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '15px' }}>Testimonials</Link>
                    <Link to="/contact" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '15px' }}>Contact</Link>
                    <Link to="/services" style={{
                        background: '#D97706',
                        color: 'white',
                        padding: '8px 20px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '14px'
                    }}>
                        Plan My Safari
                    </Link>
                </div>

                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{
                        background: 'none',
                        border: 'none',
                        fontSize: '24px',
                        cursor: 'pointer',
                        display: 'none'
                    }}
                    className="mobile-menu-btn"
                >
                    ☰
                </button>
            </div>

            {isMobileMenuOpen && (
                <div style={{
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    borderTop: '1px solid #e5e4e7',
                    background: 'white'
                }}>
                    <Link to="/services" style={{ color: '#4b5563', textDecoration: 'none', padding: '8px 0' }}>Services</Link>
                    <Link to="/destinations" style={{ color: '#4b5563', textDecoration: 'none', padding: '8px 0' }}>Destinations</Link>
                    <Link to="/testimonials" style={{ color: '#4b5563', textDecoration: 'none', padding: '8px 0' }}>Testimonials</Link>
                    <Link to="/contact" style={{ color: '#4b5563', textDecoration: 'none', padding: '8px 0' }}>Contact</Link>
                    <Link to="/services" style={{
                        background: '#D97706',
                        color: 'white',
                        padding: '12px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        textAlign: 'center',
                        fontWeight: '600'
                    }}>Plan My Safari</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;