'use client';

import { useEffect } from 'react';
import Image from 'next/image';
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
        <section id="about" ref={ref} className="py-20 md:py-18 bg-[#F5F3EE]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`transition-all duration-700 delay-200 ${isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                        }`}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-[2px] bg-[#7cb2dd]" />
                        <span className="text-[#7cb2dd] text-sm font-semibold uppercase tracking-wider">
                            {t('nav.about')}
                        </span>
                        <div className="w-12 h-[2px] bg-[#7cb2dd]" />
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-6">
                        {t('about.title')}
                    </h2>

                    <div className="text-lg text-[#2D2D2D]/70 leading-relaxed text-justify">
                        {/* Floating image */}
                        <div className="float-right mt-5 ml-10 mb-6 w-[250px] sm:w-[300px] relative">
                            <div className="relative">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src="/images/GloriaPais.JPEG"
                                        alt="Gloria Pais - Founder of Gates to Argentina, expert in custom Argentina vacation packages"
                                        className="w-full h-[380px] sm:h-[480px] object-cover object-top"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 border-4 border-[#7cb2dd] rounded-2xl pointer-events-none" />
                                </div>
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#7cb2dd]/10 rounded-2xl -z-10" />
                                <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-[#7cb2dd]/30 rounded-2xl -z-10" />
                            </div>
                            <div className="absolute -bottom-4 left-4 bg-white shadow-xl rounded-xl p-3 flex items-center justify-center">
                                <div className="font-bold text-[#2D2D2D]">Gloria Pais</div>
                            </div>
                        </div>

                        {['description1', 'description2', 'description3', 'description4', 'description5', 'description6'].map((key, index, arr) => (
                            <p key={key} className={index === arr.length - 1 ? 'mb-8' : 'mb-4'}>
                                {t(`about.${key}`)}
                            </p>
                        ))}
                    </div>

                    <div className="clear-both" />

                    <div className="space-y-4 mb-10 mt-8">
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
        </section>
    );
}
