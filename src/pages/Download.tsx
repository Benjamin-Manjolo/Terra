import {
  ArrowRight,
  CalendarDays,
  Check,
  Cpu,
  Database,
  Download as DownloadIcon,
  HardDrive,
  MemoryStick,
  Smartphone,
  TriangleAlert,
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
    name: "ARM64 — most phones",
    icon: Smartphone,
    version: "v1.0.1",
    size: "56 MB",
    requirements: "Android 6.0+ (Marshmallow)",
    bestFor: "Choose this first. It works on almost every Android phone made from 2015 onward.",
    coverage: "Works on about 95% of Android phones in use today.",
    specs: [
      { icon: Cpu, label: "Phone processor", value: "64-bit ARM (ARM64 / arm64-v8a / aarch64)" },
      { icon: MemoryStick, label: "Memory", value: "2 GB minimum · 4 GB+ recommended" },
      { icon: HardDrive, label: "Free storage", value: "150 MB" },
      { icon: CalendarDays, label: "Typical phone age", value: "2015 or newer" },
    ],
    examples: [
      "Samsung Galaxy A, J, S, M, and F series from 2016+",
      "Tecno Spark 4+, Camon 12+, and most Tecno Pop phones",
      "Infinix Hot, Note, Zero, and Smart series",
      "Itel A, P, S, and Vision phones from 2020+",
      "Redmi, Poco, Oppo A, Vivo Y, Huawei, Nokia, and every Google Pixel",
    ],
    notFor: "Very old phones and a small number of ultra-budget Android Go phones with 32-bit processors.",
    fileName: "app-arm64-v8a-release.apk",
    href: `${RELEASE_DOWNLOAD_URL}/app-arm64-v8a-release.apk`,
    recommended: true,
  },
  {
    id: "armeabi-v7a",
    name: "32-bit ARM — older phones",
    icon: Cpu,
    version: "v1.0.1",
    size: "52 MB",
    requirements: "Android 6.0+ (Marshmallow)",
    bestFor: "Choose this only if the ARM64 download does not install, or if your phone is an older Android Go or budget model.",
    coverage: "Made for 32-bit phones, including some Android Go devices.",
    specs: [
      { icon: Cpu, label: "Phone processor", value: "32-bit ARM (ARMv7 / armeabi-v7a / aarch32)" },
      { icon: MemoryStick, label: "Memory", value: "1 GB minimum · 2 GB recommended" },
      { icon: HardDrive, label: "Free storage", value: "150 MB" },
      { icon: CalendarDays, label: "Typical phone age", value: "2013 or newer" },
    ],
    examples: [
      "Android Go: Tecno Pop 2F/3/4/5/6 Go and Itel A23/A25/A27/A36/A48",
      "Samsung Galaxy J1, J2 Core, J2 Prime, A2 Core, Grand Prime, and Core Prime",
      "Samsung Galaxy S4/S5, Note 3/4, and 2014–15 Galaxy A phones",
      "Older HTC One, LG G2/G3/G4, and Sony Xperia Z phones",
      "Some very low-cost, unbranded Android Go phones",
    ],
    notFor: "Most phones released since 2016. Use the ARM64 download above unless you know your phone is 32-bit.",
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
            title="Choose the right download for your phone"
            subtitle="Both versions need Android 6.0 (Marshmallow) or newer. The green ARM64 option is right for most people."
          />
          <div className="grid lg:grid-cols-2 gap-7 max-w-6xl mx-auto">
            {apkBuilds.map((p) => {
              return (
                <div
                  key={p.id}
                  className={`rounded-3xl p-1 ${p.recommended ? "bg-primary shadow-xl shadow-primary/15" : "bg-border shadow-lg"}`}
                >
                  <article className="h-full rounded-[1.35rem] bg-card p-6 md:p-8 flex flex-col">
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${p.recommended ? "gradient-terra" : "bg-secondary"}`}>
                        <p.icon className={`w-6 h-6 ${p.recommended ? "text-primary-foreground" : "text-secondary-foreground"}`} />
                      </div>
                      {p.recommended ? (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                          <Check className="w-3.5 h-3.5" /> Start here
                        </span>
                      ) : (
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-muted px-3 py-1.5 rounded-full">Older phones</span>
                      )}
                    </div>
                    <h3 className="font-display text-2xl text-foreground mb-2">{p.name}</h3>
                    <p className="text-sm font-medium text-foreground leading-relaxed mb-2">{p.bestFor}</p>
                    <p className="text-sm text-primary font-semibold mb-6">{p.coverage}</p>

                    <div className="rounded-2xl bg-muted/70 p-4 mb-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">This APK needs</p>
                      <dl className="space-y-3 text-sm">
                        <div className="flex justify-between gap-4"><dt className="text-muted-foreground">Android version</dt><dd className="font-semibold text-right">{p.requirements}</dd></div>
                        {p.specs.map((spec) => <div key={spec.label} className="flex gap-2.5"><spec.icon className="w-4 h-4 text-primary shrink-0 mt-0.5" /><div><dt className="text-muted-foreground">{spec.label}</dt><dd className="font-semibold text-foreground leading-snug">{spec.value}</dd></div></div>)}
                      </dl>
                    </div>

                    <div className="mb-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Common phone examples</p>
                      <ul className="space-y-2">
                        {p.examples.map((example) => <li key={example} className="flex gap-2 text-sm text-muted-foreground leading-snug"><Check className="w-4 h-4 shrink-0 text-primary mt-0.5" />{example}</li>)}
                      </ul>
                    </div>

                    <p className="flex gap-2 rounded-xl bg-secondary/40 p-3 text-xs text-foreground leading-relaxed mb-6"><TriangleAlert className="w-4 h-4 shrink-0 mt-0.5 text-primary" />{p.notFor}</p>
                    <p className="font-mono text-xs text-muted-foreground break-all mb-3">{p.fileName} · {p.size}</p>
                    <a href={p.href} download={p.fileName} className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors mt-auto bg-primary text-primary-foreground hover:bg-terra-light">
                      <DownloadIcon className="w-4 h-4" /> Download {p.name}
                    </a>
                  </article>
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
