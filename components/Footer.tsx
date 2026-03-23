import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    return (
        <footer className="border-t border-black/10 bg-white py-16">
            <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16">
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                    <div className="max-w-sm">
                        <p className="text-slate-600 text-sm font-body leading-relaxed">
                            Pioneering the future of physical AI with robots that serve, teach, and innovate. Designed to elevate human potential.
                        </p>
                    </div>
                    <div className="flex gap-16 flex-wrap">
                        <div>
                            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-widest mb-6">Company</h4>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li><Link to="/about-us" className="hover:text-slate-900 transition-colors">About Us</Link></li>
                                <li><Link to="/contact" className="hover:text-slate-900 transition-colors">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* Supported By Section */}
                <div className="border-t border-black/10 mt-16 pt-12 mb-12">
                    <h4 className="text-slate-900 font-bold text-xs uppercase tracking-widest mb-8">Supported By</h4>
                    <div className="flex flex-wrap items-center justify-start gap-12 md:gap-16">
                        <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-lg border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all duration-300">
                            <img 
                                src={`${import.meta.env.BASE_URL}kerala-startup-mission-cropped (1).svg`}
                                alt="Kerala Startup Mission"
                                className="h-14 w-auto opacity-80 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-lg border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all duration-300">
                            <img 
                                src={`${import.meta.env.BASE_URL}IHFC Logo.png`}
                                alt="IHFC"
                                className="h-14 w-auto opacity-80 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-lg border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all duration-300">
                            <img 
                                src={`${import.meta.env.BASE_URL}DPIIT-startup india.png`}
                                alt="Startup India"
                                className="h-14 w-auto opacity-80 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>
                </div>

                <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-xs">© 2024 Mensch Robotics Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="https://www.linkedin.com/company/mensch-robotics/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/mensch_robotics/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors">
                            <span className="sr-only">Instagram</span>
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};