import React from 'react';
import { Link } from 'react-router-dom';
import { RotatingModelViewer } from '../components/RotatingModelViewer';
import { products } from '../data/products';

export const ProductResearchEducation: React.FC = () => {
    const product = products[2]; // Educational & Research Robot
    const keyFeatureItems = [
        { name: 'Modular Design', image: `${import.meta.env.BASE_URL}Modular%20Design.jpg` },
        { name: 'STEM & AI Focus', image: `${import.meta.env.BASE_URL}STEM_AI.jpg` },
        { name: 'Multiple Variants', image: `${import.meta.env.BASE_URL}max_multiple.jpg` },
        { name: 'Research Platform', image: `${import.meta.env.BASE_URL}Research%20Platform.jpg` },
    ];


    const heroImage = `${import.meta.env.BASE_URL}Educational & Research Robot.jpeg`;

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative w-full flex flex-col md:block min-h-0 md:min-h-[calc(100vh-5rem)] overflow-hidden bg-gradient-to-b from-slate-50 to-white">
                <div className="relative h-[48vh] w-full md:absolute md:inset-0 md:h-full overflow-hidden bg-slate-50">
                    <img
                        src={heroImage}
                        alt={product.name}
                        className="absolute inset-0 h-full w-full object-cover object-right md:object-center"
                    />
                </div>

                <div className="relative z-10 w-full px-4 py-10 sm:px-6 md:px-10 lg:px-16 md:absolute md:inset-x-0 md:top-0 md:h-full md:flex md:items-start md:pt-20">
                    <div className="inline-block w-full md:w-auto max-w-none md:max-w-3xl lg:max-w-4xl bg-white/20 backdrop-blur-2xl rounded-[2rem] border border-white/30 ring-1 ring-white/40 shadow-2xl shadow-black/10 p-6 md:p-10">
                        <div className="flex flex-col gap-5 md:gap-6">
                            <div className="flex items-center gap-3">
                                <span className={`flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm ${product.accent} text-sm font-bold`}>
                                    {product.id}
                                </span>
                                <span className={`${product.accent} font-bold tracking-widest uppercase text-sm`}>
                                    {product.category}
                                </span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold text-slate-900 md:text-white tracking-tight">
                                {product.name}
                            </h1>
                            <p className="text-2xl sm:text-3xl md:text-4xl text-slate-700 md:text-white font-light">
                                {product.tagline}
                            </p>
                            <p className="text-base sm:text-lg md:text-2xl text-slate-600 md:text-white/90 leading-relaxed max-w-3xl">
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
                            Modular platform for hands-on STEM and AI learning, empowering students to explore and create.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(14rem,1fr)_minmax(28rem,36rem)_minmax(14rem,1fr)] lg:grid-rows-3 lg:gap-x-10 lg:gap-y-16 items-center">
                        <div className="lg:col-start-1 lg:row-start-1 lg:row-span-3 flex flex-col justify-center gap-10 lg:gap-32">
{keyFeatureItems.slice(0, 2).map((item) => (
                            <div
                                key={item.name}
                                className={`flex items-center gap-4 md:gap-5 lg:self-start`}
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
</div>

                        <div className="lg:col-start-2 lg:row-start-1 lg:row-span-3 flex h-full min-h-[42rem] md:min-h-[48rem] items-center justify-center overflow-visible">
                            <RotatingModelViewer
                                modelUrl={new URL('../3D_image/humanoid+robot+3d+model_Low_poly.glb', import.meta.url).href}
                                alt="SOVI Teach 3D model"
                                className="h-full w-full"
                            />
                        </div>

                        <div className="lg:col-start-3 lg:row-start-1 lg:row-span-3 flex flex-col justify-center gap-10 lg:gap-32">
{keyFeatureItems.slice(2).map((item) => (
                            <div
                                key={item.name}
                                className={`flex items-center gap-4 md:gap-5 lg:self-end lg:flex-row-reverse lg:text-right`}
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
                </div>
            </section>

            {/* Robot Parts Section */}
            <section className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-white">
                <div className="max-w-[90rem] mx-auto grid md:grid-cols-[1fr_1.4fr] gap-6 items-stretch">
                    <div className="relative overflow-hidden rounded-2xl bg-white min-h-[600px]">
                        <img
                            src={`${import.meta.env.BASE_URL}MAX_body.jpeg`}
                            alt="MAX full body"
                            className="absolute inset-0 h-full w-full object-cover object-center"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { title: 'Arm', image: `${import.meta.env.BASE_URL}MAX_arm.jpeg` },
                            { title: 'Base', image: `${import.meta.env.BASE_URL}MAX_Base.jpeg` },
                            { title: 'Display', image: `${import.meta.env.BASE_URL}MAX_Display.jpeg` },
                            { title: 'Voice', image: `${import.meta.env.BASE_URL}MAX_voice.jpeg` },
                        ].map((part) => (
                            <div
                                key={part.title}
                                className="relative rounded-xl bg-white min-h-[250px] overflow-hidden"
                            >
                                <img
                                    src={part.image}
                                    alt={part.title}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Path Section */}
            <section className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
                        From Beginners to Advanced
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                level: "Beginner",
                                icon: "school",
                                topics: ["Basic Assembly", "Python Programming", "Robot Movement"],
                                color: "bg-blue-50 border-blue-200"
                            },
                            {
                                level: "Intermediate",
                                icon: "build",
                                topics: ["STEM Projects", "Sensor Integration", "Problem Solving"],
                                color: "bg-purple-50 border-purple-200"
                            },
                            {
                                level: "Advanced",
                                icon: "science",
                                topics: ["AI & Machine Learning", "Custom Applications", "Research Projects"],
                                color: "bg-green-50 border-green-200"
                            }
                        ].map((path, idx) => (
                            <div key={idx} className={`flex flex-col gap-4 p-8 rounded-xl border ${path.color} bg-white`}>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-slate-600">
                                            {path.icon}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">
                                        {path.level}
                                    </h3>
                                </div>
                                <ul className="space-y-2">
                                    {path.topics.map((topic, tIdx) => (
                                        <li key={tIdx} className="flex items-center gap-2 text-slate-600">
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                                            {topic}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specifications */}
            <section className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
                        Technical Specifications
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4 p-8 rounded-xl border border-slate-200 bg-slate-50">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Hardware</h3>
                            {[
                                { label: "Processor", value: "Quad-core ARM" },
                                { label: "Memory", value: "4GB RAM" },
                                { label: "Storage", value: "32GB SSD" },
                                { label: "Battery", value: "8-10 hours" }
                            ].map((spec, idx) => (
                                <div key={idx} className="flex justify-between items-center py-3 border-b border-slate-200 last:border-b-0">
                                    <span className="text-slate-600 font-medium">{spec.label}</span>
                                    <span className="text-slate-900 font-bold">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-4 p-8 rounded-xl border border-slate-200 bg-slate-50">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Software</h3>
                            {[
                                { label: "Operating System", value: "Ubuntu 20.04 LTS" },
                                { label: "Framework", value: "ROS2" },
                                { label: "Programming", value: "Python, C++" },
                                { label: "Sensors", value: "Camera, LiDAR, IMU" }
                            ].map((spec, idx) => (
                                <div key={idx} className="flex justify-between items-center py-3 border-b border-slate-200 last:border-b-0">
                                    <span className="text-slate-600 font-medium">{spec.label}</span>
                                    <span className="text-slate-900 font-bold">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-gradient-to-b from-white to-slate-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Inspire the Next Generation
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Bring hands-on robotics and AI learning to your institution today.
                    </p>
                    <Link 
                        to="/contact"
                        className="inline-flex items-center gap-2 px-10 py-4 rounded-lg bg-purple-500 text-white font-bold uppercase tracking-wider text-sm hover:bg-purple-600 transition-colors shadow-md hover:shadow-lg"
                    >
                        Get Started
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </Link>
                </div>
            </section>

            {/* Related Products */}
            <section className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                        Explore Our Other Solutions
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {products.filter((p) => p.id !== product.id).map((relatedProduct) => (
                            <Link 
                                key={relatedProduct.id}
                                to={`/products/${relatedProduct.slug}`}
                                className="group flex flex-col rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all bg-slate-50"
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
