'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import {
    Facebook,
    Instagram,
    MessageCircle,
    Mail,
    MapPin,
} from 'lucide-react';
import type { Module } from '@/types/modules';

interface FooterProps {
    modules: Module[];
}

export default function Footer({ modules }: FooterProps) {
    const t = useTranslations();
    const locale = useLocale();

    const quickLinks = [
        { key: 'home', href: `/${locale}#home` },
        { key: 'destinations', href: `/${locale}#modules` },
        { key: 'services', href: `/${locale}#services` },
        { key: 'about', href: `/${locale}#about` },
        { key: 'contact', href: `/${locale}#contact` },
    ];

    const destinations = modules.map(module => ({
        id: module.id,
        href: `/${locale}/modules/${module.id}`,
        name: module.name
    }));

    const socialLinks = [
        { icon: Instagram, href: 'https://www.instagram.com/gatestoargentina/', label: 'Instagram' },
        { icon: Facebook, href: 'https://www.facebook.com/people/Gates-to-Argentina/61588040902492/', label: 'Facebook' },
        { icon: MessageCircle, href: 'https://wa.me/543813598639', label: 'WhatsApp' },
    ];

    return (
        <footer className="bg-[#858585ea] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="lg:col-span-1">
                        <Link href={`/${locale}#home`} className="flex items-center gap-2 mb-6">
                            <Image
                                src="/images/LOGO-DEFINITIVO.png"
                                alt="Gates to Argentina - Travel agency for Argentina vacation packages"
                                width={180}
                                height={48}
                                className="h-12 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-white/70 leading-relaxed mb-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                            {t('footer.description')}
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#7cb2dd] flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    aria-label={social.label}
                                >
                                    {social.icon && <social.icon className="w-5 h-5" />}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white/90" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                            {t('footer.quickLinks')}
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.key}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-[#7cb2dd] transition-colors duration-300"
                                        style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                                    >
                                        {t(`nav.${link.key}`)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white/90" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                            {t('footer.destinations')}
                        </h4>
                        <ul className="space-y-3">
                            {destinations.map((dest) => (
                                <li key={dest.id}>
                                    <Link
                                        href={dest.href}
                                        className="text-white/70 hover:text-[#7cb2dd] transition-colors duration-300"
                                        style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                                    >
                                        {dest.name[locale as keyof typeof dest.name] || dest.name.en}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white/90" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                            {t('footer.contact')}
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#7cb2dd] flex-shrink-0 mt-0.5" />
                                <div className="text-white/70 text-sm" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                                    <p className="font-medium text-white">{t('contact.offices.argentina')}</p>
                                    <p>{t('contact.offices.argentinaLocation')}</p>
                                    <p>{t('contact.offices.argentinaPhone')}</p>
                                </div>
                            </li>

                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#7cb2dd] flex-shrink-0" />
                                <a
                                    href="mailto:gloria@gatestoargentina.com"
                                    className="text-white/70 hover:text-[#7cb2dd] transition-colors duration-300 text-sm"
                                    style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                                >
                                    gloria@gatestoargentina.com
                                </a>
                            </li>

                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#7cb2dd] flex-shrink-0 mt-0.5" />
                                <div className="text-white/70 text-sm" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                                    <p className="font-medium text-white">{t('contact.offices.israel')}</p>
                                    <p>{t('contact.offices.israelLocation')}</p>
                                    <p>{t('contact.offices.israelPhone')}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/50 text-sm" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                            © 2026 Gates to Argentina. {t('footer.rights')}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
