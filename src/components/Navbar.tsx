import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/invest", label: "Scan" },
  { to: "/early", label: "Grow" },
  { to: "/pricing", label: "Plans & Pricing" },
  { to: "/learn", label: "Learn" },
  { to: "/download", label: "Download" },
  { to: "/support", label: "Support" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 text-primary font-display text-2xl">
          <Leaf className="w-7 h-7" />
          Terra
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === l.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/download"
            className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold hover:bg-terra-light transition-colors"
          >
            Get the app
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="container py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`text-base font-medium py-2 ${
                  location.pathname === l.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/download"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold mt-2"
            >
              Get the app
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
