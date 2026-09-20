import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import EnrollButton from "@/components/base/EnrollButton";
import { upcomingSession } from "@/mocks/session";
import { host, mentor } from "@/mocks/people";

const metaRows = [
  { id: "date", icon: "ri-calendar-event-line", label: "Date", value: upcomingSession.date },
  { id: "time", icon: "ri-time-line", label: "Time", value: upcomingSession.time },
  { id: "mode", icon: "ri-vidicon-line", label: "Mode", value: upcomingSession.mode },
  { id: "age", icon: "ri-user-heart-line", label: "Kiske liye", value: upcomingSession.ageGroup },
];

export default function UpcomingSession() {
  const progress = Math.round((upcomingSession.enrolled / upcomingSession.seatsTotal) * 100);

  return (
    <section id="upcoming-session" className="w-full scroll-mt-20 bg-background-50 py-14 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Upcoming Session"
            title="Agla session — aapke liye ready hai"
            subtitle="Ek session mein mentor, host, special guests aur poora networking round. Details dekh lijiye, phir seat book kar lijiye."
            eyebrowTone="primary"
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
          <Reveal className="lg:col-span-3">
            <div className="flex h-full flex-col gap-6 rounded-lg border border-background-200 bg-background-100 p-5 md:p-7 dark:border-background-800">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-800 dark:bg-accent-500/15 dark:text-accent-300">
                  <span className="flex h-2 w-2 items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-accent-500"></span>
                  </span>
                  {upcomingSession.statusLabel}
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-foreground-500">
                  {upcomingSession.sessionLabel}
                </span>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-bold leading-tight text-foreground-950 md:text-3xl">
                  {upcomingSession.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-600 md:text-base">
                  {upcomingSession.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {metaRows.map((row) => (
                  <div key={row.id} className="flex items-start gap-3 rounded-md bg-background-50 p-3.5 dark:bg-background-200/60">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-secondary-100 text-secondary-800 dark:bg-secondary-500/15 dark:text-secondary-300">
                      <i className={`${row.icon} text-base`}></i>
                    </span>
                    <span className="flex flex-col">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-foreground-500">
                        {row.label}
                      </span>
                      <span className="text-sm font-medium text-foreground-900">{row.value}</span>
                    </span>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground-900">
                  <a href="#agenda" className="transition-colors duration-200 hover:text-primary-700">
                    Session mein kya hoga
                  </a>
                </h4>
                <ul id="agenda" className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {upcomingSession.agenda.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground-700">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center text-accent-600 dark:text-accent-400">
                        <i className="ri-checkbox-circle-fill text-base"></i>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-md border border-background-200 p-3.5 dark:border-background-700">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary-100 text-primary-700 dark:bg-primary-500/15 dark:text-primary-300">
                    <i className="ri-user-star-line text-xl"></i>
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-foreground-500">
                      Is session ka mentor
                    </span>
                    <span className="text-sm font-semibold text-foreground-900">
                      {mentor.name} • {mentor.grade}
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-md border border-background-200 p-3.5 dark:border-background-700">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary-100 text-secondary-800 dark:bg-secondary-500/15 dark:text-secondary-300">
                    <i className="ri-mic-line text-xl"></i>
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-foreground-500">
                      Host
                    </span>
                    <span className="text-sm font-semibold text-foreground-900">
                      {host.name} • {host.role}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-5 rounded-lg border border-primary-200 bg-primary-50 p-5 md:p-7 dark:border-primary-500/25 dark:bg-primary-500/10">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary-700 dark:text-primary-300">
                    Session fee
                  </span>
                  <div className="mt-1 flex items-end gap-2">
                    <span className="font-heading text-4xl font-extrabold text-foreground-950 md:text-5xl">
                      {upcomingSession.priceLabel}
                    </span>
                    <span className="pb-1.5 text-sm font-medium text-foreground-600">/ session</span>
                  </div>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary-500 text-white">
                  <i className="ri-coupon-3-line text-xl"></i>
                </span>
              </div>

              <div className="rounded-md bg-background-50 p-4 dark:bg-background-200/70">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground-700">Enrollment status</span>
                  <span className="font-semibold text-foreground-950">{upcomingSession.statusLabel}</span>
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-background-200 dark:bg-background-700">
                  <div className="h-full rounded-full bg-primary-500" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="mt-2.5 flex items-center justify-between text-xs font-medium text-foreground-600">
                  <span>{upcomingSession.enrolled} enrolled</span>
                  <span className="text-primary-700 dark:text-primary-300">{upcomingSession.remaining} seats left</span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 text-sm">
                <div className="flex items-center gap-2.5 text-foreground-700">
                  <span className="flex h-4 w-4 items-center justify-center text-accent-600 dark:text-accent-400">
                    <i className="ri-shield-check-line text-base"></i>
                  </span>
                  Parents/guardians bhi join kar sakte hain
                </div>
                <div className="flex items-center gap-2.5 text-foreground-700">
                  <span className="flex h-4 w-4 items-center justify-center text-accent-600 dark:text-accent-400">
                    <i className="ri-whatsapp-line text-base"></i>
                  </span>
                  Session WhatsApp group access
                </div>
                <div className="flex items-center gap-2.5 text-foreground-700">
                  <span className="flex h-4 w-4 items-center justify-center text-accent-600 dark:text-accent-400">
                    <i className="ri-gift-2-line text-base"></i>
                  </span>
                  Study materials + bumper prize chance
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-3">
                <EnrollButton size="lg" className="w-full" label="Enroll for the upcoming session" />
                <a
                  href="#pricing"
                  className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border border-primary-300 bg-transparent px-5 py-2.5 text-sm font-semibold text-primary-800 transition-colors duration-200 hover:bg-primary-100 dark:border-primary-500/30 dark:text-primary-200"
                >
                  4-month pass dekho — NPR 800
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}