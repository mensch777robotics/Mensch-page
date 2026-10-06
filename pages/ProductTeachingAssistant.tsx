import React from 'react';
import { Link } from 'react-router-dom';
import { RotatingModelViewer } from '../components/RotatingModelViewer';
import { products } from '../data/products';

export const ProductTeachingAssistant: React.FC = () => {
    const product = products[1]; // Teaching Assistant Robot
    const heroImage = `${import.meta.env.BASE_URL}Sovi Teach.jpeg`;
    const keyFeatureItems = [
        { name: 'Intelligent Conversational AI', image: `${import.meta.env.BASE_URL}Conversational AI.jpg` },
        { name: 'Personalized Face Recognition', image: `${import.meta.env.BASE_URL}Face Recognition.jpg` },
        { name: 'Multi User Secured Cloud Backend', image: `${import.meta.env.BASE_URL}Multi-User.jpg` },
        { name: 'Adaptive Learning Modes', image: `${import.meta.env.BASE_URL}Adaptive Learning Mode.jpg` },
        { name: 'Multilingual Voice & Wake Word', image: `${import.meta.env.BASE_URL}Multilang.jpg` },
        { name: 'Real Time Knowleadge Access', image: `${import.meta.env.BASE_URL}Knowledge_sync.jpg` },
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative w-full flex flex-col md:block min-h-0 md:min-h-[calc(100vh-5rem)] overflow-hidden bg-gradient-to-b from-slate-50 to-white">
                <div className="relative h-[48vh] w-full md:absolute md:inset-0 md:h-full overflow-hidden bg-slate-50">
                    <img
                        src={heroImage}
                        alt={product.name}
                        className="absolute inset-0 h-full w-full object-cover object-[78%_center] md:object-center"
                    />
                </div>

                <div className="relative z-10 w-full px-4 py-10 sm:px-6 md:px-10 lg:px-16 md:absolute md:inset-x-0 md:top-0 md:h-full md:flex md:items-start md:pt-20">
                    <div className="inline-block w-full md:w-auto max-w-none md:max-w-xl bg-white/20 backdrop-blur-2xl rounded-[2rem] border border-white/30 ring-1 ring-white/40 shadow-2xl shadow-black/10 p-6 md:p-8">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <span className="text-emerald-500 font-bold tracking-widest uppercase text-base md:text-lg">
                                    {product.category}
                                </span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold text-slate-900 tracking-tight">
                                {product.name}
                            </h1>
                            <p className="text-3xl sm:text-4xl md:text-5xl text-slate-700 font-light">
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
            <section id="features" className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 md:mb-16 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Key Features
                        </h2>
                        <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                            Designed to enhance learning outcomes and support educators
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(14rem,1fr)_minmax(28rem,36rem)_minmax(14rem,1fr)] lg:grid-rows-3 lg:gap-x-10 lg:gap-y-16 items-center">
                        {keyFeatureItems.slice(0, 3).map((item, idx) => (
                            <div
                                key={item.name}
                                className={`flex items-center gap-4 md:gap-5 ${idx === 0 ? 'lg:col-start-1 lg:row-start-1' : idx === 1 ? 'lg:col-start-1 lg:row-start-2' : 'lg:col-start-1 lg:row-start-3'} lg:justify-self-start`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-14 w-14 md:h-16 md:w-16 shrink-0 object-contain"
                                />
                                <p className="max-w-[12rem] text-base md:text-lg font-semibold leading-tight text-slate-800 text-left">
                                    {item.name}
                                </p>
                            </div>
                        ))}

                        <div className="lg:col-start-2 lg:row-start-1 lg:row-span-3 flex h-full min-h-[42rem] md:min-h-[48rem] items-center justify-center overflow-visible">
                            <RotatingModelViewer
                                modelUrl={new URL('../3D_image/tripo_pbr_model_89199f3e-ca85-43bf-949c-a77c287e132f_meshopt.glb', import.meta.url).href}
                                alt="SOVI-Teach 3D model"
                                className="h-full w-full"
                            />
                        </div>

                        {keyFeatureItems.slice(3).map((item, idx) => (
                            <div
                                key={item.name}
                                className={`flex items-center gap-4 md:gap-5 ${idx === 0 ? 'lg:col-start-3 lg:row-start-1' : idx === 1 ? 'lg:col-start-3 lg:row-start-2' : 'lg:col-start-3 lg:row-start-3'} lg:justify-self-end lg:flex-row-reverse lg:text-right`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-14 w-14 md:h-16 md:w-16 shrink-0 object-contain"
                                />
                                <p className="max-w-[12rem] text-base md:text-lg font-semibold leading-tight text-slate-800 text-left lg:text-right">
                                    {item.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Highlights Section - shared layout */}
            <section className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-white">
                <div className="max-w-[90rem] mx-auto grid md:grid-cols-[1fr_1.4fr] gap-6 items-stretch">
                    <div className="relative overflow-hidden rounded-2xl bg-white min-h-[600px]">
                        <img
                            src={`${import.meta.env.BASE_URL}Full_body.jpeg`}
                            alt="Full body robot"
                            className="absolute inset-0 h-full w-full object-cover object-center"
                        />
                        <div className="absolute bottom-10 left-6 z-10 text-left drop-shadow-md">
                            <p className="text-xl md:text-2xl font-semibold text-blue-950">
                                Height : 5 feet
                            </p>
                            <p className="text-xl md:text-2xl font-semibold text-blue-950">
                                Weight : 50 Kg
                            </p>
                        </div>
                    </div>

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
                                <div className="relative overflow-hidden bg-slate-100">
                                    <img 
                                        src={relatedProduct.image}
                                        alt={relatedProduct.name}
                                        className="w-full h-80 object-cover object-top block"
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
