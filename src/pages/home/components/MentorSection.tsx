import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import EnrollButton from "@/components/base/EnrollButton";
import { mentor } from "@/mocks/people";

export default function MentorSection() {
  return (
    <section id="mentor" className="w-full scroll-mt-20 bg-background-50 py-14 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Meet your mentor"
            title="Har session mein ek naya topper mentor"
            subtitle="Mentor usually pichle ya pichle se pichle saal ka high-achieving student hota hai — jo abhi Class 11/12 mein hai aur wahi phase just cross kar chuka hai jo aap abhi jeete ho."
            eyebrowTone="secondary"
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <div className="relative h-[380px] w-full overflow-hidden rounded-lg bg-background-200 sm:h-[460px] lg:h-full lg:min-h-[520px] dark:bg-background-200">
              <img
                src={mentor.photo}
                alt={`${mentor.name} — ${mentor.achievement}`}
                title={`${mentor.name} • Cohortify session mentor`}
                className="h-full w-full object-cover object-top"
              />
              <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-background-50/95 px-3 py-1 text-xs font-semibold text-foreground-900 backdrop-blur-sm">
                <i className="ri-user-star-fill text-sm text-primary-600"></i>
                Is session ka mentor
              </span>
            </div>
          </Reveal>

          <Reveal delay={140} className="lg:col-span-7">
            <div className="flex h-full flex-col gap-5 rounded-lg border border-background-200 bg-background-100 p-5 md:p-7 dark:border-background-800">
              <div>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-800 dark:bg-accent-500/15 dark:text-accent-300">
                  {mentor.grade}
                </span>
                <h3 className="mt-3 font-heading text-2xl font-extrabold text-foreground-950 md:text-3xl">
                  {mentor.name}
                </h3>
                <p className="mt-2 text-sm font-semibold text-primary-700 dark:text-primary-300">{mentor.achievement}</p>
              </div>

              <p className="text-sm leading-relaxed text-foreground-600 md:text-base">{mentor.bio}</p>

              <div className="flex flex-wrap gap-2">
                {mentor.tags.map((tag) => (
                  <span
                    key={tag}
                    className="whitespace-nowrap rounded-full bg-secondary-100 px-3 py-1 text-xs font-semibold text-secondary-900 dark:bg-secondary-500/15 dark:text-secondary-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-md bg-background-50 p-3.5 dark:bg-background-200/60">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary-100 text-primary-700 dark:bg-primary-500/15 dark:text-primary-300">
                    <i className="ri-repeat-line text-base"></i>
                  </span>
                  <p className="mt-2 text-xs font-semibold text-foreground-900">Naya mentor har session</p>
                  <p className="mt-0.5 text-xs text-foreground-600">Alag experience, alag perspective.</p>
                </div>
                <div className="rounded-md bg-background-50 p-3.5 dark:bg-background-200/60">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent-100 text-accent-700 dark:bg-accent-500/15 dark:text-accent-300">
                    <i className="ri-chat-smile-2-line text-base"></i>
                  </span>
                  <p className="mt-2 text-xs font-semibold text-foreground-900">Baat karna easy</p>
                  <p className="mt-0.5 text-xs text-foreground-600">Age close, isliye hesitate nahi.</p>
                </div>
                <div className="rounded-md bg-background-50 p-3.5 dark:bg-background-200/60">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-secondary-100 text-secondary-800 dark:bg-secondary-500/15 dark:text-secondary-300">
                    <i className="ri-lightbulb-flash-line text-base"></i>
                  </span>
                  <p className="mt-2 text-xs font-semibold text-foreground-900">Practical tips</p>
                  <p className="mt-0.5 text-xs text-foreground-600">Woh cheezein jo actually chalti hain.</p>
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-foreground-600">
                  Aise mentor se seedha sawaal poochne ka mauka — sirf session mein.
                </p>
                <EnrollButton size="md" label="Enroll for the upcoming session" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}