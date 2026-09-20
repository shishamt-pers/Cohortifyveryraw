export interface SessionInfo {
  id: string;
  sessionLabel: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  mode: string;
  language: string;
  ageGroup: string;
  priceNpr: number;
  priceLabel: string;
  enrolled: number;
  seatsTotal: number;
  remaining: number;
  statusLabel: string;
  statusTone: "open" | "filling" | "closed";
  description: string;
  agenda: string[];
  mentorId: string;
}

/* Placeholder content — replace these values from your backend later. */
export const upcomingSession: SessionInfo = {
  id: "session-04",
  sessionLabel: "Upcoming Session 04",
  title: "Padhai se Aage — Streams, Skills aur Smart Choices",
  date: "Saturday, 26 September 2026",
  time: "7:00 PM – 8:30 PM (NPT)",
  duration: "90 minutes",
  mode: "Online • Zoom link WhatsApp group mein",
  language: "Nepali + English (Hinglish vibe)",
  ageGroup: "Students 13–16 & Parents welcome",
  priceNpr: 250,
  priceLabel: "NPR 250",
  enrolled: 5,
  seatsTotal: 9,
  remaining: 4,
  statusLabel: "Enrollment open",
  statusTone: "filling",
  description:
    "Ek session mein poora clarity pack. Mentor aapko batayega ki Class 9–10 mein kaunse decisions actually matter karte hain — stream choice, study routine, distraction control aur confidence. Saath mein alag-alag schools ke students se seedha interaction, aur host ke saath halke-fulke jokes bhi.",
  agenda: [
    "Stream aur subject choice: kaise sochna chahiye",
    "Study routine jo sach mein follow ho paaye",
    "Distraction, phone aur focus ka simple system",
    "Open networking round — naye dost, naye schools",
  ],
  mentorId: "mentor-aarav",
};

/* Placeholder numbers — swap with live counts from your backend. */
export const enrollmentProof = {
  enrolledLabel: "5+ enrolled",
  remainingLabel: "4 remaining",
  urgencyLabel: "Filling fast",
  seatsTotal: 9,
  trustLine: "Har session ke baad parents ko short summary bhi milti hai.",
};