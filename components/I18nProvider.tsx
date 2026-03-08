'use client';

import { useEffect } from 'react';
import i18n from '@/i18n';

interface I18nProviderProps {
    children: React.ReactNode;
    locale: string;
}

export default function I18nProvider({ children, locale }: I18nProviderProps) {
    useEffect(() => {
        // Sync the URL locale with i18next
        if (i18n.language !== locale) {
            i18n.changeLanguage(locale);
        }
        // Set document direction for RTL
        document.dir = locale === 'he' ? 'rtl' : 'ltr';
    }, [locale]);

    return <>{children}</>;
}
