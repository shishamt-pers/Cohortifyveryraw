import type { ReactNode } from "react";
import { useEnroll, type EnrollPlanId } from "@/context/EnrollContext";

interface EnrollButtonProps {
  label?: string;
  planId?: EnrollPlanId;
  variant?: "primary" | "accent" | "outline" | "light";
  size?: "sm" | "md" | "lg";
  icon?: string;
  className?: string;
  children?: ReactNode;
}

const variantMap = {
  primary:
    "bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-400 dark:text-background-50",
  accent: "bg-accent-500 text-white hover:bg-accent-600 focus-visible:ring-accent-400",
  outline:
    "border border-background-300 bg-background-50 text-foreground-900 hover:border-primary-400 hover:text-primary-700 focus-visible:ring-primary-300 dark:border-background-700 dark:bg-background-100 dark:hover:text-primary-300",
  light:
    "bg-background-50 text-foreground-950 hover:bg-background-100 focus-visible:ring-background-300 dark:bg-foreground-950 dark:text-foreground-50 dark:hover:bg-foreground-900",
};

const sizeMap = {
  sm: "px-4 py-2 text-xs md:text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-sm md:text-base",
};

export default function EnrollButton({
  label = "Enroll for the upcoming session",
  planId = "single",
  variant = "primary",
  size = "md",
  icon = "ri-arrow-right-line",
  className = "",
  children,
}: EnrollButtonProps) {
  const { openEnroll } = useEnroll();

  return (
    <button
      type="button"
      onClick={() => openEnroll(planId)}
      className={`group inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background-50 ${variantMap[variant]} ${sizeMap[size]} ${className}`}
    >
      {children ?? <span>{label}</span>}
      <span className="flex h-4 w-4 items-center justify-center">
        <i className={`${icon} text-base transition-transform duration-200 group-hover:translate-x-1`}></i>
      </span>
    </button>
  );
}