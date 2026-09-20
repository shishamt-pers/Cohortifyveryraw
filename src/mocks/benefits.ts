export interface Benefit {
  id: string;
  icon: string;
  title: string;
  text: string;
  tone: "primary" | "accent" | "secondary";
}

export const benefits: Benefit[] = [
  {
    id: "mentorship",
    icon: "ri-user-star-line",
    title: "Topper Mentorship",
    text: "Har session mein ek naya high-achieving mentor jo khud Class 11/12 mein hai — jo abhi-abhi wahi phase cross kiya hai jo aap abhi jeete ho.",
    tone: "primary",
  },
  {
    id: "guidance",
    icon: "ri-compass-3-line",
    title: "Future + Personal Guidance",
    text: "Stream, subject aur career ki direction, saath mein confidence, discipline aur distraction handling par seedhi baat.",
    tone: "accent",
  },
  {
    id: "networking",
    icon: "ri-links-line",
    title: "Cross-School Networking",
    text: "Different schools ke students ek hi table par. Naye perspectives, naye ideas aur ek network jo school ke bahar bhi kaam aata hai.",
    tone: "secondary",
  },
  {
    id: "friendship",
    icon: "ri-hand-heart-line",
    title: "Sachhi Dosti",
    text: "Session ke baad bhi baat jaari — ek cohort jo aapko akela feel nahi hone deta.",
    tone: "primary",
  },
  {
    id: "fun",
    icon: "ri-emotion-laugh-line",
    title: "Fun, Jokes & Interaction",
    text: "Lecture nahi, conversation. Memes, light jokes aur live interaction jisse 90 minutes nikal jaate hain pata bhi nahi chalta.",
    tone: "secondary",
  },
  {
    id: "perks",
    icon: "ri-gift-2-line",
    title: "Study Material & Bumper Prizes",
    text: "Session ke saath useful study materials, aur selected sessions mein bumper prizes ka chance — sab session mein announce hota hai.",
    tone: "accent",
  },
  {
    id: "community",
    icon: "ri-whatsapp-line",
    title: "Temporary Session WhatsApp Group",
    text: "Har session ka apna WhatsApp group — doubt, discussion aur announcements ke liye. 4-month pass walon ko permanent community milti hai.",
    tone: "primary",
  },
  {
    id: "parents",
    icon: "ri-parent-line",
    title: "Parents Ke Liye Clarity",
    text: "Parents bhi join kar sakte hain aur dekhte hain ki bachcha kya seekh raha hai. Har session ke baad short update bhi.",
    tone: "secondary",
  },
];