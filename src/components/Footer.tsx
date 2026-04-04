import { Link } from "react-router-dom";
import { TreePine } from "lucide-react";

const footerLinks = [
  {
    title: "Products",
    links: [
      { label: "Invest", to: "/invest" },
      { label: "Early", to: "/early" },
      { label: "Later (Retirement)", to: "/invest" },
      { label: "Checking", to: "/invest" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/" },
      { label: "Careers", to: "/" },
      { label: "Press", to: "/" },
      { label: "Security", to: "/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Learn", to: "/learn" },
      { label: "Pricing", to: "/pricing" },
      { label: "Support", to: "/support" },
      { label: "FAQs", to: "/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", to: "/" },
      { label: "Privacy", to: "/" },
      { label: "Disclosures", to: "/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-oak-dark text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-display text-2xl mb-4">
              <TreePine className="w-6 h-6" />
              Oakly
            </Link>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Invest, earn, grow, and spend — all from one app.
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
            Oakly is a financial technology company, not a bank. Banking services provided by partner banks. 
            Advisory services are provided by Oakly Advisers, LLC, an SEC-registered investment adviser. 
            Investing involves risk, including loss of principal. This is a demo application for illustrative purposes only.
          </p>
          <p className="text-xs text-primary-foreground/40 mt-4">
            © {new Date().getFullYear()} Oakly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
