import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import { guests, host } from "@/mocks/people";

export default function HostGuests() {
  return (
    <section id="host" className="w-full scroll-mt-20 bg-background-100 py-14 md:py-20 dark:bg-background-100">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Host & Guests"
            title="Session ko chalata kaun hai, aur kaun aata hai"
            subtitle="Host poore session ko smoothly chalata hai, aur special guests session se thoda pehle announce kiye jaate hain."
            eyebrowTone="primary"
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <article className="flex h-full flex-col overflow-hidden rounded-lg border border-background-200 bg-background-50 dark:border-background-800 dark:bg-background-200/40">
              <div className="relative h-64 w-full bg-background-200 md:h-80">
                <img
                  src={host.photo}
                  alt={`${host.name} — ${host.role}`}
                  title={`${host.name} • Cohortify host`}
                  className="h-full w-full object-cover object-top"
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-primary-500 px-3 py-1 text-xs font-semibold text-white">
                  <i className="ri-mic-fill text-sm"></i>
                  Host
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
                <div>
                  <h3 className="font-heading text-xl font-extrabold text-foreground-950 md:text-2xl">{host.name}</h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-primary-700 dark:text-primary-300">
                    {host.grade}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-foreground-600">{host.bio}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-1">
                  {host.tags.map((tag) => (
                    <span
                      key={tag}
                      className="whitespace-nowrap rounded-full bg-secondary-100 px-3 py-1 text-xs font-semibold text-secondary-900 dark:bg-secondary-500/15 dark:text-secondary-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 lg:col-span-7 sm:grid-cols-2 md:gap-5">
            {guests.map((guest, index) => (
              <Reveal key={guest.id} delay={index * 80}>
                <article className="flex h-full flex-col gap-3 rounded-lg border border-background-200 bg-background-50 p-5 transition-colors duration-200 hover:border-secondary-400 dark:border-background-800 dark:bg-background-200/40">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-md bg-secondary-100 text-secondary-800 dark:bg-secondary-500/15 dark:text-secondary-300">
                      <i className={`${guest.icon} text-xl`}></i>
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                        guest.announced
                          ? "bg-accent-100 text-accent-800 dark:bg-accent-500/15 dark:text-accent-300"
                          : "bg-primary-100 text-primary-700 dark:bg-primary-500/15 dark:text-primary-300"
                      }`}
                    >
                      <i className={`${guest.announced ? "ri-megaphone-line" : "ri-ticket-line"} text-xs`}></i>
                      {guest.announced ? "Announced" : "Audience pick"}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-foreground-950">{guest.name}</h3>
                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-foreground-500">
                      {guest.role}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground-600">{guest.note}</p>
                </article>
              </Reveal>
            ))}

            <Reveal delay={340} className="sm:col-span-2">
              <div className="flex flex-col items-start gap-3 rounded-lg border border-dashed border-primary-300 bg-primary-50 p-5 sm:flex-row sm:items-center sm:justify-between dark:border-primary-500/30 dark:bg-primary-500/10">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary-500 text-white">
                    <i className="ri-notification-3-line text-lg"></i>
                  </span>
                  <div>
                    <p className="font-heading text-sm font-bold text-foreground-950">
                      Guests ke naam session se thoda pehle announce hote hain
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-foreground-600">
                      Announcement WhatsApp group aur Cohortify ke social handles par aata hai. Enroll kariye taaki aap
                      miss na kariye.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}