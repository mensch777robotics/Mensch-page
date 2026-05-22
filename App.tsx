import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Fleet } from './pages/Fleet';
import { ProductReceptionGuidance } from './pages/ProductReceptionGuidance';
import { ProductTeachingAssistant } from './pages/ProductTeachingAssistant';
import { ProductResearchEducation } from './pages/ProductResearchEducation';
import { Contact } from './pages/Contact';
import { AboutUs } from './pages/AboutUs';
import { Careers } from './pages/Careers';
import { CareerRole } from './pages/CareerRole';

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
                    <Route path="/products/reception-guidance" element={<ProductReceptionGuidance />} />
                    <Route path="/products/teaching-assistant" element={<ProductTeachingAssistant />} />
                    <Route path="/products/research-education" element={<ProductResearchEducation />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/careers/:slug" element={<CareerRole />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;