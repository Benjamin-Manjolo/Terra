import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const articles = [
  { title: "What is Compound Interest?", category: "Investing 101", readTime: "4 min", excerpt: "Learn how your money can grow exponentially over time through the power of compounding." },
  { title: "How to Start Investing with $5", category: "Getting Started", readTime: "3 min", excerpt: "You don't need thousands to begin. Here's how micro-investing can build real wealth." },
  { title: "Round-Ups: Your Secret Weapon", category: "Features", readTime: "5 min", excerpt: "How spare change investing turns everyday purchases into long-term investments." },
  { title: "Roth IRA vs Traditional IRA", category: "Retirement", readTime: "6 min", excerpt: "Understanding the key differences to choose the right retirement account for you." },
  { title: "Teaching Kids About Money", category: "Family", readTime: "4 min", excerpt: "Age-appropriate strategies to help your children develop healthy financial habits." },
  { title: "Building an Emergency Fund", category: "Savings", readTime: "3 min", excerpt: "Why you need 3-6 months of expenses saved, and the easiest way to get there." },
  { title: "Understanding ETFs", category: "Investing 101", readTime: "5 min", excerpt: "Exchange-traded funds explained simply — what they are and why they matter." },
  { title: "Automating Your Finances", category: "Tips", readTime: "4 min", excerpt: "Set up systems that save, invest, and pay bills without you lifting a finger." },
  { title: "The Cost of Waiting to Invest", category: "Investing 101", readTime: "3 min", excerpt: "See how even a few years of delay can cost you tens of thousands in potential growth." },
];

const categoryColors: Record<string, string> = {
  "Investing 101": "bg-primary/10 text-primary",
  "Getting Started": "bg-accent/10 text-accent",
  Features: "bg-oak-light/10 text-oak-light",
  Retirement: "bg-gold/10 text-gold",
  Family: "bg-primary/10 text-primary",
  Savings: "bg-accent/10 text-accent",
  Tips: "bg-oak-light/10 text-oak-light",
};

export default function Learn() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="container">
          <SectionHeading
            badge="Learn"
            title="Financial knowledge, simplified"
            subtitle="Articles, guides, and tips to help you make smarter money decisions."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <motion.article
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[a.category] || "bg-muted text-muted-foreground"}`}>
                    {a.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{a.readTime}</span>
                </div>
                <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {a.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.excerpt}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
