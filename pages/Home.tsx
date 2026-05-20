import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const whyMenschReasons = [
    {
        title: 'Made in India',
        description: 'Most affordable with high end features.',
    },
    {
        title: 'Custom Solutions',
        description: 'Develop custom robots from scratch for special sector requirements.',
    },
    {
        title: 'Expert Support',
        description: 'Expert Engineers support for custom integration.',
    },
];

const placesOfApplication = [
    { title: 'Administrative Assistant', location: 'Hotels', icon: 'key' },
    { title: 'Medical Assistant', location: 'Clinics', icon: 'local_hospital' },
    { title: 'Consultant', location: 'Banks', icon: 'account_balance' },
    { title: 'Tour Guide', location: 'Museums', icon: 'museum' },
    { title: 'Robot Concierge', location: 'Business centres', icon: 'business_center' },
    { title: 'Promoter', location: 'Forums and conferences', icon: 'groups' },
    { title: 'Educational Platform', location: 'Colleges and schools', icon: 'school' },
    { title: 'Security', location: 'Restricted areas and Industrial facilities', icon: 'shield' },
];

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

                {/* Places of Application */}
                <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 md:py-24 opacity-0 animate-fade-in-up [animation-delay:600ms]">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 md:mb-16 tracking-tight">
                            Places of Application
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {placesOfApplication.map((place) => (
                                <div
                                    key={place.title}
                                    className="flex flex-col items-center text-center gap-4 p-8 bg-white border border-primary/30 rounded-xl hover:border-primary/60 hover:shadow-md transition-all duration-300"
                                >
                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white">
                                        <span className="material-symbols-outlined text-3xl">{place.icon}</span>
                                    </div>
                                    <h3 className="text-slate-900 text-lg font-bold leading-snug">{place.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Location: {place.location}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Deployments */}
                <section className="w-full flex flex-col gap-12 py-10 opacity-0 animate-fade-in-up [animation-delay:800ms] px-4 sm:px-6 md:px-10 lg:px-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                        Mensch Robotics in action
                    </h2>

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


                {/* Why Mensch Robotics */}
                <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 md:py-24 opacity-0 animate-fade-in-up [animation-delay:1000ms]">
                    <div className="max-w-6xl mx-auto flex flex-col items-center gap-10 md:gap-14">
                        <div className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary/10 border border-primary/25 shadow-sm">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
                                Why Mensch Robotics?
                            </h2>
                        </div>
                        <p className="text-slate-600 text-center text-lg md:text-xl font-light leading-relaxed max-w-3xl">
                            <span className="font-semibold text-slate-800">New technology.</span>{' '}
                            Automation of menial tasks is the future of service. Pioneer the trends of tomorrow.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                            {whyMenschReasons.map((reason) => (
                                <div
                                    key={reason.title}
                                    className="relative bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                                >
                                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary rounded-l-2xl" />
                                    <h3 className="text-slate-900 text-xl font-bold mb-3 pl-2">{reason.title}</h3>
                                    <p className="text-slate-600 text-base leading-relaxed pl-2">{reason.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};