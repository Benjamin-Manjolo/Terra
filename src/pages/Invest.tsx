import { motion } from "framer-motion";
import { TrendingUp, RefreshCw, PieChart, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import SectionHeading from "@/components/SectionHeading";

const features = [
  { icon: RefreshCw, title: "Round-Ups® Investing", description: "Connect your card and we'll round up every purchase to the nearest dollar, investing the spare change automatically." },
  { icon: PieChart, title: "Diversified Portfolios", description: "Expert-built portfolios of ETFs spanning thousands of stocks and bonds — diversified from day one." },
  { icon: Zap, title: "Automated Recurring", description: "Set it and forget it. Invest daily, weekly, or monthly on your schedule with automatic transfers." },
  { icon: TrendingUp, title: "Custom Portfolios", description: "Gold members can build custom portfolios from a curated list of ETFs to match their values and goals." },
];

export default function Invest() {
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
              Oakly Invest
            </span>
            <h1 className="text-4xl md:text-6xl font-display text-foreground leading-[1.1] mb-6">
              Investing made <span className="text-primary">effortless</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Turn everyday purchases into investments. Our automated portfolios do the heavy lifting so you can focus on living your life.
            </p>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 font-semibold hover:bg-oak-light transition-colors"
            >
              Start Investing <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading title="How Oakly Invest works" subtitle="Smart, diversified investing with features designed for everyone." />
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
