'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import type { Module } from '@/types/modules';

interface ModulesProps {
    modules: Module[];
}

export default function Modules({ modules }: ModulesProps) {
    const t = useTranslations();
    const locale = useLocale();
    const { ref, isVisible } = useScrollAnimation<HTMLElement>();

    const validLanguages = ['es', 'en', 'he'] as const;
    const currentLang = (validLanguages.includes(locale as any) ? locale : 'en') as 'es' | 'en' | 'he';

    return (
        <section
            id="modules"
            ref={ref}
            className="py-20 md:py-32 bg-[#F5F3EE]"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-12 h-[2px] bg-[#7cb2dd]" />
                        <span className="text-[#7cb2dd] text-sm font-semibold uppercase tracking-wider">
                            {t('nav.destinations')}
                        </span>
                        <div className="w-12 h-[2px] bg-[#7cb2dd]" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4">
                        &quot;{t('modules.title')}&quot;
                    </h2>
                    <p className="text-lg text-[#2D2D2D]/70 max-w-2xl mx-auto">
                        {t('modules.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {modules.map((module, index) => (
                        <Link
                            key={module.id}
                            href={`/${locale}/modules/${module.id}`}
                            className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                                } block`}
                            style={{
                                transitionDelay: `${index * 150}ms`,
                            }}
                        >
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={module.coverImage}
                                    alt={module.name[currentLang]}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                {module.tag && (
                                    <div className="absolute top-4 left-4 bg-[#7cb2dd] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                                        {module.tag[currentLang]}
                                    </div>
                                )}

                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <div className="flex items-center gap-1 text-sm opacity-90">
                                        <MapPin className="w-4 h-4" />
                                        <span>{module.locations.length} {t('modules.travelLocations')}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#2D2D2D] mb-2 group-hover:text-[#7cb2dd] transition-colors duration-300">
                                    {module.name[currentLang]}
                                </h3>
                                <p className="text-[#2D2D2D]/70 mb-4 line-clamp-2">
                                    {module.summary[currentLang]}
                                </p>
                                <span className="inline-flex items-center gap-2 text-[#7cb2dd] font-semibold group-hover:gap-3 transition-all duration-300">
                                    {t('modules.cta')}
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>

                            <div className="absolute inset-0 border-2 border-[#7cb2dd] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
