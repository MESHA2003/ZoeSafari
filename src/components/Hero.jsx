import React from 'react';
import { ArrowRight, Compass, Camera, Map } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920"
                    alt="Serengeti Sunset"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
            </div>

            <div className="relative container-custom text-center z-10 animate-fade-up">
                <div className="inline-block mb-4 px-4 py-1 bg-dss-primary/20 backdrop-blur-sm rounded-full">
                    <span className="text-dss-primary text-sm font-semibold">Since 2018 • Tanzania Safari Specialists</span>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                    Go Beyond the
                    <br />
                    Ordinary, The
                    <br />
                    <span className="text-dss-primary">Deeper Serengeti Way</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                    Immersive journeys through the wild where every moment connects you deeper to Africa's soul.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="btn-primary text-lg group">
                        Explore Safaris
                        <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </button>
                    <button className="btn-outline text-lg">
                        Plan My Safari
                    </button>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;