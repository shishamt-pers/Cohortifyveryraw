export interface Testimonial {
  id: string;
  name: string;
  meta: string;
  review: string;
  rating: number;
  avatar: string;
}

/* Placeholder reviews — replace with real collected testimonials later. */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sujal K.",
    meta: "Class 10 student",
    review:
      "Maine socha tha boring lecture hoga. Ulta poora session baat-cheet mein nikal gaya. Stream choice ka confusion 30 minute mein clear ho gaya, aur ek dost bhi ban gaya dusre school ka.",
    rating: 5,
    avatar:
      "https://readdy.ai/api/search-image?query=Friendly%20teenage%20Nepali%20school%20student%20portrait%20headshot%20with%20soft%20smile%2C%20plain%20warm%20cream%20background%2C%20even%20natural%20lighting%2C%20clean%20modern%20yearbook%20style%20photograph%2C%20sharp%20focus%20on%20face&width=240&height=240&seq=cohortify-review-avatar-1&orientation=squarish",
  },
  {
    id: "t2",
    name: "Anisha R.",
    meta: "Class 9 student",
    review:
      "Mentor ne humari age ka hi banda tha, isliye baat relate hui. Focus ka jo simple trick bataya, wo main aaj bhi use karti hoon. Group ke andar doubts bhi turant solve hote hain.",
    rating: 5,
    avatar:
      "https://readdy.ai/api/search-image?query=Cheerful%20South%20Asian%20teenage%20girl%20student%20portrait%20headshot%20with%20bright%20friendly%20smile%2C%20soft%20cream%20plain%20background%2C%20gentle%20diffused%20lighting%2C%20modern%20clean%20portrait%20photography%2C%20crisp%20detail&width=240&height=240&seq=cohortify-review-avatar-2&orientation=squarish",
  },
  {
    id: "t3",
    name: "Prakash Adhikari",
    meta: "Parent",
    review:
      "Mere chhore ka screen time kam hua aur padhai ka plan bana. Prince (host) har session ke baad short update bhejte hain, isse parents ko bhi clarity milti hai. NPR 250 mein itna value unexpected tha.",
    rating: 5,
    avatar:
      "https://readdy.ai/api/search-image?query=Middle%20aged%20South%20Asian%20father%20portrait%20headshot%20with%20calm%20warm%20smile%2C%20simple%20neutral%20cream%20background%2C%20soft%20studio%20lighting%2C%20professional%20friendly%20photograph%2C%20clear%20sharp%20detail&width=240&height=240&seq=cohortify-review-avatar-3&orientation=squarish",
  },
  {
    id: "t4",
    name: "Bibek T.",
    meta: "Class 10 student",
    review:
      "Different schools ke students se baat karna alag hi maza tha. Pata chala sabka same dar hai. Session ke baad poora week group active raha, aur bumper prize bhi mila ek session mein.",
    rating: 4,
    avatar:
      "https://readdy.ai/api/search-image?query=Young%20Nepali%20teenage%20boy%20student%20portrait%20headshot%20with%20relaxed%20confident%20expression%2C%20minimal%20warm%20beige%20background%2C%20soft%20even%20lighting%2C%20clean%20contemporary%20photography%20style&width=240&height=240&seq=cohortify-review-avatar-4&orientation=squarish",
  },
  {
    id: "t5",
    name: "Sarita L.",
    meta: "Parent • 4-month pass holder",
    review:
      "Humne 4-month pass liya aur decision sahi nikla. Har month naya mentor, naya topic. Session-date polls se hum khud decide karte hain kab session ho — ye cheez bahut pasand aayi.",
    rating: 5,
    avatar:
      "https://readdy.ai/api/search-image?query=Warm%20smiling%20South%20Asian%20mother%20portrait%20headshot%20with%20kind%20expression%2C%20plain%20light%20cream%20background%2C%20soft%20natural%20lighting%2C%20modern%20friendly%20portrait%20photography&width=240&height=240&seq=cohortify-review-avatar-5&orientation=squarish",
  },
];

export interface GalleryItem {
  id: string;
  caption: string;
  image: string;
}

export const gallery: GalleryItem[] = [
  {
    id: "g1",
    caption: "Session 01 — first networking round",
    image:
      "https://readdy.ai/api/search-image?query=Group%20of%20teenage%20Nepali%20students%20laughing%20together%20in%20a%20bright%20modern%20meeting%20room%20with%20warm%20cream%20walls%20and%20wooden%20furniture%2C%20candid%20documentary%20photography%2C%20natural%20window%20light%2C%20warm%20joyful%20community%20energy&width=1000&height=750&seq=cohortify-gallery-01&orientation=landscape",
  },
  {
    id: "g2",
    caption: "Mentor explaining stream choices",
    image:
      "https://readdy.ai/api/search-image?query=Teenage%20student%20mentor%20presenting%20in%20front%20of%20a%20small%20group%20of%20younger%20students%20in%20a%20warm%20cozy%20workshop%20space%2C%20soft%20ambient%20lighting%2C%20candid%20documentary%20photography%2C%20orange%20and%20cream%20color%20tones&width=1000&height=750&seq=cohortify-gallery-02&orientation=landscape",
  },
  {
    id: "g3",
    caption: "Parents Q&A corner",
    image:
      "https://readdy.ai/api/search-image?query=South%20Asian%20parents%20sitting%20and%20listening%20attentively%20in%20a%20bright%20informal%20session%20circle%20with%20soft%20warm%20lighting%2C%20candid%20authentic%20documentary%20photography%2C%20cream%20and%20amber%20tones&width=1000&height=750&seq=cohortify-gallery-03&orientation=landscape",
  },
  {
    id: "g4",
    caption: "Cross-school friendship break",
    image:
      "https://readdy.ai/api/search-image?query=Diverse%20group%20of%20Nepali%20teenagers%20chatting%20and%20laughing%20casually%20during%20a%20break%20in%20a%20sunlit%20warm%20hall%2C%20candid%20lifestyle%20documentary%20photography%2C%20joyful%20friendly%20atmosphere%2C%20soft%20golden%20light&width=1000&height=750&seq=cohortify-gallery-04&orientation=landscape",
  },
  {
    id: "g5",
    caption: "Interactive quiz round",
    image:
      "https://readdy.ai/api/search-image?query=Excited%20teenage%20students%20raising%20hands%20during%20a%20fun%20interactive%20quiz%20in%20a%20warm%20modern%20room%2C%20energetic%20candid%20event%20photography%2C%20warm%20amber%20and%20cream%20palette%2C%20natural%20light&width=1000&height=750&seq=cohortify-gallery-05&orientation=landscape",
  },
  {
    id: "g6",
    caption: "Session 03 group photo",
    image:
      "https://readdy.ai/api/search-image?query=Friendly%20group%20photo%20of%20teenage%20students%20and%20a%20young%20mentor%20posing%20together%20in%20a%20warm%20bright%20indoor%20space%2C%20happy%20community%20celebration%20moment%2C%20candid%20documentary%20style%2C%20soft%20cream%20tones&width=1000&height=750&seq=cohortify-gallery-06&orientation=landscape",
  },
];