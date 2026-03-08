import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'es', 'he'],
    defaultLocale: 'en',
});
