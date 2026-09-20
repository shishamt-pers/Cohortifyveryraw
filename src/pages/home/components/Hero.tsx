import { brand } from "@/mocks/site";
import { upcomingSession } from "@/mocks/session";
import EnrollButton from "@/components/base/EnrollButton";

const heroInfo = [
  { id: "date", icon: "ri-calendar-event-line", label: "Date", value: upcomingSession.date },
  { id: "time", icon: "ri-time-line", label: "Time", value: upcomingSession.time },
  { id: "price", icon: "ri-price-tag-3-line", label: "Session fee", value: upcomingSession.priceLabel },
];

export default function Hero() {
  return (
    <section id="top" className="relative w-full overflow-hidden">
      <div className="absolute inset-0 h-full w-full">
        <img
          src="https://readdy.ai/api/search-image?query=Abstract%20artistic%20background%20with%20warm%20terracotta%20orange%20and%20deep%20amber%20gradients%2C%20soft%20flowing%20geometric%20shapes%20and%20layered%20organic%20curves%2C%20subtle%20silhouettes%20of%20young%20students%20in%20conversation%2C%20cinematic%20dark%20vignette%20at%20the%20edges%20for%20strong%20text%20contrast%2C%20premium%20editorial%20poster%20look&width=1920&height=1080&seq=cohortify-hero-main&orientation=landscape"
          alt="Cohortify students ek saath seekhte hue"
          title="Cohortify — Where ambition meets alliance"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground-950/70 via-foreground-950/60 to-foreground-950/80"></div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 pb-16 pt-28 text-center md:px-6 md:pb-24 md:pt-40">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
          <span className="flex h-3.5 w-3.5 items-center justify-center">
            <i className="ri-live-line text-sm text-accent-300"></i>
          </span>
          {upcomingSession.sessionLabel} • Enrollment open
        </span>

        <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl md:text-7xl">
          {brand.name}
        </h1>

        <p className="mt-3 font-heading text-lg font-semibold text-secondary-300 md:text-2xl">{brand.tagline}</p>

        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">
          Topper mentors, different schools ke naye dost, aur ek community jo sirf session tak seemit nahi rehti. 13–16
          saal ke students aur unke parents ke liye bana ek aisa space jahan guidance boring nahi lagti.
        </p>

        <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
          <EnrollButton size="lg" label="Enroll for the upcoming session" />
          <a
            href="#upcoming-session"
            className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/20 md:text-base"
          >
            Session details dekho
            <span className="flex h-4 w-4 items-center justify-center">
              <i className="ri-arrow-down-line text-base"></i>
            </span>
          </a>
        </div>

        <div className="mt-10 grid w-full grid-cols-1 gap-3 sm:grid-cols-3 md:mt-14 md:gap-4">
          {heroInfo.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-left backdrop-blur-sm"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-secondary-500 text-foreground-950">
                <i className={`${item.icon} text-lg`}></i>
              </span>
              <span className="flex flex-col">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/60">{item.label}</span>
                <span className="text-sm font-semibold text-white">{item.value}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}