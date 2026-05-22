import React from 'react';

const partners = [
    { src: 'kerala-startup-mission-cropped (1).svg', alt: 'Kerala Startup Mission' },
    { src: 'IHFC Logo.png', alt: 'IHFC' },
    { src: 'DPIIT-startup india.png', alt: 'Startup India' },
    { src: 'Make in India.png', alt: 'Make in India' },
];

export const SupportedBy: React.FC = () => {
    const base = import.meta.env.BASE_URL;

    return (
        <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-14 md:py-16 border-t border-slate-200 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-slate-900 font-bold text-xs uppercase tracking-widest mb-8 text-center md:text-left">
                    Supported By
                </h2>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 md:gap-10">
                    {partners.map((partner) => (
                        <div
                            key={partner.alt}
                            className="bg-gradient-to-br from-slate-50 to-slate-100 px-5 py-4 rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all duration-300"
                        >
                            <img
                                src={`${base}${partner.src}`}
                                alt={partner.alt}
                                className="h-14 md:h-16 w-auto opacity-90"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
