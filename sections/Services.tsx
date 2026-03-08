'use client';

import { useTranslations } from 'next-intl';
import {
    Bus,
    Hotel,
    Users,
    UtensilsCrossed,
    HeadphonesIcon,
    ShieldCheck,
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
    { key: 'transfers', icon: Bus },
    { key: 'accommodation', icon: Hotel },
    { key: 'guides', icon: Users },
    { key: 'gastronomy', icon: UtensilsCrossed },
    { key: 'support', icon: HeadphonesIcon },
    { key: 'insurance', icon: ShieldCheck },
];

export default function Services() {
    const t = useTranslations();
    const { ref, isVisible } = useScrollAnimation<HTMLElement>();

    return (
        <section
            id="services"
            ref={ref}
            className="py-20 md:py-32 bg-[#232121fa] relative overflow-hidden"
        >
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div
                    className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-12 h-[2px] bg-[#7cb2dd]" />
                        <span className="text-[#7cb2dd] text-sm font-semibold uppercase tracking-wider services-text-shadow">
                            {t('services.title-section')}
                        </span>
                        <div className="w-12 h-[2px] bg-[#7cb2dd]" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 services-text-shadow">
                        {t('services.title')}
                    </h2>
                    <p className="text-2xl text-white/70 max-w-2xl mx-auto services-text-shadow">
                        {t('services.subtitle')}
                    </p>
                </div>
                <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white mb-8 services-text-shadow text-center animate-shimmer">
                    {t('services.concierge-services')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.key}
                                className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#7cb2dd]/50 transition-all duration-500 ${isVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                                    }`}
                                style={{
                                    transitionDelay: `${index * 100}ms`,
                                }}
                            >
                                <div className="relative mb-6">
                                    <div className="w-16 h-16 rounded-full bg-[#7cb2dd]/20 flex items-center justify-center group-hover:bg-[#7cb2dd]/30 transition-colors duration-300">
                                        <Icon className="w-8 h-8 text-[#7cb2dd]" />
                                    </div>
                                    <div className="absolute inset-0 w-16 h-16 rounded-full bg-[#7cb2dd]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#7cb2dd] transition-colors duration-300 services-text-shadow">
                                    {t(`services.${service.key}`)}
                                </h3>
                                <p className="text-white/70 leading-relaxed services-text-shadow">
                                    {t(`services.${service.key}Desc`)}
                                </p>

                                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute top-4 right-4 w-8 h-[2px] bg-[#7cb2dd]" />
                                    <div className="absolute top-4 right-4 w-[2px] h-8 bg-[#7cb2dd]" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
