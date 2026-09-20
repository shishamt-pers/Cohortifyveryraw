import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import EnrollModal from "@/components/feature/EnrollModal";
import Hero from "@/pages/home/components/Hero";
import ProofStrip from "@/pages/home/components/ProofStrip";
import UpcomingSession from "@/pages/home/components/UpcomingSession";
import WhatYouGet from "@/pages/home/components/WhatYouGet";
import MentorSection from "@/pages/home/components/MentorSection";
import HostGuests from "@/pages/home/components/HostGuests";
import Gallery from "@/pages/home/components/Gallery";
import Testimonials from "@/pages/home/components/Testimonials";
import Pricing from "@/pages/home/components/Pricing";
import Faq from "@/pages/home/components/Faq";
import CtaBanner from "@/pages/home/components/CtaBanner";

const pathToSectionMap: Record<string, string> = {
  "/upcoming-session": "upcoming-session",
  "/sessions": "upcoming-session",
  "/what-you-get": "what-you-get",
  "/benefits": "what-you-get",
  "/mentor": "mentor",
  "/host": "host",
  "/gallery": "gallery",
  "/reviews": "testimonials",
  "/testimonials": "testimonials",
  "/pricing": "pricing",
  "/faq": "faq",
};

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to it
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    // If navigated directly to a named section route (e.g. /pricing)
    const targetSection = pathToSectionMap[location.pathname.toLowerCase()];
    if (targetSection) {
      const el = document.getElementById(targetSection);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen w-full bg-background-50">
      <Navbar />
      <main>
        <Hero />
        <ProofStrip />
        <UpcomingSession />
        <WhatYouGet />
        <MentorSection />
        <HostGuests />
        <Gallery />
        <Testimonials />
        <Pricing />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
      <EnrollModal />
    </div>
  );
}