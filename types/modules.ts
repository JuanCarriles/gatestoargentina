// Location information for the module
export interface TravelLocation {
    name: Translation;
    type: 'city' | 'natural' | 'cultural';
    image: string;
}

// Attraction with visual assets
export interface Attraction {
    id: string;
    name: Translation;
    image: string;
    type: 'natural' | 'cultural' | 'adventure';
    description: Translation;
}

// Single day in the itinerary
export interface ItineraryDay {
    day: number;
    title: Translation;
    description: Translation;
}

// Complete itinerary information
export interface Itinerary {
    pdfUrl?: string;
    days: ItineraryDay[];
}

export interface WhatsIncludedItem {
    name: Translation;
    icon: string;
}

// Translation object for multi-language support
export interface Translation {
    es: string;
    en: string;
    he: string;
}

// Main Module structure
export interface Module {
    id: string;
    name: Translation;
    summary: Translation;
    description: Translation;
    inquiryText: Translation;
    coverImage: string;
    numberOfDays: number;
    numberOfPeople: number;
    tag?: Translation; // Optional badge/tag for the module card
    locations: TravelLocation[];
    mainAttractions: Attraction[];
    itinerary?: Itinerary;
    whatsIncluded?: WhatsIncludedItem[];
}

// Module data structure loaded from JSON
export interface ModulesData {
    modules: Module[];
}
