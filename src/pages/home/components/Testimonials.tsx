import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import StarRating from "@/components/base/StarRating";
import EnrollButton from "@/components/base/EnrollButton";
import { testimonials } from "@/mocks/social";

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full scroll-mt-20 bg-background-100 py-14 md:py-20 dark:bg-background-100">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Reviews"
            title="Students aur parents kya kehte hain"
            subtitle="Real reactions sessions ke baad — students se aur unke parents se."
            eyebrowTone="secondary"
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
          {testimonials.map((item, index) => (
            <Reveal key={item.id} delay={index * 70}>
              <article className="flex h-full flex-col gap-4 rounded-lg border border-background-200 bg-background-50 p-5 md:p-6 dark:border-background-800 dark:bg-background-200/40">
                <div className="flex items-center justify-between gap-3">
                  <StarRating rating={item.rating} />
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary-100 text-primary-700 dark:bg-primary-500/15 dark:text-primary-300">
                    <i className="ri-double-quotes-l text-base"></i>
                  </span>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-foreground-700">{item.review}</p>
                <div className="flex items-center gap-3 border-t border-background-200 pt-4 dark:border-background-700">
                  <span className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-background-200">
                    <img
                      src={item.avatar}
                      alt={`${item.name} — Cohortify review`}
                      title={`${item.name} • ${item.meta}`}
                      className="h-full w-full object-cover object-top"
                    />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-bold text-foreground-950">{item.name}</span>
                    <span className="text-xs text-foreground-500">{item.meta}</span>
                  </span>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={420}>
            <div className="flex h-full flex-col justify-between gap-4 rounded-lg border border-primary-200 bg-primary-50 p-5 md:p-6 dark:border-primary-500/25 dark:bg-primary-500/10">
              <div className="flex flex-col gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary-500 text-white">
                  <i className="ri-emotion-happy-line text-xl"></i>
                </span>
                <h3 className="font-heading text-lg font-bold text-foreground-950">
                  Aap bhi apna experience add kariye
                </h3>
                <p className="text-sm leading-relaxed text-foreground-600">
                  Session join kariye, phir apna honest feedback share kariye — aapka review agle students ko decide
                  karne mein madad karta hai.
                </p>
              </div>
              <EnrollButton size="md" className="w-full" label="Enroll for the upcoming session" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}