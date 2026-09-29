import { motion } from "framer-motion";
import { Scan, WifiOff, Clock, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import SectionHeading from "@/components/SectionHeading";

const features = [
  { icon: Scan, title: "Breed & disease detection", description: "Photograph your cattle and get a breed ID and disease diagnosis in under 5 seconds, powered by on-device TensorFlow Lite models." },
  { icon: WifiOff, title: "Truly offline", description: "No signal? No problem. Everything runs on your phone and works in the middle of a village with zero internet." },
  { icon: Clock, title: "Answers in seconds", description: "Get results the moment you point the camera, with a Roboflow-hosted model for even higher accuracy when you're online." },
  { icon: Stethoscope, title: "Vet-ready insights", description: "Share the diagnosis with a vet or agronomist for confirmation, and keep a record of every animal you scan." },
];

export default function Invest() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="gradient-hero pt-28 md:pt-36 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent bg-accent/10 px-4 py-1.5 rounded-full mb-4">
              Terra Scan
            </span>
            <h1 className="text-4xl md:text-6xl font-display text-foreground leading-[1.1] mb-6">
              Diagnose your livestock <span className="text-primary">in seconds</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Take a photo of your cow and get a breed identification and disease diagnosis in under 5 seconds,
              entirely offline, right on your phone.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading title="How Terra Scan works" subtitle="Fast, private, and reliable detection built for the field." />
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}