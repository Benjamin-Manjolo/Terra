import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  PiggyBank,
  CreditCard,
  GraduationCap,
  Shield,
  BarChart3,
  ArrowRight,
  Star,
  Users,
  DollarSign,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import GrowthCalculator from "@/components/GrowthCalculator";
import SectionHeading from "@/components/SectionHeading";

const products = [
  { icon: TrendingUp, title: "Oakly Invest", description: "Automated investing with Round-Ups. Every spare cent gets invested into diversified portfolios built by experts." },
  { icon: PiggyBank, title: "Oakly Later", description: "Set up your retirement with IRAs that work on autopilot. Traditional, Roth, and SEP options available." },
  { icon: CreditCard, title: "Oakly Checking", description: "A heavy metal debit card with no account fees, free ATMs nationwide, and instant Round-Ups." },
  { icon: GraduationCap, title: "Oakly Early", description: "Start investing for your kids from day one. Teach money skills with their own debit card and app." },
  { icon: DollarSign, title: "Oakly Earn", description: "Earn bonus investments when you shop with 15,000+ brands — money that goes right into your portfolio." },
  { icon: Shield, title: "Bank-Level Security", description: "256-bit encryption, SIPC protection up to $500K, and FDIC insured checking up to $250K." },
];

const stats = [
  { value: "14M+", label: "Customers" },
  { value: "$30B+", label: "Invested" },
  { value: "4.7★", label: "App ratings" },
  { value: "Since 2014", label: "Helping families build wealth" },
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
              <Star className="w-4 h-4 fill-gold text-gold" />
              Rated #1 investing app for beginners
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-foreground leading-[1.1] mb-6">
              Say Hello to Oakly: An automated saving and investing app for you and your family
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
              Choose a path designed for you, or tools built to help your whole family build lifelong money habits.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-semibold hover:bg-oak-light transition-colors"
              >
                You: Learn more <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/early"
                className="inline-flex items-center gap-2 rounded-full bg-card text-foreground border border-border px-8 py-4 text-base font-semibold hover:bg-secondary transition-colors"
              >
                <Users className="w-4 h-4" />
                Your Family: Learn more
              </Link>
            </div>

            <Link
              to="/pricing"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-6 py-3 text-sm font-semibold hover:bg-primary/20 transition-colors"
            >
              Get the app
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
            badge="A Better Way to Invest"
            title="Automated investing, transparent pricing, and security-first design"
            subtitle="An all-in-one app with expert-built portfolios, no hidden fees, and tools that make long-term investing simple."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <FeatureCard key={p.title} icon={p.icon} title={p.title} description={p.description} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <div className="bg-secondary/50">
        <GrowthCalculator />
      </div>

      {/* How It Works */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            badge="How It Works"
            title="Start growing in 3 simple steps"
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Sign up in minutes", desc: "Create your account, answer a few questions, and we'll recommend a portfolio for you." },
              { step: "02", title: "Connect & automate", desc: "Link your bank, turn on Round-Ups, and set recurring investments. We handle the rest." },
              { step: "03", title: "Watch it grow", desc: "Your money is invested in diversified portfolios. Track your progress anytime in the app." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center mx-auto mb-5">
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
      <section className="py-20 gradient-oak">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <BarChart3 className="w-10 h-10 text-gold-light mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-display text-primary-foreground leading-snug mb-6">
              "I started investing with just $5 a week. Three years later, I have over $12,000 saved — money I never would have put aside on my own."
            </blockquote>
            <p className="text-primary-foreground/60 text-sm">— Sarah M., Oakly member since 2021</p>
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
              Ready to grow your money?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Join millions building their financial future with Oakly. Plans start at just $3/month.
            </p>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-semibold hover:bg-oak-light transition-colors"
            >
              Get Started Today <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
