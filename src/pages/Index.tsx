import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Scan,
  HeartPulse,
  ShoppingCart,
  Sprout,
  BookOpen,
  Shield,
  ArrowRight,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import GrowthCalculator from "@/components/GrowthCalculator";
import SectionHeading from "@/components/SectionHeading";

const products = [
  { icon: Scan, title: "Terra Scan", description: "Point your camera at a cow. Get a breed and disease diagnosis in under 5 seconds, entirely offline. Powered by on-device TensorFlow Lite models." },
  { icon: HeartPulse, title: "Terra Heal", description: "Every diagnosis comes with symptoms, treatment steps, first-aid protocols, and emergency vet contacts, in English or Chichewa." },
  { icon: ShoppingCart, title: "Terra Trade", description: "A trust-scored marketplace with escrow-protected payments. Sell your livestock to verified buyers without fear of scams." },
  { icon: Sprout, title: "Terra Grow", description: "An agripreneur dashboard with revenue analytics, pending deliveries, top-selling categories, and trust scores." },
  { icon: BookOpen, title: "Terra Learn", description: "Offline field guides, treatment manuals, business ideas, and value-added processing recipes. Knowledge that works in the middle of a village." },
  { icon: Shield, title: "Bank-Level Security", description: "256-bit encryption, escrow-protected transactions, Row Level Security on every database row, and verified seller badges." },
];

const stats = [
  { value: "10K+", label: "Farmers onboarded (beta)" },
  { value: "50K+", label: "Livestock diagnoses performed" },
  { value: "4.7★", label: "App ratings" },
  { value: "Since 2025", label: "Helping farmers build wealth through agriculture" },
];

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4 fill-leaf text-leaf" />
              Rated #1 offline AI companion for Malawian farmers
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-foreground leading-[1.1] mb-6">
              Say Hello to Terra: An offline-first AI companion that helps farmers diagnose livestock disease, sell at
              fair prices, and grow their agribusiness
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
              Take a photo. Get a diagnosis. Get a treatment plan. Sell to a verified buyer, all from your phone, all
              without internet.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/Benjamin-Manjolo/oakly-invest/releases/tag/v1.0.1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-semibold hover:bg-terra-light transition-colors"
              >
                Get the app <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/learn"
                className="inline-flex items-center gap-2 rounded-full bg-card text-foreground border border-border px-8 py-4 text-base font-semibold hover:bg-secondary transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Explore field guides
              </Link>
            </div>

            <Link
              to="/invest"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-6 py-3 text-sm font-semibold hover:bg-primary/20 transition-colors"
            >
              Try Terra Scan
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Stats */}
      <section className="py-12 border-b border-border bg-card">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-2xl md:text-3xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            badge="A Better Way to Farm"
            title="Every tool a smallholder farmer needs, offline-first"
            subtitle="Diagnose disease, follow treatment, trade safely, and grow your agribusiness, all from one phone app that works without internet."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <FeatureCard key={p.title} icon={p.icon} title={p.title} description={p.description} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Herd Loss Estimator */}
      <div className="bg-secondary/50">
        <GrowthCalculator />
      </div>

      {/* How It Works */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            badge="How It Works"
            title="From diagnosis to market in 3 simple steps"
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Scan your animal", desc: "Open Terra, take a photo. The AI runs on your phone and gives you a breed ID and disease diagnosis in seconds. No internet needed." },
              { step: "02", title: "Treat and track", desc: "Follow the treatment guide, log the diagnosis, and get alerts if a disease outbreak is reported in your district." },
              { step: "03", title: "Sell and grow", desc: "List your animal on Terra's trust-scored marketplace. Get paid through escrow. Every completed sale builds your reputation." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full gradient-leaf flex items-center justify-center mx-auto mb-5">
                  <span className="text-sm font-bold text-accent-foreground">{s.step}</span>
                </div>
                <h3 className="font-display text-xl mb-2 text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 gradient-terra">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Sprout className="w-10 h-10 text-leaf-light mx-auto mb-6" />
            {/* Beta testimonial (illustrative persona) — fictional quote for the beta landing page. */}
            <p className="text-xs uppercase tracking-widest text-primary-foreground/60 mb-3">
              Beta testimonial · illustrative persona
            </p>
            <blockquote className="text-2xl md:text-3xl font-display text-primary-foreground leading-snug mb-6">
              "I identified my cow's lumpy skin disease in 30 seconds without internet. The vet confirmed it the next
              day. Without Terra, I would have lost the cow."
            </blockquote>
            <p className="text-primary-foreground/60 text-sm">Chikondi B., smallholder farmer, Lilongwe (illustrative)</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-3xl p-10 md:p-16 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
              Ready to protect your herd?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Join farmers across Malawi using Terra to diagnose disease, sell at fair prices, and grow their
              agribusiness. Free to start. Works offline.
            </p>
            {/* // TODO: link "Join the beta" to your beta sign-up / waitlist page before launch */}
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-semibold hover:bg-terra-light transition-colors"
            >
              Join the beta <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
