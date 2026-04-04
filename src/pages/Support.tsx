import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const faqs = [
  "How Round-Ups and recurring investments work",
  "How to link your bank and set Smart Deposit",
  "Understanding subscriptions, billing, and fee transparency",
  "SIPC and FDIC coverage details",
  "How to contact support 24/7",
];

export default function Support() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="container max-w-4xl">
          <SectionHeading
            badge="Support"
            title="Help center and account support"
            subtitle="Find answers quickly, browse FAQs, and reach our support team any time."
          />

          <div className="bg-card border border-border rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-display mb-4">Popular help topics</h2>
            <ul className="space-y-3 text-muted-foreground list-disc pl-5">
              {faqs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
