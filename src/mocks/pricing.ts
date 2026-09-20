export interface Plan {
  id: string;
  name: string;
  priceNpr: number;
  priceLabel: string;
  period: string;
  tagline: string;
  badge: string | null;
  features: string[];
  ctaLabel: string;
  featured: boolean;
}

/* Placeholder pricing — NPR 250 single session / NPR 800 four-month pass. */
export const plans: Plan[] = [
  {
    id: "single",
    name: "Single Session",
    priceNpr: 250,
    priceLabel: "NPR 250",
    period: "ek session ke liye",
    tagline: "Pehle try karo, phir decide karo.",
    badge: "Starter",
    features: [
      "1 live session (90 minutes)",
      "Topper mentor + host + special guests",
      "Cross-school networking round",
      "Temporary session WhatsApp group",
      "Study materials jo session mein diye jaate hain",
      "Bumper prize draw ka chance",
    ],
    ctaLabel: "Enroll for the upcoming session",
    featured: false,
  },
  {
    id: "pass",
    name: "4-Month Pass",
    priceNpr: 800,
    priceLabel: "NPR 800",
    period: "poore 4 mahine ke liye",
    tagline: "Community mein ghuso, sirf session mein nahi.",
    badge: "Best value",
    features: [
      "4 mahine ke sessions (har mahine naya mentor)",
      "Permanent WhatsApp community access",
      "Session-date polls — aap decide karo kab session ho",
      "Community decision-making mein extra access",
      "Exclusive perks aur priority announcements",
      "Saare study materials + bumper prize chances",
    ],
    ctaLabel: "Get the 4-month pass",
    featured: true,
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    id: "f1",
    question: "Session kis age ke students ke liye hai?",
    answer:
      "Main audience 13–16 saal ke students hain. Parents/guardians bhi join karke dekh sakte hain ki session mein kya hota hai — hum unhe welcome karte hain.",
  },
  {
    id: "f2",
    question: "Session online hai ya offline?",
    answer:
      "Ye session online hota hai, taaki alag-alag schools aur sheher ke students ek hi jagah aa sakein. Join link session ke WhatsApp group mein share kiya jaata hai.",
  },
  {
    id: "f3",
    question: "Mentor har baar wahi hota hai?",
    answer:
      "Nahi. Har session mein ek naya high-achieving mentor hota hai — usually pichle ya pichle se pichle saal ka topper, jo Class 11/12 mein hai.",
  },
  {
    id: "f4",
    question: "Special guests kab announce hote hain?",
    answer:
      "Guests session se thoda pehle announce kiya jaate hain, generally session se kuch din pehle WhatsApp group aur social handles par. Ek audience guest bhi hota hai — audience se hi.",
  },
  {
    id: "f5",
    question: "Enroll karke main kya pay karunga?",
    answer:
      "Single session NPR 250 ka hai, aur 4-month pass NPR 800 ka. Payment details session confirmation ke baad share ki jaati hain.",
  },
  {
    id: "f6",
    question: "4-month pass mein extra kya milta hai?",
    answer:
      "Chaar mahine ke sessions, permanent WhatsApp community, session-date polls, community decision-making mein zyada access aur extra perks.",
  },
];