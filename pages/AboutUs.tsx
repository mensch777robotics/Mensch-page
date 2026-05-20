import React, { useState } from 'react';
import heroImage from '../public/Robi_4k.png';
import bibinImage from '../public/Bibin Generated.jpeg';

export const AboutUs: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative w-full flex flex-col md:block min-h-0 md:min-h-[calc(100vh-5rem)] opacity-0 animate-fade-in-up">
                <div className="relative h-[50vh] w-full md:absolute md:inset-0 md:h-full bg-gray-50">
                    {!isLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div className="relative flex items-center justify-center">
                                <div className="absolute w-20 h-20 bg-primary/30 rounded-full animate-orb-pulse blur-xl"></div>
                                <div className="w-12 h-12 bg-primary rounded-full animate-orb-pulse shadow-[0_0_30px_rgba(19,91,236,0.6)]"></div>
                            </div>
                        </div>
                    )}
                    <img
                        src={heroImage}
                        alt="About us hero"
                        className={`h-full w-full object-cover object-[75%_center] md:object-center transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                        decoding="async"
                        onLoad={() => setIsLoaded(true)}
                    />
                </div>
                <div className="relative z-10 w-full px-4 py-10 sm:px-6 md:px-10 lg:px-16 md:absolute md:bottom-0 md:pb-14">
                    <div className="max-w-3xl flex flex-col gap-5 md:bg-black/25 md:backdrop-blur-xl md:border md:border-white/10 rounded-[2rem] md:p-8">
                        <h1 className="text-slate-900 md:text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-[0.95] tracking-tighter md:drop-shadow-lg">
                            The Mission
                        </h1>
                        <p className="text-slate-600 md:text-slate-200 text-lg md:text-2xl font-light leading-relaxed md:drop-shadow-md">
                            To create human-centric robots for societal advancement.
                        </p>
                    </div>
                </div>
            </section>

                        {/* Founder */}
            <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 md:py-24 opacity-0 animate-fade-in-up [animation-delay:200ms]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="text-slate-900 text-3xl md:text-4xl font-bold mb-6">Founder & CEO</h2>
                            <div>
                                <h3 className="text-slate-900 text-2xl font-bold mb-2">Bibin Thomas</h3>
                                <p className="text-primary font-semibold mb-6">Founder & CEO, Mensch Robotics</p>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    Bibin Thomas is a visionary robotics engineer and entrepreneur dedicated to transforming education through human-centered technology. As the Founder and CEO of Mensch Robotics, Bibin leads the development of next-generation, personality-driven, and socially aware semi-humanoid robots designed to bridge the gap between advanced artificial intelligence and meaningful human interaction.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <img
                                src={bibinImage}
                                alt="Bibin Thomas, Founder & CEO"
                                className="w-full h-auto rounded-[2rem] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
