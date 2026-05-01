import React from 'react';
import { Link } from 'react-router-dom';
import zoe13 from '../assets/zoe13.jpg';
import zoe8 from '../assets/zoe8.jpg';

const Destinations = () => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState({});
    const destinations = [
        {
            name: "Serengeti National Park",
            description: "Home to the Great Migration, endless plains, and abundant wildlife including lions, leopards, and elephants.",
            bestTime: "June to October",
            highlights: ["Great Migration", "Big Five", "Hot Air Balloon Safaris"]
        },
        {
            name: "Ngorongoro Crater",
            description: "The world's largest inactive volcanic caldera, hosting a dense population of wildlife including endangered black rhinos.",
            bestTime: "Year-round",
            highlights: ["Black Rhinos", "Flamingos", "Maasai Culture"]
        },
        {
            name: "Mount Kilimanjaro",
            description: "Africa's highest peak, offering breathtaking views and challenging treks through diverse climate zones.",
            bestTime: "January to March, June to October",
            highlights: ["Uhuru Peak", "Shira Plateau", "Mawenzi Peak"]
        },
        {
            name: "Lake Manyara",
            description: "Famous for tree-climbing lions, vast elephant herds, and spectacular flamingo flocks.",
            bestTime: "June to October",
            highlights: ["Tree-climbing Lions", "Flamingos", "Groundwater Forest"]
        },
        {
            name: "Tarangire National Park",
            description: "Known for giant baobab trees and large elephant herds, especially during the dry season.",
            bestTime: "June to November",
            highlights: ["Elephant Herds", "Baobab Trees", "Bird Watching"]
        },
        {
            name: "Zanzibar Archipelago",
            description: "Pristine beaches, coral reefs, and historic Stone Town - perfect for post-safari relaxation.",
            bestTime: "June to October",
            highlights: ["Stone Town", "Beach Resorts", "Spice Tours"]
        }
    ];

    React.useEffect(() => {
        const indices = {};
        destinations.forEach(dest => {
            if (dest.images) {
                indices[dest.name] = 0;
            }
        });
        setCurrentImageIndex(indices);

        const intervals = destinations.map(dest => {
            if (dest.images) {
                return setInterval(() => {
                    setCurrentImageIndex(prev => ({
                        ...prev,
                        [dest.name]: (prev[dest.name] + 1) % dest.images.length
                    }));
                }, 4000);
            }
        }).filter(Boolean);

        return () => intervals.forEach(interval => clearInterval(interval));
    }, []);

    return (
        <div style={{ padding: '60px 20px' }}>
            <div className="container-custom">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>Our Destinations</h1>
                    <p style={{ fontSize: '18px', color: 'var(--text)', maxWidth: '600px', margin: '0 auto' }}>
                        Explore Tanzania's most iconic wildlife destinations
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '30px'
                }}>
                    {destinations.map((dest, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'var(--bg)',
                                border: '1px solid var(--border)',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                transition: 'transform 0.3s ease',
                            }}
                            className="safari-card"
                        >
                            {dest.images && (
                                <div style={{
                                    position: 'relative',
                                    height: '220px',
                                    overflow: 'hidden',
                                    marginBottom: '16px'
                                }}>
                                    <img
                                        src={dest.images[currentImageIndex[dest.name] || 0]}
                                        alt={dest.name}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.6s ease'
                                        }}
                                    />
                                </div>
                            )}
                            <div style={{ padding: '24px' }}>
                                <h3 style={{ fontSize: '24px', marginBottom: '12px', color: 'var(--accent)' }}>
                                    {dest.name}
                                </h3>
                            <p style={{ color: 'var(--text)', marginBottom: '16px', lineHeight: 1.6 }}>
                                {dest.description}
                            </p>
                            <div style={{ marginBottom: '16px' }}>
                                <strong style={{ color: 'var(--text-h)' }}>Best Time to Visit:</strong>
                                <p style={{ color: 'var(--text)' }}>{dest.bestTime}</p>
                            </div>
                            <div>
                                <strong style={{ color: 'var(--text-h)' }}>Highlights:</strong>
                                <ul style={{ marginTop: '8px', paddingLeft: '20px', color: 'var(--text)' }}>
                                    {dest.highlights.map((highlight, i) => (
                                        <li key={i}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '60px', textAlign: 'center' }}>
                    <Link to="/services" className="btn-primary">
                        View Safari Packages →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Destinations;