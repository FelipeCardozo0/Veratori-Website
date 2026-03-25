"use client";

import { useState, useMemo } from "react";
import { useTheme } from "@/components/ui/ThemeProvider";
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Area, AreaChart, Legend
} from "recharts";
import { DollarSign, TrendingUp, Leaf, Clock, ChevronDown, ChevronUp } from "lucide-react";

/* ─── Default spreadsheet rows ─── */
interface Row {
  label: string;
  key: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  prefix?: string;
  description: string;
  color: string;
}

const DEFAULT_ROWS: Row[] = [
  {
    label: "Monthly Revenue",
    key: "revenue",
    value: 60000,
    min: 10000,
    max: 500000,
    step: 1000,
    unit: "",
    prefix: "$",
    description: "Your restaurant's average monthly gross revenue",
    color: "#7dd87a",
  },
  {
    label: "Food Cost %",
    key: "foodCost",
    value: 32,
    min: 20,
    max: 50,
    step: 1,
    unit: "%",
    prefix: "",
    description: "Current food cost as a % of revenue",
    color: "#60a5fa",
  },
  {
    label: "Current Waste %",
    key: "wastePercent",
    value: 12,
    min: 2,
    max: 30,
    step: 1,
    unit: "%",
    prefix: "",
    description: "Estimated % of food purchased that gets wasted",
    color: "#fb923c",
  },
  {
    label: "Locations",
    key: "locations",
    value: 1,
    min: 1,
    max: 50,
    step: 1,
    unit: "loc",
    prefix: "",
    description: "Number of restaurant locations",
    color: "#a78bfa",
  },
  {
    label: "Labor Hours / Week",
    key: "laborHours",
    value: 15,
    min: 2,
    max: 80,
    step: 1,
    unit: "hrs",
    prefix: "",
    description: "Hours spent on manual inventory counting per week",
    color: "#f59e0b",
  },
  {
    label: "Labor Rate / Hour",
    key: "laborRate",
    value: 18,
    min: 10,
    max: 60,
    step: 1,
    unit: "/hr",
    prefix: "$",
    description: "Average hourly rate for inventory staff",
    color: "#ec4899",
  },
];

/* ─── Custom tooltip ─── */
function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ name: string; value: number; color: string }>; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#0d1117] border border-white/10 rounded-lg px-4 py-3 text-white text-sm shadow-xl">
      <p className="font-bold mb-2 text-white/70">{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color }} className="font-semibold">
          {p.name}: ${p.value.toLocaleString()}
        </p>
      ))}
    </div>
  );
}

/* ─── Editable cell ─── */
function SpreadsheetRow({
  row,
  value,
  onChange,
  isDark,
  isExpanded,
  onToggle,
}: {
  row: Row;
  value: number;
  onChange: (key: string, val: number) => void;
  isDark: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const display = row.prefix
    ? `${row.prefix}${value.toLocaleString()}${row.unit}`
    : `${value.toLocaleString()}${row.unit}`;

  const percent = ((value - row.min) / (row.max - row.min)) * 100;

  return (
    <div
      className={`rounded-xl border transition-all duration-200 overflow-hidden ${
        isDark
          ? "bg-white/[0.03] border-white/[0.07] hover:border-white/20"
          : "bg-white border-black/[0.06] shadow-sm hover:border-black/15"
      }`}
    >
      <div
        className="flex items-center gap-4 px-4 py-3 cursor-pointer select-none"
        onClick={onToggle}
      >
        {/* Color dot */}
        <div
          className="w-2.5 h-2.5 rounded-full shrink-0"
          style={{ backgroundColor: row.color }}
        />

        {/* Label */}
        <div className="flex-1 min-w-0">
          <p className={`text-sm font-semibold truncate ${isDark ? "text-white" : "text-black"}`}>
            {row.label}
          </p>
        </div>

        {/* Current value badge */}
        <span
          className="text-sm font-bold font-mono px-3 py-1 rounded-lg shrink-0"
          style={{
            backgroundColor: row.color + "22",
            color: row.color,
          }}
        >
          {display}
        </span>

        {/* Expand toggle */}
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 shrink-0 opacity-40" />
        ) : (
          <ChevronDown className="w-4 h-4 shrink-0 opacity-40" />
        )}
      </div>

      {/* Expanded slider */}
      {isExpanded && (
        <div className={`px-4 pb-4 pt-1 ${isDark ? "border-t border-white/5" : "border-t border-black/5"}`}>
          <p className={`text-xs mb-3 ${isDark ? "text-white/40" : "text-black/40"}`}>
            {row.description}
          </p>

          {/* Slider track */}
          <div className="relative h-2 rounded-full mb-2 overflow-visible" style={{ backgroundColor: row.color + "22" }}>
            <div
              className="absolute left-0 top-0 h-full rounded-full transition-all duration-150"
              style={{ width: `${percent}%`, backgroundColor: row.color }}
            />
            <input
              type="range"
              min={row.min}
              max={row.max}
              step={row.step}
              value={value}
              onChange={(e) => onChange(row.key, Number(e.target.value))}
              className="absolute inset-0 w-full opacity-0 cursor-pointer h-full"
              style={{ height: "100%" }}
            />
            {/* Thumb indicator */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white shadow-md transition-all duration-150 pointer-events-none"
              style={{ left: `calc(${percent}% - 8px)`, backgroundColor: row.color }}
            />
          </div>

          <div className={`flex justify-between text-[10px] font-mono ${isDark ? "text-white/30" : "text-black/30"}`}>
            <span>{row.prefix}{row.min.toLocaleString()}{row.unit}</span>
            <span>{row.prefix}{row.max.toLocaleString()}{row.unit}</span>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Main component ─── */
export default function ROICalculator() {
  const { isDark } = useTheme();
  const [values, setValues] = useState<Record<string, number>>(
    Object.fromEntries(DEFAULT_ROWS.map((r) => [r.key, r.value]))
  );
  const [expandedRow, setExpandedRow] = useState<string | null>("revenue");
  const [activeChart, setActiveChart] = useState<"bar" | "area" | "line">("area");

  const handleChange = (key: string, val: number) => {
    setValues((prev) => ({ ...prev, [key]: val }));
  };

  /* ─── Derived calculations ─── */
  const calc = useMemo(() => {
    const { revenue, foodCost, wastePercent, locations, laborHours, laborRate } = values;

    const monthlyFoodSpend = revenue * (foodCost / 100);
    const currentWasteCost = monthlyFoodSpend * (wastePercent / 100);
    const wasteReduction = 0.38; // 38% reduction (Veratori benchmark)
    const wasteSaved = currentWasteCost * wasteReduction * locations;

    const laborPerMonth = laborHours * 4.33 * laborRate; // hrs/wk × weeks × rate
    const laborSaved = laborPerMonth * 0.85 * locations; // 85% reduction

    const veratoriMonthly = 249 * locations; // $249/location/mo
    const netSavings = wasteSaved + laborSaved - veratoriMonthly;
    const roi = veratoriMonthly > 0 ? ((wasteSaved + laborSaved) / veratoriMonthly) * 100 : 0;

    // Monthly projection over 12 months (cumulative net savings)
    const months = Array.from({ length: 12 }, (_, i) => {
      const m = i + 1;
      const cumRevRecovered = wasteSaved * m;
      const cumLaborSaved = laborSaved * m;
      const cumCost = veratoriMonthly * m;
      return {
        name: `Mo ${m}`,
        "Revenue Recovered": Math.round(wasteSaved),
        "Labor Saved": Math.round(laborSaved),
        "Veratori Cost": Math.round(veratoriMonthly),
        "Net Savings": Math.round(netSavings),
        Cumulative: Math.round(cumRevRecovered + cumLaborSaved - cumCost),
      };
    });

    return {
      wasteSaved: Math.round(wasteSaved),
      laborSaved: Math.round(laborSaved),
      veratoriMonthly: Math.round(veratoriMonthly),
      netSavings: Math.round(netSavings),
      roi: Math.round(roi),
      annualNet: Math.round(netSavings * 12),
      paybackDays: netSavings > 0 ? Math.round((veratoriMonthly / (netSavings / 30))) : 0,
      months,
    };
  }, [values]);

  const kpis = [
    { label: "Waste Recovered / Mo", value: `$${calc.wasteSaved.toLocaleString()}`, icon: Leaf, color: "#7dd87a" },
    { label: "Labor Saved / Mo", value: `$${calc.laborSaved.toLocaleString()}`, icon: Clock, color: "#60a5fa" },
    { label: "Net Monthly Savings", value: `$${calc.netSavings.toLocaleString()}`, icon: DollarSign, color: calc.netSavings >= 0 ? "#a78bfa" : "#ef4444" },
    { label: "Annual ROI", value: `${calc.roi}%`, icon: TrendingUp, color: "#fb923c" },
  ];

  const CHART_TABS = [
    { id: "area" as const, label: "12-Mo Projection" },
    { id: "bar" as const, label: "Monthly Breakdown" },
    { id: "line" as const, label: "Cumulative Net" },
  ];

  const chartColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.04)";

  return (
    <section className={`py-24 transition-colors duration-500 ${isDark ? "bg-[#050911]" : "bg-[#F4F6F8]"}`}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className={`inline-block text-[11px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full ${isDark ? "text-[#7dd87a] bg-[#7dd87a]/10 border border-[#7dd87a]/20" : "text-[#3a7d34] bg-[#7dd87a]/10 border border-[#7dd87a]/20"}`}>
            ROI Calculator
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold tracking-tight mb-5 ${isDark ? "text-white" : "text-black"}`}>
            See your numbers,{" "}
            <span className="text-[#7dd87a]">instantly</span>
          </h2>
          <p className={`text-lg max-w-xl mx-auto ${isDark ? "text-white/50" : "text-black/50"}`}>
            Adjust your restaurant's details and watch the savings update in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8">

          {/* ── Left: Spreadsheet ── */}
          <div className="flex flex-col gap-3">
            <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${isDark ? "text-white/30" : "text-black/30"}`}>
              Your Restaurant Data
            </p>
            {DEFAULT_ROWS.map((row) => (
              <SpreadsheetRow
                key={row.key}
                row={row}
                value={values[row.key]}
                onChange={handleChange}
                isDark={isDark}
                isExpanded={expandedRow === row.key}
                onToggle={() =>
                  setExpandedRow((prev) => (prev === row.key ? null : row.key))
                }
              />
            ))}
          </div>

          {/* ── Right: Charts + KPIs ── */}
          <div className="flex flex-col gap-6">

            {/* KPI row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {kpis.map((k, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-4 border transition-all duration-300 ${isDark ? "bg-white/[0.03] border-white/[0.07]" : "bg-white border-black/[0.06] shadow-sm"}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <k.icon className="w-4 h-4" style={{ color: k.color }} />
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? "text-white/40" : "text-black/40"}`}>
                      {k.label}
                    </span>
                  </div>
                  <p
                    className="text-xl font-bold font-mono transition-all duration-300"
                    style={{ color: k.color }}
                  >
                    {k.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Chart container */}
            <div className={`rounded-2xl border flex-1 overflow-hidden ${isDark ? "bg-white/[0.03] border-white/[0.07]" : "bg-white border-black/[0.06] shadow-sm"}`}>
              {/* Chart tabs */}
              <div className={`flex gap-1 p-3 border-b ${isDark ? "border-white/[0.07]" : "border-black/[0.06]"}`}>
                {CHART_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveChart(tab.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeChart === tab.id
                        ? "bg-[#7dd87a] text-black"
                        : isDark
                        ? "text-white/40 hover:text-white/70 hover:bg-white/5"
                        : "text-black/40 hover:text-black/70 hover:bg-black/5"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="p-4" style={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  {activeChart === "area" ? (
                    <AreaChart data={calc.months} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#7dd87a" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#7dd87a" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorLabor" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#60a5fa" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#ef4444" stopOpacity={0.2} />
                          <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke={chartColor} />
                      <XAxis dataKey="name" tick={{ fontSize: 11, fill: isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)" }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 11, fill: isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend wrapperStyle={{ fontSize: 11 }} />
                      <Area type="monotone" dataKey="Revenue Recovered" stroke="#7dd87a" strokeWidth={2} fill="url(#colorRevenue)" />
                      <Area type="monotone" dataKey="Labor Saved" stroke="#60a5fa" strokeWidth={2} fill="url(#colorLabor)" />
                      <Area type="monotone" dataKey="Veratori Cost" stroke="#ef4444" strokeWidth={2} fill="url(#colorCost)" />
                    </AreaChart>
                  ) : activeChart === "bar" ? (
                    <BarChart data={calc.months.slice(0, 6)} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={chartColor} />
                      <XAxis dataKey="name" tick={{ fontSize: 11, fill: isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)" }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 11, fill: isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend wrapperStyle={{ fontSize: 11 }} />
                      <Bar dataKey="Revenue Recovered" fill="#7dd87a" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="Labor Saved" fill="#60a5fa" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="Veratori Cost" fill="#ef4444" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  ) : (
                    <LineChart data={calc.months} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorNet" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.15} />
                          <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke={chartColor} />
                      <XAxis dataKey="name" tick={{ fontSize: 11, fill: isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)" }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 11, fill: isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend wrapperStyle={{ fontSize: 11 }} />
                      <Line type="monotone" dataKey="Cumulative" stroke="#a78bfa" strokeWidth={3} dot={{ fill: "#a78bfa", r: 4 }} activeDot={{ r: 6 }} />
                    </LineChart>
                  )}
                </ResponsiveContainer>
              </div>
            </div>

            {/* Summary bar */}
            <div className={`rounded-xl p-5 border ${isDark ? "bg-[#7dd87a]/[0.05] border-[#7dd87a]/20" : "bg-[#7dd87a]/[0.08] border-[#7dd87a]/25"}`}>
              <div className="flex flex-wrap gap-6 items-center justify-between">
                <div>
                  <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${isDark ? "text-white/40" : "text-black/40"}`}>
                    Estimated 12-Month Net Savings
                  </p>
                  <p className="text-3xl font-bold text-[#7dd87a] font-mono">
                    ${calc.annualNet.toLocaleString()}
                  </p>
                </div>
                <div className={`text-sm ${isDark ? "text-white/50" : "text-black/50"}`}>
                  Based on{" "}
                  <span className="font-bold text-[#7dd87a]">38% waste reduction</span>{" "}
                  and{" "}
                  <span className="font-bold text-[#60a5fa]">85% inventory labor savings</span>{" "}
                  — benchmarks from Veratori's early deployments.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
