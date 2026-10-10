import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

const navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Products', path: '/fleet' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [mobileMenuOpen]);

    const isActive = (path: string) => {
        if (path.startsWith('/#') && location.pathname === '/') return false;
        if (path === '/careers') return location.pathname === path || location.pathname.startsWith('/careers/');
        return location.pathname === path;
    }

    return (
        <>
        <div className={`w-full ${scrolled ? 'h-16' : 'h-20'}`} aria-hidden="true" />
        <header 
            className={`fixed top-0 left-0 w-full z-50 border-b border-black/10 bg-white transition-shadow ${
                scrolled ? 'shadow-sm' : 'shadow-none'
            }`}
        >
            <div
                className={`w-full px-4 sm:px-6 md:px-10 lg:px-16 flex items-center justify-between transition-[height] duration-300 ${
                    scrolled ? 'h-16' : 'h-20'
                }`}
            >
                
                {/* Logo Area */}
                <Link
                    to="/"
                    className="flex items-center gap-2 group relative z-50 hover:opacity-90 transition-opacity h-full"
                >
                    <Logo className="origin-left h-full" imgClassName="h-full w-auto" />
                </Link>

                {/* Desktop Nav - Right aligned */}
                <nav className="hidden md:flex items-center gap-10 relative z-50">
                    {navItems.map((item) => {
                        const active = isActive(item.path);
                        return (
                            <Link
                                key={item.label}
                                to={item.path}
                                className={`text-sm font-medium transition-colors ${
                                    active ? 'text-primary' : 'text-slate-800 hover:text-primary'
                                }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden relative z-50 h-10 w-10 flex items-center justify-center rounded-full bg-black/5 border border-black/10 text-slate-900 hover:bg-black/10 active:scale-95 transition-all"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span className="material-symbols-outlined transition-transform duration-300" style={{ transform: mobileMenuOpen ? 'rotate(90deg)' : 'none' }}>
                        {mobileMenuOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-8 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                {navItems.map((item, idx) => (
                    <Link
                        key={item.label}
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-4xl font-display font-bold tracking-tight text-slate-900 transition-all duration-500 hover:text-primary ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                        <span className="text-slate-400 mr-4 text-2xl font-light">0{idx + 1}</span>
                        {item.label}
                    </Link>
                ))}
            </div>
        </header>
        </>
    );
};