import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const footerLinks = [
  {
    title: "Products",
    links: [
      { label: "Terra Scan", to: "/invest" },
      { label: "Terra Heal", to: "/invest" },
      { label: "Terra Trade", to: "/early" },
      { label: "Terra Grow", to: "/early" },
      { label: "Terra Learn", to: "/learn" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/" },
      { label: "Features", to: "/" },
      { label: "Marketplace", to: "/early" },
      { label: "Community", to: "/" },
      { label: "Contact", to: "mailto:hello@terra.app" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Learn", to: "/learn" },
      { label: "Plans & Pricing", to: "/pricing" },
      { label: "Support", to: "/support" },
      { label: "FAQs", to: "/support" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", to: "/" },
      { label: "Privacy Policy", to: "/" },
      { label: "Disclosures", to: "/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-terra-dark text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-display text-2xl mb-4">
              <Leaf className="w-6 h-6" />
              Terra
            </Link>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Diagnose, treat, sell, and grow — all from your phone, all without internet.
            </p>
            <p className="text-sm text-primary-foreground/60 leading-relaxed mt-4">
              Contact us:{" "}
              <a href="mailto:hello@terra.app" className="underline hover:text-primary-foreground">
                hello@terra.app
              </a>
            </p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-sm mb-4">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/40 leading-relaxed max-w-3xl">
            Terra is an offline-first, AI-powered agricultural companion for smallholder farmers in Malawi. On-device
            breed &amp; disease detection results are for guidance only and should be confirmed with a qualified
            veterinarian. Marketplace escrow funds are released once delivery is confirmed by both parties. This is a
            beta product; features and pricing may change. This is a demo application for illustrative purposes only.
          </p>
          <p className="text-xs text-primary-foreground/40 mt-4">
            © {new Date().getFullYear()} Terra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
