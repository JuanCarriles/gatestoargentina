import type { Metadata } from 'next';
import { seoConfig, SITE_URL, type Locale } from '@/lib/seo';
import Hero from '@/sections/Hero';
import Modules from '@/sections/Modules';
import Services from '@/sections/Services';
import About from '@/sections/About';
import Contact from '@/sections/Contact';
import { getModulesData } from '@/lib/modules';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const lang = (locale as Locale) || 'en';
  const meta = seoConfig.home[lang] || seoConfig.home.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        en: `${SITE_URL}/en`,
        es: `${SITE_URL}/es`,
        he: `${SITE_URL}/he`,
        'x-default': `${SITE_URL}/en`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${SITE_URL}/${locale}`,
      siteName: 'Gates to Argentina',
      locale: locale === 'he' ? 'he_IL' : locale === 'es' ? 'es_AR' : 'en_US',
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/images/RecorriendoJujuy.jpg`,
          width: 1200,
          height: 630,
          alt: 'Gates to Argentina - Custom Vacation Packages',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [`${SITE_URL}/images/RecorriendoJujuy.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const modules = await getModulesData();
  const meta = seoConfig.home[(locale as Locale) || 'en'] || seoConfig.home.en;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Gates to Argentina',
    description: meta.description,
    url: `${SITE_URL}/${locale}`,
    logo: `${SITE_URL}/images/LOGO-DEFINITIVO.png`,
    image: `${SITE_URL}/images/RecorriendoJujuy.jpg`,
    telephone: '+54-381-3598639',
    email: 'gloria@gatestoargentina.com',
    areaServed: {
      '@type': 'Country',
      name: 'Argentina',
    },
    availableLanguage: ['English', 'Spanish', 'Hebrew'],
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'Group Tours',
        description: 'Custom-designed group travel packages across Argentina',
      },
      {
        '@type': 'Offer',
        name: 'Individual Tours',
        description: 'Personalized private travel experiences tailored to your preferences',
      },
    ],
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Tucumán',
        addressCountry: 'AR',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Tel Aviv',
        addressCountry: 'IL',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Modules modules={modules} />
      <Services />
      <About />
      <Contact modules={modules} />
    </>
  );
}
