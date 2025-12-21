import React from 'react';

const robots = [
    {
        id: "01",
        category: "Service & Hospitality",
        name: "Reception & Guidance Robot",
        tagline: "The Future of First Impressions",
        description: "Seamlessly guiding visitors with advanced autonomous navigation and warm, human-like interaction. It transforms lobbies into intelligent spaces where guests feel immediately welcomed and directed with precision.",
        image: "/reception-guidance.jpeg",
        specs: [
            { label: "Height", value: "5 feet" },
            { label: "Battery", value: "12 Hr" }
        ],
        features: [
            { title: "Facial Recognition", desc: "Greets returning guests by name for a personalized experience." },
            { title: "LiDAR Navigation", desc: "Moves gracefully through crowded spaces without collisions." },
            { title: "Multi-modal Interface", desc: "Voice interaction coupled with a responsive touch display for complex queries." }
        ],
        accent: "text-cyan-400",
        bgAccent: "bg-cyan-400",
        gradient: "from-cyan-400/20 to-blue-600/20",
        imagePosition: "object-top"
    },
    {
        id: "02",
        category: "Education",
        name: "ROBI - AI Teacher",
        tagline: "Your Partner in Modern Education",
        description: "Enhancing education through adaptive AI tutoring and interactive engagement. ROBI isn't just a screen; it's a physical companion that makes abstract concepts tangible and fun for students of all ages.",
        image: "/Robi_cbse_stdt.png",
        specs: [
            { label: "Focus", value: "K-12" },
            { label: "Display", value: "10\" Touch" }
        ],
        features: [
            { title: "Adaptive Learning", desc: "Adjusts teaching pace in real-time based on student comprehension.", icon: "auto_awesome" },
            { title: "Gamification", desc: "Turns difficult subjects into interactive games displayed on its chest screen.", icon: "auto_awesome" },
            { title: "Emotion Sensing", desc: "Detects frustration or boredom and switches teaching strategies to re-engage the learner.", icon: "auto_awesome" }
        ],
        accent: "text-accent-emerald",
        bgAccent: "bg-accent-emerald",
        gradient: "from-accent-emerald/20 to-emerald-600/20"
    },
    {
        id: "03",
        category: "Research & Development",
        name: "Max Robot",
        tagline: "The Open Source Platform for Innovation",
        description: "An open architecture system designed for universities and labs to push the boundaries of physical AI. Max is the ultimate canvas for roboticists, offering industrial-grade components with a hacker-friendly soul.",
        image: "/MAX_Robot.png",
        specs: [
            { label: "OS", value: "Ubuntu/ROS2" },
            { label: "Payload", value: "5 kg" }
        ],
        features: [
            { title: "Fully Hackable OS", desc: "Root access provided. Native ROS 2 support for seamless integration with existing research stacks.", icon: "terminal" },
            { title: "Modular Design", desc: "Swap end-effectors, sensors, and compute modules effortlessly to suit specific experiments.", icon: "terminal" },
            { title: "Precision Control", desc: "High-torque servos allow for manipulation tasks requiring sub-millimeter accuracy.", icon: "terminal" }
        ],
        accent: "text-cyan-400",
        bgAccent: "bg-cyan-400",
        gradient: "from-cyan-400/20 to-blue-600/20"
    }
];

export const Fleet: React.FC = () => {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden opacity-0 animate-fade-in-up">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10"></div>
                <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 text-center">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-white">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500">Fleet</span>
                    </h1>
                    <p className="text-xl text-slate-400 font-body max-w-2xl mx-auto mb-12">
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
                                        <button className={`group flex items-center gap-2 text-white font-bold uppercase tracking-wider text-sm hover:${bot.accent} transition-colors`}>
                                            Request Specs 
                                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-lg">arrow_forward</span>
                                        </button>
                                        {bot.id === "02" && (
                                            <button className={`group flex items-center gap-2 text-white font-bold uppercase tracking-wider text-sm hover:${bot.accent} transition-colors`}>
                                                Watch Video
                                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-lg">play_circle</span>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};