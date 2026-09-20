import { brand, navLinks, socialLinks } from "@/mocks/site";
import EnrollButton from "@/components/base/EnrollButton";

export default function Footer() {
  return (
    <footer className="border-t border-background-200 bg-secondary-100 dark:border-background-800 dark:bg-background-100">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="flex max-w-md flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-500 text-white">
                <i className="ri-group-2-fill text-lg"></i>
              </span>
              <span className="font-heading text-xl font-extrabold text-foreground-950">{brand.name}</span>
            </div>
            <p className="font-heading text-base font-semibold text-foreground-900">{brand.tagline}</p>
            <p className="text-sm leading-relaxed text-foreground-700">{brand.description}</p>
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-background-50 text-foreground-700 transition-colors duration-200 hover:bg-primary-500 hover:text-white dark:bg-background-200"
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:w-1/2">
            <div className="flex flex-col gap-3">
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground-900">
                <a href="#upcoming-session" className="transition-colors duration-200 hover:text-primary-700">
                  Explore
                </a>
              </h4>
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-sm text-foreground-700 transition-colors duration-200 hover:text-primary-700"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground-900">
                <a href="#pricing" className="transition-colors duration-200 hover:text-primary-700">
                  Plans
                </a>
              </h4>
              <a href="#pricing" className="text-sm text-foreground-700 transition-colors duration-200 hover:text-primary-700">
                Single session — NPR 250
              </a>
              <a href="#pricing" className="text-sm text-foreground-700 transition-colors duration-200 hover:text-primary-700">
                4-month pass — NPR 800
              </a>
              <a href="#faq" className="text-sm text-foreground-700 transition-colors duration-200 hover:text-primary-700">
                FAQ
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground-900">
                <a href="#top" className="transition-colors duration-200 hover:text-primary-700">
                  Contact
                </a>
              </h4>
              <span className="text-sm text-foreground-700">{brand.email}</span>
              <span className="text-sm text-foreground-700">{brand.phone}</span>
              <span className="text-sm text-foreground-700">{brand.location}</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 rounded-lg bg-background-50/70 p-5 sm:flex-row sm:items-center sm:justify-between dark:bg-background-200/60">
          <div>
            <p className="font-heading text-base font-bold text-foreground-950">
              Agla session bhar raha hai — apni seat pakki kariye.
            </p>
            <p className="mt-1 text-sm text-foreground-600">
              {brand.taglineHi} Sirf 3 fields, 1 minute ka kaam.
            </p>
          </div>
          <EnrollButton size="md" label="Enroll for the upcoming session" />
        </div>

        <div className="mt-8 flex flex-col items-start gap-2 border-t border-background-300/60 pt-6 text-xs text-foreground-600 sm:flex-row sm:items-center sm:justify-between dark:border-background-700">
          <span>© {new Date().getFullYear()} {brand.name}. Saare rights reserved.</span>
          <span>Students 13–16 aur unke parents/guardians ke liye banaya gaya.</span>
        </div>
      </div>
    </footer>
  );
}