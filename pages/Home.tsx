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
                            <div className="flex flex-col gap-6">
                                <h1 className="text-slate-900 md:text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter md:drop-shadow-lg">
                                    Physical AI <br/>
                                    <span className="text-slate-600 md:text-slate-200">For Every Space</span>
                                </h1>
                                <Link to="/fleet" className="h-12 px-8 rounded-full bg-gray-400 text-gray-900 font-bold text-base hover:bg-primary hover:text-white transition-all w-fit md:drop-shadow-md flex items-center justify-center">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                                {/* Company Description */}
                <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 md:py-24 opacity-0 animate-fade-in-up [animation-delay:600ms]">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-[2rem] p-8 md:p-12 backdrop-blur-sm">
                            <p className="text-slate-200 text-lg md:text-xl font-light leading-relaxed">
                                <span className="text-white font-bold text-xl md:text-2xl">Mensch Robotics Pvt Ltd</span> is a deep-tech startup dedicated to building semi-humanoid robotic platforms for societal advancement. Founded in October 2024, the company focuses on creating versatile robots for the education, research, hospitality, and logistics sectors. With a successful deployment of a robotic development platform and backing from <span className="text-primary font-semibold">Startup India, Kerala Startup Mission, and IHFC (IIT Delhi)</span>, we are currently scaling our pilot programs.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Deployments */}
                <section className="w-full flex flex-col gap-12 py-10 opacity-0 animate-fade-in-up [animation-delay:800ms] px-4 sm:px-6 md:px-10 lg:px-16">
                    <div className="flex flex-col gap-2">
                        <div className="relative">
                            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight">
                                Mensch Robotics
                            </h2>
                            <p className="text-4xl md:text-6xl font-bold text-primary tracking-tight mt-2">in action</p>
                        </div>
                    </div>
                    
                    <style>{`
                        @keyframes scroll {
                            0% {
                                transform: translateX(0);
                            }
                            100% {
                                transform: translateX(-50%);
                            }
                        }
                        .marquee {
                            animation: scroll 40s linear infinite;
                        }
                        .marquee:hover {
                            animation-play-state: paused;
                        }
                    `}</style>
                    
                    <div className="w-full overflow-hidden">
                        <div className="marquee flex gap-6 w-fit">
                            {[
                                {
                                    img: `${import.meta.env.BASE_URL}deployments/Team at TN Global summit.jpg`,
                                    alt: 'Team at TN Global Summit'
                                },
                                {
                                    img: `${import.meta.env.BASE_URL}deployments/Founder at TN Startup Summit.jpg`,
                                    alt: 'Founder at TN Startup Summit'
                                },
                                {
                                    img: `${import.meta.env.BASE_URL}deployments/Robi_childrens.jpeg`,
                                    alt: 'Robot with children'
                                },
                                {
                                    img: `${import.meta.env.BASE_URL}deployments/with Chairman.jpg`,
                                    alt: 'With Chairman'
                                },
                                {
                                    img: `${import.meta.env.BASE_URL}deployments/St Joseph Deployed_2.jpg`,
                                    alt: 'Deployment at St Joseph'
                                }
                            ].map((deployment, idx) => (
                                <div key={idx} className="flex-shrink-0 h-[250px] md:h-[300px] rounded-[1rem] overflow-hidden border border-white/10 min-w-[350px] md:min-w-[450px]">
                                    <img 
                                        src={deployment.img}
                                        alt={deployment.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                            {[
                                {
                                    img: `${import.meta.env.BASE_URL}deployments/Team at TN Global summit.jpg`,
                                    alt: 'Team at TN Global Summit'
                                },
                                {
                                    img: `${import.meta.env.BASE_URL}deployments/Founder at TN Startup Summit.jpg`,
                                    alt: 'Founder at TN Startup Summit'
                                },
                                {
                                    img: `${import.meta.env.BASE_URL}deployments/Robi_childrens.jpeg`,
                                    alt: 'Robot with children'
                                },
                                {
                                    img: `${import.meta.env.BASE_URL}deployments/with Chairman.jpg`,
                                    alt: 'With Chairman'
                                },
                                {
                                    img: `${import.meta.env.BASE_URL}deployments/St Joseph Deployed_2.jpg`,
                                    alt: 'Deployment at St Joseph'
                                }
                            ].map((deployment, idx) => (
                                <div key={`dup-${idx}`} className="flex-shrink-0 h-[250px] md:h-[300px] rounded-[1rem] overflow-hidden border border-white/10 min-w-[350px] md:min-w-[450px]">
                                    <img 
                                        src={deployment.img}
                                        alt={deployment.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
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