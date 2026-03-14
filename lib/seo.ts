/**
 * SEO metadata configuration per locale and per page.
 * Keywords integrated based on keyword research.
 */

export const SITE_URL = 'https://www.gatestoargentina.com';

export const seoConfig = {
    home: {
        en: {
            title: 'Argentina Vacation Packages | Custom Group & Private Tours – Gates to Argentina',
            description: 'Book your Argentina vacation package with personalized service. Luxury group and individual tours, private guides, and custom-designed trips across Patagonia, Buenos Aires & Northwest Argentina.',
        },
        es: {
            title: 'Paquetes de Viaje a Argentina | Viajes Grupales e Individuales – Gates to Argentina',
            description: 'Paquetes de viaje a Argentina con servicio personalizado. Tours de lujo grupales e individuales, guías privados y viajes a medida por Patagonia, Buenos Aires y el Noroeste Argentino.',
        },
        he: {
            title: 'חבילות נופש בארגנטינה | טיולים קבוצתיים ופרטיים – Gates to Argentina',
            description: 'חבילות נופש בארגנטינה עם שירות מותאם אישית. טיולי יוקרה קבוצתיים ופרטיים, מדריכים מקומיים וטיולים מותאמים אישית בפטגוניה, בואנוס איירס וצפון מערב ארגנטינה.',
        },
    },
    modules: {
        noa: {
            en: {
                title: 'Northwest Argentina Tour | Salta, Jujuy & Wine Country – Gates to Argentina',
                description: '8-day luxury tour through Argentina\'s northwest. Explore Quebrada de Humahuaca UNESCO site, Salinas Grandes, Cafayate wineries. Available as group or individual vacation packages.',
            },
            es: {
                title: 'Tour Noroeste Argentino | Salta, Jujuy y Ruta del Vino – Gates to Argentina',
                description: 'Tour de 8 días por el noroeste argentino. Quebrada de Humahuaca UNESCO, Salinas Grandes, bodegas de Cafayate. Paquetes grupales e individuales personalizados.',
            },
            he: {
                title: 'סיור בצפון מערב ארגנטינה | סלטה, חוחוי ויינות – Gates to Argentina',
                description: 'סיור יוקרה בן 8 ימים בצפון מערב ארגנטינה. אתר UNESCO קברדה דה הומאוואקה, סלינס גרנדס, יקבי קאפאייטה. חבילות קבוצתיות ופרטיות.',
            },
        },
        ba: {
            en: {
                title: 'Buenos Aires Travel Package | Cultural Immersion Tour – Gates to Argentina',
                description: 'Explore Buenos Aires with our custom travel package. Tango shows, Recoleta, La Boca, world-class gastronomy. Group and private tours with bilingual guides included.',
            },
            es: {
                title: 'Paquete de Viaje a Buenos Aires | Tour Cultural – Gates to Argentina',
                description: 'Explorá Buenos Aires con nuestro paquete a medida. Shows de tango, Recoleta, La Boca, gastronomía de clase mundial. Tours grupales e individuales con guías bilingües.',
            },
            he: {
                title: 'חבילת טיול בבואנוס איירס | סיור תרבותי – Gates to Argentina',
                description: 'גלו את בואנוס איירס עם החבילה המותאמת שלנו. מופעי טנגו, רקולטה, לה בוקה, גסטרונומיה ברמה עולמית. סיורים קבוצתיים ופרטיים עם מדריכים דו-לשוניים.',
            },
        },
        'calafate-ushuaia-explorer': {
            en: {
                title: 'Patagonia Tour Package | Glaciers, Ushuaia & El Chaltén – Gates to Argentina',
                description: '9-day Southern Patagonia adventure. Perito Moreno Glacier, Mount Fitz Roy trek, Beagle Channel cruise. Luxury group and individual Argentina vacation packages with private transfers.',
            },
            es: {
                title: 'Paquete Patagonia | Glaciares, Ushuaia y El Chaltén – Gates to Argentina',
                description: 'Aventura de 9 días por la Patagonia Austral. Glaciar Perito Moreno, trekking al Fitz Roy, crucero por el Canal Beagle. Paquetes grupales e individuales de lujo con traslados privados.',
            },
            he: {
                title: 'חבילת טיול פטגוניה | קרחונים, אושואיה ואל צ\'לטן – Gates to Argentina',
                description: 'הרפתקת 9 ימים בפטגוניה הדרומית. קרחון פריטו מורנו, טרק הר פיץ רוי, שייט בתעלת ביגל. חבילות קבוצתיות ופרטיות יוקרתיות עם העברות פרטיות.',
            },
        },
    },
} as const;

export type Locale = 'en' | 'es' | 'he';
