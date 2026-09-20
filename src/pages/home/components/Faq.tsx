import { useState } from "react";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import EnrollButton from "@/components/base/EnrollButton";
import { faqs } from "@/mocks/pricing";

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section id="faq" className="w-full scroll-mt-20 bg-background-100 py-14 md:py-20 dark:bg-background-100">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title="Common sawaal, seedhe jawaab"
              subtitle="Aur bhi kuch poochna hai? Session ke WhatsApp group mein host se direct pooch sakte ho."
              align="left"
              eyebrowTone="accent"
            />
            <div className="mt-6 hidden lg:block">
              <EnrollButton size="lg" label="Enroll for the upcoming session" />
            </div>
          </Reveal>

          <div className="flex flex-col gap-3 lg:col-span-8">
            {faqs.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <Reveal key={faq.id} delay={index * 60}>
                  <div className="overflow-hidden rounded-lg border border-background-200 bg-background-50 dark:border-background-800 dark:bg-background-200/40">
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      aria-expanded={isOpen}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 p-4 text-left md:p-5"
                    >
                      <span className="font-heading text-sm font-bold text-foreground-950 md:text-base">
                        {faq.question}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition-colors duration-200 ${
                          isOpen
                            ? "bg-primary-500 text-white"
                            : "bg-background-100 text-foreground-700 dark:bg-background-700/60"
                        }`}
                      >
                        <i className={`${isOpen ? "ri-subtract-line" : "ri-add-line"} text-base`}></i>
                      </span>
                    </button>
                    {isOpen ? (
                      <div className="cf-fade px-4 pb-4 md:px-5 md:pb-5">
                        <p className="border-t border-background-200 pt-4 text-sm leading-relaxed text-foreground-600 dark:border-background-700">
                          {faq.answer}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </Reveal>
              );
            })}

            <Reveal delay={380}>
              <div className="mt-2 lg:hidden">
                <EnrollButton size="lg" className="w-full" label="Enroll for the upcoming session" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}