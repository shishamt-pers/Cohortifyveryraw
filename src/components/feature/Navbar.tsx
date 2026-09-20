import { useEffect, useState } from "react";
import { brand, navLinks } from "@/mocks/site";
import { useTheme } from "@/context/ThemeContext";
import EnrollButton from "@/components/base/EnrollButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-background-200/70 bg-background-50/90 backdrop-blur-md dark:border-background-800/70 dark:bg-background-50/85"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full items-center justify-between px-4 md:h-20 md:px-6">
        <a href="#top" className="flex items-center gap-2.5 py-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-500 text-white">
            <i className="ri-group-2-fill text-lg"></i>
          </span>
          <span
            className={`font-heading text-lg font-extrabold tracking-tight md:text-xl ${
              scrolled ? "text-foreground-950" : "text-white"
            }`}
          >
            {brand.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                scrolled
                  ? "text-foreground-700 hover:bg-background-100 hover:text-foreground-950"
                  : "text-white/85 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-md transition-colors duration-200 ${
              scrolled
                ? "bg-background-100 text-foreground-800 hover:bg-background-200"
                : "bg-white/15 text-white hover:bg-white/25"
            }`}
          >
            <i className={`${isDark ? "ri-sun-line" : "ri-moon-line"} text-lg`}></i>
          </button>

          <div className="hidden md:block">
            <EnrollButton size="sm" label="Enroll Now" icon="ri-arrow-right-line" />
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-md lg:hidden ${
              scrolled ? "bg-background-100 text-foreground-800" : "bg-white/15 text-white"
            }`}
          >
            <i className="ri-menu-3-line text-lg"></i>
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 h-full w-full cursor-pointer bg-foreground-950/50 backdrop-blur-sm"
          />
          <div className="cf-pop absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col gap-2 bg-background-50 p-5 shadow-none dark:bg-background-100">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-heading text-lg font-extrabold text-foreground-950">{brand.name}</span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-background-100 text-foreground-800"
              >
                <i className="ri-close-line text-lg"></i>
              </button>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground-800 transition-colors duration-200 hover:bg-background-100"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3">
              <EnrollButton className="w-full" label="Enroll for the upcoming session" />
            </div>
            <p className="mt-4 text-xs leading-relaxed text-foreground-500">{brand.tagline}</p>
          </div>
        </div>
      ) : null}
    </header>
  );
}