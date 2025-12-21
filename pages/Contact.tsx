import React from 'react';

export const Contact: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col pt-20 bg-black">
                 <main className="flex-grow flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-10 lg:px-16 py-10 md:py-20">
                     <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left Column: Info */}
                    <div className="flex flex-col gap-16 pt-8">
                        <div className="flex flex-col gap-6">
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-[-0.03em] leading-[0.9] text-white">
                                Get In<br/>Touch
                            </h1>
                            <p className="text-slate-400 text-lg font-body leading-relaxed max-w-lg">
                                Interested in deploying Physical AI in your institution or office? Contact us for a demo or consultation.
                            </p>
                        </div>
                        <div className="flex flex-col gap-8">
                            {[
                                {icon: "call", title: "Call Us", val: "+91 7907362027", link: "tel:+917907362027"},
                                {icon: "mail", title: "Email Us", val: "menschrobotics11@gmail.com", link: "mailto:menschrobotics11@gmail.com"},
                                {icon: "location_on", title: "Location", val: "Coimbatore, Tamil Nadu", link: "#"}
                            ].map((item) => (
                                <div key={item.title} className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 rounded-full bg-[#1a1f2e] flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                        <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold tracking-[0.15em] text-slate-500 mb-1 uppercase">{item.title}</span>
                                        <a href={item.link} className="text-xl font-medium text-white hover:text-primary transition-colors">
                                            {item.val}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="w-full bg-[#0f0f0f] border border-white/10 rounded-[32px] p-6 md:p-10 shadow-xl">
                        <form className="flex flex-col gap-6" action="mailto:menschrobotics11@gmail.com" method="post" encType="text/plain">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">First Name</label>
                                    <input className="w-full bg-black border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" type="text" name="firstName" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Last Name</label>
                                    <input className="w-full bg-black border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" type="text" name="lastName" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email</label>
                                <input className="w-full bg-black border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" type="email" name="email" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Message</label>
                                <textarea className="w-full bg-black border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" rows={4} name="message"></textarea>
                            </div>
                            <button className="mt-4 w-full bg-white hover:bg-slate-200 text-black font-bold text-sm tracking-[0.05em] uppercase rounded-xl py-4 flex items-center justify-center gap-2 transition-colors">
                                Send Message
                                <span className="material-symbols-outlined text-[18px]">send</span>
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};