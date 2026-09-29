import { motion } from "framer-motion";
import { BarChart3, Store, ShieldCheck, MessageSquare, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import SectionHeading from "@/components/SectionHeading";

const features = [
  { icon: BarChart3, title: "Revenue analytics", description: "Track earnings, completed sales, pending deliveries, category breakdowns, and your top-selling category at a glance." },
  { icon: Store, title: "Trust-scored marketplace", description: "Sell to verified buyers and build a permanent trust score with every completed transaction." },
  { icon: ShieldCheck, title: "Escrow-protected payments", description: "Money is held in escrow until delivery is confirmed. Trade with confidence, without fear of scams." },
  { icon: MessageSquare, title: "Community groups", description: "Ask questions, share advice, react, and vote on polls with other farmers in your area." },
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
              Terra Grow
            </span>
            <h1 className="text-4xl md:text-6xl font-display text-foreground leading-[1.1] mb-6">
              Grow your <span className="text-primary">agribusiness</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A dashboard for agripreneurs to track revenue, manage listings, and build a permanent trust score with
              every completed sale.
            </p>
            <Link
              to="/download"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 font-semibold hover:bg-terra-light transition-colors"
            >
              Get the app <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading title="Built for agripreneurs" subtitle="Everything you need to turn your farm into a business." />
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