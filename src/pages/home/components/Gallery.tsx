import { useState } from "react";
import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { gallery } from "@/mocks/social";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="w-full scroll-mt-20 bg-background-50 py-14 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Previous sessions"
            title="Pichhle sessions ki jhalak"
            subtitle="Kuch moments jo Cohortify sessions ko yaad rakhne layak banate hain — networking, laughter aur serious baatein, sab ek saath."
            eyebrowTone="accent"
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
          {gallery.map((item, index) => (
            <Reveal key={item.id} delay={index * 70}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative block h-56 w-full cursor-pointer overflow-hidden rounded-lg bg-background-200 text-left sm:h-60 md:h-64 dark:bg-background-200"
                aria-label={`${item.caption} — bada karke dekhein`}
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  title={`Cohortify • ${item.caption}`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-foreground-950/80 via-foreground-950/10 to-transparent"></span>
                <span className="absolute bottom-0 left-0 flex w-full items-center justify-between gap-2 p-4">
                  <span className="text-sm font-semibold text-white">{item.caption}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/20 text-white backdrop-blur-sm">
                    <i className="ri-zoom-in-line text-base"></i>
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeIndex !== null ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setActiveIndex(null)}
            className="cf-fade absolute inset-0 h-full w-full cursor-pointer bg-foreground-950/80 backdrop-blur-sm"
          />
          <div className="cf-pop relative w-full max-w-4xl overflow-hidden rounded-lg bg-background-50 dark:bg-background-100">
            <img
              src={gallery[activeIndex].image}
              alt={gallery[activeIndex].caption}
              title={`Cohortify • ${gallery[activeIndex].caption}`}
              className="max-h-[70vh] w-full object-contain"
            />
            <div className="flex items-center justify-between gap-3 border-t border-background-200 p-4 dark:border-background-800">
              <span className="text-sm font-semibold text-foreground-900">{gallery[activeIndex].caption}</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={() => setActiveIndex((prev) => (prev === null ? null : (prev - 1 + gallery.length) % gallery.length))}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-background-100 text-foreground-800 transition-colors duration-200 hover:bg-background-200 dark:bg-background-200"
                >
                  <i className="ri-arrow-left-line text-lg"></i>
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={() => setActiveIndex((prev) => (prev === null ? null : (prev + 1) % gallery.length))}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-background-100 text-foreground-800 transition-colors duration-200 hover:bg-background-200 dark:bg-background-200"
                >
                  <i className="ri-arrow-right-line text-lg"></i>
                </button>
                <button
                  type="button"
                  aria-label="Close image"
                  onClick={() => setActiveIndex(null)}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-primary-500 text-white transition-colors duration-200 hover:bg-primary-600"
                >
                  <i className="ri-close-line text-lg"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}