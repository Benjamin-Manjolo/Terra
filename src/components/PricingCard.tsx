import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface PricingCardProps {
  name: string;
  price: number;
  currency?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  index?: number;
}

export default function PricingCard({ name, price, currency = "MK", description, features, highlighted = false, index = 0 }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`rounded-3xl p-8 flex flex-col ${
        highlighted
          ? "gradient-terra text-primary-foreground ring-2 ring-leaf shadow-xl scale-[1.02]"
          : "bg-card border border-border"
      }`}
    >
      <h3 className={`font-display text-2xl mb-1 ${highlighted ? "" : "text-foreground"}`}>{name}</h3>
      <p className={`text-sm mb-6 ${highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {description}
      </p>
      <div className="mb-6">
        <span className="text-4xl font-bold">{currency}{price.toLocaleString()}</span>
        <span className={`text-sm ml-1 ${highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>/month</span>
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${highlighted ? "text-leaf-light" : "text-primary"}`} />
            <span className={highlighted ? "text-primary-foreground/90" : "text-foreground"}>{f}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/"
        className={`inline-flex items-center justify-center rounded-full py-3 text-sm font-semibold transition-colors ${
          highlighted
            ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            : "bg-primary text-primary-foreground hover:bg-terra-light"
        }`}
      >
        Get Started
      </Link>
    </motion.div>
  );
}
