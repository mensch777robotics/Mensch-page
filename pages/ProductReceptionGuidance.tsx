import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export const ProductReceptionGuidance: React.FC = () => {
    const product = products[0]; // Reception & Guidance Robot
    const heroImage = `${import.meta.env.BASE_URL}SOVI Greet.jpeg`;

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative w-full h-[calc(100vh-5rem)] overflow-hidden">
                <img
                    src={heroImage}
                    alt={product.name}
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="relative z-10 h-full px-28 sm:px-40 md:px-52 lg:px-72 flex items-start pt-20 md:pt-28">
                    <div className="flex flex-col gap-4 max-w-xl">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm text-blue-500 text-sm font-bold">
                                {product.id}
                            </span>
                            <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">
                                {product.category}
                            </span>
                        </div>
                        <h1 className="text-7xl md:text-8xl font-bold text-slate-900 tracking-tight">
                            {product.name}
                        </h1>
                        <p className="text-4xl text-slate-700 font-light">
                            {product.tagline}
                        </p>
                        <p className="text-2xl text-slate-600 leading-relaxed">
                            {product.shortDescription}
                        </p>
                    </div>
                </div>
            </section>

            {/* Highlights Section - placeholder layout, add images manually */}
            <section className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-slate-50">
                <div className="max-w-[90rem] mx-auto grid md:grid-cols-[1fr_1.4fr] gap-6 items-stretch">
                    {/* Large image placeholder - left */}
                    <div className="flex items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-white min-h-[600px]">
                        <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest">
                            Add robot image here
                        </p>
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
            <section id="features" className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Key Features
                        </h2>
                        <p className="text-lg text-slate-600">
                            Elevate your customer experience with intelligent hospitality solutions
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {product.features.map((feature, idx) => (
                            <div key={idx} className="flex flex-col gap-4 p-6 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all bg-slate-50">
                                <div className="flex items-center gap-3">
                                    <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${product.bgAccent}/10`}>
                                        <span className={`material-symbols-outlined ${product.accent} text-lg`}>
                                            check_circle
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900">
                                        {feature.title}
                                    </h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
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
