export interface Person {
  id: string;
  name: string;
  grade: string;
  role: string;
  achievement: string;
  bio: string;
  photo: string;
  tags: string[];
}

export interface Guest {
  id: string;
  name: string;
  role: string;
  note: string;
  icon: string;
  announced: boolean;
}

/* Placeholder people — replace name, grade, achievement, bio and photo from your backend. */
export const mentor: Person = {
  id: "mentor-aarav",
  name: "Aarav Mehta",
  grade: "Class 12 • Science",
  role: "Session Mentor",
  achievement: "School topper • District science olympiad finalist",
  bio: "Do saal pehle khud Class 10 ke pressure se guzra hai — isliye jaanta hai kahan log atakte hain. Simple system, honest baatein aur zero gyaan-baazi. Uska style: thoda roast, zyada clarity.",
  photo:
    "https://readdy.ai/api/search-image?query=Confident%20teenage%20Nepali%20male%20student%20mentor%20in%20smart%20casual%20shirt%20smiling%20warmly%2C%20studio%20portrait%20with%20soft%20warm%20cream%20background%2C%20natural%20window%20light%2C%20editorial%20photography%2C%20premium%20youthful%20look%2C%20sharp%20detail%2C%20friendly%20approachable%20energy&width=900&height=1100&seq=cohortify-mentor-portrait&orientation=portrait",
  tags: ["Study systems", "Stream choice", "Focus & discipline"],
};

/* Host — confirmed. */
export const host: Person = {
  id: "host-shishamt",
  name: "Shishamt Sah",
  grade: "Organizer • Cohortify",
  role: "Host",
  achievement: "Community builder • Har session ka host",
  bio: "Sessions ko chalata hai, mood banata hai aur ensure karta hai ki koi bhi student shy rehkar chup na baithe. Session ke bahar bhi community ka point of contact.",
  photo:
    "https://readdy.ai/api/search-image?query=Young%20South%20Asian%20male%20organizer%20host%20in%20smart%20casual%20outfit%20with%20relaxed%20confident%20smile%2C%20clean%20soft%20cream%20studio%20backdrop%2C%20warm%20even%20lighting%2C%20professional%20editorial%20portrait%2C%20approachable%20welcoming%20expression%2C%20high%20detail&width=900&height=1100&seq=cohortify-host-portrait&orientation=portrait",
  tags: ["Hosting", "Community", "Post-session support"],
};

/* Special guests — typically announced shortly before each session. */
export const guests: Guest[] = [
  {
    id: "guest-1",
    name: "Guest Topper 01",
    role: "Class 12 • Topper student",
    note: "Naam aur photo session se thoda pehle announce hoga.",
    icon: "ri-star-smile-line",
    announced: true,
  },
  {
    id: "guest-2",
    name: "Guest Topper 02",
    role: "Class 11 • High scorer",
    note: "Session se pehle special guest reveal hota hai.",
    icon: "ri-award-line",
    announced: true,
  },
  {
    id: "guest-3",
    name: "Guest Topper 03",
    role: "Senior student mentor",
    note: "Announcement session ke WhatsApp group mein aayega.",
    icon: "ri-medal-line",
    announced: true,
  },
  {
    id: "guest-audience",
    name: "Audience Guest",
    role: "1 participant from the audience",
    note: "Har session mein ek participant ko stage milta hai — apna sawaal, apni story.",
    icon: "ri-mic-line",
    announced: false,
  },
];