import { motion } from "framer-motion";
import { Baby, CreditCard, BookOpen, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import SectionHeading from "@/components/SectionHeading";

const features = [
  { icon: Baby, title: "Invest for Kids", description: "Open a custodial account and start investing for your child's future from day one. No minimum needed." },
  { icon: CreditCard, title: "Kids Debit Card", description: "A real debit card for kids with parental controls, instant notifications, and spending limits you set." },
  { icon: BookOpen, title: "Money Lessons", description: "Interactive financial literacy content designed for kids — teach them saving, investing, and smart spending." },
  { icon: ShieldCheck, title: "Parental Controls", description: "Full visibility and control. Set allowances, assign chores, approve purchases, and track their progress." },
];

export default function Early() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="gradient-hero pt-28 md:pt-36 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent bg-accent/10 px-4 py-1.5 rounded-full mb-4">
              Oakly Early
            </span>
            <h1 className="text-4xl md:text-6xl font-display text-foreground leading-[1.1] mb-6">
              Give your kids a <span className="text-primary">head start</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Invest for their future, teach them money skills, and give them their first debit card — all in one app.
            </p>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 font-semibold hover:bg-oak-light transition-colors"
            >
              Get Early Access <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading title="Built for families" subtitle="Everything parents need to raise money-smart kids." />
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
