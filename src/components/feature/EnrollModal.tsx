import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useEnroll } from "@/context/EnrollContext";
import { upcomingSession } from "@/mocks/session";
import { plans } from "@/mocks/pricing";

interface FieldErrors {
  name?: string;
  school?: string;
  whatsapp?: string;
}

type Status = "idle" | "loading" | "success" | "error";

function validate(values: { name: string; school: string; whatsapp: string }): FieldErrors {
  const errors: FieldErrors = {};
  if (values.name.trim().length < 2) errors.name = "Poora naam likhiye (kam se kam 2 letters).";
  if (values.school.trim().length < 2) errors.school = "School ka naam likhna zaroori hai.";
  const digits = values.whatsapp.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15) errors.whatsapp = "Sahi WhatsApp number daaliye (country code ke saath).";
  return errors;
}

export default function EnrollModal() {
  const { isOpen, closeEnroll, planId } = useEnroll();
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [values, setValues] = useState({ name: "", school: "", whatsapp: "" });
  const [selectedPlan, setSelectedPlan] = useState<string>(planId === "pass" ? "pass" : "single");

  const planOptions = useMemo(
    () => plans.map((plan) => ({ id: plan.id, label: `${plan.name} — ${plan.priceLabel}` })),
    [],
  );

  useEffect(() => {
    if (!isOpen) return;
    setSelectedPlan(planId === "pass" ? "pass" : "single");
  }, [isOpen, planId]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeEnroll();
    };
    document.addEventListener("keydown", onKeyDown);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previous;
    };
  }, [isOpen, closeEnroll]);

  useEffect(() => {
    if (!isOpen) {
      setStatus("idle");
      setFormError("");
      setFieldErrors({});
      setValues({ name: "", school: "", whatsapp: "" });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (field: "name" | "school" | "whatsapp", value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading") return;

    const formEl = event.currentTarget;
    const formData = new FormData(formEl);

    const nextValues = {
      name: String(formData.get("name") ?? "").trim(),
      school: String(formData.get("school") ?? "").trim(),
      whatsapp: String(formData.get("whatsapp") ?? "").trim(),
    };

    const errors = validate(nextValues);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setStatus("error");
      setFormError("Kuch details adhoori hain. Upar wale fields check kariye.");
      return;
    }

    const plan = String(formData.get("plan") ?? "single");
    setFormError("");

    try {
      const existing = JSON.parse(localStorage.getItem("cohortify_enrollments") || "[]");
      existing.push({
        ...nextValues,
        plan,
        session: upcomingSession.title,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem("cohortify_enrollments", JSON.stringify(existing));
    } catch {
      // Local persistence is optional for this frontend-only flow.
    }

    setStatus("success");
    setValues({ name: "", school: "", whatsapp: "" });
    formEl.reset();
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center px-3 py-3 sm:items-center sm:px-4">
      <button
        type="button"
        aria-label="Close enrollment form"
        onClick={closeEnroll}
        className="cf-fade absolute inset-0 h-full w-full cursor-pointer bg-foreground-950/60 backdrop-blur-sm"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enroll-modal-title"
        className="cf-pop relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-lg bg-background-50 p-5 md:p-7 dark:bg-background-100"
      >
        <button
          type="button"
          onClick={closeEnroll}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-background-100 text-foreground-700 transition-colors duration-200 hover:bg-background-200 dark:bg-background-200"
        >
          <i className="ri-close-line text-lg"></i>
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-center gap-4 py-4 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-100 text-accent-700 dark:bg-accent-500/15 dark:text-accent-300">
              <i className="ri-checkbox-circle-fill text-3xl"></i>
            </span>
            <h3 id="enroll-modal-title" className="font-heading text-xl font-bold text-foreground-950 md:text-2xl">
              Enrollment confirm ho gaya!
            </h3>
            <p className="max-w-sm text-sm leading-relaxed text-foreground-600">
              Welcome to Cohortify. Aapka naam upcoming session list mein add ho gaya hai. Session link aur next steps
              WhatsApp par share kiye jayenge.
            </p>
            <div className="w-full rounded-md bg-background-100 p-4 text-left dark:bg-background-200">
              <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                <span className="text-foreground-500">Session</span>
                <span className="font-semibold text-foreground-900">{upcomingSession.title}</span>
              </div>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-sm">
                <span className="text-foreground-500">Kab</span>
                <span className="font-semibold text-foreground-900">
                  {upcomingSession.date} • {upcomingSession.time}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={closeEnroll}
              className="mt-1 inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-600"
            >
              Done
              <span className="flex h-4 w-4 items-center justify-center">
                <i className="ri-check-line text-base"></i>
              </span>
            </button>
          </div>
        ) : (
          <>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-700 dark:bg-primary-500/15 dark:text-primary-300">
              Enroll for the upcoming session
            </span>
            <h3 id="enroll-modal-title" className="mt-3 font-heading text-xl font-bold text-foreground-950 md:text-2xl">
              Seat book kariye — bas 3 cheezein
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-600">
              {upcomingSession.date} • {upcomingSession.time} • {upcomingSession.remaining} seats bache hain.
            </p>

            <form
              className="mt-5 flex flex-col gap-4"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="flex flex-col gap-1.5">
                <label htmlFor="enroll-name" className="text-xs font-semibold uppercase tracking-wider text-foreground-600">
                  Student ka naam
                </label>
                <input
                  id="enroll-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                  placeholder="Jaise: Aarav Mehta"
                  className={`w-full rounded-md border bg-background-50 px-3.5 py-2.5 text-sm text-foreground-900 outline-none transition-colors duration-200 placeholder:text-foreground-400 focus:border-primary-400 dark:bg-background-200 ${
                    fieldErrors.name ? "border-primary-500" : "border-background-300 dark:border-background-600"
                  }`}
                />
                {fieldErrors.name ? <span className="text-xs text-primary-700">{fieldErrors.name}</span> : null}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="enroll-school" className="text-xs font-semibold uppercase tracking-wider text-foreground-600">
                  School
                </label>
                <input
                  id="enroll-school"
                  name="school"
                  type="text"
                  autoComplete="organization"
                  value={values.school}
                  onChange={(event) => handleChange("school", event.target.value)}
                  placeholder="Jaise: St. Xavier's School"
                  className={`w-full rounded-md border bg-background-50 px-3.5 py-2.5 text-sm text-foreground-900 outline-none transition-colors duration-200 placeholder:text-foreground-400 focus:border-primary-400 dark:bg-background-200 ${
                    fieldErrors.school ? "border-primary-500" : "border-background-300 dark:border-background-600"
                  }`}
                />
                {fieldErrors.school ? <span className="text-xs text-primary-700">{fieldErrors.school}</span> : null}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="enroll-whatsapp" className="text-xs font-semibold uppercase tracking-wider text-foreground-600">
                  WhatsApp number
                </label>
                <input
                  id="enroll-whatsapp"
                  name="whatsapp"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={values.whatsapp}
                  onChange={(event) => handleChange("whatsapp", event.target.value)}
                  placeholder="+977 98XXXXXXXX"
                  className={`w-full rounded-md border bg-background-50 px-3.5 py-2.5 text-sm text-foreground-900 outline-none transition-colors duration-200 placeholder:text-foreground-400 focus:border-primary-400 dark:bg-background-200 ${
                    fieldErrors.whatsapp ? "border-primary-500" : "border-background-300 dark:border-background-600"
                  }`}
                />
                {fieldErrors.whatsapp ? <span className="text-xs text-primary-700">{fieldErrors.whatsapp}</span> : null}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="enroll-plan" className="text-xs font-semibold uppercase tracking-wider text-foreground-600">
                  Kaunsa plan?
                </label>
                <select
                  id="enroll-plan"
                  name="plan"
                  value={selectedPlan}
                  onChange={(event) => setSelectedPlan(event.target.value)}
                  className="w-full cursor-pointer rounded-md border border-background-300 bg-background-50 px-3.5 py-2.5 text-sm text-foreground-900 outline-none transition-colors duration-200 focus:border-primary-400 dark:border-background-600 dark:bg-background-200"
                >
                  {planOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {status === "error" && formError ? (
                <div
                  role="alert"
                  className="flex items-start gap-2 rounded-md border border-primary-300 bg-primary-50 p-3 text-xs leading-relaxed text-primary-800 dark:bg-primary-500/10 dark:text-primary-200"
                >
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center">
                    <i className="ri-error-warning-line text-base"></i>
                  </span>
                  <span>{formError}</span>
                </div>
              ) : null}

              <button
                type="submit"
                disabled={status === "loading"}
                className={`inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 ${
                  status === "loading"
                    ? "cursor-wait bg-primary-400"
                    : "cursor-pointer bg-primary-500 hover:bg-primary-600"
                }`}
              >
                {status === "loading" ? (
                  <>
                    <span className="flex h-4 w-4 items-center justify-center">
                      <i className="ri-loader-4-line animate-spin text-base"></i>
                    </span>
                    Submit ho raha hai...
                  </>
                ) : (
                  <>
                    Book my seat — {selectedPlan === "pass" ? "NPR 800" : "NPR 250"}
                    <span className="flex h-4 w-4 items-center justify-center">
                      <i className="ri-arrow-right-line text-base"></i>
                    </span>
                  </>
                )}
              </button>

              <p className="text-center text-[11px] leading-relaxed text-foreground-500">
                Payment details session confirmation ke baad share ki jaati hain. Aapka number sirf session updates ke
                liye use hoga.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}