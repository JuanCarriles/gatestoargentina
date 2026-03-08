import type { Metadata } from 'next';
import { seoConfig, SITE_URL, type Locale } from '@/lib/seo';
import { getModulesData } from '@/lib/modules';
import { notFound } from 'next/navigation';
import ModuleDetailClient from './ModuleDetailClient';

type Props = {
    params: Promise<{ moduleId: string; locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { moduleId, locale } = await params;
    const lang = (locale as Locale) || 'en';

    // Use pre-defined SEO metadata if available
    const moduleSeo = seoConfig.modules[moduleId as keyof typeof seoConfig.modules];
    if (moduleSeo) {
        const meta = moduleSeo[lang] || moduleSeo.en;
        return {
            title: meta.title,
            description: meta.description,
            alternates: {
                canonical: `${SITE_URL}/${locale}/modules/${moduleId}`,
                languages: {
                    en: `${SITE_URL}/en/modules/${moduleId}`,
                    es: `${SITE_URL}/es/modules/${moduleId}`,
                    he: `${SITE_URL}/he/modules/${moduleId}`,
                    'x-default': `${SITE_URL}/en/modules/${moduleId}`,
                },
            },
            openGraph: {
                title: meta.title,
                description: meta.description,
                url: `${SITE_URL}/${locale}/modules/${moduleId}`,
                siteName: 'Gates to Argentina',
                locale: locale === 'he' ? 'he_IL' : locale === 'es' ? 'es_AR' : 'en_US',
                type: 'website',
            },
            twitter: {
                card: 'summary_large_image',
                title: meta.title,
                description: meta.description,
            },
            robots: {
                index: true,
                follow: true,
            },
        };
    }

    // Fallback for modules without pre-defined SEO data
    const modules = await getModulesData();
    const module = modules.find((m) => m.id === moduleId);
    if (!module) {
        return { title: 'Module Not Found' };
    }

    const title = `${module.name[lang]} – Gates to Argentina`;
    const description = module.summary[lang];

    return {
        title,
        description,
        alternates: {
            canonical: `${SITE_URL}/${locale}/modules/${moduleId}`,
            languages: {
                en: `${SITE_URL}/en/modules/${moduleId}`,
                es: `${SITE_URL}/es/modules/${moduleId}`,
                he: `${SITE_URL}/he/modules/${moduleId}`,
                'x-default': `${SITE_URL}/en/modules/${moduleId}`,
            },
        },
    };
}

export default async function ModuleDetailPage({ params }: Props) {
    const { moduleId, locale } = await params;
    const lang = (locale as Locale) || 'en';
    const modules = await getModulesData();
    const module = modules.find((m) => m.id === moduleId);

    if (!module) {
        notFound();
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'TouristTrip',
        name: module.name[lang],
        description: module.description[lang],
        url: `${SITE_URL}/${locale}/modules/${moduleId}`,
        image: `${SITE_URL}${module.coverImage}`,
        touristType: 'Group',
        provider: {
            '@type': 'TravelAgency',
            name: 'Gates to Argentina',
            url: SITE_URL,
        },
        ...(module.itinerary && {
            itinerary: {
                '@type': 'ItemList',
                numberOfItems: module.itinerary.days.length,
                itemListElement: module.itinerary.days.map((day) => ({
                    '@type': 'ListItem',
                    position: day.day,
                    name: day.title[lang],
                    description: day.description[lang],
                })),
            },
        }),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ModuleDetailClient module={module} locale={locale} />
        </>
    );
}
