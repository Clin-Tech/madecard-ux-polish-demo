"use client";
import { useState, useMemo } from "react";

export default function RewardsCalculator() {
  const [mortgage, setMortgage] = useState(2000);
  const [home, setHome] = useState(400);
  const [essentials, setEssentials] = useState(600);

  // Illustrative demo only
  const pts = useMemo(
    () => Math.round(mortgage * 2 + home * 3 + essentials * 1.5),
    [mortgage, home, essentials]
  );
  const estCashback = useMemo(() => pts / 100, [pts]);

  return (
    <div className="card-surface rounded-2xl border border-black/10 p-6 space-y-4">
      <h3 className="text-lg font-semibold">Estimate your monthly rewards</h3>
      <p className="text-sm opacity-70">
        Illustrative only. Actual rates/terms may vary.
      </p>

      <Slider
        label="Mortgage"
        value={mortgage}
        setValue={setMortgage}
        min={500}
        max={6000}
        step={50}
      />
      <Slider
        label="Home improvement"
        value={home}
        setValue={setHome}
        min={0}
        max={2000}
        step={50}
      />
      <Slider
        label="Essentials"
        value={essentials}
        setValue={setEssentials}
        min={0}
        max={2000}
        step={50}
      />

      <div className="mt-2 rounded-xl bg-white/5 p-4">
        <div className="text-sm opacity-70">Estimated points</div>
        <div className="text-2xl font-bold">{pts.toLocaleString()} pts</div>
        <div className="text-sm mt-2">≈ ${estCashback.toFixed(2)}/mo</div>
      </div>
    </div>
  );
}

function Slider({ label, value, setValue, min, max, step }) {
  return (
    <label className="block">
      <div className="flex justify-between mb-1">
        <span>
          {label}: <span className="font-semibold">${value}</span>
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(+e.target.value)}
        className="w-full accent-[var(--brand-accent)]"
      />
    </label>
  );
}
