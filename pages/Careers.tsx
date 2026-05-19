import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Careers: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const heroSrc = `${import.meta.env.BASE_URL}Robot in forest mistical.png`;

    const positions = [
        {
            id: '01',
            title: 'Robotic Engineer',
            description: 'Design and develop cutting-edge robotic systems with advanced hardware integration and mechanical expertise.',
        },
        {
            id: '02',
            title: 'Software Engineer',
            description: 'Build intelligent AI systems and software that powers our next-generation robots and autonomous solutions.',
        },
        {
            id: '03',
            title: 'Operations Manager Intern',
            description: 'Support our growing operations team and learn about scaling advanced robotics solutions globally.',
        }
    ];

    return (
        <div className="flex flex-col items-center">
            <div className="w-full flex flex-col gap-16 md:gap-32 pb-10 px-0">
                
                {/* Hero Section */}
                <section className="relative w-full flex flex-col md:block min-h-0 md:min-h-[calc(100vh-5rem)] opacity-0 animate-fade-in-up [animation-delay:200ms]">
                    <div className="relative h-[50vh] w-full md:absolute md:inset-0 md:h-full overflow-hidden bg-gray-50">
                        {!isLoaded && (
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <div className="relative flex items-center justify-center">
                                    <div className="absolute w-20 h-20 bg-primary/30 rounded-full animate-orb-pulse blur-xl"></div>
                                    <div className="w-12 h-12 bg-primary rounded-full animate-orb-pulse shadow-[0_0_30px_rgba(19,91,236,0.6)]"></div>
                                </div>
                            </div>
                        )}
                        <img 
                            src={heroSrc}
                            alt="Careers hero"
                            className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                            onLoad={() => setIsLoaded(true)}
                        />
                    </div>

                    <div className="relative z-10 w-full px-4 py-10 sm:px-6 md:px-10 lg:px-16 md:absolute md:bottom-0 md:pb-12">
                        <div className="inline-block w-full md:w-auto max-w-none md:max-w-2xl md:bg-black/25 md:backdrop-blur-xl md:border md:border-white/10 rounded-[2rem] md:p-8">
                            <div className="flex flex-col gap-6">
                                <h1 className="text-slate-900 md:text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter md:drop-shadow-lg">
                                    Join Our <br/>
                                    <span className="text-slate-600 md:text-slate-200">Team</span>
                                </h1>
                                <p className="text-slate-600 md:text-slate-200 text-base sm:text-lg md:text-xl font-light max-w-lg leading-relaxed md:drop-shadow-md">
                                    Be part of a mission to revolutionize robotics and create a more human-centered future through innovation and collaboration.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Open Positions */}
                <section className="w-full flex flex-col gap-12 py-10 opacity-0 animate-fade-in-up [animation-delay:400ms] px-4 sm:px-6 md:px-10 lg:px-16">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">Open Positions</h2>
                        <p className="text-slate-400 text-lg md:text-xl font-light max-w-md">We're looking for talented individuals to join our team.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        {positions.map(position => (
                            <div key={position.id} className="group relative flex flex-col gap-6 p-8 bg-surface-dark border border-white/10 rounded-[2rem] hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(19,91,236,0.1)]">
                                <div>
                                    <span className="text-primary font-bold text-sm tracking-widest uppercase">{position.id}</span>
                                    <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight mt-4">{position.title}</h3>
                                </div>
                                <p className="text-slate-400 text-base leading-relaxed">{position.description}</p>
                                <div className="mt-auto pt-4 border-t border-white/10">
                                    <button className="text-primary font-bold text-sm tracking-widest uppercase hover:text-white transition-colors flex items-center gap-2 group/btn">
                                        Apply Now
                                        <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-1 transition-transform">arrow_right_alt</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative w-full rounded-[2.5rem] bg-primary overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 py-20 md:py-24 text-center opacity-0 animate-fade-in-up [animation-delay:600ms]">
                    <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJgJQ8cBZ-dIBTM0BcW8DV-e1BaNCCxdRyNZeCO9j4sX6BIkTMMS7SySvwgcEMq4PRaS8s6zzblC7sw6eQXlyc1jb9N23-bGNR5FVJ_YxIlgqjCuIHna1nmJ0gdprte8VGFrbRF1Wn0JwRV4VATq145geELCRMjiAKW4VfFmkXoOlKjVVHKGRMJ1IbRKwj765jxknMx3Qjwyw05iKpv14AUAD5rqXG17lXssDjeLQPIlKKRWlPFCgSFKuyAGQ2kt1bh7AJjLX6BQ")'}}></div>
                    <div className="relative z-10 flex flex-col items-center gap-8 max-w-2xl mx-auto">
                        <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                            Ready to Shape the Future?
                        </h2>
                        <p className="text-blue-100 text-lg md:text-xl">
                            Submit your application and let's build something extraordinary together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
                            <Link to="/contact" className="h-14 px-8 rounded-full bg-white text-primary font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all w-full sm:w-auto flex items-center justify-center">
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
