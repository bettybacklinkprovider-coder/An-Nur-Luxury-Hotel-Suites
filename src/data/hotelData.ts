import heroFacade from '../assets/images/hero_hotel_facade_1791025535747.jpg';
import royalSuite from '../assets/images/room_royal_suite_1791025549891.jpg';
import deluxeKing from '../assets/images/room_deluxe_king_1791025566233.jpg';
import executiveSuiteImg from '../assets/images/room_executive_suite_1791026340393.jpg';
import familySuiteImg from '../assets/images/room_family_suite_1791026355783.jpg';
import lobbyLounge from '../assets/images/hotel_lobby_lounge_1791025578777.jpg';
import diningRestaurant from '../assets/images/hotel_dining_restaurant_1791025597302.jpg';
import spaWellness from '../assets/images/hotel_spa_wellness_1791025614948.jpg';

import serviceWifiImg from '../assets/images/service_wifi_lounge_1791026243983.jpg';
import serviceDeskImg from '../assets/images/service_front_desk_1791026260508.jpg';
import serviceDiningImg from '../assets/images/service_room_service_1791026275951.jpg';
import serviceParkingImg from '../assets/images/service_valet_parking_1791026290779.jpg';
import serviceHousekeepingImg from '../assets/images/service_housekeeping_1791026307670.jpg';
import serviceSpaImg from '../assets/images/service_spa_pool_1791026323673.jpg';

export interface HotelRoom {
  id: string;
  name: string;
  category: 'deluxe' | 'executive' | 'suite' | 'presidential';
  priceSAR: number;
  priceUSD: number;
  sizeSqM: number;
  capacity: string;
  bedType: string;
  image: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface HotelService {
  id: string;
  iconName: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  hours: string;
  highlight: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'rooms' | 'lobby' | 'dining' | 'wellness';
  image: string;
  caption: string;
}

export const HOTEL_INFO = {
  name: "An Nur Luxury Hotel & Suites",
  tagline: "Experience Regal Arabian Hospitality in the Heart of Dammam",
  phone: "+966536426397",
  phoneFormatted: "+966 53 642 6397",
  whatsapp: "966536426397",
  email: "reservations@annurhotel.sa",
  address: "حي، King Saud St, An Nur, Dammam 32445, Saudi Arabia",
  city: "Dammam",
  district: "An Nur District",
  checkInTime: "15:00 (3:00 PM)",
  checkOutTime: "12:00 (12:00 PM)",
  receptionHours: "24 Hours / 7 Days a Week",
  mapCoordinates: {
    lat: 26.4340,
    lng: 50.1033,
  },
  ratings: {
    score: 4.9,
    reviewsCount: 1280,
    stars: 5,
  }
};

export const ROOMS_DATA: HotelRoom[] = [
  {
    id: "royal-presidential-suite",
    name: "Royal Presidential Suite",
    category: "presidential",
    priceSAR: 1850,
    priceUSD: 493,
    sizeSqM: 110,
    capacity: "4 Guests (2 Adults, 2 Children)",
    bedType: "1 Super King Bed + Executive Sofa Lounge",
    image: royalSuite,
    description: "The crown jewel of An Nur Hotel. Features an expansive living parlor, master marble bathroom with hydro-tub, private dining area, and panoptic city skyline views.",
    features: ["Private VIP Check-in", "Executive Lounge Access", "Butler Service", "Marble Spa Bath", "High-Speed Wi-Fi", "In-Suite Dining Bar"],
    popular: true
  },
  {
    id: "deluxe-king-room",
    name: "Deluxe King Room",
    category: "deluxe",
    priceSAR: 550,
    priceUSD: 147,
    sizeSqM: 42,
    capacity: "2 Guests",
    bedType: "1 Custom Plush King Bed",
    image: deluxeKing,
    description: "Sophisticated sanctuary designed with deep royal purple accents, plush feather bedding, dedicated work desk, and rainfall marble shower.",
    features: ["City View Balcony", "Smart 65\" 4K TV", "Nespresso Coffee Bar", "Rainfall Shower", "24/7 Room Service"],
    popular: true
  },
  {
    id: "executive-diplomatic-suite",
    name: "Executive Diplomatic Suite",
    category: "executive",
    priceSAR: 980,
    priceUSD: 261,
    sizeSqM: 68,
    capacity: "3 Guests",
    bedType: "1 King Bed + Convertible Daybed",
    image: executiveSuiteImg,
    description: "Designed for discerning business travelers and diplomats. Offers a separate living room, ergonomic executive workstation, and complimentary lounge breakfast.",
    features: ["Separated Living Area", "Complimentary Lounge Breakfast", "VIP Airport Transfer", "Workstation & Printer Access", "Soundproof Glass"],
  },
  {
    id: "royal-family-suite",
    name: "Royal Family Suite",
    category: "suite",
    priceSAR: 1250,
    priceUSD: 333,
    sizeSqM: 85,
    capacity: "5 Guests",
    bedType: "1 King Bed + 2 Twin Beds",
    image: familySuiteImg,
    description: "Generously proportioned multi-bedroom suite offering opulent comfort, connecting family quarters, two full marble bathrooms, and dedicated children's setup.",
    features: ["Two Bedrooms", "Two Marble Bathrooms", "Family Dining Table", "Pillow Menu", "Child-Friendly Amenities"]
  }
];

export const SERVICES_DATA: HotelService[] = [
  {
    id: "wifi",
    iconName: "Wifi",
    title: "High-Speed Ultra Wi-Fi",
    shortDesc: "Gigabit optical fiber internet across all suites, lounges, and outdoor gardens.",
    fullDesc: "Stay seamlessly connected with complimentary ultra-fast optical fiber connection throughout the hotel premises, ideal for HD video streaming and business calls.",
    hours: "24/7 Unlimited Access",
    highlight: "Included with every stay",
    image: serviceWifiImg
  },
  {
    id: "reception",
    iconName: "Clock",
    title: "24/7 Front Desk & Concierge",
    shortDesc: "Multilingual guest relations team ready to assist with reservations and requests.",
    fullDesc: "Our dedicated concierge and guest relations experts are at your disposal around the clock for private city tours, limousine bookings, and personalized requests.",
    hours: "24 Hours Daily",
    highlight: "Multilingual Staff (Arabic, English, French)",
    image: serviceDeskImg
  },
  {
    id: "room-service",
    iconName: "UtensilsCrossed",
    title: "Gourmet Room Service",
    shortDesc: "Curated menu of international dishes and authentic Saudi culinary specialties.",
    fullDesc: "Indulge in gourmet dishes prepared fresh by our executive chefs, served right to your private suite with silver-service presentation.",
    hours: "24 Hours Daily",
    highlight: "In-Suite Silver Service Dining",
    image: serviceDiningImg
  },
  {
    id: "parking",
    iconName: "Car",
    title: "Secure Valet & Underground Parking",
    shortDesc: "Complimentary covered parking with 24-hour security surveillance and valet.",
    fullDesc: "Enjoy effortless arrival with our complimentary valet parking service and secure subterranean garage equipped with EV charging stations.",
    hours: "24 Hours Valet",
    highlight: "Complimentary & EV Charger Available",
    image: serviceParkingImg
  },
  {
    id: "housekeeping",
    iconName: "Sparkles",
    title: "Daily Housekeeping & Turndown",
    shortDesc: "Immaculate room care, luxury linen refresh, and evening pillow turndown service.",
    fullDesc: "Rigorous hygiene standards, twice-daily room servicing, custom pillow menus, and signature lavender aromatherapy turndown every evening.",
    hours: "Daily 08:00 – 22:00",
    highlight: "Evening Lavender Aromatherapy",
    image: serviceHousekeepingImg
  },
  {
    id: "spa-wellness",
    iconName: "HeartPulse",
    title: "Royal Spa & Hydro Pool",
    shortDesc: "Thermal hydrotherapy pool, sauna, steam rooms, and relaxing body treatments.",
    fullDesc: "Unwind in our serene spa sanctuary featuring temperature-controlled hydro pools, traditional Moroccan Hammam, and bespoke wellness therapies.",
    hours: "07:00 – 22:00",
    highlight: "Private Men's & Women's Sections",
    image: serviceSpaImg
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g1",
    title: "Grand Facade at Twilight",
    category: "lobby",
    image: heroFacade,
    caption: "The magnificent architectural exterior of An Nur Hotel on King Saud St, Dammam."
  },
  {
    id: "g2",
    title: "Royal Presidential Bedroom",
    category: "rooms",
    image: royalSuite,
    caption: "Master bedroom suite with plush royal purple velvet furnishings and ambient backlighting."
  },
  {
    id: "g3",
    title: "Deluxe King Sanctuary",
    category: "rooms",
    image: deluxeKing,
    caption: "Elegant Deluxe King room crafted for supreme rest and comfort."
  },
  {
    id: "g4",
    title: "Royal Crystal Lobby Lounge",
    category: "lobby",
    image: lobbyLounge,
    caption: "Our opulent grand lobby featuring crystal chandeliers and marble flooring."
  },
  {
    id: "g5",
    title: "Al Thuraya Fine Dining",
    category: "dining",
    image: diningRestaurant,
    caption: "Exquisite gourmet dining atmosphere blending local Saudi flavors with international gastronomy."
  },
  {
    id: "g6",
    title: "Indoor Hydrotherapy Pool & Spa",
    category: "wellness",
    image: spaWellness,
    caption: "Tranquil indoor pool with ambient purple lighting and thermal relaxation loungers."
  }
];

export const TESTIMONIALS = [
  {
    name: "Sheikh Mansoor Al-Otaibi",
    role: "Frequent Corporate Guest",
    city: "Riyadh, KSA",
    comment: "An Nur Luxury Hotel is unmatched in Dammam. The level of hospitality, cleanliness, and peaceful purple ambience makes every business trip feel like a royal retreat.",
    rating: 5
  },
  {
    name: "Dr. Fatima Al-Zahrani",
    role: "Weekend Leisure Guest",
    city: "Jeddah, KSA",
    comment: "Located conveniently on King Saud Street. The room service was prompt, the bed was heavenly, and the front desk staff went above and beyond for our family.",
    rating: 5
  },
  {
    name: "David H. Richardson",
    role: "International Executive",
    city: "London, UK",
    comment: "Sensational 5-star standard! The Presidential Suite is world-class with ultra-fast Wi-Fi and flawless airport transfers. Highly recommended in Dammam.",
    rating: 5
  }
];

export const HOTEL_HIGHLIGHTS = [
  { label: "Guest Satisfaction", value: "99.4%" },
  { label: "Luxury Suites & Rooms", value: "120+" },
  { label: "Distance to Corniche", value: "8 Mins" },
  { label: "Airport Transit Time", value: "25 Mins" }
];
