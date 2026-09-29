import {
  ArrowRight,
  Check,
  Cpu,
  Database,
  Download as DownloadIcon,
  Smartphone,
  WifiOff,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const RELEASE_URL = "https://github.com/Benjamin-Manjolo/Terra/releases/tag/v1.0.1";
const RELEASE_DOWNLOAD_URL = "https://github.com/Benjamin-Manjolo/Terra/releases/download/v1.0.1";

const apkBuilds = [
  {
    id: "arm64-v8a",
    name: "ARM64 (recommended)",
    icon: Smartphone,
    version: "v1.0.1",
    size: "54.8 MB",
    requirements: "Android 6.0+ (Marshmallow)",
    note: "For most modern Android phones. This is the right choice for nearly every phone made in recent years.",
    fileName: "app-arm64-v8a-release.apk",
    href: `${RELEASE_DOWNLOAD_URL}/app-arm64-v8a-release.apk`,
    recommended: true,
  },
  {
    id: "armeabi-v7a",
    name: "32-bit ARM",
    icon: Cpu,
    version: "v1.0.1",
    size: "50.7 MB",
    requirements: "Android 6.0+ (Marshmallow)",
    note: "For older or entry-level Android phones that use a 32-bit ARM processor.",
    fileName: "app-armeabi-v7a-release.apk",
    href: `${RELEASE_DOWNLOAD_URL}/app-armeabi-v7a-release.apk`,
    recommended: false,
  },
];

const installSteps = [
  {
    platform: "Android",
    steps: [
      "Choose the APK that matches your phone, then tap its Download APK button.",
      "When prompted, allow installs from your browser (Settings → Allow from this source).",
      "Open the downloaded file and tap Install.",
      "Open Terra. Its field guides and on-device diagnosis work without internet.",
    ],
  },
];

const requirements = [
  { icon: Smartphone, title: "Android version", desc: "Android 6.0 (Marshmallow) or later for every available APK." },
  { icon: Cpu, title: "Phone type", desc: "Use ARM64 for most phones; use 32-bit ARM only for older devices." },
  { icon: Database, title: "Storage", desc: "Keep at least 120 MB free for the app and its offline resources." },
  { icon: WifiOff, title: "Offline-first", desc: "No internet needed once the app is installed." },
];

const changelog = [
  "Improved breed and disease detection accuracy offline.",
  "Faster scan results thanks to a lighter on-device model.",
  "Added Chichewa support to treatment guides.",
  "Bug fixes and stability improvements across the app.",
];

export default function Download() {
  const primary = apkBuilds[0];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent bg-accent/10 px-4 py-1.5 rounded-full mb-4">
              Download Terra
            </span>
            <h1 className="text-4xl md:text-6xl font-display text-foreground leading-[1.1] mb-6 text-balance">
              Get Terra for Android
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8">
              Diagnose livestock, trade safely, and grow your agribusiness. Every feature works offline, even in the
              middle of a village.
            </p>
            <a
              href={primary.href}
              download={primary.fileName}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-semibold hover:bg-terra-light transition-colors"
            >
              <DownloadIcon className="w-5 h-5" />
              Download for most phones
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-sm text-muted-foreground mt-4">Free direct download · v1.0.1 · Requires Android 6.0+</p>
          </div>
        </div>
      </section>

      {/* All platforms */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            badge="Choose your APK"
            title="Know which download your Android needs"
            subtitle="Every build requires Android 6.0 (Marshmallow) or newer. Start with ARM64 unless you know your phone is an older 32-bit model."
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {apkBuilds.map((p) => {
              return (
                <div
                  key={p.id}
                  className={`bg-card rounded-2xl p-8 border border-border flex flex-col transition-shadow hover:shadow-lg ${p.recommended ? "ring-2 ring-leaf shadow-xl" : ""}`}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl gradient-terra flex items-center justify-center">
                      <p.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex items-center">
                      {p.recommended && (
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
                    {p.fileName && (
                      <div className="pt-2 border-t border-border">
                        <dt className="text-muted-foreground mb-1">APK file</dt>
                        <dd className="font-mono text-xs text-foreground break-all">{p.fileName}</dd>
                      </div>
                    )}
                  </dl>
                  <a
                    href={p.href}
                    download={p.fileName}
                    className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors mt-auto bg-primary text-primary-foreground hover:bg-terra-light"
                  >
                    <DownloadIcon className="w-4 h-4" /> Download APK
                  </a>
                </div>
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
            {installSteps.map((g) => (
              <div
                key={g.platform}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System requirements */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            badge="Requirements"
            title="Android requirements at a glance"
            subtitle="Terra is designed for low-end devices used across rural Malawi, while still making its Android version requirement clear."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {requirements.map((r) => (
              <div
                key={r.title}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-12 h-12 rounded-xl gradient-terra flex items-center justify-center mx-auto mb-4">
                  <r.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Changelog */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container max-w-3xl">
          <SectionHeading badge="What's New" title="Changelog" subtitle="Highlights from the latest release." />
          <div className="bg-card border border-border rounded-3xl p-8 md:p-10">
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
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="bg-card border border-border rounded-3xl p-10 md:p-16 text-center max-w-3xl mx-auto">
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
