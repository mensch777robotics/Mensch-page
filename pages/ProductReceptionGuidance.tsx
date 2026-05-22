import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export const ProductReceptionGuidance: React.FC = () => {
    const product = products[0]; // Reception & Guidance Robot

    return (
        <div className="flex flex-col pt-24 md:pt-28">
            {/* Hero Section */}
            <section className="relative w-full py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        {/* Content */}
                        <div className="flex-1 flex flex-col gap-6">
                            <div className="flex items-center gap-3">
                                <span className={`flex items-center justify-center w-10 h-10 rounded-full ${product.bgAccent}/10 ${product.accent} text-sm font-bold`}>
                                    {product.id}
                                </span>
                                <span className={`${product.accent} font-bold tracking-widest uppercase text-xs`}>
                                    {product.category}
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight">
                                {product.name}
                            </h1>
                            <p className="text-2xl text-slate-600 font-light">
                                {product.tagline}
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {product.shortDescription}
                            </p>

                            {/* Specs */}
                            <div className="grid grid-cols-2 gap-6 py-6 border-y border-slate-200">
                                {product.specs.map((spec, idx) => (
                                    <div key={idx}>
                                        <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2">
                                            {spec.label}
                                        </p>
                                        <p className="text-2xl font-bold text-slate-900">
                                            {spec.value}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link 
                                    to="/contact"
                                    className={`flex items-center gap-2 px-8 py-3 rounded-lg ${product.bgAccent} text-white font-bold uppercase tracking-wider text-sm hover:opacity-90 transition-opacity`}
                                >
                                    Request Information
                                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                </Link>
                                <a 
                                    href="#features"
                                    className="flex items-center gap-2 px-8 py-3 rounded-lg border border-slate-200 text-slate-900 font-bold uppercase tracking-wider text-sm hover:bg-slate-50 transition-colors"
                                >
                                    Learn More
                                    <span className="material-symbols-outlined text-lg">expand_more</span>
                                </a>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="flex-1">
                            <div className={`relative group rounded-2xl overflow-hidden`}>
                                <div className={`absolute -inset-1 bg-gradient-to-r ${product.gradient} rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000`}></div>
                                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 shadow-lg">
                                    <img 
                                        alt={product.name}
                                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        src={product.image}
                                    />
                                </div>
                            </div>
                        </div>
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
                            { icon: "shopping_mall", title: "Malls & Retail", desc: "Customer guidance and information" },
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
                                <div className="relative h-40 overflow-hidden bg-slate-100">
                                    <img 
                                        src={relatedProduct.image}
                                        alt={relatedProduct.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
