import Counter from "@/components/base/Counter";
import Reveal from "@/components/base/Reveal";
import { upcomingSession, enrollmentProof } from "@/mocks/session";

const stats = [
  { id: "enrolled", value: upcomingSession.enrolled, suffix: "+", label: "Students enrolled", tone: "primary" as const },
  { id: "seats", value: upcomingSession.seatsTotal, suffix: "", label: "Total seats", tone: "secondary" as const },
  { id: "remaining", value: upcomingSession.remaining, suffix: "", label: "Seats remaining", tone: "accent" as const },
  { id: "duration", value: 90, suffix: " min", label: "Live session", tone: "primary" as const },
];

const toneStyles = {
  primary: "bg-primary-100 text-primary-700 dark:bg-primary-500/15 dark:text-primary-300",
  accent: "bg-accent-100 text-accent-700 dark:bg-accent-500/15 dark:text-accent-300",
  secondary: "bg-secondary-100 text-secondary-900 dark:bg-secondary-500/15 dark:text-secondary-300",
};

export default function ProofStrip() {
  const progress = Math.round((upcomingSession.enrolled / upcomingSession.seatsTotal) * 100);

  return (
    <section className="w-full border-y border-background-200 bg-background-100 dark:border-background-800 dark:bg-background-100">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6 md:py-10">
        <Reveal>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col gap-2">
                <span className={`flex h-9 w-9 items-center justify-center rounded-md ${toneStyles[stat.tone]}`}>
                  <i
                    className={`${
                      stat.id === "enrolled"
                        ? "ri-user-follow-line"
                        : stat.id === "seats"
                          ? "ri-group-line"
                          : stat.id === "remaining"
                            ? "ri-fire-line"
                            : "ri-timer-flash-line"
                    } text-lg`}
                  ></i>
                </span>
                <span className="font-heading text-3xl font-extrabold text-foreground-950 md:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-foreground-600 md:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-col gap-4 rounded-lg bg-background-50 p-4 md:flex-row md:items-center md:justify-between md:p-5 dark:bg-background-200/60">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-800 dark:bg-accent-500/15 dark:text-accent-300">
                <i className="ri-checkbox-circle-fill text-sm"></i>
                {enrollmentProof.enrolledLabel}
              </span>
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-secondary-100 px-3 py-1 text-xs font-semibold text-secondary-900 dark:bg-secondary-500/15 dark:text-secondary-300">
                <i className="ri-armchair-line text-sm"></i>
                {enrollmentProof.remainingLabel}
              </span>
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-500/15 dark:text-primary-300">
                <i className="ri-flashlight-fill text-sm"></i>
                {enrollmentProof.urgencyLabel}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-2 md:max-w-sm">
              <div className="flex items-center justify-between text-xs font-medium text-foreground-600">
                <span>Seats bhar rahe hain</span>
                <span>{progress}% filled</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-background-200 dark:bg-background-700">
                <div
                  className="h-full rounded-full bg-primary-500 transition-all duration-1000 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}