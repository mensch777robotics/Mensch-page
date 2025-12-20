import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const heroSrc = `${import.meta.env.BASE_URL}Reception_Hero.png`;
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
                            alt="Hero"
                            className={`absolute inset-0 h-full w-full object-cover object-right md:object-center transition-all duration-1000 hover:scale-105 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                            onLoad={() => setIsLoaded(true)}
                        />
                    </div>

                    <div className="relative z-10 w-full px-4 py-10 sm:px-6 md:px-10 lg:px-16 md:absolute md:bottom-0 md:pb-12">
                        <div className="inline-block w-full md:w-auto max-w-none md:max-w-2xl md:bg-black/25 md:backdrop-blur-xl md:border md:border-white/10 rounded-[2rem] md:p-8">
                            <div className="flex flex-col gap-4">
                                <h1 className="text-slate-900 md:text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter md:drop-shadow-lg">
                                    Physical AI <br/>
                                    <span className="text-slate-600 md:text-slate-200">For Every Space</span>
                                </h1>
                                <p className="text-slate-600 md:text-slate-200 text-base sm:text-lg md:text-xl font-light max-w-lg leading-relaxed md:drop-shadow-md">
                                    Enhancing lives and driving positive change through advanced robotics integrated seamlessly into human environments.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Fleet Preview */}
                <section className="w-full flex flex-col gap-12 py-10 opacity-0 animate-fade-in-up [animation-delay:800ms] px-4 sm:px-6 md:px-10 lg:px-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">The Fleet</h2>
                            <p className="text-slate-400 text-lg md:text-xl font-light max-w-md">Advanced robotics for specialized applications.</p>
                        </div>
                        <Link to="/fleet" className="text-white font-bold text-sm tracking-widest uppercase hover:text-primary transition-colors flex items-center gap-2 group">
                            View All Specifications
                            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                        </Link>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full bg-surface-dark rounded-[2rem] overflow-hidden border border-white/5 divide-y md:divide-y-0 md:divide-x divide-white/10 shadow-2xl">
                        {[
                            {
                                id: '01', 
                                cat: 'Service', 
                                title: 'Reception & Guidance', 
                                sub: 'The Future of First Impressions',
                                img: `${import.meta.env.BASE_URL}reception-guidance.jpeg`
                            },
                            {
                                id: '02', 
                                cat: 'Education', 
                                title: 'ROBI - AI Teacher', 
                                sub: 'Your Partner in Modern Education',
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnwR8mmdUFFsiulq24Xx672WdPYkDE2naaQJQ59033lwK_AMw1t60CJO_fLQPrdSSVyXXH8i2R3EtAILTzN_yQhVgSov-ySlK5vCWQQBMDvDBzi3gp-5MyEcNfuPG6fOQRUao-FG3Kw4J5aCQF1DlpefkN-e6ZTDLqFXQ4F3Hm3tlAjgQetNBukyKEeYjQYIDtRK5IlAYitBhiSa12hVBf01M0VCsrThgg0aqzc9GjGSoOJi0AhNZiIj8PESmyYhkoYWdVRMsv7w'
                            },
                            {
                                id: '03', 
                                cat: 'Research', 
                                title: 'Max - Edu & Research', 
                                sub: 'The Open Source Platform',
                                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ9cpGX-p05Fy7rgo3IVNN442fQKGUAeEZ3heuM3Ps3AsNWQmbJBDQBbCb4JRYZ_dngHfOZf78qMhcnVqWJDY33A-zcegFaKjnVdftPGAo3NCVIjsSbkvCiOQjBdCleaqjYBAnRF056UovHTY07vNPSYRDeMu2f7QpJB_spjQG4K8Yld1UMg4GX6Wl63NcHbV3luceKN7IR-4g1luJNpZk0ULKFc09NaTX9opO72-0e-coKpbLI7IxsEfyMYnZGj-k6gvcqwJrDg'
                            }
                        ].map(bot => (
                            <div key={bot.id} className="group relative flex flex-col min-h-[500px] overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" style={{backgroundImage: `url("${bot.img}")`}}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                                <div className="relative z-10 flex flex-col h-full justify-end p-8 gap-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-primary font-bold text-xs tracking-widest uppercase mb-2 opacity-80 group-hover:opacity-100 transition-opacity">{bot.id} — {bot.cat}</span>
                                    <h3 className="text-white text-3xl font-bold leading-tight">{bot.title}</h3>
                                    <p className="text-slate-400 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{bot.sub}</p>
                                    <Link to="/fleet" className="inline-flex items-center text-white text-xs font-bold tracking-wider uppercase hover:text-primary transition-colors mt-auto">
                                        Discover <span className="material-symbols-outlined text-sm ml-1 -rotate-45 group-hover:rotate-0 transition-transform">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative w-full rounded-[2.5rem] bg-primary overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 py-20 md:py-24 text-center opacity-0 animate-fade-in-up [animation-delay:1000ms]">
                    <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJgJQ8cBZ-dIBTM0BcW8DV-e1BaNCCxdRyNZeCO9j4sX6BIkTMMS7SySvwgcEMq4PRaS8s6zzblC7sw6eQXlyc1jb9N23-bGNR5FVJ_YxIlgqjCuIHna1nmJ0gdprte8VGFrbRF1Wn0JwRV4VATq145geELCRMjiAKW4VfFmkXoOlKjVVHKGRMJ1IbRKwj765jxknMx3Qjwyw05iKpv14AUAD5rqXG17lXssDjeLQPIlKKRWlPFCgSFKuyAGQ2kt1bh7AJjLX6BQ")'}}></div>
                    <div className="relative z-10 flex flex-col items-center gap-8 max-w-2xl mx-auto">
                        <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                            Ready to Transform Your Space?
                        </h2>
                        <p className="text-blue-100 text-lg md:text-xl">
                            Join the future of automation. Discover how Mensch Robotics can elevate your daily operations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
                            <Link to="/contact" className="h-14 px-8 rounded-full bg-white text-primary font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all w-full sm:w-auto flex items-center justify-center">
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};