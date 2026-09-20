import { useLocation, Link } from "react-router-dom";
import { brand } from "@/mocks/site";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background-50 px-4 text-center dark:bg-background-100">
      <h1 className="absolute bottom-6 select-none font-black text-background-200/60 pointer-events-none text-9xl md:text-[14rem] dark:text-background-800/40">
        404
      </h1>

      <div className="relative z-10 mx-auto flex max-w-lg flex-col items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500 text-white shadow-lg shadow-primary-500/20">
          <i className="ri-compass-3-line text-3xl"></i>
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary-700 dark:bg-primary-500/15 dark:text-primary-300">
          Page Not Found
        </span>

        <h2 className="font-heading text-3xl font-extrabold text-foreground-950 md:text-4xl">
          Yeh page yahan nahi mila
        </h2>

        <p className="max-w-md text-sm leading-relaxed text-foreground-600 md:text-base">
          Aap jis page par aane ki koshish kar rahe hain (
          <code className="rounded bg-background-200 px-1.5 py-0.5 font-mono text-xs text-foreground-800 dark:bg-background-700 dark:text-foreground-100">
            {location.pathname}
          </code>
          ), woh exist nahi karta ya move ho chuka hai.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-md bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-primary-600"
          >
            <i className="ri-home-4-line text-base"></i>
            Home Page par jayein
          </Link>

          <Link
            to="/upcoming-session"
            className="inline-flex items-center gap-2 rounded-md border border-background-300 bg-background-50 px-5 py-2.5 text-sm font-semibold text-foreground-900 transition-colors duration-200 hover:border-primary-400 dark:border-background-700 dark:bg-background-200 dark:text-foreground-50"
          >
            <i className="ri-calendar-event-line text-base"></i>
            Upcoming Session
          </Link>
        </div>

        <p className="mt-6 text-xs text-foreground-500">
          {brand.name} — {brand.tagline}
        </p>
      </div>
    </div>
  );
}