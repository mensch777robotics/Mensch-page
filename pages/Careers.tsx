import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../public/Robo in forest.png';
import { careerPositions } from '../data/careerPositions';

export const Careers: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="flex flex-col items-center">
            <div className="w-full flex flex-col gap-16 md:gap-24 pb-10 px-0">
                {/* Hero Section */}
                <section className="relative w-full flex flex-col md:block min-h-0 md:min-h-[calc(100vh-5rem)] animate-fade-in-up">
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
                            src={heroImage}
                            alt="Careers hero"
                            className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                            onLoad={() => setIsLoaded(true)}
                        />
                    </div>

                    <div className="relative z-10 w-full px-4 py-10 sm:px-6 md:px-10 lg:px-16 md:absolute md:bottom-0 md:pb-12">
                        <div className="inline-block w-full md:w-auto max-w-none md:max-w-2xl md:bg-black/25 md:backdrop-blur-xl md:border md:border-white/10 rounded-[2rem] md:p-8">
                            <div className="flex flex-col gap-6">
                                <h1 className="text-slate-900 md:text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter md:drop-shadow-lg">
                                    Spark a <br />
                                    <span className="text-slate-600 md:text-slate-200">difference</span>
                                </h1>
                                <p className="text-slate-600 md:text-slate-200 text-base sm:text-lg md:text-xl font-light max-w-lg leading-relaxed md:drop-shadow-md">
                                    Are you fired up for an intense run, speed over perfection.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Intro */}
                <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 flex justify-center">
                    <div className="w-full max-w-6xl mx-auto rounded-2xl border border-slate-200 bg-slate-50 px-8 py-10 md:px-14 md:py-12 shadow-sm">
                        <p className="text-center text-slate-800 text-lg md:text-xl leading-relaxed">
                            Mensch Robotics is a fast-growing physical AI startup building semi-humanoid service robots for
                            hotels, schools, banks and clinics. We&apos;re looking for talented individuals to join our ambitious
                            journey. If you&apos;re ready to handle the startup chaos, work with a sense of ownership and
                            contribute to shape the future of service robotics, we want to hear from you.
                        </p>
                    </div>
                </section>

                {/* Current Openings */}
                <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 pb-8">
                    <div className="mx-auto max-w-6xl flex flex-col gap-10 md:gap-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center tracking-tight">
                            Current Openings
                        </h2>

                        <div className="flex flex-col gap-4">
                            {careerPositions.map((position) => (
                                <Link
                                    key={position.slug}
                                    to={`/careers/${position.slug}`}
                                    className="group flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 md:p-8 rounded-2xl border border-slate-200 bg-white hover:border-primary/40 hover:shadow-md transition-all duration-300"
                                >
                                    <div className="flex flex-col gap-2 min-w-0">
                                        <h3 className="text-slate-900 text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                                            {position.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                                            <span>{position.department}</span>
                                            <span className="text-slate-300">|</span>
                                            <span>{position.type}</span>
                                        </div>
                                        <p className="text-slate-600 text-base leading-relaxed mt-1 md:hidden">
                                            {position.teaser}
                                        </p>
                                    </div>
                                    <span className="inline-flex items-center gap-2 text-primary font-semibold shrink-0 group-hover:gap-3 transition-all">
                                        View role
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative w-full rounded-[2.5rem] bg-primary overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 py-20 md:py-24 text-center">
                    <div
                        className="absolute inset-0 opacity-20 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJgJQ8cBZ-dIBTM0BcW8DV-e1BaNCCxdRyNZeCO9j4sX6BIkTMMS7SySvwgcEMq4PRaS8s6zzblC7sw6eQXlyc1jb9N23-bGNR5FVJ_YxIlgqjCuIHna1nmJ0gdprte8VGFrbRF1Wn0JwRV4VATq145geELCRMjiAKW4VfFmkXoOlKjVVHKGRMJ1IbRKwj765jxknMx3Qjwyw05iKpv14AUAD5rqXG17lXssDjeLQPIlKKRWlPFCgSFKuyAGQ2kt1bh7AJjLX6BQ")',
                        }}
                    ></div>
                    <div className="relative z-10 flex flex-col items-center gap-8 max-w-2xl mx-auto">
                        <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                            Ready to Shape the Future?
                        </h2>
                        <p className="text-blue-100 text-lg md:text-xl">
                            Submit your application and let&apos;s build something extraordinary together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
                            <Link
                                to="/contact"
                                className="h-14 px-8 rounded-full bg-white text-primary font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all w-full sm:w-auto flex items-center justify-center"
                            >
                                Get In Touch
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
