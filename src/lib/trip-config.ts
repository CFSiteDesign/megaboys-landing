import heroImg from "@/assets/hero-thailand.jpg";
import bangkokImg from "@/assets/bangkok.jpg";
import chiangmaiImg from "@/assets/chiangmai.jpg";
import paiImg from "@/assets/pai.jpg";
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
    name: "DAVID",
    instagram: "@whatdaviddoesnext",
    instagramUrl: "https://instagram.com/whatdaviddoesnext",
    tiktok: "@whatdaviddoesnext",
    tiktokUrl: "https://tiktok.com/@whatdaviddoesnext",
  },
  poweredBy: {
    name: "Mad Monkey",
    logo: logoImg,
  },
  trip: {
    title: "Northern Thailand Takeover",
    highlightColor: "red",
    dates: "OCT 3 - OCT 13",
    durationDays: 11,
    locationCount: 3,
    locationLabel: "across Northern Thailand",
    heroImage: heroImg,
  },
  stripeBookingUrl: "https://buy.stripe.com/aFaeVc2A38ruaik85ke7t20",
  spots: {
    total: 12,
    remainingText: "ONLY 12 SPOTS LEFT!",
  },
  pricing: {
    currency: "£",
    total: 489,
    deposit: 163,
    instalments: [
      { amount: 163, due: "05/09" },
      { amount: 163, due: "26/09" },
    ],
    depositDeadline: "22/08",
    minTravellers: 12,
  },
  locations: [
    {
      name: "Bangkok",
      daysLabel: "Days 1-3",
      duration: "3 Days (Oct 3-5)",
      image: bangkokImg,
      description:
        "Kick off in Bangkok — karaoke nights, the legendary Khao San Road pub crawl, canal cruises on the Chao Phraya, and an overnight train north.",
      highlights: [
        "Day 1 (03/10) — Sun: Arrive in Bangkok. Group karaoke sing-along, then hit Khao San Road for the ultimate pub crawl.",
        "Day 2 (04/10) — Mon: Shake off the hangover and explore Bangkok city. Pub quiz in the evening.",
        "Day 3 (05/10) — Tue: Canal cruise along the Chao Phraya River, then board the overnight train to Chiang Mai.",
      ],
    },
    {
      name: "Chiang Mai",
      daysLabel: "Days 4-7",
      duration: "4 Days (Oct 6-9)",
      image: chiangmaiImg,
      description:
        "Northern Thailand's adventure capital — elephants, waterfalls, mountain temples, BBQ buffets and the legendary Mad Challenge.",
      highlights: [
        "Day 4 (06/10) — Wed: Arrive Chiang Mai early. Power nap, then Chiang Mai Grand Canyon Water Park. Nightly 'Mad Challenge' for those who can hack it.",
        "Day 5 (07/10) — Thu: Elephant Sanctuary and Sticky Waterfall tour. Pool tournament back at the hostel.",
        "Day 6 (08/10) — Fri: Free day to explore Chiang Mai. BBQ buffet at 4PM or the Chiang Mai ultimate pub crawl.",
        "Day 7 (09/10) — Sat: Doi Suthep and waterfall tour, followed by a beer pong tournament.",
      ],
    },
    {
      name: "Pai",
      daysLabel: "Days 8-10",
      duration: "3 Days (Oct 10-12)",
      image: paiImg,
      description:
        "762 turns into the mountains for jungle rafting, tipsy tubing, hot springs and sunsets at Two Huts. Pai hits different.",
      highlights: [
        "Day 8 (10/10) — Sun: 4-hour minibus ride (762 turns!) to Pai. Sunset hike at Pai Canyon.",
        "Day 9 (11/10) — Mon: Pai's ultimate one-day rafting adventure — jungle cliffs, waterfalls and hot springs. Wind down at Two Huts for sunset.",
        "Day 10 (12/10) — Tue: Pai's famous tipsy tubing. Final sunset at Two Huts to close out the trip.",
        "Day 11 (13/10) — Wed: Travel back to Chiang Mai Airport.",
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
        "Bangkok, Chiang Mai & Pai",
      ],
    },
    {
      icon: "bus",
      title: "Transport",
      items: [
        "All internal transport",
        "Overnight train Bangkok → Chiang Mai",
        "Minibus Chiang Mai → Pai → Chiang Mai Airport",
        "Does NOT include international flights",
      ],
    },
    {
      icon: "utensils",
      title: "Tours & Extras",
      items: [
        "Khao San Road pub crawl",
        "Chao Phraya canal cruise",
        "Chiang Mai Grand Canyon Water Park",
        "Elephant Sanctuary & Sticky Waterfall tour",
        "Doi Suthep & waterfall tour",
        "Pai Canyon sunset hike",
        "Pai one-day rafting adventure",
        "Pai tipsy tubing",
        "BBQ buffet + pool / beer pong tournaments",
        "Group leader in every location",
        "WhatsApp support group",
      ],
    },
  ],
  notIncluded: [
    { title: "International Flights", description: "Flights to and from Thailand" },
    { title: "Personal Spend", description: "Meals, drinks, and optional activities not listed in the itinerary" },
    { title: "Visas", description: "Thailand visa on arrival if required for your passport" },
    { title: "Travel Insurance", description: "Mandatory for all travellers" },
  ],
  whoItsFor: [
    "You're an 18–30 year old social traveller looking for the trip of a lifetime.",
    "You love jungle adventures, mountain sunsets, and big-night-out energy.",
    "You want the logistics handled so you can just show up and have fun.",
    "You're a solo traveller who wants instant community and core memories.",
    "You're a first-time backpacker looking for an easy way into Southeast Asia.",
  ],
  bookingSteps: [
    {
      title: "Pay Your Deposit",
      description:
        "Pay your £163 deposit via the link below by 22/08.",
    },
    {
      title: "Join the Crew",
      description:
        "Once deposited, you'll be added to the private WhatsApp group for pre-trip banter and packing tips.",
    },
    {
      title: 'Wait for the "GO"',
      description:
        "This trip requires 12 confirmed travellers by 22/08. As soon as we hit the minimum, we'll confirm the takeover is ON.",
    },
    {
      title: "Pay Your Instalments",
      rows: [
        { label: "Deposit", amount: "£163", due: "22/08" },
        { label: "Instalment 1", amount: "£163", due: "05/09" },
        { label: "Instalment 2", amount: "£163", due: "26/09" },
      ],
      footer: "Total trip cost: £489",
    },
    {
      title: "Book Your Flights",
      description:
        "Do not book flights until the 12-person minimum is officially confirmed!",
    },
  ],
  faq: [
    {
      question: "Do I need to have backpacking experience?",
      answer:
        "No. This trip is beginner-friendly. All transport, accommodation, and activities are organised for you — you just need to show up ready for adventure.",
    },
    {
      question: "What kind of luggage should I bring?",
      answer:
        "We recommend a backpack or medium-sized suitcase (hostels and boats are easier to navigate without oversized luggage).",
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
        "This is a social, high-energy trip with boat parties and nightlife built in — but it also includes beach days, adventure activities, and downtime. You can participate as much or as little as you like.",
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
        "Yes — all Mad Monkey locations have WiFi, though speeds may vary depending on island location.",
    },
    {
      question: "Is there a payment plan available?",
      answer:
        "Yes. You can secure your spot with a deposit, then pay the remaining balance in scheduled installments before departure. All payment deadlines will be shared after booking. Missed payments may result in your spot being released.",
    },
  ],
  vibeGallery: [
    { image: vibePubcrawlImg, alt: "Khao San Road pub crawl in Bangkok" },
    { image: vibeWaterfallImg, alt: "Sticky Waterfall climbing near Chiang Mai" },
    { image: vibeTubingImg, alt: "Tipsy tubing down a jungle river in Pai" },
  ],
  footer: {
    copyright: "Powered by Mad Monkey",
  },
};
