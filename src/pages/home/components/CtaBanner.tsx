import Reveal from "@/components/base/Reveal";
import EnrollButton from "@/components/base/EnrollButton";
import { brand } from "@/mocks/site";
import { upcomingSession } from "@/mocks/session";

const recap = [
  { id: "date", icon: "ri-calendar-event-line", value: upcomingSession.date },
  { id: "time", icon: "ri-time-line", value: upcomingSession.time },
  { id: "price", icon: "ri-price-tag-3-line", value: `${upcomingSession.priceLabel} • NPR 800 pass` },
  { id: "seats", icon: "ri-fire-line", value: `${upcomingSession.remaining} seats remaining` },
];

export default function CtaBanner() {
  return (
    <section className="w-full bg-background-50 py-14 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="relative w-full overflow-hidden rounded-lg">
            <div className="absolute inset-0 h-full w-full">
              <img
                src="https://readdy.ai/api/search-image?query=Warm%20abstract%20artistic%20backdrop%20with%20deep%20terracotta%20and%20golden%20amber%20gradient%20waves%2C%20soft%20organic%20layered%20curves%20and%20subtle%20grain%20texture%2C%20slight%20silhouette%20of%20teenage%20students%20standing%20together%2C%20dark%20rich%20vignette%20for%20text%20contrast%2C%20premium%20modern%20poster%20aesthetic&width=1920&height=900&seq=cohortify-cta-band&orientation=landscape"
                alt="Cohortify session join karne wale students"
                title="Cohortify — enroll for the upcoming session"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-foreground-950/85 via-foreground-950/75 to-foreground-950/85"></div>
            </div>

            <div className="relative z-10 flex flex-col gap-6 p-6 md:gap-8 md:p-12 lg:p-14">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                <span className="flex h-3.5 w-3.5 items-center justify-center">
                  <i className="ri-flashlight-fill text-sm text-secondary-300"></i>
                </span>
                Seats bharte ja rahe hain
              </span>

              <h2 className="max-w-3xl font-heading text-2xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
                Aaj decide kariye, kal se aapke paas ek poora cohort hoga.
              </h2>

              <p className="max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
                {brand.tagline} Chhoti si fee, bada sa clarity — aur ek aisi dosti jo school ke gate ke bahar bhi chalti
                hai. Sirf 3 fields bharne hain.
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {recap.map((item) => (
                  <div key={item.id} className="flex items-center gap-2.5 rounded-lg border border-white/15 bg-white/10 px-3.5 py-2.5 backdrop-blur-sm">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center text-secondary-300">
                      <i className={`${item.icon} text-base`}></i>
                    </span>
                    <span className="text-xs font-semibold text-white md:text-sm">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <EnrollButton size="lg" label="Enroll for the upcoming session" />
                <a
                  href="#pricing"
                  className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/20 md:text-base"
                >
                  4-month pass dekho
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}