import React from 'react';
import logoTransparent from '../MENSCH_Transperant.png';

export const Logo: React.FC<{ className?: string; imgClassName?: string }> = ({
    className = "",
    imgClassName = "h-full w-auto",
}) => {
    return (
        <div className={`flex items-center gap-3 h-full ${className}`}>
            <img
                src={logoTransparent}
                alt="Mensch Robotics"
                className={`${imgClassName} object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]`}
                decoding="async"
            />
        </div>
    );
};