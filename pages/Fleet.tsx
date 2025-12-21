import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const robots = [
    {
        id: "01",
        category: "Service & Hospitality",
        name: "Reception & Guidance Robot",
        tagline: "The Future of First Impressions",
        description: "At Mensch Robotics, we believes in building robots to enhance your environment and customer experience",
        image: "/Reception-Guidance.jpeg",
        specs: [
            { label: "Height", value: "5 feet" },
            { label: "Battery", value: "12 Hr" }
        ],
        features: [
            { title: "Customer Service", desc: "Let the robot handles your Customer enquiries like a perfect salesman or a receptionist." },
            { title: "Navigation", desc: "He autonomously navigate to guide the customer to the right product or conference hall." },
            { title: "Personalization", desc: "He could gives personalized response and smart suggestions based on the customer preference." }
        ],
        accent: "text-blue-500",
        bgAccent: "bg-blue-500",
        gradient: "from-blue-500/20 to-blue-600/20",
        imagePosition: "object-top"
    },
    {
        id: "02",
        category: "Education",
        name: "Teaching Assistant Robot",
        tagline: "Your Partner in Modern Education",
        description: "An advanced teaching assistant who provides personalized learning plans, student progress reports and insights for each student",
        image: "/Robi_cbse_stdt.png",
        specs: [
            { label: "Focus", value: "K-12" },
            { label: "Display", value: "10\" Touch" }
        ],
        features: [
            { title: "Adaptive Explanations", desc: "Explains complex concepts based on student grade.", icon: "auto_awesome" },
            { title: "Visual Learning", desc: "Visualizes concepts with seamless YouTube video integration.", icon: "auto_awesome" },
            { title: "Teacher Support", desc: "LMS integrated to support and empower teachers.", icon: "auto_awesome" }
        ],
        accent: "text-accent-emerald",
        bgAccent: "bg-accent-emerald",
        gradient: "from-accent-emerald/20 to-emerald-600/20"
    },
    {
        id: "03",
        category: "Research & Development",
        name: "Educational & Research Robot",
        tagline: "The Platform for Innovation",
        description: "A modular learning robot for schools, enabling hands-on STEM, AI exploration, and student-driven reconfiguration.",
        image: "/MAX_Robot.png",
        specs: [
            { label: "OS", value: "Ubuntu/ROS2" },
            { label: "Payload", value: "5 kg" }
        ],
        features: [
            { title: "Versatile Variants", desc: "Automatic and Autonomous varients designed for schools and institutions.", icon: "check_circle" },
            { title: "STEM & AI", desc: "Offers hands on STEM and AI learning experience.", icon: "check_circle" },
            { title: "Modular Design", desc: "Modular design, students can reconfigure and repurpose for their own applications.", icon: "check_circle" }
        ],
        accent: "text-blue-500",
        bgAccent: "bg-blue-500",
        gradient: "from-blue-500/20 to-blue-600/20"
    }
];

export const Fleet: React.FC = () => {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden opacity-0 animate-fade-in-up">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-black blur-[120px] rounded-full -z-10"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>
                <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 text-center relative z-10">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-white drop-shadow-2xl">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500">Fleet</span>
                    </h1>
                    <p className="text-xl text-slate-400 font-body max-w-2xl mx-auto mb-12 font-light tracking-wide">
                        Advanced robotics for specialized applications. Engineered for compassion, education, and innovation.
                    </p>
                </div>
            </section>

            {/* Robots List */}
            <div className="flex flex-col gap-0">
                {robots.map((bot, idx) => (
                    <section key={bot.id} className={`relative py-24 border-t border-white/5 opacity-0 animate-fade-in-up ${idx % 2 === 0 ? 'bg-gradient-to-b from-transparent to-[#0a0a0c]' : 'bg-[#08080a]'}`} style={{animationDelay: `${(idx + 1) * 200}ms`}}>
                        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16">
                            <div className={`grid lg:grid-cols-2 gap-16 items-center`}>
                                {/* Image Column */}
                                <div className={`relative group ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <div className={`absolute -inset-1 bg-gradient-to-r ${bot.gradient} rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000`}></div>
                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface-dark border border-white/10 shadow-2xl">
                                        <img 
                                            alt={bot.name}
                                            className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${bot.imagePosition || ''}`}
                                            src={bot.image}
                                        />
                                    </div>
                                </div>

                                {/* Content Column */}
                                <div className={`flex flex-col justify-center ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className={`flex items-center justify-center w-8 h-8 rounded-full ${bot.bgAccent}/10 ${bot.accent} text-xs font-bold`}>{bot.id}</span>
                                        <span className={`${bot.accent} font-bold tracking-widest uppercase text-xs`}>{bot.category}</span>
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">{bot.name}</h2>
                                    <p className="text-xl text-white/80 mb-8 font-light">{bot.tagline}</p>
                                    
                                    <div className="space-y-8 font-body text-slate-400 mb-10">
                                        <p className="leading-relaxed">{bot.description}</p>
                                        <ul className="space-y-4">
                                            {bot.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-start gap-3">
                                                    <span className={`material-symbols-outlined ${bot.accent} mt-0.5 text-lg`}>
                                                        {feature.icon || "check_circle"}
                                                    </span>
                                                    <span><strong className="text-white">{feature.title}:</strong> {feature.desc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div className="flex gap-4">
                                        <Link to="/contact" className={`group flex items-center gap-2 text-white font-bold uppercase tracking-wider text-sm hover:${bot.accent} transition-colors`}>
                                            Request Specs 
                                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-lg">arrow_forward</span>
                                        </Link>
                                        {bot.id === "02" && (
                                            <button 
                                                onClick={() => setShowVideo(true)}
                                                className={`group flex items-center gap-2 text-white font-bold uppercase tracking-wider text-sm border border-white/20 hover:border-${bot.accent.split('-')[1]}-500 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full transition-all`}
                                            >
                                                Watch Video
                                                <span className="material-symbols-outlined group-hover:scale-110 transition-transform text-lg">play_circle</span>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* Video Modal */}
            {showVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                        <button 
                            onClick={() => setShowVideo(false)}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/1jvTKcio1Ts?autoplay=1&rel=0" 
                            title="ROBI - AI Teacher" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};