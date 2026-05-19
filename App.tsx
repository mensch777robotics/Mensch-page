import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Fleet } from './pages/Fleet';
import { Contact } from './pages/Contact';
import { AboutUs } from './pages/AboutUs';
import { Careers } from './pages/Careers';

// Scroll to top helper
const ScrollToTop = () => {
    const { pathname, hash } = useLocation();
    
    useEffect(() => {
        if (!hash) {
            window.scrollTo(0, 0);
        } else {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [pathname, hash]);

    return null;
};

const App: React.FC = () => {
    return (
        <Router>
            <ScrollToTop />
            <div className="flex min-h-screen w-full flex-col bg-white text-slate-900 font-display overflow-x-hidden selection:bg-primary selection:text-white">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/fleet" element={<Fleet />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;