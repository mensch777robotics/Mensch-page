import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export const ProductReceptionGuidance: React.FC = () => {
    const product = products[0]; // Reception & Guidance Robot
    const heroImage = `${import.meta.env.BASE_URL}SOVI Greet.jpeg`;
    const keyFeatureItems = [
        { name: 'Smart Visitor-checking', image: `${import.meta.env.BASE_URL}Reception_icon.jpg` },
        { name: 'Multi Language Welcoming', image: `${import.meta.env.BASE_URL}Multilang.jpg` },
        { name: 'Promotions', image: `${import.meta.env.BASE_URL}Promotions_icon.jpg` },
        { name: 'Intelligent Q&A', image: `${import.meta.env.BASE_URL}qa_icon.jpg` },
        { name: 'Voice  First AI', image: `${import.meta.env.BASE_URL}Voiceai.jpg` },
        { name: 'Instant Knowledge Sync', image: `${import.meta.env.BASE_URL}Knowledge_sync.jpg` },
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative w-full flex flex-col md:block min-h-0 md:min-h-[calc(100vh-5rem)] overflow-hidden">
                <div className="relative h-[48vh] w-full md:absolute md:inset-0 md:h-full overflow-hidden bg-slate-50">
                    <img
                        src={heroImage}
                        alt={product.name}
                        className="absolute inset-0 h-full w-full object-cover object-[78%_center] md:object-center"
                    />
                </div>

                <div className="relative z-10 w-full px-4 py-10 sm:px-6 md:px-10 lg:px-16 md:absolute md:inset-x-0 md:top-0 md:h-full md:flex md:items-start md:pt-20">
                    <div className="inline-block w-full md:w-auto max-w-none md:max-w-xl bg-white/85 md:bg-transparent backdrop-blur-none md:backdrop-blur-0 rounded-[2rem] md:rounded-none p-6 md:p-0">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm text-blue-500 text-sm font-bold">
                                    {product.id}
                                </span>
                                <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">
                                    {product.category}
                                </span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold text-slate-900 tracking-tight">
                                {product.name}
                            </h1>
                            <p className="text-2xl sm:text-3xl md:text-4xl text-slate-700 font-light">
                                {product.tagline}
                            </p>
                            <p className="text-base sm:text-lg md:text-2xl text-slate-600 leading-relaxed">
                                {product.shortDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlights Section - placeholder layout, add images manually */}
            <section className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-slate-50">
                <div className="max-w-[90rem] mx-auto grid md:grid-cols-[1fr_1.4fr] gap-6 items-stretch">
                    {/* Large image placeholder - left */}
                    <div className="relative overflow-hidden rounded-2xl border-2 border-dashed border-slate-300 bg-white min-h-[600px]">
                        <img
                            src={`${import.meta.env.BASE_URL}Full_body.jpeg`}
                            alt="Full body robot"
                            className="absolute inset-0 h-full w-full object-cover object-center"
                        />
                    </div>

                    {/* 2x3 grid of highlight boxes - right */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { title: 'Highlight 1', image: `${import.meta.env.BASE_URL}Base.png` },
                            { title: 'Highlight 2', image: `${import.meta.env.BASE_URL}Display.jpeg` },
                            { title: 'Highlight 3', image: `${import.meta.env.BASE_URL}Arms.png` },
                            { title: 'Highlight 4', image: `${import.meta.env.BASE_URL}Voice.jpeg` },
                            { title: 'Highlight 5', image: `${import.meta.env.BASE_URL}Camera.png` },
                            { title: 'Highlight 6', image: `${import.meta.env.BASE_URL}Eyes.jpeg` },
                        ].map((highlight, idx) => (
                            <div
                                key={idx}
                                className={`relative flex flex-col gap-3 p-8 rounded-xl border-2 ${highlight.image ? 'border-transparent' : 'border-dashed border-slate-300'} bg-white min-h-[250px] overflow-hidden`}
                            >
                                {highlight.image ? (
                                    <img
                                        src={highlight.image}
                                        alt={highlight.title}
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                ) : (
                                    <>
                                        <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-dashed border-slate-300">
                                            <p className="text-slate-400 text-xs font-bold">IMG</p>
                                        </div>
                                        <p className="text-slate-400 text-base font-semibold">
                                            {highlight.title}
                                        </p>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="w-full pt-10 pb-18 md:pt-12 md:pb-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 md:mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Key Features
                        </h2>
                        <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                            SOVI-Greet is an intelligent reception robot that transforms the way organisations welcome and assist their visitors. Combining conversational AI with a friendly, expressive presence, it delivers a seamless front-desk experience that is professional, engaging and always available.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,0.82fr)_minmax(10rem,14rem)_minmax(0,1fr)] items-center gap-10 md:gap-20">
                        <div className="flex flex-col gap-8 md:gap-10 md:justify-self-start md:pl-0">
                            {keyFeatureItems.slice(0, 3).map((item, idx) => (
                                <div key={idx} className="flex items-center justify-start gap-4 md:gap-5">
                                    <div className="flex items-center justify-center w-16 h-16 md:w-18 md:h-18 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm overflow-hidden shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-base md:text-lg font-semibold text-slate-800 text-left max-w-[11rem]">
                                        {item.name}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="hidden md:block" aria-hidden="true" />

                        <div className="flex flex-col gap-8 md:gap-10 md:justify-self-end md:ml-auto md:pr-28 md:translate-x-6 md:w-fit">
                            {keyFeatureItems.slice(3).map((item, idx) => (
                                <div key={idx} className="flex items-center justify-start gap-4 md:gap-6">
                                    <div className="flex items-center justify-center w-16 h-16 md:w-18 md:h-18 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm overflow-hidden shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-base md:text-lg font-semibold text-slate-800 text-left max-w-[11rem]">
                                        {item.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* Use Cases Section */}
            <section className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
                        Perfect For
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: "store", title: "Hotels & Resorts", desc: "Greet guests and enhance their stay" },
                            { icon: "business", title: "Corporate Offices", desc: "Professional front desk operations" },
                            { icon: "local_mall", title: "Malls & Retail", desc: "Customer guidance and information" },
                            { icon: "apartment", title: "Hospitals & Clinics", desc: "Patient check-in and navigation" }
                        ].map((useCase, idx) => (
                            <div key={idx} className="flex flex-col gap-3 p-6 rounded-xl bg-white border border-slate-200 hover:shadow-md transition-shadow">
                                <div className={`w-10 h-10 rounded-lg ${product.bgAccent}/10 flex items-center justify-center`}>
                                    <span className={`material-symbols-outlined ${product.accent}`}>
                                        {useCase.icon}
                                    </span>
                                </div>
                                <h3 className="font-bold text-slate-900">
                                    {useCase.title}
                                </h3>
                                <p className="text-sm text-slate-600">
                                    {useCase.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Transform Your Reception Experience
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Let our AI-powered robot handle first impressions while your team focuses on building relationships.
                    </p>
                    <Link 
                        to="/contact"
                        className="inline-flex items-center gap-2 px-10 py-4 rounded-lg bg-blue-500 text-white font-bold uppercase tracking-wider text-sm hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg"
                    >
                        Request a Demo
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </Link>
                </div>
            </section>

            {/* Related Products */}
            <section className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-gradient-to-b from-white to-slate-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                        Explore Our Other Solutions
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {products.filter((p) => p.id !== product.id).map((relatedProduct) => (
                            <Link 
                                key={relatedProduct.id}
                                to={`/products/${relatedProduct.slug}`}
                                className="group flex flex-col rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all bg-white"
                            >
                                <div className="relative h-56 overflow-hidden bg-slate-100">
                                    <img 
                                        src={relatedProduct.image}
                                        alt={relatedProduct.name}
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col gap-3 p-6">
                                    <p className={`${relatedProduct.accent} font-bold text-xs uppercase tracking-widest`}>
                                        {relatedProduct.category}
                                    </p>
                                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                                        {relatedProduct.name}
                                    </h3>
                                    <p className="text-slate-600 text-sm">
                                        {relatedProduct.shortDescription}
                                    </p>
                                    <div className={`flex items-center gap-2 ${relatedProduct.accent} font-semibold text-sm mt-auto group-hover:translate-x-1 transition-transform`}>
                                        Learn More
                                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
