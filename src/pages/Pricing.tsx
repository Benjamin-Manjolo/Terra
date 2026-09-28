import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";
import SectionHeading from "@/components/SectionHeading";

const plans = [
  {
    name: "Free",
    price: 0,
    currency: "MK ",
    description: "Start protecting your herd today",
    features: [
      "On-device breed & disease scans",
      "Core treatment guides & first-aid",
      "District outbreak alerts",
      "Community groups",
      "Offline field guide library",
    ],
  },
  {
    name: "Farmer",
    price: 2000,
    currency: "MK ",
    description: "Sell and earn with confidence",
    features: [
      "Everything in Free",
      "Full marketplace listing access",
      "Escrow-protected payments",
      "Trust score building",
      "Revenue analytics dashboard",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Co-op",
    price: 5000,
    currency: "MK ",
    description: "Grow your whole agribusiness",
    features: [
      "Everything in Farmer",
      "Unlimited listings & bulk sales",
      "Top categories & insights",
      "Vet & agronomist consultations",
      "Community polls & elections",
      "Value-added processing guides",
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
            subtitle="Free to start and works offline. Upgrade as your agribusiness grows."
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
