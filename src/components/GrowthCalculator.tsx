import { useState, useMemo } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

// Herd-loss prevention estimator for the Terra marketing site.
// Inputs are editable defaults — not real farm data. Figures shown are illustrative examples.
export default function GrowthCalculator() {
  const [herdSize, setHerdSize] = useState(10);
  const [lossRate, setLossRate] = useState(30);
  const [avgPrice, setAvgPrice] = useState(150000);
  const [treatmentCost, setTreatmentCost] = useState(20000);
  // Share of annual deaths that early detection + treatment are assumed to prevent.
  const preventedRate = 0.85;

  const annualLoss = Math.max(0, Math.round((herdSize * lossRate) / 100));
  const animalsSaved = Math.round(annualLoss * preventedRate);
  const incomePreserved = animalsSaved * avgPrice;
  const costOfTreatment = annualLoss * treatmentCost;
  const netBenefit = incomePreserved - costOfTreatment;

  const data = useMemo(() => {
    const withLoss = annualLoss - animalsSaved;
    const points = [];
    for (let y = 0; y <= 5; y++) {
      points.push({
        year: y,
        withoutTerra: Math.round(annualLoss * y),
        withTerra: Math.round(withLoss * y),
      });
    }
    return points;
  }, [annualLoss, animalsSaved]);

  const formatNumber = (v: number) => new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(v);
  const formatMwk = (v: number) => `MK ${formatNumber(v)}`;
  const formatAnimals = (v: number) => `${formatNumber(v)} animals`;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 md:py-28"
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display text-foreground mb-4">See your herd grow</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A healthier herd means more income. Use this herd-loss prevention estimator to see what early diagnosis
            and treatment can save, all from your phone, with no internet in the field.
          </p>
        </div>

        <div className="bg-card rounded-3xl border border-border p-6 md:p-10 max-w-5xl mx-auto shadow-sm">
          <div className="grid md:grid-cols-[280px_1fr] gap-8">
            {/* Controls */}
            <div className="space-y-6">
              <SliderInput label="Herd size" value={herdSize} onChange={setHerdSize} min={2} max={200} step={1} format={formatAnimals} />
              <SliderInput label="Annual loss rate" value={lossRate} onChange={setLossRate} min={0} max={60} step={1} format={(v) => `${v}%`} />
              <SliderInput label="Avg. income per animal" value={avgPrice} onChange={setAvgPrice} min={20000} max={1000000} step={5000} format={formatMwk} />
              <SliderInput label="Treatment cost per animal" value={treatmentCost} onChange={setTreatmentCost} min={0} max={200000} step={5000} format={formatMwk} />

              <div className="pt-4 border-t border-border space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Animals lost per year without Terra</p>
                  <p className="text-2xl font-bold text-muted-foreground font-display">{formatNumber(annualLoss)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Animals saved with Terra</p>
                  <p className="text-3xl font-bold text-primary font-display">{formatNumber(animalsSaved)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Income preserved</p>
                  <p className="text-xl font-bold text-primary font-display">{formatMwk(incomePreserved)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Net benefit after treatment</p>
                  <p className="text-xl font-bold text-foreground font-display">{formatMwk(netBenefit)}</p>
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="h-[320px] md:h-[380px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(40, 20%, 90%)" />
                  <XAxis dataKey="year" tickFormatter={(v) => `Year ${v}`} tick={{ fontSize: 12 }} stroke="hsl(150, 10%, 45%)" />
                  <YAxis tickFormatter={(v) => `${v}`} tick={{ fontSize: 12 }} stroke="hsl(150, 10%, 45%)" />
                  <Tooltip
                    formatter={(value: number, name: string) => [`${value} animals`, name === "withTerra" ? "With Terra" : "Without Terra"]}
                    labelFormatter={(l) => `Year ${l}`}
                    contentStyle={{ borderRadius: 12, border: "1px solid hsl(40, 20%, 90%)", fontSize: 13 }}
                  />
                  <Area type="monotone" dataKey="withTerra" stroke="hsl(120, 100%, 33%)" fill="hsl(120, 100%, 33%)" fillOpacity={0.3} strokeWidth={2.5} />
                  <Area type="monotone" dataKey="withoutTerra" stroke="hsl(123, 13%, 69%)" fill="hsl(123, 13%, 69%)" fillOpacity={0.25} strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <p className="text-xs text-muted-foreground/70 mt-6 text-center">
            Illustrative model for the marketing site, not real farm data. Replace these figures with your own before
            launch. Results vary by species, district, and disease; no outcome is guaranteed.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

function SliderInput({
  label,
  value,
  onChange,
  min,
  max,
  step,
  format,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
}) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm text-muted-foreground">{label}</span>
        <span className="text-sm font-semibold text-foreground">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer bg-muted accent-primary"
      />
    </div>
  );
}