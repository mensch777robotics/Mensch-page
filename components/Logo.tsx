import React from 'react';
import logoTransparent from '../MENSCH_Transperant.png';

const logoWhite = `${import.meta.env.BASE_URL}Mensch Logo White.png`;

export const Logo: React.FC<{
    className?: string;
    imgClassName?: string;
    /** Use white logo asset on dark backgrounds (e.g. footer) */
    onDark?: boolean;
}> = ({ className = '', imgClassName = 'h-full w-auto', onDark = false }) => {
    return (
        <div className={`flex items-center gap-3 h-full ${className}`}>
            <img
                src={onDark ? logoWhite : logoTransparent}
                alt="Mensch Robotics"
                className={`${imgClassName} object-contain ${
                    onDark
                        ? 'drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)]'
                        : 'drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]'
                }`}
                decoding="async"
            />
        </div>
    );
};