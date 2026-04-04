import { useState, useMemo } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

export default function GrowthCalculator() {
  const [initial, setInitial] = useState(500);
  const [contribution, setContribution] = useState(100);
  const [frequency, setFrequency] = useState<"weekly" | "monthly">("monthly");
  const [years, setYears] = useState(20);
  const [rate, setRate] = useState(7);

  const data = useMemo(() => {
    const points = [];
    const r = rate / 100 / 12;
    const monthlyContribution = frequency === "weekly" ? contribution * 52 / 12 : contribution;
    for (let y = 0; y <= years; y++) {
      const n = y * 12;
      const fv = initial * Math.pow(1 + r, n) + monthlyContribution * ((Math.pow(1 + r, n) - 1) / r);
      const contributed = initial + monthlyContribution * n;
      points.push({
        year: y,
        total: Math.round(fv),
        contributed: Math.round(contributed),
      });
    }
    return points;
  }, [initial, contribution, frequency, years, rate]);

  const finalValue = data[data.length - 1]?.total || 0;

  const formatCurrency = (v: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(v);

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
          <h2 className="text-3xl md:text-5xl font-display text-foreground mb-4">See your money grow</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Use our compound growth calculator to see how small, consistent investments add up over time.
          </p>
        </div>

        <div className="bg-card rounded-3xl border border-border p-6 md:p-10 max-w-5xl mx-auto shadow-sm">
          <div className="grid md:grid-cols-[280px_1fr] gap-8">
            {/* Controls */}
            <div className="space-y-6">
              <SliderInput label="Initial Deposit" value={initial} onChange={setInitial} min={0} max={50000} step={100} format={formatCurrency} />
              <SliderInput label={frequency === "weekly" ? "Weekly Contribution" : "Monthly Contribution"} value={contribution} onChange={setContribution} min={0} max={2000} step={10} format={formatCurrency} />
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Contribution Frequency</span>
                  <span className="text-sm font-semibold text-foreground capitalize">{frequency}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {(["weekly", "monthly"] as const).map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setFrequency(value)}
                      className={`rounded-full border px-3 py-2 text-sm font-medium transition-colors ${
                        frequency === value
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-foreground hover:bg-secondary"
                      }`}
                    >
                      {value[0].toUpperCase() + value.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <SliderInput label="Time (Years)" value={years} onChange={setYears} min={1} max={40} step={1} format={(v) => `${v} yrs`} />
              <SliderInput label="Expected Return" value={rate} onChange={setRate} min={1} max={15} step={0.5} format={(v) => `${v}%`} />

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">Projected Value</p>
                <p className="text-3xl font-bold text-primary font-display">{formatCurrency(finalValue)}</p>
              </div>
            </div>

            {/* Chart */}
            <div className="h-[320px] md:h-[380px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="oakGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(145, 60%, 22%)" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="hsl(145, 60%, 22%)" stopOpacity={0.02} />
                    </linearGradient>
                    <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(36, 72%, 48%)" stopOpacity={0.2} />
                      <stop offset="100%" stopColor="hsl(36, 72%, 48%)" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(40, 20%, 90%)" />
                  <XAxis dataKey="year" tickFormatter={(v) => `${v}y`} tick={{ fontSize: 12 }} stroke="hsl(150, 10%, 45%)" />
                  <YAxis tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} tick={{ fontSize: 12 }} stroke="hsl(150, 10%, 45%)" />
                  <Tooltip
                    formatter={(value: number, name: string) => [formatCurrency(value), name === "total" ? "Total Value" : "Contributed"]}
                    labelFormatter={(l) => `Year ${l}`}
                    contentStyle={{ borderRadius: 12, border: "1px solid hsl(40, 20%, 90%)", fontSize: 13 }}
                  />
                  <Area type="monotone" dataKey="contributed" stroke="hsl(36, 72%, 48%)" fill="url(#goldGrad)" strokeWidth={2} />
                  <Area type="monotone" dataKey="total" stroke="hsl(145, 60%, 22%)" fill="url(#oakGrad)" strokeWidth={2.5} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
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
