import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";
import SectionHeading from "@/components/SectionHeading";

const plans = [
  {
    name: "Bronze",
    price: 3,
    description: "Start investing with ease",
    features: [
      "Automated investing",
      "Round-Ups® investing",
      "Bonus investments (Earn)",
      "Financial literacy articles",
      "Banking account",
    ],
  },
  {
    name: "Silver",
    price: 6,
    description: "Plan for your future",
    features: [
      "Everything in Bronze",
      "Retirement account (IRA)",
      "Earn match — 3% IRA match",
      "Emergency fund",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Gold",
    price: 12,
    description: "Invest for the whole family",
    features: [
      "Everything in Silver",
      "Invest for kids (Oakly Early)",
      "Kids debit card",
      "Custom portfolios",
      "Live Q&A with experts",
      "Will & trust creation",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="container">
          <SectionHeading
            badge="Plans & Pricing"
            title="Simple, transparent pricing"
            subtitle="Choose the plan that fits your financial goals. All plans include investing and banking."
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((p, i) => (
              <PricingCard key={p.name} {...p} index={i} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
