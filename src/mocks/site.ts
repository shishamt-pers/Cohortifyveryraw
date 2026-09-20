export interface SocialLink {
  id: string;
  label: string;
  icon: string;
  href: string;
}

export const brand = {
  name: "Cohortify",
  tagline: "Where ambition meets alliance.",
  taglineHi: "Jahan sapne, saathiyon se milte hain.",
  description:
    "Cohortify ek mentorship aur networking platform hai 13–16 saal ke students aur unke parents ke liye. Har session mein ek naya topper mentor, alag-alag schools ke naye dost, aur ek community jo aapke saath chalti hai.",
  email: "hello@cohortify.placeholder",
  phone: "+977 98XXXXXXXX",
  location: "Kathmandu, Nepal • Online sessions",
};

export const navLinks = [
  { id: "session", label: "Upcoming Session", href: "#upcoming-session" },
  { id: "benefits", label: "Kya Milega", href: "#what-you-get" },
  { id: "mentor", label: "Mentor", href: "#mentor" },
  { id: "gallery", label: "Gallery", href: "#gallery" },
  { id: "reviews", label: "Reviews", href: "#testimonials" },
  { id: "pricing", label: "Pricing", href: "#pricing" },
];

export const socialLinks: SocialLink[] = [
  { id: "instagram", label: "Instagram", icon: "ri-instagram-line", href: "#" },
  { id: "tiktok", label: "TikTok", icon: "ri-tiktok-line", href: "#" },
  { id: "youtube", label: "YouTube", icon: "ri-youtube-line", href: "#" },
  { id: "whatsapp", label: "WhatsApp Community", icon: "ri-whatsapp-line", href: "#" },
];