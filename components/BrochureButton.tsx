import React from 'react';
import { useLocation } from 'react-router-dom';
import {
    BROCHURE_URL,
    SOVI_GREET_BROCHURE_URL,
    SOVI_TEACH_BROCHURE_URL,
} from '../config/brochure';

export const BrochureButton: React.FC = () => {
    const { pathname } = useLocation();
    const brochureUrl = pathname === '/products/reception-guidance'
        ? SOVI_GREET_BROCHURE_URL
        : pathname === '/products/teaching-assistant'
            ? SOVI_TEACH_BROCHURE_URL
            : BROCHURE_URL;

    if (!pathname.startsWith('/products/') || pathname === '/products/research-education') {
        return null;
    }

    return (
        <a
            className="btn-brochure"
            href={brochureUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download brochure"
        >
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <path d="M5 21h14" />
            </svg>
            <span>Download Brochure</span>
        </a>
    );
};
