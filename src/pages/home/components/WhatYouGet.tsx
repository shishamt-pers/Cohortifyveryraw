import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import EnrollButton from "@/components/base/EnrollButton";
import { benefits } from "@/mocks/benefits";

const toneStyles = {
  primary: "bg-primary-100 text-primary-700 dark:bg-primary-500/15 dark:text-primary-300",
  accent: "bg-accent-100 text-accent-700 dark:bg-accent-500/15 dark:text-accent-300",
  secondary: "bg-secondary-100 text-secondary-900 dark:bg-secondary-500/15 dark:text-secondary-300",
};

export default function WhatYouGet() {
  return (
    <section id="what-you-get" className="w-full scroll-mt-20 bg-background-100 py-14 md:py-20 dark:bg-background-100">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="What you get"
            title="Sirf class nahi — ek poora experience"
            subtitle="Mentorship, guidance, naye dost, jokes aur perks. Sab kuch ek hi jagah, ek hi session mein."
            eyebrowTone="accent"
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-5">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.id} delay={index * 60}>
              <article className="group flex h-full flex-col gap-3 rounded-lg border border-background-200 bg-background-50 p-5 transition-colors duration-200 hover:border-primary-300 dark:border-background-800 dark:bg-background-200/40 dark:hover:border-primary-500/40">
                <span className={`flex h-11 w-11 items-center justify-center rounded-md ${toneStyles[benefit.tone]}`}>
                  <i className={`${benefit.icon} text-xl`}></i>
                </span>
                <h3 className="font-heading text-base font-bold text-foreground-950">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-foreground-600">{benefit.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-center gap-4 rounded-lg border border-background-200 bg-background-50 p-6 text-center md:flex-row md:justify-between md:text-left dark:border-background-800 dark:bg-background-200/40">
            <div>
              <p className="font-heading text-lg font-bold text-foreground-950">
                Dekha? Ye sab ek session mein milta hai — NPR 250 mein.
              </p>
              <p className="mt-1 text-sm text-foreground-600">
                Chhoti investment, badi clarity. Seat limited hai, isliye jaldi decide kariye.
              </p>
            </div>
            <EnrollButton size="lg" label="Enroll for the upcoming session" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}