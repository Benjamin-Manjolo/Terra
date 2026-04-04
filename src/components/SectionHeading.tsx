import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ badge, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12 md:mb-16"
    >
      {badge && (
        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent bg-accent/10 px-4 py-1.5 rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-display text-foreground mb-4 text-balance">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
