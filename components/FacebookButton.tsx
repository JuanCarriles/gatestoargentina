'use client';

import { useEffect, useState } from 'react';

interface FacebookButtonProps {
    pageUrl: string;
}

const FacebookButton = ({ pageUrl }: FacebookButtonProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const handleClick = () => {
        const facebookUrl = pageUrl.startsWith('http') ? pageUrl : `https://www.facebook.com/people/Gates-to-Argentina/61588040902492/`;
        window.open(facebookUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <button
            onClick={handleClick}
            className={`fixed top-28 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#1877F2] hover:bg-[#145DBF] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}
            aria-label="Follow us on Facebook"
            title="Follow us on Facebook"
        >
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#1877F2] opacity-75 animate-ping"></span>
        </button>
    );
};

export default FacebookButton;
