'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇦🇷' },
    { code: 'he', name: 'עברית', flag: '🇮🇱' },
];

export default function Header() {
    const t = useTranslations();
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const changeLanguage = (lng: string) => {
        const segments = pathname.split('/');
        segments[1] = lng;
        const newPath = segments.join('/');
        router.push(newPath);
    };

    const navItems = [
        { key: 'home', href: `/${locale}#home` },
        { key: 'destinations', href: `/${locale}#modules` },
        { key: 'services', href: `/${locale}#services` },
        { key: 'about', href: `/${locale}#about` },
        { key: 'contact', href: `/${locale}#contact` },
    ];

    const currentLanguage = languages.find((l) => l.code === locale) || languages[0];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-[#858585ea]/95 backdrop-blur-md shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link href={`/${locale}#home`} className="flex items-center gap-3">
                        <Image
                            src="/images/LOGO-DEFINITIVO.png"
                            alt="Gates to Argentina - Custom vacation packages and luxury tours in Argentina"
                            width={180}
                            height={48}
                            className="h-12 w-auto object-contain"
                            priority
                        />
                    </Link>

                    <nav className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.key}
                                href={item.href}
                                className="text-white/90 hover:text-[#7cb2dd] transition-colors duration-300 text-sm font-medium"
                            >
                                {t(`nav.${item.key}`)}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="text-white hover:text-[#7cb2dd] hover:bg-white/10 flex items-center gap-2"
                                >
                                    <Globe className="w-4 h-4" />
                                    <span className="hidden sm:inline">{currentLanguage.flag}</span>
                                    <ChevronDown className="w-4 h-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-white">
                                {languages.map((lang) => (
                                    <DropdownMenuItem
                                        key={lang.code}
                                        onClick={() => changeLanguage(lang.code)}
                                        className="cursor-pointer"
                                    >
                                        <span className="mr-2">{lang.flag}</span>
                                        {lang.name}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Link
                            href={`/${locale}#contact`}
                            className="hidden md:inline-flex bg-[#7cb2dd] hover:bg-[#66a0d0] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#7cb2dd]/30 drop-shadow-lg"
                        >
                            {t('hero.cta')}
                        </Link>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden text-white p-2"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-[#858585ea]/98 backdrop-blur-md rounded-b-2xl pb-6">
                        <nav className="flex flex-col gap-2 px-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.key}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-white/90 hover:text-[#7cb2dd] hover:bg-white/5 transition-all duration-300 py-3 px-4 rounded-lg text-base font-medium"
                                >
                                    {t(`nav.${item.key}`)}
                                </Link>
                            ))}
                            <Link
                                href={`/${locale}#contact`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="bg-[#7cb2dd] hover:bg-[#66a0d0] text-white text-center py-3 px-4 rounded-lg text-base font-medium mt-2 transition-all duration-300 drop-shadow-lg"
                            >
                                {t('hero.cta')}
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
