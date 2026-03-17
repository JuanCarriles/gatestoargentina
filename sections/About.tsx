'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation';

const stats = [
    { key: 'years', value: 15, suffix: '+' },
    { key: 'groups', value: 500, suffix: '+' },
    { key: 'offices', value: 2, suffix: '' },
];

function StatCounter({
    value,
    suffix,
    label,
    isVisible,
}: {
    value: number;
    suffix: string;
    label: string;
    isVisible: boolean;
}) {
    const { count, startAnimation } = useCountUp(value, 2000);

    useEffect(() => {
        if (isVisible) {
            startAnimation();
        }
    }, [isVisible, startAnimation]);

    return (
        <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-[#7cb2dd] mb-2">
                {count}
                {suffix}
            </div>
            <div className="text-[#2D2D2D]/70 text-sm sm:text-base">{label}</div>
        </div>
    );
}

export default function About() {
    const t = useTranslations();
    const { ref, isVisible } = useScrollAnimation<HTMLElement>();

    return (
        <section id="about" ref={ref} className="py-20 md:py-15 bg-[#F5F3EE]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header and Title Full Width */}
                <div
                    className={`flex flex-col items-center text-center mb-12 transition-all duration-700 ${isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                        }`}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-[2px] bg-[#7cb2dd]" />
                        <span className="text-[#7cb2dd] text-sm font-semibold uppercase tracking-wider whitespace-nowrap">
                            {t('nav.about')}
                        </span>
                        <div className="w-12 h-[2px] bg-[#7cb2dd]" />
                    </div>

                    <div className="w-full text-center px-2">
                        <h2
                            className="font-bold text-[#2D2D2D] whitespace-nowrap"
                            style={{
                                fontSize: 'min(5vw, 3rem)'
                            }}
                        >
                            {t('about.title')}
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div
                        className={`relative h-full flex flex-col justify-top transition-all duration-700 ${isVisible
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 -translate-x-10'
                            }`}
                    >
                        <div className="relative flex justify-center lg:justify-end w-full">

                            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-[90%] sm:w-[80%] lg:w-[75%] aspect-[2/3] bg-white flex items-center justify-center">
                                <img
                                    src="/images/GloriaPais.JPEG"
                                    alt="Gloria Pais - Founder of Gates to Argentina, expert in custom Argentina vacation packages"
                                    className="w-full h-full object-cover object-top"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 border-4 border-[#7cb2dd] rounded-2xl pointer-events-none" />

                                <div className="absolute bottom-4 left-4 bg-white shadow-xl rounded-xl p-3 sm:p-4 flex items-center gap-3">
                                    <div className="font-bold text-[#2D2D2D] text-sm sm:text-base">Gloria Pais</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`transition-all duration-700 delay-200 ${isVisible
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-10'
                            }`}
                    >

                        {['description1', 'description2', 'description3', 'description4', 'description5', 'description6'].map((key, index, arr) => (
                            <p key={key} className={`text-lg text-[#2D2D2D]/70 leading-relaxed text-justify ${index === arr.length - 1 ? 'mb-8' : 'mb-4'}`}>
                                {t(`about.${key}`)}
                            </p>
                        ))}

                        <div className="space-y-4 mb-10">
                            {['list1', 'list2', 'list3'].map((key, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[#7cb2dd] flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-3 h-3 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-[#2D2D2D]/80">{t(`about.${key}`)}</span>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#2D2D2D]/10">
                            {stats.map((stat) => (
                                <StatCounter
                                    key={stat.key}
                                    value={stat.value}
                                    suffix={stat.suffix}
                                    label={t(`about.${stat.key}`)}
                                    isVisible={isVisible}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}