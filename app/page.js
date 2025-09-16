"use client";

import OTPInput from "../components/OTPInput";
import FeatureCard from "../components/FeatureCard";
import RewardsCalculator from "../components/RewardsCalculator";

export default function Page() {
  const onVerify = (code) => {
    alert("Submitting OTP: " + code);
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      <section className="text-center space-y-3">
        <p className="uppercase tracking-wide text-sm opacity-70">
          Welcome to the Club
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Homeownership,
          <br className="hidden md:block" />{" "}
          <span className="text-[var(--brand-accent)]">Rewarded.</span>
        </h1>
        <p className="max-w-2xl mx-auto opacity-80">
          Turn your mortgage payments and everyday spending into rewards with
          the Made Essential Visa® Signature Preferred Card.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        <FeatureCard delay={0.0}>
          <h3 className="font-semibold mb-2">Earn on Your Home</h3>
          <p className="opacity-80">
            Points on mortgage payments, home improvement & essentials.
          </p>
        </FeatureCard>
        <FeatureCard delay={0.1}>
          <h3 className="font-semibold mb-2">Maximize Savings</h3>
          <p className="opacity-80">
            Cashback, discounts, and exclusive home perks.
          </p>
        </FeatureCard>
        <FeatureCard delay={0.2}>
          <h3 className="font-semibold mb-2">Financial Security</h3>
          <p className="opacity-80">
            Smart tools & powerful Visa Network benefits.
          </p>
        </FeatureCard>
      </section>

      <section className="grid md:grid-cols-2 gap-6 items-start">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Frictionless OTP</h2>
          <p className="opacity-80 text-sm">
            Auto-advance, auto-submit on 4th digit, paste support, backspace
            behavior, and a11y labels.
          </p>
          <OTPInput onSubmit={onVerify} />
        </div>
        <RewardsCalculator />
      </section>

      <footer className="opacity-70 text-xs pt-8">
        <p>
          Demo only • The Made Essential Visa® Signature Preferred Card is
          issued by Lead Bank.
        </p>
      </footer>
    </main>
  );
}
