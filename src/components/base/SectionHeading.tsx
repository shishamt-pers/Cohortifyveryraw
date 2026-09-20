interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  eyebrowTone?: "primary" | "accent" | "secondary";
}

const toneMap = {
  primary: "bg-primary-100 text-primary-700 dark:bg-primary-500/15 dark:text-primary-300",
  accent: "bg-accent-100 text-accent-800 dark:bg-accent-500/15 dark:text-accent-300",
  secondary: "bg-secondary-100 text-secondary-900 dark:bg-secondary-500/15 dark:text-secondary-300",
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  eyebrowTone = "primary",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={`flex flex-col gap-3 md:gap-4 ${isCenter ? "items-center text-center" : "items-start text-left"}`}>
      <span
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${toneMap[eyebrowTone]}`}
      >
        {eyebrow}
      </span>
      <h2 className="max-w-3xl text-2xl font-bold leading-tight text-foreground-950 md:text-4xl">{title}</h2>
      {subtitle ? (
        <p className={`max-w-2xl text-sm leading-relaxed text-foreground-600 md:text-base ${isCenter ? "" : "text-left"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}