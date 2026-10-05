import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export const ProductTeachingAssistant: React.FC = () => {
    const product = products[1]; // Teaching Assistant Robot
    const heroImage = `${import.meta.env.BASE_URL}Sovi Teach.jpeg`;

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative w-full flex flex-col md:block min-h-0 md:min-h-[calc(100vh-5rem)] overflow-hidden bg-gradient-to-b from-slate-50 to-white">
                <div className="relative h-[48vh] w-full md:absolute md:inset-0 md:h-full overflow-hidden bg-slate-50">
                    <img
                        src={heroImage}
                        alt={product.name}
                        className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                </div>

                <div className="relative z-10 w-full px-4 py-10 sm:px-6 md:px-10 lg:px-16 md:absolute md:inset-x-0 md:top-0 md:h-full md:flex md:items-start md:pt-20">
                    <div className="inline-block w-full md:w-auto max-w-none md:max-w-xl bg-white/20 backdrop-blur-2xl rounded-[2rem] border border-white/30 ring-1 ring-white/40 shadow-2xl shadow-black/10 p-6 md:p-8">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm text-emerald-500 text-sm font-bold">
                                    {product.id}
                                </span>
                                <span className="text-emerald-500 font-bold tracking-widest uppercase text-sm">
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

            {/* Features Section */}
            <section id="features" className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Key Features
                        </h2>
                        <p className="text-lg text-slate-600">
                            Designed to enhance learning outcomes and support educators
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {product.features.map((feature, idx) => (
                            <div key={idx} className="flex flex-col gap-4 p-6 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all bg-slate-50">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10">
                                        <span className="material-symbols-outlined text-emerald-500 text-lg">
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

            {/* Video Section */}
            <section className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-gradient-to-b from-white to-slate-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            See It In Action
                        </h2>
                        <p className="text-lg text-slate-600">
                            Watch how our Teaching Assistant Robot transforms classroom learning
                        </p>
                    </div>

                    <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden border border-slate-200">
                            <iframe 
                                width="100%" 
                                height="100%" 
                                src="https://www.youtube.com/embed/PyGL2phhoyU?rel=0" 
                                title="Teaching Assistant Robot in Action" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen
                                className="rounded-2xl"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Ready to Transform Your Classroom?
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Get in touch with our team to schedule a demo or learn more about implementation.
                    </p>
                    <Link 
                        to="/contact"
                        className="inline-flex items-center gap-2 px-10 py-4 rounded-lg bg-emerald-500 text-white font-bold uppercase tracking-wider text-sm hover:bg-emerald-600 transition-colors shadow-md hover:shadow-lg"
                    >
                        Schedule a Demo
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </Link>
                </div>
            </section>

            {/* Related Products */}
            <section className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-slate-50">
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
