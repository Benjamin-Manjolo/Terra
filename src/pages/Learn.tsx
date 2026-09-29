import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const articles = [
  { title: "Identifying Lumpy Skin Disease in Cattle", category: "Livestock Health", readTime: "5 min", excerpt: "Spot the early signs of lumpy skin disease on your herd and know what to do before a vet arrives." },
  { title: "Foot and Mouth Disease: First-Aid Steps", category: "Livestock Health", readTime: "4 min", excerpt: "Symptoms, precautions, and first-aid actions for FMD, the treatment guide that works offline." },
  { title: "Treating Mastitis Without a Vet", category: "Livestock Health", readTime: "6 min", excerpt: "Practical steps to manage mastitis with what you have on hand, and when to call an emergency contact." },
  { title: "A Guide to Anthrax Prevention", category: "Animal Health", readTime: "5 min", excerpt: "Human safety first. Understand anthrax risks and the safeguards to protect your family and herd." },
  { title: "Getting Started with Drought-Resistant Crops", category: "Crops", readTime: "6 min", excerpt: "Choose resilient crops and practices suited to districts with unreliable rainfall." },
  { title: "Value-Added Processing for Smallholders", category: "Agribusiness", readTime: "7 min", excerpt: "Turn raw produce into higher-value goods and earn more from every harvest." },
  { title: "Pricing Your Livestock for the Marketplace", category: "Agribusiness", readTime: "4 min", excerpt: "Set fair prices that get you paid and keep your buyers coming back." },
  { title: "Building a Trust Score as a Seller", category: "Marketplace", readTime: "3 min", excerpt: "How every escrow-protected transaction boosts your reputation on Terra's marketplace." },
  { title: "Agripreneur Business Ideas in Malawi", category: "Agribusiness", readTime: "8 min", excerpt: "Low-capital ideas to go from subsistence to commercial farming, aligned with Malawi 2063." },
];

const categoryColors: Record<string, string> = {
  "Livestock Health": "bg-primary/10 text-primary",
  "Animal Health": "bg-terra-light/10 text-terra-light",
  Crops: "bg-accent/10 text-accent",
  Agribusiness: "bg-leaf/10 text-leaf",
  Marketplace: "bg-terra-light/10 text-terra-light",
};

export default function Learn() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="container">
          <SectionHeading
            badge="Learn"
            title="Field knowledge, simplified"
            subtitle="Guides, manuals, and tips that work even in the middle of a village, downloadable for offline use."
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
