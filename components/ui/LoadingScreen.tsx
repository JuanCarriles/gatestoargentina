'use client';

import Image from 'next/image';

interface LoadingScreenProps {
    /** If true, renders as full-screen. If false, renders inline within a section. */
    fullScreen?: boolean;
}

export default function LoadingScreen({ fullScreen = false }: LoadingScreenProps) {
    const content = (
        <div className="flex flex-col items-center justify-center gap-6">
            {/* Logo with pulse animation */}
            <div className="relative">
                <div className="w-24 h-24 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center overflow-hidden animate-logo-breathe">
                    <Image
                        src="/images/gates-to-arg-LOGO-SIMPLIFICADO.png"
                        alt="Gates to Argentina"
                        width={64}
                        height={64}
                        className="w-16 h-16 object-contain"
                    />
                </div>
                {/* Orbiting ring */}
                <div className="absolute inset-[-8px] rounded-full border-2 border-transparent border-t-[#7cb2dd] border-r-[#7cb2dd]/40 animate-spin-slow" />
                {/* Outer glow */}
                <div className="absolute inset-[-4px] rounded-full bg-[#7cb2dd]/10 blur-md animate-logo-breathe" />
            </div>

            {/* Loading text with shimmer */}
            <div className="relative overflow-hidden">
                <p className="text-base font-medium text-[#2D2D2D]/70 tracking-wide">
                    Loading...
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer" />
            </div>

            {/* Dot animation */}
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7cb2dd] animate-bounce-dot" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 rounded-full bg-[#7cb2dd] animate-bounce-dot" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 rounded-full bg-[#7cb2dd] animate-bounce-dot" style={{ animationDelay: '300ms' }} />
            </div>
        </div>
    );

    if (fullScreen) {
        return (
            <div className="min-h-screen bg-[#F5F3EE] flex items-center justify-center">
                {content}
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center py-20">
            {content}
        </div>
    );
}
