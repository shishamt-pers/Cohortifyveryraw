import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

export type EnrollPlanId = "single" | "pass";

interface EnrollContextValue {
  isOpen: boolean;
  planId: EnrollPlanId;
  openEnroll: (planId?: EnrollPlanId) => void;
  closeEnroll: () => void;
}

const EnrollContext = createContext<EnrollContextValue | null>(null);

export function EnrollProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [planId, setPlanId] = useState<EnrollPlanId>("single");

  const openEnroll = useCallback((nextPlan: EnrollPlanId = "single") => {
    setPlanId(nextPlan);
    setIsOpen(true);
  }, []);

  const closeEnroll = useCallback(() => setIsOpen(false), []);

  const value = useMemo<EnrollContextValue>(
    () => ({ isOpen, planId, openEnroll, closeEnroll }),
    [isOpen, planId, openEnroll, closeEnroll],
  );

  return <EnrollContext.Provider value={value}>{children}</EnrollContext.Provider>;
}

export function useEnroll() {
  const ctx = useContext(EnrollContext);
  if (!ctx) throw new Error("useEnroll must be used within EnrollProvider");
  return ctx;
}