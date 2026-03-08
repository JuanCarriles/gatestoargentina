import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

const locales = ['en', 'es', 'he'] as const;
const moduleIds = ['noa', 'ba', 'calafate-ushuaia-explorer'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
    const entries: MetadataRoute.Sitemap = [];

    // Home pages per locale
    for (const locale of locales) {
        entries.push({
            url: `${SITE_URL}/${locale}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
            alternates: {
                languages: Object.fromEntries(
                    locales.map((l) => [l, `${SITE_URL}/${l}`])
                ),
            },
        });
    }

    // Module pages per locale
    for (const moduleId of moduleIds) {
        for (const locale of locales) {
            entries.push({
                url: `${SITE_URL}/${locale}/modules/${moduleId}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8,
                alternates: {
                    languages: Object.fromEntries(
                        locales.map((l) => [l, `${SITE_URL}/${l}/modules/${moduleId}`])
                    ),
                },
            });
        }
    }

    return entries;
}
