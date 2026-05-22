import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export const Fleet: React.FC = () => {
    return (
        <div className="flex flex-col pt-24 md:pt-28">
            {/* Hero Section */}
            <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 pb-20 text-center bg-gradient-to-b from-white to-slate-50">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 mb-6">
                    Products
                </h1>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
                    Innovative robotics solutions designed to enhance education, streamline hospitality, and empower research. Each robot is engineered with precision and compassion.
                </p>
            </section>

            {/* Products Grid */}
            <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-12 md:py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {products.map((product, idx) => (
                            <Link 
                                key={product.id}
                                to={`/products/${product.slug}`}
                                className="group flex flex-col opacity-0 animate-fade-in-up rounded-2xl border border-slate-200 overflow-hidden bg-white hover:shadow-xl transition-all duration-300"
                                style={{animationDelay: `${idx * 150}ms`}}
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden bg-slate-100">
                                    <img 
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 flex flex-col gap-4 p-6">
                                    <div className="flex items-center gap-2">
                                        <span className={`flex items-center justify-center w-8 h-8 rounded-full ${product.bgAccent}/10 ${product.accent} text-xs font-bold`}>
                                            {product.id}
                                        </span>
                                        <span className={`${product.accent} font-bold tracking-widest uppercase text-xs`}>
                                            {product.category}
                                        </span>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-2 line-clamp-2">
                                            {product.name}
                                        </h3>
                                        <p className="text-slate-600 text-sm font-light">
                                            {product.tagline}
                                        </p>
                                    </div>

                                    <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                                        {product.shortDescription}
                                    </p>

                                    {/* Features Preview */}
                                    <ul className="space-y-2 pt-4 border-t border-slate-100">
                                        {product.features.slice(0, 2).map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-600">
                                                <span className={`${product.accent} mt-0.5 text-sm`}>•</span>
                                                <span>{feature.title}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <div className={`flex items-center gap-2 ${product.accent} font-semibold text-sm mt-auto pt-4 group-hover:translate-x-1 transition-transform`}>
                                        Explore Product
                                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 md:py-24 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
                        Why Mensch Robotics?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "engineering",
                                title: "Advanced Technology",
                                desc: "State-of-the-art AI and robotics designed with cutting-edge research."
                            },
                            {
                                icon: "favorite",
                                title: "Engineered for Compassion",
                                desc: "Robots that understand and adapt to human needs with empathy."
                            },
                            {
                                icon: "lightbulb",
                                title: "Future-Ready Solutions",
                                desc: "Preparing today's learners and businesses for tomorrow's challenges."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col gap-4 p-8 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary text-2xl">
                                        {item.icon}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 md:py-20 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Ready to Transform Your Future?
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Discover how our robots can make a difference in your organization.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link 
                            to="/contact"
                            className="flex items-center gap-2 px-10 py-4 rounded-lg bg-primary text-white font-bold uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
                        >
                            Get in Touch
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </Link>
                        <a 
                            href="#products"
                            className="flex items-center gap-2 px-10 py-4 rounded-lg border border-slate-200 text-slate-900 font-bold uppercase tracking-wider text-sm hover:bg-slate-50 transition-colors"
                        >
                            Explore More
                            <span className="material-symbols-outlined text-lg">expand_more</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};