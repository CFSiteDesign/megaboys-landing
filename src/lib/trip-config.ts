import heroImg from "@/assets/hero-indonesia.jpg";
import uluwatuImg from "@/assets/uluwatu.jpg";
import nusaImg from "@/assets/nusa-lembongan.jpg";
import giliImg from "@/assets/gili-t.jpg";
import lombokImg from "@/assets/kuta-lombok.jpg";
import vibePubcrawlImg from "@/assets/vibe-pubcrawl.jpg";
import vibeWaterfallImg from "@/assets/vibe-waterfall.jpg";
import vibeTubingImg from "@/assets/vibe-tubing.jpg";
import logoImg from "@/assets/mad-monkey-logo.png";

export interface TripConfig {
  creator: {
    name: string;
    instagram: string;
    instagramUrl: string;
    tiktok?: string;
    tiktokUrl?: string;
  };
  poweredBy: {
    name: string;
    logo: string;
  };
  trip: {
    title: string;
    highlightColor: "red" | "teal" | "yellow" | "black";
    dates: string;
    durationDays: number;
    locationCount: number;
    locationLabel: string;
    heroImage: string;
  };
  stripeBookingUrl: string;
  spots: {
    total: number;
    remainingText: string;
  };
  pricing: {
    currency: string;
    total: number;
    deposit: number;
    instalments: { amount: number; due: string }[];
    depositDeadline: string;
    minTravellers: number;
  };
  locations: {
    name: string;
    daysLabel: string;
    duration: string;
    image: string;
    description: string;
    highlights: string[];
  }[];
  included: {
    icon: "bed" | "bus" | "utensils";
    title: string;
    items: string[];
  }[];
  notIncluded: {
    title: string;
    description: string;
  }[];
  whoItsFor: string[];
  bookingSteps: {
    title: string;
    description?: string;
    rows?: { label: string; amount: string; due: string }[];
    footer?: string;
  }[];
  faq: { question: string; answer: string }[];
  vibeGallery: {
    image: string;
    alt: string;
  }[];
  footer: {
    copyright: string;
  };
}

export const tripConfig: TripConfig = {
  creator: {
    name: "MEGA BOYS",
    instagram: "@m3gaboys",
    instagramUrl: "https://instagram.com/m3gaboys",
    tiktok: "@_megaboys_",
    tiktokUrl: "https://tiktok.com/@_megaboys_",
  },
  poweredBy: {
    name: "Mad Monkey",
    logo: logoImg,
  },
  trip: {
    title: "Mega Boys Indonesia Takeover",
    highlightColor: "red",
    dates: "JUL 25 - AUG 8",
    durationDays: 15,
    locationCount: 4,
    locationLabel: "across Bali, Gili & Lombok",
    heroImage: heroImg,
  },
  stripeBookingUrl: "https://buy.stripe.com/5kQ4gy2A337aeyA2L0e7t2R",
  spots: {
    total: 50,
    remainingText: "ONLY 50 SPOTS!",
  },
  pricing: {
    currency: "£",
    total: 950,
    deposit: 316,
    instalments: [
      { amount: 316, due: "27/06" },
      { amount: 316, due: "18/07" },
    ],
    depositDeadline: "20/06",
    minTravellers: 12,
  },
  locations: [
    {
      name: "Uluwatu",
      daysLabel: "Days 1-3",
      duration: "3 Days (Jul 25-27)",
      image: uluwatuImg,
      description:
        "Clifftop sunsets, surf lessons, sauna sessions and the legendary Uluwatu pub crawl. Bali at its best.",
      highlights: [
        "Day 1 (25/07) — Sun: Arrive at Denpasar (DPS) and self-transfer to Mad Monkey Uluwatu. Welcome Sunset at Panorama Point (5PM–7:30PM).",
        "Day 2 (26/07) — Mon: Fuel up at breakfast then hit the waves with a Surf Lesson (9AM–11AM). Free afternoon to explore Uluwatu.",
        "Day 3 (27/07) — Tue: Mt Batur Sunrise Trek (1:30AM–11AM). Recover in the sauna, hot tub and ice baths before the Uluwatu Pub Crawl.",
      ],
    },
    {
      name: "Nusa Lembongan",
      daysLabel: "Days 4-6",
      duration: "3 Days (Jul 28-30)",
      image: nusaImg,
      description:
        "Crystal-clear water, island hopping around Nusa Penida, luxury pool, ice baths and one big pool party.",
      highlights: [
        "Day 4 (28/07) — Wed: Taxi to Sanur then 30-min fast boat to Mad Monkey Nusa Lembongan. Ice baths, saunas, gym and the luxury pool.",
        "Day 5 (29/07) — Thu: Island Hopping around Nusa Penida (8:30AM–5PM). Mad Monkey Pool Party (6PM–10PM).",
        "Day 6 (30/07) — Fri: Early fast boat to Gili Trawangan.",
      ],
    },
    {
      name: "Gili T",
      daysLabel: "Days 6-8",
      duration: "3 Days (Jul 30-Aug 1)",
      image: giliImg,
      description:
        "Foam parties, boat parties, live DJs, beer pong tournaments and snorkelling with turtles. Gili T does not sleep.",
      highlights: [
        "Day 6 (30/07) — Fri: Check into Mad Monkey Gili T just in time for the Foam Party, Live DJ and beer pong tournament.",
        "Day 7 (31/07) — Sat: Mad Monkey Boat Party (2PM–6PM). Unlimited BBQ and drinks back at MM.",
        "Day 8 (01/08) — Sun: Monkey Sea Monkey Do snorkelling tour (10:30AM–4PM, max 27). Pack up for the ferry to Kuta Lombok.",
      ],
    },
    {
      name: "Kuta Lombok",
      daysLabel: "Days 9-13",
      duration: "5 Days (Aug 2-8)",
      image: lombokImg,
      description:
        "Full surf camp: breakfast, waves, video analysis with instructors, afternoon sessions and nightly events. Rinse and repeat.",
      highlights: [
        "Days 9-12 (02/08–07/08) — Mon-Fri: SURF CAMP. Brekkie then surf 9–10AM at a different beach each day depending on conditions. Lunch + video analysis, afternoon surf, nightly events.",
        "Day 13 (08/08) — Sat: Farewell and 30-min shuttle to Lombok Airport (LOP).",
      ],
    },
  ],
  included: [
    {
      icon: "bed",
      title: "Stays",
      items: [
        "Mixed or Female shared dorms",
        "Mad Monkey hostels throughout",
        "Uluwatu, Nusa Lembongan, Gili T & Kuta Lombok",
      ],
    },
    {
      icon: "bus",
      title: "Transport",
      items: [
        "All internal transport between Mad Monkey locations",
        "Fast boats Sanur → Nusa Lembongan → Gili T",
        "Ferry Gili T → Kuta Lombok",
        "Shuttle to Lombok Airport (LOP)",
        "Does NOT include international flights",
      ],
    },
    {
      icon: "utensils",
      title: "Tours & Extras",
      items: [
        "Welcome Sunset at Panorama Point Uluwatu",
        "Surf Lesson in Uluwatu",
        "Mt Batur Sunrise Trek",
        "Uluwatu Pub Crawl",
        "Nusa Penida Island Hopping",
        "Mad Monkey Pool Party (Lembongan)",
        "Foam Party + Live DJ + beer pong (Gili T)",
        "Mad Monkey Boat Party + unlimited BBQ & drinks",
        "Monkey Sea Monkey Do snorkelling tour",
        "5-day Kuta Lombok Surf Camp with video analysis",
        "Sauna, hot tub, ice baths, gym & pool access",
        "Group leader in every location",
        "WhatsApp support group",
      ],
    },
  ],
  notIncluded: [
    { title: "International Flights", description: "Flights to and from Indonesia" },
    { title: "Personal Spend", description: "Meals, drinks, and optional activities not listed in the itinerary" },
    { title: "Visas", description: "Indonesia visa on arrival if required for your passport" },
    { title: "Travel Insurance", description: "Mandatory for all travellers" },
  ],
  whoItsFor: [
    "You're an 18–30 year old social traveller looking for the trip of a lifetime.",
    "You love surf, sunsets, island hopping and big-night-out energy.",
    "You want the logistics handled so you can just show up and have fun.",
    "You're a solo traveller who wants instant community and core memories.",
    "You're a first-time backpacker looking for an easy way into Indonesia.",
  ],
  bookingSteps: [
    {
      title: "Pay Your Deposit",
      description:
        "Pay your £316 deposit via the link below by 20/06.",
    },
    {
      title: "Join the Crew",
      description:
        "Once deposited, you'll be added to the private WhatsApp group for pre-trip banter and packing tips.",
    },
    {
      title: 'Wait for the "GO"',
      description:
        "Spots are limited to 50. Once we hit the minimum, we'll confirm the takeover is ON.",
    },
    {
      title: "Pay Your Instalments",
      rows: [
        { label: "Deposit", amount: "£316", due: "20/06" },
        { label: "Instalment 1", amount: "£316", due: "27/06" },
        { label: "Instalment 2", amount: "£316", due: "18/07" },
      ],
      footer: "Total trip cost: £950",
    },
    {
      title: "Book Your Flights",
      description:
        "Fly into Denpasar (DPS) and out of Lombok (LOP). Do not book flights until the trip is officially confirmed!",
    },
  ],
  faq: [
    {
      question: "Do I need to have backpacking experience?",
      answer:
        "No. This trip is beginner-friendly. All transport, accommodation, and activities are organised for you — you just need to show up ready for adventure.",
    },
    {
      question: "Do I need to know how to surf?",
      answer:
        "Not at all. The Uluwatu surf lesson and the 5-day Kuta Lombok surf camp are designed for all levels — beginners welcome. Instructors will take you to beaches that match the conditions and your ability.",
    },
    {
      question: "What kind of luggage should I bring?",
      answer:
        "We recommend a backpack or medium-sized suitcase (hostels and fast boats are easier to navigate without oversized luggage).",
    },
    {
      question: "Can I request to share a room with someone?",
      answer:
        "Yes. If you're travelling with a friend, let us know in advance and we'll do our best to place you in the same dorm.",
    },
    {
      question: "What if I don't know anyone?",
      answer:
        "That's completely normal — most travellers join solo. You'll be added to a private WhatsApp group before the trip so you can connect with everyone ahead of time.",
    },
    {
      question: "Is this a party trip?",
      answer:
        "It's a social, high-energy trip with pool parties, boat parties and pub crawls built in — but it also includes surf, snorkelling, sunrise treks and downtime. You can participate as much or as little as you like.",
    },
    {
      question: "Can I skip activities if I want to relax?",
      answer:
        "Absolutely. While group activities are included, you're free to opt out of anything and enjoy free time instead.",
    },
    {
      question: "What if I get sick or injured?",
      answer:
        "Travel insurance is mandatory. Hosts and local staff will assist you in accessing medical care if needed, but medical costs are your responsibility and must be covered by insurance.",
    },
    {
      question: "Will there be WiFi?",
      answer:
        "Yes — all Mad Monkey locations have WiFi, though speeds may vary on the islands.",
    },
    {
      question: "Is there a payment plan available?",
      answer:
        "Yes. Secure your spot with a £316 deposit by 20/06, then two further instalments of £316 on 27/06 and 18/07. Missed payments may result in your spot being released.",
    },
    {
      question: "Is the itinerary final?",
      answer:
        "The itinerary is a guide and is subject to change based on weather, boat schedules and local conditions.",
    },
  ],
  vibeGallery: [
    { image: vibePubcrawlImg, alt: "Uluwatu pub crawl night out" },
    { image: vibeWaterfallImg, alt: "Island hopping around Nusa Penida" },
    { image: vibeTubingImg, alt: "Foam party and boat party on Gili T" },
  ],
  footer: {
    copyright: "Powered by Mad Monkey",
  },
};
