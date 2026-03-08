import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import I18nProvider from '@/components/I18nProvider';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import InstagramButton from '@/components/InstagramButton';
import FacebookButton from '@/components/FacebookButton';
import { getModulesData } from '@/lib/modules';

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    // Validate locale
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    const messages = await getMessages();
    const modules = await getModulesData();

    return (
        <html lang={locale} dir={locale === 'he' ? 'rtl' : 'ltr'}>
            <head>
                <link rel="icon" type="image/png" href="/images/gates-to-arg-LOGO-SIMPLIFICADO.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <I18nProvider locale={locale}>
                        <div className="min-h-screen bg-[#F5F3EE] overflow-x-hidden">
                            <Header />
                            <main>
                                {children}
                            </main>
                            <Footer modules={modules} />

                            {/* Floating Social Buttons */}
                            <FacebookButton
                                pageUrl="https://www.facebook.com/people/Gates-to-Argentina/61588040902492/"
                            />
                            <InstagramButton />
                            <WhatsAppButton
                                phoneNumber="543813598639"
                                message=""
                            />
                        </div>
                    </I18nProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
