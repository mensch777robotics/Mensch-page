import React from 'react';

export const AboutUs: React.FC = () => {
    const heroSrc = `${import.meta.env.BASE_URL}Robi_hero.png`;

    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative w-full flex flex-col md:block min-h-0 md:min-h-[calc(100vh-5rem)] opacity-0 animate-fade-in-up">
                <div className="relative h-[50vh] w-full md:absolute md:inset-0 md:h-full">
                    <img
                        src={heroSrc}
                        alt="About us hero"
                        className="h-full w-full object-cover object-[75%_center] md:object-center"
                        decoding="async"
                    />
                </div>
                <div className="relative z-10 w-full px-4 py-10 sm:px-6 md:px-10 lg:px-16 md:absolute md:bottom-0 md:pb-14">
                    <div className="max-w-3xl flex flex-col gap-5 md:bg-black/25 md:backdrop-blur-xl md:border md:border-white/10 rounded-[2rem] md:p-8">
                        <h1 className="text-slate-900 md:text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-[0.95] tracking-tighter md:drop-shadow-lg">
                            The Mission
                        </h1>
                        <p className="text-slate-600 md:text-slate-200 text-lg md:text-2xl font-light leading-relaxed md:drop-shadow-md">
                            Our mission is to create personality-driven, socially aware robots designed with a human-centered approach to enhance lives and drive positive change in society
                        </p>
                    </div>
                </div>
            </section>

            {/* Quote */}
            <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 md:py-24 opacity-0 animate-fade-in-up [animation-delay:200ms]">
                <div className="w-full bg-surface-dark border border-white/10 rounded-[2rem] p-8 md:p-12">
                    <p className="text-white text-2xl md:text-4xl font-medium tracking-tight leading-snug">
                        “We believe AI and robotics should take up the burden of labor, so humans are free to do what no machine can ever do.”
                    </p>
                    <div className="mt-8 text-slate-400 text-sm md:text-base font-bold tracking-widest uppercase">
                        Bibin Thomas, Founder
                    </div>
                </div>
            </section>
        </div>
    );
};
