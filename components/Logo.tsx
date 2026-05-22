import React from 'react';
import logoTransparent from '../MENSCH_Transperant.png';

export const Logo: React.FC<{
    className?: string;
    imgClassName?: string;
    /** Use on dark backgrounds so logo text stays visible */
    onDark?: boolean;
}> = ({ className = '', imgClassName = 'h-full w-auto', onDark = false }) => {
    return (
        <div className={`flex items-center gap-3 h-full ${className}`}>
            <img
                src={logoTransparent}
                alt="Mensch Robotics"
                className={`${imgClassName} object-contain ${
                    onDark
                        ? 'brightness-0 invert drop-shadow-[0_2px_12px_rgba(255,255,255,0.15)]'
                        : 'drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]'
                }`}
                decoding="async"
            />
        </div>
    );
};