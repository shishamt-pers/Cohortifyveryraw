import Reveal from "@/components/base/Reveal";
import SectionHeading from "@/components/base/SectionHeading";
import EnrollButton from "@/components/base/EnrollButton";
import { plans } from "@/mocks/pricing";
import type { EnrollPlanId } from "@/context/EnrollContext";

export default function Pricing() {
  return (
    <section id="pricing" className="w-full scroll-mt-20 bg-background-50 py-14 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Ek session try kariye, ya poore 4 mahine ka safar"
            subtitle="Dono options simple hain. Jo comfortable lage, wahi choose kariye — koi hidden charge nahi."
            eyebrowTone="primary"
          />
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 lg:grid-cols-2 md:gap-6">
          {plans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 120}>
              <article
                className={`flex h-full flex-col gap-5 rounded-lg border p-5 md:p-7 ${
                  plan.featured
                    ? "border-primary-300 bg-primary-50 dark:border-primary-500/30 dark:bg-primary-500/10"
                    : "border-background-200 bg-background-100 dark:border-background-800"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-xl font-extrabold text-foreground-950 md:text-2xl">{plan.name}</h3>
                    <p className="mt-1 text-sm text-foreground-600">{plan.tagline}</p>
                  </div>
                  {plan.badge ? (
                    <span
                      className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${
                        plan.featured
                          ? "bg-primary-500 text-white"
                          : "bg-secondary-100 text-secondary-900 dark:bg-secondary-500/15 dark:text-secondary-300"
                      }`}
                    >
                      {plan.featured ? <i className="ri-vip-crown-2-fill text-sm"></i> : null}
                      {plan.badge}
                    </span>
                  ) : null}
                </div>

                <div className="flex items-end gap-2">
                  <span className="font-heading text-4xl font-extrabold text-foreground-950 md:text-5xl">
                    {plan.priceLabel}
                  </span>
                  <span className="pb-2 text-sm font-medium text-foreground-600">{plan.period}</span>
                </div>

                <ul className="flex flex-1 flex-col gap-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground-700">
                      <span
                        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center ${
                          plan.featured ? "text-primary-600 dark:text-primary-300" : "text-accent-600 dark:text-accent-400"
                        }`}
                      >
                        <i className="ri-checkbox-circle-fill text-base"></i>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <EnrollButton
                  size="lg"
                  className="w-full"
                  variant={plan.featured ? "primary" : "outline"}
                  planId={plan.id as EnrollPlanId}
                  label={plan.ctaLabel}
                />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-foreground-500">
            Payment details enrollment confirm hone ke baad share ki jaati hain. Seat confirm karne ke liye sirf basic
            details chahiye — naam, school aur WhatsApp number.
          </p>
        </Reveal>
      </div>
    </section>
  );
}