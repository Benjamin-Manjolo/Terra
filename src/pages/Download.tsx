import { useState } from "react";
import { motion } from "framer-motion";
import {
  Apple,
  ArrowRight,
  Check,
  Database,
  Download,
  Smartphone,
  WifiOff,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

type OS = "android" | "ios" | "windows" | "macos" | "linux" | "other";

const RELEASE_URL = "https://github.com/Benjamin-Manjolo/oakly-invest/releases/tag/v1.0.1";

const platforms = [
  {
    id: "android" as const,
    name: "Android",
    icon: Smartphone,
    version: "v1.0.1",
    size: "24 MB APK",
    requirements: "Android 8.0 & up",
    note: "Direct APK download that runs completely offline.",
    href: RELEASE_URL,
    recommended: true,
  },
  {
    id: "ios" as const,
    name: "iOS",
    icon: Apple,
    version: "v1.0.1",
    size: "TestFlight beta",
    requirements: "iOS 14 & up",
    note: "Get an invite and install straight from TestFlight.",
    href: "#download-ios",
    recommended: false,
  },
];

const installSteps = [
  {
    platform: "Android",
    steps: [
      "Tap Download for Android and save the APK to your phone.",
      "When prompted, allow installs from your browser (Settings → Allow from this source).",
      "Open the downloaded file and tap Install.",
      "Launch Terra and sign in, or create a free account to start scanning.",
    ],
  },
  {
    platform: "iOS",
    steps: [
      "Tap Request TestFlight access from your device.",
      "Install the TestFlight app from the App Store if you don't have it.",
      "Follow the invite link inside TestFlight and tap Install.",
      "Open Terra. Every feature works offline from that point on.",
    ],
  },
];

const requirements = [
  { icon: Smartphone, title: "Android", desc: "Android 8.0 (Oreo) or later on an ARM64 phone." },
  { icon: Apple, title: "iOS", desc: "iOS 14 or later on iPhone or iPad." },
  { icon: Database, title: "Storage", desc: "Around 120 MB of free space once installed." },
  { icon: WifiOff, title: "Offline-first", desc: "No internet needed once the app is installed." },
];

const changelog = [
  "Improved breed and disease detection accuracy offline.",
  "Faster scan results thanks to a lighter on-device model.",
  "Added Chichewa support to treatment guides.",
  "Bug fixes and stability improvements across the app.",
];

function detectOS(): OS {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) return "android";
  if (/iPad|iPhone|iPod/i.test(ua)) return "ios";
  if (/Windows/i.test(ua)) return "windows";
  if (/Macintosh|Mac OS/i.test(ua)) return "macos";
  if (/Linux/i.test(ua)) return "linux";
  return "other";
}

export default function Download() {
  const [os] = useState<OS>(() => detectOS());

  const primary = platforms.find((p) => p.id === (os === "ios" ? "ios" : "android"))!;
  const primaryLabel = os === "ios" ? "Download for iOS" : "Download for Android";

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
            className="max-w-2xl mx-auto text-center"
          >
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent bg-accent/10 px-4 py-1.5 rounded-full mb-4">
              Download Terra
            </span>
            <h1 className="text-4xl md:text-6xl font-display text-foreground leading-[1.1] mb-6 text-balance">
              Get Terra on your phone
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8">
              Diagnose livestock, trade safely, and grow your agribusiness. Every feature works offline, even in the
              middle of a village.
            </p>
            <a
              href={primary.href}
              target={primary.href.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-semibold hover:bg-terra-light transition-colors"
            >
              <Download className="w-5 h-5" />
              {primaryLabel}
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-sm text-muted-foreground mt-4">Free to start · v1.0.1 · Works offline</p>
          </motion.div>
        </div>
      </section>

      {/* All platforms */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            badge="All Platforms"
            title="Download for your device"
            subtitle="Pick the version for your phone. Everything stays on your device and runs with zero internet."
          />
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {platforms.map((p, i) => {
              const isActive = os === p.id;
              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`bg-card rounded-2xl p-8 border border-border flex flex-col transition-shadow hover:shadow-lg ${
                    isActive ? "ring-2 ring-leaf shadow-xl" : ""
                  }`}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl gradient-terra flex items-center justify-center">
                      <p.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex items-center">
                      {isActive && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
                          <Check className="w-3 h-3" /> Your device
                        </span>
                      )}
                      {p.recommended && !isActive && (
                        <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                          Recommended
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-1">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{p.note}</p>
                  <dl className="space-y-2.5 mb-8 text-sm">
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Version</dt>
                      <dd className="font-semibold text-foreground">{p.version}</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Size</dt>
                      <dd className="font-semibold text-foreground">{p.size}</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Requires</dt>
                      <dd className="font-semibold text-foreground">{p.requirements}</dd>
                    </div>
                  </dl>
                  <a
                    href={p.href}
                    target={p.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-terra-light transition-colors mt-auto"
                  >
                    <Download className="w-4 h-4" /> Download
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Installation steps */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container max-w-4xl">
          <SectionHeading badge="Installation" title="Up and running in minutes" />
          <div className="space-y-6">
            {installSteps.map((g, i) => (
              <motion.div
                key={g.platform}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-3xl p-8 md:p-10"
              >
                <h3 className="font-display text-2xl text-foreground mb-6">
                  {g.platform} <span className="text-muted-foreground">· Installation</span>
                </h3>
                <ol className="space-y-4">
                  {g.steps.map((step, j) => (
                    <li key={step} className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full gradient-leaf flex items-center justify-center text-sm font-bold text-accent-foreground flex-shrink-0">
                        {j + 1}
                      </span>
                      <p className="text-muted-foreground leading-relaxed pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System requirements */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            badge="Requirements"
            title="Works on almost any phone"
            subtitle="Terra is lightweight and built for low-end devices used across rural Malawi."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {requirements.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-12 h-12 rounded-xl gradient-terra flex items-center justify-center mx-auto mb-4">
                  <r.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Changelog */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container max-w-3xl">
          <SectionHeading badge="What's New" title="Changelog" subtitle="Highlights from the latest release." />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-3xl p-8 md:p-10"
          >
            <h3 className="font-display text-xl text-foreground mb-2">v1.0.1</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Latest release · Full notes on{" "}
              <a
                href={RELEASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:text-terra-light transition-colors"
              >
                GitHub
              </a>
            </p>
            <ul className="space-y-3">
              {changelog.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
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
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-3xl p-10 md:p-16 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">Need a hand installing?</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Browse our help center for answers, or reach our support team any time, day or night.
            </p>
            <Link
              to="/support"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-semibold hover:bg-terra-light transition-colors"
            >
              Visit the Help Center <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}